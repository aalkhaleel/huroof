from collections import defaultdict
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile
from xml.etree import ElementTree as ET
import re


SRC = Path("questions-source.docx")
OUT = Path("questions-sorted.docx")
REPORT = Path("questions-sort-report.txt")

NS_W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
ET.register_namespace("w", NS_W)
NS = {"w": NS_W}

ARABIC_ORDER = list("أبتثجحخدذرزسشصضطظعغفقكلمنهوي")
LETTER_MAP = {
    "إ": "أ",
    "آ": "أ",
    "ا": "أ",
    "ٱ": "أ",
    "ة": "ه",
    "ى": "ي",
    "ؤ": "و",
    "ئ": "ي",
}
DESCRIPTOR_PREFIXES = [
    "سورة ",
    "غزوة ",
    "معركة ",
    "يوم ",
    "مدينة ",
    "دولة ",
    "رواية ",
    "مسجد ",
    "النبي ",
    "نبي ",
    "أبو ",
    "أبي ",
    "ابو ",
    "بن ",
    "بنو ",
    "بني ",
    "من ",
    "في ",
    "على ",
    "عن ",
]


def get_text(paragraph):
    return "".join((text.text or "") for text in paragraph.findall(".//w:t", NS)).strip()


def parse_heading(text):
    value = text.strip().strip("()").strip()
    if not value.startswith("حرف"):
        return None
    rest = value.replace("حرف", "", 1).strip()
    if not rest:
        return None
    return LETTER_MAP.get(rest[0], rest[0])


def parse_question(text):
    value = text.strip()
    index = 0
    while index < len(value) and value[index].isdigit():
        index += 1
    if index == 0:
        return None
    separator_index = index
    while separator_index < len(value) and value[separator_index].isspace():
        separator_index += 1
    if separator_index < len(value) and value[separator_index] in "-ـ":
        return value[:index], value[separator_index + 1 :].strip()
    return None


def parse_answer(text):
    value = text.strip()
    if value.startswith("✔"):
        value = value[1:].strip()
    if not value.startswith("الإجابة"):
        return None
    value = value.replace("الإجابة", "", 1).strip()
    if value.startswith(":") or value.startswith("："):
        value = value[1:].strip()
    return value


def first_group_letter(answer):
    value = answer.strip()
    value = re.sub(r'^[\s\u200f\u200e\u061c"\'“”‘’\(\)\[\]«»]+', "", value)
    if not value:
        return None

    stripped = value
    changed = True
    while changed:
        changed = False
        for prefix in DESCRIPTOR_PREFIXES:
            if stripped.startswith(prefix) and len(stripped) > len(prefix):
                stripped = stripped[len(prefix) :].strip()
                changed = True
                break

    for candidate in [stripped, value]:
        candidate = candidate.strip()
        if candidate.startswith("ال") and len(candidate) > 2:
            candidate = candidate[2:].strip()
        match = re.search(r"[ء-ي]", candidate)
        if match:
            return LETTER_MAP.get(match.group(0), match.group(0))
    return None


def add_paragraph(body, text):
    paragraph = ET.SubElement(body, f"{{{NS_W}}}p")
    run = ET.SubElement(paragraph, f"{{{NS_W}}}r")
    text_node = ET.SubElement(run, f"{{{NS_W}}}t")
    text_node.text = text


def main():
    with ZipFile(SRC) as archive:
        files = {name: archive.read(name) for name in archive.namelist()}

    root = ET.fromstring(files["word/document.xml"])
    body = root.find("w:body", NS)
    children = list(body)
    section = children[-1] if children and children[-1].tag == f"{{{NS_W}}}sectPr" else None

    paragraphs = [get_text(paragraph) for paragraph in root.findall(".//w:p", NS)]
    paragraphs = [text for text in paragraphs if text]

    items = []
    current_group = None
    pending = None

    for text in paragraphs:
        heading = parse_heading(text)
        if heading:
            if pending:
                items.append(pending)
                pending = None
            current_group = heading
            continue

        question = parse_question(text)
        if question:
            if pending:
                items.append(pending)
            pending = {
                "source_group": current_group,
                "number": question[0],
                "question": question[1],
                "answer": "",
            }
            continue

        answer = parse_answer(text)
        if answer is not None and pending:
            pending["answer"] = answer
            items.append(pending)
            pending = None
            continue

        if pending:
            pending["question"] += " " + text

    if pending:
        items.append(pending)

    by_letter = defaultdict(list)
    needs_review = []
    for item in items:
        letter = first_group_letter(item["answer"])
        item["target_group"] = letter
        if letter in ARABIC_ORDER:
            by_letter[letter].append(item)
        else:
            needs_review.append(item)

    for child in list(body):
        body.remove(child)

    add_paragraph(body, "أسئلة مسابقة الحروف - نسخة مرتبة")
    add_paragraph(
        body,
        "تم ترتيب الأسئلة حسب أول حرف فعلي في الإجابة، مع تجاهل (ال) وبعض الكلمات الوصفية مثل: سورة، غزوة، مسجد.",
    )

    summary = []
    for letter in ARABIC_ORDER:
        group_items = by_letter.get(letter, [])
        if not group_items:
            continue
        add_paragraph(body, f"( حرف {letter} )")
        for index, item in enumerate(group_items, 1):
            add_paragraph(body, f"{index}- {item['question']}")
            add_paragraph(body, f"✔ الإجابة: {item['answer']}")
            if item["source_group"] != letter:
                summary.append(
                    f"نُقل: {item['answer']} | من حرف {item['source_group']} إلى حرف {letter} | {item['question']}"
                )

    if needs_review:
        add_paragraph(body, "( يحتاج مراجعة )")
        for index, item in enumerate(needs_review, 1):
            add_paragraph(body, f"{index}- {item['question']}")
            add_paragraph(body, f"✔ الإجابة: {item['answer']}")
            summary.append(
                f"مراجعة: {item['answer']} | من حرف {item['source_group']} | {item['question']}"
            )

    if section is not None:
        body.append(section)

    files["word/document.xml"] = ET.tostring(root, encoding="utf-8", xml_declaration=True)
    with ZipFile(OUT, "w", ZIP_DEFLATED) as archive:
        for name, data in files.items():
            archive.writestr(name, data)

    report_lines = [
        f"عدد الأسئلة المقروءة: {len(items)}",
        f"عدد المجموعات الناتجة: {sum(1 for letter in ARABIC_ORDER if by_letter.get(letter))}",
        f"عدد الأسئلة التي تحتاج مراجعة: {len(needs_review)}",
        "",
        "توزيع الأسئلة بعد الترتيب:",
    ]
    for letter in ARABIC_ORDER:
        if by_letter.get(letter):
            report_lines.append(f"حرف {letter}: {len(by_letter[letter])}")
    report_lines += ["", "ملاحظات النقل/المراجعة:"]
    report_lines += summary if summary else ["لا توجد ملاحظات."]
    REPORT.write_text("\n".join(report_lines), encoding="utf-8")

    print(f"items {len(items)}")
    print(f"out {OUT.resolve()}")
    print(f"report {REPORT.resolve()}")
    print(f"review {len(needs_review)}")


if __name__ == "__main__":
    main()
