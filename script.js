const ROWS = 5;
const COLS = 5;
const BOARD_CELLS = ROWS * COLS;
const ROOM_CODE_LENGTH = 6;
const QUESTION_SECONDS = 30;
const ANSWER_SECONDS = 30;
const QUESTION_LEVELS = [
  { key: "simple", label: "بسيط" },
  { key: "medium", label: "متوسط" },
  { key: "aboveMedium", label: "فوق المتوسط" },
];

const BOOK_LETTERS = [
  {
    "letter": "ن",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "ما هي السورة التي يوجد بها بسملتين في القرآن الكريم ؟",
        "answer": "النمل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المرض الذي يدعى بداء الملوك ؟",
        "answer": "النقرس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الحشرة التي تكلمت في القرآن و تبسم نبي الله سليمان عليه السلام من قولها ؟",
        "answer": "النملة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو المثل و النظير ؟",
        "answer": "الند",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الحشرة التي لها خمسة عيون ؟",
        "answer": "النحلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي الشيء الذي يميز العبادة عن العادة وهي عمل قلبي ؟",
        "answer": "النية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما معنى اسم جعفر ؟",
        "answer": "النهر الصغير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "آية اشتملت على خمسة وعشرين ضمير لجماعة الإناث في أي سورة تقع ؟",
        "answer": "النور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الحطمة ؟",
        "answer": "النار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الشيء الصافي من الشوائب ؟",
        "answer": "النقي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من المقصود بهذه الآية : ( فبهت الذي كفر ) ؟",
        "answer": "النمرود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى رفع الصوت بالبكاء ؟",
        "answer": "النياحة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو حفرة تحت الأرض له مدخل و مخرج ممهدة ليسير بها الإنسان و الحيوان و السيارات و غيرها ؟",
        "answer": "النفق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الدابة التي أرسلت إلى ثمود ؟",
        "answer": "ناقة الله",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إذا شرب مات وإذا أكل عاش ؟",
        "answer": "النار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي صفة نقل الكلام من شخص إلى آخر على جهة الإفساد ؟",
        "answer": "النميمة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو أول من بعث من الرسل إلى الناس ؟",
        "answer": "نوح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "إحدى الدول الاسكندنافية ؟",
        "answer": "النرويج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو لقب صلاح الدين الأيوبي ؟",
        "answer": "الناصر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حالة طبيعية تتعطل معها القوى بسبب ترقي البخارات إلى الدماغ ؟",
        "answer": "النوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أول فتنة بني إسرائيل ؟",
        "answer": "الناقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي عاصمة كينيا ؟",
        "answer": "نيروبي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "سورة في القرآن الكريم لكثرة نعم الله فيها على عباده سميت بالنعم فما هي هذه السورة ؟",
        "answer": "النحل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى صوت الدجاجة ؟",
        "answer": "نقنقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "على أي حيوان أطلق العرب هذه الألقاب : أم حائل - أم مسعود -بنت الفحل ؟",
        "answer": "الناقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي عروق الفؤاد و القلب ؟",
        "answer": "نياط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أداة استعملها النصارى قديما للإعلان عن صلاتهم ؟",
        "answer": "الناقوس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الاسم المعرب لجهاز الفاكس ؟",
        "answer": "ناسوخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو عصيان المرأة و ترفعها على زوجها ؟",
        "answer": "نشوز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أكبر دولة إسلامية في أفريقيا ؟",
        "answer": "نيجيريا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الظفر وإدراك الغاية ؟",
        "answer": "النجاح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الصور الذي سينفخ فيه إسرافيل ؟",
        "answer": "الناقور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من قائد جيش المسلمين في معركة نهاوند ؟",
        "answer": "النعمان بن مقرن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي أصغر وحدة لقياس الوزن عرفت حتى الآن ؟",
        "answer": "النانو جرام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بمعنى برك الجمل و قعد ؟",
        "answer": "ناخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مسمى الحركة التي تزعمها الألمان في الحرب العالمية الثانية ؟",
        "answer": "النازية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في أي مدينة يوجد تمثال الحرية ؟",
        "answer": "نيويورك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نقط بيض أو سود و بقع تقع في الجلد وتخالف لونه ؟",
        "answer": "نمش",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هم الذين عرفوا قديما بكثرة الزهد و الابتعاد عن الدنيا و الانهماك بالعبادة ؟",
        "answer": "النساك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي من أعظم ممالك الأرض دقة وانتظاماً ؟",
        "answer": "النحل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى طعام القادم من سفره ؟",
        "answer": "النقيعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى شعر مقدمة الرأس ؟",
        "answer": "الناصية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من مكونات مادة السيجارة ؟",
        "answer": "نيكوتين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الزيادة في ثمن السلعة ولا يقصد به الشراء ولكن لخداع المشتري ؟",
        "answer": "النجش",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الإبل طويلة العنق و هو اسم مؤنث ؟",
        "answer": "نجود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "قائد فرنسي هزم في بلدة \" واترلو \" أطلق عليه لقب رجل الأقدار ؟",
        "answer": "نابليون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الرئيس الأمريكي الذي استقال من منصبه بسبب فضيحة سميت بفضيحة ( واترغيت ) في السبعينيات ؟",
        "answer": "نيكسون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من المعادن ذات الوسط الموصل للكهرباء ؟",
        "answer": "النحاس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم أجنبي لسائل هلامي نفطي ملتهب، يستعمل في إعداد القنابل المحرقة، محرم دوليًا وكان يستخدم أيام الحرب العالمية الثانية",
        "answer": "نابالم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى إلزام النفس بعبادة ما فوق العبادة المفروضة؟",
        "answer": "نذر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم السويدي الذي اخترع مادة الديناميت وتأسست باِسمه الجوائز العالمية الشهيرة؟",
        "answer": "نوبل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة بمعنى الريح الخفيفة والطيبة",
        "answer": "نسيم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو المعدن الأكثر شيوعًا في صناعة الأسلاك الكهربائية؟",
        "answer": "النحاس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى صوت الغراب؟",
        "answer": "نعيق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المنطقة التاريخية والزراعية التي تقع في الجزء الجنوبي الغربي من السعودية؟",
        "answer": "نجران",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المدينة اليابانية الثانية التي استهدفتها الولايات المتحدة بالقنبلة الذرية في الحرب العالمية الثانية؟",
        "answer": "ناكازاكي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الدولة التي عاصمتها أبوجا؟",
        "answer": "نيجيريا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو العضو المسؤول عن إنتاج خلايا الدم، مما يجعله حيويًا للمناعة ونقل الأكسجين وتجلّط الدم؟",
        "answer": "نخاع العظم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حرفة يدوية تعتمد على تشكيل الخشب وتوصيله، لإنتاج القطع الأساسية في المنزل كالأبواب والخزائن والكراسي",
        "answer": "نجارة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح العسكري الذي يُعبر عن الهجمات أو الإصابات التي تلحق بالجنود عن طريق الخطأ من قِبل قواتهم أو حلفائهم؟",
        "answer": "النيران الصديقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الكلمة الّتي تعد مرادفًا للشؤم، أو سوء الحظ، أو نقيض السعد؟",
        "answer": "نحس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الذي يطلق على تدرج المواليد وتتابع الآباء والأجداد بدءاً من الجد الأكبر؟",
        "answer": "النسب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تدل على كل شيء يحرم تناوله ولا تصح الصلاة حال وجوده على البدن",
        "answer": "النجاسة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أسطورة التنس الإسباني وصاحب الرقم القياسي في بطولات فرنسا المفتوحة",
        "answer": "نادال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الناقة إذا كانت طويلة العنق في لغة العرب؟",
        "answer": "نجود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم فن تشكيل المجسمات باستخدام مواد مثل الحجر أو الخشب أو الطين؟",
        "answer": "نحت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على خفة الحركة والحيوية والقوة على العمل؟",
        "answer": "نشاط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العبادة التي يؤديها المسلم تطوعاً وليست فرضاً؟",
        "answer": "نافلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "جسم معدني مجوف في داخله لسان يصطدم بحوافه كلما قرع فيحدث له صوت",
        "answer": "ناقوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الغدة التي تُعرف بسيدة الغدد؟",
        "answer": "الغدة النخامية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "منطقة تاريخية تقع في وسط المملكة العربية السعودية وتُعرف بأنها مهد الكثير من العادات والتقاليد في السعودية ؟",
        "answer": "نجد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الشرعي الذي يعني رفع الحكم الشرعي بدليل شرعي متأخر؟",
        "answer": "نسخ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المثل الشعبي الشهير الذي يُضرب لتفضيل الأهل والأقارب والتحمل منهم على الغرباء والإحسان الصادر عنهم؟",
        "answer": "نار القريب ولا جنة الغريب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الطبق الوطني الشعبي الشهير في دولة باكستان ويتكون من اللحم المطهو ببطء؟",
        "answer": "النيهاري",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما السورة التي ذُكرت فيها البسملة مرتين؟",
        "answer": "سورة النمل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تُطلق على عروق وشرايين القلب التي إذا انقطعت مات الإنسان؟",
        "answer": "نياط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة وردت في القرآن الكريم بمعنى التعب والمشقة والعناء",
        "answer": "النَصب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الظاهرة المناخية العالمية التي تتمثل في دفء وارتفاع غير طبيعي لدرجات حرارة المياه السطحية في شرق المحيط الهادئ الاستوائي؟",
        "answer": "نينيو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "شعيرة في الجاهلية يتم فيها تأخير حرمة الأشهر الحرم بهدف إباحة القتال فيها",
        "answer": "النسيء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الصحابية الجليلة (رضي الله عنها) البطلة التي قُتل ابنها حبيب بن زيد على يد مسيلمة الكذاب، وشاركت بنفسها في معركة اليمامة لتثأر منه؟",
        "answer": "نسيبة بنت كعب (رضي الله عنها)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي السورة القرآنية الكريمة التي تنتهي جميع آياتها بحرف السين؟",
        "answer": "الناس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الجهة القضائية المسؤولة عن تحريك الدعاوى الجنائية والتحقيق فيها؟",
        "answer": "النيابة العامة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى صوت الفيل؟",
        "answer": "نهيم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى صوت الدجاجة؟",
        "answer": "نقنقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صبغة زرقاء طبيعية عُرفت بالهند منذ القدم ثم أُدخلت إلى أوروبا في منتصف القرن السادس عشر",
        "answer": "النيلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو القائد العسكري والزعيم الفرنسي الذي قاد حملات توسعية ضخمة في أوروبا وأسس الإمبراطورية الفرنسية الأولى؟",
        "answer": "نابليون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي الصحابية الجليلة الشجاعة التي شاركت في الدفاع عن النبي ﷺ في غزوة أحد، وشهدت حروب الردة واشتهرت ببراعتها في القتال والرمي؟",
        "answer": "نسيبة بنت كعب (رضي الله عنها)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المعركة التي وقعت في عهد عمر بن الخطاب (رضي الله عنه) وسُميت بـ \"فتح الفتوح\" لكونها أنهت دولة الفرس؟",
        "answer": "نهاوند",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم أكبر دولة من حيث عدد السكان في أفريقيا؟",
        "answer": "نيجيريا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما عاصمة موريتانيا؟",
        "answer": "نواكشوط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكائن الذي ورد في القرآن أنه أنذر قومه، وليس من الجن ولا الإنس؟",
        "answer": "النملة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي الوحدة الّتي يُقاس فيها الارتفاع والانخفاض في سوق الأسهم السعودي؟",
        "answer": "النقطة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة الوحيدة في العالم التي لا يتخذ علمها الوطني شكل المستطيل أو المربع؟",
        "answer": "نيبال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لقب يطلق على ملوك الحبشة قديمًا؟",
        "answer": "النجاشي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أكمل الحديث الشريف السائر مسرى الأمثال: \"ليسَ الغِنى عن كثرةِ العَرَض، ولكنَّ الغِنى غِنى ____\"؟",
        "answer": "النفس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قطرات ماء تتكون على الأسطح النباتية والأرضية نتيجة تكاثف بخار الماء في الجو",
        "answer": "الندى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الجسيم الذي لا شحنة له في نواة الذرة؟",
        "answer": "النيوترون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الوصف اللغوي الذي يُطلق على الشيء الخالي من الشوائب والخلط؟",
        "answer": "نقي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "طريق يشق الأرض أو البحر، ويربط بين نقطتين لتسهيل النقل والمواصلات",
        "answer": "النفق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم البحيرة الأفريقية الشهيرة التي تتغير ألوانها وتحوّل أجساد الحيوانات الميتة إلى ما يشبه الحجر؟",
        "answer": "بحيرة ناترون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يشير إلى الفئة المتميزة من مجموعة ما؟",
        "answer": "نخبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم التفسير العلمي الشامل المدعوم بالأدلة التجريبية؟",
        "answer": "نظرية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم العلامة في السماء التي تدل على اتجاه الشمال وتُستخدم في الملاحة منذ العصور القديمة؟",
        "answer": "النجم القطبي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المورد الطبيعي الذي يتكون عبر ملايين السنين من تحلل الكائنات الحية تحت الأرض؟",
        "answer": "نفط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حرفة بشرية عريقة، تعتمد على تشابك مجموعتي الخيوط مع بعضها وفق زاوية قائمة لإنتاج الأقمشة والسجاد والخيام",
        "answer": "حرفة النسج أو النسيج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مصطلح علمي بمعنى إزالة اللون من الخلايا بالعوامل الطبيعية أو التجريبية، وباللغة بمعنى خلع بقوة",
        "answer": "نزع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو أول من هبط على سطح القمر؟",
        "answer": "نيل أرمسترونغ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الطائر الجارح القوي ذو البصر الحاد ويُعد رمزاً للقوة والشموخ؟",
        "answer": "نسر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة البديلة التي حلت محل لفظ \"قانون\" في الوثائق الرسمية السعودية؟",
        "answer": "نظام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو العلم الذي يدرس قواعد تركيب الجملة والإعراب في اللغة العربية؟",
        "answer": "النحو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اختصار اسم حلف شمال الأطلسي؟",
        "answer": "ناتو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة جمهورية كينيا؟",
        "answer": "نيروبي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وحدة فيزيائية تستخدم لقياس القوة والأثقال، والتي سُميت تكريماً للعالم الذي اكتشف قوانين الحركة ووضع أسسها",
        "answer": "نيوتن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد المسلم الذي قاد جيوش المسلمين لتحقيق نصر حاسم في معركة نهاوند التاريخية؟",
        "answer": "النعمان ابن مقرن (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اضطراب يتميز بالغرور الشديد والتمركز حول الذات والحاجة الماسة للإعجاب ونقص شديد في التعاطف",
        "answer": "نرجسية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المرض الذي اشتهر تاريخياً باسم داء الملوك؟",
        "answer": "النقرس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المعجزة الإلهية العظيمة التي أيد الله بها نبيه صالحاً عليه السلام وتحدى بها قومه ثمود؟",
        "answer": "الناقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عشب طيب الرائحة يُستخرج منه زيت يدخل في صناعة الحلوى والعقاقير الطبية والصابون والعطور ويستعمل مع الشاي",
        "answer": "النعناع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الشرط الأساسي لصحة العبادات وقبولها عند الله؟",
        "answer": "نية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما عاصمة النيجر؟",
        "answer": "نيامي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تعني القوة والسيطرة، وتُستخدم سياسياً لوصف مدى تأثير الدول؟",
        "answer": "نفوذ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يشير إلى الطريقة المنظمة والمستمرة لتحقيق هدف معين؟",
        "answer": "نهج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم القطعة الصخرية من الفضاء التي تنجو من الاحتراق وتصل إلى سطح الأرض؟",
        "answer": "نيزك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة يوصف بها شدة عذوبة الماء وبرودته...",
        "answer": "النُقاخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح العالمي الذي يعبر عن الحنين الجارف لأيام الماضي وذكرياته؟",
        "answer": "نوستالجيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح القانوني الذي يعني إلغاء حكم صادر من محكمة أدنى؟",
        "answer": "نقض",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم مشية النبي ﷺ التي وُصفت بأنها مشي سريع بخطوات متقاربة دون جري؟",
        "answer": "النسلان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي اكبر دولة إسلامية في قارة إفريقيا؟",
        "answer": "نيجيريا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الحركة القومية المتطرفة التي حكمت ألمانيا بقيادة هتلر؟",
        "answer": "نازية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مصطلح أدبي يشير إلى تحويل الشعر إلى كلام عادي مع الحفاظ على المعنى",
        "answer": "نثر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو السلطان الأيوبي الذي لُقب بـ \"الملك الصالح\" وهو سابع سلاطين الدولة الأيوبية؟",
        "answer": "نجم الدين الأيوبي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم السد الإثيوبي المثير للجدل على النيل الأزرق؟",
        "answer": "نهضة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أطول نهر في العالم والذي يبلغ طوله 6650 كيلومتر؟",
        "answer": "نهر النيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بمعنى الحديث الخفي",
        "answer": "نجوى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا كانت تسمى مدينة نيويورك قديمًا؟",
        "answer": "نيو أمستردام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على المرأة واسعة العينين؟",
        "answer": "النجلاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المقدار المحدد شرعاً من المال الذي تجب فيه الزكاة؟",
        "answer": "نصاب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم العاصمة السياسية لجمهورية الهند والتي تمثل المقر الرئيسي للسلطات التشريعية والتنفيذية والقضائية للحكومة الهندية؟",
        "answer": "نيودلهي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي تعني في اللغة نقض العهد أو التراجع عن اليمين؟",
        "answer": "نكث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يعني تحليل وتقييم الأفكار والأعمال بهدف تطويرها؟",
        "answer": "نقد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم شخصية المغامر الشهير في عالم الألعاب الإلكترونية الذي ارتبطت رحلاته بالبحث عن كنوز \"إل دورادو\" و\"هنري إيفري\" ويلقب بالأسطورة؟",
        "answer": "نيثن دريك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما العنصر الذي يشكل حوالي 78% من الغلاف الجوي؟",
        "answer": "نيتروجين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الملك الطاغية الذي عاصر نبي الله إبراهيم عليه السلام، وذكرت الروايات التاريخية أن الله أهلكه ببعوضة دخلت رأسه؟",
        "answer": "النمرود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الكلمة التي تأتي في اللغة العربية بمرادف حصل على الشيء أو كسبه؟",
        "answer": "نال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى الانتقال القسري للأفراد أو الجماعات خارج مناطق سكنهم المعتادة نتيجة الحروب أو الكوارث؟",
        "answer": "النزوح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ظاهرة طبيعية تحدث أحيانًا يفقد فيها الإنسان القدرة على استرجاع المعلومات والخبرات والمهارات",
        "answer": "النسيان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللقب الذي يُطلق على الشخص الذي يتمتع بذكاء استثنائي وقدرة عالية على التفكير والتحليل؟",
        "answer": "نابغة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما نوع السلاح الذي استخدم لأول مرة ضد مدينتي هيروشيما وناغازاكي؟",
        "answer": "نووي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الذي قال لابنه: \"لا عاصم اليوم من أمر الله\"؟",
        "answer": "نوح (عليه السلام)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُطلق في النحو على اللفظ أو التابع الذي يصف متبوعه ويوضحه؟",
        "answer": "النعت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يشير إلى مجموعة القواعد والمؤسسات التي تنظم شؤون الدولة؟",
        "answer": "نظام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي من الطيور التي لا تطير وتعد بيضتها أكبر بيضة لكائن حي حاليًا، وأطلق عليها الكثير من الأمثال",
        "answer": "نعامة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الأديب المصري الحائز على جائزة نوبل في الأدب، وصاحب ثلاثية \"بين القصرين\" و\"قصر الشوق\" و\"السكرية\"؟",
        "answer": "نجيب محفوظ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الإشارة الكهربائية السريعة التي ترسل في الأنظمة الرقمية؟",
        "answer": "نبضة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو النجم السعودي الذي حصد جائزة أفضل لاعب في قارة آسيا لعام 2000م بعد تألقه مع ناديه والمنتخب؟",
        "answer": "نواف التمياط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الاقتصادي الذي يقيس زيادة الإنتاج والدخل القومي؟",
        "answer": "نمو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة التاريخية العريقة في العراق التي كانت عاصمة للإمبراطورية الآشورية؟",
        "answer": "نينوى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المركز الأساسي للذرة الذي يحتوي البروتونات والنيوترونات؟",
        "answer": "نواة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي النظرية الفيزيائية التي وضعها ألبرت أينشتاين وغيّرت فهمنا للزمان والمكان؟",
        "answer": "نظرية النسبية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الرجل الصالح والّذي صلّى عليه النبي صلى الله عليه وسلم صلاة الغائب؟",
        "answer": "النجاشي ملك الحبشة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ج",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "اسم الصحابي الجليل الذي يكنى بأبي ذر الغفاري ؟",
        "answer": "جندب بن جنادة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو أقوى الحيوانات ذاكرة ؟",
        "answer": "الجمل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "العلم الذي يعنى بعلم طبقات الأرض ؟",
        "answer": "جيولوجيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من الامراض القديمة والخطيرة ؟",
        "answer": "جدرى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ذروة سنام الإسلام ؟",
        "answer": "الجهاد في سبيل الله",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من الارحام ؟",
        "answer": "جد - جدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وحدة أساسية لانتقال الصفات الوراثية في الحيوان والنبات ؟",
        "answer": "جينات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مدينة عربية فيها أعلى نافورة في العالم ؟",
        "answer": "جــــدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نقيب المهاجرين الذين هاجروا إلى الحبشة وخطيبهم والناطق بلسانهم ؟",
        "answer": "جعفر بن أبي طالب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة يطلق على أشد الحرص ؟",
        "answer": "الجشع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على الثلاثة والثلاثون عاماً ؟",
        "answer": "جيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى بيت الأفعي ؟",
        "answer": "جحر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم الشاعر الملقب (( بالحطيئة )) ؟",
        "answer": "جرول بن أوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سخرهم الله لسيدنا سليمان ؟",
        "answer": "الجن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء الصخر ؟",
        "answer": "جلمود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حقبة ما قبل الاسلام ؟",
        "answer": "جاهلية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على الليل والنهار؟",
        "answer": "جديدان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مؤسس الإمبراطورية المغولية ؟",
        "answer": "جنكيز خان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لزم مكانه فلم يبرحه ؟",
        "answer": "جثم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا نسمي كل جملة تبدأ باسم وتتكون من مبتدأ وخبر ؟",
        "answer": "جملة اسمية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يطلق على البئر الذي لم يبن بالحجارة ؟",
        "answer": "جب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الجبل الذى رست عليه سفينة نوح عليه السلام ؟",
        "answer": "الجودى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أهجى شعراء العرب ؟",
        "answer": "جرير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد أشهر كتب التفسير المختصرة ؟",
        "answer": "الجلالين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من المعاجم المشهورة لابن دريد البصري ؟",
        "answer": "الجمهرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "احدى زوجات الرسول الكريم عليه الصلاة والسلام ؟",
        "answer": "جويرية بنت الحارث",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "آخر ملوك الغساسنة أسلم ثم ارتد وتنصر ؟",
        "answer": "جبلة بن الأيهم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الانكار مع العلم ؟",
        "answer": "جحود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على النهر الصغير ؟",
        "answer": "جعفر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "المحامي الفرنسي الذي أسس بطولة كأس العالم لكرة القدم ؟",
        "answer": "جول ريميه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ضد الخفي ؟",
        "answer": "جلي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى صوت الرحى التي يطحن بها الدقيق ؟",
        "answer": "جعجعه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مكتشف حامض الكبريت ؟",
        "answer": "جابر بن حيان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على الرجل الكريم ؟",
        "answer": "جحجاح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكبر جزيرة في العالم ؟",
        "answer": "جرين لاند",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "العالم الفرنسي الذي الذي اكتشف البنسلين ؟",
        "answer": "جرهارت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "القبيلة التي تنتمي إليها زرقاء اليمامة مضرب المثل في قوة البصر ؟",
        "answer": "جديس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو البيع الذي لا يعلم قدره على التفصيل ؟",
        "answer": "الجزاف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على مقدمة العنق ؟",
        "answer": "جيد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عالم عربي مشهور يلقب بأبي الكيمياء ؟",
        "answer": "جابر بن حيان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الذي بني مدينة القاهــرة ؟",
        "answer": "جوهر الصقلي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أول ميناء نفطي في أبو ظبي ؟",
        "answer": "جبل الظنة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مخترع المحرك البخاري ؟",
        "answer": "جورج استيفن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مكتشف قارة آسيا ؟",
        "answer": "جيمس كوك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي المرأة التي حكم ببراءتها بعد إعدامها بـ 25 عام ؟",
        "answer": "جان دارك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو صاحب كتاب الدر المنثور في التفسير بالمأثور ؟",
        "answer": "جلال الدين السيوطي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "علم مسح الأرض ؟",
        "answer": "جيوديسيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "المخترع الألماني الذي اخترع أول مطبعة ذات حروف ؟",
        "answer": "جوتنبرغ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على المادة الوراثية المسؤولة عن تحديد صفات الكائنات الحية ونقلها عبر الأجيال؟",
        "answer": "الجينات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي جليل، كان له أخوات كثيرات، وكان يعولهن بعد وفاة أبيه، وهو من المكثرين في رواية الحديث النبوي",
        "answer": "جابر بن عبدالله (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو القائد المسلم الشجاع الذي قُطعت يداه وهو يحمي راية المسلمين في غزوة مؤتة، ولقَّبه النبي ﷺ بـ \"الطيار\"؟",
        "answer": "جعفر بن أبي طالب (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المنطقة في المملكة العربية السعودية التي دخلت موسوعة غينيس لاحتوائها على أكبر مزرعة زيتون حديثة في العالم؟",
        "answer": "الجوف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على الأرض القاحلة التي لا نبات فيها ولا زرع؟",
        "answer": "جرداء / جدباء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الجزء الأساسي أو الطبيعة الحقيقية لشيء ما، والذي يحدد هويته؟",
        "answer": "الجوهر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الشخصية التاريخية الشهيرة التي تُنسب إليها الكثير من الحكايات والنوادر الفكاهية؟",
        "answer": "جحا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الفتاة في لوحة الموناليزا أشهر لوحة في العالم للفنان ليوناردو دافنشي؟",
        "answer": "جوكوندو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الأديب الذي توفي بعد أن انهارت عليه كتبه في مكتبته بسبب كثرتها وثقلها؟",
        "answer": "الجاحظ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على النقاش السلبي بين طرفين يختلفان في الرأي؟",
        "answer": "جدال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الهيئة أو الجهة المسؤولة عن مراقبة البضائع والرسوم المفروضة على الاستيراد والتصدير؟",
        "answer": "الجمارك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو القائد السوفيتي الذي حكم الاتحاد السوفيتي لفترة طويلة وأثارت سياساته جدلاً واسعاً في التاريخ الحديث؟",
        "answer": "جوزيف ستالين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على الشخص الذي يتسلل لجمع معلومات سرية عن دولة أو جهة معينة لصالح جهة أخرى؟",
        "answer": "جاسوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الفرع الرئيسي في الرياضيات الذي يدرس العلاقات والكميات باستخدام الرموز؟",
        "answer": "الجبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على الفترة التي سبقت بعثة النبي محمد ﷺ في شبه الجزيرة العربية؟",
        "answer": "الجاهلية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي مدينة تقع أطول نافورة في العالم؟",
        "answer": "جدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى في لغة العرب ما تبقى من أصول الزرع والنبات في الأرض بعد حصاده؟",
        "answer": "الجذامة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الأديب والمفكر العباسي الذي ألّف كتاب \"البخلاء\" وتميز بأسلوبه الساخر والفكري؟",
        "answer": "الجاحظ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "فرد مهمته الحصول على معلومات سرية أو حساسة دون إذن الجهة المالكة لمصلحة جهة أخرى",
        "answer": "جاسوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة للدلالة على ارتكاب ما لا يحل وهي أحد مرادفات كلمة \"ذنب\"",
        "answer": "جُرم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العالم الذي اشتُهر بعلم الكيمياء في الحضارة الإسلامية؟",
        "answer": "جابر بن حيان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو الوادي الرئيسي الذي يسقي أعلى بلدة عودة سدير؟",
        "answer": "الجوفاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي المنظومة الحيوية في جسم الإنسان المسؤولة عن القوة والحركة والثبات؟",
        "answer": "الجهاز العضلي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم الفرنسي الذي نجح في فك رموز اللغة المصرية القديمة بعد دراسته لحجر رشيد؟",
        "answer": "جان فرانسوا شامبليون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو المَلَك الموكل بالوحي والذي عُبِّر عنه في القرآن الكريم بـ \"روح القدس\"؟",
        "answer": "جبريل (عليه السلام)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "عين تقع بالقرب من الهفوف به مياه ساخنة غنية بالمعادن وتستخدم مياهه لعلاج الروماتيزم وبعض الأمراض الأخرى",
        "answer": "الجوهرية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على الكائنات الحية الدقيقة المُسببة للأمراض مثل البكتيريا والفيروسات؟",
        "answer": "جراثيم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الضريبة التي كانت تُفرض على غير المسلمين في الدولة الإسلامية مقابل الحماية؟",
        "answer": "الجزية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم أقدم ملحمة أدبية مكتوبة في التاريخ، والتي عُثر عليها في بلاد الرافدين وتروي رحلة ملك أوروك للبحث عن الخلود؟",
        "answer": "ملحمة جلجامش",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة جمهورية جيبوتي؟",
        "answer": "جيبوتي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أكبر جزيرة في العالم من حيث المساحة، وتتمتع بحكم ذاتي تتبع فيه للتاج الدنماركي؟",
        "answer": "جرينلاند",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم النظام الحيوي في جسم الإنسان المسؤول عن الدفاع ضد الأمراض والعدوى؟",
        "answer": "الجهاز المناعي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد المدن السعودية تقع في المنطقة الشرقية تُعرف بأنها اكبر مدينة صناعية في العالم",
        "answer": "الجبيل الصناعية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على قطعة من اليابسة تحيط بها المياه من جميع الجهات؟",
        "answer": "جزيرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو رائد الأعمال الذي بدأ ببيع الكتب عبر الإنترنت في التسعينات، ثم حوّل مشروعه إلى شركة عملاقة تُعرف اليوم باسم Amazon؟",
        "answer": "جيف بيزوس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على المياه المخزونة في الفجوات والمسامات بين الصخور وتحت سطح الأرض؟",
        "answer": "المياة الجوفية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة الأفريقية التي تتميز بوجود ثلاث عواصم رسمية لإدارتها؟",
        "answer": "جنوب أفريقيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المقابل المترتب على فعل معين؟",
        "answer": "جزاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي صفة الاستحقاق أو الأهلية لشيء ما بناءً على الكفاءة أو القيمة؟",
        "answer": "جدارة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على أي جسم طبيعي موجود في الفضاء مثل الكواكب والنجوم والكويكبات؟",
        "answer": "جرم سماوي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو القارض الصحراوي الصغير ذو الأرجل الخلفية الطويلة التي تمكنه من القفز لمسافات؟",
        "answer": "جربوع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الفائدة أو المنفعة العملية المتوقعة من مشروع أو إجراء معين؟",
        "answer": "جدوى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الجزء السفلي من النبات الذي ينمو داخل التربة ويمتص منها الماء والعناصر الغذائية؟",
        "answer": "جذور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل كان كريماً يحب المساكين ويُقال إنه كان أشبهَ الناس بالنبي ﷺ خَلقًا وخُلُقًا، و لُقب بـ \"ذي الجناحين\"",
        "answer": "جعفر بن أبي طالب (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي الرياضة التي تتطلب مرونة عالية وحركات دقيقة على الأرض أو على أجهزة خاصة؟",
        "answer": "الجمباز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تطلق على من خاطر أو غامر بالأمور دون دراسة؟",
        "answer": "جازف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على المجرى الصغير الذي يتدفق فيه الماء بشكل دائم أو موسمي؟",
        "answer": "جدول مائي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق في اللغة على الصخرة العظيمة المنحدرة من أعلى الجبل؟",
        "answer": "جلمود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي وحدة القياس الدولية المستخدمة لقياس الشغل والطاقة في الفيزياء؟",
        "answer": "الجول",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل، كان شاعرًا وخطيبًا، وكان سيد قبيلة بجيلة",
        "answer": "جرير بن عبدالله (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو اللاعب الأفريقي الوحيد في التاريخ الذي نجح في الفوز بجائزة الكرة الذهبية؟",
        "answer": "جورج وياه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي العملة الرسمية المستخدمة في السودان؟",
        "answer": "جنيه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما نوع الخلايا التي لديها القدرة على الانقسام والتخصص لتكوين أنواع مختلفة من خلايا الجسم؟",
        "answer": "الخلايا الجذعية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أسرع عضلة استجابة وحركة في جسم الإنسان؟",
        "answer": "الجفون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العاصمة وأكبر مدن دولة جنوب السودان؟",
        "answer": "جوبا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على البئر العميق، وقد ورد في سورة يوسف؟",
        "answer": "جُب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "المكان الذي يتقابل عنده الجيشان للقتال",
        "answer": "الجبهة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الحاجز الذي قسم مدينة برلين الألمانية لأكثر من 28 عامًا وكان رمزًا للحرب الباردة؟",
        "answer": "جدار برلين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على مستوى الكفاءة أو الامتياز في منتج أو خدمة ومدى مطابقته للمعايير؟",
        "answer": "الجودة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مؤسس الإمبراطورية المغولية؟",
        "answer": "جنكيز خان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على الرسم أو الزخرفة التي تُنفَّذ على جدران المباني لأغراض فنية أو تاريخية؟",
        "answer": "جدارية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم القوة التي تجذب الأجسام نحو مركز الأرض أو أي جسم له كتلة؟",
        "answer": "جاذبية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الشاعر المخضرم المعروف بلقب \"الحطيئة\" والذي بلغت شدته في الهجاء أنه هجى نفسه وأمه وأباه؟",
        "answer": "جرول بن أوس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "إحدى الآيات والعقوبات الإلهية التي أرسلها الله على فرعون وقومه",
        "answer": "الجراد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو القائد العسكري الأبرز الذي قاد حرب الاستقلال وجرى تنصيبه كأول رئيس للولايات المتحدة الأمريكية؟",
        "answer": "جورج واشنطن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المخلوقات التي سخّرها الله لسيدنا سليمان عليه السلام، فكانت تعمل بأمره وتنفّذ أوامره؟",
        "answer": "الجن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما النظام السياسي الذي يُنتخب فيه الرئيس لفترة محددة ويكون فيه الشعب مصدر السلطة؟",
        "answer": "جمهوري",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الرتبة العسكرية العليا في العديد من جيوش العالم؟",
        "answer": "جنرال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الحشرة القافزة التي تشبه الجراد لكنها أصغر حجماً وتصدر صريراً مميزاً؟",
        "answer": "جندب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجزء الخارجي الصلب الذي يحيط بالخلية النباتية ويمنحها الدعامة والشكل؟",
        "answer": "الجدار الخلوي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أكبر عضو في جسم الإنسان؟",
        "answer": "الجلد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم العربي الذي يعني في لغة العرب النهر الصغير؟",
        "answer": "جعفر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي الدولة التي عاصمتها كينغستون؟",
        "answer": "جامايكا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما التخصص الطبي الذي يقوم على معالجة الأمراض أو الإصابات عن طريق العمليات اليدوية أو الأدوات الطبية؟",
        "answer": "جراحة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الجبل الذي رست عليه سفينة سيدنا نوح عليه السلام؟",
        "answer": "الجودي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عملية تغطية الحديد بطبقة رقيقة من الزنك لحمايته من الصدأ",
        "answer": "الجلفنة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المادة البيضاء الطبيعية التي تُستخدم في أعمال البناء والتشطيبات والديكورات الداخلية وتتكون كيميائياً من كبريتات الكالسيوم المائية؟",
        "answer": "الجبس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى الوباء أو المرض المعدي إذا انتشر على نطاق عالمي واسع متجاوزاً الحدود الدولية؟",
        "answer": "جائحة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو العلم الذي يختص بدراسة تكوين الأرض وطبقاتها والظواهر المرتبطة بها مثل الزلازل والبراكين؟",
        "answer": "الجيولوجيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم يوم الثلاثاء عند العرب في الجاهلية؟",
        "answer": "الجبار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الدابة كثيرة الشعر التي ورد ذكرها في حديث تميم الداري وكانت تخبر عن المسيح الدجال؟",
        "answer": "الجساسة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ل",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى صغائر الذنوب ؟",
        "answer": "لمم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "على ماذا تطلق كلمة الأبيضان ؟",
        "answer": "اللبن والماء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة مناداة تعبر عن الخضوع ؟",
        "answer": "لبيك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كتاب كتب فيه ما كان و ما سيكون إلى يوم القيامة ؟",
        "answer": "اللوح المحفوظ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة مرادفه ومقابلة للقبر ؟",
        "answer": "اللحد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الطفل الصغير الذي يوجد في الطريق و لا يعرف نسبه ؟",
        "answer": "لقيط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على صوت الزرافة ؟",
        "answer": "ليس لها صوت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو اليهودي الذي سحر النبي ؟",
        "answer": "لبيد بن الأعصم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء الأسد ؟",
        "answer": "الليث",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يكون في الصبح واحد و في الليل ثلاثة فما هو ؟",
        "answer": "حف اللام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء جهنم التي ذكرت في القرآن الكريم ؟",
        "answer": "لظى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "جسم مستطيل متحرك خطره عظيم إذا استخدم في الشر و بسببه يكب الناس في النار ؟",
        "answer": "لسان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أحد أسماء العلم ؟",
        "answer": "اللواء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي آمن بنبي ؟",
        "answer": "لوط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي المتفرعة من اللغة الأم تتداولها الشعوب في إقليم محدود ؟",
        "answer": "اللهجة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الإشارة بالعين و نحوها للمخاطبة و الاستهزاء ؟",
        "answer": "اللمز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد أصحاب المعلقات العشر ؟",
        "answer": "لبيد بن ربيعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو العالم باللغة المتفقه فيها ؟",
        "answer": "لغوي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو علبة تجعل فيها مادة متفجرة كالبارود أو الديناميت تستعمل في الحروب ؟",
        "answer": "لغم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تعرف عن حاسة الشم عند الطيور ؟",
        "answer": "لا يوجد لها",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الغلاف الخارجي الصلب لساق الشجرة و جذورها و أغصانها ؟",
        "answer": "لحاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة هو الطرد والابعاد عن رحمة الله ؟",
        "answer": "اللعن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين يقع نهر الكلب ؟",
        "answer": "لبنان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد أكبر المعاجم العربية ألفه ابن منظور ؟",
        "answer": "لسان العرب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أوصاف بقرة بني إسرائيل كما وردت في القرآن الكريم ؟",
        "answer": "لا شية فيها",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "طاهر يخرج من بين نجسين . ماهو ؟",
        "answer": "اللبن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما أكبر مدينة في أوروبا ؟",
        "answer": "لندن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بمعدل كم لتراً يفرز الإنسان من اللعاب يومياً ؟",
        "answer": "لتران",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو صمغ يفرز من بعض النباتات يعلك ؟",
        "answer": "لبان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من المكونات الداخلية لجهاز الكمبيوتر الشخصي ؟",
        "answer": "اللوحة الأم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي الأصوات المبهمة المتعالية التي لا تفهم ؟",
        "answer": "لغط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو سيد الطعام ؟",
        "answer": "اللحم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أول من قال : رب أخ لم تلده أمك ؟",
        "answer": "لقمان بن عاد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم الذي اكتشف طريقة التعقيم ؟",
        "answer": "لويس باستر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "إحدى مدن الولايات المتحدة الأمريكية ؟",
        "answer": "لوس أنجلوس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "على ماذا يطلق الأصغران ؟",
        "answer": "اللسان والقلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو اسم من أسماء الفضة ؟",
        "answer": "لجين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عشر عصافير على عصن شجرة أطلق الصياد رصاصه فأصاب واحداً فكم عصفور بقي على الغصن ؟",
        "answer": "لم يبقى شئ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الخصم الشديد الخصومة ؟",
        "answer": "اللدود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عبقري إيطالي متعدد المواهب في الرسم والنحت والعمارة والهندسة المدنية وغيرها فمن هو ؟",
        "answer": "ليوناردو دافنشي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أخف المعادن ؟",
        "answer": "الليثيوم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هل تلد البغلة في الشهر السابع أم التاسع ؟",
        "answer": "لاتلد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يستخرج من البحر و يباع بأغلى الأثمان ؟",
        "answer": "اللؤلؤ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو علم يختص بدراسة اللغات و أصلها و تفرعها و علاقتها ببعضها البعض ؟",
        "answer": "اللسانيات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو غبار لطلع ينتشر في الهواء ؟",
        "answer": "اللقاح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في أي مدينة يقع ميدان بيكاديللي الشهير ؟",
        "answer": "لندن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مرض سرطان الدم ؟",
        "answer": "اللوكيميا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم القناة التي تصل بين البحر الأسود وبحر قزوين ؟",
        "answer": "لينين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القدرة البدنية التي تؤهل اللاعب الرياضي للأداء طوال زمن المباراة؟",
        "answer": "لياقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على منظومة الإشارات غير اللفظية مثل تعابير الوجه وحركات اليدين ووضعية الجسم وغالبًا ما تكون أكثر تأثيرًا من الكلمات المنطوقة؟",
        "answer": "لغة الجسد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الحجر الكريم الذي يتكوّن داخل المحار ويتميّز باللمعان؟",
        "answer": "اللؤلؤ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل المثل الشعبي الذي يُضرب في الحث على القناعة: \"مد رجولك على قد...\"",
        "answer": "لحافك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الراية التي كان يعقدها النبي ﷺ لقائد الجيش؟",
        "answer": "لواء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الملعب الذي استضاف المباراة النهائية لبطولة كأس العالم لكرة القدم عام 2022 م؟",
        "answer": "لوسيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المنصة الرقمية العالمية الشهيرة المتخصصة في التواصل المهني، وتطوير السير الذاتية، والتوظيف بين الشركات والأفراد؟",
        "answer": "لينكدن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العملية الرياضية التي تعكس عملية الأس؟",
        "answer": "لوغاريتم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الكلبة السوفيتية الشهيرة التي تُعد أول كائن حي يرتاد الفضاء ويدور حول الأرض؟",
        "answer": "لايكا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى النسيج الدافئ الذي يستخدمه الإنسان كغطاء له عند النوم؟",
        "answer": "لحاف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نظام من الرموز والأصوات يستخدمه البشر للتواصل",
        "answer": "لغة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي جليل من الشعراء الفرسان الأشراف في الجاهلية",
        "answer": "لبيد بن ربيعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الوثيقة التي تحدد القواعد التنظيمية لمؤسسة ما؟",
        "answer": "لائحة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح النفسي الذي صاغه فرويد للإشارة إلى الجزء المكبوت من العقل؟",
        "answer": "لاوعي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المقولة الشهيرة التي تحث على سرعة إنجاز العمل وعدم التسويف أو التباطؤ في أداء المهام؟",
        "answer": "لا تؤجل عمل اليوم إلى الغد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي النظرة السريعة أو الإشارة الموجزة التي تعطي فكرة أولية أو جزئية عن شيء ما؟",
        "answer": "لمحة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة الأوروبية الحبيسة التي تُصنف بأنها دولة مغلقة مزدوجة، لكونها محاطة بالكامل بدول حبيسة أخرى؟",
        "answer": "ليختنشتاين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو اللاعب الذي يحمل الرقم القياسي لأكثر عدد من الأهداف المسجلة في مباريات رسمية خلال سنة ميلادية واحدة في تاريخ كرة القدم؟",
        "answer": "ليونيل ميسي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الشخصية الكوميدية السينمائية الشهيرة التي كانت انطلاقة النجم المصري محمد سعد في أفلام البطولة المطلقة؟",
        "answer": "اللمبي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجماعة من عدة أعضاء للنظر في قضية معينة أو لإنجاز عمل؟",
        "answer": "لجنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما ذا تسمى الأداة التي توضع في فم الحصان للتحكم به وتوجيهه؟",
        "answer": "لجام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تُطلق على اللهب الشديد الخالص، وهي اسم من أسماء جهنم وقد وردت في القرآن الكريم؟",
        "answer": "لظى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين يقع نهر الكلب الذي يصب على البحر الأبيض المتوسط؟",
        "answer": "لبنان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أسماء الله سبحانه وتعالى والتي تعني الرفق والرحمة بعباده من حيث لا يشعرون",
        "answer": "اللطيف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اي نادي أسباني لعب له اللاعب السعودي يحيى الشهري على سبيل الإعارة؟",
        "answer": "ليغانيس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي وحدة القياس الأساسية المستخدمة لقياس حجم السوائل؟",
        "answer": "لتر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد أسماء الأسد يرمز إلى الشجاعة ويكثر ذكره في الأمثال",
        "answer": "الليث",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الصفة الإلهية التي تعني عناية الله بعباده بطريقة خفية؟",
        "answer": "لطف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم عَلم مؤنث بمعنى فضة أو بريق الفضة اللامع",
        "answer": "لُجين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو نبي الله الذي عاصر نبي الله إبراهيم (عليه السلام) وآمن بدعوته وهاجر معه؟",
        "answer": "لوط (عليه السلام)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المثل العربي الشهير الذي يحذر من مخاطر الكلام ويدعو إلى ضبط اللسان؟",
        "answer": "لسانك حصانك، إن صنته صانك، وإن خنته خانك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم النمط اللغوي المحلي المميز لمنطقة جغرافية معينة؟",
        "answer": "لهجة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو السكر الموجود بشكل أساسي في الحليب ومنتجات الألبان؟",
        "answer": "اللاكتوز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الحكيم الذي سميت باسمه سورة في القرآن الكريم؟",
        "answer": "لقمان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو العنصر الكيميائي رقم 3 في الجدول الدوري ويستخدم في البطاريات؟",
        "answer": "الليثيوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المستحضر الطبي الذي يحفز جهاز المناعة لمقاومة مرض معين؟",
        "answer": "لقاح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الطائر المهاجر كبير الحجم ذو منقار وساقين طويلتين، ويرتبط في بعض الثقافات بجلب الأطفال؟",
        "answer": "اللقلق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الرياضة الصيفية الوطنية الرسمية في كندا؟",
        "answer": "لاكروس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المتحف الفرنسي الشهير الذي يضم لوحة الموناليزا ويقع في باريس؟",
        "answer": "متحف اللوفر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العاصمة الأوروبية الشهيرة التي تُلقب تاريخياً بـ \"مدينة الضباب\"؟",
        "answer": "لندن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو السؤال أو الموقف أو النص الغامض الذي يتطلب تفكيراً واستنتاجاً للوصول إلى حله أو فهمه؟",
        "answer": "لغز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى الخطأ في الإعراب في اللغة العربية؟",
        "answer": "اللحن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "جمهورية في الجزء الغربي من أفريقيا تحدها غينيا شمالًا وساحل العاج شرقًا عاصمتها مونروفيا",
        "answer": "ليبيريا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو عبقري عصر النهضة الإيطالي وصاحب اللوحة الأكثر شهرة وغموضاً في التاريخ \"الموناليزا\"؟",
        "answer": "ليوناردو دافنشي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم النسيج الوعائي الحي المسؤول عن نقل الغذاء والركازة العضوية من الأوراق إلى أجزاء النبات الأخرى؟",
        "answer": "اللحاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجهاز الذي يعتمد على تضخيم الضوء بواسطة الانبعاث المحفز للإشعاع؟",
        "answer": "ليزر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما مصطلح الشخص الذي يفر من بلده خوفاً من الاضطهاد؟",
        "answer": "لاجئ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي عاصمة دولة البرتغال؟",
        "answer": "لشبونة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الوحيدة الحبيسة في جنوب شرق آسيا، وتحدها كل من الصين وميانمار وتايلاند وفيتنام وكمبوديا؟",
        "answer": "لاوس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في الفقه الإسلامي ماذا يُسمى المال الضائع الذي يُعثر عليه؟",
        "answer": "اللُقَطَة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ورد في القرآن الكريم في سورة الكهف كلمة \"الرقيم\" فماذا تعني؟",
        "answer": "اللوح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مصطلح يطلق على مقاومة الانسياب وهي قوة تحول دون انسياب السائل بسهولة",
        "answer": "اللزوجة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم تتابع النغمات الموسيقية المنتظمة زمنياً؟",
        "answer": "لحن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على كل ما يُستطاب طعمه أو ما يُبهج النفس عند تذوقه",
        "answer": "لذيذ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "لعبة أطفال شهيرة عبارة عن قطع بلاستيكية صغيرة على شكل مكعبات ومستطيلات، تُستخدم في البناء والتركيب لتشكيل نماذج مختلفة",
        "answer": "ليغو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "دولة مستقلة في أوروبا تقع بين ألمانيا وفرنسا وبلجيكا",
        "answer": "لوكسمبورغ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو العضو الموجود في معظم الفقريات، وهو عضلي متموضع في قاع الفم؟",
        "answer": "اللسان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم السجل الذي كتب الله فيه مقادير الخلائق قبل خلق السماوات والأرض؟",
        "answer": "اللوح المحفوظ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم القديم أو الشعري للفضة",
        "answer": "لُجين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تعني الكلام الفارغ أو الذي لا فائدة منه، وقد يدل على الخطأ أو الكلام غير المقصود",
        "answer": "لغو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم العقدتين اللمفاوية الموجودة في حلق الإنسان ويعملان على مقاومة العدوى؟",
        "answer": "اللوزتين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الأداة البصرية التي تُستخدم لعرض معلومات مختصرة بوضوح بهدف توجيه السلوك أو إيصال رسالة معينة؟",
        "answer": "لافتة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الكلام الذي لا فائدة منه والذي نهى عنه الإسلام؟",
        "answer": "لغو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نهر ينبع من غرب بعلبك ويصب شمال صور، ويعتبر أهم أنهار لبنان",
        "answer": "الليطاني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم العلم الذي يهتم بتنظيم نقل وتخزين وتوزيع المواد والمنتجات؟",
        "answer": "لوجستية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صفة اجتماعية يتميز صاحبها بأسلوب مهذب وذوق رفيع؟",
        "answer": "لباقة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "خ",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من هو قائد المسلمين في معركة اليرموك سنة 13 هجري ؟",
        "answer": "خالد بن الوليد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو اسم قدم البعير ؟",
        "answer": "خف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو مرادف للخوف ؟",
        "answer": "الخشية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أول أمرأة تزوجها النبي صلى الله عليه وسلم ؟",
        "answer": "خديجة بنت خويلد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اصطلاح نحوي يطلق على ما يسند إلى المبتدأ ؟",
        "answer": "الخبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو بقايا ما تهدم من المساكن و غيرها و ضد العمران ؟",
        "answer": "الخراب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي إحدى القبائل في المدينة المنورة أسلمت وساندة النبي صلى الله عليه وسلم ؟",
        "answer": "الخزرج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نوع من أنواع الحلي يوضع في قدم المرأة للزينة ؟",
        "answer": "خلخال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو شجر هندي سريع النمو لين القضبان أملس العيدان تصنع منه الكراسي ؟",
        "answer": "الخيزران",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ضد الطيب ؟",
        "answer": "خبيث",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يقصد بمصطلح ( الفوبيا ) في علم النفس ؟",
        "answer": "الخزف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أين تحصل الأسماك في البحار على الأوكسجين ؟",
        "answer": "الخياشيم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الذي لقب ب سيف الله المسلول ؟",
        "answer": "خالد بن الوليد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "و كل ما تغطي به المرأة رأسها ؟",
        "answer": "الخمار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو كل ما يطرأ على الذهن من فائدة أو غيرها في وقت مناسب لها ؟",
        "answer": "خاطرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي وسيلة لتمثيل سطح الأرض أو جزء منه على لوحة مستوية ؟",
        "answer": "الخريطة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الصحابيات التي فقدت أبناءها و زوجها و صبرت ؟",
        "answer": "الخنساء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى طعام الولادة ؟",
        "answer": "الخرس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على صوت الماء المتساقط ؟",
        "answer": "خرير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لا تعتمد الأوراق الرسمية في المعاملات الحكومية إلا به ؟",
        "answer": "الختم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من القائل : ( فلا نامت أعين الجبناء ) ؟",
        "answer": "خالد بن الوليد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى صوت البقرة ؟",
        "answer": "خوار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو ما يتعمد من الفعل و ضده الصواب ؟",
        "answer": "الخطأ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو نبات يكثر قرب المياه و من ثمره يستخرج مسهل بزيت معروف ؟",
        "answer": "الخروع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يطلق على عصير العنب أو التمر أو الشعير و شاربه لا يميز و لا يعقل ؟",
        "answer": "الخمر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو صوت النمر ؟",
        "answer": "خرخرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي الأحاديث والقصص المضحكة والباطلة التي لا وجود لها ؟",
        "answer": "خزعبلات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي زبدة الشيء أو ما يستخرج من المادة حاويا لخصائصها ؟",
        "answer": "الخلاصة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كم يبلغ عدد عيون النحلة ؟",
        "answer": "خمس عيون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عالم عربي يعتبر من واضع علم الجبر ؟",
        "answer": "الخوارزمي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يطلق على المشرق و المغرب ؟",
        "answer": "الخافقان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من موارد الدولة الاسلامية ؟",
        "answer": "خراج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي الصحابية التي نزلت فيها أحكام الظهار ؟",
        "answer": "خولة نت ثعلبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم أم مصعب بن عمير رضي الله عنه ؟",
        "answer": "خناس بنت مالك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللفظ العربي للمادة الكيميائية الزنك ؟",
        "answer": "خارصين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو بيت من الوبر أو الصوف أو الشعر ؟",
        "answer": "خباء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الغازات الكيميائية السامة تستعمل عادة في الحروب وهي محرمة دوليا ؟",
        "answer": "الخردل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو خط عرض تتعامد عليه أشعة الشمس مرتين في السنة .. فما هو ؟",
        "answer": "خط الاستواء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بمعنى مزج بين الأشياء ؟",
        "answer": "خلط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الاسم القديم لمرض الدفتيريا عند العرب ؟",
        "answer": "خانوق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم الذي وضع علم العروض ؟",
        "answer": "الخليل الفراهيدي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صفه تدل على الجبن ؟",
        "answer": "خوف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو قطعة من البحر تدخل في البر ؟",
        "answer": "الخليج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "شاعرة عربية مخضرمة عاشت في الجاهلية والإسلام ؟",
        "answer": "الخنساء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "حلقة من شعر تجعل في أنف البعير بعد ثقبها يشد بها الزمام ؟",
        "answer": "خزيمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نبات مخدر يصنع منه الأفيون ؟",
        "answer": "الخشخاش",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صفه للنار إذا سكن لهبها ولم ينطفئ جمرها ؟",
        "answer": "خمدت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هم أول من فتحوا باب الغلو في الدين ؟",
        "answer": "الخوارج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما النوع الأدبي الذي يتناول مواضيع مثل السفر عبر الزمن أو الكائنات الفضائية ويعتمد على عناصر علمية؟",
        "answer": "خيال علمي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تشير إلى عيب أو عطب تسبب في انعدام آداء المهمة بشكل صحيح",
        "answer": "خلل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح اللغوي الذي يُطلق على الأفكار التي تقع وتخطر في قلب الإنسان ونفسه؟",
        "answer": "خواطر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المنطقة التاريخية الواقعة في شمال غرب المملكة العربية السعودية وتابعة لمنطقة المدينة المنورة، واشتهرت بواحاتها وقلاعها القديمة ولها ذكر بارز في التاريخ الإسلامي؟",
        "answer": "خيبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صفة تطلق على ما قل وزنه فسهل حمله، ويُستخدم مجازاً للدلالة على السرعة والرشاقة",
        "answer": "خفيف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم يطلق على السحاب التي ليس فيها رعد ولا برق",
        "answer": "خرساء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو ثالث مستحيلات العرب بعد الغول والعنقاء؟",
        "answer": "الخل الوفي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو الطعام الذي يشار إليه بغذاء الغني والفقير؟",
        "answer": "الخبز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى المشية المتكبرة التي حرمها الله ورسوله؟",
        "answer": "الخيلاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الفطريات الدقيقة التي تتغذى على السكريات الموجودة في العجين وتنتج غازات تجعل الخبز ينتفخ؟",
        "answer": "الخميرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اللقب الذي يُطلق على من تولى الحكم بعد وفاة النبي محمد صلى الله عليه وسلم لقيادة المسلمين؟",
        "answer": "خليفة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم النبات الشهير الذي تُستخرج منه زيوت معروفة بفوائدها الكبيرة للشعر والبشرة؟",
        "answer": "الخروع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الأداة التي تُستخدم لوضع علامة رسمية على مستندات لإثبات صحتها أو اعتمادها؟",
        "answer": "ختم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إنهاء عقد الزواج بطلب من الزوجة مقابل عوض مالي تدفعه للزوج",
        "answer": "خُلع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الوحدة الأساسية للبناء في الكائنات الحية؟",
        "answer": "خلية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الرياضي السويسري الذي أسس نادي برشلونة الإسباني عام 1899م وترأس النادي لعدة فترات تاريخية؟",
        "answer": "خوان غامبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي تعني في اللغة الذل والفضيحة عند القيام بفعل شائن؟",
        "answer": "الخزي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على الناقة التي فقدت حوارها؟",
        "answer": "الخلوج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الإصبع الخامس والأصغر في اليد يُلبس فيه خاتم الزواج في بعض الثقافات",
        "answer": "الخنصر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نوع من الغزل المبروم الرفيع المصنوع من شعيرات الصوف أو القطن يستعمل في الحياكة والتطريز",
        "answer": "الخيط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو العضو الذي تتنفس به الأسماك تحت الماء؟",
        "answer": "الخياشيم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يقول المثل: الكحل في العين الرمدة ....",
        "answer": "خسارة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الحيوان الطائر من الثدييات الذي يعتمد على تحديد الموقع بالصدى للتنقل والصيد ليلاً؟",
        "answer": "الخفاش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القبيلة العربية التي اختارت الدخول في حلف وعهد النبي ﷺ في صلح الحديبية؟",
        "answer": "خزاعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى تحويل ملكية وإدارة المنشآت والقطاعات الحكومية إلى القطاع الخاص؟",
        "answer": "خصخصة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى طلب الرجل يد المرأة للزواج، وتعتبر وعداً بالنكاح ومقدمة له؟",
        "answer": "خطبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُستخدم لوصف الشخص الذي يتمتع بروح مرحة؟",
        "answer": "خفيف دم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "محافظة كانت قديمًا مركز تجاري تقليدي في منطقة عسير وتقع على هضبة مرتفعة",
        "answer": "خميس مشيط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الشجر الهندي سريع النمو الذي تُصنع منه الكراسي والعصي الشهيرة؟",
        "answer": "الخيرزان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة بمعنى خوف مقرون بالتعظيم والمحبة أو بمعنى الخوف العظيم",
        "answer": "خشية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عبدٌ صالح آتاه الله رحمةً من عنده وعلّمه من لدُنه علماً، التقى به النبي موسى (عليه السلام) في رحلته المذكورة في سورة الكهف",
        "answer": "الخضر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المادة الإنشائية المركبة التي تتكون أساساً من الإسمنت والركام والماء؟",
        "answer": "خرسانة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى صوت البقر؟",
        "answer": "خوار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على جزء من البحر يدخل في اليابسة ويكون محاطًا بها من ثلاث جهات؟",
        "answer": "خليج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المفهوم اللغوي الذي يعبر عن ترك نصرة الشخص وعونه والتخلي عنه عند حاجته الملحة؟",
        "answer": "الخذلان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى صوت النمر؟",
        "answer": "خرخرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المرادف واللفظ اللغوي لكلمة \"وَجِل\"؟",
        "answer": "خائف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما أول وزارة أمر الملك عبدالعزيز طيب الله ثراه بتأسيسها في عام 1349 للهجرة؟",
        "answer": "وزارة الخارجية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يقول الحكماء: من حاسب نفسه ربح، ومن غفل عنها ...",
        "answer": "خسر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على الوحدات الأساسية المكونة لأجسام الكائنات الحية؟",
        "answer": "خلايا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو النص الموجز الذي يقدم أهم النقاط أو النتائج من عمل أطول (كبحث أو كتاب أو نقاش)؟",
        "answer": "خلاصة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مدينة تلقب بعروس النيلين كونها تقع عند ملتقى النيل الأزرق بالنيل الأبيض",
        "answer": "الخرطوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على مجموعة من الإجراءات المرتبة تهدف إلى تحقيق هدف معين؟",
        "answer": "خطة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى نهاية الشيء، وتستخدم للإشارة إلى الفقرة الأخيرة في الكتاب التي تلخص الأفكار؟",
        "answer": "الخاتمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الشعور الذي ينتج عن الإحساس بالخطر أو التهديد، سواء كان حقيقياً أو متخيلاً؟",
        "answer": "خوف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي الصحابية الجليلة الّتي نزلت بها أوائل سورة المجادلة؟",
        "answer": "خولة بنت ثعلبة (رضي الله عنها)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على صندوق الدولة والّتي تتولى عملية تمويل كل نفقات الدولة؟",
        "answer": "خزينة الدولة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تُسمى الرائحة التي تخرج من فم الصائم وخلو جوفه من الطعام؟",
        "answer": "خلوف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى صوت تدفق وانسياب الماء؟",
        "answer": "خرير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "احمرار الوجه استحياءً ويصحبه توتر في المواقف الاجتماعية",
        "answer": "الخجل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تعني النقاء والصفاء التام، وتُستخدم بكثرة لوصف الذهب الخالي من الشوائب؟",
        "answer": "خالص",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما النوع من الإبداع الكتابي الذي يُظهر صورًا غير واقعية بهدف التعبير الفني أو الرمزي؟",
        "answer": "خيال أدبي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على مجموعة من الخطوات المنطقية التي تُستخدم لحل مشكلة أو تنفيذ مهمة معينة في البرمجة؟",
        "answer": "خوارزمية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الصناعة التقليدية الفاخرة التي تميزت بها الصين قديماً واُشتق اسمها منها؟",
        "answer": "خزف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تعني بقايا المباني والمساكن المتهدمة؟",
        "answer": "الخراب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الحيوان الثديي الذي يعيش بين الماء واليابسة، ويملك منقارًا يشبه منقار البط، ويضع البيض، ويفرز سمًا من قدميه؟",
        "answer": "خلد الماء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو ما تغطي به المرأة رأسها وعنقها",
        "answer": "خِمار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماللقب الّذي يطلق على الشخص الماهر بالطرق والذي يعرف المسالك جيدا في الصحراء؟",
        "answer": "خرّيت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم المسلم الذي أسس علم الجبر وأسهم في تطوير علم الرياضيات والفلك؟",
        "answer": "الخوارزمي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على المادة في حالتها الطبيعية قبل معالجتها أو تعديلها؟",
        "answer": "خام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على الانسداد المفاجئ في أحد الأوعية الدموية نتيجة تجمع الدم وتجلطه؟",
        "answer": "خثرة دموية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على المعرفة أو المهارة التي يكتسبها الشخص من خلال التجربة؟",
        "answer": "خبرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي الشاعرة والفارسة العربية التي برزت في الفتوحات الإسلامية ببلاد الشام وعُرفت في المعارك بلقب (الفارس الملثم)؟",
        "answer": "خولة بنت الأزور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الّذي يُلقب بـ\"ذو الشهادتين\" لأن النبي ﷺ جعل شهادته الفردية تعادل شهادة رجلين؟",
        "answer": "خزيمة بن ثابت (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم القبائل التاريخية العريقة التي تشتهر ب زراعة البن في المدرجات الجبلية جنوب المملكة؟",
        "answer": "خولان بن عامر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم النادي الرياضي السعودي الذي يقع مقره في مدينة سيهات بالمنطقة الشرقية ويُلقب بفريق \"الدانة\"؟",
        "answer": "الخليج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم الفلكي وخبير الأرصاد السعودي الشهير بتقديم تقارير الطقس والمواسم؟",
        "answer": "خالد الزعاق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُطلق على تصورات الإنسان غير المرتبطة بالواقع والتي تنبع من الإبداع أو الرغبة؟",
        "answer": "خيال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو انتهاك للأمانة والثقة أو خرق لعهد متفق عليه",
        "answer": "خيانة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الشيء الذي يحوي مدنًا بلا بيوت وغابات بلا أشجار، وبحارًا بلا ماء؟",
        "answer": "الخريطة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الزينة والحلي المعدني الذي تضعه المرأة في قدمها؟",
        "answer": "خلخال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نبات عشبي تستخدم بذوره كتوابل ذات نكهة لاذعة وقوية",
        "answer": "خردل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الوالي الأموي الذي أمر بتحويل صفوف المصلين في المسجد الحرام لتكون دائرية حول الكعبة المشرفة؟",
        "answer": "خالد القسري",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "حالة من التعب الشديد والإرهاق وفقدان للطاقة والنشاط",
        "answer": "خمول",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُستخدم لوصف القدرة على الحركة السريعة دون بذل جهد كبير؟",
        "answer": "خفة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "رداء على الرأس يضعه الإنسان للحماية من المخاطر",
        "answer": "خوذة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي جليل كان من أوائل من أظهر إسلامه، وتعرض لعذاب شديد ومستمر من المشركين في مكة",
        "answer": "خباب بن الأرت (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المقصود بلفظ \"الصافنات\" الذي ورد في القرآن الكريم؟",
        "answer": "خيول",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللون المعتمد والمميز للسجاد المخصص لاستقبال ضيوف الدولة وقادتها في المملكة العربية السعودية؟",
        "answer": "الخزامى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على ماينقل ويحدّث به قولًا أو كتابة؟",
        "answer": "خبر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الوسواس أو الشيطان الذي يتربص بالعبد ليقطع عليه خشوعه وصلاته؟",
        "answer": "خنزب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الوصف الكيميائي لعناصر المجموعة الثامنة عشر التي تمتاز باستقرارها وعدم تفاعلها؟",
        "answer": "خاملة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ط",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي المعروف بذي النور ؟",
        "answer": "الطفيل بن عمرو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "جبل أقسم الله تعالى به في القرآن الكريم ؟",
        "answer": "الطور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو خلق مذموم يدل على حب المال وجمعه ؟",
        "answer": "طمع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما معنى حجارة من سجيل ؟",
        "answer": "طين متحجر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أول باب في كتب الفقه ؟",
        "answer": "الطهارة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما أسم المدينة المنورة ؟",
        "answer": "طيبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بما كانت تدعى أم المؤمنين خديجة في الجاهلية ؟",
        "answer": "الطاهرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو حالة الجو في فترة زمنية قصيرة ؟",
        "answer": "الطقس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يحملك إلى حيث تريد و هو واقف ؟",
        "answer": "الطريق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي سماه الرسول صلى الله عليه وسلم بالجود والخير ؟",
        "answer": "طلحة بن عبيدالله",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الحالة التي تتكون فيها شخصية الإنسان مستقبلا و تدور حوله كثير من أسباب العقد النفسية ؟",
        "answer": "الطفولة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء يوم القيامة ؟",
        "answer": "الطامة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من سور القرآن الكريم التي بدأت بحرفين ؟",
        "answer": "طه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "البحيرة التي سيشربها يأجوج و مأجوج في آخر الزمان ؟",
        "answer": "طبرية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من صفات الماء ؟",
        "answer": "طهور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "المدينة التي رحل إليها النبي صلى الله عليه و سلم قبل المدينة ؟",
        "answer": "الطائف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من سور القرآن الكريم تسمى بسورة النساء الصغرى ؟",
        "answer": "الطلاق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين كلم الله سبحانه و تعالى نبي الله موسى عليه السلام ؟",
        "answer": "طور سيناء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشخص الذي لا يغضب إذا أخرجت له لسانك ؟",
        "answer": "الطبيب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مدينة لبنانية و ميناء مهم تشتهر ببساتين الزيتون و فيها معمل لتكريري البترول ؟",
        "answer": "طرابلس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو وزن للأثقال يقدر بألف كيلو جرام ؟",
        "answer": "طن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو ما يتعذر فهمه و فك رموزه ؟",
        "answer": "طلاسم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أسماء الضروس ؟",
        "answer": "الطاحنة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مؤرخ مسلم مفسر من مؤلفاته \" تاريخ الأمم والملوك \" فمن هو ؟",
        "answer": "الطبري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو تجاوز الحد في الظلم أو في الماء ؟",
        "answer": "الطغيان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة : كلمة مرادفة لكلمة نوادر ؟",
        "answer": "طرائف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الوصف الذي ورد في الحديث الشريف للقطط ؟",
        "answer": "الطوافون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قال عنه الرسول صلى الله عليه وسلم أنه شطر الإيمان ؟",
        "answer": "الطهور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي الصواريخ التي تطلقها الغواصات في البحار ؟",
        "answer": "طوربيد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "دراسة المعالم الطبيعية لسطح الأرض ووصفها بما في ذلك وتمثيلها على الخرائط ؟",
        "answer": "الطبوغرافيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الكائن الحي الذي يعيش على غيره ؟",
        "answer": "طفيلي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو أول قائد عربي مسلم دخل الأندلس بجيوشه ؟",
        "answer": "طارق بن زياد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي سمى بالفياض ؟",
        "answer": "طلحة بن عبيدالله",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد أصحاب المعلقات السبعة قتل وعمره ست وعشرون سنة بسبب هجائه عمرو بن هند فمن هو ؟",
        "answer": "طرفة بن العبد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو أول ملوك الدولة السلجوقية ؟",
        "answer": "طغرلبك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو العضو المختص بتكوين كريات الدم الحمراء ؟",
        "answer": "الطحال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي البثور الجلدية التي تنشأ بسبب بعض الأمراض ؟",
        "answer": "طفح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "فيزيائي بريطاني اشتهر بدراساته الخاصة بالديناميكا الحرارية ؟",
        "answer": "طمسون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو نظام اجتماعي يعتمد على الفصل بين أفراد المجتمع ؟",
        "answer": "طبقية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "قال تعالى : ( وهديناه النجدين ) ما المقصود بالنجدين في هذه الآية ؟",
        "answer": "طريق الخير والشر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مدينة أسبانية تاريخية حكمها المسلمون قرونا طويلة ؟",
        "answer": "طليطلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المدينة التي بنيت وهدمت تسع مرات ؟",
        "answer": "طرواده",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الأمراض الخطيرة كان يسمى الموت الأسود ؟",
        "answer": "الطاعون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أين أقيم أول مؤتمر إسلامي ؟",
        "answer": "الطائف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي الخضرة التي تعلو الماء الراكد أو النهري ؟",
        "answer": "طحلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة اصطلاح بلاغي يطلق على الجمع بين معنيين متضادين ؟",
        "answer": "طباق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صوت النحل أو الذبابة عند طيرانها ؟",
        "answer": "طنين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى القراءة التي يقرأ بها المكفوفين ؟",
        "answer": "طريقة برايل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الشخصية الخيالية التي تربّت في الغابة مع القرود بعد مقتل والديه النبلاء؟",
        "answer": "طرزان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الثنائي لمهاجم سعودي لعب للنادي الأهلي والنصر والاتحاد؟",
        "answer": "طلال المشعل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي عملية تحويل حبوب القمح والذرة إلى دقيق",
        "answer": "الطحن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الذي يُطلق على الممارسات أو المعتقدات الخرافية التي تتضمن استخدام رموز أو كلمات يُعتقد أن لها قوى للحماية أو التأثير؟",
        "answer": "طلاسم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم الجبل الذي كلم الله عليه موسى عليه السلام، ويقع في شبه جزيرة سيناء؟",
        "answer": "طور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم العام للإجراءات أو الاحتفالات الرسمية ذات الطابع الديني أو الثقافي المتوارث؟",
        "answer": "طقوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي العبادة التي كان يفعلها الناس منذ سيدنا إبراهيم عليه السلام ويستحب فيها الدعاء وذكر الله؟",
        "answer": "الطواف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو القائد التاريخي الذي يُعتبر المؤسس الفعلي والمنظم الأول للدولة السلجوقية في التاريخ؟",
        "answer": "طغرل بيك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يعد من أبرز المفسرين للقرآن الكريم والمؤرخين المسلمين ومؤلف كتاب تاريخ الرسل والملوك؟",
        "answer": "الطبري",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي مقدمة الجيش التي تتقدم لمعرفة أحوال العدو",
        "answer": "طليعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تعبر عن حالة غير متوقعة وتتطلب حلًا سريعًا؟",
        "answer": "طارئة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح المستخدم للإشارة إلى إصدار معين أو نسخة محددة من جهاز أو منتج إلكتروني يحمل مواصفات خاصة؟",
        "answer": "طراز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الطائر الوحيد الذي يمتلك القدرة على الطيران إلى الخلف؟",
        "answer": "الطنان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الوصف الذي أطلقه النبي ﷺ على الهرة في الحديث الشريف لبيان طهارتها؟",
        "answer": "الطوافون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكائنات الحية النباتية البسيطة، وغالباً مائية، تقوم بالبناء الضوئي؟",
        "answer": "طحالب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المرض الوبائي الفتاك الذي عُرف تاريخياً باسم الموت الأسود؟",
        "answer": "الطاعون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل المثل الشعبي: لو فيه خير ما عافه ..........",
        "answer": "الطير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول قائد مسلم عبر المضيق الذي سمي باسمه لفتح الأندلس؟",
        "answer": "طارق بن زياد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المحافظة التابعة لمنطقة الحدود الشمالية في السعودية وتقع على الحدود الأردنية؟",
        "answer": "طريف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو العضو الحيوي الذي يعمل على محاربة العدوى وتنقية الدم وتخزين خلاياه؟",
        "answer": "الطحال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي العاصمة السياسية لجمهورية أوزبكستان؟",
        "answer": "طشقند",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الماء الباقي على خلقته ولم يتغير ويجوز استخدامه للوضوء",
        "answer": "طهور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو التعصب والولاء بشكل مفرط لجماعة معينة بناءً على روابط عقدية مما يؤدي إلى الانقسام داخل المجتمع الواحد؟",
        "answer": "الطائفية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يصف التصرف بتهور دون التفكير بالعواقب؟",
        "answer": "طيش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة دولة ليبيا؟",
        "answer": "طرابلس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح البيولوجي الذي يصف كائناً حياً يعيش داخل كائن حي آخر ويستمد منه غذاءه، ويسبب له الضرر؟",
        "answer": "طفيليات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "شريط من الأرض يُشق ويُمهد تسهيلًا لانتقال المشاه والمركبات من مكان إلى آخر",
        "answer": "طريق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المسلسل الكوميدي السعودي الشهير الذي عُرض في رمضان لسنوات طويلة وناقش قضايا اجتماعية بأسلوب ساخر؟",
        "answer": "طاش ما طاش",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم يطلق على كل ماعُبد من دون الله وهو راضٍ بذلك",
        "answer": "الطاغوت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة تطلق على إزالة النجاسة عن البدن أو الثوب أو المكان",
        "answer": "الطهارة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى التغيرات والبثور المفاجئة التي تظهر على سطح الجلد نتيجة التحسس؟",
        "answer": "طفح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أكمل المثل الشعبي: كلٍ يرى الناس بعين .........",
        "answer": "طبعه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي المحافظة الّتي يقام فيها سنويًا مهرجان ولي العهد للهجن؟",
        "answer": "الطائف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة الإسبانية التاريخية التي كانت عاصمة مملكة القوط الغربيين قبل الفتح الإسلامي، واشتهرت بمركز الترجمة في العصور الوسطى؟",
        "answer": "طليطلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما العلم الذي يدرس أشكال سطح الأرض وتضاريسه؟",
        "answer": "طوبوغرافيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نوع شائع من الأحجار الجيرية يُستخدم للرسم والكتابة على الأحجار والألواح؟",
        "answer": "طباشير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المدينة القديمة التي وقعت فيها حرب شهيرة ذُكرت في ملحمة الإلياذة؟",
        "answer": "طروادة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الملك الذي ورد ذكره في القرآن واختاره الله لبني إسرائيل رغم اعتراضهم على فقره؟",
        "answer": "طالوت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم القوة التي تدفع جسماً يتحرك في مسار دائري إلى الخارج بعيداً عن مركز الدوران؟",
        "answer": "الطرد المركزي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم الذي يُطلق على الممالك الإسلامية الصغيرة التي ظهرت في الأندلس بعد سقوط الخلافة الأموية في قرطبة؟",
        "answer": "طوائف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما يؤخذ من الأسماك الصغيرة ويقطع لحمه لإغواء الأسماك الأخرى",
        "answer": "طعم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "جبل شامخ ومَعلم طبيعي بارز يقع في محافظة عقلة الصقور، يشتهر بلونه الأسود المحمر ويُعد مقصدًا لهواة الهايكنج والتخييم",
        "answer": "جبل طمية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي أطلقه النبي ﷺ على المدينة المنورة لحبه لها؟",
        "answer": "طيبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل صاحب القصة الشهيرة في وضع القطن في أذنيه لئلا يسمع القرآن، لكنه سمع القرآن فأسلم",
        "answer": "الطفيل بن عمرو الدوسي (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على الصف المنتظم من الناس والأشياء للإنتظار؟",
        "answer": "طابور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو أبغض الحلال عند الله كما في الأثر المشهور؟",
        "answer": "الطلاق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العاصمة الآسيوية التي كان يُطلق عليها قديماً اسم \"إيدو\" والذي يعني مدخل الخليج؟",
        "answer": "طوكيو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا سُميت السنة التاريخية الشهيرة في الخليج العربي التي تعرضت فيها سفن الغوص لإعصار مدمر أدى لغرق معظمها؟",
        "answer": "سنة الطبعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما التقسيم الاجتماعي أو الاقتصادي الذي يصنف الناس في مجموعات هرمية بناءً على الثروة أو المهنة أو المكانة؟",
        "answer": "طبقية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى علمياً الكائن الحي الصغير الذي يعيش ويتغذى على حساب كائن حي آخر ويسبب له الضرر؟",
        "answer": "طفيلي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل وأحد العشرة المبشرين بالجنة الذي قال عنه الرسول ﷺ: \"من سره أن ينظر إلى شهيد يمشي على وجه الأرض فلينظر إليه\"؟",
        "answer": "طلحة بن عبيد الله (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى الصوت المتواصل المرتفع الذي يصدر من أجنحة النحل أو الحشرات؟",
        "answer": "طنين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل، أحد العشرة المبشرين بالجنة، والذي اشتُهر ببذله وصدقه؟",
        "answer": "طلحة بن عبيد الله",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة التاريخية العريقة الواقعة في فلسطين وتشتهر ببحيرتها العذبة؟",
        "answer": "طبرية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح العسكري الذي يشير إلى القوات التي تتقدم في مقدمة الجيش لاستكشاف العدو وتأمين الطريق؟",
        "answer": "طلائع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجبل الذي رفعه الله فوق بني إسرائيل كالمظلة لإلزامهم بقبول التوراة والعمل بأحكامها بعد أن تراجعوا عن عهدهم؟",
        "answer": "طور سيناء (الطور)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل المقولة الشعبية: عنز ولو .........",
        "answer": "طارت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الّذي لا يفنى ولا يستحدث من العدم ويمكن تحويله من شكل إلى آخر؟",
        "answer": "الطاقة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي السمة الشخصية التي تدفع الفرد للسعي بقوة نحو تحقيق أهداف عالية أو منزلة رفيعة؟",
        "answer": "طموح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "اسم آخر للموز ذُكر فالقرآن الكريم",
        "answer": "الطلح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وادٍ مقدّس في سيناء، كلّم الله فيه نبيَّه موسى عليه السلام",
        "answer": "ُطوى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي السورة القرآنية التي كانت سبباً في إسلام عمر بن الخطاب (رضي الله عنه)؟",
        "answer": "طه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الحكاية الخفيفة التي تهدف إلى إضحاك الناس؟",
        "answer": "طرفة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللفظ اللغوي الذي يُعبر عن المطر الخفيف جداً أو الرذاذ الساكن الذي يبلل أسطح الأرض برفق؟",
        "answer": "الطل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل وسيد قبيلة دوس الذي لُقب بـ \"ذو النور\" بعد أن جعل الله في طرف سوطه نوراً؟",
        "answer": "الطفيل بن عمرو الدوسي (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "قوة مستمدة من أشعة الشمس قادرة على توليد الحرارة مباشرة وإحداث التفاعلات الكيميائية وإنتاج الكهرباء",
        "answer": "الطاقة الشمسية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة السعودية الشهيرة بإنتاجها الزراعي وتتبع إدارياً لمنطقة الجوف؟",
        "answer": "طبرجل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما التغير المفاجئ والدائم في المادة الوراثية للكائن الحي؟",
        "answer": "طفرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم سلسلة الجبال الشهيرة التي تقع في جنوب شبه جزيرة الأناضول بتركيا وتفصلها جغرافياً عن بلاد الشام؟",
        "answer": "طوروس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الكلمة القرآنية التي تصف شجرة في الجنة أو مقاماً حسناً؟",
        "answer": "طوبى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "احدى قطع الاسطول البحري لها قدرة على المناورة والقتال ومجهزة بالمدافع وتتميز بخفتها وسرعتها",
        "answer": "الطراد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم يوم القيامة الذي ورد في القرآن الكريم ويعني الحادثة العظمى التي تغشى كل شيء بأهوالها؟",
        "answer": "الطامة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى صوت الذباب والباعوض؟",
        "answer": "طنين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ث",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "صحابي جليل بايع الرسول صلى الله عليه وسلم على أن لا يسأل الناس شيئاً ؟",
        "answer": "ثوبان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "التي فقدت ولدها ؟",
        "answer": "ثكلى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق في اللغة على الجماعة من الناس ؟",
        "answer": "ثلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هى قبيلة نبي الله صالح عليه السلام ؟",
        "answer": "ثمود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطْلَق على المرأة التي سبق لها الزواج ؟",
        "answer": "ثيب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أول من دخل الكعبة ملبياً ؟",
        "answer": "ثمامة بن آثال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الإنس والجن ورد ذكرهما في القرآن الكريم باسم يجمعهما ؟",
        "answer": "ثقلان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة بمعنى الهلاك والخسران ؟",
        "answer": "ثبور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كم آية نزلت في الخمر ؟",
        "answer": "ثلاث آيات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي عام هجري فُرض الصــــوم ؟",
        "answer": "الثانية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو أحب الطعام عند الرسول صلى الله عليه وسلم ويتكون من الخبز والمرق ؟",
        "answer": "ثريد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بمعنى أجر ؟",
        "answer": "ثواب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تستطيع أن تقرأها من اليمين والشمال ؟",
        "answer": "ثلث",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي المرأة الثقيلة البطيئة ؟",
        "answer": "الثبطة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أول من أرضعت رسول الله صلى الله عليه وسلم ؟",
        "answer": "ثويبة مولاة أبي لهب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو السكون وعدم الحركة ؟",
        "answer": "ثبات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الغاز الذي يستعمل في إطفاء الحرائق ؟",
        "answer": "ثاني أكسيد الكربون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مولى لرسول الله صلى الله عليه وسلم ؟",
        "answer": "ثوبان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مضاد حيوي طبيعي يستخدم في الطعام والدواء ؟",
        "answer": "الثوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مؤلف كتاب فقه اللغة ؟",
        "answer": "الثعالبي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو التراب الندي ؟",
        "answer": "ثرى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الماء السائل سيلاناً شديدا ؟",
        "answer": "ثجاج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على جماعة النحل ؟",
        "answer": "ثول",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من خطباء المسلمين الأوائل لقب بخطيب الرسول صلى الله عليه وسلم ؟",
        "answer": "ثابت بن قيس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدة التي قام فيها احتلال الصليبيين في القدس ؟",
        "answer": "ثمان وثمانون عاما",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "جبل يقع في مكة اختبأ فيه الرسول صلى الله عليه وسلم وأبو بكر رضي الله عنه ؟",
        "answer": "ثور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يطلق على مجموعة النجوم المتلاصقة ؟",
        "answer": "ثريا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عشب من الفصيلة الزنبقية ؟",
        "answer": "ثوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الأبراج التي في السماء ؟",
        "answer": "الثور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صفة من أهم صفات الشجاعة ؟",
        "answer": "الثبات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كم عام أقام النبي صلى الله عليه وسلم في مكة بعد البعثة ؟",
        "answer": "ثلاثة عشر عاما",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مرض يصيب فروة شعر الإنسان",
        "answer": "ثعلبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "اسم الشاعر الجاهلي الملقب بالشنفري الأزدي من شعراء الصعاليك ؟",
        "answer": "ثابت بن أوس الأزدي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يطلق على سد مشهور بالعراق ؟",
        "answer": "الثرثار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كم عدد الفقرات في العمود الفقري في الإنسان ؟",
        "answer": "ثلاث وثلاثون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صاحب كتاب الذخيرة في الطب ؟",
        "answer": "ثابت بن قرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الجهاز الذي تسجل به حرارة الجو بطريقة آلية ؟",
        "answer": "ثرموجراف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الحيوانات الضخمة المجترة ؟",
        "answer": "الثور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مرض من أمراض الدم ؟",
        "answer": "الثلاسيميا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "فلز نادر يستخدم لصناعة الزجاج ؟",
        "answer": "ثايليسون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة بمعنى الحمقاء ؟",
        "answer": "الثَّـأطاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي عدد القلوب للأخطبـوط ؟",
        "answer": "ثلاث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الماء الذي يبقى في الشبكة ؟",
        "answer": "الثلج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "فيمن نزلت الآية الكريمة (( يا أيها الذين آمنوا لا ترفعوا أصواتكم فوق صوت النبي )) ؟",
        "answer": "ثابت بن قيس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بم تسمــى الحية العظيمـة ؟",
        "answer": "ثعبان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما معنى الشىء الخارق ؟",
        "answer": "ثاقب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمـــــى صوت الشاة ؟",
        "answer": "ثغاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من المظاهر الفلكية في الكون التي حيرت العلماء ؟",
        "answer": "الثقوب السوداء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المدينة الأثرية الواقعة في المنطقة الشرقية بالسعودية، والتي تُعد أكبر موقع هلينستي معروف في المنطقة حتى الآن؟",
        "answer": "ثاج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الاسم الذي يُطلق على مقر إقامة الجنود ومكان تدريبهم ومبيتهم",
        "answer": "ثكنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الكتلة الجلدية الصغيرة الحميدة التي تظهر نتيجة عدوى فيروسية؟",
        "answer": "ثالول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو فرع الفيزياء الذي يدرس العلاقة بين الحرارة والأشكال الأخرى للطاقة؟",
        "answer": "ثرموديناميكا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم علم مؤنث يعني الحمد والشكر",
        "answer": "ثناء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الغار الذي لجأ إليه النبي ﷺ مع أبي بكر الصديق (رضي الله عنه) في بداية رحلة الهجرة؟",
        "answer": "غار ثور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الطائفة من الحيوانات الفقارية التي ترضع صغارها؟",
        "answer": "ثدييات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة بمعنى فقد اتزانه بسبب شرب الخمر أو النعاس الشديد",
        "answer": "ثمل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نبات يٌستخدم في الطعام، يقوي المناعة ويخفض ضغط الدم، استخدمته الثقافات القديمة كمنشط وواقٍ للأمراض بينما اعتقدت ثقافات أخرى أنه يطرد الأرواح الشريرة",
        "answer": "الثوم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "غاز عديم اللون والرائحة يتركب من الكربون والأكسجين يذوب في الماء ويمكن تسييله بالضغط",
        "answer": "ثاني أكسيد الكربون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة بمعنى الغنى وكثرة المال والسعة في الرزق",
        "answer": "ثراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الحيوان الذي يعتمد على لسانه في الشم؟",
        "answer": "ثعبان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الجزاء الحسن الذي يناله المسلم على أعماله الصالحة في الدنيا والآخرة؟",
        "answer": "ثواب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مصطلح ورد ذكره في القرآن ويعني مجموعة من الناس",
        "answer": "ثلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على النقص في نظام أو دفاع يُمكن استغلاله؟",
        "answer": "ثغرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما ذا يسمى الجلد السميك الذي يتكون نتيجة الاحتكاك أو الضغط المستمر؟",
        "answer": "الثفن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الذي كان خطيب الأنصار ووصفه النبي بأنه من أهل الجنة وشهد أحد والخندق؟",
        "answer": "ثابت بن قيس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الفراغ أو الفتحة في جسم صلب؟",
        "answer": "ثقب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اضطراب صحي يتسبب بتقلبات مزاجيّة حادّة وتسبب للمصاب الهوس والاكتئاب",
        "answer": "ثنائي القطب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الأسنان الأربع الأمامية في مقدمة الفم؟",
        "answer": "الثنايا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على الجزء من النبات الذي يحتوي على البذور ويكون غالبًا صالحًا للأكل؟",
        "answer": "ثمرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو صاحب قصة الأسر الشهيرة الذي ربط في سارية المسجد ثم أسلم بعد إحسان الرسول ﷺ إليه؟",
        "answer": "ثمامة بن أثال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صفة في اللغة لما هو مكونًا من اثنين",
        "answer": "ثنائي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الصفة التي تطلق على الشخص كثير الكلام؟",
        "answer": "ثرثار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "محافظة في مدينة الرياض تلقب بـ\"أم البنادق\" وتشتهر بمعالم تراثية وقصور طينية",
        "answer": "ثادق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على التآكل الحاصل في الطبقة الّتي تحمي الأرض من الأشعة فوق البنفسجية الضارة؟",
        "answer": "ثقب الأوزون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الفجوة التي يمكن أن تشكل نقطة ضعف",
        "answer": "ثغرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على الانتقام من شخص أو جماعة ردًا على اعتداء سابق؟",
        "answer": "ثأر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ القرآني الذي ورد في سورة الطارق لوصف النجم الشديد الوهج واللمعان الذي يثقب بنوره ظلام الليل؟",
        "answer": "الثاقب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد الأسماء الذي يطلق على الإنس والجن وُرِد ذكره في القرآن",
        "answer": "الثقلان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على النظرة الحادة التي يكون فيها دقة ملاحظة وفهم عميق للأمور",
        "answer": "ثاقبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أكلة عربية شعبية عريقة، اشتهرت بأنها طعام النبي محمد ﷺ المفضل وهو خبز يابس يُفتّ ويُصب عليه مرق اللحم",
        "answer": "الثريد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة بمعنى الاستقرار والدوام والرسوخ وعدم الزوال أو التحرك",
        "answer": "ثبات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الإنزيم الذي يعتبر العامل الرئيسي في تجلط الدم؟",
        "answer": "الثرومبين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي القبيلة التي واجهت المسلمين في غزوة حنين وأسلمت بعد الغزوة؟",
        "answer": "ثقيف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على الأم الّتي فقدت ابنها؟",
        "answer": "ثَكلى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يشير إلى التربة الرطبة أو الطينية؟",
        "answer": "ثرى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو وصف المرأة التي سبق لها الزواج في الفقه الإسلامي؟",
        "answer": "ثيب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عشب يمتد على الأرض ويشتبك كاللبدة ويُستخدم لتغطية الحدائق والملاعب ويستخدم كعلف ومراعٍ للمواشي",
        "answer": "ثيّل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو صانع المحتوى المرئي السعودي الذي يُعد من رواد الفلوغات، واشتهر ببداياته بتوثيق يومياته كطالب مبتعث في كندا؟",
        "answer": "ثنيان خالد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "المقابل النقدي الذي يتفق عليه البائع والمشتري نظير الحصول على سلعة أو خدمة",
        "answer": "ثمن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أداة مأمونة وشائعة للحصول على النار عن طريق عملية كيميائية ناتجة عن احتكاكها بسطح خشن يحتوي على الفسفور الأحمر",
        "answer": "الثقاب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تأتي بمعنى داوم وواظب عليه بإصرار",
        "answer": "ثابر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الأجسام الفلكية ذات الجاذبية الهائلة التي لا يفلت منها حتى الضوء؟",
        "answer": "ثقوب سوداء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "تغيير جذري وشامل وسريع في الأوضاع السياسية أو الاجتماعية أو الاقتصادية ، يقوم به مجموعة كبيرة من الناس نتيجة غضب أو تطلع للأفضل",
        "answer": "ثورة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المسلسل الدرامي السعودي الشهير الذي تدور قصته حول معلم يحمل الماجستير ويحاول إصلاح وتوجيه طلاب ثانوية؟",
        "answer": "ثانوية النسيم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم قوم صالح الذين أهلكهم الله تعالى بالصيحة والرجفة؟",
        "answer": "ثمود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بماذا يوصف الشيء الغالي ذو القيمة العالية؟",
        "answer": "ثمين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على شعور الإنسان بقدرته على اتخاذ القرارات وتحقيق الأهداف دون تردد؟",
        "answer": "ثقة بالنفس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو التحول الاقتصادي والاجتماعي الذي بدأ في بريطانيا في القرن الثامن عشر؟",
        "answer": "الثورة الصناعية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى تساقط الشعر المفاجئ في مناطق دائرية بالرأس؟",
        "answer": "الثعلبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكمية في الفيزياء التي تربط بين طاقة الفوتون وتردده؟",
        "answer": "ثابت بلانك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو مجموع القيم والعلوم والمعارف والفنون المتوارثة في المجتمع؟",
        "answer": "ثقافة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما حرف العطف الذي يدل على الترتيب مع وجود مهلة زمنية بين الحدثين؟",
        "answer": "ثم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "منطقة صحراوية شمال الرياض اشتهرت بكونها وجهة ترفيهية للتخييم والتنزه وسباقات الهجن والخيول",
        "answer": "الثمامة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الصفة التي تُطلق على الشيء الذي لا يتغير مع الزمن أو الظروف؟",
        "answer": "ثابت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الحيوان المفترس الذي يضرب به المثل بمكره ودهائه وينتمي لفصيلة الكلبيات؟",
        "answer": "الثعلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى صوت الشاة؟",
        "answer": "ثغاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الغاز الذي ينتج عن تنفس الكائنات الحية واحتراق المواد العضوية، وتساهم زيادته في ظاهرة الاحتباس الحراري؟",
        "answer": "ثاني أكسيد الكربون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ع",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العام الذي ولد فيه سيدنا محمد صلى الله عليه وسلم ؟",
        "answer": "عام الفيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى طعام المولود في اليوم السابع ؟",
        "answer": "العقيقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو صوت الذئب ؟",
        "answer": "عواء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يوم مشهور من يصومه يكفر السنة الماضية نجى الله فيه نبي الله موسى عليه السلام ؟",
        "answer": "عاشوراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الجليل الذي تستحى منه الملائكة ؟",
        "answer": "عثمان بن عفان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أحد الاختراعات لتصحيح النظر ؟",
        "answer": "العدسات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إذا طال قصر فما هو ؟",
        "answer": "العمر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من خامس الخلفاء الراشدين ؟",
        "answer": "عمر بن عبد العزيز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سورة قال عنها الشافعي : لو لم يترك على المسلمين غيرها لكفتهم ؟",
        "answer": "العصر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي قافلة الجمال التي تكون محملة بالبضائع و السلع ؟",
        "answer": "عير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الشخص المريض ؟",
        "answer": "عليل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أول فدائي في الإسلام ؟",
        "answer": "علي بن أبي طالب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الذي وصف بأنه ( حبر هذه الأمة ) ؟",
        "answer": "عبدالله بن عباس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الحيوان الصنم الذي عبدته بني إسرائيل ؟",
        "answer": "عجل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لقب السيدة مريم عليها السلام ؟",
        "answer": "العذراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو اول من حمل لقب امير المؤمنين ؟",
        "answer": "عمر بن الخطاب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من قائد غزوة ذات السلاسل ؟",
        "answer": "عمرو بن العاص",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قائد عسكري عربي مسلم فتح شمال أفريقيا وبنى مدينة القيروان ؟",
        "answer": "عقبة بن نافع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الحشرات التي ذكرت في القرآن ؟",
        "answer": "العنكبوت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الاسم القديم الذي كانت تعرفه العرب لنظام الشرطة ؟",
        "answer": "العسس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الخليفة الذي تولى أربعة من أبنائه الخلافة ؟",
        "answer": "عبدالملك بن مروان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو قائد الاسطول الاسلامى في اول معركة بحرية ؟",
        "answer": "عبدالله بن أبي السرح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماد صلبة لا طعم لها و لا ريح إلا إذا أحرقت أو سحقت ينبعث منها رائحة زكيه ؟",
        "answer": "العنبر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الملقب بصقر قريش ؟",
        "answer": "عبدالرحمن الداخل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أحفاد نوح عليه السلام و إليه تنسب العرب ؟",
        "answer": "عدنان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من القائل : أنا الذي سمتني أمي حيدرة ؟",
        "answer": "علي بن أبي طالب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسبب نقص فيتامين ( أ ) ؟",
        "answer": "العمى الليلي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الداء المزمن الذي لا علاج له ؟",
        "answer": "عضال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أول من حاول الطيران ؟",
        "answer": "عباس بن فرناس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "المرأة التي لم تتزوج ؟",
        "answer": "عذراء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي الناقة التي مضى على حملها عشرة أشهر ؟",
        "answer": "العشراء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اسم أبو جهل ؟",
        "answer": "عمرو بن هشام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أمير الرماة في عزوة احد ؟",
        "answer": "عبدالله بن جبير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الذي يطلق على الخط الذي كتب به القرآن الكريم ؟",
        "answer": "العثماني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بماذا يسمي يوم الجمعة في الجاهلية ؟",
        "answer": "العروبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "اللقب الذي أطلق على القارة الأمريكية عندما اكتشفها كولومبوس ؟",
        "answer": "العالم الجديد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "شقيقان لا يلتقيان إلا دقيقة واحدة في الساعة ؟",
        "answer": "عقارب الساعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "تقسيم البشرية على أساس باطل من بعض المعايير كلون البشرة و نوع الشعر و اللغة و العائلة و البلد ؟",
        "answer": "العنصرية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم الملقب ببائع الملوك ؟",
        "answer": "العز بن عبدالسلام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "معركة كانت بين المسلمين و التتار بقيادة قطز و معاونه الظاهر بيبرس ؟",
        "answer": "عين جالوت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الذي لقب بذي البجادين ؟",
        "answer": "عبدالله بن نهم المازني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما إسم السوق الذي كان العرب يتبارون فيه بالشعر وغيره ؟",
        "answer": "عكاظ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى ذكر الضفدع ؟",
        "answer": "العلجوم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو قائد المسلمين في معركة بلاط الشهداء ؟",
        "answer": "عبدالله الغافقي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "لغة اليهود ؟",
        "answer": "العبرية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يطلق على المرأة المتحببة إلى زوجها ؟",
        "answer": "عروب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو آخر سلطان عثماني وقد رفض بيع فلسطين ؟",
        "answer": "عبدالحميد الثاني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي مادة قرن الفيل ؟",
        "answer": "العاج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المفهوم السياسي الذي يفصل الدين عن الدولة ومؤسساتها؟",
        "answer": "علمانية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة الفصيحة والجزلة التي تُطلق في اللغة كاسم من أسماء الذهب الخالص؟",
        "answer": "العسجد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العظمة الصغيرة الموجودة في أسفل العمود الفقري والتي يبعث منها الإنسان يوم القيامة؟",
        "answer": "العصعص",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة بمعنى الأصل و السلالة و المنبع",
        "answer": "العِرْق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الجليل البطل الذي لقبه الرسول ﷺ بـ \"الراكب المهاجر\" عند قدومه مسلماً؟",
        "answer": "عكرمة بن عمرو بن هشام (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الشطر الثاني في البيت الشعري وتكون به القافية؟",
        "answer": "العجز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم الحقيقي للفارس والشاعر الجاهلي الشهير بلقب \"الزير سالم\" والذي قاد قومه في حرب البسوس؟",
        "answer": "عدي بن ربيعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يطلق على الشخص الذي يعمل سراً لصالح دولة أجنبية أو منظمة معادية لجمع المعلومات؟",
        "answer": "عميل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللقب والوصف الذي أطلقه القرآن الكريم على الشخص الذي كان له نفوذ وسلطة في قصة يوسف (عليه السلام)؟",
        "answer": "عزيز مصر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو تعبير يُطلق لوصف أعراض تصيب البطن بعد تناول الطعام، مثل ألم في المعدة وضغط وانتفاخ",
        "answer": "عسر الهضم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم يوم الجمعة عند العرب في الجاهلية؟",
        "answer": "العروبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الخليفة العباسي الذي حكم يومًا واحدًا فقط؟",
        "answer": "عبدالله بن المعتز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو اللاعب صاحب الرقم القياسي كأكبر لاعب سنًا لعب في كأس العالم؟",
        "answer": "عصام الحضري",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اتفاق يلتزم به شخص أو أكثر بما ورد فيه، وهو في الغالب وثيقة الموقعين عليه",
        "answer": "عقد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الخبير الذي اتخذه النبي ﷺ دليلاً لطريق الهجرة إلى المدينة المنورة ولم يكن قد أسلم بعد؟",
        "answer": "عبدالله بن أريقط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لقب يمنح للشخصيات الداعمة مادياً ومعنوياً في الأندية السعودية، ويمتلكون عادة نفوذاً وتأثيراً خاصاً داخل النادي؟",
        "answer": "عضو شرف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو مؤسس الدولة العثمانية؟",
        "answer": "عثمان بن أرطغرل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى تجمع الثمار المتراصة حول غصن أو محور مشترك كالعنب؟",
        "answer": "عنقود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو التابعي الجليل الذي يُعد من الفقهاء السبعة للمدينة، وكان راوية ثقة عن عائشة رضي الله عنها؟",
        "answer": "عروة بن الزبير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللفظ اللغوي الذي يُطلق على الإحساس الفيزيولوجي الناشئ عن حاجة الضمآن الشديدة لتناول الماء؟",
        "answer": "عطش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الجليل الذي كان آخر من استشهد من القادة الثلاثة الذين عينهم النبي ﷺ في معركة مؤتة؟",
        "answer": "عبد الله بن رواحة (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الرائد الأدبي الذي يُعد أول من وضع أصول وأساليب \"فن الرسائل\" في الأدب العربي وقيل عنه \"بُدئت الكتابة به\"؟",
        "answer": "عبد الحميد الكاتب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي وردت في القرآن الكريم وتعني جانب أو حافة الوادي؟",
        "answer": "العدوة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الأداة الشفافة التي تُستخدم لتجميع الضوء أو تفريقه؟",
        "answer": "العدسة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القبيلة العربية البائدة التي ذُكرت في القرآن الكريم بأنها أرسل إليها النبي هود عليه السلام، وعاشت في منطقة الأحقاف؟",
        "answer": "عاد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الشاعر النبطي السعودي الذي يُعد من دهاة وجبال الشعر الشعبي، واشتهر بجزالة قصائد الحكمة والوصف الفريدة؟",
        "answer": "عبدالله بن زويبن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول ميناء بحري تاريخي تم إنشاؤه على ساحل الخليج العربي في السعودية؟",
        "answer": "ميناء العقير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي جليل دعا ربه أن تطأ عرجته الجنة واستشهد في أحد",
        "answer": "عمرو بن الجموح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العلم الذي يهتم بدراسة أوزان الشعر العربي وبحوره وتفعيلاته ؟",
        "answer": "عروض",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أشهر الأسواق العربية القديمة وكان يقام مرة واحدة كل عام لمدة 20 يوم عند ظهور هلال شهر ذو القعدة",
        "answer": "عكاظ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الجليل الذي كان يُعرف في الجاهلية بعبد عمرو، ثم غيّر اسمه إلى اسمٍ فيه تعظيم لله؟",
        "answer": "عبدالرحمن بن عوف (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم الشهير المتداول في الأثر والكتب لملَك الموت الموكل بقبض الأرواح؟",
        "answer": "عزرائيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو القائد المسلم الذي قاد معركة \"ذات الصواري\" وانتصر فيها على البيزنطيين؟",
        "answer": "عبد الله بن أبي السرح (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أول مولود للمهاجرين في المدينة واستبشر المسلمون بمولده؟",
        "answer": "عبدالله بن الزبير بن العوام (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو المهاجم المغربي الذي حقق لقب الدوري السعودي مع فريقي الاتحاد والنصر واشتهر بلقب \"الساطي\"؟",
        "answer": "عبد الرزاق حمد الله",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُطلق على عدد 500 إلى 1000 من الإبل؟",
        "answer": "العرج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللفظ اللغوي الذي يُطلق على الشخص المريض أو السقيم؟",
        "answer": "العليل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الفارس والشاعر المخضرم من مذحج الذي لُقب بـ \"فارس العرب\"؟",
        "answer": "عمرو بن معدي كرب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الإجراء الذي يتم بموجبه تنحية مسؤول من منصبه؟",
        "answer": "عزل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الحكمة العربية الشهيرة التي تعني أن رجاحة العقل هي التمييز الحقيقي للإنسان؟",
        "answer": "العقل زينة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الصحابي الجليل الذي قاد جيوش المسلمين لفتح مصر عهد عمر بن الخطاب (رضي الله عنه)؟",
        "answer": "عمرو بن العاص (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو آخر حاكم للدولة السعودية الثانية؟",
        "answer": "عبدالرحمن بن فيصل آل سعود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المقدار الفيزيائي الذي يقيس مدى قدرة القوة على تدوير جسم حول محور؟",
        "answer": "عزم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "سائل ملحي أغلبه ماء تفرزه بعض الغدد الموجودة في الجلد، وظيفته تبريد الجسم عن طريق التبخر",
        "answer": "العرق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو السبب الجوهري أو الدافع لحدوث شيء ما؟",
        "answer": "علة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد المسلم الذي قاد جيش المسلمين في معركة بلاط الشهداء ضد الفرنجة؟",
        "answer": "عبد الرحمن الغافقي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى ذكر الضفدع في اللغة العربية؟",
        "answer": "العلجوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما يطلق على الخيل حين تجري للغارة على العدو",
        "answer": "العاديات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الخليفة الأموي الذي لُقب بـ \"خامس الخلفاء الراشدين\" لعدله وزهده؟",
        "answer": "عمر بن عبد العزيز (رحمه الله)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو أول من آمن من الصبيان بالنبي محمد ﷺ ؟",
        "answer": "علي بن أبي طالب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الرقصة التقليدية التي تُؤدى في بعض دول الخليج العربي؟",
        "answer": "العرضة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو حارس المرمى السعودي لعب لكلٍ من الأهلي والهلال والاتحاد والشباب؟",
        "answer": "عبد الله المعيوف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المعركة الفاصلة بين المسلمين بقيادة سيف الدين قطز والمغول، والتي أوقفت التوسع المغولي غرباً؟",
        "answer": "عين جالوت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وظيفة إدارية وفن إجتماعي هدفها إقامة علاقات التفاهم المتبادل بين المؤسسات والجمهور",
        "answer": "العلاقات العامة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الخط الذي كُتب به المصحف الشريف؟",
        "answer": "الخط العثماني",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الخليفة الأموي الّذي يُعتبر أول من صك النقود عند العرب؟",
        "answer": "عبدالملك بن مروان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل الذي عُرف بثرائه الواسع وكان من أغنى تجار مكة في الإسلام؟",
        "answer": "عبد الرحمن بن عوف (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد المسلم الذي شكّل وقاد \"كتيبة الموت\" الاستشهادية في معركة اليرموك؟",
        "answer": "عكرمة بن أبي جهل (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الدرس أو الموعظة التي يمكن استخلاصها من حدث أو قصة تاريخية؟",
        "answer": "عبرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل الذي كان من أوائل من أسلم، وقال فيه النبي صلى الله عليه وسلم \"تقتله الفئة الباغية\"؟",
        "answer": "عمار بن ياسر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا كان يُطلق قديماً على رجال الشرطة والأمن الذين يطوفون ليلاً لحراسة المدينة؟",
        "answer": "العسس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو المذهب الفلسفي الّذي يرفض الجوانب الأساسية في الوجود الإنساني، معتقدًا أن الحياة بلا معنى أو هدف؟",
        "answer": "العدمية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي قواعد غير مكتوبة نشأت من اعتياد الناس على سلوك معين في تنظيم شؤونهم، مع اعتقادهم بوجوب التزامها واكتسابها قوة ملزمة بموجب القانون",
        "answer": "العرف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مبلغ جزئي يدفع عند توقيع العقد لضمان جدية التعاقد",
        "answer": "عربون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللقب الشهير الذي أُطلق على القارة الأمريكية عقب اكتشافها؟",
        "answer": "العالم الجديد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الذي دخل الجنة ولم يسجد لله سجدة واحدة لأنه استشهد فور إسلامه؟",
        "answer": "عمرو بن ثابت (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أول سورة نزلت آياتها الأولى على النبي ﷺ في غار حراء، وبدأت بالأمر بالقراءة؟",
        "answer": "سورة العلق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الرائحة الزكية الطيبة التي تفوح وتنتشر",
        "answer": "عبق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة التي تمتلك أكبر احتياطي من الكبريت؟",
        "answer": "العراق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل الذي شرب دم الحجامة الخاص بالنبي ﷺ؟",
        "answer": "عبدالله بن الزبير (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الأديب العباسي البارز الذي نقل كتاب \"كليلة ودمنة\" إلى العربية وصاغه بأسلوبه الأدبي البليغ؟",
        "answer": "عبد الله بن المقفع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو النبع أو البئر الذي يتدفق منه الماء بشكل طبيعي؟",
        "answer": "عين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل الذي ضرب أروع الأمثلة في الصبر على المرض ثلاثين عاماً، فأكرمه الله بأن كانت الملائكة تسلم عليه وتصافحه؟",
        "answer": "عمران بن حصين (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نوع من التمر يزرع بشكل رئيسي في المدينة المنورة، و تشتهر بلونها الداكن المائل إلى السواد",
        "answer": "العجوة / العنبرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي تذكره بعض الآثار التاريخية والتفسيرية لإبليس قبل طرده من رحمة الله؟",
        "answer": "عزازيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُطلق في اللغة العربية على السعف الأخضر أو الجريد الطويل الخاص بأشجار النخيل؟",
        "answer": "العسيب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي تعني في اللغة الجيش الضخم العظيم والكثير العدد؟",
        "answer": "عرمرم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يهودي الأصل تظاهر بالإسلام، أشعل نار الفتنة في عهد عثمان بن عفان",
        "answer": "عبدالله بن سبأ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللفظ القرآني الذي يُطلق على غصن أو عذق النخلة القديم المنحني الذي يحمل الثمار؟",
        "answer": "العرجون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي المادة التي لا يمكن تجزئتها كيميائيًا إلى مواد أبسط منها؟",
        "answer": "العنصر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الحيوان الذي ارتبط بقصة بني إسرائيل والسامري وذكر في القرآن الكريم أربع مرات؟",
        "answer": "العجل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الاجتماعي والقبلي الذي يُطلق على الجماعة من الناس الذين ينحدرون من جد واحد، ويربطهم تضامن وعادات مشتركة؟",
        "answer": "العشيرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم المسلم الّذي يعد أول من اشتهر بمحاولة الطيران عمليًا في التاريخ؟",
        "answer": "عباس بن فرناس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الذبيحة التي تُذبح في اليوم السابع من ولادة المولود؟",
        "answer": "عقيقة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يصف تجاوز المصروفات للإيرادات في ميزانية دولة أو مؤسسة؟",
        "answer": "عجز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المادة المتكونة في أمعاء أحد أنواع الحيتان، وتُستخدم كمادة مثبتة في صناعة العطور الفاخرة؟",
        "answer": "عنبر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي وحدة قياس سرعة السفن البحرية؟",
        "answer": "العُقدة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الملكة الذهنية التي يتميز بها الإنسان ويستخدمها للتمييز واتخاذ القرارات؟",
        "answer": "العقل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الكوكب الأقرب إلى الشمس والذي يتميز بأقصر سنة كوكبية في مجموعتنا الشمسية؟",
        "answer": "عطارد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الخليج الّذي تطل عليه مدينة الدمام؟",
        "answer": "العربي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الحقيقي للصحابي الجليل أبي بكر الصديق (رضي الله عنه)؟",
        "answer": "عبدالله بن أبي قحافة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل وأحد العشرة المبشرين بالجنة، الذي ثبت في الأثر أن النبي ﷺ أمّ الناس وصلى خلفه ركعة في إحدى الغزوات؟",
        "answer": "عبد الرحمن بن عوف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي الخلافة التي حكمت الدولة الإسلامية بعد سقوط الخلافة الأموية؟",
        "answer": "الخلافة العباسية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من معجزات سيدنا موسى عليه السلام",
        "answer": "العصا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي جليل من أصحاب الهجرتين، كَتب مصحفًا بيده يُنسب إليه وشهد الغزوات كلها",
        "answer": "عبدالله بن مسعود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي تعني الميل والانحراف عن الاستقامة، ووردت في القرآن كصفة منفيّة عن الكتاب الكريم؟",
        "answer": "عوج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الهداف التاريخي للدوري السعودي للمحترفين برصيد 161 هدفاً؟",
        "answer": "عمر السومة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الذي أعطى مفاتيح الكعبة للرسول ﷺ؟",
        "answer": "عثمان بن طلحة (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماسم المنطقة التي انتصر بها المسلمون على التتار في فلسطين؟",
        "answer": "عين جالوت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الحقيقي لـ \"أبي جهل\" فرعون هذه الأمة؟",
        "answer": "عمرو بن هشام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الشاعر الجاهلي الشجاع المعروف بفروسيته وقصائده التي عبر فيها عن حبه لعبلة؟",
        "answer": "عنترة بن شداد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول خليفة للمسلمين لُقب بـ \"أمير المؤمنين\"؟",
        "answer": "عمر بن الخطاب (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الطائر الصغير من العصفوريات، المشهور بعذوبة صوته وكثرة ألحانه، ويكثر ظهوره في الربيع؟",
        "answer": "العندليب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة الأردنية الساحلية الوحيدة التي تقع على خليج يحمل اسمها؟",
        "answer": "العقبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الاسم الثاني لناقة الرسول صلى الله عليه وسلم",
        "answer": "العضباء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الشيء الذي كلما طال قصر؟",
        "answer": "العمر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الخلايا التي تنقل الإشارات العصبية في الجسم؟",
        "answer": "عصبونات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى الإنصاف وإعطاء كل ذي حق حقه؟",
        "answer": "عدل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الدولة الإسلامية التي قامت بعد سقوط الدولة الأموية وجعلت بغداد عاصمة لها؟",
        "answer": "الدولة العباسية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد أقدم أسواق العرب في الجاهلية والإسلام، وملتقى للتجارة والفكر والأدب والثقافة المتنوعة للقبائل العربية",
        "answer": "عُكاظ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "دعى له الرسول صلى الله عليه وسلم وقال: اللهم علمه الحكمة وتأويل الكتاب، وعرفه المسلمون باسم \"ترجمان القرآن\"",
        "answer": "عبدالله بن عباس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أعظم المخلوقات وأولها خلقاً، استوى عليه الرحمن بعد خلق السماوات والأرض",
        "answer": "العرش",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل الذي حمى الله جسده بعد استشهاده بالدبابير؟",
        "answer": "عاصم بن ثابت (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ظ",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "يدخل فيه المتحابون في الله يوم القيامة ؟",
        "answer": "ظل عرش الرحمن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو يوم العذاب الذي أصاب قوم شعيب ؟",
        "answer": "الظلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء الله التي ذكرت في القرآن الكريم ؟",
        "answer": "الظاهر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سلطان مملوكي يعود إليه الفضل بعد الله في تصفية الجيوش الصليبية و صد غارات التتار ؟",
        "answer": "الظاهر بيبرس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الشخص المحبوب الشديد الذكاء ؟",
        "answer": "ظريف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بماذا وصف نبي الله يونس نفسه في بطن الحوت ؟",
        "answer": "الظالمين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "آية في القرآن بدأت بحرف الظاء ؟",
        "answer": "\"ظهر الفساد في البر..\"",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الشيء الذي إذا سرت سار معك و لا تسبقه ؟",
        "answer": "الظل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حرمه الله على نفسه ؟",
        "answer": "الظلم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بمعنى فاز و نجح في تحصيله ؟",
        "answer": "ظفر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي إحدى المذاهب القديمة التي تقوم على الأخذ بظاهر النص فقط ؟",
        "answer": "الظاهرية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تعنى وسطهم وفي معظمهم ؟",
        "answer": "ظهرانيهم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الشعر يصف بعضه حول بعض ؟",
        "answer": "الظفائر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو العلم بالشيء دون اليقين أو بمعناه فما هو ؟",
        "answer": "الظن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا كان يطلق على بحر المحيط الأطلسي قديما ؟",
        "answer": "الظلمات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كان للرسول صلى الله عليه و سلم فرس . ما اسم هذا الفرس ؟",
        "answer": "الظرب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نهى الله عنه و قال أن بعضه إثم ؟",
        "answer": "الظن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "تقال على الدواب على السير والارتحال ؟",
        "answer": "ظعن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في النحو : اسم دل على زمان الحدث أو مكانه ؟",
        "answer": "ظرف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يطلق على الهودج الذي تركبه المرأة على الجمل ؟",
        "answer": "الظعينة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة مرادف العطش ؟",
        "answer": "الظمأ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي الناقة السوداء أو التي تغلب عليها السمرة ؟",
        "answer": "الظمياء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة : بمعنى دام و استمر ؟",
        "answer": "ظل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما كان المشهور عن الحجاج بن يوسف الثقفي في زمانه ؟",
        "answer": "ظالم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة هو الشيء البارز ؟",
        "answer": "الظاهر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو ما يذكر على ذكر النعام ؟",
        "answer": "ظليم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الغلبة و الفوز و القهر ؟",
        "answer": "الظفر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو حقيقة أو حادث يمكن وصفه وإيضاحه على أساس علمي ؟",
        "answer": "ظاهرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الجلد الميت النابت من جسم الإنسان يتم التخلص منه دوريا ؟",
        "answer": "الظفر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى حد السيف والسنان والخنجر وما أشبهها ؟",
        "answer": "الظبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو اسم من أسماء الثعبان ؟",
        "answer": "الظربغانه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة : هو المعين والمساعد والمساند ؟",
        "answer": "الظهير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل: ظلم الورى خافٍ إذا كاشفتهم * * عن غيبِ باطنه وظلمي .........",
        "answer": "ظاهر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو المعين و المساعد ؟",
        "answer": "ظهير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "حد انتصاف النهار؟",
        "answer": "ظهيرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي الأشعة الخاصة بتصوير قنوات العمود الفقري لدى الإنسان ؟",
        "answer": "الظليلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أنواع الغزلان البرية ؟",
        "answer": "الظبي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أهم مؤلفات سيد قطب ؟",
        "answer": "ظلال القرآن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى المرأة التي ترضع غير و لدها ؟",
        "answer": "الظئر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على الليلة التي تكون شديدة السواد ؟",
        "answer": "الظلماء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو علم الميتورولوجي ؟",
        "answer": "الظواهر الجوية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة : كلمة مرادفة لكلمة \" الديجور \" ؟",
        "answer": "الظئر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في الرياضيات : عكس ظل الزاوية ؟",
        "answer": "ظل التمام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة : ضد الباطن ؟",
        "answer": "ظاهر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو من تكلم بكلام لا يفهم ؟",
        "answer": "ظأظأه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الطلاق في الجاهلية ؟",
        "answer": "ظهار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أصوات أجواف الإبل من شدة العطش ؟",
        "answer": "الظبظاب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الظفر المشقوق للبقرة والشاة والظبي ونحوها ؟",
        "answer": "ظنين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في العصور الوسطى وخاصة في الموروث العربي كان يطلق على بحر المحيط الأطلسي باسم آخر فما هو؟",
        "answer": "الظلمات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الحالة الفسيولوجية الناتجة عن شدة احتياج الجسم إلى الماء؟",
        "answer": "ظمأ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة بمعنى مُتهم أو من نسب إليه ذنب أو جريمة",
        "answer": "ظنين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الّذي ورد في القرآن ويعني المعين والنصير؟",
        "answer": "ظهير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الجزء القرني الصلب في نهاية قدم الحيوانات ذات الحوافر المشقوقة كالأبقار والأغنام؟",
        "answer": "ظلف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى حالة العرج أو المشي غير الطبيعي بسبب مشكلة في الساق أو القدم؟",
        "answer": "ظلع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "غلاف يستخدم لحفظ الرسائل أو الأوراق",
        "answer": "ظرف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نمو غير طبيعي لنسيج الملتحمة على سطح العين يمتد نحو القرنية؟",
        "answer": "ظفرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الفعل الذي يأتي بمعنى دام واستمر؟",
        "answer": "ظَل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يدرس علم الميتورولوجيا الشهير في الطبيعة؟",
        "answer": "علم الظواهر الجوية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الاسم الخاص بذكر طائر النعام؟",
        "answer": "ظليم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو وضع الشيء في غير موضعه أو إعطاء الحق لغير مستحقه؟",
        "answer": "ظلم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نوع من الثدييات الصغيرة تشتهر برائحة قوية و نفاذة تفرزها عند الشعور بالتهديد",
        "answer": "ظربان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الظاهرة الفيزيائية البصرية التي تتكون عندما يعترض جسم معتم مسار الضوء ويحجبه عن مساحة معينة؟",
        "answer": "الظل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اكمل المثل: ما يحك جلدك غير ….",
        "answer": "ظفرك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح القرآني للإساءة التي يلحقها الإنسان بنفسه عندما يعصي الله؟",
        "answer": "ظلم النفس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم من أسماء الله الحسنى يعني الذي ليس فوقه شيء والعالي فوق كل شيء؟",
        "answer": "الظاهر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المحافظة العُمانية الجنوبية المشهورة بأشجار اللبان؟",
        "answer": "ظفار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الأحوال والملابسات المحيطة بحدث معين؟",
        "answer": "ظروف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مفهوم وعملية قيام المرأة بإرضاع طفل ليس ابنها؟",
        "answer": "ظئار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "راحلة يُرتحل عليها، أو ما يصلح للأسفار من الإبل؟",
        "answer": "ظاعن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو نقيض كلمة \"النور\"؟",
        "answer": "الظلام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الحيوان الصحراوي المعروف بجماله وسرعته ؟",
        "answer": "ظَبْي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صفة تطلق على الشخص الخفيف الدم اللطيف سريع البديهة وخفيف الظل",
        "answer": "ظريف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الوقت الذي تكون فيه الشمس في كبد السماء؟",
        "answer": "الظهيرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صوت فيه غنة ينتج من انشقاق الشفة العليا أو انكسار في الثنايا",
        "answer": "ظأظأه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أين يجتمع المتحابون في الله يوم القيامة؟",
        "answer": "ظل عرش الرحمن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى مقلوب ظل الزاوية في علم الرياضيات؟",
        "answer": "ظل التمام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يطلق على المرأة المسافرة في الهودج على ظهر الجمل في القوافل القديمة؟",
        "answer": "ظَعينة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مصطلح يصف الحدث الطبيعي الملحوظ أو المُقاس في الكون.",
        "answer": "ظاهرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم العظمة الكبيرة التي تشكل الجزء الأمامي من الساق؟",
        "answer": "الظنبوب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل من أنصار الأوس وبني حارثة، الذي شهد بيعة العقبة الثانية وبايع النبي ﷺ فيها؟",
        "answer": "ظهير بن رافع الأنصاري (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاعتقاد غير المؤكد الذي يقع بين الشك واليقين؟",
        "answer": "ظن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ر",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "الباب الذي يدخل منه الصائمون يوم القيامة ؟",
        "answer": "الريان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أول من قال : حمى الوطيس ؟",
        "answer": "الرسول عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الرمي بالحجارة حتى الموت ؟",
        "answer": "رجم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بما أهلك الله عادا قوم هود عليه السلام ؟",
        "answer": "ريح صرصر عاتية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو المادة الأساسية في صناعة الزجاج ؟",
        "answer": "الرمل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو نزف الأنف دما ؟",
        "answer": "رعاف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أمراض العين ؟",
        "answer": "الرمد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نوع من الألعاب عبارة عن إصابة الهدف و الرمي بالبندقية على أهداف ثابتة أو متحركة ؟",
        "answer": "الرماية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "شخص يحتجز لضمان اتفاق ما ؟",
        "answer": "رهينة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على مفصل الكف ؟",
        "answer": "رسغ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم يطلق على الطفل إلى أن يبلغ السنتين ؟",
        "answer": "رضيع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عملة ماليزيا ؟",
        "answer": "رنقيت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سلاح تقليدى قديم ؟",
        "answer": "رمح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "داخل كل إنسان تعيش معه فإذا جاء الموت خرجت و لم تعد ؟",
        "answer": "الروح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الشيء الذي يتكلم بكل لغات العالم في نفس الوقت ؟",
        "answer": "الراديو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أشهر كتب السيرة النبوية مؤلفه عبد الرحمن المباركفوري ؟",
        "answer": "الرحيق المختوم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي النفخة الأولى في الصور يوم القيامة ؟",
        "answer": "الراجفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي باطن كف اليد في اللغة ؟",
        "answer": "راحة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "انتظار الصلاة إلى الصلاة ؟",
        "answer": "الرباط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو إصلاح الثوب و وصل قطعتيه المنفصلتين ؟",
        "answer": "رتق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الشرك الأصغر ؟",
        "answer": "الرياء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "محلول السكر الذي يفرز في الأزهار و يمتصه النحل ليصنع منه العسل ؟",
        "answer": "رحيق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو أول طبيب مسلم فصل بين طب الأطفال و طب النساء ؟",
        "answer": "الرازي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي أشد أنواع الرحمة ؟",
        "answer": "رأفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الذاكرة العشوائية في الحاسب الآلي ؟",
        "answer": "رام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على الرأس الذي يقع في أقصى أفريقيا الشرقية ؟",
        "answer": "الرجاء الصالح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد أصناف أسنان الفم في الإنسان ؟",
        "answer": "الرحى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الازهار ورد في القران الكريم ؟",
        "answer": "ريحان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الباب العظيم الحجم العظيم القفل ؟",
        "answer": "رتاج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة : كلمة تطلق على الحدائق الفسيحة ؟",
        "answer": "الرياض",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وحدة لقياس قوة الزلازل التي تحدث ؟",
        "answer": "ريختر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين يقع برج بيزا المائل ؟",
        "answer": "روما",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من قائل \"ارحموا عزيز قوم ذل\" ؟",
        "answer": "الرسول عليه السلام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الجماعة من ثلاثة الى عشرة ؟",
        "answer": "رهط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نوع من أنواع الأشعة الحديثة لتصوير الدماغ بالألوان ؟",
        "answer": "الرنين المغناطيسي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو القائد الفارسي الذي قاد جيش الفرس في معركة القادسية ؟",
        "answer": "رستم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مرض يتميز بآلام في العضلات و المفاصل و يداوى بواسطة المياه المعدنية الحارة ؟",
        "answer": "الروماتيزم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى الشعر الذي يذكر فيه محاسن الميت ؟",
        "answer": "رثاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وحدة وزن إنجليزية ؟",
        "answer": "رطل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يقال \" العج والثج \" فما معنى العج ؟",
        "answer": "رفع الصوت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هما الأخوان اللذان اخترعا محرك الطائرة ؟",
        "answer": "رايت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عنصر فلزي إشعاعي ؟",
        "answer": "الراديوم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو بيع النقود بالنقود أو الطعام بالطعام مع الزيادة ؟",
        "answer": "ربا الفضل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الأنهار الأوروبية التي تمر من يوغسلافيا ؟",
        "answer": "الراين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "جهاز يستخدم الموجات اللاسلكية ذات التردد فوق العالي لاكتشاف الأشياء الغير منظورة ؟",
        "answer": "رادار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بماذا لقبت الصحابية أم سليم زوجة طلحة رضي الله عنهما ؟",
        "answer": "الرميصاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كم يبلغ وزن رأس المولود بالنسبة لوزن جسمه ؟",
        "answer": "ربع وزنه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أعظم الأطباء العرب صاحب كتاب الجدري والحصبة والحاوي ؟",
        "answer": "الرازي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو النظام الاقتصادي القائم على الملكية الخاصة لوسائل الإنتاج والتنافس الحر؟",
        "answer": "الرأسمالية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الحكم الشرعي الاستثنائي الذي يخفف عن المكلف في حالات العذر؟",
        "answer": "الرخصة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العضيات الخلوية المسؤولة عن تصنيع وإنتاج البروتينات داخل الخلية؟",
        "answer": "الريبوسومات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما أكبر صحراء رملية متصلة في العالم، ويقع جزء كبير منها داخل المملكة العربية السعودية؟",
        "answer": "الربع الخالي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى ولد الظبية في لغة العرب إذا قوي ومشى مع أمه؟",
        "answer": "الرشا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الغابة الشهيرة في منطقة الباحة التي تُعد متنزهًا سياحيًا للعائلات والزوار؟",
        "answer": "غابة رغدان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي العملة الرسمية المتداولة في دولة ماليزيا؟",
        "answer": "رينغيت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المادة المعدنية الثقيلة التي تُستخدم غالباً في صناعة الطلقات النارية؟",
        "answer": "رصاص",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تُوصف بها المادة أو الشيء الخفيف النحيف أو الإنسان اللطيف الطباع؟",
        "answer": "رقيق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على قطعة الخبز المستديرة أو المستطيلة؟",
        "answer": "رغيف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو المصطلح الإسلامي الّذي يشير إلى فعل الشخص للعبادة من أجل أن يراه الناس؟",
        "answer": "الرياء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم والطبيب المسلم الأسطوري صاحب كتاب \"الحاوي\" والذي يُعد أول من فصل علمياً بين طب الأطفال وطب النساء؟",
        "answer": "الرازي (رحمه الله)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابية جليلة تُعد أول ممرضة وطبيبة في الإسلام، اشتهرت بمهارتها في الطب وأنشأت أول مستشفى ميداني",
        "answer": "رفيدة الأسلمية (رضي الله عنها)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي العملة الرسمية لدولة كمبوديا؟",
        "answer": "الريال الكمبودي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي العملة الرسمية المستخدمة في دولة البرازيل؟",
        "answer": "الريال البرازيلي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تُسمى عملية مراقبة وتتبع حركة الأجرام السماوية والنجوم باستخدام التلسكوبات؟",
        "answer": "رصد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المرض المزمن الذي يصيب الجهاز التنفسي ويسبب تضيقاً في الشعب الهوائية؟",
        "answer": "الربو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الهيئة المسؤولة عن تنظيم منافسات الدوري السعودي؟",
        "answer": "رابطة الدوري السعودي للمحترفين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى الشخص الذي يتم احتجازه وتقييد حريته بهدف الضغط لتنفيذ شروط أو اتفاق ما؟",
        "answer": "رهينة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العاصمة الأوروبية التي كانت مركز الإمبراطورية الرومانية القديمة؟",
        "answer": "روما",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي العملة الرسمية لدولة روسيا؟",
        "answer": "روبل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نوع من أنواع السحب التي تتميز بوجودها عند ارتفاعات منخفضة على شكل عنقودي متراكم",
        "answer": "ركامية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم والدة نبي الله يوسف (عليه السلام)، والتي كانت زوجة لنبي الله يعقوب (عليه السلام)؟",
        "answer": "راحيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هي ابنة النبي صلى الله عليه وسلم التي تزوجها عثمان بن عفان وتوفيت يوم معركة بدر؟",
        "answer": "رقية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الحيوان الثديي المعروف بقناعه السوداء حول عينيه وبراعته في استخدام يديه؟",
        "answer": "الراكون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما يُطلق على الطفل خلال أول سنة من عمره؟",
        "answer": "رضيع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم الذي أطلقه الفراعنة على إله الشمس، والذي حظي بمكانة رئيسية في ديانتهم القديمة؟",
        "answer": "رع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "شراب طهور ورد ذكره في القرآن الكريم وصفاً لما يسقاه الأبرار في الجنة",
        "answer": "رحيق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو العذاب الذي سُلّط على قوم عاد؟",
        "answer": "الريح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم السلاح التقليدي القديم المكون من سن مدبب مثبت على عصا خشبية طويلة؟",
        "answer": "رمح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي مدينة يقع المقر الرئيسي للأمانة العامة لمجلس التعاون لدول الخليج العربية؟",
        "answer": "الرياض",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم سلسلة الجبال الشاهقة والممتدة لمسافات واسعة في قارة أمريكا الشمالية عبر أراضي كل من كندا والولايات المتحدة؟",
        "answer": "الروكي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المقياس العالمي المستخدم لقياس قوة وحجم طاقة الزلازل؟",
        "answer": "رختر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على التمر في مرحلته المبكرة قبل أن يجف؟",
        "answer": "رطب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم تقنية الأشعة الطبية المستخدمة لتصوير الدماغ والأنسجة بدقة عالية؟",
        "answer": "الرنين المغناطيسي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الجهاز الذي يُستخدم لكشف وتحديد مواقع الأجسام باستخدام الموجات اللاسلكية؟",
        "answer": "رادار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الجزء المسؤول عن بناء البروتين داخل الخلية؟",
        "answer": "الريبوسوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يطلق على التصور المستقبلي والتطلعات طويلة المدى للمؤسسات والدول؟",
        "answer": "رؤية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مصطلح باللغة ويعني الأساس أو الدعامة أو العمود الذي يستند عليه الشيء",
        "answer": "ركيزة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تدل على شدة الرحمة والعطف، وتُعبّر عن الشفقة البالغة ولطف التعامل؟",
        "answer": "رأفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد الفارسي الذي واجه المسلمين في معركة القادسية وهُزم وقُتل فيها؟",
        "answer": "رستم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المفصل الذي يربط بين عظمة الفخذ وعظمة الساق ويُعد حلقة وصل أساسية بينهما؟",
        "answer": "الركبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "العضو الرئيسي في الجسم المسؤول عن إدخال الأكسجين إلى الدم والتخلص من ثاني أكسيد الكربون",
        "answer": "الرئة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أسماء التمر ومذكور في القرآن الكريم؟",
        "answer": "الرطب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من اللاعب الذي فاز بجائزة الكرة الذهبية عام 2002 بعد تألقه في كأس العالم؟",
        "answer": "رونالدو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي أكبر دولة في العالم من حيث المساحة؟",
        "answer": "روسيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المال أو المنفعة التي تُقدم للحصول على مصلحة غير مشروعة؟",
        "answer": "رشوة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "آلة لنقل الأحمال الثقيلة بأمان في مواقع البناء والمصانع والموانئ",
        "answer": "الرافعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى الشخص الذي يتلقى الحديث الشريف عن شيوخه ويؤديه إلى تلاميذه؟",
        "answer": "راوي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "المنزلة التي تحدد مسؤوليات وصلاحيات الفرد في سياق تنظيمي أو اجتماعي",
        "answer": "رُتبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى خدمة الحجاج وإطعامهم؟",
        "answer": "الرفادة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الصمام الذي يسمح بمرور الماء في اتجاه واحد فقط ويمنع رجوعه؟",
        "answer": "الرداد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المبشّرات التي أخبر النبي ﷺ أنها جزء من ستة وأربعين جزءًا من النبوة، وأنها آخر ما تبقّى منها؟",
        "answer": "رؤيا الصالحين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة آيسلندا؟",
        "answer": "ريكيافيك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الحيوان الذي يقع قلبه في راسه؟",
        "answer": "الروبيان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ الشرعي الذي يُطلق على الزيادة المشروطة في القروض أو البيوع المحرمة؟",
        "answer": "الربا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الشخصية الأسطورية الإنجليزية التي اشتهرت بسرقة الأغنياء لإعانة الفقراء؟",
        "answer": "روبن هود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم علم مؤنث يعني الرفاهية وطيب العيش",
        "answer": "رغد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى المال المدفون في الأرض من الجاهلية الذي يجب فيه الخُمس؟",
        "answer": "الركاز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يدل على كمية بخار الماء الموجودة في الهواء؟",
        "answer": "رطوبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الباب الذي يدخل منه الصائمون في الجنة؟",
        "answer": "باب الريان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابية جليلة من بني النجار، من المبايعات، كانت تغزو مع النبي ﷺ وتسقي الماء وتداوي الجرحى",
        "answer": "الربيع بنت معوذ (رضي الله عنها)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الأنهار الفرعية التي تصب في نهر رئيسي وتزيده بالمياه؟",
        "answer": "روافد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم البيعة التي بايع فيها الصحابةُ النبيَّ ﷺ تحت الشجرة في منطقة الحديبية؟",
        "answer": "الرضوان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الطائر الأسطوري هائل الحجم وقد ورد ذكره في رحلات السندباد البحري في كتاب ألف ليلة وليلة",
        "answer": "الرخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الاسم الذي أطلق على عام المجاعة الذي مر على المسلمين في العام 18 من الهجرة والتي استمرت 9 أشهر",
        "answer": "الرمادة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الذي يُطلق على عملية إصلاح الثوب الممزق ووصل قطعتيه المنفصلتين ليعود ملتحماً؟",
        "answer": "الرتق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي العظمة التي تعد أصغر وأخف عظمة في جسم الإنسان، وتقع داخل الأذن الوسطى؟",
        "answer": "الركاب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "السورة القرآنية التي تكررت فيها آية معينة عدد 31 مرة لتأكيد نعم الله الكثيرة على الإنس والجن",
        "answer": "الرحمن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تعني سعة العيش والرفاهية ورغد الحياة وحسن الحال",
        "answer": "رخاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى آخر الأنفاس واللحظات الأخيرة قبل الوفاة؟",
        "answer": "رمق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "سيلان أو نزيف الدم من الأنف",
        "answer": "رعاف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مالكلمة الّتي تُطلق على الأوراق أو الملابس أو النقود المجموعة والمتماسكة؟",
        "answer": "رُزم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما النوع الأدبي الذي يسرد قصة طويلة تحتوي على شخصيات وأحداث متشابكة؟",
        "answer": "رواية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الرياضة الأولمبية التي يعتمد فيها اللاعب على دفع كرة معدنية ثقيلة لأبعد مسافة؟",
        "answer": "رمي الجلّه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الانخفاض في النشاط الاقتصادي الذي يستمر لمدة طويلة؟",
        "answer": "ركود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم خازن الجنة؟",
        "answer": "رضوان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى السنة الّتي حدثت فيها مجاعة شديدة في زمن خلافة عمر بن الخطاب رضي الله عنه؟",
        "answer": "الرمادة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى قطيع الخيول؟",
        "answer": "رعيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الفقهي واللغوي الذي يُطلق على ابنة الزوجة من زوجٍ آخر؟",
        "answer": "الربيبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الفارس الجاهلي من بني كنانة الذي لُقب بـ \"حامي الظعائن حياً وميتاً\"؟",
        "answer": "ربيعة بن مكدم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الظاهرة الطبيعية التي ترافق العواصف؟",
        "answer": "رعد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة الخيالية الشهيرة في عالم ألعاب الفيديو التي تفشى فيها وباء \"الفيروس التدميري\" وحول سكانها إلى موتى سائرين في سلسلة ريزدنت إيفل؟",
        "answer": "راكون سيتي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أي نادي قطري انتقل اللاعب المغربي عبدالرزاق حمدالله إلى النصر السعودي؟",
        "answer": "الريان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الكلمة التي تُستخدم للدلالة على الزاوية أو الجزء الثابت من البناء أو الشيء؟",
        "answer": "ركن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي عاصمة المملكة المغربية؟",
        "answer": "الرباط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "طائر خرافي بالغ القصصيون القدماء في وصفه وقيل أنه طائر كبير الحجم وقوته عظيمة جدًا وبيضته بحجم القبة",
        "answer": "الرَخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الأسلوب العلاجي الذي يعتمد على قراءة القرآن الكريم والأدعية المأثورة مع النفث طلبًا للشفاء، مع الإيمان بأن الشفاء من الله وحده؟",
        "answer": "الرقية الشرعية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الرئيس الأمريكي الذي قاد الولايات المتحدة خلال معظم سنوات الحرب العالمية الثانية؟",
        "answer": "روزفلت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو اللّاعب الّذي لعب للهلال والاتحاد وسجّل هدفًا ضدهما؟",
        "answer": "ريفاس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي وحدة قياس الوزن التقليدية التي تعادل تقريباً 453 غراماً؟",
        "answer": "رطل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ص",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من هم الذين يدخلون الجنة من باب الريان ؟",
        "answer": "الصائمون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لفظة وردت في القرآن الكريم تعني منهاج الله و طريقته ؟",
        "answer": "صبغة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أخر وصايا الرسول صلى الله عليه وسلم قبل موته ؟",
        "answer": "الصلاة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو العذاب الذي وقع على قوم ثمود ؟",
        "answer": "الصيحة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو قوة على أمر عظيم ؟",
        "answer": "صبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ظاهرة اصطدام الصوت بحاجز ثم رجوعه مرة أخرى ؟",
        "answer": "الصدى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هي اليهودية التي تزوجها الرسول صلى الله عليه وسلم بعد إسلامها ؟",
        "answer": "صفية بنت حيي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما أكثر الدول سكانا في العالم ؟",
        "answer": "الصين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء الله تعالى ويعني السيد المصمود إليه في الحوائج ؟",
        "answer": "الصمد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صيحة تصم الآذان لشدتها يوم القيامة ؟",
        "answer": "الصاخة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على صوت الفرس ؟",
        "answer": "صهيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كانت العرب تستخدمه في حفظ المال في جيوبها ؟",
        "answer": "صرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "آلة ينفخ فيها إسرافيل يوم القيامة النفخة الأولى و هي نفخة الفزع و فيها يختل النظام الكوني ؟",
        "answer": "الصور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على صوت السيوف في الحرب ؟",
        "answer": "صليل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الخمس التي لا سادس لها ؟",
        "answer": "الصلوات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو قائد جيش المسلمين في معركة جطين؟",
        "answer": "صلاح الدين الايوبي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "جزيرة في وسط البحر الأبيض المتوسط فتحها المسلمون بقيادة أسد الفرات ؟",
        "answer": "صقلية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو وصف للملائكة ورد في القرآن الكريم ؟",
        "answer": "الصافات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو شدة الشوق و الهوى ؟",
        "answer": "صبابة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو نوع من أنواع الأخشاب غالية الثمن ؟",
        "answer": "الصندل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على مهر الزوجة ؟",
        "answer": "صداق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يقال رتب الشيء ونظمه تنظيم متتابع ؟",
        "answer": "صفه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو لفظ يعبر عن التحسين لمادة صلبة و إخراجها بشكل أفضل ؟",
        "answer": "صقل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هبوط فجائي في المراكز الحيوية للجهاز العصبي و من أسبابه إصابات العنف و التوتر ؟",
        "answer": "الصدمة العصبية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من اخوات كان ترفع المبتدأ وتنصب الخبر ؟",
        "answer": "صار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي قمة ظهر الفرس ؟",
        "answer": "صهوة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الوضوح في القول والإتيان بالحقيقة ؟",
        "answer": "الصدق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هم الذين وصفهم الله بعبدة الكواكب ؟",
        "answer": "الصائبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما أقدم دولة تنتج البخور و اللبان في العالم ؟",
        "answer": "الصومال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما معنى : مكــــــــاء ؟",
        "answer": "صفير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "سائل قلوي أصفر أو أخضر اللون يفرزه الكبد و يتكون من الماء و بعض الأحماض و يتجمع في المرارة ؟",
        "answer": "الصفراء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على الجماعة من الابل ؟",
        "answer": "صرمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الصحابي المفترى عليه مع عائشة (رضي الله عنها ) في حادثة لإفك ؟",
        "answer": "صفوان بن المعطل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الموطن الأصلي لشجرة المشمش ؟",
        "answer": "الصين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم السري لقنبلة هيروشيما ؟",
        "answer": "الصبي الصغير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الجزء ما بين العين و الأذن ؟",
        "answer": "صدغ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو لقب الشاعر المعروف باسم الأعشي ؟",
        "answer": "صناجة العرب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "إحدى أنواع الحمى تصيب الإنسان ؟",
        "answer": "الصفراوية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مدينة توجد في الجزء الشرقي من وسط تونس على البحر الأبيض المتوسط عند خليج قابس ؟",
        "answer": "صفاقس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عمة الرسول عليه الصلاة والسلام وزوجة الحارث أخو أبي سفيان وبعد وفاته تزوجت العوام أخو السيدة خديجة بنت خويلد ؟",
        "answer": "صفية بنت عبدالمطلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يستخرج من الشجر و يساهم في تطوير العديد من الصناعات ؟",
        "answer": "صمغ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "حجر كانت تستخدمه العرب قديما لإشعال النار إذا ضرب بعضه ببعض ؟",
        "answer": "الصوان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "على ماذا تطلق كلمة : المح ؟",
        "answer": "صفار البيض",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو عمود يقام في السفينة يشد عليه الشراع ؟",
        "answer": "الصاري",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من اول من أستعمل الأوراق المالية بدل النقود المعدنية ؟",
        "answer": "الصينيون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عاصمة بلغاريا تقع في واد قرب جبال البلقان ؟",
        "answer": "صوفيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الاسم الذي يطلق على معبد اليهود قديما ورد اسمه في بعض الأحاديث النبوية الشريفة ؟",
        "answer": "الصومعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة التي يتكلم أهلها اللغة السنهالية ؟",
        "answer": "الصين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة جمهورية بلغاريا؟",
        "answer": "صوفيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما معنى كلمة العهن الّتي ذُكرت في سورة القارعة؟",
        "answer": "الصوف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تعني تلميع الأسطح الصلبة والمعادن وتحسين مظهرها وإبراز بريقها؟",
        "answer": "صقل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي عملية وضع المعدن المنصهر في قالب",
        "answer": "الصب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي النبتة الشهيرة التي يُستخدم السائل الهلامي المستخلص من أوراقها في ترطيب الجلد وتهدئة الحروق الناجمة عن أشعة الشمس؟",
        "answer": "الصبار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي المنطقة الّتي تقع في الجزء الجنوبي من مصر على امتداد نهر النيل؟",
        "answer": "صعيد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو المصطلح الذي يطلق على البرد الجاف المصحوب بريح؟",
        "answer": "الصر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إمساك عن ما يدخل الجوف، وهو في اللغة مطلق الإمساك، وفي الشرع مخصوص بنية التعبد لله",
        "answer": "الصيام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مانوع الحديث الذي استوفى أعلى شروط القبول من حيث السند والمتن؟",
        "answer": "صحيح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الوثائق التي كانت تبيعها الكنيسة في العصور الوسطى بدعوى تخفيف العقاب عن الخطايا؟",
        "answer": "صكوك الغفران",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الأرض القاحلة الشاسعة التي تتميز بندرة أمطارها وجفافها؟",
        "answer": "الصحراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المرض الجلدي المزمن غير المعدي الذي يسبب ظهور بقع حمراء مغطاة بقشور فضية؟",
        "answer": "الصدفية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يطلق على حفنة من العملات المعدنية موجوده معا في كيس، وكان يستخدم قديما لحفظ المال؟",
        "answer": "صرّة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة الآسيوية التي تُعد الموطن الأصلي والوحيد في العالم لحيوان الباندا العملاق؟",
        "answer": "الصين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة اللغوية التي تعبر عن مرحلة حداثة السن وأول العمر لدى الإنسان؟",
        "answer": "الصبا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المكيال الذي ورد ذكره في قصة يوسف عليه السلام وجُعل في رحل أخيه؟",
        "answer": "صواع الملك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى صوت الديك؟",
        "answer": "صياح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "شهر عربي أطلق عليه هذا الاسم لأن ديار العرب كانت تخلو فيه من أهلها",
        "answer": "صفر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي تُطلق على وقوع الأحداث والالتقاء بين أمرين دون تخطيط مسبق أو توقع؟",
        "answer": "صدفة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الاسم الذي يطلق على الألواح الضخمة التي تتكون منها القشرة الأرضية وتتحرك باستمرار؟",
        "answer": "صفائح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم قوات النخبة في القوات البرية الملكية السعودية، والتي تخضع لأقسى تدريبات التحمل الجسدي والنفسي؟",
        "answer": "الصاعقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بلد ينتج أكثر من 200 مليون طن من الأرز سنويًا",
        "answer": "الصين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة الأوروبية الواقعة في شبه جزيرة البلقان والتي تتخذ من مدينة \"بلغراد\" عاصمة لها؟",
        "answer": "صربيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تعني النقاء وخلوّ الشيء من الشوائب؟",
        "answer": "صفاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هيئة أنشأتها المملكة عام 1394هـ لتقديم قروض ميسرة للمشروعات المجدية والمفيدة",
        "answer": "صندوق التنمية الصناعية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بماذا كانت قريش تلقب النبي صلى الله عليه وسلم قبل البعثة؟",
        "answer": "الصادق الأمين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "المنطقة الصحراوية الواسعة شمال شرق شبه الجزيرة العربية، يقع جزء كبير منها في السعودية؟",
        "answer": "الصمان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم أكبر صحراء حارة في العالم؟",
        "answer": "الصحراء الكبرى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لاعب سعودي لعب لكلٍ من الهلال والأهلي والاتحاد؟",
        "answer": "صالح الشهري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما العلم الذي يختص بتحضير وتركيب الأدوية ومعرفة خصائصها؟",
        "answer": "صيدلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الظاهرة الفيزيائية الناتجة عن اهتزاز الأجسام وانتقالها عبر وسط مادي تدركه الأذن؟",
        "answer": "الصوت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "خاصية فيزيائية تعبر عن مقاومة المادة للخدش ويُستخدم لتقديرها مقياس موهس",
        "answer": "الصلادة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أسطورة دفاع وقائد المنتخب السعودي في الثمانينات، ولقبه الامبراطور؟",
        "answer": "صالح النعيمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "المصطلح الذي يصف الحركة السياسية التي دعت إلى إقامة دولة قومية لليهود في فلسطين؟",
        "answer": "صهيونية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الشيء الذي يكسر إذا قلناه؟",
        "answer": "الصمت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي قذيفة عرفها الصينيون منذ القرن الثالث عشر واستخدموها في الأفراح والأعياد وإرهاب العدو",
        "answer": "الصاروخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الموقع الّذي يقام عليه سنويًا مهرجان الملك عبدالعزيز للإبل",
        "answer": "الصياهد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي المادة اللزجة التي تفرزها بعض الأشجار، وخاصة الصنوبريات؟",
        "answer": "صمغ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تُطلق على الذكر الحسن والسمعة الطيبة المنتشرة بين الناس؟",
        "answer": "صيت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى العفو عن المذنب وترك مؤاخذته؟",
        "answer": "صفح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الطريق الواضح الواصل إلى الله وجنته الذي لا اعوجاج فيه",
        "answer": "الصراط المستقيم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو المثل العربي الشهير الّذي يشجع على الصبر؟",
        "answer": "الصبر مفتاح الفرج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الفعل الناسخ من أخوات كان الذي يفيد التحول؟",
        "answer": "صار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي وردت في القرآن الكريم لتعبر عن المطر الغزير والمنهمر بشدة؟",
        "answer": "الصيب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في الزراعة هي عملية يتم إتخاذها لتخليص الأرض من الماء الزائد عن حاجة النبات",
        "answer": "الصرف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابية جليلة اشتهرت بشجاعتها وفروسيتها وشِعرها، وكانت أول امرأة تقتل رجلاً من المشركين (يهودياً) دفاعاً عن نساء المسلمين",
        "answer": "صفية بنت عبد المطلب (رضي الله عنها)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الحدث التاريخي البارز الذي وقع في السنة السادسة للهجرة، وتمثل في عقد معاهدة سلام ومدتها عشر سنوات بين المسلمين وقريش؟",
        "answer": "صلح الحديبية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قالوا في الأمثال: الثوب مايرجع جديد والعدو مايرجع ....",
        "answer": "صديق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الوثيقة المكتوبة التي تثبت معاملة مالية أو عقار أو حق معين؟",
        "answer": "صك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى النصف الأول من بيت الشِعر؟",
        "answer": "الصدر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المهنة الّتي تسمى أحياناً بالسلطة الرابعة؟",
        "answer": "الصحافة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الرمزي السري الذي أطلقته الولايات المتحدة على القنبلة الذرية التي أُلقيت على مدينة هيروشيما؟",
        "answer": "الصبي الصغير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "لفظ في القرآن الكريم يُعبر عن الخيول الأصيلة المتأهبة للركض والتي تقف على ثلاث قوائم مستندة على طرف حافر الرابعة",
        "answer": "الصافنات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو القائد المسلم الذي هزم ثلاثة جيوش عظمى في ثلاث قارات مختلفة؟",
        "answer": "صلاح الدين الأيوبي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو القائد المسلم الذي حرر القدس من الصليبيين بعد معركة حطين في القرن السادس الهجري؟",
        "answer": "صلاح الدين الأيوبي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى مطابقة الكلام للواقع والحقيقة؟",
        "answer": "صدق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل الّذي كان من السابقين الأولين، وقال عنه النبي صلى الله عليه وسلم \"ربح البيع أبا يحيى\"؟",
        "answer": "صهيب الرومي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى صوت الحصان؟",
        "answer": "صهيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجزيرة الأوروبية التي فتحها أسد بن الفرات وعُرفت في العصر الحديث بأنها مهد عصابات المافيا؟",
        "answer": "صقلية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الشيء غير الحي الذي أقسم الله به في القرآن ووصفه بأنه يتنفس؟",
        "answer": "الصبح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الدولة الأفريقية التي تحتل منطقة القرن الأفريقي وتشتهر بساحلها الطويل؟",
        "answer": "الصومال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "العملية الفيزيائية لتحويل المادة من الحالة الصلبة إلى الحالة السائلة بفعل الحرارة؟",
        "answer": "صهر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الجهاز الميكانيكي الذي ينظم أو يوقف تدفق السوائل أو الغازات في نظام معين؟",
        "answer": "صمام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل المثل الشعبي الذي يدعو إلى مسايرة القوي أو مداراة الخصم عند العجز عن مواجهته: \"يدٍ ما تقواها...\"",
        "answer": "صافحها",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وصف للجلبة والضجيج واختلاط الأصوات المرتفعة",
        "answer": "صخب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما النشاط الاقتصادي القائم على تحويل المواد الخام إلى منتجات باستخدام الآلات؟",
        "answer": "الصناعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الخشب العطري الثمين والفاخر الذي تُستخرج منه أفضل أنواع العطور والبخور؟",
        "answer": "الصندل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على من عاش في زمن النبي صلى الله عليه وسلم وآمن به ورافقه؟",
        "answer": "صحابي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي الغدد الّتي تنظم وظائف الجسم من خلال إفراز الهرمونات؟",
        "answer": "صماء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي تعني في اللغة والشرع إنهاء النزاع وإحلال الوئام بين الطرفين؟",
        "answer": "الصلح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الكائن البحري ذو الغلاف الخارجي القاسي الذي قد يخفي في جوفه لؤلؤة ثمينة؟",
        "answer": "الصدف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مالاضطراب العصبي الذي يتميز بنوبات متكررة من التشنجات وفقدان الوعي أحياناً؟",
        "answer": "صرع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عملية فصل المعادن أو خاماتها عن الشوائب باستخدام الحرارة العالية",
        "answer": "صهر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "العملية الكيميائية التي تؤدي إلى تآكل الحديد نتيجة الأكسجين والرطوبة؟",
        "answer": "صدأ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "م",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من هو أول والي مسلم في الأندلس ؟",
        "answer": "موسى بن نصير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أخر خليفة عباسي ؟",
        "answer": "المستعصم بالله",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلبه الناس و يحتاجونه و يهربون منه إذا حضر ؟",
        "answer": "المطر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي السورة التي لا تخلو منها آية من لفظ الجلالة الله ؟",
        "answer": "المجادلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أعلم هذه الأمة بالحلال و الحرام ؟",
        "answer": "معاذ بن جبل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي المعركة التي دخلها خالد بن الوليد جندياً وخرج منها قائداً ؟",
        "answer": "مؤتة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الذي لا ينتفع به إلا إذا أشعلنا في عينيه ؟",
        "answer": "الموقد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "خليفة أموي غزت جيوشه البحر وكان من كتاب الوحي ؟",
        "answer": "معاوية بن أبي سفيان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو صاحب هذا اللقب الأمين ؟",
        "answer": "محمد صلى الله عليه وسلم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي أمر خارق للعادة يجريه الله على أيدي أنبياء ؟",
        "answer": "المعجزة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أول صحابي أسلم من الأنصار ؟",
        "answer": "معاذ بن عفراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الشيء الذي لا ينتفع به إلا إذا وضعت إصبعك في عينيه ؟",
        "answer": "المقص",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أين تقع رابطة العالم الإسلامي ؟",
        "answer": "مكة المكرمة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو تتابع غسل الأعضاء بعضها إثر بعض بأن لا يقطع المتوضئ وضوءه بعمل أخر ؟",
        "answer": "الموالاة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يدخل في تركيب جميع أعضاء جسم الإنسان ؟",
        "answer": "الماء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي سأل رؤية ربه ؟",
        "answer": "موسى عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من مؤسس الدولة الأموية ؟",
        "answer": "معاوية بن أبي سفيان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الرجل الذي أجار النبي صلى الله عليه وسلم بعد عودته من الطائف حتى دخل مكة ؟",
        "answer": "مطعم بن عدي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "آلة حربية استعملها الرومان لقذف الحجارة أو الذهب عن بعد ؟",
        "answer": "المنجنيق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الشيء الذي يحتكم إليه كل أحد و ليس من الأحياء ؟",
        "answer": "الميزان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من القائل : وإذا أتتك مذمتي من ناقص فهي الشهادة لي بأني كامل ؟",
        "answer": "المتنبي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما سورة الدين ؟",
        "answer": "الماعون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المرض الذي تنقله أنثى البعوض ؟",
        "answer": "الملاريا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حيوان بري منقرض يعتبر حجمه هائل جدا ذو قرون طويلة و هو من أجداد الفيل ؟",
        "answer": "ماموث",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أول من أم بالمسلمين في المدينة المنورة ؟",
        "answer": "مصعب بن عمير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هم الزبانية ؟",
        "answer": "ملائكة العذاب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو معنى كلمة مخبصة ؟",
        "answer": "ملعقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "سباق العدو الطويل الذي مسافته 26 ميل 385 ياردة ؟",
        "answer": "المرثون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الساعة الشمسية التي استخدمها العرب قديما لقياس الوقت ؟",
        "answer": "مزولة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الشيء الذي خرج من الماء و إذا أتى عليه الماء هلك ؟",
        "answer": "الملح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "غشاء الجنين الذي يخرج معه عند الولادة ؟",
        "answer": "المشيمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو وصف يطلق على الرجل المحارب الذي عبأ نفسه بالأسلحة و الذخيرة ؟",
        "answer": "مدجج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من فاتح السند ؟",
        "answer": "محمد بن القاسم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو المنهج الذي ينتهجه العالم في تقرير الحقائق وطرق رصدها ووسائل جمعها ؟",
        "answer": "مذهب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الميتة بالضرب ؟",
        "answer": "الموقوذة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم كل شيء يشغل حيزا من الكون و له ثقل ؟",
        "answer": "المادة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الخليفة الذي استجاب لنداء امرأة قالت \" وا إسلاماه \" ؟",
        "answer": "المعتصم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مادة مخدرة تستخدم في العمليات الجراحية ؟",
        "answer": "مورفين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مؤلف كتاب التاريخ الإسلامي ؟",
        "answer": "محمود شاكر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أين ظهرت الدولة الطولونية و الإخشيدية ؟",
        "answer": "مصر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الذي بنى قصر الحمراء في غرناطة ؟",
        "answer": "محمد الأحمر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "آلة تستعمل لإعدام إنسان بفصل رقبته عن جسده استعملت في الثورة الفرنسية لإعدام النبلاء ؟",
        "answer": "المقصلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الخط الذي يصل بين القطب الشمالي و القطب الجنوبي للأرض ؟",
        "answer": "محور الأرض القطبي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أي أعضاء الجسم يستهلك 40% من أوكسجين الدم ؟",
        "answer": "المخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "القطار الكهربائي تحت الأرض ؟",
        "answer": "المترو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "رحالة قام برحلة للتثبت من كروية الأرض ؟",
        "answer": "ماجلان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي إحدى لغات الكتابة في عهد ما قبل الميلاد ؟",
        "answer": "المسمارية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أشد الناس عذابا يوم القيامة ؟",
        "answer": "المصورون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الجرم السماوي الذي يتكون من الغبار والصخور والجليد، ويدور في مدارات حول الشمس تاركاً ذيلاً خلفه؟",
        "answer": "المذنب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي اللعبة الإلكترونية التي تتصدر قائمة أكثر الألعاب مبيعاً في التاريخ؟",
        "answer": "ماين كرافت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الحارس الألماني الأسطوري الذي تُوّج بجائزة أفضل حارس مرمى في العالم من الاتحاد الدولي للتاريخ والإحصاء عام 2014 م؟",
        "answer": "مانويل نوير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُطلق على الاتفاق الّذي يُبرم بين دولتين أو أكثر ويخضع للقانون الدولي؟",
        "answer": "معاهدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الثمار أو النباتات التي يتم زرعها وحصادها بكميات كبيرة للاستهلاك البشري أو الحيواني أو لاستخدامها في الصناعة",
        "answer": "المحاصيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المبدأ الرقابي والقانوني الذي يقوم عليه نظام الكشف عن الذمة المالية \"من أين لك هذا\"؟",
        "answer": "المساءلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما النظرية الفيزيائية التي تفسر الخصائص الفيزيائية على مستوى الذرات والجسيمات؟",
        "answer": "ميكانيكا الكم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الوظيفة التي تتمحور حول تنظيم حركة الطائرات في الجو والمطارات وتوجيهها؟",
        "answer": "مراقب جوي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى المجرى أو المصرف المخصص لتصريف مياه الأمطار من على سطح الكعبة المشرفة؟",
        "answer": "الميزاب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هي آخر امرأة تزوجها النبي ﷺ وتُعد آخر أمهات المؤمنين؟",
        "answer": "ميمونة بنت الحارث (رضي الله عنها)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو وصف الشخص الذي لا يجوز للمرأة الزواج منه كالأب والأخ؟",
        "answer": "محرم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة جمهورية ليبيريا؟",
        "answer": "مونروفيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أحد أجود وأفخم أنواع البخور، يستخرج من غابات بابوا في إندونيسيا ويعتبر خيار مثالي للمناسبات الراقية",
        "answer": "مروكي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي سورة من سور القرآن الكريم تم ذِكر صفة الوضوء؟",
        "answer": "سورة المائدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو اللاعب الذي تصدر قائمة هدافي المنتخب السعودي الأول لكرة القدم في تصفيات كأس العالم 2018 م؟",
        "answer": "محمد السهلاوي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي أكثر لعبة مبيعًا في تاريخ الألعاب الإلكترونية وتجاوزت مبيعاتها 300 مليون نسخة عالميًا؟",
        "answer": "ماين كرافت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أقصر آية من حيث عدد الكلمات وتتكون من كلمة واحدة فقط؟",
        "answer": "مدهامتان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو وصف الحديث النبوي الذي نقله عدد كبير من الرواة يستحيل تواطؤهم على الكذب؟",
        "answer": "متواتر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العبقري النرويجي الذي يتربع على عرش أفضل لاعب شطرنج في العالم؟",
        "answer": "ماغنس كارلسن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الأنبوب الذي ينقل الطعام من الفم إلى المعدة؟",
        "answer": "مريء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الشكل الشعري الأندلسي الذي يُكتب بأسلوب غنائي وله بنية مختلفة عن القصيدة التقليدية؟",
        "answer": "الموشحات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أول غزوة شارك فيها خالد بن الوليد بعد إسلامه وكانت في السنة الثامنة للهجرة",
        "answer": "غزوة مؤتة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الدولة التي حكمت مصر والشام بعد سقوط الدولة الأيوبية وهزمت المغول في معركة عين جالوت؟",
        "answer": "المملوكية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي السورة التي تسمى سورة القتال؟",
        "answer": "سورة محمد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العضلات التي لا يتحكم بها الإنسان وتوجد في بعض الأعضاء مثل المعدة والأمعاء والأوعية الدموية؟",
        "answer": "عضلات ملساء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الفن الأدائي الذي يقدم قصة عبر الحوار والتمثيل أمام جمهور مباشر؟",
        "answer": "مسرحية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُطلق على من عاصر عهدين أو عصرين مختلفين، وأبرزهم من أدرك الجاهلية والإسلام؟",
        "answer": "مخضرم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي دولة عربية توجد غابات الأرز والبلّوط التابعة لسلسلة جبال الأطلس والتي تُعد الأكبر من نوعها في العالم العربي؟",
        "answer": "المغرب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو أول موقع تراثي سعودي تم تسجيله في قائمة اليونسكو؟",
        "answer": "مدائن صالح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الأداة التي تستخدم للإعدام عن طريق فصل الرأس عن الجسم؟",
        "answer": "مقصلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجهاز المستخدم لرفع أو خفض قيمة الجهد الكهربائي المتردد؟",
        "answer": "المحول الكهربائي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو من يُظهر الإيمان ويُخفي الكفر، ويُظهر خلاف ما يُبطن، وقد توعّدهم الله بأسفل دركات النار",
        "answer": "المنافق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الطّاقة المُستَمّدة من الموارد الطبيعية التي لا تنفذ وتتجدد باستمرار",
        "answer": "متجددة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي السورة القرآنية التي فُرض في أولها قيام الليل، ثم خُفف في آخرها ليصبح تطوعاً؟",
        "answer": "المزمل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "منشأة علمية وثقافية تُعنى بجمع وحفظ وتوثيق القطع الأثرية، هدفها عرض التراث الإنساني، فما هي؟",
        "answer": "متحف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المدينة الأوروبية الوحيدة التي نجح نادياها معاً في تحقيق ما مجموعه 10 ألقاب في بطولة دوري أبطال أوروبا؟",
        "answer": "ميلان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو الهرمون المسؤول عن تنظيم النوم في جسم الانسان؟",
        "answer": "الميلاتونين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابية جليلة هي أحد أمهات المؤمنين وآخر زوجات النبي ﷺ",
        "answer": "ميمونة بنت الحارث (رضي الله عنها)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مالأكلة الشعبية الشهيرة في منطقة جازان، وتتكون عادة من لحم وخضار في وعاء حجري أو فخاري بنفس اسم الأكلة؟",
        "answer": "المغش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على الحيوان الذي مات بالخنق وهو أحد أنواع الميتة المحرم أكلها والمذكورة في القرآن الكريم؟",
        "answer": "المنخنقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الحكم الشرعي للفعل الذي يُثاب تاركه ولا يُعاقب فاعله؟",
        "answer": "مكروه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو أصغر المحيطات الخمسة مساحة في العالم؟",
        "answer": "المحيط المتجمد الشمالي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو السلطان العثماني الشاب الذي نجح في فتح مدينة القسطنطينية عام 1453م ونال بذلك لقبه التاريخي الشهير؟",
        "answer": "محمد الثاني (الفاتح)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الابن الثالث لعلي بن أبي طالب وفاطمة الزهراء (رضي الله عنهما) الذي تُوفي صغيرًا؟",
        "answer": "محسن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو أكبر كواكب المجموعة الشمسية حجماً وأكثرها كتلة؟",
        "answer": "المشتري",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم قوم نبي الله شعيب (عليه السلام) الذين أُرسل إليهم؟",
        "answer": "مدين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول شركة أنتجت هاتفًا محمولًا عام 1973 في خطوة مهّدت لظهور الهواتف الحديثة؟",
        "answer": "موتورولا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "علم وتقنية توجيه السفن والطائرات والمركبات وتحديد موقعها ومسارها بدقة",
        "answer": "الملاحة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجزء الواقع بين الحجر الأسود وباب الكعبة؟",
        "answer": "الملتزم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اللقب الذي يطلق عادة على مشاة البحرية الأمريكية",
        "answer": "المارينز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مادة عطرية دهنية سمراء يفرزها نوع من الأيائل",
        "answer": "مسك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللفظ اللغوي الذي يُطلق على الصخور الكبيرة التي تعترض المجرى المائي في النهر؟",
        "answer": "المسارع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم السلاح الذي استخدمه المسلمون لأول مرة في حصار حصون خيبر؟",
        "answer": "المنجنيق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الحاجب والقائد العسكري الأندلسي الذي بلغت الدولة العامرية في عهده أقصى اتساع وامتداد جغرافي لها؟",
        "answer": "المنصور بن أبي عامر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أول من تولى منصب مفتي عام المملكة العربية السعودية؟",
        "answer": "محمد بن ابراهيم آل الشيخ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المسطح المائي الذي يُعد أكبر وأعمق المحيطات على وجه الأرض وتتجاوز مساحته مساحة اليابسة بأكملها؟",
        "answer": "المحيط الهادئ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو النظام النجمي الضخم الذي يتكون من مليارات النجوم؟",
        "answer": "مجرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الشخصية الكرتونية الشهيرة التي أبدعتها شركة ديزني وأصبحت رمزاً لها؟",
        "answer": "ميكي ماوس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم الشهير الذي يُطلق على السيف في اللغة العربية، ويعني السيف القاطع المصنوع من حديد الهند؟",
        "answer": "المهند",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى العقال التراثي المذهب الذي كان يرتديه الملوك ورجال الدولة في عهد الملك عبد العزيز؟",
        "answer": "مقصب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم القبائل الآسيوية التي اجتاحت العالم الإسلامي في القرن الثالث عشر الميلادي؟",
        "answer": "المغول",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد العثماني الذي فتح القسطنطينية وجعلها عاصمة الدولة العثمانية؟",
        "answer": "محمد الفاتح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اسم القسم في الشركات الذي يهتم بتوظيف الموظفين وتدريبهم ومتابعة شؤونهم الإدارية؟",
        "answer": "الموارد البشرية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في الرياضيات ماذا يسمى الرمز الذي يمثل كمية مجهولة أو قيمة غير ثابتة؟",
        "answer": "المتغير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الأداة التي تُستخدم لتكبير الأجسام الدقيقة التي لا تُرى بالعين المجردة؟",
        "answer": "مجهر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي أمر خارق للعادة يجريه الله على أيدي أنبياء؟",
        "answer": "المعجزة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المكان الذي تُعرض فيه القطع الأثرية أو الفنية بهدف التعليم والحفاظ على التراث؟",
        "answer": "متحف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العبارة التي تعني لا مثيل له، أو فريد من نوعه، وعديم الشبيه؟",
        "answer": "منقطع النظير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم البطل في فيلم Gladiator؟",
        "answer": "ماكسيموس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الغشاء الشفاف والغطاء المحيط بالجنين داخل الرحم والذي يساهم في حمايته وتغذيته طوال فترة الحمل؟",
        "answer": "المشيمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاضطراب الجيني الناتج عن وجود نسخة إضافية من الكروموسوم 21، والذي يؤثر على نمو الجسم والدماغ؟",
        "answer": "متلازمة داون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الحضارة القديمة التي نشأت في أمريكا الوسطى وامتازت بتقويمها الدقيق؟",
        "answer": "حضارة المايا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى التعبير الّذي يتضمن استخدام الكلمات في غير معناها الحقيقي أو الأصلي لغرض بلاغي أو جمالي؟",
        "answer": "مجازي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي أول امرأة نجحت في الفوز بجائزة نوبل في التاريخ؟",
        "answer": "ماري كوري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو آخر خلفاء الدولة العباسية في بغداد، والذي سقطت في عهده العاصمة على يد المغول؟",
        "answer": "المستعصم بالله",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد العسكري الأموي الشاب الذي قاد الجيوش الإسلامية لفتح بلاد السند وضمه لرقعة الخلافة؟",
        "answer": "محمد بن القاسم الثقفي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى كل مايشغل حيز وله كتلة؟",
        "answer": "المادة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاحتفال الذي يقام للاحتفاء بمناسبة ثقافية أو فنية معينة؟",
        "answer": "مهرجان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المادة التي تُشكّل 80% من حجم دماغ الإنسان؟",
        "answer": "الماء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الإمام الذي أسس الدولة السعودية الأولى في الدرعية عام 1727م؟",
        "answer": "الإمام محمد بن سعود (رحمه الله)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو ما يُطلق على فترة زمنية محددة من العام تتميز بظروف مناخية او انشطة بشرية معينه",
        "answer": "موسم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الاسم الذي لا يقبل التنوين ويُجَرُّ بالفتحة نيابةً عن الكسرة؟",
        "answer": "الممنوع من الصرف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الشيء الذي يُستخرج من الماء وإذا أُعيد إليه يموت؟",
        "answer": "الملح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الخليفة العباسي الذي أسس \"بيت الحكمة\" واهتم بالترجمة والعلوم والفلسفة؟",
        "answer": "المأمون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "جهاز متعدد الأنواع والأشكال، يعتمد على قوة الجاذبية الأرضية لقياس كتلة الجسم",
        "answer": "الميزان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ثقوب ومنافذ في جلد الإنسان والحيوان",
        "answer": "مسامات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل، ولد في حجة الوداع ورباه علي بن أبي طالب (رضي الله عنه)",
        "answer": "محمد بن أبي بكر الصديق (رضي الله عنهما)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الجهة القضائية التي تفصل في النزاعات القانونية ؟",
        "answer": "محكمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة بمعنى موضع النوم أو الراحة",
        "answer": "مَضْجَع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة التي تُعد عاصمة لجمهورية الفلبين وتصنف كواحدة من أكثر المدن كثافة سكانية في العالم؟",
        "answer": "مانيلا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو آخر خلفاء الدولة الأموية في الشام، والذي انتهى بوفاته حكم الأمويين بعد هزيمته في معركة الزاب؟",
        "answer": "مروان بن محمد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تعني المقاتل الشجاع؟",
        "answer": "مِغوار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح العلمي الذي يُطلق على علم الأرصاد الجوية ودراسة الغلاف الجوي والظواهر المناخية؟",
        "answer": "الميتورولوجيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل الذي قال عنه النبي صلى الله عليه وسلم: \"أعلم أمتي بالحلال والحرام\"؟",
        "answer": "معاذ بن جبل (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على الشخص الذي يتولى نقل الرسائل أو السلع من مصدرها إلى وجهتها نيابةً عن غيره؟",
        "answer": "مندوب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى المجاعة الشديدة وقد ورد ذكرها في القرآن الكريم؟",
        "answer": "مسغبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو المَلَك الموكل والمكلف بنزول المطر وإنبات النبات؟",
        "answer": "ميكائيل (عليه السلام)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الخليفة العباسي الذي تم في عهده فتح مدينة \"عمورية\" التاريخية بعد أن قاد الجيش بنفسه؟",
        "answer": "المعتصم بالله",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي السورة الكريمة التي ذكر فيها لفظ الجلالة \"الله\" في جميع آياتها، وذكر اللفظ 41 مرة في 22 آية",
        "answer": "سورة المجادلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الجهاز الذي يتحكم في مرور السائل داخل المواسير بفتحه وإغلاقه؟",
        "answer": "محبس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اللفظ اللغوي الذي يُطلق في العربية على الموت أو الوفاة والأسباب المؤدية إليه؟",
        "answer": "المنايا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المحافظة التابعة لمنطقة الرياض والتي كانت قديماً محطة رئيسية للقوافل بين نجد والقصيم؟",
        "answer": "المجمعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو معدل حالة الطقس لمنطقة معينة على مدى فترة زمنية طويلة؟",
        "answer": "مناخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما معنى مسغبة في قوله تعالى: ( أَوْ إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ )؟",
        "answer": "مجاعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الوثيقة التاريخية المكتوبة باليد قبل اختراع الطباعة؟",
        "answer": "مخطوطة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الشعائر والأعمال التي يقوم بها الحاج أثناء أداء فريضة الحج؟",
        "answer": "مناسك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الأداة الثقيلة التي تلقى في قاع البحر لتثبيت السفينة؟",
        "answer": "مرساة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تُسمى المرحلة للقمر في نهاية الشهر والّتي يختفي فيها ضوؤه تماماً؟",
        "answer": "محاق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تُسمى الهمزة التي تكتب في آخر الكلمة؟",
        "answer": "الهمزة المتطرفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الحارس السعودي الذي لعب لناديي الطائي والهلال ولُقب بالأخطبوط؟",
        "answer": "محمد الدعيع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة تطلق على المكان الذي ترسو فيه السفن وتحمّل وتفرغ بضائعها؟",
        "answer": "ميناء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الهيكل أو البرج المرتفع المبني على السواحل والذي يُصدر أنواراً قوية لإرشاد السفن وتوجيهها في عرض البحر؟",
        "answer": "منارة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى النص النثري المحدود الذي يطرح فيه الكاتب فكرة أو رأياً معيناً؟",
        "answer": "مقال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجهاز الشامل المستخدم لقياس كل من الجهد والتيار والمقاومة معاً؟",
        "answer": "ملتيميتر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الجزء من الدماغ المسؤول عن التوازن وتنسيق الحركة؟",
        "answer": "المخيخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى التجربة المثيرة والجريئة التي يفعلها الشخص وتكون مليئة بالمخاطرة والنتائج غير المؤكدة، وتولد روح الإثارة والاستكشاف",
        "answer": "مغامرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي أول جامعة رسمية تم إنشاؤها كجامعة في المملكة العربية السعودية في عام 1957م؟",
        "answer": "الملك سعود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الشكل الهندسي ثلاثي الأبعاد الذي يتكوّن من ستة أوجه مربعة متطابقة ومتساوية الأضلاع؟",
        "answer": "المكعب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي أم إبراهيم ابن النبي ﷺ، والتي كانت الاستثناء الوحيد من بين أولاده الذين أنجبتهم خديجة (رضي الله عنها)؟",
        "answer": "ماريا القبطية (رضي الله عنها)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي العلاقة الرياضية التي تربط متغيرين أو أكثر بعلامة يساوي؟",
        "answer": "المعادلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل الذي يُعد مؤسس الدولة الأموية وأول خلفائها؟",
        "answer": "معاوية بن أبي سفيان (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الجزء من النهر الذي يلتقي فيه الماء العذب بالماء المالح؟",
        "answer": "المصب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الجدّ الذي يُنسب إليه عدد من قبائل العرب الكبرى مثل قريش وكنانة وتميم وهذيل، ويُعد من أجداد النبي ﷺ؟",
        "answer": "مضر بن نزار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى الاتفاق الجماعي الذي يحدد القواعد والأسس؟",
        "answer": "ميثاق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو النبات المقصود بلفظ \"الطلح المنضود\" الذي ورد في سورة الواقعة؟",
        "answer": "الموز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى البيان المالي التقديري المتوقع لإيرادات ومصروفات الدولة أو المنشأة خلال سنة قادمة؟",
        "answer": "الميزانية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما محطات توليد الطاقة في الخلية والّتي تعمل على تنفس الخلية وإنتاج الطاقة؟",
        "answer": "ميتوكندريا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على الجسد المحنّط الذي يُحفظ من التحلل باستخدام وسائل خاصة، وارتبط بالحضارة المصرية القديمة؟",
        "answer": "مومياء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على المضيف صاحب البيت الذي يستقبل الضيوف؟",
        "answer": "المعزب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي عاصمة الصومال والّتي تقع على ساحل المحيط الهندي؟",
        "answer": "مقديشو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الخليفة العباسي العاشر الذي عُرف في التاريخ بنقله عاصمة الخلافة مؤقتاً إلى سامراء والاهتمام بالعمارة؟",
        "answer": "المتوكل على الله",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الفتنة الأكبر في تاريخ البشرية، والتي أنذر منها جميع الأنبياء (عليهم السلام) أقوامهم؟",
        "answer": "المسيح الدجال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل الذي يُعد أول فارس في الإسلام، وشهد غزوة بدر فارساً وحيداً في صفوف المسلمين؟",
        "answer": "المقداد بن عمرو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى ولد الناقة إذا أكمل عامه الأول وانفصل عن أمه؟",
        "answer": "مفرود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الشاعر العربي الذي قال: \"إذا غامرتَ في شرفٍ مرومِ، فلا تقنعْ بما دونَ النجومِ\"؟",
        "answer": "المتنبي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على نوع أدبي يتميز بالسجع واللغة البلاغية ويدور حول مغامرات خيالية؟",
        "answer": "المقامات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الحساب الذي يمثل الأشخاص أو الجهات التي تدين للمنشأة بالمال نتيجة لعملية البيع الآجل؟",
        "answer": "المدينون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم خط التحصينات الدفاعية الذي بنته فرنسا بعد الحرب العالمية الأولى لمواجهة أي هجوم ألماني؟",
        "answer": "خط ماجينو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الزاوية الأكبر من 90 درجة وأقل من 180؟",
        "answer": "منفرجة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تُسمى شرعاً البهيمة التي ماتت نتيجة الضرب بالعصا أو الحجارة وحرم القرآن أكلها؟",
        "answer": "الموقوذة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الحيوانات التي تقوم بإعادة مضغ الطعام بعد ابتلاعه؟",
        "answer": "المجترات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الفيل الأكبر الذي قاد به أبرهة الحبشي جيشه متجهاً لهدم الكعبة، وبرك رافضاً التقدم نحوها؟",
        "answer": "محمود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى من يرجى إسلامه أو كف شره بإعطائه من الزكاة؟",
        "answer": "المؤلفة قلوبهم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الأسطورة الكروية الفرنسي الذي حقق جائزة الكرة الذهبية ثلاث مرات متتالية في الثمانينيات؟",
        "answer": "ميشيل بلاتيني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم لغة الكتابة القديمة التي كانت تُنقش على ألواح الطين في عهد ما قبل الميلاد بحضارة بلاد الرافدين؟",
        "answer": "المسمارية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الكوكب الذي يُعرف بالكوكب الأحمر؟",
        "answer": "المريخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المكاتبات المتبادلة بين طرفين أو أكثر عبر وسائل الاتصال المختلفة؟",
        "answer": "مراسلات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة التاريخية في اليمن التي كانت عاصمة لمملكة سبأ واشتهرت بسدها القديم؟",
        "answer": "مأرب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم الذي وضع حجر الأساس لعلم الوراثة من خلال تجاربه على نبات البازلاء؟",
        "answer": "مندل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الشهير الذي يطلقه العرب على مكان مبيت الإبل وربوضها وتجمعها حول الماء؟",
        "answer": "المعطن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي عاصمة جمهورية جزر القمر؟",
        "answer": "مروني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الشخصية الكوميدية البريطانية الشهيرة التي جسدها الممثل روان أتكينسون؟",
        "answer": "مستر بين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مؤسس الدولة الأموية في دمشق؟",
        "answer": "معاوية بن أبي سفيان (رضي الله عنهما)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الطعام الذي أنزله الله على بني إسرائيل خلال تيههم في الصحراء؟",
        "answer": "المن والسلوى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى سباق الجري طويل المسافة الذي يبلغ طوله الرسمي حوالي 42 كيلومتراً؟",
        "answer": "ماراثون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تُسمى القيمة الأكثر تكراراً أو شيوعاً في مجموعة من البيانات الإحصائية؟",
        "answer": "المنوال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المعجزة التي طلبها الحواريون من عيسى (عليه السلام) أن يَدعوَ الله لينزلها عليهم من السماء لتكون لهم عيداً؟",
        "answer": "المائدة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تُسمى القطعة الصغيرة المربعة المصنوعة من القماش أو الورق لتستعمل أساساً لأغراض النظافة الشخصية ومسح الوجه واليدين؟",
        "answer": "المنديل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو المسؤول الأول عن الجوانب التنظيمية والإدارية لملعب مباراة كرة القدم وتوثيق أحداثها؟",
        "answer": "مراقب المباراة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم الجزء العلوي المنتفخ من سدأة الزهرة الذي تتكون داخله حبوب اللقاح؟",
        "answer": "المتك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اللفظ الذي يُطلق على المشكلة المستعصية أو المسألة المعقدة التي يصعب حلها؟",
        "answer": "المعضلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الممر المائي الذي يصل بين مسطحين مائيين كبيرين؟",
        "answer": "مضيق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم الحصان الشهير الذي قاده نابليون بونابرت في معظم معاركه التاريخية؟",
        "answer": "مارينغو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى المسافة حول الدائرة؟",
        "answer": "محيط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بماذا كان يُسمّى يوم الخميس في الجاهلية، حيث كانت العرب تميل فيه إلى الراحة والملاذّ بعد أيام العمل؟",
        "answer": "مؤنس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الذي كان من أترف شباب مكة فترك الترف وهاجر للحبشة ثم للمدينة ليصبح أول سفير في الإسلام؟",
        "answer": "مصعب بن عمير (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ض",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من معجزات موسى عليه السلام لفرعون ؟",
        "answer": "الضفادع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نبات ذكره الله في القرآن الكريم في سورة الغاشية و هو طعام أهل النار ؟",
        "answer": "الضريع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "شاعرة صحابية كانت زوجة هشام بن مغيرة في الجاهلية أسلمت بمكة أوائل ظهور الدعوة ؟",
        "answer": "ضباعة بنت عامر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نستمده من أشعة الشمس على الأرض ؟",
        "answer": "الضوء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة بمعنى الخضوع والإذلال ؟",
        "answer": "ضراعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الشيء الذي يؤنب الإنسان على فعل خطاء في نفسه ؟",
        "answer": "الضمير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة مرادفة للحقد ؟",
        "answer": "ضغينة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الهزال وسوء الحال ؟",
        "answer": "الضر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صفة النصارى التي ذكرها القرآن الكريم في سورة الفاتحة ؟",
        "answer": "الضالين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بمعنى ضاع الشي وهلك ؟",
        "answer": "ضل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي السورة التي سميت باسم وقت من أوقات الزمن ؟",
        "answer": "الضحى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ميزة تكثر في مدينة لندن البريطانية ؟",
        "answer": "الضباب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من الحيوانات الصحراوية ؟",
        "answer": "ضب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي وظيفة القلب الأساسية في الجسم ؟",
        "answer": "ضخ الدم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بأي اسم عرفت اللغة العربية ؟",
        "answer": "الضاد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو جمع الشيء إلى الشيء ؟",
        "answer": "ضم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المسجد الذي حكم الرسول صلى الله عليه وسلم بهدمه وحرقه ؟",
        "answer": "ضرار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو تصحيح الكتاب و تدقيقه و تشكيله ؟",
        "answer": "ضبط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو التزام الهدوء بعد التعرض لموقف يضيق به الصدر ؟",
        "answer": "ضبط النفس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو بخار الماء الكثيف و يغشى الأرض كالدخان ؟",
        "answer": "الضباب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة : بمعنى شبيه ونظير ومثيل وكفء ؟",
        "answer": "ضد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو جري الماء و رشه ؟",
        "answer": "ضخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الكفيل أو الملتزم في المعاملات المالية ؟",
        "answer": "ضامن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في الألغاز : قليل لا عمق فيه ؟",
        "answer": "ضحل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو وصف لمكان الماء قريب القعر ؟",
        "answer": "ضحضاح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أسماء الأسد ؟",
        "answer": "ضرغام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي شاطئ البحر و ساحله ؟",
        "answer": "الضفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أتت في القرآن بمعنى وصف وبين ؟",
        "answer": "ضرب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي حديدة عريضة يضبب بها الباب ؟",
        "answer": "ضبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الشخص الذي ذهب بصره ؟",
        "answer": "ضرير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من مراتب صحة الحديث ؟",
        "answer": "الضعيف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الجلبة و الصياح و أكثر ما تكون من السيارات ؟",
        "answer": "ضجيج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما معنى قوله تعالى في سورة البقرة : زللتم ؟",
        "answer": "ضللتم عن الحق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة هو الغليظ والعظيم من كل شي ؟",
        "answer": "ضخم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الشعر الطويل المتشابك مع بعضه البعض مكونا الجدائل ؟",
        "answer": "ضفيرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "المتمكن من الشيء المتعمق في عمله و الماهر به ؟",
        "answer": "ضليع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "على من تطلق كنية أم عامر من الحيوانات ؟",
        "answer": "الضبع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة : هو الضيق الشديد ؟",
        "answer": "ضنك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو ما يطلق على العزيز و خاصة الولد ؟",
        "answer": "الضنى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول من ارتشى في الحكم ؟",
        "answer": "ضمرة بن صخر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "القوة المؤثرة التي تتركز على نقطة معينة بفعل الثقل الذي يحدثه عمود الهواء على هذه النقطة ؟",
        "answer": "الضغط الجوي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو ما تضرم به النار من الحطب ؟",
        "answer": "الضرام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو القلق من الغم ؟",
        "answer": "ضجر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي الحاجة أو الشدة التي لا غنى عنها ؟",
        "answer": "ضرورة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو شدة الظلم ؟",
        "answer": "ضيم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي عظم مستطيل من عظام الجنب منحني ؟",
        "answer": "الضلع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى صوت الفرس إذا عدت ؟",
        "answer": "ضبح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة : بمعنى ضرب عليه بكفه ؟",
        "answer": "ضبث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الفيزيائي الذي يعبر عن مقدار القوة العمودية المؤثرة على وحدة المساحة؟",
        "answer": "الضغط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على الشيء المفقود الذي يبحث عنه صاحبه؟",
        "answer": "ضالة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تعني في اللغة تاه عن الطريق الصحيح وفقد وجهته؟",
        "answer": "ضلَّ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللفظ الذي ورد في سورة الفاتحة للإشارة إلى النصارى؟",
        "answer": "الضالين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على حالة العداء المستحكم والبغضاء الشديدة بين طرفين؟",
        "answer": "ضغينة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تصف الماء القليل القريب من القاع، وتصف كل شيء سطحي ليس له عمق",
        "answer": "ضحل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تعني دفع الماء أو السائل وقذفه بقوة؟",
        "answer": "ضخ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم البرنامج الحكومي الذي يقدّم دعمًا ماليًا للفئات المحتاجة؟",
        "answer": "الضمان الاجتماعي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على البناء الذي يقام فوق قبر شخصية هامة لتخليد ذكراه وهو من وسائل الشرك؟",
        "answer": "ضريح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الوصف القرآني للانحراف عن طريق الحق والهدى؟",
        "answer": "ضلال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "محافظة سعودية تقع على ساحل البحر الأحمر اشتهرت قديما بكونها ميناء آمن لسفن التجارة والصيد",
        "answer": "ضباء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حيوان صحراوي مهدد بالإنقراض يتميز بجسد غليظ وذيل شوكي قوي يستخدمه للدفاع عن نفسه ويعيش في الجحور",
        "answer": "الضب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على الأصوات المزعجة والمشوشة الناتجة عن غير البشر؟",
        "answer": "ضوضاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم النادي السعودي لكرة القدم الذي يتخذ من مدينة خميس مشيط مقراً له ويلقب بـ 'فارس الجنوب'؟",
        "answer": "ضمك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يطلق على العيش في ضيق ومعاناة؟",
        "answer": "ضنك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى المنطقة السكنية الواقعة على أطراف مدينة كبيرة وتعتبر امتداداً لها؟",
        "answer": "ضاحية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم تصفيفة الشعر التي يتم فيها تشابك الخصل مع بعضها بشكل متداخل؟",
        "answer": "ضفيرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "عظم منحنٍ ومسطح يشكل جزءًا من القفص الصدري لحماية القلب والرئتين ويساهم في عملية التنفس",
        "answer": "ضلع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وصف للشيء الكبير الحجم أو العظيم البنية",
        "answer": "ضخم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما القوة الداخلية التي تدفع الإنسان للتمييز بين الصواب والخطأ وتؤنبه عند ارتكابه للذنوب؟",
        "answer": "الضمير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الوصف الذي يُطلق على الشخص فاقد البصر؟",
        "answer": "ضرير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يطلق على من يقع فريسة للظلم أو الأذى؟",
        "answer": "ضحية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أسماء الأسد في اللغة العربية",
        "answer": "ضرغام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الطبي الذي يشير إلى تقلص حجم العضلات أو الأنسجة؟",
        "answer": "ضمور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الحيوان البرمائي الّذي يستخدم جلده للتنفس والشرب تحت الماء ويستطيع القفز لمسافة أعلى بخمسين مرة من حجمه؟",
        "answer": "الضفدع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الالتزام بتحمل تبعة هلاك الشيء أو تلفه؟",
        "answer": "ضمان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بماذا أمر الله نبيه أيوب -عليه السلام- أن يضرب به زوجته ضربًا غير مبرح لئلا يحنث بيمينه؟",
        "answer": "ضغث",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم القوة التي يسببها وزن الهواء وتؤثر على سطح الأرض وكل ما عليها؟",
        "answer": "الضغط الجوي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الوصف الذي يُطلق على الشخص المتمكن والماهر جداً في علمه أو تخصصّه؟",
        "answer": "ضليع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى حالة شعور الإنسان بأنه تائه بلا هدف أو وجهة؟",
        "answer": "ضياع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تعني في اللغة الأسد المفترس أو المولع بالصيد؟",
        "answer": "ضاري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مالكلمة الّتي وردت في القرآن الكريم وتأتي بمعنى \"ظالمة أو جائرة\"",
        "answer": "ضيزى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُطلق في علم الحديث على الرواية التي لا تتوفر فيها شروط القبول؟",
        "answer": "ضعيف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المسمى اللغوي للأسنان العريضة والقوية المستقرة في مؤخرة الفم والمسؤولة عن طحن الطعام؟",
        "answer": "الضروس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الوصف الذي يطلق على الشيء القليل جدًا أو الصغير الحجم؟",
        "answer": "ضئيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المسجد الذي أمر النبي بهدمه لكونه بني نفاقًا وتفريقًا بين المؤمنين؟",
        "answer": "الضرار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مبلغ مالي تتقاضاه الدولة من الأفراد والمؤسسات بهدف تمويل النفقات العامة",
        "answer": "الضريبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الصوت الذي تصدره الخيل عند عدوها بسرعة، ومذكور في القرآن؟",
        "answer": "ضبح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة الساحلية السعودية التي تقع في منطقة تبوك وتُعد من أقدم الموانئ الحيوية على ساحل البحر الأحمر؟",
        "answer": "ضبا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الذي لقبته الروم بـ \"الشيطان عاري الصدر\" بعد أن أرعبهم؟",
        "answer": "ضرار بن الأزور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى حالة الإحساس بصعوبة التنفس وعدم القدرة على استنشاق هواء كافٍ؟",
        "answer": "ضيق تنفس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الحالة النفسية التي تصف شعور الإنسان بالملل والسأم من شيء معين؟",
        "answer": "ضجر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الجغرافي الذي يُطلق على الأرض المجاورة للنهر أو البحيرة؟",
        "answer": "ضفة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى العملية الحسابية التي تمثل جمع متكرر؟",
        "answer": "الضرب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم النبات الشوكي الذي ورد في سورة الغاشية كطعام لبعض أهل النار لا يُسمن ولا يُغني من جوع؟",
        "answer": "الضريع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الكلمات التي تحل محل الأسماء في الجمل لتجنب التكرار وجعل اللغة أكثر إيجازًا؟",
        "answer": "الضمائر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى أول النهار عند ارتفاع الشمس وانتشار ضوئها بعد الشروق؟",
        "answer": "ضحى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة بمعنى خلاف الشيء وعكسه",
        "answer": "ضد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة ورد ذكرها في القرآن ومعناها شديد البخل",
        "answer": "ضنين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى عملية استقبال للزائر وإكرامه وإيوائه وتقديم الطعام والشراب له",
        "answer": "ضيافة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الأصوات الشديدة التي تلفت الانتباه، وتستخدم في سياق إثارة اهتمام الناس والجدل حول أمر ما؟",
        "answer": "ضجة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ردة فعل طبيعية للإنسان على المواقف الطريفة وهو شكل من أشكال التعبير عن التسلية والمرح",
        "answer": "الضحك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الوصف الّذي أُطلق على فم النبي ﷺ، وتعني عظيم الفم، وهو من علامات الجمال والرجولة عند العرب؟",
        "answer": "ضليع الفم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُطلق على الحرب القاسية التي لا ترحم فيها طرف لآخر؟",
        "answer": "ضروس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وصف للنور الواضح والقوي ويستخدم مجازاً لوصف البيان والوضوح",
        "answer": "ضياء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى حالة كون المياه غير عميقة، خاصة قرب الشواطئ أو في بعض أجزاء الأنهار؟",
        "answer": "ضحالة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ظاهرة طبيعية عبارة عن سحابة منخفضة ملامسة لسطح الأرض، تتكون من قطرات ماء دقيقة جدًا معلقة في الهواء",
        "answer": "ضباب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "قطعة من القماش أو الشاش تُربط حول العضو الجريح أو المكسور",
        "answer": "ضماد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يشير إلى عدم الوضوح والغموض في الفكرة أو الرؤية؟",
        "answer": "ضبابية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بماذا توصف شدة القتال أو شراسة الهجوم في المعارك؟",
        "answer": "ضراوة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "شكل من أشكال الطاقة وإشعاع كهرومغناطيسي مرئي للعين البشرية تبلغ سرعته 300 ألف كيلومتر في الثانية",
        "answer": "الضوء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اللفظ اللغوي الذي يعبر عن اشتعال النار وتوقد الحطب؟",
        "answer": "الضرام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى تورط شخص أو جهة ما في عمل غير قانوني أو مؤامرة؟",
        "answer": "ضلوع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "س",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من أول من كتب بسم الله الرحمن الرحيم ؟",
        "answer": "سليمان عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وقت في الليل يستحب الاستغفار فيه ؟",
        "answer": "السحر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء يوم القيامة ؟",
        "answer": "الساعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من قائد معركة القادسية ؟",
        "answer": "سعد بن أبي وقاص",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "عالم نحوي مسلم ذو أصل فارسي يعد من أوسع النحاة شهرة ؟",
        "answer": "سيبوية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بماذا لقب خالد بن الوليد ؟",
        "answer": "سيف اله المسلول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما عاصمة البوسنة والهرسك ؟",
        "answer": "سراييفو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم عين في الجنة ؟",
        "answer": "سلسبيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الذي أشار بحفر الخندق ؟",
        "answer": "سلمان الفارسي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كم كان عمر نبينا محمد صلى الله عليه وسلم عندما ماتت أمه ؟",
        "answer": "ست سنوات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء جهنم ؟",
        "answer": "سقر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أول من رمى سهما في الاسلام ؟",
        "answer": "سعد بن أبي وقاص",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو القطيع أو الجماعة جنب إلى جنب ؟",
        "answer": "سرب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي مدينة توجد المئذنة الملوية ؟",
        "answer": "سامراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ترك التكلم مع القدرة عليه ؟",
        "answer": "السكوت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "المسافة التي يقطعها جسم متحرك في وحدة من الزمن ؟",
        "answer": "السرعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "احدى زوجات الرسول الكريم عليه الصلاة والسلام ؟",
        "answer": "سودة بنت زمعه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النبي الذى علمه الله لغة الطير والحيوان ؟",
        "answer": "سليمان عليه السلام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كم عدد أحزاب القرآن ؟",
        "answer": "ستون حزبا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو مرض يظهر عن طريق تكاثر الخلايا في جسم الإنسان بطريقة جنونية حتى الوفاة ؟",
        "answer": "سرطان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الممثل الدبلوماسي لدولة ما في دولة مضيفة ؟",
        "answer": "سفير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو مربي الخيل و مروضه ؟",
        "answer": "سائس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الذي إهتز لموته عرش الرحمن ؟",
        "answer": "سعد بن معاذ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما أكبر مدينة من حيث عدد السكان في استراليا ؟",
        "answer": "سيدني",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي معرفة نسب الرسول صلى الله عليه وسلم حياته من ولادته حتى وفاته ؟",
        "answer": "سيرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بمعنى حفيد أو قريب أو صاحب نسل ؟",
        "answer": "سبط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الشي الذي إذا تجاوز اثنين شاع ؟",
        "answer": "السر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كم عدد السور التي افتتحت بـ ( طسم ) ؟",
        "answer": "سورتان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما أطول بناء في العالم ؟",
        "answer": "سور الصين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي وجه بلا لسان و تتحدث عن الزمان ؟",
        "answer": "الساعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اسم النهر الذي تقع على ضفافه مدينة باريس ؟",
        "answer": "السين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الثدييات المتوحشة الآكلة للحوم و ذكرت في القرآن ؟",
        "answer": "سبع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بلاد فتحها القائد محمد بن القاسم ؟",
        "answer": "السند",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو قائد المسلمين في معركة عين جالوت ؟",
        "answer": "سيف الدين قطز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول قاضي قضى في العراق ؟",
        "answer": "سلمان بن ربيعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو اللباس في النار و جاء وصفه في القرآن ؟",
        "answer": "سرابيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من مؤلف كتاب تاريخ الخلفاء ؟",
        "answer": "السيوطي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الشيء الذي يخرج من الماء ولا يدخله ؟",
        "answer": "السمك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى شحم سنام الإبل ؟",
        "answer": "السرهد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في أي البلدان يقع نهر الخابور ؟",
        "answer": "سوريا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "تبكي بلا عيون و تمشي بلا أرجل فما هي ؟",
        "answer": "السحابة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي زوجة إبراهيم وأم أسحاق عليهما السلام ؟",
        "answer": "سارة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كل قطعة مستطيلة من المعدن مصبوبة كالقضبان و تكون من الذهب أو الفضة ؟",
        "answer": "سبيكة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد فصائل القرود ؟",
        "answer": "السعدان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مخترع الدبابة ؟",
        "answer": "سوينتون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "شجرة ذكرت في القرآن ؟",
        "answer": "السدر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "على ماذا تطلق الأسماء التالية : الأحدب و الخاطف ؟",
        "answer": "السيف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد الفلاسفة اليونانيين ؟",
        "answer": "سقراط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هي المرأة التي ادعت النبوة وتبعت مسيلمة الكذاب بعد وفاة النبي ﷺ؟",
        "answer": "سجاح التميمية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المملكة اليمنية القديمة التي حكمتها بلقيس وذُكرت في القرآن الكريم؟",
        "answer": "سبأ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو القائد والأمير الذي اشتهر بحروبه ضد الروم، وكان من أبرز من مدحه المتنبي، واتخذ من حلب مركزًا له؟",
        "answer": "سيف الدولة الحمداني",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العبّارة المصرية الّتي غرقت في البحر الأحمر في عام 2006؟",
        "answer": "عبارة السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الوقت المبارك الذي يسبق طلوع الفجر مباشرة، وأثنى الله في القرآن الكريم على المستغفرين فيه؟",
        "answer": "السحر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُستخدم لوصف أسلوب نقل الأحداث في الروايات أو القصص؟",
        "answer": "سرد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما معنى مصطلح \"الفُلْك\" الذي ورد في مواضع عدة من القرآن الكريم؟",
        "answer": "السفينة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم اللغة التي تُستخدم في عدد من دول شرق إفريقيا وتضم كلمات من أصول عربية؟",
        "answer": "اللغة السواحلية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم النحوي الذي ألّف كتاب \"الكتاب\" ويُعد من مؤسسي علم النحو في اللغة العربية؟",
        "answer": "سيبويه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة التي تحتوي على أكبر عدد من الأهرامات في العالم؟",
        "answer": "السودان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي اللغة الرسمية التي كانت شائعة ومفضلة لدى طبقة النبلاء والأثرياء في فنلندا قديماً؟",
        "answer": "السويدية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الأشعة المستخدمة في التصوير الطبي للكشف عن العظام؟",
        "answer": "السينية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الذي يُستخدم لوصف تصرفات الإنسان وردود أفعاله في مواقف مختلفة؟",
        "answer": "السلوك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو اللاعب الوحيد الذي فاز بدوري الأبطال مع ثلاثة أندية مختلفة؟",
        "answer": "سيدورف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نبات يٌستخرج من حبه الصغير زيت السيرج",
        "answer": "السمسم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الشجرة العملاقة التي تعد من أشهر وأقدم أشجار غابات الأمازون؟",
        "answer": "شجرة السيبا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم العلمي لـ علم الزلازل الذي يختص بدراسة الهزات الأرضية وانتشار الموجات عبر كوكب الأرض؟",
        "answer": "سيزمولوجيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العنصر الكيميائي الأساسي في صناعة الرقائق الإلكترونية؟",
        "answer": "سيليكون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المقدار الفيزيائي الذي يقاس بوحدة متر في الثانية؟",
        "answer": "السرعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المنطقة الجغرافية الشاسعة والباردة التي تقع في شمال شرق روسيا؟",
        "answer": "سيبيريا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ممثل دولته لدى حكومة دولة أخرى وهو أعلى رتبة دبلوماسية معتمدة",
        "answer": "السفير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم البحيرة التي تقع بين كندا والولايات المتحدة وتُعد أكبر بحيرة للمياه العذبة في العالم من حيث المساحة؟",
        "answer": "سوبيريور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجبل الشهير الذي يمثل الجزء الثاني من ثنائية جبال طيء الشهيرة في منطقة حائل ويقترن دائماً بجبل أجا؟",
        "answer": "جبل سلمى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي جليل، عاش طويلاً حتى بعد المائة، وكان آخر من مات من الصحابة بالمدينة",
        "answer": "سهل بن سعد (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة البوسنة والهرسك؟",
        "answer": "سراييفو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الّذي وعده الرسول بسواري كسرى وقد تحقق له ذلك بعد سقوط كسرى؟",
        "answer": "سراقة بن مالك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجزء من النبات الذي يحمل الأوراق والأزهار ويدعمها؟",
        "answer": "ساق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما مصطلح قدرة المكثف على تخزين الشحنة الكهربائية؟",
        "answer": "سعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللفظ القرآني الذي يُطلق على أحد أبواب أو دركات جهنم ويدل على شدة حرقها وتغييرها للملامح؟",
        "answer": "سقر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجزيرة الّتي تدور بها أحداث لعبة تشابك Tangles (من تطوير أستديو سهم)؟",
        "answer": "سيرين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم التاريخي القديم الذي عُرفت به مملكة تايلاند في جنوب شرق آسيا حتى منتصف القرن العشرين؟",
        "answer": "سيام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المبدأ الفلسفي الذي يربط بين السبب والنتيجة؟",
        "answer": "سببية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما نوع التضاريس المنبسطة التي تتميز بارتفاع منخفض وتربة خصبة؟",
        "answer": "سهول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي مدينة سعودية تقع قلعة زعبل الأثرية الشامخة فوق قمة جبل صخري؟",
        "answer": "سكاكا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم السحابة الكونية المكونة من غبار وغاز والتي تتشكل منها النجوم؟",
        "answer": "سديم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما مصطلح فن إدارة شؤون الدولة والمجتمع؟",
        "answer": "سياسة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو خطيب قريش الذي قال عنه النبي ﷺ لعمر بن الخطاب (رضي الله عنه): \"لعله يقف موقفاً يعجبك\"، فأسلم وحسن إسلامه؟",
        "answer": "سهيل بن عمرو (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القناة المائية الاصطناعية الشهيرة التي تربط بين البحر الأحمر والبحر الأبيض المتوسط؟",
        "answer": "قناة السويس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة اللغوية التي تعني بقية ضوء النهار المختلط بظلمة الليل؟",
        "answer": "سدف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الإمبراطورية الفارسية التي حكمت أجزاء واسعة من الشرق الأوسط قبل الإسلام وكانت عاصمتها المدائن؟",
        "answer": "الإمبراطورية الساسانية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى شحم سنام الإبل في المعاجم واللغة العربية؟",
        "answer": "السرهد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي الدولة التي تمتلك أكبر عدد من الجزر في العالم؟",
        "answer": "السويد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما ذا يسمى النوم العميق حيث لا يشعر فيه الإنسان بما حوله؟",
        "answer": "سُبات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مصطلح يطلق على الريح الحارة الجافة",
        "answer": "سَموم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللقب الذي كان يُطلق على حاكم الدولة العثمانية؟",
        "answer": "سلطان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "طبقة المحاربين النبلاء في اليابان الإقطاعية، اشتهروا بكونهم مقاتلين محترفين أوفياء خدموا الدايميو والشوغن لقرون",
        "answer": "الساموراي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة دولة السويد؟",
        "answer": "ستوكهولم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الرجل من قوم موسى (عليه السلام) الذي صنع عجلاً من ذهب لبني إسرائيل ودعاهم لعبادته؟",
        "answer": "السامري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل، خطيب قريش، أسلم يوم الفتح وكان فصيحاً",
        "answer": "سهيل بن عمرو (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما إسم أقدم حضارة معروفة في بلاد الرافدين؟",
        "answer": "السومرية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو المشروب الشعبي الرمضاني الذي يُصنع من الشعير أو الخبز الجاف ويشتهر في الحجاز ومصر؟",
        "answer": "سوبيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الأمير الراحل الذي قضى قرابة 40 عاماً في منصبه كوزير للخارجية السعودية؟",
        "answer": "سعود الفيصل (رحمه الله)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تُطلق في اللغة على مجموعة الطيور أو الحيوانات التي تطير أو تسير معاً؟",
        "answer": "سرب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة الأوروبية التي لا تمتلك عاصمة رسمية محددة في دستورها؟",
        "answer": "سويسرا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ القرآني الذي يُطلق على نوع من الحرير الناعم والرقيق؟",
        "answer": "السندس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النجم الكروي السعودي السابق الذي اختار الاتحاد الدولي لكرة القدم (فيفا) هدفه المونديالي كأفضل هدف في كأس العالم 1994 م؟",
        "answer": "سعيد العويران",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة جمهورية تشيلي؟",
        "answer": "سانتياغو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل وأحد العشرة المبشرين بالجنة، الذي كان إسلامه سبباً في إسلام عمر بن الخطاب (رضي الله عنه)؟",
        "answer": "سعيد بن زيد (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وحدة قياس للمسافات الشاسعة جدًا وتعادل 9.46 تريليون كيلومتر",
        "answer": "سنة ضوئية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الظروف المحيطة بحدث معين والتي تحدد معناه الدقيق وتوضح مقصوده",
        "answer": "سِياق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الطبي للنظام الداخلي المتوازن الذي يعمل على مدار 24 ساعة لتنظيم دورات النوم والاستيقاظ في الكائنات الحية؟",
        "answer": "الساعة البيولوجية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم البيئة الطبيعية المنتشرة في أفريقيا والتي تتميز بأشجار متناثرة وأعشاب طويلة؟",
        "answer": "سافانا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تعني في لغة العرب ابن الابنة أو الحفيد؟",
        "answer": "سِبط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المنفذ الحدودي الذي يربط بين السعودية و قطر؟",
        "answer": "سلوى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "سيد الخزرج في الجاهلية والإسلام، وأحد النقباء الاثني عشر، وحامل راية الأنصار",
        "answer": "سعد بن عبادة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُطلق على الكتلة الناتجة من صهر المعادن وصبّها في قالب، سواء كانت من معدن واحد أو خليط من عدة معادن؟",
        "answer": "سبيكة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي عاصمة دولة السلفادور؟",
        "answer": "سان سلفادور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هم أول من ابتكروا واستخدموا السبحة في التاريخ لغرض العد والإحصاء؟",
        "answer": "السومريين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم العين العذبة الجارية في الجنة والتي ورد ذكرها في سورة الإنسان؟",
        "answer": "سلسبيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تُطلق كاسم على إحدى فصائل القرود؟",
        "answer": "السعدان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النجم الكروي السعودي الذي حقق جائزة أفضل لاعب في آسيا مرتين؟",
        "answer": "سالم الدوسري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المرض الذي ينتج عن انقسام الخلايا بشكل غير طبيعي وخارج عن السيطرة؟",
        "answer": "سرطان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الكلام الي تتوافق نهايات الجمل في الحرف الأخير، مما يجعل الكلام يطرب الأذن ويزيد التركيز",
        "answer": "السجع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل الذي عرف بسرعته الفائقة حتى قيل إنه كان يسبق الخيل عدواً؟",
        "answer": "سلمة بن الأكوع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل (رضي الله عنه) الذي عُرف بشجاعته في الغزوات، وكان يرتدي «عصابة الموت» الحمراء لينبئ الأعداء بدنو حتفهم؟",
        "answer": "سِماك بن خَرَشة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المنشأ الهندسي الذي يُبنى عبر مجاري المياه أو الأودية لحجز مياه الأمطار والسيول وتخزينها؟",
        "answer": "السد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل الذي أشار بفكرة حفر الخندق يوم الأحزاب؟",
        "answer": "سلمان الفارسي (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نوع من الحرير الرقيق الناعم و الفاخر وهو من أرقى وأجمل ثياب أهل الجنة...",
        "answer": "السندس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المهنة التاريخية التي تختص بالعناية بشؤون الكعبة المشرفة من فتحها وإغلاقها وخدمتها وتوارثها آل شيبة إلى زمننا هذا؟",
        "answer": "السدانة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُشرع للمصلّي لجبر خلل في صلاته بسبب زيادة أو نقصان أو شك؟",
        "answer": "سجود السهو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المسلسل الرمضاني السعودي الكوميدي الذي تدور أحداثه حول ثلاثة أشقاء يقعون في مأزق إدارة فندق ومحطة وقود بعد وفاة والدهم؟",
        "answer": "سكة سفر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الّذي اهتز لموته عرش الرحمن؟",
        "answer": "سعد بن معاذ (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مرض تبدأ أعراضه بعطش شديد، كثرة التبول، تعب، وفقدان وزن",
        "answer": "السكري",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المعركة الحاسمة التي خاضها الملك عبدالعزيز عام 1929م في روضة تقع بين الزلفي والأرطاوية، وكانت سببًا في تثبيت أركان الدولة؟",
        "answer": "السبلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المنصب الدبلوماسي الأعلى لمن يمثل دولته في دولة أخرى؟",
        "answer": "سفير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مادة غنية بالمغذيات تضاف إلى التربة لتحسين خصوبتها",
        "answer": "سماد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو مصدر التشريع الإسلامي الثاني بعد القرآن الكريم؟",
        "answer": "السنة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة التاريخية الواقعة في أوزبكستان والتي كانت مركزاً علمياً وثقافياً في العصور الإسلامية؟",
        "answer": "سمرقند",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الوصف الذي ورد في الأثر للملائكة الذين يطوفون في الأرض تتبعاً لمجالس الذكر والعلم؟",
        "answer": "سياحون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم ناقة البسوس التي كانت رميتها بسهم سبباً في اشتعال واحدة من أطول حروب الجاهلية بين قبيلتي بكر وتغلب؟",
        "answer": "سراب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي الصحابية الجليلة (رضي الله عنها) التي أُسرت في سرية بني طي، فأطلق سراحها النبي ﷺ فكانت سبباً في إسلام قومها وأخيها عدي؟",
        "answer": "سفانة ابنة حاتم الطائي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المؤلفة الموسيقية الضخمة التي تؤديها الأوركسترا الكاملة؟",
        "answer": "سمفونية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الآسيوية المشهورة عالمياً بإنتاج وتصدير الشاي؟",
        "answer": "سريلانكا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "منهو المؤسس والرئيس السابق لشركة أبل؟",
        "answer": "ستيف جوبز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو قلب الدفاع التاريخي الذي يُعد أكثر مدافع تسجيلاً للأهداف في المباريات النهائية لبطولة دوري أبطال أوروبا في نظامها الحديث؟",
        "answer": "سيرجيو راموس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي عاصمة مملكة السويد؟",
        "answer": "ستوكهولم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الفيلسوف اليوناني القديم الذي اشتهر بأسلوب الحوار والبحث عن الفضيلة والأخلاق؟",
        "answer": "سقراط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وحدة عسكرية يقودها نقيب ولا يتجاوز عددها 100 جندي",
        "answer": "السرية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الاقتصادي الذي يشير إلى القدرة على توفير الأموال بكلفة معقولة لمواجهة الالتزامات عند تحققها؟",
        "answer": "سيولة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الشاعر الجاهلي الذي ضرب به العرب المثل في الوفاء لشدة حمايته لأمانة امرئ القيس؟",
        "answer": "السموأل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الذي قال له النبي (صلى الله عليه وسلم) يوم أُحد: \"فداك أبي وأمي\" وهو أول من رمى سهمًا في سبيل الله؟",
        "answer": "سعد بن أبي وقاص (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابية جليلة وهي أول شهيدة بالاسلام، قتلها أبو جهل لثباتها على دينها",
        "answer": "سمية بنت خياط (رضي الله عنها)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الجهاز الطبي التشخيصي الذي يعتمد على بث موجات صوتية عالية التردد لتوليد صور حية ودقيقة للأعضاء والأنسجة داخل جسم الإنسان؟",
        "answer": "السونار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُطلق على السفر من مكان إلى آخر لغرض معين، مثل الترفيه الاكتشاف؟",
        "answer": "السياحة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة الحاضرة التي تُعد العاصمة السياسية وأكبر مركز مالي واقتصادي لجمهورية كوريا الجنوبية؟",
        "answer": "سيؤول",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "قارئ خَدم كإمام وخطيب للمسجد الحرام لمدة 32 عامًا، عُرف خلالها بصوته المميز وأسلوبه الفريد في التلاوة",
        "answer": "سعود الشريم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي أكبر مدينة من حيث عدد السكان في دولة أستراليا؟",
        "answer": "سيدني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى الانفجار الكوني الهائل الذي يحدث عند انهيار نجم وتجاوز لمعانه مجرة كاملة؟",
        "answer": "سوبرنوفا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي أعلى قمة جبلية في المملكة العربية السعودية؟",
        "answer": "جبل السودة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللفظ الذي ورد في القرآن الكريم كاسم من أسماء الملابس والدروع؟",
        "answer": "سرابيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نص مكتوب و مفصل يصور مشاهد و احداث و حوارات عمل فني أو يصف مساراً متوقعاً لأحداث مستقبلية",
        "answer": "سيناريو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تُسمى الخيمة أو المظلة الكبيرة الممتدة التي تُنصب للمناسبات والتجمعات؟",
        "answer": "السرداق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الشيء الذي رغّب فيه النبي ﷺ وحث عليه قائلاً عنه: \"مطهرة للفم، مرضاة للرب\"؟",
        "answer": "السواك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الاتحاد الذي ضم 15 جمهورية وانهار في عام 1991؟",
        "answer": "الاتحاد السوفييتي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ش",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "بماذا لقب حسان بن ثابت الأنصاري ؟",
        "answer": "شاعر الرسول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أحد الأئمة الأعلام و صاحب مذهب فقهي ؟",
        "answer": "الشافعي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سورة تسمى الجامعة ؟",
        "answer": "الشعراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مدينة غزة ولد فيها أحد أئمة الفقه فمن هو ؟",
        "answer": "الشافعي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كتلة من الغازات الملتهبة و مصدر للحرارة التي تحتاج إليها الكائنات الحية ؟",
        "answer": "الشمس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على البخيل الحريص على المال ؟",
        "answer": "الشحيح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة : بمعنى الحمد ؟",
        "answer": "شكر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو ما يتطاير من النار أو الضوء الحادث من التفريغ الكهربائي ؟",
        "answer": "شرارة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في الفيزياء : حزمة دقيقة من الضوء تنطلق باستقامة واحدة من مصدر الضوء ؟",
        "answer": "الشعاع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الجرىء المقدام ؟",
        "answer": "شجاع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العدو الأول لبني الإنسان ؟",
        "answer": "الشيطان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إلى أين كانت رحلة الصيف لقريش ؟",
        "answer": "الشام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الشيء الذي اذا اردت ان تستعمله رميته ؟",
        "answer": "الشبكة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي إحدى مراحل تطور الدودة في خلقتها ؟",
        "answer": "شرنقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو جدول الماء المتساقط من مستوى مرتفع إلى مستوى منخفض ؟",
        "answer": "شلال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي بعث إلى مدين ؟",
        "answer": "شعيب عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بماذا لقب الإمام العلامة أحمد بن تيمية ؟",
        "answer": "شيخ الإسلام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو العرق النابض الذي يحمل الدم من القلب إلى الجسد ؟",
        "answer": "الشريان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الخصام و القطيعة بين فرد أو جماعة أخرى ؟",
        "answer": "شقاق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللقب المشترك للأمامين البخاري ومسلم ؟",
        "answer": "الشيخان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما يستعمل لتثبيت الشموع فيه للزينة ؟",
        "answer": "شمعدان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "طائر من الجوارح من فصيلة الصقور ؟",
        "answer": "شاهين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الطريد الذي لا مأوى له ؟",
        "answer": "الشريد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة كلمة تجمع بين كلمتين خالف وعاند ؟",
        "answer": "شاكس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بمعنى قطع الزوائد و قلمها ؟",
        "answer": "شذب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "النوع الخفيف من الضباب ؟",
        "answer": "شبورة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم الحقيقي لعبدالمطلب جد النبي صلى الله عليه وسلم ؟",
        "answer": "شيبة الحمد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو نوع من الأغطية كانت العرب تستعمله في لباسها ؟",
        "answer": "شملة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "القطع الصغيرة المتطايرة من قنبلة ما ؟",
        "answer": "شظايا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أذكى أنواع القرود ؟",
        "answer": "الشمبانزي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نهر يتكون من التقاء نهري دجلة و الفرات يصب في الخليج العربي ؟",
        "answer": "شط العرب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو أن يزوج الرجل وليته رجلاً على أن يزوجه الأخرى وليته وليس بينهم صداق وهو منهي عنه ؟",
        "answer": "شغار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الحقيقي لإبن قيم الجوزية رحمه الله ؟",
        "answer": "شمس الدين محمد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "امرأة حكمت مصر 80 يوما بعد وفاة زوجها ؟",
        "answer": "شجرة الدر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "العلامة التي تميز دولة أو جماعة من قول أو نقش أو غيرهما ؟",
        "answer": "الشعار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الطيور حسن الصوت ؟",
        "answer": "شحرور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما يستعمله الصياد لصيد السمك بسنارته ؟",
        "answer": "شص",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مؤلف كتاب الرسالة ؟",
        "answer": "الشافعي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو مجاوزة الحد و البعد عن الحق ؟",
        "answer": "شطط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو لقب الشاعر \" حافظ إبراهيم\" ؟",
        "answer": "شاعر النيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو خفة اليد و أعمال كالسحر في الشيء للعين بغير ما هو عليه ؟",
        "answer": "شعوذة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أخو عنترة بن شداد ومساعده ؟",
        "answer": "شيبوب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عملة اليهود في أرض فلسطين ؟",
        "answer": "شيكل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الذي يفقده الإنسان إذا أصيب بمرض الفلوكروسين ؟",
        "answer": "الشعر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مذهب فكري يقوم على الإلحاد و أن المادة هي أساس كل شيء و تنكر وجود الله ؟",
        "answer": "الشيوعية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الشلال الصغير الحجم المرتفع المنحدر ؟",
        "answer": "الشالوف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "القائد الفرنسي الذي هزم المسلمون في معركة بلاط الشهداء ؟",
        "answer": "شارل ما رتل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما نوع التقويم السرياني ؟",
        "answer": "الشمس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو مقياس انتقال الطاقة عند تأثير قوة على جسم وتحريكه مسافة ما ووحدة قياسه الجول؟",
        "answer": "شغل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على الجزء الذي يُفصل عن الأصل وله خصائص مشابهة؟",
        "answer": "شق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم تقاطع المشاة الشهير في العاصمة اليابانية طوكيو، والذي يُعد الأنشأ والأكثر ازدحاماً في العالم؟",
        "answer": "تقاطع شيبويا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم يوم السبت عند العرب في الجاهلية؟",
        "answer": "الشيار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تطلق على المكان الخالي والمتاح",
        "answer": "شاغر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُطلق على الحد المعدني القاطع والدقيق في الأدوات الحادة كالسيراميك أو السكاكين؟",
        "answer": "شفرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الوصف اللغوي الذي يُطلق على الشيء المرتفع جداً كالجبل أو البناء؟",
        "answer": "شاهق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "التوسط للغير لجلب منفعة أو دفع مضرة",
        "answer": "الشفاعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الممر المائي المتكون من التقاء نهري دجلة والفرات ويصب في الخليج العربي؟",
        "answer": "شط العرب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم شائع يطلق على المطرقة الصغيرة",
        "answer": "الشاكوش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الذنب الأعظم في الإسلام الّذي لا يغفره الله تعالى؟",
        "answer": "الشرك الأكبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الأفراد التي تدور حولهم الأحداث في الأعمال الأدبية أو السينمائية",
        "answer": "الشخصيات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى الخطاف الحديدي المدبب الذي يوضع في نهاية السنارة لتعليق الطعم وصيد السمك؟",
        "answer": "شص",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يطلق على اليابسة التي يحدها الماء من ثلاث جهات؟",
        "answer": "شبه جزيرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وثيقة تثبت وقوع أمر معين أو تؤهل صاحبها في مجال معين",
        "answer": "شهادة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "غشاء واقٍ من خيوط دقيقة، تنسجه بعض الحيوانات لتحتمي به في طور من أطوار حياتها",
        "answer": "شرنقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المدينة المغربية التي يغلب على بيوتها اللون الأزرق حتى اشتهرت به عالميًا؟",
        "answer": "شفشاون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الظاهرة الطبيعية الّتي تنتج عن تشتت ضوء الشمس في طبقات الجو العليا؟",
        "answer": "الشفق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم علم مؤنث عربي أصيل، ويعني الرائحة العطرة، الطيبة، والقوية التي تنتشر وتفوح",
        "answer": "شذى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي يُلقب بـ (خطيب الأنبياء) وذلك لحسن مراجعته وفصاحة لسانه وبلاغته في دعوة قومه؟",
        "answer": "شعيب (عليه السلام)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم الأصلي لعبد المطلب جد النبي محمد صلى الله عليه وسلم؟",
        "answer": "شيبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الرئيس الثالث لجمهورية الجزائر الشقيقة؟",
        "answer": "الشاذلي بن جديد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم النجم الذي يُعد ألمع نجوم الليل، وقد ورد ذكره في سورة النجم؟",
        "answer": "الشِّعرى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "شهر قمري أطلق عليه هذا الاسم لتشعب القبائل فيه للإغارات",
        "answer": "شعبان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي تعني في اللغة العسل أو السائل الحلو طيب المذاق؟",
        "answer": "شهد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الفيزيائي الذي يعبر عن كمية الكهرباء التي يحملها جسم ما؟",
        "answer": "شحنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم التكوينات الصخرية أو المرجانية التي ترتفع من قاع البحر وتقترب من السطح وتشكل خطراً ملاحياً؟",
        "answer": "شعب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يطلق على الانقسام أو الخلاف العميق داخل مجموعة أو منظمة؟",
        "answer": "شقاق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "محافظة سعودية تلقب بعروس الربع الخالي",
        "answer": "شرورة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الظاهرة الضوئية التي تحدث عند احتراق ودخول نيزك صغير إلى الغلاف الجوي للأرض؟",
        "answer": "شهاب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الغلاف الواقي الذي تنسجه بعض اليرقات حول نفسها قبل التحول؟",
        "answer": "شرنقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة العربية التي تعني النزوع الجارف والحنين إلى رؤية شخص أو مكان غائب؟",
        "answer": "شوق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى صغير الأسد؟",
        "answer": "شبل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى الحديدة المعترضة التي توضع في فم الخيل وتتصل باللجام لتسهيل قيادته والتحكم به؟",
        "answer": "شكيمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى القماش الكبير الذي يستغل قوة الرياح لدفع السفينة؟",
        "answer": "الشراع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم نادي كرة القدم السعودي من مدينة الخرج ولعب في الدوري السعودي للمحترفين؟",
        "answer": "الشعلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "علاقة تعاونية بين طرفين أو أكثر لتحقيق هدف مشترك",
        "answer": "شراكة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشاعر الجاهلي الصعلوك الشهير بصاحب قصيدة \"لامية العرب\"؟",
        "answer": "الشنفري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مدينة إنجليزية تضم أقدم نادي في تاريخ كرة القدم",
        "answer": "شيفيلد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو اسم الخلق النبيل الذي يجمع بين الشجاعة والمروءة والنخوة والكرم؟",
        "answer": "الشهامة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم أخت النبي ﷺ من الرضاعة والتي برزت بموقفها يوم حصار هوازن؟",
        "answer": "الشيماء بنت الحارث (رضي الله عنها)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الوعاء الدموي الذي ينقل الدم من القلب إلى أجزاء الجسم؟",
        "answer": "الشريان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أقدم مستوطنة بشرية مكتشفة في الجزيرة العربية حتى الآن، وتقع في منطقة الجوف شمال المملكة العربية السعودية؟",
        "answer": "الشويحطية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يطلق على قطعة صغيرة وحادة تنفصل عن جسم أكبر نتيجة كسر أو انفجار؟",
        "answer": "شظية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المادة الدهنية والصلبة والتي تُستخدم تاريخيًا في ختم الرسائل؟",
        "answer": "الشمع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "زوائد قرنية تشبه الخيوط الرفيعة تخرج من الجلد يختلف ملمسه مابين جزء وآخر من أجزاء الجسم",
        "answer": "الشعر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم النبات الصحراوي العطري الشهير برائحته النفاذة ويُستخدم بكثرة في الشاي والأدوية الشعبية؟",
        "answer": "شيح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تصف من حضر واقعة ويمكنه الإدلاء بمعلوماتها أمام القضاء؟",
        "answer": "شاهد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ثاني أكثر المشروبات استهلاكاً في العالم بعد الماء ويعود تاريخه إلى ماقبل 5000 سنة",
        "answer": "الشاي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة تصف حالة شخص وجهه مصفر من مرض أو تعب",
        "answer": "شاحب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى الصوت الأجش الذي يصدره الإنسان أثناء النوم نتيجة ضيق مجاري التنفس؟",
        "answer": "شخير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو العالم الإسلامي الذي اشتهر بالفقه وأصوله والشعر، وله مذهب يُعد من أبرز المذاهب الإسلامية؟",
        "answer": "الشافعي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وصف للشخص شديد الحب والإعجاب والولع بشيء ما",
        "answer": "شغوف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الرمز البصري أو العبارة الموجزة التي تمثل هوية أو رسالة منظمة أو حملة أو منتج؟",
        "answer": "شعار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الطبقة الحساسة للضوء في مؤخرة العين التي تحول الضوء إلى إشارات عصبية؟",
        "answer": "شبكية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى من يكون حاضرًا ولكن مستغرق بالتفكير ولا ينتبه لما حوله؟",
        "answer": "شارد الذهن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الطائر الجارح الذي يُصنف كأسرع طائر ومخلوق على وجه الأرض عند انقضاضه لاصطياد فريسته؟",
        "answer": "الشاهين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الصفة التي تُطلق على من لا يحب الإنفاق ويحتفظ بماله بشكل مفرط؟",
        "answer": "شحيح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المعنى اللغوي الأصيل الذي اشتُق منه اسم شهر رمضان؟",
        "answer": "شدة الحر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الشرعي للارتياب وعدم اليقين في صحة أمر ما؟",
        "answer": "شك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هيئة حكومية تتكون من أفراد مدربين، مهمتهم الأساسية حفظ الأمن وفرض النظام وإنفاذ القوانين وحماية المواطنين",
        "answer": "الشرطة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى المصائب والمواقف القاسية التي قد لا يتحملها الإنسان؟",
        "answer": "الشدائد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المبدأ الإسلامي الذي يعني طلب الرأي ممن هو أهل له؟",
        "answer": "شورى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى الجرح الذي يحدث في الرأس أو الوجه؟",
        "answer": "الشج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يطلق على مجموعة القوانين والأحكام المستمدة من القرآن والسنة؟",
        "answer": "شريعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو اليهودي الّذي عاصر النبي ﷺ، وعُرف بحقده على الإسلام ومحاولته إشعال الفتنة بين الأوس والخزرج وكاد أن ينجح لولا تدخل النبي ﷺ؟",
        "answer": "شاس بن قيس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى التقلص اللا إرادي والمفاجئ في العضلة نتيجة الإجهاد؟",
        "answer": "شد عضلي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم صغير الغزال عندما يكبر ويقوى ويستغني عن أمه، ويُستخدم للدلالة على الرقة والجمال والنشاط؟",
        "answer": "شادن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ظاهرة طبيعية تحدث مع التقدم في العمر، يقل فيها إنتاج صبغة الميلانين في بصيلات الشعر، فيتحول لونها إلى الأبيض",
        "answer": "الشيب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة الّتي تصف القضايا والمواضيع المعقدة التي يصعب حلها؟",
        "answer": "شائك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى المرأه ذات العينين اللتين يمتزج فيهما سواد الحدقة بزرقة او حمرة",
        "answer": "شهلاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مرحلة عمرية تشهد تغيرات جسدية وعقلية وتتميز بالنشاط والقوة واكتمال النضج تلي مرحلة المراهقة",
        "answer": "الشباب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نسبة قرابة تجمع شخصين في الأب والأم معاً",
        "answer": "شقيق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل المثل الشهير الذي يحث على الرضا بالمكسب المضمون والقليل بدلاً من الطمع في الكثير غير المضمون:\"عصفور في اليد خيرٌ من...\"",
        "answer": "الشجرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم أول نادٍ تأسس في تاريخ كرة القدم بالعالم؟",
        "answer": "شيفيلد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الفقهي لما ما يلزم من عدمه العدم ولا يلزم من وجوده وجود ولا عدم لذاته؟",
        "answer": "شرط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يصف اضطرابًا عنيفًا وفوضويًا يقوم به حشد من الناس؟",
        "answer": "شغب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الجغرافي الذي يصف منطقة التقاء اليابسة بالمسطحات المائية الكبرى كالبحار والمحيطات؟",
        "answer": "شاطئ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي المعجزة النبوية الّتي حدثت لرسول الله ﷺ في صغره مع جبريل عليه السلام؟",
        "answer": "شق الصدر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجمهورية الإسلامية التي تقع في منطقة القوقاز وتعتبر إحدى الجمهوريات التابعة للاتحاد الروسي؟",
        "answer": "الشيشان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الوجهة التي كانت تقصدها قوافل قريش في رحلة الصيف المذكورة في القرآن الكريم؟",
        "answer": "بلاد الشام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو إسم صغير الضفدع؟",
        "answer": "شرغوف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي العملة الرسمية في الصومال؟",
        "answer": "شلن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ذ",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "معركة قادها خالد بن الوليد ضد الفرس و انتصر فيها ؟",
        "answer": "ذات السلاسل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بمعنى السهو و سرحان العقل ؟",
        "answer": "الذهول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بماذا لقب عثمان بن عفان ؟",
        "answer": "ذو النورين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يوصف به نزول الدمع من العين ؟",
        "answer": "ذرف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو القبيح من كل شيء ؟",
        "answer": "ذميم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ذكر في القرآن الكريم للريح أسم فما هو هذا الاسم ؟",
        "answer": "الذاريات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الذبح أو النحر بشروطه الشرعية ؟",
        "answer": "ذكاه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الانكسار و الخضوع و الهوان ؟",
        "answer": "ذل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو أعلى كل شىء ؟",
        "answer": "ذروة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو تسخير الشيء و تسهيله و تمهيده ؟",
        "answer": "ذلل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الملك الصالح الذي ملك الأرض و ورد ذكره في القرآن ؟",
        "answer": "ذو القرنين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حشرة ذكرت في القرآن الكريم ؟",
        "answer": "الذباب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "توجب غضب الرب و تمنع الرزق ؟",
        "answer": "الذنوب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "خاصية يتميز بها محلول السكر ؟",
        "answer": "الذوبان السريع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة بمعنى الخوف و الفزع ؟",
        "answer": "ذعر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة : هو المنع والدفع ؟",
        "answer": "ذب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لقب نبي الله إسماعيل عليه السلام ؟",
        "answer": "الذبيح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة تعني نشر الخبر و أعلنه ؟",
        "answer": "ذاعه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما ميقات أهل العراق ؟",
        "answer": "ذات عرق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أول معركة بحرية خاضها المسلمون ؟",
        "answer": "ذات الصواري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نوع من أنواع السمك ؟",
        "answer": "ذئب البحر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "على ماذا يطلق هذا اللقب النقدان ؟",
        "answer": "الذهب والفضة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الذباب مشتق من ( ذب آب ) فما معناها ؟",
        "answer": "ذهب و عاد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صفة تدل على الفطنة و الحفظ معا ؟",
        "answer": "الذهن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بماذا لقبت أسماء بنت أبي بكر (رضي الله عنهما) ؟",
        "answer": "ذات النطاقين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو من أنواع الجمال الروحي و الخلق الرفيع ؟",
        "answer": "الذوق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا أطلق على سيدنا يونس في القرآن الكريم ؟",
        "answer": "ذو النون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نبات عشبي يصنع منه الخبز و يدخل في صناعة النشا ؟",
        "answer": "الذرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما خبئ لوقت الحاجة ؟",
        "answer": "ذخر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الذى أعطى عهدا يأمن به على ماله وعرضه ودينه ؟",
        "answer": "ذمي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو فصاحة اللسان و قوة عربيته ؟",
        "answer": "ذلاقة اللسان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حرب داحس والغبراء وقعت بين عبس ومن ؟",
        "answer": "ذبيان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "سيف شهير لعمر بن الخطاب ؟",
        "answer": "ذو الوشاح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي الموجات الترددية في الجو ؟",
        "answer": "ذبذبات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللقب الذي أطلق على جعفر بن أبي طالب (رضي الله عنه) ؟",
        "answer": "ذو الجناحين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وحدة قياس طولية ذكرت في القران الكريم ؟",
        "answer": "ذراع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بمعنى غلبه و سبقه ؟",
        "answer": "ذرعه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي المرأة السليطة اللسان ؟",
        "answer": "ذربة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي النفس والشخص ؟",
        "answer": "ذات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو أحد الأمراض التي كان العرب يعرفونها قديما ؟",
        "answer": "ذات الجنب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "احد أسماء جبريل عليه السلام المذكورة في القرآن الكريم ؟",
        "answer": "ذو مرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "اللسان إذا انسلق و انقشر من داء يصيبه ؟",
        "answer": "ذحق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على نسل الثقلين ؟",
        "answer": "ذرية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الأحداث التي تحدث في الوقت الحالي تمثل في المستقبل ؟",
        "answer": "ذكريات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بمعنى ساق الإبل و طرها ؟",
        "answer": "ذادها",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو نوع من أنواع الذباب الهندي ؟",
        "answer": "الذراح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عنصر فلزي أصفر اللون ؟",
        "answer": "الذهب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الفتيلة التي تستعمل في الفانوس ؟",
        "answer": "الذبالة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الاقتصادي الذي يُطلق على النفط لأهميته الاقتصادية؟",
        "answer": "الذهب الأسود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي صفة السماء التي ذكرها الله سبحانه وتعالى عندما أقسم بها في سورة الطارق؟",
        "answer": "ذات الرجع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تُسمى القدرة العقلية على التعلم والاستدلال وحل المشكلات والتكيف مع البيئة؟",
        "answer": "الذكاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وصف للشيء أو الشخص القبيح المكروه",
        "answer": "ذميم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المفهوم الذي يعني العهد والأمان، ويُشير إلى الصفة الاعتبارية التي تجعل الإنسان أهلاً للحقوق والواجبات؟",
        "answer": "الذمة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة بمعنى انتشر وشاع الخبر",
        "answer": "ذاع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بماذا لُقب الخليفة الراشد عثمان بن عفان (رضي الله عنه) لزواجه من ابنتَي النبي (صلى الله عليه وسلم)؟",
        "answer": "ذو النورين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح المحاسبي للمبالغ المستحقة للشركة لدى الغير؟",
        "answer": "ذمم مدينة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تطلق على النسل من الأبناء والأحفاد",
        "answer": "ذرية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم الأطول من حيث عدد الحروف في أسماء الله الحسنى؟",
        "answer": "ذو الجلال والإكرام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على الحالة التي تفقد فيها النباتات نضارتها نتيجة قلة الماء أو التقدم في العمر؟",
        "answer": "ذبول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى العدد من الإبل من ثلاثة إلى عشرة؟",
        "answer": "ذود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مناسبة سنوية لإحياء حدث أو تاريخ مهم؟",
        "answer": "ذكرى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على المواد التي تُستخدم في الأسلحة النارية مثل الطلقات والقذائف؟",
        "answer": "ذخيرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الحالة النفسية التي تنتج عن الصدمة والمفاجأة الشديدة؟",
        "answer": "ذهول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حشرة ترى العالم ببطئ شديد وتمتاز بقدرة بصرية مذهلة وتتذوق الطعام بأرجلها",
        "answer": "الذباب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يقال عن الدابة المروضة المطيعة سهلة الإنقياد والركوب والعمل",
        "answer": "ذلول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الجزء الذي يوجد في جسم بعض الحيوانات ويستخدم للتوازن أو الدفاع؟",
        "answer": "ذيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو النظام السياسي الذي يمنح منطقة معينة استقلالية إدارية ضمن الدولة؟",
        "answer": "ذاتية الحكم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الغزوة التي شهدت أول صلاة خوف في الإسلام؟",
        "answer": "ذات الرقاع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الهجرة النائية الواقعة في الربع الخالي جنوب شرق الأحساء، والتي تُعد من أول الأماكن في المملكة إفطارًا في رمضان؟",
        "answer": "ذعبلوتن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاضطراب النفسي الذي يتميز بفقدان الاتصال بالواقع؟",
        "answer": "الذهان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أول معركة بحرية خاضها الأسطول الإسلامي، ووقعت عام 34 هـ ضد الأسطول البيزنطي في البحر الأبيض المتوسط؟",
        "answer": "معركة ذات الصواري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الإسلامي الذي يُطلق على غير المسلمين الذين يعيشون في كنف الدولة الإسلامية؟",
        "answer": "ذمّي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم أصغر وحدة من المادة تحتفظ بخصائص العنصر الكيميائي؟",
        "answer": "ذرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُستخدم للتعبير عن حسن الاختيار أو التقدير الجمالي؟",
        "answer": "ذوق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حالة من الشرود والحيرة والاضطراب الذهني المؤقت ناتجة عن صدمة تؤدي إلى عدم القدرة على التركيز",
        "answer": "ذهول",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُستخدم للدلالة على النقد السلبي أو الكلام الذي يعبّر عن عدم الرضا؟",
        "answer": "ذم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو ميقات أهل العراق ومن جاء عن طريقهم؟",
        "answer": "ذات عرق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اسم سيف الصحابي عمر بن الخطاب رضي الله عنه؟",
        "answer": "ذو الوشاح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم القدرة العقلية التي تمكّن الإنسان من تخزين المعلومات واسترجاعها؟",
        "answer": "ذاكرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الحالة النفسية من الخضوع والانكسار التي تنتج عن الهزيمة؟",
        "answer": "ذلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مالكلمة الّتي تصف سيلان دموع العين، وتستخدم كثيراً في السياق العاطفي والحزن؟",
        "answer": "ذرف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما يطلق على الانكسار والخضوع و الهوان؟",
        "answer": "الذل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حيوان مفترس يعيش في البرية ويشتهر بالعيش في جماعات ويضرب به المثل بالشجاعة",
        "answer": "ذئب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "القدرة على فهم الآخرين وقراءة إشاراتهم اللفظية وغير اللفظية والتعامل معهم حسب اختلافاتهم",
        "answer": "الذكاء الاجتماعي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم السيف الّذي أهداه النبي صلى الله عليه وسلم لعلي بن أبي طالب رضي الله عنه؟",
        "answer": "ذو الفقار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مصطلح علمي يطلق على الاهتزاز المتكرر ذهابًا وإيابًا حول نقطة توازن",
        "answer": "ذبذبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المعركة التاريخية الشهيرة التي تُعد أول مواجهة يتحد فيها العرب قبل الإسلام وينتصرون على جيش الفرس؟",
        "answer": "معركة ذي قار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو فرع علوم الحاسوب الذي يهتم بمحاكاة السلوك الذكي للإنسان؟",
        "answer": "الذكاء الاصطناعي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "شخصية ذكرت في القرآن الكريم ضمن الأنبياء والصابرين والأخيار وقد اختلف المفسرون في كونه نبياً مرسلاً أو رجلاً صالحاً",
        "answer": "ذو الكفل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يُستخدم للإشارة إلى سبب غير حقيقي يُتخذ مبرراً للقيام بعمل ما؟",
        "answer": "ذريعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الملك العادل الّذي بنى سدًّا من الحديد والنحاس بين جبلين لرد فساد يأجوج ومأجوج؟",
        "answer": "ذو القرنين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى حالة انحلال المادة داخل السائل، وتأتي بمعنى سيلان المادة بعد جمودها؟",
        "answer": "ذوبان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عبادة تقوم على تسبيح الله وتحميده وترديد أسمائه",
        "answer": "الذِكر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "حالة من الخوف الشديد أو الرعب المفاجئ",
        "answer": "ذُعر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أصغر جزء في المادة يتكون من نواة تدور حولها إلكترونات",
        "answer": "ذرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المعركة البحرية التي انتصر فيها المسلمون على الروم في عهد عثمان بن عفان؟",
        "answer": "ذات الصواري",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أشهر ألقاب نبي الله إسماعيل عليه السلام",
        "answer": "ذبيح الله",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما العنصر الكيميائي الذي يحمل الرمز Au؟",
        "answer": "الذهب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد أسماء القرآن الكريم وُرد ذكره في سورة آل عمران",
        "answer": "الذكر الحكيم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُستخدم للدلالة على أعلى نقطة في الشيء أو أعلى مرحلة في حدثٍ ما؟",
        "answer": "ذروة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى من لديه فصاحة اللسان وبلاغة الكلام؟",
        "answer": "ذلق اللسان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وحدة قياس طولية ذكرت في القرآن الكريم، وهو أيضًا جزء من الجسم",
        "answer": "ذراع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي أول معركة بحرية كبرى في التاريخ الإسلامي ضد الإمبراطورية البيزنطية، وانتهت بانتصار ساحق للمسلمين؟",
        "answer": "ذات الصواري",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مجموعة السلوكيات والآداب والقيم التي يتعين على الأفراد الالتزام بها في الأماكن العامة",
        "answer": "الذوق العام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المعركة الشهيرة التي انتصر فيها العرب على الفرس قبل الإسلام؟",
        "answer": "ذي قار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو لقب سيدنا يونس عليه السلام؟",
        "answer": "ذو النون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما السورة التي أقسم الله تعالى فيها بالرياح في بداية آياتها؟",
        "answer": "الذاريات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى الحيوان الذي تم تذكيته بالطريقة الشرعية؟",
        "answer": "ذبيحة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُستخدم للدلالة على المسألة التي ظاهرها الإباحة ويتوصل بها إلى فعل المحظور؟",
        "answer": "ذرائع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى عملية الذبح بالطريقة الشرعية؟",
        "answer": "ذكاة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "د",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي سخر الله له الجبال تسبح معه ؟",
        "answer": "داوود عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الليل شديد الظلمة ؟",
        "answer": "دامس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة بمعنى المكر ؟",
        "answer": "الدهاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو صوت النمل ؟",
        "answer": "دبيب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يغفر للشهيد كل شيء إلا شيء واحد ؟",
        "answer": "الدين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يضخها القلب إلى جميع أجزاء جسم الإنسان ؟",
        "answer": "الدماء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول عملة في تاريخ الإسلام ؟",
        "answer": "الدينار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من افضل العبادات ؟",
        "answer": "دعاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وضع الميت تحت التراب و مواراة بدنه ؟",
        "answer": "الدفن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو المرض و العلة ؟",
        "answer": "الداء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أطول آية في القرآن الكريم ؟",
        "answer": "الدين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أقصى قعر الشيء و هو ما يقابل الدرج بمعنى الصعود ؟",
        "answer": "الدرك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي الشاة كثيرة اللبن ؟",
        "answer": "درور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الذي نأكله قبل أن يولد و نأكله بعد أن يموت ؟",
        "answer": "الدجاج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "طبقات الجنة تسمى درجات و طبقات النار تسمى ؟",
        "answer": "دركات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على الأسد القوي الشجاع ؟",
        "answer": "درغام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين يوجد المسجد الأموي ؟",
        "answer": "دمشق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي قول يطلب به الإنسان إثبات حق على الغير في المحاكم ؟",
        "answer": "الدعوى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو صغير الدب ؟",
        "answer": "الديسم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي عاصمة دولة تنزانيا ؟",
        "answer": "دار السلام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "المكان الذى اجتمعت فيه قريش ليلة الهجرة للتأمر على الاسلام ؟",
        "answer": "دار الندوة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بمعنى حسن الخلق و راقي الصفات ؟",
        "answer": "دماثة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو من يرسل سرا ليلا ليأتي بالأخبار ؟",
        "answer": "دسيس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مادة شديدة الحلاوة تسيل من التمر ؟",
        "answer": "الدبس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الزمان الطويل أو مدة الحياة كلها ؟",
        "answer": "الدهر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو مخترع محلل الصوت للراديو ؟",
        "answer": "ديزل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو سواد الليل و ظلمته ؟",
        "answer": "الدجى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماء لم يخرج من الأرض و لم ينزل من السماء ؟",
        "answer": "دموع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي الشجرة العظيمة المتشبعة ذات الفروع العديدة ؟",
        "answer": "الدوحة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على صغير الفيل ؟",
        "answer": "الدعقل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الطائر الذي يكنى بأبي اليقظات ؟",
        "answer": "الديك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على صوت المدفع ؟",
        "answer": "دوي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الى أي قبيلة ينتسب الصحابي الجليل أبو هريرة ؟",
        "answer": "دوس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الكتب السماوية الزبور على من انزل ؟",
        "answer": "داوود عليه السلام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الليلة الثلاثون من كل شهر قمري سميت بذلك لشدة ظلمتها ؟",
        "answer": "الدلماء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى العين الواسعة شديدة البياض والسواد ؟",
        "answer": "دعجاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الحيوان الذي له أحد عشر مخ ؟",
        "answer": "دودة القز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو المخادع أو المحتال في أقواله و أفعاله ؟",
        "answer": "دجال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أطول الأنهار الأوروبية بعد نهر الفولجا ؟",
        "answer": "الدانوب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بمعنى أبطل الحجة ؟",
        "answer": "دحض",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو مرض يصيب أنملة الإصبع فتورم و تتقيح و تكون ألما شديدا ؟",
        "answer": "الداحوس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي اول عاصمة في التاريخ ؟",
        "answer": "دمشق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي السحابة كثيرة المطر ؟",
        "answer": "داجنة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي وحدة قياس الصوت ؟",
        "answer": "الديسبل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي الجرة ذات العروة ؟",
        "answer": "دورق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما أول ما يقضى بين الناس يوم القيامة ؟",
        "answer": "الدين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كوكب المريخ له قمران يدوران حوله إحداهما اسمه فوبوس فما هو اسم الآخر ؟",
        "answer": "دايموس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو حكم لفرد أو لجماعة دون الالتزام بموافقة المحكومين ؟",
        "answer": "دكتاتورية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُستخدم لوصف الأعمال الأدبية أو المسرحية التي تتناول الصراعات والمشاعر الإنسانية؟",
        "answer": "دراما",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "دولة تملك أقدم علم في العالم ولا يزال مستخدماً منذ عام 1219م؟",
        "answer": "الدنمارك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح اللغوي الذي يعبر عن الإتقان والخلو من الأخطاء، ومدى قرب نتائج القياس أو الأداء من القيمة الصحيحة؟",
        "answer": "الدقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المركز العلمي الذي أسسه العباسيون في بغداد وكان منارة للترجمة والبحث العلمي؟",
        "answer": "دار الحكمة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المخلوق الذي يخرج في آخر الزمان كعلامة كبرى للساعة وذُكر في سورة النمل؟",
        "answer": "دابة الارض",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة أيرلندا؟",
        "answer": "دبلن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على نشر الإسلام وتعريف الناس به؟",
        "answer": "دعوة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو نبي الله من أنبياء بني إسرائيل الذي عُثر على جسده في عهد عمر بن الخطاب (رضي الله عنه) وأمر بدفنه سراً ليكون آخر نبي دُفن في الأرض؟",
        "answer": "دانيال (عليه السلام)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الفيلسوف صاحب المقولة الشهيرة: \"أنا أفكر إذن أنا موجود\"؟",
        "answer": "ديكارت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الساق المتحورة تحت الأرض والّتي تحمل البراعم التي تنمو لتعطي نباتات جديدة؟",
        "answer": "الدرنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على فرع الفيزياء الذي يدرس تأثير القوى على حركة الأجسام؟",
        "answer": "ديناميكا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الصحراء الرملية الحمراء التي تمتد على شكل شريط قوس يربط بين النفود الكبرى والربع الخالي، وتمر بمناطق عدة كحائل والقصيم والرياض؟",
        "answer": "الدهناء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى عملية تحويل جلد الحيوان بعد سلخه إلى منتج مفيد؟",
        "answer": "الدباغة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُستخدم لوصف تقديم المساعدة أو المساندة لجهة أو شخص ما لتحقيق هدف معين؟",
        "answer": "دعم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على نظام الحكم الذي يقوم على مشاركة الشعب في اتخاذ القرار؟",
        "answer": "ديموقراطية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم مجموعة القواعد القانونية التي تُحدد شكل الدولة وتوزيع السلطات فيها؟",
        "answer": "الدستور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المكان الّذي كان يجتمع فيه كفار قريش للتشاور والتآمر على النبي ﷺ؟",
        "answer": "دار الندوة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجهاز العصبي المركزي الذي يقع داخل الرأس؟",
        "answer": "دماغ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على مجموعة من القصائد الشعرية التي تُجمع في كتاب؟",
        "answer": "ديوان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة الدولة السعودية الأولى؟",
        "answer": "الدرعية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الشيء الوحيد الذي ورد في الحديث الشريف أنه لا يُغفر للشهيد عند موته؟",
        "answer": "الدَيْن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وصف يطلق على الدليل البات والجازم",
        "answer": "دامغ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم يطلق على الممرات الضيقة الممتدة؟",
        "answer": "دهاليز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الوصف الذي يُطلق على الشيء الذي لا ينقطع أو لا يتغير مع الزمن؟",
        "answer": "دائم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "متلازمة يحدث فيها غثيان ودوخة وتعب شديد وأعراض أخرى أثناء السفر بحرًا",
        "answer": "دوار البحر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لأي دولة تتبع جزيرة جرينلاند؟",
        "answer": "الدنمارك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي مدينة هندية يقع المعلم التاريخي الشهير المعروف بـ \"القلعة الحمراء\" أو \"الحصن الأحمر\"؟",
        "answer": "دلهي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أقدم آلة ميكانيكية لرفع المياه لا تزال تعمل حتى اليوم وتعود للحضارة السومرية؟",
        "answer": "الدلو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم النهر الذي يخترق مدينة بغداد ويقسمها شطرين؟",
        "answer": "دجلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وعاء تقليدي عريق، ارتبط بتقديم القهوة العربية في المجالس والمناسبات، ويُعد رمزاً للكرم وحسن الضيافة في الثقافة العربية",
        "answer": "الدلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول مدرسة نظامية حكومية بُنيت في المملكة العربية السعودية بأمر من الملك عبد العزيز في الطائف؟",
        "answer": "دار التوحيد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين تقع قلعة مارد؟",
        "answer": "دومة الجندل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح العلمي الذي يعني دراسة السكان وإحصائياتهم؟",
        "answer": "ديموغرافيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة جمهورية بنغلاديش الشعبية؟",
        "answer": "دكا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على عملية حركة الدم داخل الجسم عبر القلب والأوعية الدموية؟",
        "answer": "دورة دموية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة الساحلية التي تُعد المركز الإداري والعاصمة الإقليمية للمنطقة الشرقية في السعودية؟",
        "answer": "الدمام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الابتهال والتضرع إلى الله والرغبة فيما عند الله من خير",
        "answer": "الدعاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم التاريخي للبلدة الأثرية الواقعة في قرية الهجرين اليمنية، والتي خلّدها الشاعر الجاهلي امرؤ القيس في معلقته؟",
        "answer": "دمون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي عاصمة جمهورية طاجيكستان؟",
        "answer": "دوشنبه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصلَّى أو المنشأة الدينية المنعزلة عن المدن، والتي يتخذها الرهبان أو الراهبات مكاناً للمبيت والعبادة والزهد؟",
        "answer": "الدير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على المنطقة المنبسطة التي تتكوّن عند مصب النهر وتشبه شكل المثلث غالباً؟",
        "answer": "دلتا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ اللغوي الذي يُطلق على شدة سواد الليل وظلمته الحالكة؟",
        "answer": "الدجى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم القصيدة الهجائية العنيفة الشهيرة التي ألقاها جرير وأنهت المكانة الشعرية للراعي النميري وقبيلته؟",
        "answer": "الدامغة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُشير إلى المعنى الذي تحمله الكلمة أو العبارة في سياق معين؟",
        "answer": "دلالة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو العالم الإنجليزي صاحب النظرية الشهيرة في تطور الكائنات الحية عبر \"الانتقاء الطبيعي\"؟",
        "answer": "داروين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على نظام منافسة رياضية يتم فيه ترتيب الفرق حسب عدد النقاط المكتسبة خلال الموسم؟",
        "answer": "دوري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نبات شائع يُستخرج من بذوره زيت لقلي الطعام؟",
        "answer": "دوار الشمس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الشكل الهندسي الذي تتساوى جميع نقاطه في البعد عن مركزه؟",
        "answer": "دائرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تأتي مرادفة في المعجم اللغوي للحجة أو البينة الباطلة والزائلة؟",
        "answer": "داحضة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو أول ما يُقضى فيه بين الناس يوم القيامة من الحقوق؟",
        "answer": "الدماء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح اللغوي الذي يعبر عن الزمان الممتد، أو مدة الحياة الدنيا كلها من أولها إلى آخرها؟",
        "answer": "الدهر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة الساحلية المصرية العريقة الواقعة في شمال الدلتا وتشتهر عالمياً بصناعة الأثاث الخشبي الفاخر؟",
        "answer": "دمياط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ اللغوي الشهير الذي يُطلق في شبه الجزيرة العربية على المسار أو الطريق الطويل الممتد؟",
        "answer": "درب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العملة التي تصنف عالمياً كأغلى وأعلى عملة من حيث القيمة الشرائية مقابل الدولار؟",
        "answer": "الدينار الكويتي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الاسم العلمي للظاهرة النفسية التي ينتاب فيها المرء شعورٌ غريب ومفاجئ بأنه عاش الموقف الحالي في الماضي؟",
        "answer": "الديجا ڤو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم أطول آية في القرآن الكريم والتي ترسي قواعد المعاملات المالية؟",
        "answer": "آية الدين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على القصيدة التي تنتهي أبياتها بحرف الدال؟",
        "answer": "دالية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تعني اللؤلؤ العظيم وتُطلق مجازاً على الكلام البليغ والثمين؟",
        "answer": "الدرر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الغدة التي تُفرز هرمونات تنظم عملية الأيض في الجسم؟",
        "answer": "الدرقية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أكمل المثل الشعبي: كل عود فيه ...",
        "answer": "دخان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الظاهرة التي يتغيّر فيها تردد الصوت بسبب حركة المصدر أو المستقبِل؟",
        "answer": "دوبلر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على فن إدارة العلاقات الدولية والتفاوض بين الدول؟",
        "answer": "دبلوماسية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي أطلقه العرب على الليلة الثلاثين من كل شهر قمري لشدة ظلمتها وغياب القمر فيها بالكامل؟",
        "answer": "الدلماء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم السائل الذي يتدفق في الأوعية الدموية وينقل الأكسجين والمواد الغذائية؟",
        "answer": "دم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة بمعنى السير في آخر الليل أو أوله، ووردت في أحد الأحاديث النبوية الشريفة",
        "answer": "الدُلجة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على الصوت الشديد والّذي ينتج عن انفجار أو رعد أو نحوه؟",
        "answer": "دوي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الدار التاريخية التي اتخذها النبي ﷺ في بداية الدعوة كأول مركز تربوي وسري لتعليم المسلمين؟",
        "answer": "دار الأرقم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي العملية المنهجية المنظمة التي يقوم بها الفرد لطلب العلم واكتساب المعارف والمهارات في تخصص معين؟",
        "answer": "الدراسة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مالاسم الحقيقي للممثل والمصارع \"ذا روك\"؟",
        "answer": "دواين جونسون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو النبي والملك من بني إسرائيل الذي أنزل الله تعالى عليه كتاب \"الزبور\"؟",
        "answer": "داوود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الهداف التاريخي للمنتخب الإسباني؟",
        "answer": "دافيد فيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي أقدم عاصمة في التاريخ ولا تزال مأهولة بالسكان حتى اليوم",
        "answer": "دمشق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي حسن الوجه، وكان جبريل عليه السلام يأتي على صورته",
        "answer": "دحية الكلبي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى صغير الدب؟",
        "answer": "ديسم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي العملة الرسمية للمملكة المغربية؟",
        "answer": "الدرهم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نوع من الأقمشة الحريرية الفاخرة والقوية يتميز بنعومته وألوانه المتعددة",
        "answer": "ديباج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللقب الممنوح للنبلاء الذين يحتلون المرتبة الأعلى مباشرة تحت الملك أو الملكة في بريطانيا؟",
        "answer": "الدوق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مسمى قديم يطلق على الحارس والرقيب",
        "answer": "الديدبان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الكاتب والروائي الروسي الذي أُوقف حكم إعدامه في اللحظات الأخيرة؟",
        "answer": "دوستويفسكي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على الخطوط الوهمية التي تُرسم أفقياً على خريطة الأرض لتحديد المواقع الجغرافية؟",
        "answer": "دوائر العرض",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على محل صغير يُباع فيه الطعام أو البضائع اليومية؟",
        "answer": "دكان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "جهاز أمني يتولى حماية السكان والممتلكات العامة من أخطار الحرائق والكوارث والحوادث المختلفة",
        "answer": "الدفاع المدني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الصفة التي تُطلق على من يؤدي عمله أو مواعيده بأعلى مستوى من الانضباط والالتزام؟",
        "answer": "دقيق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المجرة الحلزونية التي يقع فيها كوكب الأرض؟",
        "answer": "درب التبانة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المكان الذي كان المسلمون يجتمعون فيه سرًا في مكة عند جبل الصفا لتعلّم القرآن في بداية الدعوة؟",
        "answer": "دار بني الأرقم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من مرادفات كلمة (مرض)",
        "answer": "داء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "لباس من الحديد يُلبس للوقاية من سلاح العدو",
        "answer": "درع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم أول عملة إسلامية ذهبية سُكّت في عهد الدولة الأموية؟",
        "answer": "الدينار الأموي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كل مايمشي على الأرض من حيوان أو حشرة أو إنسان، ويشاع اطلاقها على ما يُركب من الحيوان",
        "answer": "دابة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُطلق على الفطنة والتبصر بالامور وجودة الرأي؟",
        "answer": "دهاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى صغير الفيل في لغة العرب؟",
        "answer": "دغفل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نبي الله تعالى كان حسن الصوت وكانت الجبال والطيور تسبح بتسبيحه وهو والد نبي الله سليمان عليه السلام",
        "answer": "داوود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "أ",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "نبي سميت سورة من القران بأسمه ؟",
        "answer": "إبراهيم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سورة في القرآن الكريم يطلق عليها أخت الطويلتين ؟",
        "answer": "الأعراف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لقب أطلقه أهل مكة على محمد سول الله صلى الله عليه وسلم قبل الإسلام ؟",
        "answer": "الأمين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي ألقاه قومه في النار ؟",
        "answer": "ابراهيم عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كنية لآدم - عليه السلام - ؟",
        "answer": "أبو البشر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من الصحابة لقب بسيد القراء ؟",
        "answer": "أبي بن كعب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "رفيق الرسول صلى الله عليه وسلم في رحلة الهجرة ؟",
        "answer": "ابوبكر الصديق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سيدا كهول أهل الجنة أحدهما عمر بن الخطاب . فمن الآخر ؟",
        "answer": "أبو بكر الصديق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي جليل فرض له عمر بن الخطاب - رضي الله عنه - أكثر مما فرض لابنه فكلمه ابنه في ذلك وقال له ( إنه كان أحب لرسول الله منك وإن أباه كان أحب لرسول الله من أبيك ) ؟",
        "answer": "أسامة بن زيد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "زوجة فرعون ما اسمها ؟",
        "answer": "اسيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لغز : سته على درب الهوى يمشون خمسة ليس لهم أثر والسادس له اثر ؟",
        "answer": "أصابع اليد والقلم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حيوان يطلق عليه ( أسامة ) ؟",
        "answer": "الأسد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو مؤذن النبي صلى الله عليه وسلم في مكة ؟",
        "answer": "ابومحذورة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "غزوة جرح فيها رسول الله صلى الله عليه وسلم وكسرت رباعيته وأشيع فيها أنه قتل ؟",
        "answer": "أحــد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على صوت المرجل ؟",
        "answer": "أزيز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ايهما اطول الامعاء الغليطة أم الامعاء الدقيقة ؟",
        "answer": "الامعاء الدقيقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كنية تكنى بها أسد الله حمزة بن عبد المطلب عم رسول الله صلى الله عليه وسلم وسيد الشهداء ؟",
        "answer": "أبو عمارة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من القائل : ( ما أحد يحمل محبرةً وإلا للشافعي عليه منّـةٌ ) ؟",
        "answer": "أحمد بن حنبل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "شاعر جاهلي لقب قبل موته بـ ( ذي القروح ) ؟",
        "answer": "امرؤ القيس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "فرقة من فرق النصارى ؟",
        "answer": "الأرثوذكس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قائد موقعة الجسر التي كانت في عهد عمر بن الخطاب وكانت بن المسلمين والفرس ؟",
        "answer": "أبو عبيدة الثقفي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي صاحبة المقولة الشهيرة لا يضر الشاه سلخها بعد ذبحها ؟",
        "answer": "أسماء بنت ابوبكر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عاصمة قديمة للشام ايام البزنطيين ؟",
        "answer": "انطاكية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وحدة لقياس شدة التيار الكهربائي ؟",
        "answer": "الأمبير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كنية تكنى بها أنثى الثعلب ؟",
        "answer": "أم عويل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الاسم الذي كان يطلق على أسبانيا قديما ؟",
        "answer": "الأندلس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صاحب كتابى الجامع المفيد والمعتبر ؟",
        "answer": "ابوسعيد الكوفي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو أول من شكل المصحف الشريف ؟",
        "answer": "ابوالاسود الدهلى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو فرعون هذه الأمة ؟",
        "answer": "أبو جهل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وكالة الأنباء التركية ؟",
        "answer": "الأناضول",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مؤسس علم الاجتماع من أشهر كتبه(العبر وديوان المبتدأ والخبر ) ؟",
        "answer": "ابن خلدون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم للعاصمة الفلبينية ( مانيلا ) قبل أن تسمى بهذا الاسم ؟",
        "answer": "أمان الله",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من القائل : فيـا ليـت الشباب يعـود يومـاً *** فأخـبـره بمــا فعــل المشــيـب ؟",
        "answer": "أبو العتاهية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مؤلف كتاب (( لسان العرب ))",
        "answer": "ابن منظور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من القائل : نقل فؤادك حيث شئت من الهوى *** مـا الحــب إلا للحـبـيـب الأول ؟",
        "answer": "أبو تمام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هى التى قال عنها النبي صلى الله عليه وسلم هى أمى بعد أمى ؟",
        "answer": "أم ايمن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في الجغرافيا : البحر الذي يفصل بين إيطاليا ويوغسلافيا ؟",
        "answer": "الإدرياتيكي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "اسم يطلق على العملة البرتغالية ؟",
        "answer": "إسكودو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في الألغاز : ما هو الشىء الذي يلازمك طول عمرك ؟",
        "answer": "أسمك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من اخترع المصباح الكهربائى ؟",
        "answer": "اديسون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تعنى كلمة فراس ؟",
        "answer": "اسد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو قائد المسلمين في معركة النمارق سنة 13 هجري ؟",
        "answer": "أبوعبيدة بن الجراح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الصحابية التي لقبت بـ ( مهاجرة الهجرتين ) ؟",
        "answer": "أسماء بنت عميس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بحار عربي لقب بأسد البحار ؟",
        "answer": "أحمد بن ماجد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هى كنية العباس عم النبي صلى الله عليه وسلم ؟",
        "answer": "أبوالفضل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو زوج زينب بنت النبي صلى الله عليه وسلم ؟",
        "answer": "ابو العاص بن الربيع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عالم عربي اول من صنع الساعات ووضعها على مدخل الجامع الاموي في دمشق؟",
        "answer": "ابن الساعاتي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من اخوات كان ترفع المبتدأ وتنصب الخبر ؟",
        "answer": "أصبح ــ أمسى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الشخص الوحيد الذي قتله النبي صلى الله عليه و سلم بيده",
        "answer": "أُبي بن خلف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أول من أسلم من الرجال؟",
        "answer": "أبو بكر الصديق (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو النظام الفكري الذي يتضمن معتقدات وأفكار متكاملة حول المجتمع والسياسة؟",
        "answer": "أيديولوجيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العلم الذي يعنى بتصميم المعدات وبيئات العمل لتتناسب مع قدرات الإنسان الجسدية والنفسية؟",
        "answer": "الإرجونوميكس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الذي كان يُلقب بـ\"الحِبّ بن الحِبّ\"؟",
        "answer": "أسامة بن زيد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي القدرة على إنتاج أفكار وأعمال أصيلة ومبتكرة؟",
        "answer": "الإبداع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الزهرة العشبية الشهيرة التي يضرب بها الشعراء وأهل اللغة المثل في شدة البياض عند وصف بياض ونقاء الأسنان؟",
        "answer": "الأقحوان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء سورة الفاتحة",
        "answer": "أم الكتاب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم الإسكتلندي الذي اكتشف البنسلين أول مضاد حيوي في التاريخ؟",
        "answer": "ألكسندر فلمنج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المنصة الرقمية الموحدة لتقديم الخدمات والمعاملات الحكومية للأفراد في السعودية؟",
        "answer": "أبشر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم الفلكي الذي يُعد أول من صنع جهاز الإسطرلاب في التاريخ الإسلامي؟",
        "answer": "إبراهيم الفزاري (رحمه الله)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو المنتخب الّذي ينفرد بالرقم القياسي كأكثر من توج بلقب بطولة كأس أمم أوروبا (اليورو) بواقع 4 مرات؟",
        "answer": "أسبانيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الرحالة العربي المشهور الذي طاف البحار وكتب عن رحلاته؟",
        "answer": "ابن بطوطة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما أول كلمة نزلت من القرآن الكريم في بداية الوحي على النبي ﷺ؟",
        "answer": "اقرا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مؤلف كتاب \"البداية والنهاية\" والّذي يعد من أشهر كتب التاريخ التي تتناول تاريخ الأنبياء والعالم الإسلامي؟",
        "answer": "ابن كثير (رحمه الله)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المركب الغازي المعروف باسم الغاز المضحك؟",
        "answer": "أكسيد النيتروز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى كلمة الشكر في أول الكتاب؟",
        "answer": "إهداء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الممثل التركي الشهير الذي جسّد دور البطولة لشخصية \"أرطغرل\" في المسلسل التاريخي الشهير قيامة أرطغرل؟",
        "answer": "انجين ألتان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم الفيزيائي النيوزيلندي الذي وضع النموذج النووي للذرة واكتشف النواة؟",
        "answer": "إرنست رذرفورد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم البروتينات الوقائية الّتي ينتجها الجهاز المناعي لتهاجم مسببات الأمراض؟",
        "answer": "أجسام مضادة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي سادس أكبر شركة في العالم من حيث القيمة السوقية؟",
        "answer": "أرامكو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المنتخب اللاتيني الذي تُوج بالميدالية الذهبية لمسابقة كرة القدم في أولمبياد بكين 2008 م؟",
        "answer": "الأرجنتين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هي زوجة النبي ﷺ التي أشارت عليه بالحلق والنحر يوم الحديبية؟",
        "answer": "أم سلمة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو اسم الإعلامي السعودي الذي اشتهر ببرنامجه التلفزيوني (خواطر) والذي كان يعرض في شهر رمضان المبارك",
        "answer": "أحمد الشقيري",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هي أول امرأة هاجرت إلى المدينة المنورة وهي بكر؟",
        "answer": "أم كلثوم بنت عقبة (رضي الله عنها)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو العلم الطبيعي الذي يهتم بدراسة الكائنات الحية وتطورها وتفاعلها مع البيئة؟",
        "answer": "علم الاحياء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم اليوناني القديم الذي وضع قانون الطفو؟",
        "answer": "أرخميدس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو آخر سلاطين الأندلس الذي سلّم غرناطة؟",
        "answer": "أبو عبد الله الصغير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تُسمى فيزيائياً الجسيمات دون الذرية ذات الشحنة السالبة والتي تدور حول النواة في مستويات طاقة محددة؟",
        "answer": "الإلكترون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللقب الذي يُطلق على الشاعر أحمد شوقي؟",
        "answer": "أمير الشعراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح السياسي اليوناني الأصل الذي يُطلق على نظام الحكم الذي تتركز فيه السلطة المطلقة بيد شخص واحد يتحكم بالدولة بمفرده دون رقابة شعبية؟",
        "answer": "الأوتوقراطية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم العربي الذي يُعد أول من صنع الساعات المائية ووضعها عند باب الجامع الأموي في دمشق؟",
        "answer": "ابن الساعاتي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المنتخب الذي تُوّج بلقب كأس العالم لكرة القدم في عام 1938 م؟",
        "answer": "إيطاليا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الجغرافي الذي يُطلق على مجموعة من الجزر المتقاربة والمتجاورة؟",
        "answer": "أرخبيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو البرنامج التقني الشهير التابع لحزمة مايكروسوفت والذي يُعد المعيار العالمي الأول في بناء الجداول الرقمية، وتحليل البيانات عبر المعادلات الرياضية؟",
        "answer": "الإكسل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تُسمى المحفزات والبروتينات الحيوية التي تسرع معدل التفاعلات الكيميائية داخل الجسم؟",
        "answer": "الانزيم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل المثل: قال متى بني القصر؟ قال: ____",
        "answer": "أمس العصر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى التفاعل عند اتحاد المادة بالأكسجين أو فقدها للهايدروجين؟",
        "answer": "أكسدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم الفقيه صاحب المذهب الفقهي الرابع الذي لُقب بـ \"إمام أهل السنة والجماعة\"؟",
        "answer": "أحمد بن حنبل (رحمه الله)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي اللغة الرسمية المتحدث بها في دولة أثيوبيا؟",
        "answer": "اللغة الأمهرية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي شبه الجزيرة الجبلية الواسعة التي تشكّل الجزء الأكبر من جمهورية تركيا الحالية؟",
        "answer": "الأناضول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو أكبر شريان في جسم الإنسان؟",
        "answer": "الأبهر (الأورطي)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أين يوجد أطول سياج في العالم والذي يطلق عليه سياج الدينجو؟",
        "answer": "أستراليا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم المسلم الموسوعي الذي استطاع حساب محيط الأرض بدقة مذهلة عبر معادلة رياضية من قمة جبل؟",
        "answer": "أبو الريحان البيروني (رحمه الله)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول غزوة خرج فيها النبي ﷺ ولم يحدث فيها قتال وتُسمى أيضاً غزوة ودان؟",
        "answer": "الأبواء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم المنظمة الدولية التي تأسست عام 1960م وتضم في عضويتها الدول الرئيسية المصدرة والمنتجة للنفط؟",
        "answer": "منظمة أوبك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الجليل الذي قاد جيش المسلمين وهو في سن صغيرة (تتراوح بين 16 إلى 18 عامًا)؟",
        "answer": "أسامة بن زيد (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الهرمون الحيوي الذي يفرزه البنكرياس لخفض مستويات السكر في الدم وتنظيم استخدام الطاقة في الجسم؟",
        "answer": "الأنسولين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الدولة التي تمتلك أكثر من 20 ألف قلعة تاريخية؟",
        "answer": "ألمانيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي تعني الغصن الناعم المتثني؟",
        "answer": "الأغيد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي نزل الرسول في بيته يوم الهجرة عند وصوله المدينة المنورة",
        "answer": "أبو أيوب الأنصاري",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الهرمون الذي تفرزه الغدة الكظرية في حالات الخوف والتوتر لتحفيز استجابة الكر والفر؟",
        "answer": "الأدرينالين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصدر الثالث من مصادر التشريع الإسلامي بعد القرآن والسنة؟",
        "answer": "الإجماع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الذي يعبر عن تحويل العمليات والمهام لتُنفذ تلقائياً عبر الأنظمة دون تدخل بشري؟",
        "answer": "الأتمتة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة العربية التي تُعد مرادفاً للفعل \"عاث\"؟",
        "answer": "أفسد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي دولة يقع \"جبل جيس\" الذي يضم أعلى قمة جبلية في البلاد ويُعد معلماً سياحياً بارزاً؟",
        "answer": "الإمارات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو عالم الفيزياء الشهير صاحب النظرية النسبية التي أحدثت ثورة علمية وغيّرت المفاهيم السائدة عن الزمن والمكان؟",
        "answer": "ألبرت أينشتاين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تأتي بمعنى اختفى أو غاب بعد أن كان ظاهرًا",
        "answer": "أفل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القوة التي تُعارض الحركة بين سطحين متلامسين؟",
        "answer": "احتكاك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الخليفة الأموي السادس الذي شهد عهده ذروة الفتوحات الإسلامية وبناء الجامع الأموي الكبير في دمشق؟",
        "answer": "الوليد بن عبدالملك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة بمعنى مقطوع النسل أو من لا ذرية له",
        "answer": "أبتر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة الوحيدة في العالم التي تشغل مساحة قارة كاملة بمفردها، وتعد هذه القارة هي الأصغر مساحة في العالم؟",
        "answer": "أستراليا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المدينة السعودية التي تشتهر بكثافة أشجار الجاكرندا البنفسجية في شوارعها؟",
        "answer": "أبها",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الوحيد الّذي ذكر بكنيته في القرآن الكريم؟",
        "answer": "أبو لهب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المدينة التي تمتد جغرافياً بين قارتي آسيا وأوروبا؟",
        "answer": "اسطنبول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "علاقة بيئية بين كائنين حيين، يعتمد فيها أحدهما على الآخر كمصدر للغذاء عن طريق قتله والتهامه",
        "answer": "افتراس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي اللغة الرسمية والوطنية لدولة النمسا؟",
        "answer": "الألمانية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الوزير والخطاط العباسي الذي يُعد أول من وضع قواعد وهندسة الخط العربي؟",
        "answer": "ابن مقلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الجبل الموجود في مكة المكرمة والذي يُعتقد تاريخياً وتراثياً أنه أول جبل وُضع على وجه الأرض؟",
        "answer": "جبل أبي قبيس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الحيوان الذي عُرف في اللغة العربية بكثرة أسمائه حتى قيل إن له مئات الأسماء التي تصفه؟",
        "answer": "الأسد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المدينة التاريخية المفقودة التي وصفها القرآن الكريم بأنها لم يُخلق مثلها في البلاد؟",
        "answer": "إرم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على نظام تجاري يسمح باستخدام علامة تجارية ونموذج عمل مقابل رسوم أو نسبة من الأرباح؟",
        "answer": "امتياز تجاري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو القانون الأساسي والشهير في الفيزياء والكهرباء الذي يربط بين الجهد والتيار والمقاومة؟",
        "answer": "قانون أوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة تطلق على الجسيمات ذات الشحنة السالبة في الذرة؟",
        "answer": "إلكترونات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو رئيس الولايات المتحدة الأمريكية السادس عشر الذي قاد بلاده خلال الحرب الأهلية الأمريكية وأصدر إعلان تحرير العبيد؟",
        "answer": "أبراهام لينكولن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المفهوم الإسلامي الذي يمثل أعلى مراتب الدين ويعني عبادة الله كأنك تراه؟",
        "answer": "الإحسان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما البحر الذي يفصل بين تركيا واليونان في شرق البحر المتوسط؟",
        "answer": "إيجة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في أي جزء من جسم الإنسان تقع أصغر عظمة على الإطلاق؟",
        "answer": "الأذن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة جمهورية اليونان؟",
        "answer": "أثينا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في أي دولة تقع مدينة بخارى التاريخية ومسقط رأس الإمام البخاري؟",
        "answer": "أوزباكستان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة الأوروبية التي كانت موطناً لحضارة الأندلس الإسلامية",
        "answer": "إسبانيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة الفلسطينية التاريخية التي تُعد أقدم مدينة مأهولة بالسكان في العالم وتُلقب بـ \"مدينة النخيل\"؟",
        "answer": "أريحا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم شركة التجزئة السويدية العالمية الشهيرة المتخصصة في صناعة وبيع الأثاث المنزلي الجاهز؟",
        "answer": "آيكيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الداعية والمناظر الإسلامي الشهير الذي تميز بكتاباته ومناظراته العالمية في مقارنة الأديان؟",
        "answer": "أحمد ديدات (رحمه الله)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم النادي الكتالوني الذي يُعتبر الغريم والتقليدي والمنافس المحلي التاريخي لنادي برشلونة في ديربي كتالونيا؟",
        "answer": "اسبانيول",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يُشير إلى تغير أحوال أواخر الكلمات العربية تبعاً لموقعها في الجملة؟",
        "answer": "الإعراب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة الصغيرة الحبيسة التي تقع بالكامل في جبال البرانس بين إسبانيا وفرنسا؟",
        "answer": "أندورا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الحضارة القديمة التي نشأت في جنوب أوروبا وكانت عاصمتها أثينا؟",
        "answer": "الإغريق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو العنصر الكيميائي الذي يرمز له بالرمز (O) في الجدول الدوري؟",
        "answer": "أكسجين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي اللغة الرسمية في دولة المكسيك؟",
        "answer": "الإسبانية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشاعر الجاهلي الذي يُعد من أصحاب المعلقات وبدأ معلقته بالبكاء على الأطلال؟",
        "answer": "امرؤ القيس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عالم من بني إسرائيل أحضر عرش ملكة سبأ إلى النبي سليمان عليه السلام في لمح البصر",
        "answer": "آصف بن برخيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما لقب الصحابي عويمر بن عامر الأنصاري (رضي الله عنه) الذي عُرف بحكيم الأمة؟",
        "answer": "أبو الدرداء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم سلسلة الجبال الممتدة عبر شمال غرب أفريقيا في دول المغرب والجزائر وتونس؟",
        "answer": "جبال الأطلس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الشجرة الّتي يُستخرج من جذورها السواك؟",
        "answer": "الأراك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي ثالث أكبر دولة في قارة آسيا من حيث عدد السكان؟",
        "answer": "إندونيسيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي الصحابية الملقبة بذات النطاقين؟",
        "answer": "أسماء بنت أبي بكر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو السجن الفيدرالي السابق الذي يقع على جزيرة معزولة في سان فرانسيسكو، واشتهر تاريخياً باستحالة الهروب منه قبل إغلاقه؟",
        "answer": "ألكتراز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين أُقيمت أول مباراة في كأس العالم عام 1930؟",
        "answer": "الأورغواي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى المدن الكبرى التي أنشأها المسلمون بعد الفتوحات مثل البصرة والكوفة؟",
        "answer": "الأمصار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الحجر الطبيعي الأسود الذي يُطحن ويُستخلص منه الكحل العربي الأصيل المقوي للعين؟",
        "answer": "الأثمد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو النادي الإسباني القياسي الذي يتربع على عرش صدارة الفائزين ببطولة الدوري الأوروبي برصيد 7 ألقاب؟",
        "answer": "إشبيلية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي اللغة الأكثر انتشاراً وتحدثاً في العالم حالياً؟",
        "answer": "الإنجليزية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي السورة الكريمة الّتي سميت بأحد غزوات الرسول صلى الله عليه وسلم؟",
        "answer": "الأحزاب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل، كان تاجراً، ولما أسلم أراد الجمع بين التجارة والعبادة، فلم يستطع فترك التجارة وتفرغ للعبادة والعلم",
        "answer": "أبو الدرداء الأنصاري (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل الذي كان من أبرز كُتّاب الوحي لرسول الله ﷺ وأقرأ الأمة للقرآن الكريم؟",
        "answer": "أبي بن كعب (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الكتاب الذي أنزله الله على عيسى عليه السلام؟",
        "answer": "الإنجيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو أثقل وأضخم أنواع الثعابين في العالم ويعيش في مستنقعات وأنهار أمريكا الجنوبية؟",
        "answer": "الأناكوندا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الطبقة الداخلية من الجلد؟",
        "answer": "أدمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العاصمة الحالية لجمهورية كازاخستان؟",
        "answer": "أستانا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النجم الإنجليزي السابق الذي يُعد الهداف التاريخي للدوري الإنجليزي الممتاز؟",
        "answer": "الآن شيرر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو النادي الهولندي العريق الذي يقع مقره في أمستردام واشتهر بأكاديميته التي أنجبت للكرة العالمية أساطير تاريخية أبرزهم النجم يوهان كرويف؟",
        "answer": "أياكس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المقابر الملكية الضخمة التي بناها الفراعنة في مصر القديمة لتُخلدهم بعد الموت؟",
        "answer": "الأهرامات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشاعر المصري الراحل الذي لُقب بـ \"أمير الشعراء\"؟",
        "answer": "أحمد شوقي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُطلق على جزء من الأرض تجتمع فيه صفات طبيعية أو اجتماعية تجعله مختلفًا عن المناطق المحيطة به؟",
        "answer": "إقليم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يُطلق على الحد الخارجي الذي يحيط بالشيء من جميع جهاته ويحدد أبعاده؟",
        "answer": "الإطار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على الكذب البيّن والافتراء والقلب الشديد للحقائق؟",
        "answer": "إفك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي أُطلق في القرآن الكريم على السور أو الحجاب المرتفع الذي يفصل بين أهل الجنة وأهل النار؟",
        "answer": "الأعراف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الأنسجة التي تربط العضلات بالعظام؟",
        "answer": "أوتار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم أطول سلسلة جبلية قارية في العالم، وتقع في تشيلي والأرجنتين؟",
        "answer": "الأنديز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قتل متعمد و مخطط له يستهدف شخصية بارزة أو مهمة بشكل مفاجئ و سري و عادة ما يكون بدوافع سياسية",
        "answer": "اغتيال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الجهاز المستخدم لقياس قيمة المقاومة الكهربائية؟",
        "answer": "أوميتر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى حالة الإرهاق البدني والذهني الناتجة عن الإجهاد في العمل والّتي تؤدي إلى فقدان الشغف وتدني الإنتاجية؟",
        "answer": "الاحتراق الوظيفي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "تعد من أخلاق الإسلام الرفيعة التي تعني التروي والنظر في العواقب، وهي من مرادفات الصبر أو الحلم",
        "answer": "الأناة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي ابنة علي بن أبي طالب وفاطمة الزهراء التي تزوجها الخليفة عمر بن الخطاب (رضي الله عنهم جميعاً)؟",
        "answer": "أم كلثوم (رضي الله عنها)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا كانت تسمى جزر البحرين في العصر الجاهلي وقبل الإسلام؟",
        "answer": "أوال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الجهاز المستخدم لقياس شدة التيار الكهربائي المار في الدائرة؟",
        "answer": "أميتر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة دولة أسكتلندا؟",
        "answer": "أدنبره",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الفرقة الموسيقية الكبيرة التي تضم آلات متنوعة وتُعزف بها الموسيقى الكلاسيكية؟",
        "answer": "أوركسترا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "إلى أي قبيلة عربية عريقة من قحطان ينتمي ملوك الدولة الغسانية الذين حكموا بادية الشام قبل الإسلام؟",
        "answer": "الأزد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو العالم العربي المسلم الذي اكتشف الدورة الدموية الصغرى؟",
        "answer": "ابن النفيس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم العلمي للمركب الغازي الناتج من اتحاد ذرة نيتروجين مع ثلاث ذرات هيدروجين؟",
        "answer": "الأمونيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي المدينة التي يقام فيها حفل جائزة نوبل للسلام؟",
        "answer": "أوسلو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى العملية الذهنية لاستخلاص نتيجة أو حكم بناءً على حقائق ومقدمات معروفة؟",
        "answer": "استنتاج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الدولة الواسعة والقوية التي تفرض سيطرتها السياسية والعسكرية على أراضٍ وشعوب متنوعة وثقافات مختلفة؟",
        "answer": "إمبراطورية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المعركة التي انتصر فيها المسلمون على الروم وكانت أول مواجهة ضدهم في عهد أبي بكر الصديق؟",
        "answer": "أجنادين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو البحر الذي يفصل بين قارتي أوروبا وأفريقيا؟",
        "answer": "البحر الأبيض المتوسط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الفيلسوف اليوناني الذي درس على يد سقراط",
        "answer": "أفلاطون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الذي استمعت الملائكة اليه وهو يتلو سورة البقرة؟",
        "answer": "أسيد بن حضير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم مجموعة الحكايات الأدبية الشعبية التي تدور حول شهرزاد وشهريار وتحتوي على قصص عربية وفارسية وهندية؟",
        "answer": "ألف ليلة وليلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الواقعة في شمال المحيط الأطلسي وتُلقب بـ \"أرض النار والجليد\"؟",
        "answer": "أيسلندا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الإقليم الذي فتحه المسلمون في أوروبا وظل تحت حكمهم لقرون؟",
        "answer": "الأندلس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي أقدم مؤسسة تعليمية في المملكة العربية السعودية والتي تأسست عام 1949م قبل أن تتحول إلى جامعة بشكل رسمي لاحقا",
        "answer": "أم القرى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول من ركب الخيل واستأنسها بعد أن كانت وحشية؟",
        "answer": "إسماعيل (عليه السلام)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مؤسس علم النحو؟",
        "answer": "أبو الأسود الدؤلي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أعلى جبل في العالم من حيث الارتفاع عن سطح البحر؟",
        "answer": "إيفرست",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المخلوق البحري الشهير بقدرته على إنتاج صعقات كهربائية قوية للدفاع عن نفسه؟",
        "answer": "أنقليس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجهاز الفلكي القديم الذي طوّره المسلمون لرصد الأجرام السماوية وتحديد الوقت؟",
        "answer": "الأسطرلاب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة بمعنى الشعور بالاستياء وتألم النفس نتيجة خيبة أمل أو تصرف سيء",
        "answer": "امتعاض",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الفعل الذي يُطلق في اللغة العربية على الاستلقاء ووضع الجنب على الفراش أو الأرض بغرض الراحة؟",
        "answer": "اضطجع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الواقعة في قارة أمريكا الجنوبية والتي يخلو اسمها باللغة العربية من أي نقاط؟",
        "answer": "الإكوادور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي جليل، كان يتميز في المعارك بعصابة حمراء يلفها على رأسه يعرف بها شجاعته",
        "answer": "أبو دجانة الأنصاري (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الأنسجة التي تربط العظام ببعضها البعض في المفاصل؟",
        "answer": "أربطة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المحافظة التي تحتضن أكبر واحة نخيل في العالم؟",
        "answer": "الاحساء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هم الفئة من البشر الذين تساوت حسناتهم وسيئاتهم فلا يدخلون الجنة ولا النار أول الأمر ثم يدخلون الجنة برحمة الله؟",
        "answer": "أصحاب الأعراف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الفيزيائي الذي قاد مشروع مانهاتن ويُلقب بـ“أب القنبلة الذرية”؟",
        "answer": "أوبنهايمر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي القصص الخيالية والخرافية الّتي تحكى عن القدماء وتعد شكل من أشكال الأدب؟",
        "answer": "الأساطير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو النبي الذي ضرب به المثل في الصبر بعد أن ابتلاه الله بمرض شديد وفقدِ الأهل والمال لسنوات طويلة؟",
        "answer": "أيوب (عليه السلام)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مالوصف الّذي أطلق على بشرة النبي صل الله عليه و سلم ويعني الأبيض المُشرَب بحمرة؟",
        "answer": "أزهر اللون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو زعيم قريش الذي قتل سمية بنت خياط، لتكون أول شهيدة في الإسلام؟",
        "answer": "أبو جهل (عمرو بن هشام)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي وحدة القياس الدولية المستخدمة لقياس شدة التيار الكهربائي؟",
        "answer": "أمبير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المبادئ والقيم التي تحكم سلوك الإنسان؟",
        "answer": "الأخلاق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو زعيم قريش الذي نزلت فيه الآيات اللاحقة من سورة المدثر وتوعده الله بسقر؟",
        "answer": "الوليد بن المغيرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُطلق على التوجه طويل الأمد الذي تتبعه مؤسسة لتحقيق أهدافها الكبرى؟",
        "answer": "استراتيجية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو القائد المسلم الذي قاد جيش المسلمين واستشهد في معركة الجسر ضد الفرس؟",
        "answer": "أبو عبيد الثقفي (رحمه الله)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول من خط بالقلم وخاط الثياب؟",
        "answer": "نبي الله إدريس عليه السلام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجبال الشهيرة الواقعة في وسط أوروبا وتعد من أهم الوجهات السياحية والثلجية؟",
        "answer": "جبال الألب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم والأديب والمؤرخ العربي الشهير صاحب الموسوعة الأدبية والتاريخية الضخمة المعروفة بكتاب \"الأغاني\"؟",
        "answer": "الأصفهاني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي السورة المكية الطويلة التي تميزت بنزولها كاملة جملة واحدة وشيّعها جمع غفير من الملائكة؟",
        "answer": "سورة الأنعام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الشاعر العباسي القائل: ألا ليت الشباب يعود يومًا؟",
        "answer": "أبو العتاهية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُطلق على العلماء المتخصصين في استنباط القواعد الكلية للأحكام الشرعية؟",
        "answer": "الأصوليين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة التي تم تخطيطها وبناؤها في ثمانينيات القرن الماضي لتصبح العاصمة الفيدرالية الرسمية لجمهورية نيجيريا بدلاً من لاغوس؟",
        "answer": "أبوجا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مصطلح يطلق على من يعتمد على أطرافه اليسرى في العمل والأنشطة اليومية",
        "answer": "أعسر / أشول / أشدف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي تعني الأثر أو الفكرة الأولى التي يتركها الشخص لدى الآخرين؟",
        "answer": "انطباع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "لاعب سعودي لعب لكلٍ من الهلال والنصر والاتحاد والقادسية؟",
        "answer": "أحمد الفريدي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم يوم الأحد عند العرب في الجاهلية؟",
        "answer": "الأول",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم والد سيدنا إبراهيم عليه السلام؟",
        "answer": "آزر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الكائن الحي الذي له ثلاثة قلوب؟",
        "answer": "الأخطبوط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الفيزيائي المستخدم لقياس درجة العشوائية والفوضى داخل النظام؟",
        "answer": "الإنتروبيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي جليل، هو ابن عمة النبي ﷺ، وكان كفيف البصر",
        "answer": "أبو أحمد بن جحش (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو النبي الكريم الذي أطلق عليه لقب \"أبو الأنبياء\"؟",
        "answer": "إبراهيم عليه السلام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى أنثى الثعبان؟",
        "answer": "أفعى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الإفريقية الصغيرة الحبيسة التي تقع في منطقة الجنوب الإفريقي وكان يُطلق عليها سابقاً اسم \"سوازيلاند\"؟",
        "answer": "إيسواتيني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل الذي لُقب بأمين هذه الأمة، وأرسله النبي صلى الله عليه وسلم إلى أهل نجران ليعلمهم الإسلام ويقضي بينهم؟",
        "answer": "أبو عبيدة عامر بن الجراح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الغاز الخامل الذي يُستخدم غالبًا في تعبئة المصابيح الكهربائية؟",
        "answer": "أرجون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الأوروبية التي عاصمتها تيرانا؟",
        "answer": "ألبانيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الرحالة والمستكشف العباسي الذي جسدت السينما العالمية رحلته وتوثيقه لبلاد شمال أوروبا والفايكنج في فيلم \"المحارب الثالث عشر\"؟",
        "answer": "أحمد بن فضلان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الشجيرة دائمة الخضرة التي يُستخرج منها عود السواك؟",
        "answer": "الأراك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي جليل، كان والياً على البحرين من قبل النبي ﷺ، وتوفي النبي وهو على رأس عمله، فرفض العمل لأحد بعده",
        "answer": "أبان بن سعيد بن العاص (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى التوقع والرجاء في حدوث الخير في المستقبل؟",
        "answer": "أمل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أين كانت مساكن قوم عاد الأولى التي ورد ذكرها في القرآن الكريم؟",
        "answer": "الأحقاف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي السورة التي تعدل ثلث القرآن الكريم؟",
        "answer": "الإخلاص",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على المادة التي توصل التيار الكهربائي جزئياً؟",
        "answer": "أشباه الموصلات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على المسافر المنقطع به في سفره؟",
        "answer": "ابن السبيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى ظاهرة انحناء الضوء عند مروره من وسط شفاف إلى آخر؟",
        "answer": "انكسار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي صفة الشيء غير المقلد والمتجذر في التراث والتاريخ؟",
        "answer": "أصالة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي تعني لغوياً السير على محاسن الأخلاق والعادات وتُطلق على نوع من الفنون التعبيرية؟",
        "answer": "أدب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الذي يطلق على بقايا الكائنات الحية المحفوظة في الصخور؟",
        "answer": "أحافير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجبل التوأم الشهير الذي يقع في منطقة حائل وارتبط قديماً بقصة حاتم الطائي، ويمثل مع جبل سلمى ثنائية جبال طيء؟",
        "answer": "جبل أجا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الآسيوية التي تضم أكبر تجمع سكاني للمسلمين في العالم؟",
        "answer": "إندونيسيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ب",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "سورة من سور القرآن الكريم يطلق عليها سنام القرآن ؟",
        "answer": "البقرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اكمل الحديث \" اتق الله ولو......... \" ؟",
        "answer": "بشق ثمرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم يطلق على نوع من الصقور ؟",
        "answer": "الباز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لقب أطلق على السيدة مريم أم نبي الله عيسى عليه السلام ؟",
        "answer": "البتول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو مؤذن الرسول صلى الله عليه وسلم في المدينة ؟",
        "answer": "بلال بن رباح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الدابة التى أمتطاها الرسول صلى الله عليه وسلم ليلة الاسراء والمعراج ؟",
        "answer": "براق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إلى أين كان يصلى الرسول صلى الله عليه وسلم قبل صلاته تجاه الكعبة ؟",
        "answer": "بيت المقدس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في القرآن الكريم ذكر لفظ الزمهرير فما معناه ؟",
        "answer": "البرد الشديد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من الدول التي تمتلك حق النقض (( الفيتو ))",
        "answer": "بريطانيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هى عاصمة العراق ؟",
        "answer": "بغداد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اكمل المثل التالي ( على نفسها جنت....... ؟",
        "answer": "براقش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الاصبع الذي يلي الاصغر لليد ؟",
        "answer": "بنصر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من بحور الشعر العربي ؟",
        "answer": "البسيط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على الولد الأول ؟",
        "answer": "بِكر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على أطول عظمة في إبهام القدم ؟",
        "answer": "بوع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الحرب التي حدثت في الجاهلية واستمرت قرابة الأربعين عاماً وقد وقعت بين قبيلتي بكر وتغلب؟",
        "answer": "البسوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الشاعر العباسي الذي مات تحت ضرب السياط ؟",
        "answer": "بشار بن برد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الفيلسوف الهندي الذي كتب كتاب ( كليلة ودمنة ) ؟",
        "answer": "بيدبا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما عاصمة تشيكو سلوفاكيا ؟",
        "answer": "براغ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قبائل تسكن شمال افريقيا ؟",
        "answer": "بربر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من علوم البلاغة الـ ….. ؟",
        "answer": "البديع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "شاعر عباسي اسمه أبو عبادة الوليد بن عبيد الله الطائي ، فما لقبه ؟",
        "answer": "البحتري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يستخدمه مرضى السكر كعلاج دائم ؟",
        "answer": "بنسلين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يستخرج منه الماء ؟",
        "answer": "بئر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "دولة في أمريكا اللاتينية هي الدولة الوحيدة التي تتكلم البرتغالية ؟",
        "answer": "البرازيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الدعاء الذي كان الرسول صلى الله عليه وسلم يقوله عند كل أمر يفعله ؟",
        "answer": "بسم الله",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو امين النبي صلى الله عليه وسلم على نفقاته ؟",
        "answer": "بلال بن رباح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "سلسلة جبال تقع بين فرنسا وأسبانيا ؟",
        "answer": "البرانس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وسيلة للاتصال وتبادل المعلومات ؟",
        "answer": "بيجر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم الحقيقي لقراقوش ؟",
        "answer": "بهاء الدين الاسدى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مجلة قاهرية أسسها عبد الرحمن البرقوقي عام1911 م كان من محريرها المازني والعقاد والرافعي ؟",
        "answer": "البيان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الدولة التي يقع فيها مقر وكالة أنباء الخليج ؟",
        "answer": "البحرين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عالم مسلم هو أول من اكتشف أن سرعة الضوء أكبر من سرعة الصوت ؟",
        "answer": "البيروني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي عملة إثيوبيا ؟",
        "answer": "بير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أول طبيب أجرى عملية زراعة قلب ؟",
        "answer": "برنارد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من عمات النبي صلى الله عليه وسلم ؟",
        "answer": "برة بنت عبدالمطلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أبعد الكواكب عن الشمس تم اكتشافه في مطلع القرن العشرين ؟",
        "answer": "بلوتو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مقياس أو وحدة طول تساوي جزءً واحداً من اثني عشر جزءً من القدم ؟",
        "answer": "البوصة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وكالة الأنباء البلجيكية ؟",
        "answer": "بلجا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من المعاجم العربية لأبي علي المقالي ؟",
        "answer": "البارع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "متحف الإسكندرية يعتبر من أقدم المتاحف في العالم حيث أنشئ عام 280 ق.م فمن أنشأه ؟",
        "answer": "بطليموس الأول",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "دوله افريقه تقع بالغرب منها يحدها شمالا وغربا مالي ومن الجنوب ساحل العاج وشرقا النيجر تغلب على الاراضيها الصخور فلا تحفظ المياه فيها . ماهي ؟",
        "answer": "بوركينا فاسو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الشيء الذي عظمه فوق لحمه ؟",
        "answer": "بيضه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما عاصمة كولومبيا ؟",
        "answer": "بوجوتا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الطير الذي لا يستطيع الطيران ولكن له القدرة على السباحة ؟",
        "answer": "بطريق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من كتب الجاحظ الذي تحدث فيه عن أشهر الشخصيات في البخل ؟",
        "answer": "البخلاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول من أهتم من العلماء بالأحاديث الصحيحة ؟",
        "answer": "البخاري",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في المدن : ما هي العاصمة العربية التي تسمى بـ مدينة السلام ؟",
        "answer": "بغداد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم العلمي والتركيبة الأساسية لدواء البانادول الشهير؟",
        "answer": "باراسيتامول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على مجموعة القواعد والإجراءات الرسمية التي تنظّم أساليب التعامل والمراسم في العلاقات الدبلوماسية؟",
        "answer": "البروتوكول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المنطقة الجبلية المرتفعة في جزيرة جاوة بإندونيسيا، وتشتهر بمزارع الشاي الخضراء وطقسها البارد وتعد مقصداً سياحياً شهيراً؟",
        "answer": "بونشاك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة دولة سويسرا؟",
        "answer": "بِرن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المحافظة التي تُعد البوابة الشمالية لمنطقة عسير في السعودية؟",
        "answer": "بلقرن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الأوراق الملونة بالزهرة والتي وظيفتها الرئيسية هي جذب الملقحات مثل النحل والفراشات",
        "answer": "البتلات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الجزء من النبات الذي يحتوي على الجنين ويمكن أن ينمو ليشكل نباتًا جديدًا؟",
        "answer": "بذرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المركب الغذائي الأساسي الذي يُستخدم في بناء الأنسجة والعضلات داخل جسم الإنسان؟",
        "answer": "بروتين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي مدينة تاريخية تقع الحدائق المعلقة التي تُعد من عجائب الدنيا السبع القديمة؟",
        "answer": "بابل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الجليل الذي عُرف بأنه مؤذن الرسول ﷺ؟",
        "answer": "بلال بن رباح (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى التجربة الأدائية الأخيرة للتأكد من جاهزية الحفل أو العرض المسرحي؟",
        "answer": "بروفة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة المجر؟",
        "answer": "بودابست",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العاصمة العربية التي بناها العباسيون واتخذوها مقرًا لخلافتهم؟",
        "answer": "بغداد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُطلق على الحاجز أو الحدّ بين شيئين؟",
        "answer": "البرزخ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم نوع التمر الذي أثنى عليه النبي ﷺ في الحديث ووصفه بأن فيه شفاء ودواء؟",
        "answer": "البرني",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المرأة التي تسببت في اندلاع حرب استمرت أربعين عامًا بين بكر وتغل؟",
        "answer": "البسوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي العاصمة السياسية والثقافية لجمهورية فرنسا والتي تُلقب بمدينة النور؟",
        "answer": "باريس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سلسلة أجهزة ألعاب فيديو أحدثت ثورة في عالم الترفيه، انطلق أول إصداراتها عام 1994",
        "answer": "بلايستيشن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مدينة سعودية هامة يقال انها اشتقت اسمها من الاسم الاول للصحابي ابن الحصيب الاسلمي",
        "answer": "بريدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو القائد والسلطان المملوكي الشهير الذي لُقب بـ \"الملك الظاهر\" وقاد معارك حاسمة لصد زحف المغول وتطهير بلاد الشام؟",
        "answer": "بيبرس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم البحيرة الروسية التي تُصنف علمياً كأعمق وأقدم بحيرة مياه عذبة في العالم وتحتوي على خمس مخزون الأرض من المياه العذبة غير المتجمدة؟",
        "answer": "بحيرة بايكال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عملية تسخين الأغذية أو المشروبات لدرجة حرارة معينة للقضاء على الجراثيم الضارة والمحافظة على سلامة الغذاء؟",
        "answer": "البسترة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المعركة التي انهزم فيها المسلمون بعد وصولهم إلى مشارف فرنسا، وكانت سببًا في توقف امتدادهم في أوروبا الغربية؟",
        "answer": "بلاط الشهداء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي عاصمة جمهورية رومانيا؟",
        "answer": "بوخارست",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أكبر الجزر الكويتية مساحةً؟",
        "answer": "بوبيان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم سلسلة مطاعم الوجبات السريعة السعودية الشهيرة التي تأسست في جدة منتصف السبعينات؟",
        "answer": "البيك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة الأوروبية التي عاصمتها مدينة بروكسل، والتي تُعد المقر الرئيسي للاتحاد الأوروبي وحلف الناتو؟",
        "answer": "بلجيكا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الأداة البسيطة التي تُستخدم لتغيير اتجاه القوة وتُسهل رفع الأشياء الثقيلة؟",
        "answer": "بكرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الأداة التي تتأرجح ذهابًا وإيابًا وتُستخدم في بعض الساعات لتحديد الوقت؟",
        "answer": "بنْدول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم اللعبة الذهنية الورقية الشهيرة واسعة الانتشار في المجالس في المملكة العربية السعودية ودول الخليج؟",
        "answer": "بلوت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "طائر من الجوارح، يشبه العقاب في قوته وشراسته، لكنه يتميز بجسمه الطويل النحيف ورشاقته الفائقة",
        "answer": "الباشق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المسمى الذي يطلق على صلاة الفجر وصلاة العصر؟",
        "answer": "البردين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المضيق الذي يصل بين البحر الأحمر والمحيط الهندي عبر خليج عدن؟",
        "answer": "باب المندب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الصنم الشهير الذي ورد ذكره في القرآن الكريم وكان يعبده قوم نبي الله إلياس؟",
        "answer": "بعل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي عاصمة كوريا الشمالية؟",
        "answer": "بيونغيانغ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المنصة الرقمية الوطنية في المملكة العربية السعودية المخصصة لإصدار وتجديد الرخص التجارية والإنشائية والخدمات البلدية؟",
        "answer": "بلدي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم السوق المالية التي يتم فيها شراء وبيع الأسهم والسندات؟",
        "answer": "بورصة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول غزوة فاصلة بين المسلمين والمشركين وقعت في السنة الثانية للهجرة؟",
        "answer": "غزوة بدر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى عملية كتابة التعليمات وتوجيه الأوامر لجهاز الحاسوب أو أي جهاز آخر؟",
        "answer": "البرمجة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الغشاء الخلوي الشفاف الذي يحيط بالخلية وينظم مرور المواد من وإليها؟",
        "answer": "الغشاء البلازمي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما معنى \"القلى\" كما في الآية الكريمة {مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَى}؟",
        "answer": "البُغض",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الحالة الغازية التي تنتج عندما يتم تسخين الماء إلى درجة الغليان؟",
        "answer": "بخار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الكائنات الدقيقة التي قد تكون نافعة أو ضارة، ولا تُرى بالعين المجردة؟",
        "answer": "بكتيريا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العاصمة السياسية وأكبر مدن دولة هنغاريا (المجر)؟",
        "answer": "بودابيست",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة التي تضم أكبر تنوع لغوي في العالم ويتحدث سكانها أكثر من 840 لغة؟",
        "answer": "بابوا غينيا الجديدة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم هواية زراعة النباتات لأغراض الزينة أو الغذاء في نطاق صغير",
        "answer": "البستنة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة دولة بلجيكا؟",
        "answer": "بروكسل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم برج الساعة الشهير الذي يقع في قلب العاصمة البريطانية لندن؟",
        "answer": "بيج بن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو النادي الذي تُوّج بلقب دوري أبطال أوروبا عام 2009 م؟",
        "answer": "برشلونه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى الجندي أو العسكري في قطع الشطرنج؟",
        "answer": "بيدق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المكان الذي تُزرع فيه الأشجار المثمرة ويُعتنى بها؟",
        "answer": "بستان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ظاهرة طبيعية مخروطية تحدث نتيجة ثقب أو شق في القشرة الأرضية",
        "answer": "بركان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على الأرض الصحراوية المفتوحة التي تسكنها القبائل الرحل؟",
        "answer": "بادية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم بطل لعبة تشابك Tangles (من تطوير أستديو سهم)",
        "answer": "باسل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة مملكة كمبوديا؟",
        "answer": "بنوم بنه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو قائد الأساطيل العثمانية الشهير الذي أنقذ آلاف المسلمين من الأندلس ولقبه الأوروبيون بـ \"بارباروسا\" أو ذي اللحية الحمراء؟",
        "answer": "بربروس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة جمهورية أذربيجان؟",
        "answer": "باكو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الوعاء المقاوم للحرارة الذي يُستخدم لصهر المعادن في المختبرات؟",
        "answer": "بوتقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الدابّة التي امتطاها الرسول صلى الله عليه وسلم ليلة الإسراء والمعراج؟",
        "answer": "البراق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم منظومة الدفاع الجوي الصاروخي الشهيرة من نوع أرض-جو التي تصنعها الولايات المتحدة لحماية الأجواء ضد الصواريخ والطائرات؟",
        "answer": "باتريوت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الهيئة التشريعية العليا التي تتولى سن القوانين والموافقة عليها في الدول الديمقراطية؟",
        "answer": "البرلمان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم جهاز الاتصال اللاسلكي الصغير الذي كان يُستخدم قديماً لاستقبال الرسائل القصيرة أو أرقام المتصلين؟",
        "answer": "بيجر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أقدم الخضروات التي عرفتها الحضارات على مرّ التاريخ؟",
        "answer": "البازلاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الثورة الشهيرة التي اندلعت في روسيا عام 1917 م بقيادة فلاديمير لينين أثناء الحرب العالمية الأولى؟",
        "answer": "البلشفية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة جمهورية الأرجنتين؟",
        "answer": "بوينس آيرس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي اللغة الرسمية في البرازيل؟",
        "answer": "البرتغالية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الشرعي الذي يعني ذِكر الشخص في غيبته بأمر سيء وصفة ليست فيه أصلاً؟",
        "answer": "البهتان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حفرة أو فتحة تُحفر في الأرض للوصول إلى المياه الجوفية",
        "answer": "بئر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مصطلح ذٌكر في القرآن الكريم بمعنى أشد الحزن والهم الذي انطوت عليه النفس ولا يطيقه المرء",
        "answer": "البث",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المادة الصناعية التي تُصنع من البترول وتُستخدم في العديد من المنتجات اليومية؟",
        "answer": "بلاستيك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أكمل المثل الشعبي الذي يُضرب للشيء يوضع في غير موضعه اللائق به فيبدو قبيحاً: \"يا شين السرج على...\"",
        "answer": "البقر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الأداة التي تُستخدم لتحديد الاتجاهات وتعتمد على المجال المغناطيسي للأرض؟",
        "answer": "البوصلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي أكبر دولة في العالم إنتاجًا للقهوة؟",
        "answer": "البرازيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الحيوان الهجين الناتج عن تزاوج الحصان وأنثى الحمار، ويُستخدم في النقل؟",
        "answer": "بغل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي البطل المستجاب الدعوة الذي عناه النبي ﷺ بقوله: \"رُبَّ أشعثَ أغبرَ ذي طِمرينِ لا يُؤبَه له، لو أقسم على الله لأبرَّه.. منهم...\"؟",
        "answer": "البراء بن مالك (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الغدة التي تقع خلف المعدة وتفرز الأنسولين؟",
        "answer": "بنكرياس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم العملية التي يتم فيها تحويل الطاقة الضوئية إلى طاقة كيميائية في النباتات؟",
        "answer": "البناء الضوئي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي المادة الكيميائية التي تم اختراعها في الصين، واشتهرت تاريخيًا باستخدامها في الحروب والأسلحة النارية القديمة؟",
        "answer": "البارود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الفريق الذي فاز بدوري أبطال أوروبا عام ٢٠٠٤؟",
        "answer": "بورتو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم وسيلة النقل البحرية الكبيرة التي تُستخدم لنقل الركاب أو البضائع؟",
        "answer": "باخرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة جمهورية التشيك؟",
        "answer": "براغ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الفاكهة الصيفية الشهيرة التي تتميز بقشرة خارجية سميكة، ولب داخلي حلو أحمر اللون؟",
        "answer": "البطيخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشاعر السعودي الراحل الذي لُقب بـ \"مهندس الكلمة\" لتميز وجزالة قصائده؟",
        "answer": "بدر بن عبدالمحسن (رحمه الله)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم الفرنسي الذي اخترع أول آلة حاسبة ميكانيكية في التاريخ لمساعدة والده في حساب الضرائب؟",
        "answer": "بليز باسكال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الأوروبية التي انطلقت منها الثورة الصناعية الأولى في القرن الثامن عشر؟",
        "answer": "بريطانيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم العلمي للبكتيريا النافعة والّتي تعيش طبيعيًا في الأمعاء وتساعد في تعزيز صحة الجهاز الهضمي والمناعة؟",
        "answer": "بروبيوتيك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي العملة الرسمية المتداولة في المكسيك؟",
        "answer": "البيزو المكسيكي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من مرادفات كلمة \"بدأ\"",
        "answer": "باشر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المضيق المائي الاستراتيجي الذي يربط بين البحر الأحمر وخليج عدن؟",
        "answer": "مضيق باب المندب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو العلم الذي يختص بجماليات الأسلوب وتحليل الصور والمعاني في اللغة العربية؟",
        "answer": "البلاغة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي عاصمة جمهورية صربيا؟",
        "answer": "بلغراد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مُصطلح يطلق على المعلومات الأولية غير المعالجة التي تُستخدم للتحليل والتدقيق",
        "answer": "بيانات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الحلوى الشرقية الشهيرة المصنوعة من رقائق العجين والمحشوة بالمكسرات؟",
        "answer": "بقلاوة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في الشِعر ماذا يسمى الجزء الذي يتم فيه معنى القصيدة وغاية الشاعر؟",
        "answer": "بيت القصيد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الجسيمات ذات الشحنة الموجبة في الذرة؟",
        "answer": "البروتونات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الدابة التي ركبها النبي صلى الله عليه وسلم ليلة الإسراء والمعراج؟",
        "answer": "البراق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المدينة اللبنانية التاريخية التي عُرفت قديماً باسم مدينة الشمس؟",
        "answer": "بعلبك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الشاعر العباسي الأعمى الذي تميز بدقته الشديدة في وصف المعارك والحروب رغم أنه لم يشارك في أي منها؟",
        "answer": "بشار بن برد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي العاصمة السياسية والتنفيذية لجمهورية جنوب أفريقيا، والتي تضم مقر الحكومة والرئاسة؟",
        "answer": "بريتوريا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي وحدة قياس الطول الإنجليزية التي تعادل جزءاً من اثني عشر جزءاً من القدم؟",
        "answer": "البوصة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي عاصمة جمهورية كولومبيا؟",
        "answer": "بوغوتا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الجزء البارز من المنزل الذي يطل مباشرة على الشارع أو الفناء الخارجي؟",
        "answer": "البلكونة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "قصيدة تعد من أشهر قصائد المدح النبوي وأنشدها الصحابي كعب بن زهير ليبايعه على الإسلام",
        "answer": "البردة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم مقر وزارة الدفاع الأمريكية الذي يُعرف بشكله الخماسي؟",
        "answer": "البنتاجون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي الغدة المسؤولة عن إفراز الأنسولين؟",
        "answer": "البنكرياس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو القيصر الروسي الشهير الذي حكم البلاد بين عامي 1682 و1725، وقاد حركة تحديث واسعة جعلت من روسيا إمبراطورية كبرى؟",
        "answer": "بطرس الأكبر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على الجهاز الذي يستخدم لقياس الضغط الجوي؟",
        "answer": "البارومتر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الطائر الصغير العذب الصوت الذي يضرب به المثل في حسن الغناء والتغريد؟",
        "answer": "البلبل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الدولة الأكبر مساحة في أمريكا الجنوبية؟",
        "answer": "البرازيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الطائر الليلي المعروف بقدرته على تدوير رأسه تقريبًا بزاوية 270 درجة؟",
        "answer": "بومة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل الحديث الشريف: \"تسحروا فإن في السحور ____\"؟",
        "answer": "بركة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى الجزء السائل من الدم؟",
        "answer": "البلازما",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم التجويف السفلي في القلب الذي يقوم بضخ الدم إلى الرئتين وأنحاء الجسم؟",
        "answer": "البطين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة التي تُعد أولى القبلتين ومسرى النبي محمد صلى الله عليه وسلم في رحلة الإسراء؟",
        "answer": "بيت المقدس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الاسم المعروف للطائر مالك الحزين، وهو طائر ذو أرجل طويلة؟",
        "answer": "البلشون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أكبر خليج بحري في العالم من حيث المساحة، ويقع في الجزء الشمالي الشرقي من المحيط الهندي؟",
        "answer": "خليج البنغال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المؤسسة العلمية في بغداد التي أنشأها العباسيون وكانت مركزاً للترجمة والبحث العلمي؟",
        "answer": "بيت الحكمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الطائر الّذي يستخدم أجنحته كزعانف تساعده على السباحة والغوص في المرتفعات المتجمدة؟",
        "answer": "البطريق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الكلمة التي تعني مخالب السبع أو الطير الجارح وتُستخدم مجازاً للشر والوقوع في الهلاك؟",
        "answer": "براثن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي أول محافظة سعودية تُعتمد رسمياً كـ \"مدينة صحية\" من منظمة الصحة العالمية؟",
        "answer": "البكيرية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي عاصمة جمهورية البرازيل الاتحادية؟",
        "answer": "برازيليا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو ثاني أطول نهر في أمريكا الجنوبية بعد نهر الأمازون، ويمر عبر البرازيل والباراغواي والأرجنتين؟",
        "answer": "نهر بارانا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الفقرات أو المواد والشروط المحددة التي تتألف منها الاتفاقيات والعقود القانونية؟",
        "answer": "بنود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى المخاط اللزج الذي يفرزه الجهاز التنفسي السفلي؟",
        "answer": "البلغم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ف",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "بماذا لقب عمر بن الخطاب رضي الله عنه ؟",
        "answer": "الفاروق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من الاوقات التى أقسم بها الله عز وجل ؟",
        "answer": "الفجر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو النصيب المقدر للوارث ويسمى العلم بها علم الميراث ؟",
        "answer": "الفرائض",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أعلى درجات الجنة ؟",
        "answer": "الفردوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مجموعة جرثومية دقيقة جدا لا ترى إلا بالمجهر تسبب أمراضا كثيرة للإنسان و الحيوان و النبات؟",
        "answer": "الفيروسات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نوع من أنواع الورد ذو رائحة نفاذة ؟",
        "answer": "الفل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الفقر و قلة ذات اليد و الشح ؟",
        "answer": "الفاقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء القران الكريم ؟",
        "answer": "الفرقان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو صوت الأفعى من فمها ؟",
        "answer": "فحيح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سورة في القرآن غير الفاتحة تبدأ بالحمد لله ؟",
        "answer": "فاطر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من الأنظمة الإملائية تستخدم في الكتابة ؟",
        "answer": "الفاصلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إحدى ولايات الولايات المتحدة الأمريكية ؟",
        "answer": "فلوريدا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما أسرع الحيوانات البرية ؟",
        "answer": "الفهد الهندي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حسن البيان وسلامة الالفاظ ؟",
        "answer": "فصاحة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو علم الكلام و المنطق ؟",
        "answer": "الفلسفة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي بلد ولد عيسى بن مريم عليه السلام ؟",
        "answer": "فلسطين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "سورة في القرآن الكريم قسمها الله إلى ثلاثة أقسام قسم الله و قسم لعباده وقسم ذكر فيه ثلاثة أصناف من البشر فما هي هذه السورة ؟",
        "answer": "الفاتحة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هم أكثر أهل الجنة ؟",
        "answer": "الفقراء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أقدم الأدوات التي استخدمها الأنسان ؟",
        "answer": "الفأس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "طريقة من طرق الموت أخبر الرسول صلى الله عليه و سلم بحدوثها بكثرة في آخر الزمان ؟",
        "answer": "الفجأة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وحدة قياس كهربائية وهي وحدة القوة الدافعة الكهربائية ؟",
        "answer": "فولت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما أكبر بحيرة نهرية في العالم ؟",
        "answer": "فكتوريا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لغة إيرانية من الفصيلة الهندية الإيرانية للغات الهندية الأوروبية ؟",
        "answer": "الفارسية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لونه أسود ولا ينتفع به إلا إذا كان لونه أحمر ؟",
        "answer": "الفحم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اسم الصحابية أم هانئ ؟",
        "answer": "فاختة بنت أبي طالب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد علماء الرياضيات الإغريق له نظريات لا زالت تدرس إلى اليوم ؟",
        "answer": "فيثاغورس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو أسم صغير الطير ؟",
        "answer": "فرخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بروز جزء من الأمعاء من فتحة جدار البطن ؟",
        "answer": "الفتق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الشيء الذي إذا وضع في الثلاجة لا يبرد ؟",
        "answer": "الفلفل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لغوي صاحب كتاب القاموس المحيط ؟",
        "answer": "الفيروز ابادي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أطول عظمة في جسم الإنسان ؟",
        "answer": "الفخذ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو من الأحجار الكريمة بخلاف الفسيفساء ؟",
        "answer": "الفيروز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي أطول كلمة في القرآن الكريم لفظاً وكتابة بلا زيادة ؟",
        "answer": "فأسقيناكموه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي أول مدينة إسلامية أنشئت في مصر بعد الفتح ؟",
        "answer": "الفسطاط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مادة استعملت كمرهم للجسم مشتقة من النفط ؟",
        "answer": "فازلين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "النخلة الصغيرة ؟",
        "answer": "فسيلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "إلى ماذا يؤدي نقص الحديد في الجسم ؟",
        "answer": "فقر الدم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "حضارة اندثرت قبل آلاف السنين ؟",
        "answer": "الفينيقية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي أصغر دولة في العالم ؟",
        "answer": "الفاتيكان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو شكل من أشكال المعالجة الطبية كانت تستعمل قديما يتم فيها سحب الدم من جسم الإنسان للشفاء من بعض الأمراض ؟",
        "answer": "الفصد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عاصمة النمسا ؟",
        "answer": "فينا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "حيوان برمائي تلد صغارها تحت الماء ؟",
        "answer": "فرس النهر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللقب الذي اشتهر به الشاعر العربي همام بن صعصعة ؟",
        "answer": "الفرزدق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أول من ابتدع الاحتفال بالمولد النبوي ؟",
        "answer": "الفاطميون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي مجموعات المغريات التي تغري الأنسان وتلهيه ؟",
        "answer": "الفتن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مرض في باطن جسم الإنسان يصيب منطقة الصفاق يعالج في النهاية بعملية جراحية ؟",
        "answer": "الفتاق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عيد من أعياد النصارى ؟",
        "answer": "الفصح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة عالمية متداولة أصلها عربي وتعني الاعتراض أو حق الرفض ؟",
        "answer": "الفيتو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الدولة الأوروبية الّتي تلقب بـ\"أرض الألف بحيرة\"؟",
        "answer": "فنلندا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي أول عاصمة إسلامية لمصر أسسها عمرو بن العاص (رضي الله عنه) عام 641م؟",
        "answer": "الفسطاط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الطعام الشعبي المصنوع من الحمص أو الفول، ويُقلى على هيئة كرات أو أقراص؟",
        "answer": "الفلافل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الشيء الذي إذا وُضع في الثلاجة لا يبرد؟",
        "answer": "الفلفل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى صوت الأفعى؟",
        "answer": "فحيح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو طبيب الأعصاب النمساوي الشهير الذي أسس مدرسة التحليل النفسي في أواخر القرن التاسع عشر؟",
        "answer": "فرويد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العملية التي تتضمن تصنيف وترتيب المعلومات لتسهيل الوصول إليها؟",
        "answer": "فهرسة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجبل البركاني الشهير الذي يُعد أعلى قمة جبلية في اليابان؟",
        "answer": "فوجي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى سلسلة العظام غير المنتظمة وهي المسؤولة عن تأمين الدعم والحركة للجسم؟",
        "answer": "فقرات",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي تأتي في اللغة بمعنى الابتلاء والاختبار، وتأتي أيضاً بمعنى الإعجاب الشديد بشيء؟",
        "answer": "الفتنه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو العلم الذي يختص بدراسة الأجرام السماوية وحركاتها؟",
        "answer": "الفلك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول عاصمة إسلامية في مصر أسسها عمرو بن العاص؟",
        "answer": "فسطاط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أعلى درجات الجنة التي تتفجر منها أنهار الجنة؟",
        "answer": "الفردوس الأعلى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو أسرع حيوان بري في العالم؟",
        "answer": "الفهد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أكبر بحيرة في قارة أفريقيا وثاني أكبر بحيرة في العالم؟",
        "answer": "بحيرة فيكتوريا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما نظام الحكم الذي يقوم على توزيع السلطات بين الحكومة المركزية وحكومات الولايات؟",
        "answer": "فيدرالية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الذي يعبّر عن ناتج الطرح ومقدار التغير بين رقمين؟",
        "answer": "الفرق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المعاهدة التي وُقعت عام 1919 وأنهت الحرب العالمية الأولى؟",
        "answer": "معاهدة فرساي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح السياسي الذي يعني حق النقض في مجلس الأمن الدولي؟",
        "answer": "فيتو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو النهر الشاسع الذي يُصنف كأطول نهر في قارة أوروبا ويصب في بحر قزوين؟",
        "answer": "الفولغا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الورقة أو قطعة القماش التي توضع داخل الكتب لحفظ مكان الصفحة؟",
        "answer": "فاصل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم رئيس نادي الشعلة السابق والّذي استمر برئاسة النادي 14 سنة؟",
        "answer": "فهد الطفيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو عالم الرياضيات اليوناني الشهير صاحب النظرية الهندسية لحساب أضلاع المثلث القائم؟",
        "answer": "فيثاغورس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الرسام الهولندي الذي ينتمي للمدرسة ما بعد الانطباعية، وعاش حياة مأساوية مضطربة انتهت بقطع أذنه، وتعد لوحاته اليوم من الأغلى في العالم؟",
        "answer": "فينسنت فان غوخ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "قال حكيم: انفرد بسرك ولا تودعه حازمًا فيزل ولا جاهلًا ....",
        "answer": "فيخون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُستخدم للإشارة إلى شخصٍ غير محدد الاسم أو مجهول الهوية، ويُستعمل في الأمثلة والسياقات العامة بدلًا من ذكر اسم حقيقي؟",
        "answer": "فلان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مالعملة الرسمية لجمهورية سويسرا؟",
        "answer": "الفرنك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أطول وأقوى عظمة موجودة في الهيكل العظمي لجسم الإنسان؟",
        "answer": "الفخذ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المادة المعدنية التي تُضاف إلى معاجين الأسنان والمياه لحمايتها من التسوس؟",
        "answer": "الفلورايد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أصغر دولة في العالم من حيث المساحة؟",
        "answer": "الفاتيكان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على الذكاء وسرعة الفهم وحُسن التصرّف؟",
        "answer": "فطنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو من لا يملك قوت يومه ولا تكفيه موارده، ومستحق للزكاة والكفارة",
        "answer": "الفقير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اللقب الذي كان يطلق على ملوك مصر القديمة؟",
        "answer": "الفراعنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تعني جماعة أو مجموعة من الناس تسير أو تأتي معًا",
        "answer": "فوج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تُطلق على الطريق الواسع بين جبلين؟",
        "answer": "فج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو مؤلف رواية \"البؤساء\"؟",
        "answer": "فيكتور هوغو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشاعر الذي اشتهر بعداوته الشديدة والمستمرة لجرير في الأدب العربي؟",
        "answer": "الفرزدق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى عملية التدقيق لمعرفة حقيقة الشيء؟",
        "answer": "فحص",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو العلم الطبيعي الشامل الذي يدرس كل ما يتعلق بالطاقة والمادة، والقوانين التي تحكم حركة الكون وتفاعلاته؟",
        "answer": "الفيزياء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم القرية الأثرية الشهيرة الواقعة على أطراف الربع الخالي، والتي كانت تُعد العاصمة الأولى لمملكة كندة في نجد؟",
        "answer": "الفاو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى ذكر النخل الذي تُؤخذ منه حبوب اللقاح لتلقيح الإناث؟",
        "answer": "فحّال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو النشاط الفكري الذي يبحث في الأسئلة الأساسية حول الوجود والمعرفة والقيم؟",
        "answer": "الفلسفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العناصر الكيميائية الموصلة للحرارة والكهرباء؟",
        "answer": "فلزات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قطع صغيرة ملونة من الرخام، تُشكل مع بعضها شكلًا فنيًا",
        "answer": "فسيفساء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مقياس قديم للمسافات يطلق على الثلاثة أميال",
        "answer": "فرسخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو اللاعب السعودي الوحيد الذي نجح في تسجيل هدف للمنتخب في دور الستة عشر خلال تاريخ مشاركات الأخضر في كأس العالم؟",
        "answer": "فهد الغشيان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم علم مؤنث معناه الضوء الأول الذي يظهر في السماء قبل شروق الشمس",
        "answer": "فجر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي أكبر جزيرة في المملكة العربية السعودية من حيث المساحة والسكان؟",
        "answer": "جزيرة فرسان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما النشاط الإنساني الذي يهدف إلى التعبير عن الجمال والمشاعر بأشكال متنوعة؟",
        "answer": "فن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي وحدة قياس فرق الجهد الكهربائي؟",
        "answer": "الفولت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الحيوان الذي خالف أمر جيشٍ كامل وامتنع عن طاعتهم خوفاً من الله سبحانه وتعالى؟",
        "answer": "الفيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في أي دولة تقع شلالات أنجل والّتي تعد أعلى شلالات العالم؟",
        "answer": "فنزويلا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الفيزيائي الألماني الّذي اخترع ميزان لمعرفة السوائل وقسّم ميزان الحرارة على درجات عُرفت باسمه؟",
        "answer": "فهرنهايت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة التي تمتلك أكبر عدد من المناطق والأنطقة الزمنية المختلفة في العالم نظراً لانتشار أراضيها وجزرها وراء البحار؟",
        "answer": "فرنسا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هم الفئة من المسلمين الذين ورد في الحديث الشريف أنهم يشكلون أكثر أهل الجنة؟",
        "answer": "الفقراء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الفيزيائي للحيز الخالي من المادة؟",
        "answer": "فراغ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة المغربية التي تُعرف بالعاصمة العلمية للمغرب؟",
        "answer": "فاس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما مرادف كلمة بليغ؟",
        "answer": "فصيح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم البركان الذي يُعد من أشهر البراكين في إيطاليا ويقع بالقرب من مدينة نابولي؟",
        "answer": "فيزوف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم ولي عهد النمسا الذي كان اغتياله في سراييفو عام 1914 السبب المباشر في اندلاع الحرب العالمية الأولى؟",
        "answer": "فرانز فيرديناند",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى العدد الذي لا يقبل القسمة على 2 إلا بوجود كسور؟",
        "answer": "فردي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي السورة الملقبة بـ\"أم الكتاب\"؟",
        "answer": "الفاتحة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الظاهرة الفيزيائية التي تعني انبعاث الضوء من مادة ما بشكل مستمر، حتى بعد إزالة مصدر الضوء أو الطاقة المؤثر عليها؟",
        "answer": "الفسفرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما السمة اللغوية التي تعني وضوح المعنى مع جمال التعبير؟",
        "answer": "فصاحة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي الصحابية الجليلة التي تعد ثاني النساء إسلاماً بعد خديجة بنت خويلد (رضي الله عنها)، وهي أم أمير المؤمنين علي بن أبي طالب (رضي الله عنه)؟",
        "answer": "فاطمة بنت أسد (رضي الله عنها)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المرهم الطبي المرطب والمشتق أساساً من النفط؟",
        "answer": "فازلين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو العلم الذي يُعنى بدراسة تقسيم التركة بين الورثة حسب الشريعة الإسلامية؟",
        "answer": "علم الفرائض",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نبات موطنه أمريكا تستخدم ثماره في الحصول على محلول أو مسحوق يضاف إلى الأطعمه ليكسبها نكهة طيبة",
        "answer": "فانيليا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو المدافع الإيطالي الفذ الذي نجح في الفوز بجائزة الكرة الذهبية لعام 2006 م عقب قيادته لمنتخب بلاده للتتويج بالمونديال؟",
        "answer": "فابيو كانافارو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أول جهاز اخترع لتسجيل الصوت عام 1887م؟",
        "answer": "الفونوغراف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الفنان السعودي الراحل الذي اشتهر بتقديم شخصية \"هزار\" في مسلسل \"طاش ما طاش\"؟",
        "answer": "فهد الحيان (رحمه الله)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الحدث الذي دخل فيه المسلمون على قريش دون قتال في السنة الثامنة للهجرة؟",
        "answer": "فتح مكة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى طبياً بروز أو خروج جزء من أحد الأعضاء الداخلية عبر نقطة ضعف أو تمزق في الجدار العضلي المحيط به؟",
        "answer": "الفتق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الجهاز المستخدم لقياس فرق الجهد الكهربائي؟",
        "answer": "فولتميتر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الشيء الذي يكون أسود اللون ولا يُستفاد منه حتى يصبح أحمر؟",
        "answer": "الفحم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللقب الشهير الذي عُرف به الصحابي الجليل عبد الله بن مسعود (رضي الله عنه) نظير فقهه وعميق علمه بالقرآن الكريم؟",
        "answer": "فقيه الأمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم اللغوي من العراق الذي وضع أصول علم العَروض ويُعد من أبرز علماء العربية؟",
        "answer": "الفراهيدي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم العلم الذي يُعنى بدراسة الأحكام الشرعية العملية المستنبطة من الأدلة التفصيلية؟",
        "answer": "الفقه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُطلق على الانتفاخ المليء بالهواء الذي يتكوّن في السوائل أو عند تصنيع المواد مثل الزجاج والحديد؟",
        "answer": "فقاعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الصفة التي تدل على سرعة فهم الشخص للأمور المعقدة وذكائه الحاد؟",
        "answer": "فطنة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الحاكم الروماني العربي الوحيد الّذي حكم الإمبراطورية الرومانية؟",
        "answer": "فيليب العربي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي السورة الكريمة التي تُلقب بـ \"سورة الملائكة\" لافتتاحها بذكر صفاتهم وأجنحتهم؟",
        "answer": "سورة فاطر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو العام الّذي ولد فيه النبي صلى الله عليه وسلم؟",
        "answer": "عام الفيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم عنصر الأمان الكهربائي الذي يحتوي على سلك ينصهر لقطع التيار عند زيادته عن الحد؟",
        "answer": "فيوز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يطلق على النظام السياسي المستبد الذي قاده موسوليني في إيطاليا؟",
        "answer": "فاشية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الجسيم الأولي المسؤول عن نقل القوة الكهرومغناطيسية؟",
        "answer": "فوتون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكائنات الدقيقة التي لا تُرى بالعين المجردة وتتطفل على الخلايا مسببة الأمراض؟",
        "answer": "الفيروسات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما نوع الخضار الذي يتفوق على البرتقال في احتوائه على كمية أكبر من فيتامين C؟",
        "answer": "الفلفل الاخضر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما العلم الذي يختص بمعرفة أحوال الناس من خلال ملامحهم وسلوكهم؟",
        "answer": "فراسة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو اللاعب الذي سجل هدف المنتخب السعودي على اليابان والّذي أهل المنتخب إلى كأس العالم 2018؟",
        "answer": "فهد المولد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح العلمي للتفسير المؤقت الذي يحتاج إلى اختبار وإثبات؟",
        "answer": "فرضية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الفريق الفائز في أول نسخة من بطولة كأس العالم للرياضات الإلكرتونية؟",
        "answer": "فالكونز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المحافظة الجبلية الشهيرة التي تقع في منطقة جازان جنوب المملكة وتتميز بقممها الخضراء ومدرجاتها الزراعية؟",
        "answer": "فيفاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الفنان والرسام الهولندي الشهير الذي عُرف بحادثة قطعه لأذنه؟",
        "answer": "فان جوخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نبات عشبي صغير الحجم أوراقه ثلاثية وثمرته قمعية الشكل حمراء اللون",
        "answer": "الفراولة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم التراث الشعبي الذي يشمل الحكايات والأساطير والعادات والتقاليد المنقولة عبر الأجيال؟",
        "answer": "فلكلور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي تُطلق كجمع للصحراء الواسعة الممتدة؟",
        "answer": "فيافي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "غاز كان سبباً في ثقب طبقة الأوزون، واستُخدم لعقود في أجهزة التبريد والتكييف",
        "answer": "الفريون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي السورة التي تحوي جميع الحروف الأبجدية في آخر آية وتعد من مظاهر الإعجاز البياني في القرآن الكريم؟",
        "answer": "سورة الفتح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي عاصمة جمهورية النمسا؟",
        "answer": "فيينا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى الشخص سريع الفهم وحدة الإدراك؟",
        "answer": "‏ فَطين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي أطول كلمة في القرآن الكريم وتتكون من 11 حرفاً؟",
        "answer": "فأسقيناكموه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الشعوب الإسكندنافية التي اشتهرت بالغزو والملاحة في العصور الوسطى؟",
        "answer": "فايكنج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "غ",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "لقب الصحابي الجليل حنظلة بن عامر رضي الله عنه ؟",
        "answer": "غسيل الملائكة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة : هو قعر الجب ؟",
        "answer": "غيابة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على من يموت في البحر أو النهر ؟",
        "answer": "غريق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو ما به نماء الجسم و قوامه ؟",
        "answer": "غذاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو ما يكون سحيقا و عميقا ؟",
        "answer": "غائر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أحد أسماء الأسد ؟",
        "answer": "الغضنفر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو المكان الذي يتوفر به الماء بكثرة ؟",
        "answer": "غدير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على صوت النائم ؟",
        "answer": "غطيط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الكهف العميق ؟",
        "answer": "غار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو بيت السيف ؟",
        "answer": "غمد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الصبي الذي يقارب سن البلوغ ؟",
        "answer": "غلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي السورة رقم أربعين في القرآن الكريم ؟",
        "answer": "غافر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الصوت الخارج من الخيشوم ؟",
        "answer": "الغنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "واحد من فواسق الدواب ؟",
        "answer": "الغراب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم من أربعة حروف إذا حذفت منه حرف زال ؟",
        "answer": "غزال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "تلون السماء بعد غروب الشمس ؟",
        "answer": "الغسق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أسماء يوم القيامة ورد في القرآن الكريم ؟",
        "answer": "الغاشية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو السحاب الأبيض ؟",
        "answer": "غمام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هم العرب النصارى حلفاء الروم أيام العصر الجاهلي ؟",
        "answer": "الغساسنة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي صفة تدل على ترك الوفاء ؟",
        "answer": "غدر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في مصطلح الحديث ما رواه واحد ؟",
        "answer": "غريب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة : بمعنى الكربة ؟",
        "answer": "الغمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "إفاضة الماء على البدن كله مع النية ؟",
        "answer": "غسل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى ظلمة آخر الليل ؟",
        "answer": "غلس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الكرب و الحزن ماذا يسمى ؟",
        "answer": "الغم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو احتقار الناس والازدراء بهم ؟",
        "answer": "غمط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي المرأة التي استغنت بمالها عن أية محسنات ؟",
        "answer": "غانية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الحديث الرديء الفاسد ؟",
        "answer": "الغث",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو باب من أبواب الشعر طرقه الشعراء و تغنوا به و ملئوا به دواوينهم ؟",
        "answer": "الغزل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو العقل الظالم و الجائر ؟",
        "answer": "الغاشم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو صوت الماء المتحرك في حلق الإنسان ؟",
        "answer": "الغرغرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى صديد أهل النار ؟",
        "answer": "غساق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الشجر الذي سيحتمي خلفها اليهود أثناء حربهم مع المسلمين ؟",
        "answer": "الغرقد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مجاوزة الأمر المحدود ؟",
        "answer": "الغلو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الكلام غير المفهوم ؟",
        "answer": "غامض",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "لفظ يقصد به الزمن الماضي شديد القدم ؟",
        "answer": "غابر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى طعام الختان ؟",
        "answer": "الغديرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في جسم الانسان لها وظائف وافرازات مختلفة ؟",
        "answer": "غدد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الطيور المائية الجميلة لونه أسود ؟",
        "answer": "الغر نوق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي اليمين الكاذبة التي تهضم بها الحقوق والتي يقصد بها الفساد ؟",
        "answer": "الغموس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كائن خرافي ضخم اشتهر عند العرب في روايات ألف ليلة و ليلة ؟",
        "answer": "غول",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هم الجماعة الكثيرة من الناس فيهم الشريف والوضيع ؟",
        "answer": "الغفر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يطلق على ذكر السلحفاة ؟",
        "answer": "غليم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من مؤلف كتاب \" إحياء علوم الدين \" ؟",
        "answer": "الغزالي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أول من صنع المجهر البسيط ؟",
        "answer": "غاليليو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو كل بيع احتوى على جهالة أو تضمن مخاطرة أو قمار و قد نهى الشارع عنه ؟",
        "answer": "الغرر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الليل إذا أقبلت ظلمته ؟",
        "answer": "غطش",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عالم إيطالي أيد نظرية كوبرنيكوس بأن الأرض تدور حول الشمس ؟",
        "answer": "غاليليو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى صوت الماء أو السائل عند تحريكه في الحلق؟",
        "answer": "الغرغرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الفن الشعري الذي يعبر فيه الشاعر عن عواطفه تجاه المحبوب؟",
        "answer": "غزل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى العقوبة المالية التي تفرض على المخالف للقانون؟",
        "answer": "غرامة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على اليوم الأول من كل شهر هجري؟",
        "answer": "غرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى ستر الذنب وعدم المعاقبة عليه؟",
        "answer": "غفران",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القبيلة العربية المسيحية التي حكمت بلاد الشام قبل الإسلام وكانت موالية للروم؟",
        "answer": "غسان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هم أحد مستحقي الزكاة الثمانية المذكورين في القرآن الكريم ويقصد بهم المدينون؟",
        "answer": "غارمين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى الصبي الذي قارب سن البلوغ؟",
        "answer": "الغلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الكائن الخرافي الّذي يتصف بالوحشية والضخامة وكان العرب قديمًا يخافون منه في الصحراء؟",
        "answer": "الغول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الأمر القرآني الذي ورد في سورة النور للمؤمنين والمؤمنات للحفاظ على العفة؟",
        "answer": "غض البصر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "شاعر وأديب وكاتب وسفير دبلوماسي ووزير سعودي وكان له عدداً كبيراً من المؤلفات في شتى المواضيع",
        "answer": "غازي القصيبي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الغلاف الذي يوضع فيه السيف لحمايته؟",
        "answer": "غمد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في بيت المتنبي الشهير: \"واختر لنفسك منزلاً تعلو به.. أو مت عزيزاً تحت ظل القسطل\"، ما المعنى اللغوي لكلمة \"القسطل\"؟",
        "answer": "غبار المعركة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى جزء الشجرة الذي يحمل الأوراق؟",
        "answer": "غصن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مالشيء الّذي يسير بلا قدمين ويبكي بلا عيون؟",
        "answer": "الغيوم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى المستولي على مال غيره عنوةً وقهرًا بدون حق أو رضا صاحبه؟",
        "answer": "غاصب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الانفعال النفسي الذي قد يؤدي إلى قرارات غير عقلانية قد يندم عليها الإنسان؟",
        "answer": "الغضب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مصطلح بمعنى تمني شيء عند الآخرين دون تمني زواله",
        "answer": "غبط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي تعني هزم وانتصر؟",
        "answer": "غلب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الدولة الأفريقية التي عاصمتها كوناكري؟",
        "answer": "غينيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من مخترع آلة الطباعة الحديثة في القرن الخامس عشر؟",
        "answer": "غوتنبرغ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الحالة النفسية التي يشعر بها المرء عند ابتعاده عن وطنه وأهله؟",
        "answer": "غربة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما مصطلح التجاوز في الدين والمبالغة فيه بما يخرج عن حدود الشرع؟",
        "answer": "غلو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عملية طبية الهدف منها تنظيف الكليتين ليؤديا وظيفتهما بالشكل الصحيح وذلك بتصفية الدم من الفضلات والسموم",
        "answer": "غسيل الكلى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بماذا تسمى خيانة العهد ونقض الوعد؟",
        "answer": "غدر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الطبقة غير المرئية المحيطة بالأرض بفعل الجاذبية والتي تحتوي على طبقة الأوزون؟",
        "answer": "الغلاف الجوي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة الفلسطينية العريقة التي تُعد مسقط رأس هاشم بن عبد مناف جد النبي ﷺ؟",
        "answer": "غزة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الدولة الأفريقية التي عاصمتها أكرا وكانت تسمى \"ساحل الذهب\"؟",
        "answer": "غانا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المرض الي يكون فيه موت أنسجة الجسم إما لنقص تدفق الدم إليها أو لإصابتها بعدوى بكتيرية خطيرة",
        "answer": "غرغرينا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة بمعنى مثال أو نهج",
        "answer": "غرار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كل ما استأثر الله تعالى بعلمه، وحجبه عن حواس البشر وعقولهم، ولا يعلمونه إلا بوحي أو إخبار إلهي",
        "answer": "الغيب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يشير إلى جميع النباتات التي تغطي منطقة جغرافية معينة؟",
        "answer": "غطاء نباتي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم بداية ظلام الليل في اللغة العربية؟",
        "answer": "الغسق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الزعيم الروحي والسياسي الشهير الذي قاد الهند في مسيرة المقاومة السلمية للاستقلال عن بريطانيا؟",
        "answer": "غاندي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما نوع الهجوم العسكري المفاجئ والسريع الذي يُنفذ ثم ينسحب المهاجمون؟",
        "answer": "غارة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يُعبّر عن الكرب والحزن الشديد؟",
        "answer": "الغم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الشرعي لذكر المسلم أخاه بما يكره في غيابه؟",
        "answer": "غيبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو العالم والفقيه المسلم صاحب كتاب إحياء علوم الدين والملقب بـ \"حجة الإسلام\"؟",
        "answer": "الغزالي (رحمه الله)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على ذكر السلحفاة؟",
        "answer": "غيلم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "رياضة مائية تتضمن النزول تحت سطح الماء لاستكشاف العالم البحري",
        "answer": "الغوص",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المال المأخوذ من الكفار بالقتال في الإسلام؟",
        "answer": "غنيمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من قبائل العرب الشمالية من ذبيان وعبس",
        "answer": "غطفان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الوصف الشعبي واللغوي الدارج الذي يُطلق على الشخص قليل الخبرة، الطائش، أو الذي لا يُجيد التصرف في الأمور؟",
        "answer": "الغشيم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما النسيج الضام المرن الذي يغطي نهايات العظام في المفاصل؟",
        "answer": "غضروف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تعني في اللغة الكثرة والوفرة في الأموال والموارد وضد الحاجة والفقر؟",
        "answer": "غنى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وصف للدرجة القاتمة التي تميل إلى السواد، وتُستخدم للتعبير عن العمق والقوة في اللون",
        "answer": "غامق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الوصف الذي يُطلق على المكان أو الجرح إذا كان عميقاً وسحيقاً لأسفل؟",
        "answer": "غائر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما أحد أسماء يوم القيامة الواردة في القرآن الكريم؟",
        "answer": "الغاشية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الوصف الذي يطلق على أقصى درجات السواد ويُشير أيضًا إلى نوع من أنواع العنب",
        "answer": "غربيب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "حالة يفقد فيها الإنسان القدرة على التنفس بسبب امتلاء رئتيه بالماء، وقد تؤدي إلى الوفاة",
        "answer": "الغرق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي الدولة التي عاصمتها أكرا؟",
        "answer": "غانا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أين نزل الوحي على النبي محمد صلى الله عليه وسلم لأول مرة؟",
        "answer": "غار حراء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما آخر معاقل المسلمين في الأندلس التي سقطت عام 1492م؟",
        "answer": "غرناطة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على الحروب التي خاضها المسلمون بقيادة النبي محمد ﷺ؟",
        "answer": "غزوات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على المطر الذي يأتي بعد الجفاف؟",
        "answer": "غيث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى حالة انعدام الوضوح حيث يحتمل الشيء أكثر من تفسير مما يؤدي إلى التباس في الفهم؟",
        "answer": "غموض",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الطائر الذي بعثه الله ليعلم ابن آدم كيفية دفن أخيه؟",
        "answer": "الغراب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مزيج من الأفكار والمشاعر تنتاب الشخص عند شعوره بتهديد لعلاقته بمن يحب أو رغبته في حماية حقه وشرفه",
        "answer": "غيرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى الميل الفطري الطبيعي الذي يدفع الكائن الحي نحو سلوك معين دون الحاجة لتعلم مسبق؟",
        "answer": "غريزة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الذي يُطلق على الحالة البصرية التي تجعل الرؤية ضبابية وغير واضحة كأنه يوجد حاجز أمام العين؟",
        "answer": "غشاوة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "اسم يطلق على الأصول التي يحتفظ بها البنك المركزي من ذهب وأوراق مالية لضمان قيمة العملة التي يصدرها",
        "answer": "الغطاء النقدي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الشاعر الذي عُرف بلقب (أخطل) وكان شاعر بني أمية المقرب؟",
        "answer": "غياث بن غوث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة بمعنى الكثرة والزيادة عن الحد المعتاد وتستخدم لوصف التدفق بكميات كبيرة",
        "answer": "غزارة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة بمعنى تثبيت الشيء في الأرض، وتُستخدم مجازيًا للدلالة على ترسيخ المعاني أو الأفكار في العقل",
        "answer": "غرس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الشجرة التي ورد في الأثر أن اليهود يختبئون خلفها في آخر الزمان ولا تخبر عنهم؟",
        "answer": "شجرة الغرقد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المركبة البحرية التي تستطيع السير تحت سطح الماء لفترات طويلة؟",
        "answer": "غواصة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُطلق على ذكر السلحفاة في اللغة العربية؟",
        "answer": "غليم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ك",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "هو لقب موسى علي السلام ؟",
        "answer": "كليم الله",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي سورة ذكرت قصة موسى عليه السلام مع العبد الصالح ؟",
        "answer": "الكهف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ملك دعا عليه رسول الله صلى الله عليه و سلم عندما تلقى كتاب النبي و مزقه و قال : ( اللهم مزق ملكه ) ؟",
        "answer": "كسرى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي الفرقة العظيمة من الجيش تشتمل على عدد من السرايا ؟",
        "answer": "كتيبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الذي خلقه الله تعالى و استعظمه ؟",
        "answer": "كيد النساء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الرجل الذي مات ولا يوجد له أصل أو فرع ؟",
        "answer": "كلالة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو أصل القائد صلاح الدين الأيوبي ؟",
        "answer": "كردي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو أكبر عضو في الجسم ؟",
        "answer": "الكبد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الذي وضع معالم الحرم التي لم تزل حتى الآن ؟",
        "answer": "كرز بن علقمه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "له أربع أرجل و لا يستطيع المشي إلا محمولا ؟",
        "answer": "الكرسي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إلى أين نقل على بن أبي طالب عاصمة المسلمين ؟",
        "answer": "الكوفة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أقصر سورة في القرآن الكريم ؟",
        "answer": "الكوثر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو مبنى البرلمان الروسي ؟",
        "answer": "الكرملين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صفة أخرجت إبليس من الجنة ؟",
        "answer": "كبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "تجويف طبيعي سطحي أو جوفي في صخرة أو جبل بعضها داخلي و بعضها سطحي ؟",
        "answer": "الكهف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أهم مدن العراق النفطية الواقعة في الشمال ؟",
        "answer": "كركوك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قائد وزعيم تركي مؤسس تركيا الحديثة ألغى الخلافة الإسلامية ؟",
        "answer": "كمال أتاتورك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة : ما هو مفرد \" أكفاء \" ؟",
        "answer": "كفيف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "المجلس التشريعي الذي تصدر منه القرارات في الولايات المتحدة الأمريكية ؟",
        "answer": "الكونغرس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أعلى قمة جبلية لا تتبع لسلسلة من الجبال ؟",
        "answer": "كلمنجارو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما السؤال الذي تختلف إجابته دائما ؟",
        "answer": "كم الساعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من المواد البترولية أقل كثافة من السولار و قابل للاشتعال ؟",
        "answer": "الكيروسين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "شجر من فصيلة البرازيلية أمريكي الأصل يتخذ من مسحوق بذوره شراب وتصنيع منه الحلوى ؟",
        "answer": "الكاكاو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حيوان فيه منفعة مباحة للحاجة و لا يصح بيعه ؟",
        "answer": "الكلب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو القوي القادر على تصريف الأمور ؟",
        "answer": "الكفء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "طائر طويل الرجلين و المنقار أغبر له صوت حسن ؟",
        "answer": "كروان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الأدب القديم أو أدب التراث ؟",
        "answer": "كلاسيكي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على القطعة من الخبز ؟",
        "answer": "كسرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي مقاطعة تتنازع عليها الهند وباكستان و قامت من أجلها الحروب ؟",
        "answer": "كشمير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي عملة جمهورية التشيك ؟",
        "answer": "كورون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما أهم نهر في أفغانستان ؟",
        "answer": "كابل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي مادة ملح الطعام الكيمائية ؟",
        "answer": "كلوريد الصوديوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الأكثر تصديراً للسكر في العالم ؟",
        "answer": "كوبا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أتاوى هي عاصمة لإحدى الدول المتقدة فما هي هذه الدولة ؟",
        "answer": "كندا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الكيميائي للطباشير المستخدمة في الكتابة ؟",
        "answer": "كربونات الكالسيوم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكريضات ؟",
        "answer": "كريات الدم البيضاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أكبر المدن في الهند من حيث السكان ؟",
        "answer": "كلكتا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يطلق على السنة الميلادية التي يكون فيها شهر فبراير 29 يوما و هي تأتي كل أربع سنوات ؟",
        "answer": "كبيسة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو علم الجريمة و دوافعها ؟",
        "answer": "الكرومونولوجي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ملاح إيطالي اكتشف أمريكا عام 1492 م من غير أن يدري أنه فعل ذلك ؟",
        "answer": "كريستوف كولومبس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو مؤسس مذهب الشيوعية وهو من أصل يهودي ؟",
        "answer": "كارل ماركس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم أكبر صحراء في العالم ؟",
        "answer": "الكبرى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وكالة الأنباء الكويتية ؟",
        "answer": "كونا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم ابن نوح الذي غرق في الطوفان ؟",
        "answer": "كنعان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اصل الماس ؟",
        "answer": "كربون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "زيت طيار صلب في درجات الحرارة العادية أبيض شفاف متبلور ذو رائحة ؟",
        "answer": "كافور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي أغنى دولة في العالم باليورانيوم ؟",
        "answer": "كندا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "رابطة الشعوب المستقلة من الاستعمار البريطاني ؟",
        "answer": "الكومن ولث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الغدة التي تُفرز الأدرينالين وتُجهز الجسم لمواجهة المواقف الطارئة؟",
        "answer": "الغدة الكظرية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الأفعال الناسخة في اللغة العربية التي تدخل على الجملة الاسمية فترفع المبتدأ وتنصب الخبر؟",
        "answer": "كان وأخواتها",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة بمعنى تجهم الوجه و إظهار عدم الرضا...",
        "answer": "كشرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة الواقعة في أمريكا الوسطى والتي تُعد من أشهر الدول التي ألغت جيشها الوطني دستورياً منذ عام 1948 م؟",
        "answer": "كوستاريكا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو المدرب الذي حقق الدوري السعودي مع نادي الهلال في عام 2007-2008؟",
        "answer": "كوزمين أولاريو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الشخص البالغ الذي تجاوز مرحلة الشباب ووصل سن الرشد؟",
        "answer": "كهل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم ابن نبي الله نوح (عليه السلام) الذي رفض ركوب السفينة وغرق في الطوفان؟",
        "answer": "كنعان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم النهر الذي يعد ثاني أطول أنهار إفريقيا؟",
        "answer": "نهر الكونغو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مدرج روماني عملاق يقع في وسط روما، بُني في القرن الأول الميلادي",
        "answer": "كولوسيوم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو البروتين الرئيسي في تكوين العظام والغضاريف والأوتار؟",
        "answer": "الكولاجين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم العلم الذي يعنى بإثبات العقائد الإيمانية بالبراهين العقلية والمنطقية؟",
        "answer": "علم الكلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العمل الذي قرن النبي ﷺ صاحبه بنفسه في الجنة، حيث قال إنه يكون معه كإصبعَي السبابة والوسطى؟",
        "answer": "كفالة الأيتام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الخاصية الفيزيائية التي تعبر عن نسبة الكتلة إلى الحجم؟",
        "answer": "كثافة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القرية العمانية المعزولة في أقصى الشمال ويتحدث سكانها لغة خاصة فريدة؟",
        "answer": "قرية كمزار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو العالم الفيزيائي والفلكي الذي وضع القوانين الشهيرة التي تصف حركة الكواكب ومداراتها حول الشمس؟",
        "answer": "كيبلر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو الحيوان الوطني لأستراليا؟",
        "answer": "الكنغر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أحد أشهر فروع وسلالات الخيل العربية الأصيلة وسُمي بذلك لشدة سواد وجمال ما حول عينيه؟",
        "answer": "كحيلان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة جمهورية غينيا؟",
        "answer": "كوناكري",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أفعال ماضية ناقصة وناسخة تدخل على الجملة الاسمية ترفع المبتدأ و تنصب الخبر",
        "answer": "كان و اخواتها",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الاسم الرسمي الذي أطلقته منظمة الصحة العالمية على الجائحة التي انطلقت من الصين أواخر عام 2019",
        "answer": "كوفيد-19",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الّذي يعني تحقيق الاستفادة من الموارد بأقل هدر ممكن؟",
        "answer": "كفاءة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو العنصر الذي يدخل في تركيب جميع المركبات العضوية؟",
        "answer": "الكربون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نهر في الجنة من شرب منه شربة لم يضمأ بعدها أبدا",
        "answer": "الكوثر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الرياضة الأكثر شعبية في العالم؟",
        "answer": "كرة القدم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما عاصمة أستراليا التي اختيرت لتكون مقرًا للحكومة بدلًا من سيدني وملبورن؟",
        "answer": "كانبرا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الخلايا المسؤولة في جسم الإنسان عن مهاجمة مسببات الأمراض والعدوى؟",
        "answer": "كريات الدم البيضاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أحد أقدم أنواع الخط العربي والذي نشأ في العراق ويتميز بزواياه المستقيمة؟",
        "answer": "الخط الكوفي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو إخفاء العلم النافع الذي نهى عنه النبي ﷺ؟",
        "answer": "كتمان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم المقر الرئاسي الروسي الواقع في موسكو؟",
        "answer": "كرملين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم العلمي لمقياس كمية المادة في الجسم والذي يقاس بالكيلوغرام؟",
        "answer": "كتلة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الدولة التي عاصمتها أستانا؟",
        "answer": "كازاخستان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هي الصحابية الجليلة من أوائل نساء الأنصار إسلاماً ومبايعةً للنبي ﷺ، وهي أم سيد الأوس سعد بن معاذ (رضي الله عنه)؟",
        "answer": "كبشة بنت رافع (رضي الله عنها)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو البحّار الإيطالي الذي يُنسب إليه اكتشاف أمريكا في عام 1492؟",
        "answer": "كولومبوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو العلم الذي يدرس المادة وتفاعلاتها وتحولاتها؟",
        "answer": "كيمياء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الدولة التي تُعد ثاني أكبر دول العالم مساحة، وتشتهر بكثرة البحيرات والغابات والطبيعة الباردة؟",
        "answer": "كندا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يعبر عن النضال المستمر ضد الصعاب لتحقيق هدف محدد؟",
        "answer": "كفاح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العملة الرسمية لجمهورية التشيك؟",
        "answer": "كورون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الهداف التاريخي لكأس العالم؟",
        "answer": "كلوزة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الشاعر الذي قال: بانت سعاد فقلبي اليوم متبول، في قصيدته التي مدح بها النبي ﷺ؟",
        "answer": "كعب بن زهير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أقصر سورة في القرآن الكريم من حيث عدد الآيات؟",
        "answer": "سورة الكوثر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي عاصمة الدنمارك؟",
        "answer": "كوبنهاغن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم التركيب في الخلية الذي يحمل الجينات وينقل الصفات الوراثية؟",
        "answer": "كروموسوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "كلمة تطلق على ذهاب ضوء الشمس في النهار عندما يحجبها القمر",
        "answer": "الكسوف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي وحدة القياس المستخدمة لتحديد درجة حرارة اللون في الإضاءة والتصوير، وتُعبر عن مدى دفء الضوء أو برودته؟",
        "answer": "كلفن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى تكتيك الهجوم العسكري المفاجئ الذي يعتمد على التخفي والترصد في موقع محدد بانتظار وصول الخصم؟",
        "answer": "كمين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح النفسي الذي يُعبّر عن حبس المشاعر أو الدوافع في اللاوعي؟",
        "answer": "الكبت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُطلق فلكياً على الجرم الصخري الذي يدور حول الشمس ويكون أصغر من الكوكب وأكبر من النيزك؟",
        "answer": "كويكب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُطلق على مجموع العاملين والموظفين في مجال أو مؤسسة معينة؟",
        "answer": "كادر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم التقنية أو الأداة الحيوية الحديثة المستخدمة للتعديل الجيني وقص أجزاء من الحمض النووي بدقة؟",
        "answer": "كريسبر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى أسلوب ذكر الشيء وإرادة معنى آخر غير معناه الظاهر في البلاغة؟",
        "answer": "الكناية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو جراح القلب الجنوب أفريقي الذي دخل التاريخ كأول طبيب يُجري عملية زراعة قلب بشري ناجحة في عام 1967 م؟",
        "answer": "كريستيان برنارد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي المدينة التي استشهد فيها الحسين بن علي سنة 61هـ؟",
        "answer": "كربلاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُطلق على المسؤول القانوني الموكل إليه توثيق العقود والمعاملات المدنية وإصدار الوكالات؟",
        "answer": "كاتب العدل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى التجويف الطبيعي المتكون داخل الصخور أو الجبال ويكون له مدخل على السطح؟",
        "answer": "كهف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العاصمة السياسية لجمهورية الإكوادور الواقعة في أمريكا الجنوبية؟",
        "answer": "كيتو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي المادة الشمعية البيضاء ولها رائحة نفاذة، وتستخرج من الأشجار وتستخدم في المراهم الطبية وطرد الحشرات؟",
        "answer": "الكافور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو أول منتخب عربي من قارة آسيا ينجح في التأهل إلى نهائيات كأس العالم لكرة القدم؟",
        "answer": "الكويت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المحور أو العمود الأساسي داخل محرك السيارة الذي يحول حركة المكابس المستقيمة إلى حركة دورانية؟",
        "answer": "الكرنك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المرض الذي يصيب الأطفال نتيجة نقص فيتامين (د)، ويؤدي إلى لين العظام وضعف نموها وتشوهها؟",
        "answer": "الكساح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الزهرة الوطنية الشهيرة لليابان وتُعرف هناك باسم زهرة \"الساكورا\"؟",
        "answer": "الكرز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الظواهر غير المعتادة التي تظهر على يد الصالحين من غير الأنبياء؟",
        "answer": "كرامات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي القبيلة التي تنتمي إليها قريش؟",
        "answer": "كنانة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الكلمة التي تعني في اللغة إلحاق الأذى بالآخرين عن طريق الحيلة والخداع؟",
        "answer": "الكيد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي القطعة التي تستخدم لتغيير اتجاه المواسير بزاوية 90 أو 45 درجة؟",
        "answer": "الكوع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم القطعة الميكانيكية المسؤولة عن فصل وتوصيل الحركة بين المحرك وناقل الحركة في السيارات ذات القير اليدوي؟",
        "answer": "الكلتش",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اسم الهيئة التشريعية العليا في الولايات المتحدة الأمريكية؟",
        "answer": "كونجرس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل الذي نزلت فيه آية الفدية في الحج {ففدية من صيام أو صدقة أو نسك} .",
        "answer": "كعب بن عجرة (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المعركة التي انتصر فيها المسلمون على الفرس وتسمى \"ذات السلاسل\"؟",
        "answer": "كاظمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صكوك مالية مؤجلة تلجأ إليها البنوك التجارية والممولون والمنتجون",
        "answer": "كمبيالة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الصفة التي تُطلق على الشخص الذي امتلأ قلباً حزناً وأسفاً، لكنه يكتمه في نفسه ولا يظهره؟",
        "answer": "الكظيم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو بطل العالم الذي هيمن على الشطرنج من 1985 إلى 2000؟",
        "answer": "كاسباروف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الصفة الذميمة التي تسببت في طرد إبليس من الجنة وامتناعه عن السجود لآدم (عليه السلام)؟",
        "answer": "الكبر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو أول طعام أهل الجنّة؟",
        "answer": "كبد الحوت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى الطعام الفاخر الغالي الثمن الذي يتكون من بيض مالح يُستخرج من سمك الحفش؟",
        "answer": "كافيار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللقب الذي كان يطلق على ملوك الفرس؟",
        "answer": "كسرى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الطاقة الناتجة عن حركة الإلكترونات؟",
        "answer": "كهرباء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الرياضة الجماعية التي يفصل بين فريقين فيها شبكة مرتفعة وتعتمد على ضرب الكرة باليد دون ملامستها للأرض؟",
        "answer": "كرة الطائرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو العضو الوحيد في جسم الإنسان الذي يمكنه إعادة النمو (التجدد) بعد قطع جزء منه؟",
        "answer": "كبد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى علمياً البقع الداكنة المؤقتة التي تظهر على سطح الشمس نتيجة لانخفاض درجة حرارتها بسبب نشاط مغناطيسي مكثف؟",
        "answer": "الكلف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي القبيلة العربية التي ينتمي إليها امرؤ القيس؟",
        "answer": "كندة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما معنى لفظ \"الزُّبُر\" الذي ورد في القرآن الكريم؟",
        "answer": "الكتب السماوية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المدينة التي أسسها الخليفة عمر بن الخطاب لتكون معسكراً للجيش الإسلامي؟",
        "answer": "الكوفة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الشاعر الذي يُعد أحد الثلاثة الذين تاب الله عليهم في سورة التوبة بعد تخلفهم عن غزوة تبوك؟",
        "answer": "كعب بن مالك (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الصفة القيادية التي تعني قدرة التأثير والجاذبية الشخصية؟",
        "answer": "كاريزما",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المادة التي تشكل الدعامة الأساسية والتركيب الصلب للهيكل الخارجي لدى الحشرات؟",
        "answer": "الكيتين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي وسيلة العلاج التقليدية التي يُضرب بها المثل العربي الشهير باعتبارها ختام الحلول الصعبة ويقال عنها \"آخر الدواء\"؟",
        "answer": "الكي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي عاصمة أفغانستان؟",
        "answer": "كابول",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللفظ الجغرافي الذي يُطلق في اللغة العربية على التلال أو الروابي والحواجز المكونة من التجمعات الرملية؟",
        "answer": "كثبان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المنطقة الجبلية المتنازع عليها تاريخياً بين الهند وباكستان وكانت سبباً في نشوب حروب بينهما؟",
        "answer": "كشمير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مركب طبيعي يوجد بالجسم ، يُستخرج من اللحوم والأسماك ويستخدم كمكمل غذائي لزيادة قوة وحجم العضلات",
        "answer": "الكرياتين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى السنة التي يكون عدد أيامها ٣٦٦ يوماً بدلاً من ٣٦٥ يوم وتتكرر كل 4 سنوات؟",
        "answer": "كبيسة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللفظ الذي يُطلق على الشخص الذي فقد حاسة البصر بشكل كلي أو جزئي؟",
        "answer": "الكفيف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الشيء الذي صانعه يبيعه ومشتريه لا يستعمله ومستعمله لا يعلم انه استعمله؟",
        "answer": "الكفن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُطلق على الأجرام السماوية المعتمة التي تدور حول الشمس في مدارات محددة؟",
        "answer": "كوكب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على مجموعة من الثروات أو الأشياء الثمينة المخفية؟",
        "answer": "كنوز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تُسمى علمياً الظواهر والتضاريس الجغرافية الناتجة عن تآكل وإذابة المياه للصخور الكلسية والمذيبة تحت الأرض؟",
        "answer": "الكارست",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم العضو المسؤول عن إزالة السموم وإنتاج المادة الصفراء الّتي تساعد على الهضم وتفكيك الدهون؟",
        "answer": "كبد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم العضو المسؤول عن تصفية الدم وإزالة الفضلات في جسم الإنسان؟",
        "answer": "كلى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ت",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "سورة في القرآن الكريم ابتدأت باسم ثمرتين ؟",
        "answer": "التين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لقب عبدالله بن العباس رضى الله عنه ؟",
        "answer": "ترجمان القران",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اخر غزوات الرسول صلى الله عليه وسلم ؟",
        "answer": "تبوك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل هذه العبارة المشهورة (( تاج المروءة ......... )) ؟",
        "answer": "التواضع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الفاضحة والمبعثرة اسمان لسورة من القرآن ؟",
        "answer": "التوبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو تفريق المال على وجه الإسراف ؟",
        "answer": "تبذير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "آية من آيات الملك منحها الله سبحانه وتعالى لطالوت ؟",
        "answer": "تابوت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صلاة يختص بها شهر رمضان ؟",
        "answer": "تراويح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مما خلق ادم ؟",
        "answer": "تراب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تعنى حزن ؟",
        "answer": "ترح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يستخدم في رؤية الأجسام البعيدة جداً ؟",
        "answer": "تلسكوب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على صوت البلبل ؟",
        "answer": "تغريد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أهم مؤلفات الشيخ محمد بن عبد الوهاب ؟",
        "answer": "التوحيد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مدينة يمنية مشهورة . من أشهر معالمها جبل صبر ؟",
        "answer": "تعز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي السورة الخالية من البسملة ؟",
        "answer": "التوبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مبنى يستعمل في تسوية الخبز ؟",
        "answer": "تنور",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مقبرة هندية مبنية من الرخام الأبيض تعتبر من عجائب الدنيا السبع ؟",
        "answer": "تاج محل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل يكنى بأبي رقية كان نصرانياً فأسلم عام 9 هـ ، كان كثير التهجد توفي بفلسطين عـام 40 هـ ؟",
        "answer": "تميم بن أوس الداري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أسرع المخلوقات البحرية ؟",
        "answer": "التونة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مرض من الأمراض الصيفية وهو ( حمى خبيثة ) ؟",
        "answer": "التيفود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "آلة حربية كانت تستخدم في الدفاع عن المدن قديماً ؟",
        "answer": "ترس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من المعجمات العربية المشهورة لأبي بكر الزبيدي ؟",
        "answer": "تاج العروس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الاحداث والاحوال التى مر بها المجتمع في الماضى ؟",
        "answer": "تاريخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو العظم الذي بين ثغرة النحر العاتق ؟",
        "answer": "ترقوة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ملك الحبشة الذي يقال انه اول من كسى الكعبة ؟",
        "answer": "تبع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مزلاج من حديد لقفل الباب ؟",
        "answer": "ترباس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو البلد العربي الدى كان يسمى افريقيا ؟",
        "answer": "تونس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مؤلف كتاب مشكاة المصابيح ؟",
        "answer": "التبريزي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو حالة التردد في حرف التاء عند الكلام ؟",
        "answer": "تعتعه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي عملية تحول المادة من الحالة الجامدة إلى الحالة الغازية مباشرة ؟",
        "answer": "تبخر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الإيطالي الذي اخترع البارومتر ؟",
        "answer": "توديشلي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يطلق على الفرويدية : مدرسة ............. ؟",
        "answer": "التحليل النفسي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أعلى هضبة في العالم هضبة ؟",
        "answer": "التبت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "لقب أحد الشعراء الصعاليك اسمه ثابت بن جابر اشتهر بلقبه فمن هو ؟",
        "answer": "تأبط شراً",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مدينة إيرانية فيها مسجد يطلق عليه المسجد الأزرق وهذا المسجد من آثار المسلمين الأولى في تلك البلاد ؟",
        "answer": "تبريز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الأمريكي الذي اخترع الرادار ؟",
        "answer": "تايلر يونج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عاصمة الصين الوطنية ؟",
        "answer": "تايبيه",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الحقيقى للخنساء ؟",
        "answer": "تماضر بنت عمرو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يطلق على وكالة تونس للأنباء ؟",
        "answer": "تاب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى الذهب الذي لم يضــــرب ؟",
        "answer": "تبر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي البلد التي ولد فيها صلاح الدين الأيوبي ؟",
        "answer": "تكريت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أعلى بحيرة في العالم تقع بين البيرو وبوليفيا وتسمى بحيرة ............. ؟",
        "answer": "تيتيكاكا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أين يقع جامع \" الزيتونة \" ؟",
        "answer": "تونس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "نرويجي هو أول سكرتير عام لهيئة الأمم المتحدة ؟",
        "answer": "ترينغ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "دكتاتور روماني حكم 24 عاماً قبل أن يعدم هو وزوجته ؟",
        "answer": "تشاوسيسكو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الدولة التي عاصمتها (( عشق آباد )) ؟",
        "answer": "تركمانستان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مكوك فضائي أمريكي انفجر بعد انطلاقه بثوان أمام كل الحاضرين في عام 1986 م ؟",
        "answer": "تشالنجر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي آخر غزوات النبي صلى الله عليه وسلم؟",
        "answer": "تبوك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الهضبة الشاسعة التي تقع في وسط آسيا وتُلقب بـ \"سقف العالم\" لكونها أكبر وأعلى هضبة على وجه الأرض؟",
        "answer": "التبت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الموجة البحرية العنيفة التي تنشأ نتيجة زلزال أو انفجار بركاني تحت سطح البحر؟",
        "answer": "تسونامي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو المصطلح الذي يصف تغير سرعة الجسم خلال مدة معينة؟",
        "answer": "التسارع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المنطقة البيئية الباردة التي تمتاز بقلة الأشجار وانتشار الطحالب؟",
        "answer": "تندرا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو فرع الرياضيات المعني بدراسة معدل التغير اللحظي لكمية بالنسبة لأخرى؟",
        "answer": "التفاضل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى تقسيم موضوع معقد لأجزاء صغيرة لفهمها بشكل أعمق؟",
        "answer": "تحليل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الأسلوب البلاغي الذي يُستخدم لربط شيئين من خلال أداة مثل \"كأن\" أو \"مثل\"؟",
        "answer": "تشبيه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القاعدة في الشطرنج التي يتم فيها تحويل البيدق إلى قطعة أقوى عند وصوله إلى الصف الأخير من الرقعة؟",
        "answer": "الترقية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "طائرة حربية متعددة المهام تستعمل كمطاردة ومقاتلة وهي إنتاج مشترك من بريطانيا وألمانيا وإيطاليا",
        "answer": "تايفون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة الواقعة في جنوب شرق آسيا والتي حافظت على استقلالها وتاريخها كاملاً ولم تخضع أبداً لأي قوة استعمارية أوروبية؟",
        "answer": "تايلاند",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى فتات وشذرات الذهب والفضة قبل أن تُصاغ؟",
        "answer": "التبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "دولة تحتل المرتبة الأولى عالمياً في استهلاك الشاي للفرد، ويشرب مواطنوها الشاي في كل الأوقات والمناسبات",
        "answer": "تركيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المحافظة التي تُعرف بـ\"بوابة الحجاز ومفتاح نجد\" نظرًا لموقعها الجغرافي الاستراتيجي؟",
        "answer": "تربة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى النمط السكني المكون من منازل عمودية متلاصقة تشترك في الجدران الجانبية؟",
        "answer": "تاون هاوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي وحدة القياس الدولية المستخدمة لقياس شدة تدفق أو كثافة الفيض المغناطيسي؟",
        "answer": "تسلا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي العملية العلمية التي تُطلق على التلقيح أو التزاوج بين سلالتين أو صنفين مختلفين لإنتاج نسل يحمل صفات جديدة؟",
        "answer": "التهجين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الدولة ذات الحكم الذاتي التي تعتبرها الصين جزءاً من أراضيها وتخوض معها النزاع السياسي والسيادي الأبرز منذ منتصف القرن العشرين؟",
        "answer": "تايوان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "باخرة عملاقة فاخرة تكلفت الملايين وغرقت في أول رحلة في عام 1912 وراح ضحيتها 1517 شخصًا من ركابها",
        "answer": "تايتنك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُستخدم لوصف محاولة محاكاة تصرفات أو أعمال أو أصوات شخص آخر؟",
        "answer": "تقليد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "وسيلة لنقل الناس بواسطة مركبات هوائية معلقة في أسلاك تعمل بالكهرباء",
        "answer": "تيليفريك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العملية التي تُستخدم لتحويل المعلومات إلى صيغة سرية لا يمكن قراءتها إلا باستخدام مفتاح خاص؟",
        "answer": "تشفير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو مؤسس الدولة السعودية الثانية، والذي اتخذ الرياض عاصمةً لها؟",
        "answer": "تركي بن عبدالله",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العملية التي يتم من خلالها ابتكار أو إعداد عمل أدبي أو فني أو علمي؟",
        "answer": "تأليف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي دولة يقع جبل كليمنجارو والّذي يعد أعلى قمم قارة أفريقيا؟",
        "answer": "تنزانيا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على المرتفعات الأرضية الصغيرة الأقل ارتفاعًا من الجبال؟",
        "answer": "تلال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المعدن القوي جداً الذي يمثل العنصر الأساسي في صناعة هياكل الطائرات المركبة ومحركاتها النفاثة لقدرته على تحمل درجات الحرارة العالية؟",
        "answer": "التيتانيوم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العملية الحيوية الطبيعية التي يتم من خلالها إنتاج كائنات جديدة من نفس النوع؟",
        "answer": "تكاثر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الحيوان الّذي لا يستطيع إخراج لسانه من فمه؟",
        "answer": "تمساح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاختلال الوراثي الحاد الذي يؤدي إلى تراكم مخاط لزج وكثيف في الرئتين والجهاز الهضمي، مسبباً انسدادات ومشاكل في الغدد العرقية؟",
        "answer": "التليف الكيسي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي العملية الإدارية والاجتماعية الشاملة التي تهدف إلى دراسة وتحديد رغبات العملاء واحتياجاتهم وتوقعها لتوفير المنتجات المناسبة لهم؟",
        "answer": "التسويق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الخلايا التي تُهاجم الخلايا المصابة في الجهاز المناعي؟",
        "answer": "خلايا تائية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الإمام الذي يُعد مؤسس الدولة السعودية الثانية؟",
        "answer": "الإمام تركي بن عبدالله",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تُسمى عملية إصلاح الأجزاء التالفة أو القديمة من المنازل والمنشآت؟",
        "answer": "الترميم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي عاصمة جمهورية ألبانيا؟",
        "answer": "تيرانا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجهاز القديم الذي كان يُستخدم للتواصل عبر المسافات البعيدة باستخدام إشارات تعتمد على النبضات الكهربائية؟",
        "answer": "التيليغراف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح النفسي الذي يصف ميل الشخص للبحث عن المعلومات التي تؤيد قناعاته المسبقة وتفسيرها لصالحها مع تجاهل أي أدلة تخالفها؟",
        "answer": "التحيز التأكيدي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الظاهرة الفيزيائية التي ترتبط فيها حالة الجسيمات ببعضها لحظياً مهما كانت المسافة الفاصلة بينها؟",
        "answer": "التشابك الكمي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الكلمة العربية الّتي تأتي ملازمة وضد كلمة \"الفرح\"؟",
        "answer": "ترح",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى الاتجاه إلى سلطة قضائية خاصة يتفق عليها المتعاقدون لفض نزاعاتهم بدلاً من المحاكم؟",
        "answer": "التحكيم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو العلم الإنساني الذي يعنى برصد وتسجيل ودراسة الأحداث والوقائع التي مرت بها البشرية عبر الزمان؟",
        "answer": "التاريخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو رئيس الوزراء البريطاني الذي أعلن الحرب على ألمانيا النازية عند اندلاع الحرب العالمية الثانية قبل أن يخلفه وينستون تشرشل؟",
        "answer": "تشامبرلين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "عملية البحث والكشف عن الثروات في باطن الأرض، سواء كانت معادن أو آثار",
        "answer": "التنقيب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُطلق على العملية التي يتبادل فيها طرفان أو أكثر الحوار للوصول إلى اتفاق؟",
        "answer": "تفاوض",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى اضطراب تدفق وانسياب الكلام الذي يصيب الأطفال ويتمثل في تكرار الحروف؟",
        "answer": "تأتأة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى تحول الأراضي الخصبة أو الرعوية إلى مناطق صحراوية قاحلة؟",
        "answer": "تصحر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "إفراد الله سبحانه وتعالى بما يختص به من الربوبية والألوهية والأسماء والصفات",
        "answer": "توحيد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "إدخال مواد ضارة إلى البيئة الطبيعية، مما يسبب خللاً وتغيرات سلبية تجعلها غير آمنة أو غير مناسبة للكائنات الحية",
        "answer": "تلوث",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم العلم الذي يهتم بإتقان نطق حروف القرآن الكريم وأحكام تلاوته؟",
        "answer": "تجويد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الديناصور الأشرس الذي عاش في نهاية العصر الطباشيري؟",
        "answer": "التي ريكس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أكمل العبارة: قالت العرب: من تأنّى نال ما …؟",
        "answer": "تمنى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على توفير المال اللازم لإنشاء مشروع أو تنفيذه؟",
        "answer": "تمويل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مالأكلة التي أوصى بها النبي صل الله عليه وسلم للمريض و الحزين وهي عبارة عن حساء يُصنع من دقيق الشعير ويُمزج مع الحليب والعسل؟",
        "answer": "التلبينة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي العملية الفيزيائية أو الحيوية التي تعني إزالة السطح أو الطبقة الخارجية لشيء ما؟",
        "answer": "تقشير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم العاصمة السياسية والمركز المالي الأكبر لدولة تايوان؟",
        "answer": "تايبيه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الشيء الذي جعله الله سبحانه وتعالى آية وعلامة لبني إسرائيل على ملك طالوت؟",
        "answer": "التابوت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على الأشكال المختلفة لسطح الأرض مثل الجبال والسهول والوديان؟",
        "answer": "تضاريس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على العمل الفني أو الأثري الذي يتميز بجماله وقيمته العالية؟",
        "answer": "تحفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على تحويل الأفكار أو الأشياء إلى مفاهيم غير ملموسة أو رمزية؟",
        "answer": "تجريد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "إلى أي قبيلة عربية ينتمي الفارس والشاعر الشهير عدي بن ربيعة المعروف بـ \"الزير سالم\"؟",
        "answer": "تغلب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي السورة التي سميت على اسم فاكهة؟",
        "answer": "التين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المخلوق أو الشخصية المرعبة التي كانت تُروى في الحكايات الشعبية النجدية القديمة لتخويف الأطفال؟",
        "answer": "تريترا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى كتمان عيب السلعة عن المشتري أو إعطائها صفة غير موجودة فيها؟",
        "answer": "التدليس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاضطراب النمائي الذي يواجه فيه المصابون صعوبة في التواصل الاجتماعي واستخدام اللغة، ويُظهرون سلوكيات مقيدة وتكرارية؟",
        "answer": "التوحد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم الذي أُطلق على أقوى زلزال مُسجل في تاريخ البشرية، والذي ضرب سواحل أمريكا الجنوبية عام 1960 م بقوة 9.5 درجات؟",
        "answer": "تشيلي العظيم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي عاصمة الجمهورية التونسية؟",
        "answer": "تونس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الألقاب الّتي لُقِّب بها الصحابي الجليل عبد الله بن عباس (رضي الله عنه)؟",
        "answer": "ترجمان القران",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُطلق في التاريخ الإسلامي على من لَقِيَ صحابياً ولم يدرك النبي ﷺ؟",
        "answer": "التابعين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الاقتصادي الذي يدل على ارتفاع مستمر في الأسعار وانخفاض قيمة العملة؟",
        "answer": "تضخم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم علم مؤنث يعني النخلة الصغيرة؟",
        "answer": "تالا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم العملية التي يصل فيها المحلول إلى أقصى كمية من المذاب؟",
        "answer": "التشبع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الدولة الأفريقية الحبيسة التي نالت استقلالها الكامل عن الاستعمار الفرنسي في عام 1960؟",
        "answer": "تشاد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عملية كيميائية وفيزيائية يتم فيها تسجيل الصورة عبر تعريض سطح حساس للضوء للأشعة المنعكسة من المشهد",
        "answer": "التصوير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تعني استعمال الحق في غير موضعه او زيادة مضرة",
        "answer": "تعسف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مخترع المصباح الكهربائي؟",
        "answer": "توماس اديسون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المكوّن الإلكتروني الصغير الذي يُستخدم كمضخم أو مفتاح في الدوائر الكهربائية؟",
        "answer": "ترانزستور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الذي يُطلق على المساهمة الإرادية التي يقدمها الفرد لخدمة المجتمع وتنميته دون انتظار عائد مالي أو مقابل؟",
        "answer": "التطوع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم العمل الفني الذي يُشكّل عادةً من الحجر أو المعدن ليمثّل شكل إنسان أو حيوان؟",
        "answer": "تمثال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على الموروث الثقافي والفني والتاريخي الذي تنتقل قيمه عبر الأجيال؟",
        "answer": "تراث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما نوع الأشعة المستخدمة في التصوير الفوتوغرافي للمسافات الطويلة وفي الأجواء الضبابية؟",
        "answer": "تحت الحمراء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم البحر التاريخي القديم الذي كان يفصل بين القارات قبل ملايين السنين ونشأت من جفافه البحار الحالية؟",
        "answer": "تيثس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الكائن الأسطوري الخيالي الذي يُعد رمزاً ثقافياً شهيراً في المهرجانات والأعياد الصينية؟",
        "answer": "التنين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الجهاز الإلكتروني المخصص لاستقبال البث المرئي والمسموع عن بعد؟",
        "answer": "التلفاز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الجيولوجي الذي يعبر عن عملية تآكل وتفتت الصخور والتربة على سطح الأرض، ونقلها من مكان لآخر بفعل الرياح والمياه؟",
        "answer": "التعرية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُستخدم لوصف حركة الماء أو الهواء أو الكهرباء في اتجاه معين؟",
        "answer": "تيار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على عملية تسجيل الأحداث أو المعلومات كتابةً للحفظ أو النشر؟",
        "answer": "تدوين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُطلق على التغير الكيميائي الذي يحدث عند خلط مادتين أو أكثر؟",
        "answer": "تفاعل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الاسم الحقيقي لجنكيز خان؟",
        "answer": "تيموجين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الرياضة العالمية التي تُلعب فردياً أو زوجياً على ملعب مستطيل، وتعتمد على ضرب كرة صغيرة فوق شبكة مركزية بواسطة المضارب؟",
        "answer": "التنس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم النوع الأدبي الذي يصوّر مآسي الإنسان ويثير الحزن والتعاطف؟",
        "answer": "تراجيديا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الواقعة في أمريكا الجنوبية والتي تُصنف كأطول دولة في العالم من حيث الامتداد الطولي الساحلي؟",
        "answer": "تشيلي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الذي يُطلق على عملية تعليم المفترسات والحيوانات وتدريبها للاستجابة للأوامر والتعايش مع الإنسان؟",
        "answer": "ترويض",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المفهوم الذي يُطلق على عملية نقل النص أو المضمون من لغته الأصلية إلى لغة أخرى مع الحفاظ على صياغته ومعناه؟",
        "answer": "الترجمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى الطهارة بالتراب كبديل عن الوضوء أو الغسل",
        "answer": "التيمم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى صوت البلبل؟",
        "answer": "تغريد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على العملية التي تهدف إلى تحسين قدرات الفرد للاندماج في المجتمع أو سوق العمل؟",
        "answer": "تأهيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على قدرة الشخص على نقل أفكاره ومشاعره بالكلام أو الكتابة؟",
        "answer": "تعبير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الضريح التاريخي المبني بالكامل من الرخام الأبيض في الهند، والذي شيده الإمبراطور شاه جيهان ويُعد من عجائب الدنيا السبع؟",
        "answer": "تاج محل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الكلمة التي تُعبّر عن اتصال سطحين ببعضهما عند التقائهما مباشرة؟",
        "answer": "تلامس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي السورة الوحيدة في القرآن الكريم الّتي لا تبدأ بالبسملة؟",
        "answer": "سورة التوبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مصطلح فيزيائي يصف تكرار الذبذبة خلال مدة معينة؟",
        "answer": "التردد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الحجر الطبيعي الذي يتصدر قائمة المعادن في اللين والنعومة ويُصنف بدرجة (1) في مقياس موس؟",
        "answer": "التلك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى تقديم الحجج والأدلة والدفاع أمام المحكمة في النزاعات القضائية؟",
        "answer": "ترافع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُطلق على الحالة التي تتطلب بذل جهد أو مواجهة صعوبة لتحقيق هدف معين؟",
        "answer": "تحدي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد شعراء الجاهلية ويصنف من صعاليك العرب",
        "answer": "تأبط شرًّا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على إعادة فعل أو قول شيء مرة بعد مرة؟",
        "answer": "تكرار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على تطبيق المعرفة العلمية لتطوير الأدوات والأنظمة التي تسهّل حياة الإنسان؟",
        "answer": "تكنولوجيا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي عاصمة جورجيا؟",
        "answer": "تبليسي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ح",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "شاعر النبي صلى الله عليه وسلم ؟",
        "answer": "حسان بن ثابت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سورة في القرآن الكريم ورد فيها ذكر الذباب ؟",
        "answer": "الحج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أشهر الكرماء في التاريخ العربي ؟",
        "answer": "حاتم الطائي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على المطبوعة التي تصدر كل عام ؟",
        "answer": "حولية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على صوت المحتضر ؟",
        "answer": "حشرجة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "لقب أطلق على الصحابي الجليل عبد الله بن الزبير ؟",
        "answer": "حمامة المسجد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابية اودعت عندها النسخة الاولى من المصحف الشريف ؟",
        "answer": "حفصة بنت عمر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي جليل انتدبه رسول الله صلى الله عليه وسلم لأتيه بخبر المشركين في غزوة الأحزاب بعد أن هبت ريح دمرت أمتعتهم وشتت جمعهم ؟",
        "answer": "حذيفة بن اليمان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "غزوة غزاها النبي صلى الله عليه وسلم في السنة الثامنة للهجرة ؟",
        "answer": "حنين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مدينة سورية يوجد فيها قبر الصحابي الجليل خالد بن الوليد ؟",
        "answer": "حمص",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على شدة الندم على ما فات ؟",
        "answer": "الحسرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من عجائب الدنيا السبع ؟",
        "answer": "حدائق بابل المعلقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كل قول أو فعل أو تقرير نسب الى النبي صلى الله عليه وسلم ؟",
        "answer": "حديث",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "قال الله تعالى في سورة التحريم مخاطباً زوجتين لرسول الله صلى الله عليه وسلم (( إِن تَتُوبَا إِلَى اللَّهِ فَقَدْ صَغَتْ قُلُوبُكُمَا )) إحداهما عائشة رضي الله عنها فمن الأخرى ؟",
        "answer": "حفصة بنت عمر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي السوره التي فيها سجدتين ؟",
        "answer": "الحج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "المكان الذي كانت تسكنه إرم ذات العماد ؟",
        "answer": "حضرموت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي غسلته الملائكة ؟",
        "answer": "حنظلة بن عامر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "زوج حليمة السعدية مرضعة رسول الله صلى الله عليه وسلم ؟",
        "answer": "الحارث بن عبد العزى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لقب لعلى بن ابي طالب رضى الله عنه لقبته به أمه ؟",
        "answer": "حيدرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "شاعر اشتهر بالهجاء حبسه أمير المؤمنين عمر بن الخطاب رضي الله عنه وقيل : أنه اشترى منه أعراض المسلمين بثلاثة آلاف درهم وهدد إن عاد قطع لسانه ؟",
        "answer": "الحطيئة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو صاحب سر النبي صلى الله عليه وسلم ؟",
        "answer": "حذيفة بن اليمان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "امرأة في الجاهلية ضرب بها المثل في صدق الخبر ؟",
        "answer": "حذام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "بم وصف القرآن الكريم : أم جميل بنت حرب ؟",
        "answer": "حمالة الحطب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لقب لقب به الخليفة الأموي مروان بن محمد ؟",
        "answer": "الحمار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حامل رسالة رسول الله صلى الله عليه وسلم إلى المقوقس ملك مصر ؟",
        "answer": "حاطب بن أبي بلتعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "حرام ومدمر لعقل الانسان ؟",
        "answer": "حشيش",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أضخم الحيوانات اللافقرية ؟",
        "answer": "الحبار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من القائل : الأم مـدرسـة إذا أعـددتـها *** أعـددت شـعـباً طـيـب الأعـراق ؟",
        "answer": "حافظ إبراهيم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الذي بنى الكعبة المشرفة بناءها الحالي ؟",
        "answer": "الحجاج بن يوسف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو جمع كلمة : حرباء ؟",
        "answer": "حرابي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أقسام الكلمة ؟",
        "answer": "الحرف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي صفة للكرم الزائد ؟",
        "answer": "حاتمي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الذي ينام بحذائه ؟",
        "answer": "الحصان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من أصحاب القراءات السبع للقرآن الكريم ؟",
        "answer": "حمزة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وحدة لقياس القدرة تساوي 550رطل/ قدم في الثانية ويقاس بها قوة المحركات ؟",
        "answer": "الحصان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الشي الوحيد الذي يراه الأعمى ؟",
        "answer": "الحلم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "اسم الشيماء أخت الرسول صلى الله عليه وسلم من الرضاعة ؟",
        "answer": "حذافة بنت الحارث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو اصغر اعمام النبي صلى الله عليه وسلم؟",
        "answer": "حمزة بن عبدالمطلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يطلق على صغير الضب ؟",
        "answer": "الحسل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو العالم العربي الذي أكتشف انكسار الضوء ؟",
        "answer": "الحسن بن الهيثم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الحاكم الذي أمر الحفاظ بعد آيات و كلمات و حروف القرآن الكريم ؟",
        "answer": "الحجاج بن يوسف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من تلاميذ الإمام الشافعي , يلقب بالشيباني , آراءه الفقهية مستمدة مباشرة من الحديث الشريف ، له مسند باسمه ، اشتهر مذهبه بالمذهب ................ ؟",
        "answer": "الحنبلي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "شاعر جاهلي من أصحاب المعلقات اشتهر بمدافعته عن قبيلته أمام عمرو بن هند ملك الحيرة ؟",
        "answer": "الحارث بن حلزة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما أسم المدينة الملقبة بالشهباء ؟",
        "answer": "حلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "يطلق على حركة المقاومة الإسلامية في فلسطين ؟",
        "answer": "حماس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الحيوان الذي يعادل وزنه 25 فيلاً ؟",
        "answer": "الحوت الأزرق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي جليل مات يوم بئر معونة لما طعن من ورائه بحربة قال بعد أن أصيب : ( فزت ورب الكعبة ) ؟",
        "answer": "حرام بن ملحان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى شفة الفرس ؟",
        "answer": "حجفلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المادة الوراثية التي تحمل الشيفرة الجينية للكائنات الحية؟",
        "answer": "الحمض النووي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الزاوية الأصغر من 90 درجة؟",
        "answer": "حادة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أول شهيد في الإسلام؟",
        "answer": "الحارث بن أبي هالة (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مركز في رياضة كرة القدم يسمى نصف الفريق؟",
        "answer": "حارس مرمى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الأنبوب الذي يربط الجنين بالمشيمة لنقل الأكسجين والغذاء إليه؟",
        "answer": "الحبل السري",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو المصطلح الّذي يطلق على المدة الزمنية الطويلة من الدهر غير محددة بدقة، قد تعني سنة أو عقوداً عديدة؟",
        "answer": "حقبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الأنبوب الطويل الّذي يتكون من أعصاب تمتدُّ من الدماغ نزولاً إلى الظهر؟",
        "answer": "الحبل الشوكي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى الطوق الحديدي الذي يُثبت في أسفل حافر الحصان لحمايته؟",
        "answer": "حذوة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللقب الذي أطلقه القرآن الكريم على أنصار نبي الله عيسى (عليه السلام) وتلاميذه المخلصين؟",
        "answer": "الحواريون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أسماء السيف",
        "answer": "حسام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم الذي يُطلق على سلسلة من العمليات العسكرية التي شنها الأوروبيون على المشرق الإسلامي في العصور الوسطى؟",
        "answer": "الحملات الصليبية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي محافظة سعودية يُقام سنوياً مهرجان الحمضيات؟",
        "answer": "محافظة الحريق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الضيق والمشقة التي لا تُحتمل عادة، ويرخص الشرع لها حال وجودها؟",
        "answer": "الحرج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على القول العميق الذي يحتوي على تجربة أو درس يُستفاد منه في الحياة؟",
        "answer": "حكمة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الأنبوب الذي ينقل البول من الكلى إلى المثانة؟",
        "answer": "حالب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العضلة الرئيسية القوية التي تفصل بين التجويف الصدري والبطني، وتلعب دورًا مهمًا في عملية التنفّس؟",
        "answer": "الحجاب الحاجز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم الأتباع المخلصين لعيسى ابن مريم عليه السلام وعددهم 12 شخصًا؟",
        "answer": "الحواريين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الخطوط التي تفصل بين منطقتين جغرافيتين أو سياسيتين متجاورتين؟",
        "answer": "حدود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الزاحف المشهور بقدرته الفائقة على تغيير لون جلده للتخفي أو التواصل؟",
        "answer": "الحرباء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح العسكري الذي يُطلق على عزل مدينة أو موقع معين وقطع الإمدادات والمنافذ عنه لإجبار أهله أو قواته على الاستسلام؟",
        "answer": "الحصار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أكبر محافظة في الجمهورية اليمنية من حيث المساحة الجغرافية؟",
        "answer": "حضرموت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم أكبر أولاد عبدالمطلب ابن هاشم وكان يكنى به؟",
        "answer": "الحارث",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى العنصر الكيميائي الذي يرمز له بالرمز \"Fe\"؟",
        "answer": "الحديد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مايطلق على الحوادث أو النتائج التي تحدث للإنسان دون تخطيط أو توقع وقد تكون جيدة أو سيئة؟",
        "answer": "حظ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "صحابي جليل صاحب سر رسول الله ﷺ حيث أطلعه النبي على أسماء المنافقين",
        "answer": "حذيفة بن اليمان (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى البرهان أو المنطق الذي يُستخدم لدعم رأي أو إثبات قضية؟",
        "answer": "حجة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الجليل الذي اختاره الرسول ﷺ ليحمل رسالته ودعوته إلى المقوقس ملك مصر وعظيم القبط؟",
        "answer": "حاطب بن أبي بلتعة (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المدينة السعودية العريقة التي تقع في شمال نجد وعُرفت قديماً بلقب \"مفتاح الصحراء\"؟",
        "answer": "حائل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا كان يُطلق على قطاع الطرق واللصوص قديماً؟",
        "answer": "حنشل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أحد أشهر أسواق دمشق القديمة",
        "answer": "الحميدية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الشخص الذي اشتهر تاريخياً بلقب طبيب العرب ويُعد أقدم أطبائهم؟",
        "answer": "الحارث بن كلدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المفهوم الذي يعني عدم الانحياز أو الميل في الموقف إلى طرف أكثر من آخر؟",
        "answer": "الحياد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اسم أم أشعب أمير الطفيليين، كانت مولاة لأسماء بنت أبو بكر رضي الله عنها؟",
        "answer": "حميدة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل غسلته الملائكة يوم وفاته في معركة أحد، فعُرف بلقب غسيل الملائكة",
        "answer": "حنظلة بن أبي عامر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على النسيج الناعم الّذي يُنتج من دودة القز؟",
        "answer": "حرير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اللفظ القرآني الذي أُطلق على نساء أهل الجنة الحسان؟",
        "answer": "الحور العين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل قال عنه النبي ﷺ: \"إِنَّ ابنِي هذا سَيِّدٌ ، يُصْلِحُ اللهُ بهِ بين فِئَتَيْنِ من المسلمينَ\"",
        "answer": "الحسن بن علي (رضي الله عنهما)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو المدافع السعودي الذي توج بجائزة أفضل لاعب في آسيا لعام 2005؟",
        "answer": "حمد المنتشري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تُسمى جغرافياً الدول المحاطة باليابسة بالكامل وليس لها أي منفذ بحري؟",
        "answer": "الحبيسة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم القديم لمدينة إثيوبيا؟",
        "answer": "الحبشة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مايطلق على الشوق العاطفي إلى ماضٍ جميل أو مكان محبوب؟",
        "answer": "حنين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد العسكري القرطاجي الأسطوري الذي باغت الإمبراطورية الرومانية بعبور جبال الألب بجيشه وفيالته الحربية؟",
        "answer": "حنبعل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم وحدة القياس التقليدية المستخدمة للتعبير عن معدل بذل الشغل وقياس قوة أداء محركات السيارات؟",
        "answer": "الحصان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الحالة التي تنتج عن ارتفاع درجة حرارة الجسم عن المعدل الطبيعي؟",
        "answer": "حمى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المحافظة الساحلية في منطقة تبوك التي تُعد وجهة سياحية، ويمكن من شواطئها مشاهدة سواحل مصر وفلسطين؟",
        "answer": "حقل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الّذي يعني الشكر الخالص لله؟",
        "answer": "الحمد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الإنسان الذي يمتلك عقلاً راجحاً، وبصيرة ثاقبة، وقدرة على التفكير بأسلوب منطقي ومستقيم",
        "answer": "حَصيف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما يطلق على النزاع المسلح بين دولتين أو أكثر غالبًا لتحقيق أهداف سياسية أو اقتصادية؟",
        "answer": "حرب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الصحابي الجليل الذي أرسله النبي ﷺ برسالة إلى مسيلمة الكذاب، فقام مسيلمة بتقطيعه إرباً إرباً لثباته على دينه؟",
        "answer": "حبيب بن زيد بن عاصم (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الطريق البري التجاري القديم الذي يربط بين الصين ودول الشرق الأوسط وأوروبا؟",
        "answer": "طريق الحرير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المعنى المقصود بكلمة \"الديدبان\" في اللغة العربية؟",
        "answer": "الحارس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الفارس والشاعر الجاهلي الذي اعتزل حرب البسوس في بدايتها قائلاً عبارته التي أصبحت مثلاً: \"هذا أمر لا ناقة لي فيه ولا جمل\"؟",
        "answer": "الحارث بن عباد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يعبر عن مرور سنة كاملة في فقه المعاملات والزكاة؟",
        "answer": "الحَوْل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشخص الذي ينحني له الملوك والأمراء؟",
        "answer": "الحلاق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تعني كلمة \"الْخَان\" في اللقب التاريخي الذي كان يُطلق على حكام المغول والسلاطين العثمانيين؟",
        "answer": "الحاكم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم أكبر كائن حي على وجه الأرض؟",
        "answer": "الحوت الأزرق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مادة صلبة طبيعية تُستخرج من الأرض وتُستخدم في البناء والنحت؟",
        "answer": "حجر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الجهاز الأساسي المستخدم لتشغيل البرمجيات وتخزين ومعالجة البيانات؟",
        "answer": "حاسوب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الحيوان الّذي ينقل بيته فوق ظهره؟",
        "answer": "الحلزون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الثنائي للشاعر الملقب بشاعر النيل؟",
        "answer": "حافظ إبراهيم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل لُقب بشاعر الأنصار و سمي بشاعر الرسول صلى الله عليه و سلم؟",
        "answer": "حسان بن ثابت (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم يطلق على قطعة من الأرض تُستخدم للزراعة أو الرعي؟",
        "answer": "حقل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المادة الطبيعية التي تُستخرج من أوراق نبات وورد استخدامها في الأحاديث للتداوي والاستخدامات التجميلية؟",
        "answer": "الحناء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الخاصية التي تمكن الكائنات الحية من إدراك العالم الخارجي، مثل البصر والسمع واللمس؟",
        "answer": "الحاسة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل المثل: القول ما قالت...",
        "answer": "حَذام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو عم النبي محمد صلى الله عليه وسلم ولُقب بـ\"أسد الله وسيد الشهداء\"؟",
        "answer": "حمزة بن عبدالمطلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المعركة الشهيرة التي وقعت عام 1309 هـ وأدت إلى انتهاء الدولة السعودية الثانية؟",
        "answer": "معركة حريملاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المعركة الفاصلة التي وقعت عام 1187م، وانتصر فيها المسلمون بقيادة صلاح الدين الأيوبي (رحمه الله) واستعادوا بعدها القدس؟",
        "answer": "حطين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى القطع الصغيرة التي تغطي جلود الزواحف والأسماك لحمايتها؟",
        "answer": "حراشف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الصحابي الجليل وعم النبي ﷺ الذي لُقِّب بأسد الله؟",
        "answer": "حمزة بن عبد المطلب (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الرواية القرآنية الأكثر انتشاراً وشيوعاً في معظم أقطار العالم الإسلامي اليوم، وتُنسب لتلميذ الإمام عاصم بن أبي النجود؟",
        "answer": "رواية حفص عن عاصم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أطلق الله تعالى على نبيه يونس عليه السلام اسم ذو النون، فماذا تعني كلمة النون؟",
        "answer": "الحوت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الهداف التاريخيّ لنادي الاتحاد السعودي؟",
        "answer": "حمزة إدريس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "سفينة حربية كبيرة لها سطح واسع تستخدمه الطائرات للإقلاع والهبوط",
        "answer": "حاملة طائرات",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المدينة التاريخية التي كانت تُدعى \"بيرويا\" وعُرفت بازدهارها ومكانتها الاستراتيجية في عهد السلاجقة؟",
        "answer": "حلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أداة تستخدم لربط الأشياء وحزمها، كانت تُصنع من شعر الحيوانات أو ألياف النباتات قبل ظهور المواد الحديثة",
        "answer": "الحبل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي تعني غزل الثوب، وتُطلق مجازاً على تدبير المؤامرات؟",
        "answer": "حاك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هيئة أمنية مهمتها حماية الدولة من عمليات الاختراق غير المشروع والتسلل والتهريب",
        "answer": "حرس الحدود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يعني تمني زوال النعمة عن الغير لتصبح له هو؟",
        "answer": "الحسد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يطلق على التقدم الثقافي والعلمي والفني الذي تُحققه أمة أو مجتمع عبر الزمن؟",
        "answer": "حضارة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من النباتات البقولية الّتي تستخدم في العديد من الأكلات العربية.",
        "answer": "حمص",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو كل حائل وساتر بين شيئين",
        "answer": "الحاجز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يُطلق على اتفاق بين أطراف متعددة لتحقيق هدف مشترك سياسي أو عسكري أو اقتصادي؟",
        "answer": "حلف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أثقل شيء يُوضع في ميزان العبد المؤمن يوم القيامة؟",
        "answer": "حسن الخلق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى أشد درجات الندم والحزن على مافات؟",
        "answer": "الحسرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عملية زراعية هدفها تهيئة التربة للزراعة وإزالة الأعشاب",
        "answer": "الحِراثة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "اسم يطلق على مكة والمدينة المنورة ويشير إلى مكانتهما العظيمة في الإسلام",
        "answer": "الحرمان الشريفان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد ألقاب الصحابي الجليل عبدالله بن عباس (رضي الله عنه) وسمي بها لسعة علمه بفقه الدين وتفسير القرآن",
        "answer": "حبر الأمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى النباتات التي تنمو تلقائياً في غير موضعها المرغوب؟",
        "answer": "الحشائش",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما يطلق على تبادل الكلام بين شخصين أو أكثر بهدف التفاهم أو تبادل الآراء؟",
        "answer": "حوار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المخلوق الخيالي في الأساطير الشعبية الخليجية الذي كان يُخوف به الأطفال لمنعهم من الخروج وقت الظهيرة؟",
        "answer": "حمارة القايلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي السورة الكريمة التي تحتوي على سجدتين؟",
        "answer": "سورة الحج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ز",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من أول من سل سيفا في الإسلام ؟",
        "answer": "الزبير بن العوام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو اهتزاز الأرض و ارتجافها ؟",
        "answer": "زلزال",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بماذا لقب الرسول صلى الله عليه وسلم سورتي البقرة وآل عمران ؟",
        "answer": "الزهروان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على الوقت قليلا كان أم كثير ؟",
        "answer": "الزمن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مادة سوداء مستمدة من المواد القطرانية تذيبها الحرارة و تستخدم في رصف الطرق ؟",
        "answer": "الزفت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "نبي صام عن الكلام ثلاثة ايام ؟",
        "answer": "زكريا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "يطلق على فرخ الحمام و أحد أنواع البلح الأحمر ؟",
        "answer": "زغلول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بماذا كان يلقب علي بن الحسين بن علي بن أبي طالب ؟",
        "answer": "زين العابدين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الكفر باطنا مع التظاهر بالإيمان ؟",
        "answer": "زندقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى صوت العصافير ؟",
        "answer": "زقزقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "طعام أهل النار ؟",
        "answer": "الزقوم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو ترجمان النبي صلى الله عليه وسلم ؟",
        "answer": "زيد بن ثابت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مرض تآكل خلايا المخ مع تقدم العمر فيصاب الإنسان بالخرف ؟",
        "answer": "الزهايمر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حجر كريم يشبه الزمرد و له ألوان كثيرة ؟",
        "answer": "زبرجد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أكبر بنات النبي صلى الله عليه وسلم ؟",
        "answer": "زينب رضي الله عنها",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة : بمعنى رخيص ؟",
        "answer": "زهيد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الملائكة المكلفة بدفع أهل النار إليها ؟",
        "answer": "الزبانية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو اللقب الذي أطلق على سيدة نساء أهل الجنة ؟",
        "answer": "الزهراء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو حواري الرسول صلى الله عليه وسلم ؟",
        "answer": "الزبير بن العوام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم امرأة عزيز مصر التي راودت يوسف عليه السلام عن نفسه ؟",
        "answer": "زليخة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "احد أصحاب المعلقات العشر ؟",
        "answer": "زهير بن أي سلمى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي قطعة من الحديد حلزونية الالتواء تتمتع بخاصية التمدد و المرونة و تستعمل في بعض الصناعات ؟",
        "answer": "الزنبرك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نوع من أنواع النباتات يستعمله الإنسان كشراب بعد غليه ؟",
        "answer": "زنجبيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "طبيب ومعلم كان أول من استخدم الخيوط الجراحية الــ ؟",
        "answer": "الزهراوي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو حجر كريم شفاف شديد الخضرة و أشده خضرة أجوده و أصفاه جوهرا ؟",
        "answer": "الزمرد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الكتب السماوية ؟",
        "answer": "الزبور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى صوت الأسد ؟",
        "answer": "زئير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو تحريك الشيء بشدة و قوة ؟",
        "answer": "زعزعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يابس و صافي كالماء ولد في النار و إذا عاد إليها انهار ؟",
        "answer": "الزجاج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أسماء ملائكة العذاب التي ذكرت في سورة العلق ؟",
        "answer": "الزبانية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أنواع الخشب و أجودها يصنع منه الأثاث ؟",
        "answer": "الزان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "داهية من دُهات العرب كانت أمه جارية وقد تولى حكم العراق ؟",
        "answer": "زياد بن أبيه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "صحابي ورد اسمه صراحة في القران الكريم ؟",
        "answer": "زيد بن حارثة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "المعدن الوحيد الذي يوجد في حالة سائلة ؟",
        "answer": "زئبق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي شجرة لها زهر أبيض طيب الرائحة ؟",
        "answer": "الزيزفون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو مادة فلزية بيضاء تميل إلى الزرقة تستخرج من الأرض و تدخل في صناعات مختلفة مستقلة بنفسها أو مسبوكة مع غيرها ؟",
        "answer": "الزنك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هى اليهودية التى حاولت قتل النبي صلى الله عليه وسلم بالسم ؟",
        "answer": "زينب بنت الحارث",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو ما بين مفصل الكوع و الكتف في جسم الإنسان ؟",
        "answer": "زند",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو زوج الصحابية أسماء بنت أبي بكر رضي الله عنهما ؟",
        "answer": "الزبير بن العوام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الاسم القديم لجمهورية الكونغو في إفريقيا ؟",
        "answer": "زائير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة : هو الأبيض المنير ؟",
        "answer": "زهير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي عاصمة دولة زينجبار في أفريقيا ؟",
        "answer": "زينجبار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "زوجة هارون الرشيد عرفت باعمال الخير والاحسان ؟",
        "answer": "زبيدة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من القبائل المشهورة في أفريقيا يتميزون بشدتهم في الحرب ؟",
        "answer": "الزولو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة : بمعنى العقيلة ؟",
        "answer": "الزوجة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي السلسلة الحديدية المسننة تدخل في بعض الصناعات ؟",
        "answer": "زنجير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الأسم الآخر الذي يطلق على المصران الأعور ؟",
        "answer": "الزائدة الدودية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي أول امرأة في التاريخ اكتحلت بالإثمد ؟",
        "answer": "زرقاء اليمامة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم يطلق على الدوامة والإعصار",
        "answer": "زوبعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما العنصر الكيميائي الذي يُستخدم في صناعة البطاريات وطلاء المعادن لحمايتها من الصدأ؟",
        "answer": "زنك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أطول حيوان بري ثديي في العالم ويعيش في مناطق السافانا والغابات المفتوحة بأفريقيا",
        "answer": "الزرافة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجزيرة التابعة لتنزانيا التي كانت مركزًا هامًا لتجارة التوابل؟",
        "answer": "زنجبار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الذي تبناه الرسول صلى الله عليه وسلم قبل تحريم التبني وقاد جيش مؤتة؟",
        "answer": "زيد بن حارثة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المفهوم الذي شغل الفلاسفة منذ القدم، ويُناقش كظاهرة نفسية وميتافيزيقية مرتبطة بالتغير والحركة؟",
        "answer": "زمن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "قارب صغير أو مركبة مائية خفيفة تُستخدم للتنقل",
        "answer": "زورق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللفظ القرآني الذي يُطلق على البُسُط والفرش الفاخرة ذات الوبر الكثيف؟",
        "answer": "الزرابي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الذي يُطلق على نقطة التقاء خطين مستقيمين في الهندسة؟",
        "answer": "زاوية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تعني المنع أو النهي بشدة، ويُستخدم أيضًا بمعنى التوبيخ أو الصياح للردع",
        "answer": "زجر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "رغوة بيضاء تتكون على سطح مياه البحر والشواطئ نتيجة اختلاط مياه البحر بالأملاح",
        "answer": "زَبد البحر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الغدة المناعية التي تقع في الصدر خلف عظمة القص، وتلعب دوراً حاسماً في تطوير الجهاز المناعي خلال مرحلتي الطفولة والشباب؟",
        "answer": "الغدة الزعترية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اللفظ القرآني الذي أُطلق على ملائكة العذاب الموكلين بنار جهنم؟",
        "answer": "الزبانية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم النبات العشبي البري ذو الرائحة العطرية النفاذة، والذي يُعد عنصراً رئيسياً ولا غنى عنه في فطور ومطبخ بلاد الشام؟",
        "answer": "زعتر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم عاصمة دولة كرواتيا الأوروبية؟",
        "answer": "زغرب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي تعني مال وانحرف، وتُقال للبصر إذا تعب وضعف؟",
        "answer": "زاغ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "عملية جراحية متقدمة لاستنبات أعضاء بشرية عن طريق استبدال العضو التالف بآخر سليم",
        "answer": "زراعة الأعضاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المادة الشفافة التي تُصنع عادة من الرمل وتُستخدم في النوافذ والعدسات؟",
        "answer": "زجاج",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم العلمي للبويضة المخصبة؟",
        "answer": "زيجوت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أول قائد استشهد من القادة الثلاثة في معركة مؤتة؟",
        "answer": "زيد بن حارثة (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى فرع الهندسة الذي يختص بمجالات المياه والري والآلات الزراعية وتطوير بيئاتها؟",
        "answer": "الهندسه الزراعيه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "عنب مجفف غني بالطاقة والألياف والمعادن",
        "answer": "زبيب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على من يُظهر الإسلام ويُخفي الكفر، وكان يُسمّى في عهد النبي ﷺ منافقًا؟",
        "answer": "زنديق",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "احتفال يعتبر عرف اجتماعي لتوثيق الاقتران بين الزوجين، وتتعدد مظاهره وتفاصيله حسب العادات والتقاليد",
        "answer": "زفاف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما يسمى العدد الذي يقبل القسمة على 2 بدون كسور؟",
        "answer": "زوجي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو حواري الرسول صلى الله عليه وسلم وابن عمته وأحد العشرة المبشرين بالجنة؟",
        "answer": "الزبير بن العوام (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الكوكب الوحيد في المجموعة الشمسية الذي يومه أطول من سنته؟",
        "answer": "الزهرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل، كاتب الوحي، وجامع القرآن في عهد أبي بكر، وهو الذي تولى كتابة المصحف في عهد عثمان",
        "answer": "زيد بن ثابت (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المعركة الّتي انتصر فيه جيوش السلطان يوسف بن تاشفين انتصارًا عظيمًا مما أنقذ الوجود الإسلامي في الأندلس؟",
        "answer": "الزلاقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نبات أشتهر قديمًا بعلاج سوء الهضم والغثيان ويتميز بنكهة لاذعة ويشتهر بشربه مع الشاي",
        "answer": "زنجبيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الركن الثالث من أركان الإسلام والذي يمثل الصدقة المالية الواجبة والمحددة شرعاً؟",
        "answer": "الزكاة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نبات يعتبر أغلى التوابل في العالم ويتميز بصبغة صفراء ورائحة عطرية نفاذة ويضيف نكهة للطعام",
        "answer": "زعفران",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح العربي الذي يطلق على البرد الشديد؟",
        "answer": "زمهرير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المرض العصبي الذي يُسبب تدهورًا تدريجيًا في الذاكرة والوظائف العقلية؟",
        "answer": "زهايمر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي إحدى زوجات النبي محمد ﷺ والتي نزل فيها أمر الله بزواج النبي صلى الله عليه وسلم منها؟",
        "answer": "زينب بنت جحش",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وعاء فخاري كبير الحجم يستخدم قديمًا لتخزين المياه وتبريدها",
        "answer": "زير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الظاهرة الطبيعية التي تنتج عن حركة الصفائح الأرضية وتُسبب اهتزاز سطح الأرض؟",
        "answer": "زلزال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم نوع الشعر الشعبي المُغنّى والذي يتميز بالارتجال وغالبًا ما يُستخدم في المهرجانات؟",
        "answer": "زجل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الذي يعني الابتعاد عن متع الدنيا طلباً للآخرة؟",
        "answer": "الزهد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو المدرب درب كل من فريقي الهلال والنصر خلال ثلاث سنوات؟",
        "answer": "زوران ماميتش",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو المعدن الوحيد الذي يوجد في حالة سائلة عند درجة حرارة الغرفة القياسية، ويتميز بلونه الفضي؟",
        "answer": "الزئبق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "لعبة في حدائق الأطفال تتكون من منحدر أملس للإنزلاق عليه",
        "answer": "زحليقة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد والوالي الأموي الذي عُد تاريخياً أحد دهاة العرب الأربعة في الإسلام؟",
        "answer": "زياد بن أبيه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى تحرك الجيوش نحو العدو؟",
        "answer": "زحف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مادة دهنية تستخرج من الحليب وتُتنج عن طريق خض اللبن المتخمر",
        "answer": "زبدة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "دولة أفريقية غير ساحلية كانت تُعرف سابقاً باسم روديسيا الشمالية",
        "answer": "زامبيا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو المفهوم الفيزيائي الذي يدمج الأبعاد المكانية الثلاثة مع البعد الزمني في نسيج واحد رباعي الأبعاد؟",
        "answer": "الزمكان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشاعر الجاهلي الحكيم صاحب المعلقة الشهيرة التي نظمها لمجتبى السلم وحقن دماء قبيلتي عبس وذبيان؟",
        "answer": "زهير بن أبي سلمى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الفن الذي يعتمد على التكرار الهندسي والنباتي للزينة، ويُستخدم بكثرة في العمارة الإسلامية؟",
        "answer": "زخرفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم المعروف والمشهور لصوت الأسد؟",
        "answer": "الزئير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي أم المؤمنين وزوجة الرسول ﷺ التي لُقبت بـ \"أم المساكين\" نظير كرمها الشديد وعطفها على الفقراء؟",
        "answer": "زينب بنت خزيمة (رضي الله عنها)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المركب المعدني شديد السُمية الذي كان يُستخدم قديماً في الاغتيالات وتركيب السموم؟",
        "answer": "زرنيخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي المهندسة المعمارية العراقية الشهيرة التي صممت مباني عصرية مميزة حول العالم وفازت بجائزة بريتزكر؟",
        "answer": "زها حديد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى الممر أو الطريق الضيق والمنعزل الواقع بين البيوت في المدن القديمة؟",
        "answer": "زقاق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الكتاب السماوي الذي أنزل على نبي الله داوود عليه السلام؟",
        "answer": "الزبور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الحالة التي تتسم بالكبر والفخر والإعجاب بالنفس؟",
        "answer": "زهو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في عالم الألعاب يعتبر خصما قويا يتطلب هزيمته استراتيجية ومهارة عالية وغالبًا يأتي في نهاية المرحلة",
        "answer": "زعيم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المعركة التي انتصر فيها المرابطون في الأندلس بقيادة يوسف بن تاشفين على ألفونسو السادس؟",
        "answer": "الزلاقة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو البعد الرابع في النظرية النسبية لأينشتاين؟",
        "answer": "الزمن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الشجرة الملعونة التي ذُكرت في القرآن الكريم، وجُعلت طعامًا لأهل النار؟",
        "answer": "الزقوم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مصطلح بمعنى الميل والإنحراف عن الحق",
        "answer": "زيغ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُسمى الزر أو القطعة الصغيرة المستديرة المستخدمة لإغلاق الثياب والملابس؟",
        "answer": "زرار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد أهم المحاصيل في فلسطين وتشتهر بكونها شجرة مباركة وتعتبر أحد رموزها",
        "answer": "زيتون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الشائع للعدوى الفيروسية التي تصيب الجهاز التنفسي العلوي وتسبب سيلان الأنف واحتقان الحلق؟",
        "answer": "الزكام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هي الشخصية التاريخية العربية التي قيل إنها أول امرأة في التاريخ اكتحلت بالإثمد؟",
        "answer": "زرقاء اليمامة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول من سل سيفه في سبيل الله؟",
        "answer": "الزبير بن العوام (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الشجرة المباركة التي أقسم الله بها في القرآن الكريم؟",
        "answer": "الزيتون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الحجر الكريم الأخضر الذي يُعد من أثمن الأحجار الكريمة؟",
        "answer": "زمرد / زبرجد / زركون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي قطعة معدنية مقوسة في السلاح الناري، يَضغط عليها الإصبع لتحرير الرصاصة",
        "answer": "الزناد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المعدن الوحيد الذي يكون سائلاً في درجة حرارة الغرفة القياسية، ويتميز بلونه الفضي؟",
        "answer": "زئبق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "رجل في الجاهلية كان حنيفًا على ملة إبراهيم، وقال عنه النبي صلى الله عليه وسلم: إنه يُبعث يوم القيامة أمةً وحده",
        "answer": "زيد بن عمرو بن نفيل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الدولة الأفريقية الحبيسة التي يُشتق اسمها من لغة الشونا ويعني \"بيوت الحجر\"؟",
        "answer": "زيمبابوي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم امرأة عزيز مصر التي راودت يوسف عليه السلام عن نفسه؟",
        "answer": "زليخة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ق",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من أصحاب القرآت السبع ؟",
        "answer": "قالون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أول مسجد في الإسلام ؟",
        "answer": "قباء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي مكان يكون فيه الخريف قبل الصيف و الخادم قبل السيد ؟",
        "answer": "القاموس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي سورة ذكرت قصة أصحاب الجنة ؟",
        "answer": "القلم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أول ولد آدم ؟",
        "answer": "قابيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ذكر الأسد في القرآن الكريم بإسم فما هو هذا الاسم ؟",
        "answer": "قسورة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مدينة مقدسة كانت تحمل لقب القرية ؟",
        "answer": "القدس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "له خمسة أصابع بلا لحم و لا عظم ؟",
        "answer": "القفاز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الشاعر الذي وحد الله في الجاهلية؟",
        "answer": "قس بن ساعدة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى المكان الذي يسكنه النمل ؟",
        "answer": "قرية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو أول ما خلق الله ؟",
        "answer": "القلم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الشيء الذي مضى عليه زمن طويل ؟",
        "answer": "قديم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "بمعنى تتبع أثره و لحقه ؟",
        "answer": "قصه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما أول منازل الآخرة ؟",
        "answer": "القبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "معلم من معالم المسجد الأقصى ؟",
        "answer": "قبة الصخرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو من رهبان النصارى و أعيان كنيستهم ؟",
        "answer": "قسيس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم ناقة النبي صلى الله عليه و سلم ؟",
        "answer": "القصواء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ذكر في القرآن الكريم كلمة تعني القشرة الرقيقة على النواة ؟",
        "answer": "قطمير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من قائد معركة عين جالوت ؟",
        "answer": "قطز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "فئة اشتهرت في القرون الوسطى الميلادية بغزو السفن البحرية و السطو عليها ؟",
        "answer": "القراصنة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مسمى يطلق على أدوات الكتابة من ورق و أقلام و مساطر و نحوه ؟",
        "answer": "قرطاسية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الوصف الذي وصف به الرسول صلى الله عليه و سلم به النساء ؟",
        "answer": "قوارير",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو ظاهرة احتباس المطر ويبس الأرض ؟",
        "answer": "قحط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "المسمى الذي يطلق على غرفة القيادة في السفينة ؟",
        "answer": "قمره",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في عهد الخليفة الأموي معاوية بن أبي سفيان بنى القائد عقبة بن نافع مدينة معروفة ما أسمها؟",
        "answer": "القيروان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نوع من أنواع الطعام طلبه اليهود من موسى عليه السلام ؟",
        "answer": "قثاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من أقدم أسلحة القتال استعمالاً في الصيد والحرب ؟",
        "answer": "قوس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما أكبر مدينة في أفريقيا ؟",
        "answer": "القاهرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "على ماذا يطلق اسم الزبرقان ؟",
        "answer": "القمر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الاسم الذي يطلق على مولدة النساء ؟",
        "answer": "قابلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "جبل في مكة اشتهر في عهد قريش ؟",
        "answer": "قبيس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "جزء معماري مقعر أو نصف دائري شكل سقف بعض المباني عادة ؟",
        "answer": "قبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو فاتح بلاد الصين ؟",
        "answer": "قتيبة بن مسلم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هم قوم ينكرون القدر و يقولون أن كل إنسان خالق لفعله بإرادته ؟",
        "answer": "القدرية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وجه بلا لسان و يدل على الزمان ؟",
        "answer": "القمر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى صوت تصادم السلاح ؟",
        "answer": "قعقعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى طعام الضيوف ؟",
        "answer": "القرى",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا كان يطلق على البحر الاحمر قديما ؟",
        "answer": "القلزم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو إسم الشخصية الملقبة في التاريخ بمجنون ليلى ؟",
        "answer": "قيس بن الملوح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الطوب الأحمر يستخدم في البناء ؟",
        "answer": "القرميد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الحيوان الذي يهز ذيله عندما يكون غاضبا ؟",
        "answer": "القط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما وحدة الوزن التي يوزن بها الماس و الأحجار الكريمة و تساوي خمسة جرامات ؟",
        "answer": "قيراط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الحشرة التي تنقل مرض التيفوس ؟",
        "answer": "القمل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الحشرات تصيب فروة الرأس أو شعر الحيوانات ؟",
        "answer": "القراد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي الفراسة في تتبع الأثر و معرفة مسارات الركبان ؟",
        "answer": "القيافة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من اسماء البئر في اللغة العربية ؟",
        "answer": "القليب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "شيء كعبه للحيوان و رأسه للإنسان ؟",
        "answer": "القمح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي برودة العين من شدة السعادة ؟",
        "answer": "قرة العين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو القائد المملوكي الذي قاد المسلمين إلى النصر في معركة عين جالوت ضد المغول؟",
        "answer": "قطز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أول مدينة إسلامية أسست في شمال أفريقيا على يد عقبة بن نافع؟",
        "answer": "القيروان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُطلق على مهنة الرعاية الصحية التي تعنى بتوليد النساء ومتابعة الحمل ورعاية الرضيع؟",
        "answer": "قبالة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي السلسلة الجبلية التي تمتد بين البحر الأسود وبحر قزوين، وتُعد حدًا طبيعيًا بين قارتي آسيا وأوروبا؟",
        "answer": "القوقاز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم ناقة النبي ﷺ التي بركت في موضع بناء مسجده الشريف بالمدينة المنورة؟",
        "answer": "القصواء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الذي يُطلق على ما يقدّمه الوثنيون لأصنامهم أو الكهان لشياطينهم من ذبائح ونذور؟",
        "answer": "قربان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تُسمى غرفة القيادة والتحكم في السفينة أو الطائرة؟",
        "answer": "القمرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الجُرم السماوي الذي يتسبب في ظاهرتي المد والجزر؟",
        "answer": "القمر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الحركة الباطنية التي سرقت الحجر الأسود من الكعبة لمدة 22 عاماً؟",
        "answer": "قرامطة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المفهوم الإسلامي الذي يمثل علم الله تعالى بما تكون عليه المخلوقات في المستقبل؟",
        "answer": "القدر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصدر الرابع من مصادر التشريع الإسلامي الذي يقوم على إلحاق واقعة لا نص فيها بواقعة ورد فيها نص لاشتراكهما في العلة؟",
        "answer": "قياس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهو اسم التجربة الفكرية الفيزيائية التي ابتكرها العالم \"إرفين شرودنجر\" عام 1935 لتوضيح مفهوم \"التراكب الكمومي\"؟",
        "answer": "قطة شرودنغر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما يطلق على الحلقات المعدنية الدائرية لتثبيت المواسير الخارجية في الحوائط؟",
        "answer": "قفيز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المدينة السعودية الشهيرة التي تقع في إقليم الوشم وتُعد المورد التاريخي الأول لـ \"الملح\" في المملكة؟",
        "answer": "القصب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الكلمة التي وردت في القرآن لوصف يوم القيامة بالشدة والعبوس؟",
        "answer": "قمطريرا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى الوعاء المصنوع من جلد الحيوانات والذي كان يُخدم قديماً لحفظ وتبريد الماء وحمله؟",
        "answer": "قِربة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المعركة الفاصلة التي قادها سعد بن أبي وقاص وانتهت بسقوط الدولة الفارسية؟",
        "answer": "القادسية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم التاريخي الذي كان يُطلق على البحر الأحمر قديماً؟",
        "answer": "القلزم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي النقطة التي تمر عبرها المحاور الوهمية التي تدور حولها الأرض أو المغناطيس؟",
        "answer": "قطب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الشخص الموكل إليه كلمة الفصل والحكم في النزاعات داخل المحكمة؟",
        "answer": "القاضي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "طريقة للمفاضلة والاختيار بين خيارات متساوية لا يمكن الترجيح بينها بمعيار موضوعي",
        "answer": "القرعة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الجزء العضلي الملون في العين المسؤول عن التحكم في كمية الضوء الداخلة إليها عن طريق تغيير حجم البؤبؤ؟",
        "answer": "القزحية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما أول شيء خلقه الله تعالى وأقسم به في القرآن الكريم؟",
        "answer": "قلم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الظاهرة الضوئية التي تظهر بسبب انكسار ضوء الشمس في قطرات الماء؟",
        "answer": "قوس قزح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الشخص الذي ذُكر في القرآن كمثال للغنى الفاحش والذي خسف الله به الأرض؟",
        "answer": "قارون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اللفظ الذي أطلق في القرآن الكريم على الغشاء الرقيق الشفاف الشبيه باللفافة التي تحيط بنواة التمر؟",
        "answer": "القطمير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أول مسجد بُني في الإسلام، وقد ذكره الله في القرآن بأنه أُسس على التقوى",
        "answer": "مسجد قباء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يُسمى طبياً الأنبوب المرن الصغير الذي يُدخل في الأوعية الدموية لوضع الأدوية والسوائل؟",
        "answer": "قسطرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم الذي يُعد من أسماء السيف ويُطلق على السيف الحاد الذي يقطع العظام؟",
        "answer": "قرضاب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مصطلح فيزيائي يصف معدل إنجاز الشغل ووحدته الواط",
        "answer": "القدرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ الذي يُطلق على الغلاف الخارجي الصلب أو السطحي المتين الذي يحيط بالأشياء ويحميها؟",
        "answer": "قشرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ الذي يُطلق في اللغة على الجماعة من الرجال؟",
        "answer": "قوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي مجموعة القواعد الملزمة التي تنظم سلوك الأفراد في المجتمع؟",
        "answer": "القوانين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى الجزء الواقع في مؤخرة الرأس وفوق العنق ما بين الأذن للأذن؟",
        "answer": "القَذال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم القديم لمدينة إسطنبول والتي كانت عاصمة الإمبراطورية البيزنطية؟",
        "answer": "القسطنطينية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح العلمي الذي يعبر عن مقاومة الجسم لتغيير حالته الحركية؟",
        "answer": "القصور الذاتي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الحيوان الصغير الّذي يشتهر بتخزين الطعام في خديه؟",
        "answer": "القداد (الهامستر)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مسجد يقع بالطرف الشمالي الغربي من المدينة المنورة شهد حدث تحول القبلة إلى الكعبة أثناء الصلاة",
        "answer": "القبلتين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "محافظة تقع على الحدود السعوديه",
        "answer": "القريات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الاسم الذي يُطلق على الممر المائي الذي يُستخدم لمرور السفن بين المحيطات أو البحار؟",
        "answer": "قناة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الاسم التاريخي لمدينة إسطنبول؟",
        "answer": "القسطنطينية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مالجزء الوحيد في جسم الإنسان الذي لا يحتوي على أوعية دموية",
        "answer": "القرنية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما نوع الزاوية التي يكون قياسها 90 درجة؟",
        "answer": "زاوية قائمة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أكمل المثل العربي الشهير الذي يُضرب للتفاؤل ببدايات الخير وإن صغُرت: \"بداية الغيث...\"؟",
        "answer": "قطرة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نموذج يستخدم لتشكيل المعادن والمواد بشكل متسق وثابت",
        "answer": "القالب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي أول جامعة في العالم العربي والعالم وتقع في مدينة فاس في المغرب؟",
        "answer": "جامعة القرويين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "وحدة قياس عالمية لقياس وزن الذهب والألماس والأحجار الكريمة",
        "answer": "القيراط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الشخص الذي قتل ربع سكان العالم؟",
        "answer": "قابيل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الهيكل العظمي الذي يحيط بالرئتين والقلب ويحميهما؟",
        "answer": "القفص الصدري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صحابي جليل كان من دهاة العرب وكان شديد الكرم حتى ضرب به المثل",
        "answer": "قيس بن سعد (رضي الله عنه)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الحيوان الذي لا يمتلك هيكلاً عظمياً؟",
        "answer": "قنديل البحر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المعاملة المالية التي يحصل فيها الربح أو الخسارة دون جهد، وتُعد من المحرمات في الإسلام؟",
        "answer": "القمار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نبات عشبي طويل القامة يشبه الخيزران، ينتج عصير حلو يُنتج منه السكر الأبيض",
        "answer": "قصب السكر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الخط المستقيم الذي يمر بمركز الدائرة ويصل بين نقطتين على محيطها؟",
        "answer": "القطر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ الذي يُطلق علمياً على البكتيريا ذات الشكل العصوي؟",
        "answer": "قضيبية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي السورة رقم 28 في القرآن الكريم التي تتحدث عن سيدنا موسى عليه السلام وفرعون؟",
        "answer": "القصص",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ الذي ورد في القرآن الكريم للتعبير عن المسكن أو التجمع الذي يعيش فيه النمل؟",
        "answer": "القرية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي الحركة التي تدعو إلى تعزيز مصالح أمة معينة على أساس هويتها المشتركة ونهى عنها الإسلام؟",
        "answer": "قومية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو أول مسجد بُني في الإسلام عند وصول النبي ﷺ للمدينة المنورة؟",
        "answer": "قباء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اللفظ الذي يُطلق في اللغة العربية على أنثى النسر؟",
        "answer": "قشعم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أين يقع المقر الرئيسي لجامعة الدول العربية؟",
        "answer": "القاهرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اللقب الذي كان يطلق على حكام الإمبراطورية الرومانية؟",
        "answer": "قيصر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أكبر بحر مغلق في العالم، ويقع على الحدود الفاصلة بين قارتي آسيا وأوروبا؟",
        "answer": "بحر قزوين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي البعثة الدبلوماسية التي تمثل مصالح دولة في مدينة أجنبية؟",
        "answer": "قنصلية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "وعاء يُجعل فيه الشراب والأدوية والمنتجات الكيميائية، ويُطلق أيضًا على الزجاج الشفاف",
        "answer": "القارورة / القنينة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المدينة التاريخية التي كانت تُعد العاصمة القديمة لأفغانستان وأسسها أحمد شاه الدراني قبل انتقال العاصمة إلى كابول؟",
        "answer": "قندهار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الرياضي الذي يُطلق على الضربة النهائية الحاسمة في الرياضات القتالية والتي تنتهي بها المباراة فوراً؟",
        "answer": "القاضية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "سلاح حربي يطلق تياراً من النار المشتعلة باتجاه الهدف، ويستخدم لمسافات قصيرة في اقتحام التحصينات",
        "answer": "قاذفة اللهب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عالم عربي وصف اختلاف الرياح وتأثيراتها المتنوعة على السحب والأشجار والزرع في كتابه \"عجائب المخلوقات\"",
        "answer": "القزويني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي أقوى عضلة في جسم الإنسان من حيث القدرة على التحمل؟",
        "answer": "عضلة القلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الحيوان الذي يبني السدود ويعيش بالقرب من الأنهار والجداول؟",
        "answer": "القندس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مجموعة المبادئ وقواعد السلوك التي تحكم العلاقات بين الدول في حالتي السلم والحرب",
        "answer": "القوانين الدولية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي العملية التي يتم من خلالها تحديد مواجهات الفرق في البطولات الرياضية؟",
        "answer": "قرعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة الجزلة التي وردت في سورة المدثر كاسم من أسماء الأسد؟",
        "answer": "قسورة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أحد الآيات التي أرسلها الله على قوم فرعون عقابًا لهم على استكبارهم",
        "answer": "القمل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الحيوان الذي يصاب بمرض الحصبة مثل الإنسان، حيث يعتبر مضيفاً قابلاً للعدوى والإصابة بها",
        "answer": "القرد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي أعلى نقطة في الجبل أو السلسلة الجبلية؟",
        "answer": "قمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على نهاية البيت الشعري؟",
        "answer": "القافية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم النسك من مناسك الحج الذي ينوي فيه الحاج أداء الحج والعمرة معاً في إحرام واحد دون تحلل بينهما؟",
        "answer": "القران",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الأمر الشرعي الذي فُرض وكُتب على المسلمين في القرآن الكريم وهو كُره لهم؟",
        "answer": "القتال",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي حالة الجفاف الشديد التي تستمر لفترات طويلة وتؤثر على الزراعة؟",
        "answer": "قحط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الدولة الجزرية الواقعة في البحر الأبيض المتوسط وتتميز بوجود سلسلتين جبليتين هما ترودوس وكيرينيا؟",
        "answer": "قبرص",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "منطقة بنجد بين جبل شمر ومنطقة الوشم وتعتبر تاريخياً منطقة تجارية وزراعية هامة",
        "answer": "القصيم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة الأندلسية التي كانت عاصمة الأندلس ومركزاً علمياً في أوروبا؟",
        "answer": "قرطبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم النبات العشبي الذي ينتمي إلى الفصيلة القرعية، ويشبه الخيار في شكله وطعمه، وورد ذكره في سورة البقرة؟",
        "answer": "قثاء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الاسم العربي الأصيل لكل ولاعة تستخدم لإيقاد النار",
        "answer": "قداحة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الناتج الفيزيائي لضرب الكتلة في التسارع؟",
        "answer": "القوة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الفارس التميمي الذي أرسله الخليفة أبو بكر الصديق (رضي الله عنه) بمفرده ليكون مَدداً لجيش المسلمين؟",
        "answer": "القعقاع بن عمرو التميمي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المناطق المنخفضة جداً في المحيطات والتي قد تصل إلى آلاف الأمتار؟",
        "answer": "قيعان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى القطعة الصغيرة المقتطعة من الورق أو القماش؟",
        "answer": "قصاصة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "هـ",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي بعث إلى قوم عاد ؟",
        "answer": "هود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على عملية ترديد الصوت في الصدر ؟",
        "answer": "همهمة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو أكبر محيط على وجه الأرض ؟",
        "answer": "الهادي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو ما يكون للرجل من مخافة و وقار ؟",
        "answer": "هيبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي صفة بين المشي و العدو ؟",
        "answer": "هرولة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الصفة التي تناقض الجد ؟",
        "answer": "هزل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو أحد الملكين اللذين علما الناس السحر ؟",
        "answer": "هاروت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على الرجل الذي إذا كبر سنه ؟",
        "answer": "هرم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو صاحب سلوكيات غير متمدنة و بربرية طائشة ؟",
        "answer": "همجي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل المثل : لكل عالم ------- ؟",
        "answer": "هفوة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أول من سعى بين الصفا و المروة ؟",
        "answer": "هاجر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي إحدى القبائل في العصر الجاهلي ؟",
        "answer": "هذيل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الصلح الذي يحدث بين الجيشين ؟",
        "answer": "هدنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو المنطق الفارغ الذي لا معنى له ؟",
        "answer": "هراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على صوت الموج ؟",
        "answer": "هدير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي الظهير و ما يوافق نصف النهار ؟",
        "answer": "هجير",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الخليفة الذي كان يحج عاما و يغزو عاما ؟",
        "answer": "هارون الرشيد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "صفه تطلق على كسر الشيء اليابس ؟",
        "answer": "هشم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو تمليك الإنسان ماله لغيره في الحياة بلا عوض ؟",
        "answer": "هبة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "نوع من أنواع الشعر يقلل من شأن الآخرين ؟",
        "answer": "هجاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الصياح بالتشجيع و التأييد ؟",
        "answer": "هتاف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو القائد المغولي الذي دمر مدينة بغداد ؟",
        "answer": "هولاكو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في أي دولة تصل اللهجات إلى 845 لهجة ؟",
        "answer": "الهند",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة هو خرق الستر عما وراءه ؟",
        "answer": "هتك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم صنم كان في الكعبة ؟",
        "answer": "هبل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين هو الموطن الأصلي لجوز الهند ؟",
        "answer": "هاواي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو ما يهدى من النعيم إلى الحرم تقربا إلى الله عز و جل ؟",
        "answer": "الهدي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الاسم الذي يطلق على النوم ليلاً ؟",
        "answer": "هجوع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو المعبد الذي تريد اليهود بناؤه على أنقاض المسجد الأقصى ؟",
        "answer": "هيكل سليمان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "تعدى على الشيء بغتة وفجأة ؟",
        "answer": "هجم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "يمر وسط الغابات و الأشواك دون أن يتمزق ؟",
        "answer": "هواء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الملوك الذين راسلهم الرسول صلى الله عليه وسلم ؟",
        "answer": "هرقل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "خليفة عباسي اشتهر زمانه بالعصر الذهبي وكان زمانه زمان خير وجهاد ؟",
        "answer": "هارون الرشيد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم صوت الرعد ؟",
        "answer": "هزين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو أخف العناصر الموجودة على الكرة الأرضية ؟",
        "answer": "الهيدروجين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى أخفى ما يكون من الصوت ؟",
        "answer": "همس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "بماذا يلقب فرخ العقاب ؟",
        "answer": "هيثم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي وحدة تردد تعادل دورة في الثانية ؟",
        "answer": "هرتز",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو ما نبت على العين من الشعر على أشفارها ؟",
        "answer": "هُدبُ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الاسم يطلق على المائة من الإبل ؟",
        "answer": "هند",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "دولة أوربية مستواها أقل من مستوى سطح البحر واسمها يعني الأرض المنخفظة ؟",
        "answer": "هولندا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ديانة في الهند من معتقداتهم عبادة البقر ؟",
        "answer": "هندوس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في اللغة : ضد الوصل ؟",
        "answer": "هجر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "المسمى الذي يطلق على أرض مساحتها عشرة آلاف متر مربع ؟",
        "answer": "هكتار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي الصفة التي تجمع بين الصفة السائدة والصفة المتنحية ؟",
        "answer": "هجين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي عاصمة كوبا ؟",
        "answer": "هافانا",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو مقياس هطول كمية الهواء في الأرض ؟",
        "answer": "الهيتوميتر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة عربية تعني الشيء الرقيق اللين أو سريع الكسر",
        "answer": "هش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تُسمى الطبقة الخارجية الغازية المحيطة بالشمس؟",
        "answer": "الهالة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تُطلق على الشيء الناتج عن تزاوج أو دمج نوعين مختلفين، ويتميز بصفات من مشتركة من أصله",
        "answer": "هجين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اتفاق رسمي ومؤقت بين أطراف متحاربة لوقف العمليات العسكرية والقتال لفترة زمنية محددة",
        "answer": "هدنة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المدينة الكاريبية العريقة التي أسسها الإسبان في القرن السادس عشر لتصبح اليوم عاصمة لجمهورية كوبا وأكبر مدنها؟",
        "answer": "هافانا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو المنطق الفارغ الذي لامعنى له",
        "answer": "هُراء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما وحدة قياس المساحة التي تساوي 10,000 متر مربع؟",
        "answer": "هكتار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الجسيم المسؤول عن منح الكتلة لباقي الجسيمات في الفيزياء؟",
        "answer": "هيغز",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هي المرأة التي أسلمت بعد فتح مكة وهي زوجة أبو سفيان؟",
        "answer": "هند بنت عتبة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الخليفة العباسي الذي ارتبط اسمه بازدهار الدولة الإسلامية وعصر الترجمة والعلوم؟",
        "answer": "هارون الرشيد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو وزير فرعون ومهندسه المقرب الذي ذكر القرآن الكريم أن فرعون أمره ببناء صرحٍ عالٍ ليطلع إلى إله موسى؟",
        "answer": "هامان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي سورة وردت الكلمة الوحيدة في القرآن التي تُقرأ بالإمالة في رواية حفص عن عاصم؟",
        "answer": "سورة هود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "النزول من مكان عالٍ إلى مكان منخفض",
        "answer": "هبوط",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الشكل الهندسي الذي تتكون قاعدته من مربع وأوجهه الأخرى مثلثات تلتقي في نقطة واحدة؟",
        "answer": "هرم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الحدث التاريخي الذي انتقل فيه النبي صلى الله عليه وسلم والمسلمون من مكة إلى المدينة لتأسيس الدولة الإسلامية؟",
        "answer": "الهجرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الكاتب والروائي الأمريكي الشهير الحائز على جائزة نوبل وصاحب الرواية الحربية الإنسانية \"لمن تقرع الأجراس\"؟",
        "answer": "هيمنغوي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على الخطأ غير المقصود أو السقطة البسيطة؟",
        "answer": "هفوة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الأميرة العربية التي كانت محاولة كسرى لاختطافها سبباً في اندلاع معركة ذي قار الشهيرة؟",
        "answer": "هند بنت النعمان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مصطلح بمعنى طرف الشي، ويستخدم مجازيًا للدلالة على عدم الأهمية",
        "answer": "هامش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي محيط تقع جزر المالديف السياحية الشهيرة؟",
        "answer": "الهندي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الحالة النفسية التي تعني التعلق الشديد والمفرط بشيء ما؟",
        "answer": "الهوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "كلمة تعني العزم والإرادة القوية لتحقيق هدف ما",
        "answer": "همة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تعني ضياع الشيء دون الاستفادة منه؟",
        "answer": "هدر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على الابتعاد السريع عن خطر محدق حفاظًا على النفس؟",
        "answer": "هروب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القبيلة التي واجهها المسلمون في غزوة حنين؟",
        "answer": "هوازن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يصف كلامًا غير مترابط يصدر غالبًا عن مريض أو فاقد للوعي؟",
        "answer": "هذيان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أعلى سلسلة جبال في العالم وتضم قمة إيفرست؟",
        "answer": "هيمالايا",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تعبّر عن أمر عظيم يبعث على الخوف والفزع؟",
        "answer": "هَوْل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على الآراء التي تُخالف العقيدة الدينية الرسمية وتُعتبر ضلالاً؟",
        "answer": "هرطقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يطلق على انتقال مجموعات من البشر أو الحيوانات من منطقة لأخرى بقصد الاستقرار؟",
        "answer": "هجرة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أصغر وحدة نقدية في العملة السعودية؟",
        "answer": "الهللة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا كان يسمي العرب في الجاهلية الصوت أو الأبيات التي يُسمع قائلها ولا يُرى جسده حيث كانوا ينسبون ذلك إلى الجن؟",
        "answer": "هاتف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الزعيم الألماني الذي قاد الحزب النازي أثناء الحرب العالمية الثانية؟",
        "answer": "هتلر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "الوحدة المفضلة للفلاحين والزراعيين لقياس المساحات وتساوي 10,000 متر مربع",
        "answer": "هكتار",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو أول رياضي سعودي ينجح في تحقيق ميدالية في تاريخ الألعاب الأولمبية؟",
        "answer": "هادي صوعان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح السياسي الذي يعني وقف مؤقت للعمليات العسكرية باتفاق الأطراف المتحاربة؟",
        "answer": "هدنة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو الغاز المستخدم في ملء البالونات والمناطيد؟",
        "answer": "الهيليوم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المفهوم الذي يشير إلى مجموعة الخصائص التي تميز الفرد أو المجتمع؟",
        "answer": "هوية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يعني عملية تفكيك الطعام داخل الجسم لاستخلاص الطاقة؟",
        "answer": "هَضم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هي زوجة نبي الله إبراهيم (عليه السلام) وأم ابنه نبي الله إسماعيل (عليه السلام)، التي سعَت بين الصفا والمروة؟",
        "answer": "هاجر (عليها السلام)",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يعني الفناء أو الموت؟",
        "answer": "الهلاك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تعبّر عن السيطرة والنفوذ على الآخرين؟",
        "answer": "هيمنة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الصفة التي تشير إلى علو العزيمة والإرادة القوية في العبادة؟",
        "answer": "همة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما وحدة قياس التردد في النظام الدولي، والتي تعبر عن عدد الذبذبات في الثانية الواحدة؟",
        "answer": "هرتز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو الاسم الذي يُطلق على الحيوانات التي تُذبح في الحج تقربًا إلى الله؟",
        "answer": "هدي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم مجموعة الجزر الاستوائية التي تشتهر ببراكينها النشطة وشواطئها الواسعة وتعد من أبرز الوجهات السياحية في العالم؟",
        "answer": "هاواي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو نوع الشعر الّذي يتم فيه النقد أو السخرية اللاذعة من شخص أو مجتمع؟",
        "answer": "هجاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أصوات تُرفع عاليًا للفرح والتشجيع أو للاحتجاج",
        "answer": "هتاف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تدل على الضعف وقابلية الشيء للكسر بسهولة؟",
        "answer": "هشاشة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو اللاعب السعودي الذي لعب للاتحاد والهلال والشباب وشارك في كأس العالم 2018؟",
        "answer": "هتان باهبري",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهو البروتين المحمول داخل خلايا الدم الحمراء ويحتوي على ذرات الحديد يلتقط الأوكسجين في الرئتين ويسلّمه إلى الأنسجة للحفاظ على حياة الجسم؟",
        "answer": "الهيموجلوبين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المنتخب الأوروبي الأكثر وصولاً إلى نهائي كأس العالم دون أن ينجح في تحقيق اللقب تاريخياً؟",
        "answer": "هولندا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى أشد أنواع الجزع والخوف؟",
        "answer": "الهلع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تُطلق على الغبار الدقيق المنتشر في الهواء؟",
        "answer": "هَبَاء",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى ابن طائر النسر في اللغة العربية؟",
        "answer": "هيثم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الصوت الخافت المنخفض جدًا؟",
        "answer": "همس",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو أشهر مضيق في العالم والذي يربط بين الخليج العربي وخليج عمان؟",
        "answer": "مضيق هرمز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يدل على شدة الحب لدرجة الضياع أو التشتت؟",
        "answer": "هَيْمَان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم البروتين الموجود في خلايا الدم الحمراء والمسؤول عن نقل الأكسجين من الرئتين إلى أنحاء الجسم؟",
        "answer": "هيموغلوبين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما عملية إعادة تنظيم المؤسسة أو الشركة لتحسين كفاءتها؟",
        "answer": "هيكلة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا تسمى حالة الإدراك الحسي الخاطئ لأشياء غير موجودة في الواقع؟",
        "answer": "الهلوسة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يُطلق على حسن المظهر واللباس؟",
        "answer": "هندام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الكلمة التي تعبّر عن شعور داخلي بالحزن أو القلق؟",
        "answer": "هم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يعني ترك الشيء والابتعاد عنه عمدًا؟",
        "answer": "هجر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي أطلق على السكان الأصليين للأمريكتين؟",
        "answer": "هنود حمر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المادة الكيميائية التي تفرزها الغدد الصماء وتنقل عبر الدم لتنظيم وظائف الجسم؟",
        "answer": "هرمون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسما الملكين اللذين كانا يعلّمان الناس السحر ابتلاءً؟",
        "answer": "هاروت وماروت",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الشرعي للعطية بلا مقابل؟",
        "answer": "هبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الحيوان الذي وعد نبينا سليمان عليه السلام أن يعذبه عذاباً شديداً أو يأتيه بخبر يقين؟",
        "answer": "الهدهد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مساحة واسعة مرتفعة من الأرض تتميز بسطح مسطح أو شبه مستوٍ",
        "answer": "هضبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الكلمة التي تعبّر عن اللين والرفق في التعامل؟",
        "answer": "هوادة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو القائد المغولي حفيد جنكيز خان الذي اجتاح بغداد وأسقط الخلافة العباسية؟",
        "answer": "هولاكو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو الجهاز الذي يستخدم لقياس الرطوبة؟",
        "answer": "الهيجرومتر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي المدينة اليابانية التي دخلت التاريخ من أوسع أبوابه المأساوية كأول هدف في العالم يتعرض لهجوم قنبلة ذرية أواخر الحرب العالمية الثانية؟",
        "answer": "هيروشيما",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المرض الصامت الذي يتميز بانخفاض كتلة العظام وتدهور بنيتها مما يجعلها عرضة للكسر؟",
        "answer": "هشاشة العظام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو القائد والزعيم الياباني التاريخي الذي قاد بلاده لصد الغزو المغولي، وتحطم أسطول أعدائه بفضل ريح الإعصار المعروفة بـ \"الكاميكازي\"؟",
        "answer": "هوجو توكيموني",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الإسلامي للتوفيق الإلهي للإنسان للوصول إلى الحق؟",
        "answer": "هداية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تطلق على صوت الأمواج عند ارتطامها بالشاطئ؟",
        "answer": "هدير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما العلم الذي يهتم بالتصميم والبناء لحل المشكلات التقنية وخدمة الإنسان؟",
        "answer": "الهندسة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو المصطلح الذي يعني انعدام الجدية والمزاح في الأمور الجادة؟",
        "answer": "هزل",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يُستخدم لوصف خسارة في حرب أو منافسة؟",
        "answer": "هزيمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "إلى أي دولة يعود الأصل التاريخي والنشأة الأولى للعبة الشطرنج؟",
        "answer": "الهند",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما العنصر الكيميائي الأكثر وفرة في الكون؟",
        "answer": "الهيدروجين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مصطلح بمعنى الاندفاع والانقضاض بشراسة؟",
        "answer": "هجوم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الذي يطلق على كل ما يدب على الأرض من الحشرات المؤذية والدواب السامة كالحيات والعقارب؟",
        "answer": "الهوام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما عاصمة فنلندا؟",
        "answer": "هلسنكي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الكلمة العربية التي تصف المطر الخفيف المستمر؟",
        "answer": "هَتَان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الإداري الذي يُعبّر عن إعادة التفكير الجذري وإعادة تصميم العمليات الأساسية في المنظمة لتحقيق تحسينات كبيرة في الأداء؟",
        "answer": "الهندرة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا كانت تسمى المئة من الإبل عند العرب قديمًا؟",
        "answer": "الهند (أو الهنيدة)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الصفة التي تجمع بين الاحترام والإجلال والخوف؟",
        "answer": "هيبة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "و",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "ماذا سميت السنة التاسعة من الهجرة ؟",
        "answer": "الوفود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة هو الحلم و الرزانة ؟",
        "answer": "وقار",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى طعام العرس ؟",
        "answer": "وليمة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما معنى النمارق ؟",
        "answer": "الوسائد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أي الليالي هي مظنة ليلة القدر في رمضان ؟",
        "answer": "وترية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى الصوت الخفي ؟",
        "answer": "وجس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو ركن الحج الأعظم ؟",
        "answer": "الوقوف بعرفة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الغسل و المسح على أعضاء مخصوصة مع النية ؟",
        "answer": "الوضوء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو شرب الكلب في الإناء ؟",
        "answer": "ولغ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الآية في القرآن الكريم التي ذمت الحلف ؟",
        "answer": "ولاتطع كل حلاف مهين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل المثل الآتي : الآنَ حَمِيَ ............. ؟",
        "answer": "الوطيس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو عرق في القلب إذا أنقطع مات صاحبه ؟",
        "answer": "وتين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو اسم الطين الرقيق ؟",
        "answer": "وحل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على ما يغطى جلد الجمل ؟",
        "answer": "وبر",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل المثل : تعددت الأسباب و الموت ...................... ؟",
        "answer": "واحد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو حبس المال وصرف منافقة في سبيل الله ؟",
        "answer": "وقف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو المطر الذي يخرج من السحاب كما ورد في القرآن الكريم ؟",
        "answer": "الودق",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الرجل الذي عرف الرسول صلى الله عليه وسلم بعد أن أخبرته خديجة بحاله و آمن به قبل البعث ؟",
        "answer": "ورقة بن نوفل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو أحد أصحاب القراءات السبع ؟",
        "answer": "ورش",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الخوف و انقباض القلب في الخلوة ؟",
        "answer": "وحشة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الشق بين الجبلين ؟",
        "answer": "وادي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي عاصمة الولايات المتحدة الأمريكية ؟",
        "answer": "واشنطن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "برنامج مشهور لمعالجة النصوص في جهاز الحاسب الآلي ؟",
        "answer": "وورد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو ما يوجد من محبة بين الطرفين ؟",
        "answer": "ود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الجزء السفلي من الجبل ؟",
        "answer": "وتد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو كل ما يتصوره الإنسان في داخله و هو غير صحيح ؟",
        "answer": "الوهم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "اسم وادي في جهنم لكل هماز و لماز ؟",
        "answer": "ويل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو الإشارة والكتابة والرسالة والإلهام والكلام الخفي كل ما ألقيته إلى غيرك ؟",
        "answer": "وحي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي العظام التي تكون على الفخذ ؟",
        "answer": "الورك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ثقل الشيء وأثبته في مكانه ؟",
        "answer": "وطد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو علم يختص بدراسة علاقات نسل الإنسان و الحيوان ؟",
        "answer": "وراثة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "سورة في القرآن الكريم من قرأها كل ليلة لم تصبه فاقة أبداً ؟",
        "answer": "الواقعة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الخليفة الأموي الذي شيد الجامع الأموي في دمشق ؟",
        "answer": "الوليد بن عبدالملك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من شيوخ الإمام الشافعي ؟",
        "answer": "وكيع الجراح",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هونغ كونغ مدينة من مدن شرق آسيا فما معنى هذا الاسم ؟",
        "answer": "وادي العطر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الشيء الذي عليك الاحتفاظ به بعد أن تعطيه لغيرك ؟",
        "answer": "وعد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو الخال الوحيد لأبناء عمتك ؟",
        "answer": "والدك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي اول غزوة غزاها الرسول صلى الله عليه وسلم ؟",
        "answer": "ودان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من النجوم الفلكية عند العرب القدماء و إلى اليوم ؟",
        "answer": "الوسم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي توجد في منتصف القرآن الكريم ؟",
        "answer": "وليتلطف",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو حيوان بري أصغر من النمر و يسمى بسنور الجبل ؟",
        "answer": "وشق",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول من ابتكر كرة الطائرة ؟",
        "answer": "وليام مورجان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "الميناء الثاني للجزائر و يقع في الغرب من الساحل ؟",
        "answer": "وهران",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "منصب سياسي حالي ذكره في القرآن الكريم في سورة طه وسورة الفرقان فما هو ؟",
        "answer": "وزير",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كتلة من الأنسجة ناتجة عن نمو غير طبيعي للخلايا ؟",
        "answer": "ورم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو كل شيء كالوسادة و ناعم كالحرير ؟",
        "answer": "وثار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هم الأخوة الذين اخترعوا آلة التصوير الأفلام ؟",
        "answer": "ورفر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من الثدييات التي تطير بالليل ؟",
        "answer": "الوطواط",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يسمى كل ما يتخيله الإنسان داخلياً ويعتقده وهو ليس حقيقة؟",
        "answer": "وهم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المنطقة المنخفضة بين التلال أو الجبال؟",
        "answer": "وادي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الصفة التي تعني الإخلاص والانتماء لشخص أو جماعة؟",
        "answer": "ولاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "خلق إيماني رفيع يعبر عن التزام المسلم بترك الحرام والبعد عن الشبهات...",
        "answer": "الورع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا يطلق على المرض المعدي الذي ينتشر بسرعة ويصيب عدداً كبيراً من الناس في منطقة جغرافية واسعة؟",
        "answer": "وباء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو النادي الإنجليزي الذي خاض معه اللاعب السعودي السابق سامي الجابر تجربة احترافية في عام 2000 م؟",
        "answer": "وولفرهامبتون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاسم الذي يطلق على عظام الحوض المتصلة بالفخذ؟",
        "answer": "ورك",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما نوع المباراة التي تقام خارج إطار المنافسات الرياضية الرسمية؟",
        "answer": "ودية",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو النظام الإسلامي الذي يتم فيه حبس الأصل وتسبيل المنفعة لأغراض خيرية؟",
        "answer": "وقف",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مصطلح بمعنى الألم و المرض؟",
        "answer": "وَصَب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى صفة المحافظة على العهد والوعد؟",
        "answer": "وفاء",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما مصطلح الانسجام والتوافق بين أفراد أو مجموعات؟",
        "answer": "وئام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي المعركة الشهيرة في بلاد الرافدين التي قاد فيها خالد بن الوليد المسلمين للانتصار على الفرس مستخدماً خطة التطويق؟",
        "answer": "معركة الولجة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المصطلح الذي يُطلق على مقدار الجاذبية التي تؤثر على جسم ما وتُقاس بوحدة النيوتن؟",
        "answer": "الوزن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما المنصب الرسمي الذي يُطلق وريث الملك في النظام الملكي؟",
        "answer": "ولي العهد",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو الاتصال الرباني الذي كان ينزل على الأنبياء والرسل لتبليغ رسالات الله؟",
        "answer": "وحي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي الكلمة التي تعني مخلوقًا شرسًا أو مفترسًا في الطبيعة أو الأساطير؟",
        "answer": "وحش",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الشخص المكلف شرعاً برعاية شؤون القاصر ومصالحه؟",
        "answer": "الولي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الاسم الّذي ذُكر في القرآن للشريان الرئيسي الذي يخرج من البطين الأيسر للقلب؟",
        "answer": "وتين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الذي يُطلق على كل ما يُعبد من دون الله سواء كان له صورة أو بلا صورة؟",
        "answer": "وثن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي أكبر طبقات الأرض، وتحيط بالنواة الخارجية؟",
        "answer": "الوشاح",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما عاصمة بولندا؟",
        "answer": "وارسو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما الكلمة التي تعبر عن إدراك الإنسان لما حوله وقدرته على الفهم؟",
        "answer": "وعي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو الصحابي الذي قتل حمزة بن عبد المطلب (رضي الله عنه) في غزوة أحد قبل أن يُسلم، ثم قتل مسيلمة الكذاب بعد إسلامه؟",
        "answer": "وحشي بن حرب (رضي الله عنه)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مصطلح يطلق على الشخص اللطيف في تعامله والمحب للآخرين",
        "answer": "ودود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُطلق على المادة التي تُستعمل لإنتاج الطاقة، مثل البنزين أو الغاز؟",
        "answer": "وقود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا تسمى العلامة التي تعبر عن شرف وتقدير تُمنح للشخص على إنجازاته؟",
        "answer": "وسام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تصف شعورًا أو فكرة سريعة تظهر فجأة في العقل؟",
        "answer": "ومضة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المجموعة الرسمية التي تمثل دولة أو هيئة أو مؤسسة في مفاوضات أو مناسبات ؟",
        "answer": "وفد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تعني العمل أو المهمة التي يقوم بها الشخص في حياته المهنية؟",
        "answer": "وظيفة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي العملة الرسمية في دولة كوريا؟",
        "answer": "وون",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُطلق على الورقة التي يكتب فيها الطبيب أنواع الأدوية للمريض وتعليمات استخدامها؟",
        "answer": "وصفة طبية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد ناحيتي العملات المعدنية",
        "answer": "الوجه",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى العمود أو المسمار الذي يُستخدم لتثبيت شيء؟",
        "answer": "وتد",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو أول نادٍ سعودي نجح في تحقيق لقب كأس خادم الحرمين الشريفين تاريخياً؟",
        "answer": "الوحدة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يطلق على الأفكار المذمومة التي يلقيها الشيطان في قلب الإنسان؟",
        "answer": "وسوسة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يُسمى الغطاء الشعري الذي يكسو جسم الإبل؟",
        "answer": "الوبر",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المنتخب الذي فازت عليه البرتغال في نصف نهائي بطولة أمم أوروبا \"يورو 2016\" قبل تحقيقها اللقب؟",
        "answer": "ويلز",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي وحدة قياس القدرة الكهربائية في النظام الدولي للوحدات؟",
        "answer": "واط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو مايلزمنا به الشرع ويُثاب فاعله ويُعاقب على تركه",
        "answer": "الواجب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو التصرف الشرعي الذي يقوم به الإنسان في تحديد مصير ثلث ماله بعد وفاته؟",
        "answer": "وصية",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الرجل الذي كان يقرأ الكتب السماوية، وبشّر النبي صلى الله عليه وسلم بأن ما نزل عليه هو وحي من الله؟",
        "answer": "ورقة بن نوفل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الكلمة التي تصف الشخص الذي يتدخل للتفاوض أو حل النزاع بين طرفين؟",
        "answer": "وسيط",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو الطبيب الإنجليزي الذي اكتشف الدورة الدموية الكبرى في جسم الإنسان؟",
        "answer": "وليام هارفي",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم العلم الذي يدرس انتقال الصفات من الآباء إلى الأبناء؟",
        "answer": "الوراثة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما المصطلح الذي يُستخدم لوصف المطر الكثيف والشديد؟",
        "answer": "وابل",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما الصفة الإسلامية التي تعني ترك الشبهات خوفاً من الوقوع في الحرام؟",
        "answer": "ورع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو مالك شركة المملكة القابضة؟",
        "answer": "الوليد بن طلال",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يطلق على عبادة الأصنام والتماثيل؟",
        "answer": "وثنية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المؤسسة التي تمثل جهة أخرى وتعمل نيابة عنها؟",
        "answer": "وكالة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي عاصمة دولة بوركينا فاسو؟",
        "answer": "واغادوغو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المنطقة الخضراء المحاطة بالصحراء والتي تتوفر فيها المياه الجوفية؟",
        "answer": "واحة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو أول صحابي قتل مشركًا في سبيل الله في الإسلام؟",
        "answer": "واقد بن عبدالله اليربوعي (رضي الله عنه)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة بمعنى دخل وتغلغل في الشيء وهي ضد خرج",
        "answer": "ولج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المستند الرسمي الذي يتضمن معلومات أو نصوصاً ذات قيمة قانونية أو سياسية؟",
        "answer": "وثيقة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما نوع الفيلم الذي يعرض حقائق ومعلومات واقعية بهدف التوثيق والتعليم؟",
        "answer": "وثائقي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تشير إلى عش الطيور ومأوى الحيوانات أو المكان المخصص للاختباء فيه",
        "answer": "وكر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما العملية التي يتدخل فيها طرف ثالث محايد لحل النزاع بين طرفين؟",
        "answer": "وساطة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة تعني الضوء الساطع أو اللمعان الشديد",
        "answer": "وهج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم طعام العرس في الإسلام؟",
        "answer": "وليمة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الكلمة التي وردت في القرآن الكريم للتعبير عن الضعف الشديد وسقوط القوة؟",
        "answer": "الوهن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يدل على شيء قريب الحدوث؟",
        "answer": "وشيك",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مصطلح يطلق على الرجل الرزين الحليم",
        "answer": "وقور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الذي يعني نقل الكلام بنية التحريض والتحريش وفضح الأسرار بين الناس؟",
        "answer": "وشاية",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "مقولة شهيرة تشير إلى أن اتخاذ التدابير الاحترازية لتجنب المشكلة أفضل من حل المشكلة بعد وقوعها",
        "answer": "الوقاية خير من العلاج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهو نادي كرة القدم الإنجليزي الّذي ينافس في الدوري الممتاز، ويُلقّب بـ\"المطارق\"؟",
        "answer": "ويست هام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الكلمة التي تُعد من الصفات الحميدة، وتدل على الرزانة والحِلم وثبات النفس وقلة التسرّع؟",
        "answer": "الوقار",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماذا يسمى المكان أو الدولة التي ينتمي إليها الإنسان ويعتبرها بيته؟",
        "answer": "وطن",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المصطلح الفيزيائي الذي يصف الضوء المنبعث من جسم ساخن جداً؟",
        "answer": "وهج",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو المصطلح الذي يعني الطريقة لتحقيق هدف معين؟",
        "answer": "وسيلة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الوعاء الدموي الذي ينقل الدم من أجزاء الجسم المختلفة ويعيده إلى القلب؟",
        "answer": "وريد",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المنطقة في ولاية كاليفورنيا التي تُعد مركزًا لشركات التقنية الكبرى في العالم؟",
        "answer": "وادي السيليكون",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  },
  {
    "letter": "ي",
    "questions": [
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي التهمه الحوت ؟",
        "answer": "يونس عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو مؤلف كتاب : رياض الصالحين ؟",
        "answer": "يحي النووي",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "قال رسول الله صلى الله عليه و سلم : ( المرء على دين خليله فلينظر أحدكم من ..........)",
        "answer": "يخالل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو النبي الذي أمره الله تعالى بأن يأخذ الكتاب بقوة ؟",
        "answer": "يحي عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة : ما مرادف كلمة ينظر ؟",
        "answer": "يرى",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "الطفل الذي فقد أبويه الإثنين أو أحدهما ؟",
        "answer": "يتيم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في اللغة : هو القنوط ؟",
        "answer": "اليأس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو الفتى الذي صاحب نبي الله موسى عليه السلام ؟",
        "answer": "يوشع بن نون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو ميقات اهل اليمن ؟",
        "answer": "يلملم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هي مرحلة النمو التي تسبق التحول إلى فراشة ؟",
        "answer": "يرقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "اسم المدينة المنورة قبل دخول الإسلام إليها ؟",
        "answer": "يثرب",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هو أول من عمل القراطيس ؟",
        "answer": "يوسف عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من وحدات قياس الزمن ؟",
        "answer": "اليوم",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل : المثل : إذا أردت أن تطاع , فأمر بما .............. .",
        "answer": "يستطاع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "إلى أين كانت رحلة الشتاء لأهل مكة ؟",
        "answer": "اليمن",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "هو ما يكون حول العنق من اللباس والهندام ؟",
        "answer": "ياقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هي أشهر معركة مع المرتدين ؟",
        "answer": "اليمامة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو قائد معركة الزلاقة ؟",
        "answer": "يوسف بن تاشفين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النبي الملقب بذي النون ؟",
        "answer": "يونس عليه السلام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في الألغاز: ماذا يكون في جيبك إذا وضعت يدك فيها ؟",
        "answer": "يدك",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من الأحجار الكريمة ذات صلابة موطنه الأصلي بورما ؟",
        "answer": "ياقوت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو من شارف الاحتلام وهو دون المراهق ؟",
        "answer": "يافع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "منظمة التربية و العلم و الثقافة و هي إحدى الوكالات المتخصصة التابعة للأمم المتحدة ؟",
        "answer": "اليونسكو",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هو نقيض النوم و الغفلة ؟",
        "answer": "يقظة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة: هو ما نضج من الثمر ؟",
        "answer": "يانع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أين يقع سد مأرب ؟",
        "answer": "اليمن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في القرآن مُسمَّى أطلق على غزوة بدر ؟",
        "answer": "يوم الفرقان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النبي الذي لم يتزوج قط ؟",
        "answer": "يحي عليه السلام",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي المادة الخضراء الملونة للنبات ؟",
        "answer": "يخضور",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "هي نوع من أنواع الزهور ؟",
        "answer": "الياسمين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اللغة : هو العلم وزوال الشك ؟",
        "answer": "يقين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في كتاب الله هم الطائفة التي زعمت أن عزيراً ابن الله ؟",
        "answer": "اليهود",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الذي بنى الأقصى ؟",
        "answer": "يعقوب عليه السلام",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل : الوقت أنفس ما عنيت بحفظه و أراه أسهل ما عليك ..............",
        "answer": "يضيع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو أطول نهر في آسيا ؟",
        "answer": "يانغتسي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي المنطقة الطرية المتحركة في رأس الطفل ؟",
        "answer": "اليافوخ",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من القائل : اياك واعراض الرجال ؟",
        "answer": "يزيد بن المهلب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "شجرها أنبتها الله تعالى لنبي الله يونس عليه السلام ؟",
        "answer": "اليقطين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو النهر الشديد الجري الكثير الماء ؟",
        "answer": "اليعبوب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "جغرافي و كاتب سير عربي صاحب كتاب معجم البلدان - معجم الأدباء ؟",
        "answer": "ياقوت الحمودي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو عنصر بسيط رمادي ضارب إلى الزرقة و هو من الكحول يستعمل في تطهير الجروح ؟",
        "answer": "اليود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في الجغرافيا : ما هي أكثر الدُول إنتاجاً للؤلؤ ؟",
        "answer": "اليابان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "عنصر فلزي مشع يستخدم في صناعة القنبلة الذرية و وقودا للمفاعل النووي ؟",
        "answer": "يورانيوم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل قول المتنبي: ذُو العقلِ يَشْقَى في النّعِيمِ بعقله وَأَخُو الجَهَالَةِ في الشَّقَاوَةِ .........",
        "answer": "ينعم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هو مقياس طولي يقدر بنسبة 32 إلى 35 من المتر ؟",
        "answer": "يارده",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "تطلق على السنة الشديدة العسيرة التي لا فرج فيها ؟",
        "answer": "اليهماء",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "هي الدولة التي عاصمتها أثينا ؟",
        "answer": "اليونان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "في التاريخ : هي إحدى الدول التي سماها العرب سابقاً بالواق واق ؟",
        "answer": "اليابان",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المنظمة الدولية المسؤولة عن التربية والعلم والثقافة؟",
        "answer": "يونسكو",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم أحد أبناء النبي نوح عليه السلام الذي تُنسب إليه بعض الشعوب؟",
        "answer": "يافث",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من اللاعب الوحيد الذي فاز بالكرة الذهبية وهو حارس مرمى؟",
        "answer": "ياشين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم النبات الطبي المستخدم لعلاج اضطرابات الجهاز الهضمي والذي يعطي زيتًا عطريًا؟",
        "answer": "يانسون",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الحالة التي تعني الانتباه والوعي الكامل؟",
        "answer": "يقظة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل المثل الشعبي الشهير الذي يضرب فيمن لا يثمن الشيء لجهله بقيمته: \"اللي ما يعرف الصقر....\"",
        "answer": "يشويه",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "أكمل المثل: ظنُّ العاقل خير من ...",
        "answer": "يقين الجاهل",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مصطلح بمعنى حذر وفطن ومستعد لأي أمر مباغت",
        "answer": "يقظ",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماهي العملة الرسمية لدولة اليابان؟",
        "answer": "ين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "سورة من سور القرآن الكريم تُلقب بقلب القرآن",
        "answer": "سورة يس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "حجر كريم أحمر اللون يُعد من أثمن الأحجار",
        "answer": "الياقوت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم المعركة الحاسمة في حروب الردة وكانت ضد مسيلمة الكذاب؟",
        "answer": "معركة اليمامة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو المصطلح الفقهي الذي يُطلق على اليمين الكاذبة التي يحلفها الشخص عمداً ليقتطع بها حق غيره بغير حق؟",
        "answer": "اليمين الغموس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من هم الفئة المقصودين بلفظ \"المغضوب عليهم\" في سورة الفاتحة؟",
        "answer": "اليهود",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ماذا تسمى الفراشة والنحلة في مرحلتها الأولى بعد خروجها من البيضة؟",
        "answer": "يرقة",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "من أشهر من فسر الرؤى من الأنبياء؟",
        "answer": "يوسف عليه السلام",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "مركبة مائية كبيرة تستخدم للترفيه والرحلات البحرية السياحية",
        "answer": "يخت",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم الغلام الذي رافق موسى أثناء مقابلته الخضر؟",
        "answer": "يوشع بن نون (عليه السلام)",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم وكالة الشرطة الأوروبية التي تنسق مكافحة الجريمة بين دول الاتحاد الأوروبي؟",
        "answer": "يوروبول",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي النقطة الطبيعية التي تتدفق منها المياه الجوفية إلى سطح الأرض وتُعرف أيضاً بعين الماء؟",
        "answer": "ينبوع",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هي الحالة النفسية التي تعبر عن فقدان الأمل في تحقيق شيء مرغوب فيه؟",
        "answer": "يأس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "في أي دولة أقيمت الألعاب الأولمبية لأول مرة؟",
        "answer": "اليونان",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما هو النادي الأكثر خسارة في نهائيات بطولة دوري أبطال أوروبا تاريخياً؟",
        "answer": "يوفنتوس",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الأول",
        "question": "ما اسم القسم المؤكد في الإسلام والذي يجب الوفاء به أو دفع كفارة عند حنثه؟",
        "answer": "يمين",
        "difficulty": "simple",
        "difficultyLabel": "بسيط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النبي المعروف باسم إسرائيل ؟",
        "answer": "يعقوب -عليه السلام-",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المصدر الطبيعي للمياه الجوفية التي تتدفق تلقائيًا إلى سطح الأرض؟",
        "answer": "ينبوع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يسمى الشاب في مقتبل العمر؟",
        "answer": "يافع",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "مدينة من المدن التي شهدت مؤتمرًا عالميًا في الحرب العالمية الثانية وتقع على الساحل الجنوبي لشبه جزيرة القرم",
        "answer": "يالطا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو اللفظ اللغوي الذي يُطلق في معاجم اللغة العربية على النهر أو الجدول شديد الجريان والكثير الماء؟",
        "answer": "يعبوب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم النبات الذي أنبته الله تعالى فوق النبي يونس عليه السلام بعد خروجه من بطن الحوت؟",
        "answer": "يقطين",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم المنطقة اللينة في جمجمة المولود الجديد؟",
        "answer": "يافوخ",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قالوا في الأمثال: زامر الحي لا ...",
        "answer": "يٌطرب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "قوم فاسدين حاصرهم ذو القرنين خلف سد منيع، يخرجون في آخر الزمان كعلامة من علامات الساعة الكبرى",
        "answer": "يأجوج ومأجوج",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في اي بلد نشأت رياضة الجودو؟",
        "answer": "اليابان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم الحالة المرضية التي تتميز باصفرار الجلد والعينين نتيجة ارتفاع البيليروبين؟",
        "answer": "يرقان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو المدرب الألماني الذي قاد منتخب بلاده للفوز بكأس العالم 2014 لكرة القدم؟",
        "answer": "يواكيم لوف",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما اسم السجل الشخصي الذي يدون فيه الشخص أحداث وخواطر يومه؟",
        "answer": "يوميات",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو بطل الأولومبياد الذي أطلق عليه الرجل الأسرع في التاريخ؟",
        "answer": "يوسين بولت",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا يطلق على البحر أو الماء الكثير والمتسع؟",
        "answer": "اليم",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النجم السعودي الذي حقق لقب هداف كأس آسيا 2007 بالتساوي مع العراقي يونس محمود والياباني تاكاهارا؟",
        "answer": "ياسر القحطاني",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماهي عاصمة دولة أرمينيا؟",
        "answer": "يريفان",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "في أي دولة عربية تقع قرية \"الهجرين\" التاريخية المشهورة بمبانيها الطينية الشاهقة المشيدة فوق جبل صخري؟",
        "answer": "اليمن",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المركب العضوي الذي يعتبر الناتج النهائي لعملية التمثيل الغذائي للبروتينات في الثدييات ويتم إخراجه عن طريق البول؟",
        "answer": "يوريا",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "أحد الألعاب المحرمة التي تعتمد على السحب العشوائي للأرقام للفوز بجوائز",
        "answer": "يانصيب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ماذا كانت تسمى المدينة المنورة قبل هجرة الرسول عليه الصلاة والسلام إليها؟",
        "answer": "يثرب",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "من هو النبي الذي بُشرت به أمه وهي عاقر وأبوه شيخ كبير؟",
        "answer": "يحيى",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثاني",
        "question": "ما هو المصطلح الجغرافي الذي يطلق على الجزء الصلب من سطح الأرض الذي لا تغطيه المياه؟",
        "answer": "يابسة",
        "difficulty": "medium",
        "difficultyLabel": "متوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو مؤسس دولة المرابطين في المغرب والأندلس؟",
        "answer": "يوسف بن تاشفين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي السورة التي تُسمى بقلب القرآن؟",
        "answer": "سورة يس",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما العنصر المشع الذي يستخدم كوقود في المفاعلات النووية؟",
        "answer": "يورانيوم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من اللاعب السعودي الذي لعب في نادي ليغانيس الإسباني؟",
        "answer": "يحيى الشهري",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي وحدة قياس الطول البريطانية والأمريكية التي تعادل ثلاثة أقدام؟",
        "answer": "ياردة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم المدينة السورية التي تشتهر بكونها من أقدم الحواضر المأهولة في التاريخ؟",
        "answer": "يبرود",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاسم الحقيقي للقائد صلاح الدين الايوبي؟",
        "answer": "يوسف بن أيوب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الاسم الذي يطلق على صغير الغزال أو الظبي في مراحله الأولى، خاصة عندما يكون لونه يميل إلى الحمرة مع بياض؟",
        "answer": "اليعفور",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي عاصمة جمهورية الكاميرون؟",
        "answer": "ياوندي",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي المنصة الّتي تم تأسيسها عام 2005 وتعتبر ثاني أكثر منصة زيارة عالميًا بعد جوجل؟",
        "answer": "يوتيوب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو اسم اليوم التاريخي المشهود الذي التقى فيه نبي الله موسى (عليه السلام) بسحرة فرعون؟",
        "answer": "يوم الزينة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "كلمة ورد ذكرها في القرآن ومعناها الدخان الأسود شديد الحرارة",
        "answer": "يَحموم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الصديق المقرب للكابتن ماجد في سلسلة الأنمي الشهيرة \"الكابتن ماجد\"؟",
        "answer": "ياسين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هي الحشرة الطائرة المعروفة بجسمها الطويل والألوان الزاهية؟",
        "answer": "اليعسوب",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما المبدأ الإسلامي الذي يُشير إلى سهولة الدين وعدم التكليف بما لا يُطاق؟",
        "answer": "يسر",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما اسم الحشرة المضيئة؟",
        "answer": "يراعة",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما هو الاعتقاد الجازم الذي لا يعتريه شك؟",
        "answer": "يقين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "من هو الذي كان قميصه دليلاً على براءته، ثم دليلاً على الخيانة، ومرة شفاءً والده؟",
        "answer": "يوسف (عليه السلام)",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ما الميقات الذي وقّته النبي ﷺ لأهل اليمن ومن مرّ بطريقهم قاصدًا الحج أو العمرة؟",
        "answer": "يلملم",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "ماهي العملة الرسمية للاتحاد الأوروبي والذي تعد ثاني أكثر العملات تداولاً في العالم؟",
        "answer": "يورو",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "أكمل المثل السائر: \"إذا أردت أن تُطاع، فأمر بما ____\"؟",
        "answer": "يُستطاع",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      },
      {
        "subject": "المستوى الثالث",
        "question": "زهرة عطرية شهيرة ترتبط تاريخياً بدمشق، وتتميز ببتلاتها البيضاء الناصعة ورائحتها النفاذة التي تفوح ليلاً",
        "answer": "الياسمين",
        "difficulty": "aboveMedium",
        "difficultyLabel": "فوق المتوسط"
      }
    ]
  }
];

function buildBookQuestionBank(bookLetters) {
  return bookLetters.map((item) => ({
    ...item,
    questions: item.questions.map((question) => ({
      ...question,
      subject: question.subject || "كتاب مسابقات حروف",
      difficulty: question.difficulty || "medium",
      difficultyLabel: question.difficultyLabel || "متوسط",
    })),
  }));
}

const LETTERS = buildBookQuestionBank(BOOK_LETTERS);

const state = {
  cells: createCells(),
  selectedIndex: null,
  phase: "idle",
  currentTeam: null,
  transferredFrom: null,
  winner: null,
  winningPath: [],
  matchOver: false,
  currentRound: 1,
  totalRounds: 3,
  roundWins: {
    red: 0,
    green: 0,
  },
  answerVisible: false,
  seconds: QUESTION_SECONDS,
  timerId: null,
  timedOut: false,
  difficultyQueue: createDifficultyQueue(),
  usedQuestionKeys: new Set(),
  teams: {
    red: { name: "الأحمر", score: 0 },
    green: { name: "الأخضر", score: 0 },
  },
};

const board = document.querySelector("#letter-board");
const phaseLabel = document.querySelector("#phase-label");
const turnLabel = document.querySelector("#turn-label");
const selectedLetter = document.querySelector("#selected-letter");
const subjectLabel = document.querySelector("#subject-label");
const questionText = document.querySelector("#question-text");
const answerBox = document.querySelector("#answer-box");
const answerText = document.querySelector("#answer-text");
const redScore = document.querySelector("#red-score");
const greenScore = document.querySelector("#green-score");
const redName = document.querySelector("#red-name");
const greenName = document.querySelector("#green-name");
const redBuzzName = document.querySelector("#red-buzz-name");
const greenBuzzName = document.querySelector("#green-buzz-name");
const redBuzz = document.querySelector("#red-buzz");
const greenBuzz = document.querySelector("#green-buzz");
const correctAnswer = document.querySelector("#correct-answer");
const transferQuestion = document.querySelector("#transfer-question");
const showAnswer = document.querySelector("#show-answer");
const showAnswerLabel = document.querySelector("#show-answer-label");
const newQuestion = document.querySelector("#new-question");
const sameLetter = document.querySelector("#same-letter");
const newRound = document.querySelector("#new-round");
const timerPhase = document.querySelector("#timer-phase");
const timerDisplay = document.querySelector("#timer-display");
const timerToggle = document.querySelector("#timer-toggle");
const timerReset = document.querySelector("#timer-reset");
const winnerCard = document.querySelector("#winner-card");
const winnerName = document.querySelector("#winner-name");
const roundMessage = document.querySelector("#round-message");
const roundWinnerName = document.querySelector("#round-winner-name");
const roundMessageNew = document.querySelector("#round-message-new");
const roundLabel = document.querySelector("#round-label");
const roundOptions = [...document.querySelectorAll("[data-rounds]")];
const displayLink = document.querySelector("#display-link");
const displayRedLink = document.querySelector("#display-red-link");
const displayGreenLink = document.querySelector("#display-green-link");
const roomCodeLabel = document.querySelector("#room-code");
const copyRoomLink = document.querySelector("#copy-room-link");
const exitGame = document.querySelector("#exit-game");
const hostFrameGreenTop = document.querySelector("#host-frame-green-top");
const hostFrameGreenBottom = document.querySelector("#host-frame-green-bottom");
const hostFrameRedLeft = document.querySelector("#host-frame-red-left");
const hostFrameRedRight = document.querySelector("#host-frame-red-right");

const roomCode = setupRoomCode();
const roomQuery = encodeURIComponent(roomCode);
const channel = globalThis.BroadcastChannel
  ? new BroadcastChannel(`حروف-game-${roomCode}`)
  : { postMessage() {}, addEventListener() {} };
const usesLocalServerEvents = location.protocol === "http:"
  && (
    location.hostname === "localhost"
    || location.hostname === "127.0.0.1"
    || /^\d+\.\d+\.\d+\.\d+$/.test(location.hostname)
  );

const timerIcons = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14"></path><path d="M16 5v14"></path></svg>',
};

function normalizeRoomCode(value) {
  return String(value || "")
    .trim()
    .replace(/\D/g, "")
    .slice(0, ROOM_CODE_LENGTH);
}

function isCompleteRoomCode(value) {
  return normalizeRoomCode(value).length === ROOM_CODE_LENGTH;
}

function createRoomCode() {
  const values = new Uint32Array(ROOM_CODE_LENGTH);

  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(values);
  } else {
    values.forEach((_, index) => {
      values[index] = Math.floor(Math.random() * 10);
    });
  }

  return [...values].map((value) => String(value % 10)).join("");
}

function setupRoomCode() {
  const params = new URLSearchParams(location.search);
  let code = normalizeRoomCode(params.get("room"));

  if (!isCompleteRoomCode(code)) {
    const storedCode = normalizeRoomCode(localStorage.getItem("huroof-room"));
    code = isCompleteRoomCode(storedCode) ? storedCode : createRoomCode();
    params.set("room", code);
    history.replaceState(null, "", `${location.pathname}?${params.toString()}${location.hash}`);
  }

  localStorage.setItem("huroof-room", code);
  return code;
}

function withRoom(path) {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}room=${roomQuery}`;
}

function publishFallbackState(payload) {
  fetch(withRoom("/state"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

function subscribeFallbackBuzz(onBuzz) {
  if (usesLocalServerEvents) {
    const serverEvents = new EventSource(withRoom("/events"));

    serverEvents.addEventListener("buzz", (event) => {
      try {
        onBuzz(JSON.parse(event.data));
      } catch {
        // تجاهل حدث غير مكتمل من الخادم.
      }
    });

    return () => serverEvents.close();
  }

  const intervalId = window.setInterval(() => {
    fetch(withRoom("/buzz?take=1"))
      .then((response) => response.ok ? response.json() : null)
      .then((buzzRequest) => {
        if (buzzRequest?.type === "buzz" && (!buzzRequest.room || buzzRequest.room === roomCode)) {
          onBuzz(buzzRequest);
        }
      })
      .catch(() => {});
  }, 350);

  return () => window.clearInterval(intervalId);
}

const roomSync = window.HuroofSync?.createRoomSync?.({
  roomCode,
  onBuzz: handleBuzzRequest,
  fallbackPublish: publishFallbackState,
  fallbackSubscribeBuzz: subscribeFallbackBuzz,
}) || {
  mode: "fallback",
  publish: publishFallbackState,
  subscribeBuzz: (callback) => subscribeFallbackBuzz(callback),
};

function getDisplayRoomUrl(baseUrl = location.href, team = "") {
  const url = new URL(withRoom("display.html"), baseUrl);
  if (team === "red" || team === "green") {
    url.searchParams.set("team", team);
  }
  return url.toString();
}

function updateRoomControls(displayUrl = getDisplayRoomUrl()) {
  if (roomCodeLabel) {
    roomCodeLabel.value = roomCode;
  }

  if (displayLink) {
    displayLink.href = displayUrl;
  }

  if (displayRedLink) {
    displayRedLink.href = getDisplayRoomUrl(displayUrl, "red");
  }

  if (displayGreenLink) {
    displayGreenLink.href = getDisplayRoomUrl(displayUrl, "green");
  }
}

const roomCodeForm = document.querySelector("#room-code-form");
roomCodeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCode = normalizeRoomCode(roomCodeLabel?.value || "");
  if (!isCompleteRoomCode(newCode)) {
    roomCodeLabel?.focus();
    return;
  }
  localStorage.setItem("huroof-room", newCode);
  const url = new URL(location.href);
  url.searchParams.set("room", newCode);
  location.assign(url.toString());
});

async function copyDisplayRoomLink() {
  if (!copyRoomLink) {
    return;
  }

  const link = displayLink?.href || getDisplayRoomUrl();

  try {
    await navigator.clipboard.writeText(link);
    copyRoomLink.textContent = "تم النسخ";
    window.setTimeout(() => {
      copyRoomLink.textContent = "نسخ الرابط";
    }, 1400);
  } catch {
    window.prompt("انسخ رابط شاشة المتسابقين", link);
  }
}

function exitCurrentGame() {
  // إذا فُتحت كنافذة popup من index.html → أغلق النافذة فقط
  if (window.opener && !window.opener.closed) {
    window.close();
  } else {
    window.location.replace(withRoom("index.html"));
  }
}

function closeApp() {
  navigator.app?.exitApp?.();
  window.open("", "_self");
  window.close();
  globalThis.close?.();

  window.setTimeout(() => {
    if (!document.hidden) {
      history.go(-99);
    }
  }, 80);
}

function createCells(previousLetters = []) {
  return createLetterOrder(previousLetters).map((item, index) => ({
    letter: item.letter,
    questions: item.questions,
    subject: null,
    question: null,
    answer: null,
    difficulty: null,
    questionQueues: createEmptyQuestionQueues(),
    lastQuestionIndex: null,
    index,
    row: Math.floor(index / COLS),
    col: index % COLS,
    owner: null,
  }));
}

function createEmptyQuestionQueues() {
  return QUESTION_LEVELS.reduce((queues, level) => {
    queues[level.key] = [];
    return queues;
  }, {});
}

function createLetterOrder(previousLetters = []) {
  if (LETTERS.length <= BOARD_CELLS) {
    return shuffle([...LETTERS]);
  }

  if (previousLetters.length !== BOARD_CELLS) {
    return shuffle([...LETTERS]).slice(0, BOARD_CELLS);
  }

  const previousSet = new Set(previousLetters);
  const missingLastRound = LETTERS.filter((item) => !previousSet.has(item.letter));
  const returningLetters = shuffle(LETTERS.filter((item) => previousSet.has(item.letter)));
  const selected = [
    ...missingLastRound,
    ...returningLetters.slice(0, BOARD_CELLS - missingLastRound.length),
  ];

  for (let attempt = 0; attempt < 60; attempt += 1) {
    const candidate = shuffle([...selected]);
    const changedPositions = candidate.filter((item, index) => item.letter !== previousLetters[index]).length;

    if (changedPositions >= Math.floor(BOARD_CELLS * 0.75)) {
      return candidate;
    }
  }

  return shuffle(selected);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createDifficultyQueue(size = BOARD_CELLS) {
  const levels = [];

  for (let index = 0; index < size; index += 1) {
    levels.push(QUESTION_LEVELS[index % QUESTION_LEVELS.length]);
  }

  return shuffle(levels);
}

function getQuestionLevelForQuestion() {
  if (!state.difficultyQueue?.length) {
    state.difficultyQueue = createDifficultyQueue();
  }

  return state.difficultyQueue.shift();
}

function refillQuestionQueue(cell, levelKey) {
  const makeQuestionKey = (index) => `${cell.letter}:${index}`;
  let indices = cell.questions
    .map((question, index) => (question.difficulty === levelKey ? index : null))
    .filter((index) => index !== null && !state.usedQuestionKeys.has(makeQuestionKey(index)));

  if (!indices.length) {
    indices = cell.questions
      .map((_, index) => index)
      .filter((index) => !state.usedQuestionKeys.has(makeQuestionKey(index)));
  }

  if (!indices.length) {
    indices = cell.questions.map((_, index) => index);
  }

  indices = shuffle(indices);

  if (indices[0] === cell.lastQuestionIndex && indices.length > 1) {
    indices.push(indices.shift());
  }

  cell.questionQueues[levelKey] = indices;
}

function pickQuestion(cell) {
  const level = getQuestionLevelForQuestion();
  const queueKey = level.key;

  if (!cell.questionQueues) {
    cell.questionQueues = createEmptyQuestionQueues();
  }

  if (!cell.questionQueues[queueKey]?.length) {
    refillQuestionQueue(cell, queueKey);
  }

  const idx = cell.questionQueues[queueKey].shift();
  cell.lastQuestionIndex = idx;
  state.usedQuestionKeys.add(`${cell.letter}:${idx}`);
  const q = cell.questions[idx];
  cell.subject = q.subject;
  cell.question = q.question;
  cell.answer = q.answer;
  cell.difficulty = q.difficultyLabel || level.label;
}

function renderBoard() {
  board.replaceChildren();

  const makeFrameCell = (team) => {
    const cell = document.createElement("div");
    cell.className = `frame-cell frame-cell-${team}`;
    cell.setAttribute("aria-hidden", "true");
    return cell;
  };

  const makeRedColumn = () => {
    const column = document.createElement("div");
    column.className = "hex-column hex-column-red";
    column.setAttribute("aria-hidden", "true");
    for (let row = 0; row < ROWS + 1; row += 1) {
      column.append(makeFrameCell("red"));
    }
    return column;
  };

  board.append(makeRedColumn());

  for (let colIndex = 0; colIndex < COLS; colIndex += 1) {
    const column = document.createElement("div");
    column.className = `hex-column hex-column-play ${colIndex % 2 === 1 ? "is-offset" : ""}`;
    column.setAttribute("role", "group");
    column.setAttribute("aria-label", `عمود ${colIndex + 1}`);

    column.append(makeFrameCell("green"));
    state.cells
      .filter((cell) => cell.col === colIndex)
      .sort((a, b) => a.row - b.row)
      .forEach((cell) => {
        const button = document.createElement("button");
        button.className = "letter-cell";
        button.type = "button";
        button.dataset.index = String(cell.index);
        button.setAttribute("role", "gridcell");
        button.setAttribute("aria-label", `حرف ${cell.letter}`);
        button.textContent = cell.letter;
        button.addEventListener("click", () => selectLetter(cell.index));
        column.append(button);
      });
    column.append(makeFrameCell("green"));
    board.append(column);
  }

  board.append(makeRedColumn());
}

function selectLetter(index) {
  const cell = state.cells[index];

  if (!cell || cell.owner || state.winner || state.matchOver) {
    return;
  }

  pickQuestion(cell);
  stopTimer();
  state.selectedIndex = index;
  state.phase = "open";
  state.currentTeam = null;
  state.transferredFrom = null;
  state.answerVisible = false;
  state.seconds = QUESTION_SECONDS;
  state.timedOut = false;
  startTimer();
  updateAll();
}

function buzz(team) {
  if (state.phase !== "open" || state.winner || state.matchOver) {
    return;
  }

  state.currentTeam = team;
  state.phase = "first";
  state.seconds = ANSWER_SECONDS;
  state.timedOut = false;
  restartTimer();
  updateAll();
}

function handleBuzzRequest(request) {
  const team = typeof request === "string" ? request : request?.team;
  const selectedIndex = typeof request === "object" ? request.selectedIndex : null;

  if (team !== "red" && team !== "green") {
    return;
  }

  if (selectedIndex !== null && selectedIndex !== undefined && selectedIndex !== state.selectedIndex) {
    return;
  }

  buzz(team);
}

function markCorrect() {
  const cell = getSelectedCell();

  if (!cell || !state.currentTeam || cell.owner || state.winner || state.timedOut) {
    return;
  }

  cell.owner = state.currentTeam;
  state.teams[state.currentTeam].score += 1;
  state.answerVisible = true;
  state.phase = "resolved";
  stopTimer();

  const result = getRoundWinner(state.currentTeam);
  if (result) {
    finishRound(result.team, result.path);
  }

  updateAll();
}

function transferToOtherTeam() {
  const cell = getSelectedCell();

  if (state.phase !== "first" || !cell || cell.owner || !state.currentTeam || state.winner || state.matchOver) {
    return;
  }

  state.transferredFrom = state.currentTeam;
  state.currentTeam = otherTeam(state.currentTeam);
  state.phase = "second";
  state.seconds = ANSWER_SECONDS;
  state.timedOut = false;
  restartTimer();
  updateAll();
}

function chooseNewQuestion() {
  if (state.winner || state.matchOver) {
    return;
  }

  const cell = getSelectedCell();

  if (!cell || cell.owner) {
    return;
  }

  pickQuestion(cell);
  state.phase = "open";
  state.currentTeam = null;
  state.transferredFrom = null;
  state.answerVisible = false;
  state.seconds = QUESTION_SECONDS;
  state.timedOut = false;
  restartTimer();
  updateAll();
}

function resetSameLetter() {
  if (state.selectedIndex === null || state.winner) {
    return;
  }

  const cell = getSelectedCell();

  if (!cell || cell.owner) {
    return;
  }

  pickQuestion(cell);
  state.phase = "open";
  state.currentTeam = null;
  state.transferredFrom = null;
  state.answerVisible = false;
  state.seconds = QUESTION_SECONDS;
  state.timedOut = false;
  restartTimer();
  updateAll();
}

function isMatchDecided() {
  const winsNeeded = Math.ceil(state.totalRounds / 2);
  return state.roundWins.red >= winsNeeded || state.roundWins.green >= winsNeeded;
}

function nextRound() {
  if (state.matchOver) {
    resetMatch();
    return;
  }

  if (state.winner && (state.currentRound >= state.totalRounds || isMatchDecided())) {
    finishMatch();
    updateAll();
    return;
  }

  if (state.winner) {
    state.currentRound += 1;
  }

  resetBoardState();
  updateAll();
}

function resetMatch() {
  stopTimer();
  state.currentRound = 1;
  state.roundWins.red = 0;
  state.roundWins.green = 0;
  state.matchOver = false;
  state.usedQuestionKeys.clear();
  resetBoardState();
  updateAll();
}

function resetBoardState() {
  const previousLetters = state.cells.map((cell) => cell.letter);
  state.cells = createCells(previousLetters);
  state.selectedIndex = null;
  state.phase = "idle";
  state.currentTeam = null;
  state.transferredFrom = null;
  state.winner = null;
  state.winningPath = [];
  state.answerVisible = false;
  state.seconds = QUESTION_SECONDS;
  state.timedOut = false;
  state.difficultyQueue = createDifficultyQueue();
  state.teams.red.score = 0;
  state.teams.green.score = 0;
  renderBoard();
}

function toggleAnswer() {
  if (!getSelectedCell()) {
    return;
  }

  state.answerVisible = !state.answerVisible;
  updateAll();
}

function toggleTimer() {
  if (state.timerId) {
    stopTimer();
    return;
  }

  if (state.seconds <= 0) {
    state.seconds = state.phase === "first" || state.phase === "second" ? ANSWER_SECONDS : QUESTION_SECONDS;
    state.timedOut = false;
  }

  startTimer();
  updateTimer();
}

function startTimer() {
  if (state.timerId) {
    return;
  }

  state.timerId = window.setInterval(() => {
    state.seconds = Math.max(0, state.seconds - 1);

    if (state.seconds === 0) {
      state.timedOut = true;
      stopTimer();
      updateAll();
      return;
    }

    updateTimer();
    broadcast();
  }, 1000);
}

function stopTimer() {
  if (!state.timerId) {
    return;
  }

  window.clearInterval(state.timerId);
  state.timerId = null;
  updateTimer();
}

function restartTimer() {
  stopTimer();
  startTimer();
}

function resetTimer() {
  stopTimer();
  state.seconds = state.phase === "first" || state.phase === "second" ? ANSWER_SECONDS : QUESTION_SECONDS;
  state.timedOut = false;
  updateTimer();
}

function updateBoard() {
  const buttons = [...board.querySelectorAll(".letter-cell")];
  const path = new Set(state.winningPath);

  buttons.forEach((button) => {
    const index = Number(button.dataset.index);
    const cell = state.cells[index];
    button.classList.toggle("is-selected", state.selectedIndex === index);
    button.classList.toggle("is-red", cell.owner === "red");
    button.classList.toggle("is-green", cell.owner === "green");
    button.classList.toggle("is-path", path.has(index));
    button.disabled = Boolean(cell.owner || state.winner);
  });
}

function updateQuestion() {
  const cell = getSelectedCell();

  selectedLetter.textContent = cell ? cell.letter : "؟";
  subjectLabel.textContent = cell ? formatQuestionSubject(cell) : "اختر حرفًا من اللوحة";
  questionText.textContent = cell ? cell.question : "تظهر صيغة السؤال بعد اختيار الحرف.";
  answerText.textContent = cell ? cell.answer : "";
  answerBox.hidden = !cell || !state.answerVisible;
  showAnswerLabel.textContent = state.answerVisible ? "إخفاء الإجابة" : "إظهار الإجابة";
}

function formatQuestionSubject(cell) {
  return [cell.subject, cell.difficulty].filter(Boolean).join(" - ");
}

function updateStatus() {
  const labels = {
    idle: ["اختيار حرف", "المقدم"],
    open: ["الإجابة أولًا", "بانتظار الفريق"],
    first: ["الإجابة الأولى", teamName(state.currentTeam)],
    second: ["الإجابة الثانية", teamName(state.currentTeam)],
    resolved: ["تم احتساب الحرف", "سؤال جديد"],
    finished: ["انتهت الجولة", "بدون فائز"],
  };

  const [phase, turn] = state.matchOver
    ? ["انتهت المباراة", getMatchWinnerLabel()]
    : state.winner
    ? ["اكتمل الخط", teamName(state.winner)]
    : state.timedOut && state.phase === "first"
    ? ["انتهى الوقت", "حوّل السؤال للفريق الثاني"]
    : state.timedOut && state.phase === "second"
    ? ["انتهى الوقت", "بانتظار قرار المقدم"]
    : state.timedOut
    ? ["انتهى الوقت", "اختر سؤالًا آخر"]
    : labels[state.phase];

  phaseLabel.textContent = phase;
  turnLabel.textContent = turn;
  redScore.textContent = state.roundWins.red;
  greenScore.textContent = state.roundWins.green;
  redBuzzName.textContent = state.teams.red.name;
  greenBuzzName.textContent = state.teams.green.name;
  if (hostFrameGreenTop) hostFrameGreenTop.textContent = state.teams.green.name;
  if (hostFrameGreenBottom) hostFrameGreenBottom.textContent = state.teams.green.name;
  if (hostFrameRedLeft) hostFrameRedLeft.textContent = state.teams.red.name;
  if (hostFrameRedRight) hostFrameRedRight.textContent = state.teams.red.name;
  roundLabel.textContent = `الجولة ${state.currentRound} من ${state.totalRounds}`;
  winnerCard.hidden = !state.winner && !state.matchOver;
  winnerName.textContent = state.matchOver ? getMatchWinnerLabel() : state.winner ? teamName(state.winner) : "";
  roundMessage.hidden = !state.winner && !state.matchOver;
  roundMessage.classList.toggle("is-red", state.winner === "red");
  roundMessage.classList.toggle("is-green", state.winner === "green");
  roundWinnerName.textContent = state.matchOver
    ? `${getMatchWinnerLabel()} انتهت المباراة`
    : state.winner
      ? `${teamName(state.winner)} كسب الجولة`
      : "";
  const matchEnds = state.winner && (state.currentRound >= state.totalRounds || isMatchDecided());
  roundMessageNew.textContent = state.matchOver
    ? "مباراة جديدة"
    : matchEnds
      ? "عرض نتيجة المباراة"
      : "الجولة التالية";
  newRound.lastChild.textContent = state.matchOver
    ? " مباراة جديدة"
    : matchEnds
      ? " عرض نتيجة المباراة"
      : " الجولة التالية";
}

function updateControls() {
  const hasOpenQuestion = Boolean(getSelectedCell()) && !state.winner && !state.matchOver;
  const canBuzz = state.phase === "open" && hasOpenQuestion && !state.timedOut;
  const canJudge = (state.phase === "first" || state.phase === "second") && hasOpenQuestion && !state.timedOut;
  const canTransfer = state.phase === "first" && Boolean(state.currentTeam) && hasOpenQuestion;

  redBuzz.disabled = !canBuzz;
  greenBuzz.disabled = !canBuzz;
  correctAnswer.disabled = !canJudge;
  transferQuestion.disabled = !canTransfer;
  showAnswer.disabled = !hasOpenQuestion;
  sameLetter.disabled = !hasOpenQuestion || getSelectedCell()?.owner;
  newQuestion.disabled = Boolean(state.winner || state.matchOver);
  timerToggle.disabled = Boolean(state.winner || state.matchOver);
  timerReset.disabled = Boolean(state.winner || state.matchOver);
  roundOptions.forEach((button) => {
    button.disabled = state.currentRound !== 1 || Boolean(state.winner || state.matchOver || state.cells.some((cell) => cell.owner));
  });
}

function updateTimer() {
  const minutes = Math.floor(state.seconds / 60);
  const seconds = state.seconds % 60;
  timerDisplay.textContent = `${pad(minutes)}:${pad(seconds)}`;
  timerDisplay.classList.toggle("is-low", state.seconds <= 5);
  timerToggle.innerHTML = state.timerId ? timerIcons.pause : timerIcons.play;
  timerToggle.setAttribute("aria-label", state.timerId ? "إيقاف المؤقت" : "تشغيل المؤقت");
  timerPhase.textContent = state.timedOut ? "انتهى الوقت" : state.phase === "second" ? "الإجابة الثانية" : state.phase === "first" ? "الإجابة الأولى" : "السؤال";
}

function updateAll() {
  if (!state.winner) {
    const result = getRoundWinner();

    if (result) {
      finishRound(result.team, result.path);
    }
  }

  updateBoard();
  updateQuestion();
  updateStatus();
  updateControls();
  updateTimer();
  broadcast();
}

function getSelectedCell() {
  if (state.selectedIndex === null) {
    return null;
  }

  return state.cells[state.selectedIndex] || null;
}

function getWinningPath(team) {
  const straightPath = getStraightWinningPath(team);

  if (straightPath.length) {
    return straightPath;
  }

  return team === "red"
    ? findConnectedPath(team, (cell) => cell.col === 0, (cell) => cell.col === COLS - 1)
    : findConnectedPath(team, (cell) => cell.row === 0, (cell) => cell.row === ROWS - 1);
}

function findConnectedPath(team, isStart, isFinished) {
  const starts = state.cells.filter((cell) => cell.owner === team && isStart(cell));
  const visited = new Set();
  const queue = starts.map((cell) => ({ index: cell.index, path: [cell.index] }));

  starts.forEach((cell) => visited.add(cell.index));

  while (queue.length) {
    const current = queue.shift();
    const cell = state.cells[current.index];

    if (isFinished(cell)) {
      return current.path;
    }

    getNeighbors(cell.index).forEach((neighborIndex) => {
      const neighbor = state.cells[neighborIndex];

      if (neighbor.owner !== team || visited.has(neighborIndex)) {
        return;
      }

      visited.add(neighborIndex);
      queue.push({
        index: neighborIndex,
        path: [...current.path, neighborIndex],
      });
    });
  }

  return [];
}

function getRoundWinner(preferredTeam = null) {
  const teams = preferredTeam ? [preferredTeam, otherTeam(preferredTeam)] : ["green", "red"];

  for (const team of teams) {
    const path = getWinningPath(team);

    if (path.length) {
      return { team, path };
    }
  }

  return null;
}

function finishRound(team, path) {
  if (state.winner || state.matchOver) {
    return;
  }

  state.winner = team;
  state.winningPath = path;
  state.phase = "finished";
  state.roundWins[team] += 1;
  stopTimer();
}

function finishMatch() {
  state.matchOver = true;
  state.phase = "finished";
  stopTimer();
}

function getStraightWinningPath(team) {
  if (team === "red") {
    for (let row = 0; row < ROWS; row += 1) {
      const path = state.cells
        .filter((cell) => cell.row === row)
        .map((cell) => cell.index);

      if (path.every((index) => state.cells[index].owner === "red")) {
        return path;
      }
    }

    return [];
  }

  for (let col = 0; col < COLS; col += 1) {
    const path = state.cells
      .filter((cell) => cell.col === col)
      .map((cell) => cell.index);

    if (path.every((index) => state.cells[index].owner === "green")) {
      return path;
    }
  }

  return [];
}

function getNeighbors(index) {
  const cell = state.cells[index];
  const candidates = [
    [cell.row - 1, cell.col],
    [cell.row + 1, cell.col],
    [cell.row, cell.col - 1],
    [cell.row, cell.col + 1],
    [cell.row - 1, cell.col - 1],
    [cell.row - 1, cell.col + 1],
    [cell.row + 1, cell.col - 1],
    [cell.row + 1, cell.col + 1],
  ];

  return candidates
    .filter(([row, col]) => row >= 0 && row < ROWS && col >= 0 && col < COLS)
    .map(([row, col]) => row * COLS + col);
}

function endWithoutWinner() {
  state.phase = "finished";
  state.selectedIndex = null;
  stopTimer();
  updateAll();
}

function setTotalRounds(totalRounds) {
  if (state.currentRound !== 1 || state.winner || state.matchOver || state.cells.some((cell) => cell.owner)) {
    return;
  }

  state.totalRounds = totalRounds;
  roundOptions.forEach((button) => {
    const active = Number(button.dataset.rounds) === totalRounds;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateAll();
}

function syncName(team, value) {
  state.teams[team].name = value.trim() || (team === "red" ? "الأحمر" : "الأخضر");
  updateAll();
}

function otherTeam(team) {
  return team === "red" ? "green" : "red";
}

function teamName(team) {
  if (!team) {
    return "المقدم";
  }

  return state.teams[team].name;
}

function getMatchWinnerLabel() {
  if (state.roundWins.red > state.roundWins.green) {
    return `${teamName("red")} فاز بالمباراة`;
  }

  if (state.roundWins.green > state.roundWins.red) {
    return `${teamName("green")} فاز بالمباراة`;
  }

  return "تعادل في المباراة";
}

function pad(value) {
  return String(value).padStart(2, "0");
}

channel.addEventListener("message", (event) => {
  if (event.data?.type === "final-exit") {
    closeApp();
    return;
  }

  if (event.data?.type === "request-state") {
    broadcast();
    return;
  }

  if (event.data?.type === "buzz") {
    handleBuzzRequest(event.data);
  }
});

roomSync.subscribeBuzz?.(handleBuzzRequest);

function broadcast() {
  const payload = {
    cells: state.cells.map(({ letter, subject, question, difficulty, index, row, col, owner }) =>
      ({ letter, subject: subject ?? "", question: question ?? "", difficulty: difficulty ?? "", index, row, col, owner })),
    selectedIndex: state.selectedIndex,
    phase: state.phase,
    currentTeam: state.currentTeam,
    winner: state.winner,
    winningPath: state.winningPath,
    matchOver: state.matchOver,
    currentRound: state.currentRound,
    totalRounds: state.totalRounds,
    roundWins: { ...state.roundWins },
    teams: {
      red: { ...state.teams.red },
      green: { ...state.teams.green },
    },
    seconds: state.seconds,
    timerRunning: Boolean(state.timerId),
    timedOut: state.timedOut,
    room: roomCode,
  };

  channel.postMessage(payload);
  roomSync.publish(payload);
}

redBuzz.addEventListener("click", () => buzz("red"));
greenBuzz.addEventListener("click", () => buzz("green"));
correctAnswer.addEventListener("click", markCorrect);
transferQuestion.addEventListener("click", transferToOtherTeam);
showAnswer.addEventListener("click", toggleAnswer);
newQuestion.addEventListener("click", chooseNewQuestion);
sameLetter.addEventListener("click", resetSameLetter);
newRound.addEventListener("click", nextRound);
roundMessageNew.addEventListener("click", nextRound);
timerToggle.addEventListener("click", toggleTimer);
timerReset.addEventListener("click", resetTimer);
redName.addEventListener("input", () => syncName("red", redName.value));
greenName.addEventListener("input", () => syncName("green", greenName.value));
roundOptions.forEach((button) => {
  button.addEventListener("click", () => setTotalRounds(Number(button.dataset.rounds)));
});

copyRoomLink?.addEventListener("click", copyDisplayRoomLink);
exitGame?.addEventListener("click", exitCurrentGame);
updateRoomControls();
renderBoard();
updateAll();

fetch("/network-info")
  .then((r) => r.json())
  .then(({ ips, port, displayUrl }) => {
    if (displayUrl) {
      const roomDisplayUrl = getDisplayRoomUrl(displayUrl);
      updateRoomControls(roomDisplayUrl);
      document.getElementById("display-url").textContent = roomDisplayUrl;
    } else if (ips.length > 0) {
      const roomDisplayUrl = getDisplayRoomUrl(`http://${ips[0]}:${port}`);
      updateRoomControls(roomDisplayUrl);
      document.getElementById("display-url").textContent = roomDisplayUrl;
    }
  })
  .catch(() => {});
