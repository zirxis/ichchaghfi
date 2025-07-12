// بيانات الأسئلة والتخصصات
const questions = [
    "هل تستمتع بحل الألغاز والأحاجي المعقدة؟",
    "هل تفضل العمل بمفردك على العمل في فريق؟",
    "هل تجد متعة في مساعدة الآخرين وتقديم الدعم لهم؟",
    "هل لديك شغف بالرسم والتصميم والإبداع البصري؟",
    "هل تتابع آخر أخبار التكنولوجيا والابتكارات الرقمية؟",
    "هل تحب تنظيم الأشياء وتخطيط المشاريع؟",
    "هل تشعر بالفضول لمعرفة كيف تعمل الأشياء من حولك؟",
    "هل تستمتع بالكتابة والتعبير عن أفكارك بالكلمات؟",
    "هل تفضل الأنشطة التي تتطلب حركة ونشاطًا بدنيًا؟",
    "هل لديك اهتمام بتحليل البيانات واستخلاص النتائج منها؟",
    "هل تستمتع بتحليل البيانات المعقدة واستخلاص الأنماط منها؟",
    "هل تفضل العمل في بيئة تتطلب التفكير النقدي وحل المشكلات المعقدة؟",
    "هل لديك اهتمام كبير بفهم السلوك البشري ودوافعه؟",
    "هل تجد نفسك مهتمًا بالصحة والطب والرعاية الصحية؟",
    "هل تستمتع بتصميم وتطوير المنتجات أو الخدمات الجديدة؟",
    "هل لديك شغف بالاستدامة والبيئة وكيفية حماية الكوكب؟",
    "هل تحب التعامل مع الأرقام والتحليلات المالية؟",
    "هل تستمتع بالبحث العلمي واكتشاف المعرفة الجديدة؟",
    "هل لديك مهارات قوية في التواصل والإقناع؟",
    "هل تفضل العمل في مجال يتطلب الإبداع الفني والتعبير عن الذات؟",
    "هل تستمتع بتعليم الآخرين ونقل المعرفة؟",
    "هل لديك اهتمام بالقانون والعدالة وحقوق الإنسان؟",
    "هل تحب العمل في الهواء الطلق والتعامل مع الطبيعة؟",
    "هل تستمتع بتنظيم الفعاليات والأحداث الكبيرة؟",
    "هل لديك شغف بالهندسة وتصميم الهياكل والأنظمة؟"
];

const specializations = {
    "المجال الطبي والصحي": {
        "description": "أنت مهتم بالصحة والرعاية، ولديك رغبة في مساعدة الناس على الشفاء. هذا المجال يتطلب التفاني والدراسة المكثفة والقدرة على التعامل مع المواقف الصعبة.",
        "scores": [
            {"question_index": 2, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1},
            {"question_index": 13, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 8, "نعم": 1, "ممكن": 0, "أحيانًا": -1, "لا": -2}
        ]
    },
    "المجال التقني والتكنولوجي": {
        "description": "أنت شخص منطقي، تحب بناء الأشياء من الصفر، ولديك صبر على حل المشكلات. هذا المجال يركز على إنشاء وتطوير التطبيقات والمواقع الإلكترونية والأنظمة الذكية.",
        "scores": [
            {"question_index": 0, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 4, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 6, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1},
            {"question_index": 11, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1},
            {"question_index": 24, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1}
        ]
    },
    "الهندسة والتخصصات الصناعية": {
        "description": "أنت لديك شغف بالهندسة وتصميم الهياكل والأنظمة، وتحب فهم كيفية عمل الآلات. هذا المجال يركز على تصميم وتطوير الأنظمة الميكانيكية والكهربائية والبيئية.",
        "scores": [
            {"question_index": 6, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 24, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 15, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1}
        ]
    },
    "العلوم الإنسانية والاجتماعية": {
        "description": "أنت فضولي بشأن السلوك البشري، تحب مساعدة الآخرين وفهم دوافعهم. هذا المجال يدرس العقل البشري والسلوك البشري والعمليات العقلية، بالإضافة إلى العلاقات العامة والتعليم.",
        "scores": [
            {"question_index": 2, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 12, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 18, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 20, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2}
        ]
    },
    "الاقتصاد وإدارة الأعمال": {
        "description": "أنت قائد بالفطرة، منظم، ولديك القدرة على التخطيط والتنفيذ. هذا المجال يتطلب مهارات تنظيمية قوية وقدرة على قيادة الفرق لتحقيق الأهداف، بالإضافة إلى التعامل مع الأرقام والتحليلات المالية.",
        "scores": [
            {"question_index": 5, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 14, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 16, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 23, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2}
        ]
    },
    "العلوم الأساسية والطبيعية": {
        "description": "أنت فضولي ومحب للاستكشاف، تستمتع بالبحث واكتشاف المعرفة الجديدة. هذا المجال يتطلب التفكير النقدي والتحليل الدقيق والصبر، ويركز على فهم الظواهر الطبيعية.",
        "scores": [
            {"question_index": 6, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 17, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 10, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2}
        ]
    },
    "الفنون والتصميم": {
        "description": "أنت فنان بطبعك، تهتم بالجماليات والتفاصيل البصرية. هذا المجال يجمع بين الإبداع الفني والمهارات التقنية لإنشاء تصاميم جذابة والتعبير عن الذات من خلال الفن.",
        "scores": [
            {"question_index": 3, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 19, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2}
        ]
    },
    "السياحة والطيران والخدمات": {
        "description": "أنت تحب التواصل مع الناس وتقديم الخدمات، ولديك اهتمام بالسفر والضيافة. هذا المجال يركز على تنظيم الفعاليات وتقديم تجارب مميزة للعملاء.",
        "scores": [
            {"question_index": 2, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1},
            {"question_index": 18, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1},
            {"question_index": 23, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2}
        ]
    },
    "الزراعة والبيئة": {
        "description": "أنت تحب العمل في الهواء الطلق والتعامل مع الطبيعة، ولديك اهتمام بالإنتاج الغذائي والاستدامة. هذا المجال يركز على تحسين الإنتاج الزراعي وسلامة الغذاء وحماية البيئة.",
        "scores": [
            {"question_index": 8, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1},
            {"question_index": 15, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 22, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2}
        ]
    },
    "القانون والشريعة": {
        "description": "أنت لديك اهتمام بالقانون والعدالة وحقوق الإنسان، وتحب حل النزاعات. هذا المجال يتطلب التفكير المنطقي والقدرة على التحليل والاستدلال.",
        "scores": [
            {"question_index": 0, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1},
            {"question_index": 11, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1},
            {"question_index": 21, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2}
        ]
    },
    "التخصصات المهنية والفنية": {
        "description": "أنت تفضل الأنشطة التي تتطلب مهارات يدوية وتطبيقية، وتحب بناء وإصلاح الأشياء. هذا المجال يشمل مجموعة واسعة من المهن التي تتطلب تدريبًا متخصصًا.",
        "scores": [
            {"question_index": 8, "نعم": 3, "ممكن": 1, "أحيانًا": 0, "لا": -2},
            {"question_index": 24, "نعم": 2, "ممكن": 1, "أحيانًا": 0, "لا": -1}
        ]
    }
};

// متغيرات الحالة
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;

// عناصر DOM
const homePage = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const resultsPage = document.getElementById("results-page");
const questionText = document.getElementById("question-text");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const progressFill = document.getElementById("progress-fill");
const answerButtons = document.querySelectorAll(".answer-btn");
const recommendedField = document.getElementById("recommended-field");
const analysisText = document.getElementById("analysis-text");

// تهيئة الصفحة
document.addEventListener("DOMContentLoaded", function() {
    totalQuestionsSpan.textContent = questions.length;
    setupAnswerButtons();
});

// إعداد أزرار الإجابة
function setupAnswerButtons() {
    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectAnswer(this.dataset.answer);
        });
    });
}

// بدء الاختبار
function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStarted = true;
    
    showPage("quiz");
    displayQuestion();
}

// عرض السؤال الحالي
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex];
        currentQuestionSpan.textContent = currentQuestionIndex + 1;
        
        // تحديث شريط التقدم
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressFill.style.width = progress + "%";
        
        // إزالة التحديد من جميع الأزرار
        answerButtons.forEach(button => {
            button.classList.remove("selected");
        });
        
        // إضافة تأثير الظهور
        document.querySelector(".question-card").style.opacity = "0";
        setTimeout(() => {
            document.querySelector(".question-card").style.opacity = "1";
        }, 100);
    } else {
        calculateResults();
    }
}

// اختيار إجابة
function selectAnswer(answer) {
    // إضافة التحديد للزر المختار
    answerButtons.forEach(button => {
        button.classList.remove("selected");
        if (button.dataset.answer === answer) {
            button.classList.add("selected");
        }
    });
    
    // حفظ الإجابة
    userAnswers[currentQuestionIndex] = answer;
    
    // الانتقال للسؤال التالي بعد تأخير قصير
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 500);
}

// حساب النتائج
function calculateResults() {
    const scores = {};
    
    // تهيئة النقاط لكل تخصص
    Object.keys(specializations).forEach(spec => {
        scores[spec] = 0;
    });
    
    // حساب النقاط لكل تخصص
    Object.keys(specializations).forEach(specName => {
        const spec = specializations[specName];
        
        spec.scores.forEach(scoreRule => {
            const questionIndex = scoreRule.question_index;
            const userAnswer = userAnswers[questionIndex];
            
            if (userAnswer && scoreRule[userAnswer] !== undefined) {
                scores[specName] += scoreRule[userAnswer];
            }
        });
    });
    
    // العثور على أعلى نقاط
    let maxScore = -Infinity;
    let recommendedSpec = "";
    
    Object.keys(scores).forEach(spec => {
        if (scores[spec] > maxScore) {
            maxScore = scores[spec];
            recommendedSpec = spec;
        } else if (scores[spec] === maxScore) {
            // في حالة تساوي النقاط، يمكن إضافة منطق لاختيار تخصص عشوائي أو بناءً على معايير أخرى
            // حاليًا، سيتم الاحتفاظ بالتخصص الأول الذي يحقق أعلى نقطة
        }
    });
    
    // عرض النتائج
    showResults(recommendedSpec);
}

// عرض النتائج
function showResults(specName) {
    recommendedField.textContent = specName;
    analysisText.textContent = specializations[specName].description;
    
    showPage("results");
    
    // إضافة تأثير الاحتفال
    setTimeout(() => {
        document.querySelector(".celebration-icon").style.animation = "bounce 1s infinite";
    }, 500);
}

// عرض صفحة معينة
function showPage(pageType) {
    // إخفاء جميع الصفحات
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });
    
    // عرض الصفحة المطلوبة
    switch(pageType) {
        case "home":
            homePage.classList.add("active");
            break;
        case "quiz":
            quizPage.classList.add("active");
            break;
        case "results":
            resultsPage.classList.add("active");
            break;
    }
}

// إعادة تشغيل الاختبار
function restartQuiz() {
    showPage("home");
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStarted = false;
}

// مشاركة النتائج
function shareResults() {
    const specName = recommendedField.textContent;
    const analysis = analysisText.textContent;
    
    const shareText = `لقد أكملت اختبار "ايش شغفي؟" والنتيجة هي: ${specName}\n\n${analysis}\n\nجرب الاختبار بنفسك!`;
    
    if (navigator.share) {
        navigator.share({
            title: "نتائج اختبار ايش شغفي؟",
            text: shareText,
            url: window.location.href
        });
    } else {
        // نسخ النص للحافظة
        navigator.clipboard.writeText(shareText).then(() => {
            alert("تم نسخ النتائج للحافظة!");
        }).catch(() => {
            // عرض النص في نافذة منبثقة
            prompt("انسخ النص التالي للمشاركة:", shareText);
        });
    }
}

// تأثيرات إضافية
document.addEventListener("DOMContentLoaded", function() {
    // تأثير التمرير السلس
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
    
    // تأثير الحركة للأيقونات
    const icons = document.querySelectorAll(".icon-item");
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
    });
});




