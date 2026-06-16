from __future__ import annotations

from pathlib import Path


SCRIPT = Path("script.js")
ROWS = Path("imported_questions_rows.txt")

START = "/* BEGIN IMPORTED DOCX QUESTIONS */"
END = "/* END IMPORTED DOCX QUESTIONS */"


def main() -> None:
    script = SCRIPT.read_text(encoding="utf-8")
    rows = ROWS.read_text(encoding="utf-8").strip()

    block = f"""{START}
const IMPORTED_QUESTION_ROWS = `
{rows}
`;

function parseImportedQuestionRows(rows) {{
  return rows.trim().split("\\n").reduce((bank, row) => {{
    const [letter, subject, question, answer] = row.split("|").map((value) => value?.trim() || "");

    if (!letter || !question || !answer) {{
      return bank;
    }}

    (bank[letter] ||= []).push({{
      subject: subject || "من ملف الأسئلة",
      question,
      answer,
    }});
    return bank;
  }}, {{}});
}}

const IMPORTED_QUESTION_BANK = parseImportedQuestionRows(IMPORTED_QUESTION_ROWS);

function mergeImportedQuestions(baseLetters) {{
  const merged = baseLetters.map((item) => ({{
    ...item,
    questions: [
      ...(IMPORTED_QUESTION_BANK[item.letter] || []),
      ...item.questions,
    ],
  }}));
  const existingLetters = new Set(merged.map((item) => item.letter));

  Object.entries(IMPORTED_QUESTION_BANK).forEach(([letter, questions]) => {{
    if (!existingLetters.has(letter)) {{
      merged.push({{ letter, questions }});
    }}
  }});

  return merged;
}}
{END}
"""

    if START in script and END in script:
      before, rest = script.split(START, 1)
      _, after = rest.split(END, 1)
      script = before + block + after
    else:
      marker = "const TOTAL_QUESTION_COUNT = 4000;"
      script = script.replace(marker, block + "\n" + marker, 1)

    old = "const LETTERS = buildQuestionBank(BASE_LETTERS, TOTAL_QUESTION_COUNT);"
    new = "const LETTERS = buildQuestionBank(mergeImportedQuestions(BASE_LETTERS), TOTAL_QUESTION_COUNT);"
    script = script.replace(old, new, 1)

    SCRIPT.write_text(script, encoding="utf-8")


if __name__ == "__main__":
    main()
