from __future__ import annotations

import html
import zipfile
from pathlib import Path


OUTPUT = Path("بنك_أسئلة_مسابقة_الحروف.docx")

LETTERS = [
    "أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص",
    "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "هـ", "و", "ي",
]

CATEGORIES = ["اقتصاد", "سياسة", "رياضة", "دين"]
LEVELS = ["بسيط", "متوسط", "عالي"]

QUESTION_TEMPLATES = {
    "اقتصاد": {
        "بسيط": "ما مصطلح اقتصادي يبدأ بحرف ({letter}) ويرتبط بالمال أو السوق أو التجارة؟",
        "متوسط": "ما مفهوم في الاقتصاد يبدأ بحرف ({letter}) ويستخدم في تحليل الأعمال أو الموارد؟",
        "عالي": "ما مصطلح اقتصادي متقدم يبدأ بحرف ({letter}) يمكن أن يظهر في نقاشات المال والاستثمار؟",
    },
    "سياسة": {
        "بسيط": "ما مصطلح سياسي يبدأ بحرف ({letter}) ويرتبط بالحكم أو الدولة؟",
        "متوسط": "ما مفهوم سياسي يبدأ بحرف ({letter}) يستخدم في الأنظمة أو العلاقات العامة؟",
        "عالي": "ما تعبير سياسي متقدم يبدأ بحرف ({letter}) يرتبط بالسلطة أو القرار أو المؤسسات؟",
    },
    "رياضة": {
        "بسيط": "ما كلمة رياضية تبدأ بحرف ({letter}) وتستخدم في المباريات أو المنافسات؟",
        "متوسط": "ما مصطلح رياضي يبدأ بحرف ({letter}) يرتبط بالأداء أو قوانين اللعب؟",
        "عالي": "ما تعبير رياضي أكثر تخصصا يبدأ بحرف ({letter}) ويظهر في تحليل المنافسات؟",
    },
    "دين": {
        "بسيط": "ما كلمة دينية تبدأ بحرف ({letter}) وترتبط بالعبادة أو الأخلاق؟",
        "متوسط": "ما مصطلح ديني يبدأ بحرف ({letter}) يستخدم في الفقه أو السيرة أو القرآن؟",
        "عالي": "ما مفهوم ديني أعمق يبدأ بحرف ({letter}) يرتبط بالعقيدة أو الأحكام أو المعاني الشرعية؟",
    },
}

BANKS = {
    "أ": "أسهم، أصول، استثمار، احتكار، إيرادات، انتخابات، ائتلاف، أيديولوجيا، أمين عام، اعتراف، ألعاب أولمبية، أهداف، أندية، اتحاد رياضي، أخطاء، أذان، إيمان، إحسان، آية، أنبياء",
    "ب": "بورصة، بنك، بضائع، بترول، بطالة، برلمان، بروتوكول، بيان، بلدية، بعثة، بطولة، بدلاء، بداية، بطاقة صفراء، بدني، بسملة، بركة، بلوغ، بلال، بينة",
    "ت": "تضخم، تجارة، تمويل، تعرفة، تكلفة، تصويت، تحالف، ترشيح، تشريع، تفاوض، تسلل، تمريرة، تدريب، تعادل، تتويج، تلاوة، توحيد، تقوى، تيمم، تراويح",
    "ث": "ثروة، ثمن، ثابت، ثقة، ثروات طبيعية، ثورة، ثقة برلمانية، ثنائية حزبية، ثغرة قانونية، ثوابت وطنية، ثلاثية، ثواني، ثبات دفاعي، ثقل بدني، ثأر رياضي، ثواب، ثناء، ثمود، ثلث، ثقة بالله",
    "ج": "جمارك، جدوى، جملة، جباية، جنيه، جمهورية، جلسة، جبهة، جواز، جيش، جولة، جمهور، جائزة، جناح، جمباز، جنة، جماعة، جهاد، جمعة، جبريل",
    "ح": "حسابات، حوافز، حصة سوقية، حوالة، حماية مستهلك، حكومة، حزب، حصانة، حقوق، حظر، حكم، حارس، حلبة، حصان، حسم، حج، حديث، حلال، حرمة، حسنات",
    "خ": "خصخصة، خسارة، خطة مالية، خزانة، خدمة، خلاف، خطاب، خريطة سياسية، خلية أزمة، خيار استراتيجي، خسارة مباراة، خروج، خطة لعب، خطأ، خماسي، خشوع، خاتم، خليل، خلافة، خير",
    "د": "دينار، دخل، دين، دفعة، دائن، دستور، دولة، دبلوماسية، دائرة انتخابية، ديوان، دوري، دفاع، دراجة، دكة بدلاء، ديربي، دعاء، دنيا، دليل، داود، درهم",
    "ذ": "ذهب، ذمة مالية، ذمم مدينة، ذروة تضخم، ذخيرة نقدية، ذريعة سياسية، ذراع سياسي، ذمة دستورية، ذاكرة وطنية، ذهاب وإياب، ذهاب، ذراع، ذروة الأداء، ذهن رياضي، ذهبي، ذكر، ذنب، ذرية، ذبح، ذل",
    "ر": "ربح، رأس مال، ركود، رسوم، رصيد، رئيس، رقابة، رأي عام، رئاسة، رعية، رمية، ركلة، رياضة، رالي، رقم قياسي، ركوع، رمضان، رسول، رحمة، ربا",
    "ز": "زكاة مال، زيادة، زبون، زراعة، زمام مالي، زعيم، زمالة سياسية، زيارة رسمية، زخم انتخابي، زعزعة، زاوية، زحلقة، زميل، زعامة فريق، زمن إضافي، زكاة، زهد، زبور، زمزم، زوال",
    "س": "سوق، سندات، سعر، سيولة، سلع، سيادة، سفارة، سياسة، سلطة، سلام، سباق، سباحة، سجل، سلة، سرعة، سجود، سنة، سورة، سيرة، صدقة",
    "ش": "شركة، شيك، شراكة، شحن، شح، شعب، شورى، شرعية، شؤون خارجية، شفافية، شوط، شباك، شارة، شطرنج، شباك التذاكر، شهادة، شريعة، شفاعة، شكر، شهر رمضان",
    "ص": "صادرات، صفقة، صكوك، صندوق، صناعة، صلاحيات، صراع، صحافة، صلح، صف سياسي، صافرة، صدارة، صالة، صعود، صانع ألعاب، صلاة، صوم، صحابة، صدق، صراط",
    "ض": "ضرائب، ضمان، ضريبة، ضوابط، ضخ مالي، ضغط سياسي، ضمانات، ضمير وطني، ضوابط دستورية، ضفة، ضربة جزاء، ضربات ترجيح، ضربة إرسال، ضغط دفاعي، ضياع فرصة، ضحى، ضلال، ضمير، ضيف الله، ضراعة",
    "ط": "طلب، طاقة، طباعة نقدية، طرف تجاري، طموح استثماري، طاغية، طاولة مفاوضات، طابع رسمي، طريق دبلوماسي، طعن انتخابي، طائرة، طواف، طاقم، طرد، طابع رياضي، طهارة، طاعة، طلاق، طمأنينة، طور سيناء",
    "ظ": "ظرف اقتصادي، ظاهرة سوقية، ظل مالي، ظهور أزمة، ظن استثماري، ظهير سياسي، ظرف سياسي، ظهور مرشح، ظلم سياسي، ظاهرة اجتماعية، ظهير أيمن، ظهير أيسر، ظفر، ظل دفاعي، ظهور بديل، ظلم، ظلال، ظاهر النص، ظن، ظهير",
    "ع": "عملة، عرض، عجز، عائد، عقار، عاصمة، عدالة، علاقات دولية، عهد، عقوبات، عداء، عارضة، لاعب؟، عقوبة، عرضية، عبادة، عقيدة، عفو، عائشة، عرفات",
    "غ": "غلاء، غرامة، غلة، غطاء نقدي، غش تجاري، غالبية، غرفة برلمان، غاية سياسية، غياب دستوري، غزو، غياب، غوص، غلبة، غطاء دفاعي، غارة هجومية، غفران، غيب، غار حراء، غسل، غزوة",
    "ف": "فائدة، فائض، فاتورة، فقر، فرصة، فيدرالية، فصيل، فساد، فصل سلطات، فتوى سياسية، فريق، فوز، فارق أهداف، فاول، فنية، فرض، فقه، فجر، فطرة، فريضة",
    "ق": "قرض، قيمة، قسط، قائمة مالية، قطاع، قانون، قمة، قائد، قرار، قنصلية، قفز، قدم، قوس، قميص، قاعدة لعب، قرآن، قيام، قبلة، قضاء، قدر",
    "ك": "كساد، كلفة، كفاءة، كمبيالة، كيان اقتصادي، كتلة نيابية، كيان سياسي، كرسي، كابينة اقتراع، كرامة وطنية، كرة، كأس، كابتن، كاراتيه، كسر تعادل، كعبة، كفارة، كرامة، كتاب، كليم الله",
    "ل": "ليرة، لوجستيات، لائحة أسعار، لامركزية مالية، لافتة تجارية، لجنة، لائحة، لقاء رسمي، لواء، لجوء، لاعب، لياقة، لعبة، لقب، لمسة، لبيك، ليلة القدر، لقمان، لطف، لوح محفوظ",
    "م": "مال، ميزانية، مصرف، مشروع، مزاد، ملكية، مجلس، مرسوم، معارضة، مواطنة، ملعب، مباراة، مدرب، مهاجم، ميدالية، مسجد، محراب، موعظة، ملائكة، ميثاق",
    "ن": "نمو، نقد، نفط، نفقات، نسبة، نظام، نائب، نزاع، نقابة، نفوذ، نتيجة، نادي، نزال، نقطة، نهائي، نية، نبي، نافلة، نور، نسك",
    "هـ": "هامش ربح، هبوط سعر، هدر، هيكلة، هبة، هيئة، هدنة، هرم السلطة، هوية وطنية، هجرة سياسية، هدف، هجوم، هزيمة، هاتريك، هدوء لعب، هدى، هجرة، هارون، هلال، هداية",
    "و": "وفرة، وديعة، واردات، وكالة، وساطة مالية، وزارة، وطن، ولاية، وثيقة، وفد، ودي، وابل أهداف، وزن، وقت بدل ضائع، واثب، وضوء، وتر، وحي، ولي، ورع",
    "ي": "ين، يورو، يرقة مالية، يومية، يسر مالي، يمين دستورية، يافطة انتخابية، يقظة سياسية، يأس سياسي، يوبيل وطني، ياردة، يسار الملعب، يخت، يوجا رياضية، يد، يس، يقين، يوم القيامة، يوسف، يونس",
}


def escape(text: object) -> str:
    return html.escape(str(text), quote=True)


def paragraph(text: str, style: str | None = None) -> str:
    style_xml = f'<w:pPr><w:pStyle w:val="{style}"/></w:pPr>' if style else ""
    return (
        "<w:p>"
        f"{style_xml}"
        "<w:r><w:rPr><w:rtl/></w:rPr>"
        f"<w:t>{escape(text)}</w:t>"
        "</w:r></w:p>"
    )


def cell(text: str) -> str:
    return (
        "<w:tc><w:tcPr><w:textDirection w:val=\"rlTb\"/></w:tcPr>"
        + paragraph(text)
        + "</w:tc>"
    )


def row(values: list[str]) -> str:
    return "<w:tr>" + "".join(cell(value) for value in values) + "</w:tr>"


def make_question(letter: str, category: str, level: str, answer: str) -> str:
    base = QUESTION_TEMPLATES[category][level].format(letter=letter)
    return f"{base} الإجابة المقترحة في هذا السؤال: اذكر الكلمة المناسبة دون شرح."


def make_document() -> str:
    body: list[str] = [
        paragraph("بنك أسئلة مسابقة الحروف", "Title"),
        paragraph("560 سؤالا: 28 حرفا، لكل حرف 20 سؤالا موزعة على الاقتصاد والسياسة والرياضة والدين، وبمستويات بسيطة ومتوسطة وعالية."),
        paragraph("ملاحظة: عمود الإجابة مخصص للمقدم ويمكن حذفه عند طباعة نسخة للمتسابقين."),
    ]

    for letter in LETTERS:
        answers = [item.strip() for item in BANKS[letter].split("،")]
        if len(answers) != 20:
            raise ValueError(f"الحرف {letter} يحتوي على {len(answers)} إجابة وليس 20")

        body.append(paragraph(f"حرف {letter}", "Heading1"))
        rows = [
            row(["م", "الحرف", "المجال", "المستوى", "السؤال", "الإجابة"]),
        ]

        for idx, answer in enumerate(answers, start=1):
            category = CATEGORIES[(idx - 1) % len(CATEGORIES)]
            level = LEVELS[(idx - 1) % len(LEVELS)]
            question = make_question(letter, category, level, answer)
            rows.append(row([str(idx), letter, category, level, question, answer]))

        body.append("<w:tbl>" + "".join(rows) + "</w:tbl>")

    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        '<w:body>'
        + "".join(body)
        + '<w:sectPr><w:bidi/><w:pgSz w:w="16838" w:h="11906" w:orient="landscape"/>'
        '<w:pgMar w:top="720" w:right="720" w:bottom="720" w:left="720"/></w:sectPr>'
        "</w:body></w:document>"
    )


def write_docx(path: Path) -> None:
    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>"""
    rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>"""
    styles = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:styleId="Normal"><w:name w:val="Normal"/><w:pPr><w:bidi/></w:pPr><w:rPr><w:rtl/><w:sz w:val="22"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:pPr><w:bidi/><w:jc w:val="center"/></w:pPr><w:rPr><w:rtl/><w:b/><w:sz w:val="36"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:pPr><w:bidi/></w:pPr><w:rPr><w:rtl/><w:b/><w:sz w:val="30"/></w:rPr></w:style>
</w:styles>"""
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as docx:
        docx.writestr("[Content_Types].xml", content_types)
        docx.writestr("_rels/.rels", rels)
        docx.writestr("word/document.xml", make_document())
        docx.writestr("word/styles.xml", styles)


if __name__ == "__main__":
    write_docx(OUTPUT)
    print(str(OUTPUT.resolve()).encode("unicode_escape").decode("ascii"))
