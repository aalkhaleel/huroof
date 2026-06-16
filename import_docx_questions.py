from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

from docx import Document


SOURCE = Path(r"C:\Users\aalkhaleel\Desktop\مسابقة_الحرو11ف.docx")
OUTPUT_JSON = Path("imported_questions.json")
OUTPUT_ROWS = Path("imported_questions_rows.txt")


def normalize_text(text: str) -> str:
    return re.sub(r"\s+", " ", text.replace("\xa0", " ")).strip()


def extract_items(path: Path) -> list[dict[str, str]]:
    document = Document(path)
    paragraphs = []
    for paragraph in document.paragraphs:
        for line in paragraph.text.splitlines():
            clean = normalize_text(line)
            if clean:
                paragraphs.append(clean)
    items: list[dict[str, str]] = []
    current_letter = ""
    pending_question = ""

    for text in paragraphs:
        letter_match = re.search(r"حرف\s+([^) ]+)", text)
        if letter_match:
            current_letter = letter_match.group(1).strip()[0]
            pending_question = ""
            continue

        if text.startswith(("الإجابة", "الاجابة")):
            answer = re.sub(r"^(?:الإجابة|الاجابة)\s*[:：]?\s*", "", text).strip()
            if current_letter and pending_question and answer:
                items.append({
                    "letter": current_letter,
                    "subject": "من ملف الأسئلة",
                    "question": pending_question,
                    "answer": answer,
                })
            pending_question = ""
            continue

        question = re.sub(r"^\s*\d+\s*[-–.)]?\s*", "", text).strip()
        question = re.sub(r"^\s*[-–]\s*", "", question).strip()
        if current_letter and question:
            pending_question = question

    return items


def make_rows(items: list[dict[str, str]]) -> str:
    rows = []
    for item in items:
        values = [
            item["letter"],
            item["subject"],
            item["question"],
            item["answer"],
        ]
        values = [value.replace("|", " ").replace("`", "'").replace("${", "{") for value in values]
        rows.append("|".join(values))
    return "\n".join(rows)


if __name__ == "__main__":
    questions = extract_items(SOURCE)
    OUTPUT_JSON.write_text(json.dumps(questions, ensure_ascii=False, indent=2), encoding="utf-8")
    OUTPUT_ROWS.write_text(make_rows(questions), encoding="utf-8")
    counts = Counter(item["letter"] for item in questions)
    print(f"questions={len(questions)}")
    print(str(dict(sorted(counts.items()))).encode("unicode_escape").decode("ascii"))
