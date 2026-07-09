const fs = require("fs");
const path = require("path");

const outDir = __dirname;

const config = {
  company: "AES Egypt",
  legalName: "Ashraf El Sersawy Chartered Accountant",
  phone: "+02 33050685",
  whatsappNumber: "201XXXXXXXXX",
  addressEn: "57 Al-Quds Al Sharif St., Lebanon Sq., Mohandeseen, Giza, Egypt",
  addressAr: "57 شارع القدس الشريف، ميدان لبنان، المهندسين، الجيزة، مصر",
  siteUrl: "https://eng-mahmoud-mostafa.github.io/aes",
  logo: "/assets/images/aes-logo.png",
  founder: "/assets/images/founder.jpg",
  year: "2026",
};

const uploadedAssets = {
  logo: path.join(__dirname, "source-assets", "aes-logo.png"),
  founder: path.join(__dirname, "source-assets", "founder.jpg"),
};

const labels = {
  en: {
    locale: "en_US",
    dir: "ltr",
    langName: "English",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      faq: "FAQ",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms and Conditions",
    },
    cta: {
      consultation: "Book a Consultation",
      explore: "Explore Services",
      whatsapp: "Send Request on WhatsApp",
      whatsappConsult: "Book Consultation on WhatsApp",
      whatsappContact: "Contact Us on WhatsApp",
      learnMore: "Learn More",
      submit: "Submit Request",
    },
    footerDesc:
      "Professional audit, tax, accounting, legal, advisory, company formation, training, consulting, and translation services for businesses in Egypt.",
    copyright: "© 2026 AES Egypt. All rights reserved.",
    servicesTitle: "Services",
    quickLinks: "Navigation",
    serviceLinks: "Service Links",
    contact: "Contact",
    language: "Language",
    phone: "Phone",
    address: "Address",
    form: {
      title: "Request a Professional Consultation",
      intro:
        "Tell us what you need and AES Egypt will respond with the right next step.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company Name",
      service: "Service Needed",
      message: "Message",
      other: "Other",
      success: "Thank you. Your request is ready and our team can follow up with you.",
      error: "Please complete all required fields with valid information.",
      honeypot: "Leave this field empty",
    },
    breadcrumbHome: "Home",
    relatedFaq: "Related Questions",
    whoFor: "Who This Service Is For",
    benefits: "Key Benefits",
    provides: "What AES Egypt Provides",
    process: "Our Process",
  },
  ar: {
    locale: "ar_EG",
    dir: "rtl",
    langName: "العربية",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
    cta: {
      consultation: "احجز استشارة",
      explore: "استعرض الخدمات",
      whatsapp: "إرسال طلب عبر واتساب",
      whatsappConsult: "احجز استشارة عبر واتساب",
      whatsappContact: "تواصل معنا عبر واتساب",
      learnMore: "اعرف المزيد",
      submit: "إرسال الطلب",
    },
    footerDesc:
      "خدمات مهنية في التدقيق والضرائب والمحاسبة والاستشارات القانونية والمالية وتأسيس الشركات والتدريب والترجمة للشركات داخل مصر.",
    copyright: "© 2026 AES Egypt. جميع الحقوق محفوظة.",
    servicesTitle: "الخدمات",
    quickLinks: "روابط سريعة",
    serviceLinks: "روابط الخدمات",
    contact: "التواصل",
    language: "اللغة",
    phone: "الهاتف",
    address: "العنوان",
    form: {
      title: "اطلب استشارة مهنية",
      intro:
        "شاركنا احتياجك وسيقوم فريق AES Egypt بتحديد الخطوة المهنية المناسبة.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      service: "الخدمة المطلوبة",
      message: "الرسالة",
      other: "أخرى",
      success: "شكرًا لك. طلبك جاهز ويمكن لفريقنا المتابعة معك.",
      error: "يرجى استكمال جميع الحقول المطلوبة ببيانات صحيحة.",
      honeypot: "اترك هذا الحقل فارغًا",
    },
    breadcrumbHome: "الرئيسية",
    relatedFaq: "أسئلة ذات صلة",
    whoFor: "لمن تناسب هذه الخدمة",
    benefits: "أهم المزايا",
    provides: "ما الذي تقدمه AES Egypt",
    process: "منهجية العمل",
  },
};

const services = [
  {
    slug: "audit-assurance",
    icon: "M4 19V5m0 14h16M8 17V9m4 8V7m4 10v-6",
    en: {
      title: "Audit & Assurance",
      short:
        "Independent audit, assurance, review, and compliance support that strengthens business confidence.",
      h1: "Audit and Assurance Services in Egypt",
      description:
        "AES Egypt provides audit and assurance services in Egypt for companies that need reliable financial statement review, compliance clarity, and stronger stakeholder confidence. Our work is designed to support management, investors, lenders, and regulatory obligations with disciplined professional judgment.",
      who: [
        "Companies requiring independent financial statement audits.",
        "Business owners preparing for funding, restructuring, or expansion.",
        "Investors and boards that need clearer visibility into financial performance.",
      ],
      benefits: [
        "Improve confidence in financial reporting.",
        "Identify compliance gaps and operational risks.",
        "Support stronger governance and decision-making.",
      ],
      provides: [
        "Independent audit and assurance engagements.",
        "Financial statement review and management reporting observations.",
        "Compliance-focused analysis and practical recommendations.",
      ],
      process: [
        "Understand the business, reporting requirements, and risk profile.",
        "Plan the engagement, request documents, and define timelines.",
        "Perform audit and review procedures with management follow-up.",
        "Deliver clear findings, reports, and next-step recommendations.",
      ],
    },
    ar: {
      title: "التدقيق والمراجعة",
      short:
        "خدمات تدقيق ومراجعة مستقلة تدعم الالتزام وتعزز ثقة الإدارة والمستثمرين.",
      h1: "خدمات تدقيق ومراجعة الحسابات في مصر",
      description:
        "تقدم AES Egypt خدمات تدقيق ومراجعة الحسابات في مصر للشركات التي تحتاج إلى فحص مهني للقوائم المالية، وضمان أفضل للالتزام، ورؤية أوضح أمام الإدارة والمستثمرين والجهات ذات العلاقة.",
      who: [
        "الشركات التي تحتاج إلى مراجعة مالية مستقلة.",
        "أصحاب الأعمال قبل التمويل أو التوسع أو إعادة الهيكلة.",
        "المستثمرون ومجالس الإدارة الباحثون عن وضوح مالي أكبر.",
      ],
      benefits: [
        "تعزيز الثقة في التقارير المالية.",
        "تحديد فجوات الالتزام والمخاطر التشغيلية.",
        "دعم الحوكمة واتخاذ القرارات بثقة.",
      ],
      provides: [
        "أعمال تدقيق ومراجعة مستقلة.",
        "فحص القوائم المالية وملاحظات التقارير الإدارية.",
        "تحليل الالتزام وتوصيات عملية قابلة للتنفيذ.",
      ],
      process: [
        "فهم طبيعة النشاط ومتطلبات التقارير ومواطن المخاطر.",
        "تخطيط العمل وتحديد المستندات والجداول الزمنية.",
        "تنفيذ إجراءات التدقيق والمتابعة مع الإدارة.",
        "تقديم نتائج واضحة وتقارير وتوصيات للخطوات التالية.",
      ],
    },
  },
  {
    slug: "accounting-services",
    icon: "M7 3h10v18H7zM10 7h4M10 11h4M10 15h2",
    en: {
      title: "Accounting Services",
      short:
        "Bookkeeping, accounting systems, reporting, and monthly financial record support.",
      h1: "Professional Accounting Services in Egypt",
      description:
        "AES Egypt helps businesses maintain organized records, reliable bookkeeping, and management-ready financial reports. Our accounting services in Egypt support day-to-day control and long-term growth.",
      who: [
        "SMEs, startups, and established companies needing monthly accounting support.",
        "Companies that want cleaner books and stronger internal reporting.",
        "Foreign businesses operating or preparing to operate in Egypt.",
      ],
      benefits: [
        "Keep financial records accurate and accessible.",
        "Improve monthly reporting discipline.",
        "Support tax, audit, and management requirements with clean data.",
      ],
      provides: [
        "Bookkeeping and ledger maintenance.",
        "Accounting system setup and process improvement.",
        "Periodic financial reports and management summaries.",
      ],
      process: [
        "Review current records and accounting workflow.",
        "Agree on reporting cadence, responsibilities, and document flow.",
        "Maintain records and reconcile accounts regularly.",
        "Deliver periodic reports with clear follow-up items.",
      ],
    },
    ar: {
      title: "الخدمات المحاسبية",
      short:
        "إمساك دفاتر وتنظيم سجلات ونظم محاسبية وتقارير شهرية تدعم الإدارة.",
      h1: "خدمات محاسبية مهنية في مصر",
      description:
        "تساعد AES Egypt الشركات على بناء سجلات مالية منظمة وتقارير موثوقة قابلة للاستخدام الإداري والضريبي. صممت خدماتنا المحاسبية في مصر لدعم الانضباط المالي والنمو المستدام.",
      who: [
        "الشركات الصغيرة والمتوسطة والناشئة التي تحتاج إلى دعم محاسبي شهري.",
        "الشركات الراغبة في تحسين جودة الدفاتر والتقارير الداخلية.",
        "الشركات الأجنبية العاملة أو الراغبة في العمل داخل مصر.",
      ],
      benefits: [
        "الحفاظ على سجلات مالية دقيقة وسهلة الرجوع إليها.",
        "تحسين انتظام التقارير الشهرية.",
        "دعم متطلبات الضرائب والتدقيق والإدارة ببيانات واضحة.",
      ],
      provides: [
        "إمساك الدفاتر ومتابعة الحسابات.",
        "إعداد النظم المحاسبية وتحسين الإجراءات.",
        "تقارير مالية دورية وملخصات إدارية.",
      ],
      process: [
        "مراجعة السجلات الحالية ودورة العمل المحاسبية.",
        "تحديد دورية التقارير والمسؤوليات وتدفق المستندات.",
        "تحديث السجلات وتسوية الحسابات بانتظام.",
        "تقديم تقارير دورية تتضمن نقاط متابعة واضحة.",
      ],
    },
  },
  {
    slug: "tax-legal-services",
    icon: "M6 4h12v16H6zM9 8h6M9 12h6M9 16h3",
    en: {
      title: "Tax & Legal Services",
      short:
        "Tax compliance, tax planning, legal support, and corporate obligation guidance.",
      h1: "Tax and Legal Services in Egypt",
      description:
        "AES Egypt supports companies with tax services in Egypt, legal coordination, corporate compliance, and practical guidance on Egyptian tax regulations and business obligations.",
      who: [
        "Companies managing ongoing tax filings and compliance requirements.",
        "Businesses seeking tax planning before major decisions.",
        "Foreign investors needing clarity on Egyptian obligations.",
      ],
      benefits: [
        "Reduce compliance risk with organized tax support.",
        "Plan business decisions with clearer tax implications.",
        "Maintain better control over deadlines and required documentation.",
      ],
      provides: [
        "Tax compliance support and filing coordination.",
        "Tax planning and advisory consultations.",
        "Legal and corporate obligation guidance through appropriate professional channels.",
      ],
      process: [
        "Assess current obligations and filing status.",
        "Collect and review supporting documents.",
        "Prepare recommendations and coordinate required actions.",
        "Monitor deadlines and support ongoing compliance.",
      ],
    },
    ar: {
      title: "الخدمات الضريبية والقانونية",
      short:
        "دعم ضريبي وقانوني للشركات يشمل الالتزام والتخطيط ومتابعة الالتزامات.",
      h1: "خدمات ضريبية وقانونية في مصر",
      description:
        "تدعم AES Egypt الشركات من خلال خدمات ضريبية في مصر تشمل الالتزام الضريبي والتخطيط والتوجيه المهني بشأن اللوائح الضريبية والالتزامات القانونية والتجارية.",
      who: [
        "الشركات التي تدير إقراراتها ومتطلباتها الضريبية الدورية.",
        "الأعمال التي تحتاج إلى تخطيط ضريبي قبل قرارات مهمة.",
        "المستثمرون الأجانب الباحثون عن وضوح في الالتزامات داخل مصر.",
      ],
      benefits: [
        "تقليل مخاطر عدم الالتزام من خلال دعم ضريبي منظم.",
        "اتخاذ قرارات تجارية برؤية أوضح للآثار الضريبية.",
        "إدارة أفضل للمواعيد النهائية والمستندات المطلوبة.",
      ],
      provides: [
        "دعم الالتزام الضريبي وتنسيق الإقرارات.",
        "استشارات التخطيط الضريبي.",
        "توجيه بشأن الالتزامات القانونية والتجارية عبر القنوات المهنية المناسبة.",
      ],
      process: [
        "تقييم الالتزامات الحالية وموقف الإقرارات.",
        "جمع ومراجعة المستندات الداعمة.",
        "إعداد التوصيات وتنسيق الإجراءات المطلوبة.",
        "متابعة المواعيد ودعم الالتزام المستمر.",
      ],
    },
  },
  {
    slug: "financial-advisory",
    icon: "M4 18l5-6 4 3 7-9M4 21h16",
    en: {
      title: "Financial Advisory Services",
      short:
        "Financial planning, business analysis, reporting, and investment decision support.",
      h1: "Financial Advisory and Consulting in Egypt",
      description:
        "AES Egypt provides financial consulting in Egypt for companies that need stronger planning, performance analysis, reporting discipline, investment support, and decision-ready financial insight.",
      who: [
        "Owners and executives making investment or growth decisions.",
        "Companies seeking clearer performance reporting.",
        "Businesses preparing budgets, forecasts, or financial restructuring.",
      ],
      benefits: [
        "Make decisions based on structured financial analysis.",
        "Improve visibility into performance, costs, and cash flow.",
        "Support investment and growth planning with disciplined reporting.",
      ],
      provides: [
        "Financial planning and business analysis.",
        "Management reporting and performance dashboards.",
        "Investment support and decision-making analysis.",
      ],
      process: [
        "Define the business question and decision context.",
        "Collect financial and operational data.",
        "Analyze performance, scenarios, and risks.",
        "Present recommendations in a practical advisory format.",
      ],
    },
    ar: {
      title: "الاستشارات المالية",
      short:
        "تخطيط وتحليل مالي وتقارير إدارية ودعم قرارات الاستثمار والنمو.",
      h1: "استشارات مالية في مصر",
      description:
        "تقدم AES Egypt استشارات مالية في مصر للشركات التي تحتاج إلى تخطيط أقوى وتحليل أداء وتقارير منظمة ودعم مهني لاتخاذ قرارات الاستثمار والنمو.",
      who: [
        "أصحاب الشركات والمديرون التنفيذيون قبل قرارات الاستثمار أو التوسع.",
        "الشركات التي تحتاج إلى تقارير أداء أكثر وضوحًا.",
        "الأعمال التي تعد موازنات أو توقعات أو خطط إعادة هيكلة مالية.",
      ],
      benefits: [
        "اتخاذ قرارات مبنية على تحليل مالي منظم.",
        "فهم أفضل للأداء والتكاليف والتدفقات النقدية.",
        "دعم خطط الاستثمار والنمو بتقارير منضبطة.",
      ],
      provides: [
        "تخطيط مالي وتحليل أعمال.",
        "تقارير إدارية ولوحات متابعة للأداء.",
        "تحليل يدعم الاستثمار واتخاذ القرار.",
      ],
      process: [
        "تحديد السؤال التجاري وسياق القرار.",
        "جمع البيانات المالية والتشغيلية.",
        "تحليل الأداء والسيناريوهات والمخاطر.",
        "عرض التوصيات في صيغة استشارية عملية.",
      ],
    },
  },
  {
    slug: "company-formation",
    icon: "M3 21h18M6 21V7l6-4 6 4v14M9 10h2M13 10h2M9 14h2M13 14h2",
    en: {
      title: "Company Formation",
      short:
        "Registration support, required documents, and post-formation guidance for Egypt.",
      h1: "Company Formation in Egypt",
      description:
        "AES Egypt supports entrepreneurs, investors, and foreign companies with company formation Egypt guidance, registration coordination, required documents, and post-formation accounting and tax readiness.",
      who: [
        "Local entrepreneurs establishing a new company.",
        "Foreign companies entering the Egyptian market.",
        "Investors who need coordinated formation and compliance support.",
      ],
      benefits: [
        "Move through formation steps with clearer requirements.",
        "Prepare documents and obligations in an organized way.",
        "Connect formation with accounting, tax, and compliance readiness.",
      ],
      provides: [
        "Company formation consultation and document guidance.",
        "Registration support and coordination.",
        "Post-formation accounting, tax, and advisory guidance.",
      ],
      process: [
        "Confirm business activity, ownership structure, and objectives.",
        "Identify required documents and registration path.",
        "Coordinate formation steps and follow-up requirements.",
        "Prepare the company for accounting, tax, and reporting obligations.",
      ],
    },
    ar: {
      title: "تأسيس الشركات",
      short:
        "دعم تأسيس الشركات في مصر من المستندات والتسجيل إلى المتابعة بعد التأسيس.",
      h1: "تأسيس شركات في مصر",
      description:
        "تدعم AES Egypt رواد الأعمال والمستثمرين والشركات الأجنبية في تأسيس شركات في مصر من خلال توضيح المتطلبات وتنسيق التسجيل والمستندات والإعداد للالتزامات المحاسبية والضريبية بعد التأسيس.",
      who: [
        "رواد الأعمال المحليون عند تأسيس شركة جديدة.",
        "الشركات الأجنبية الراغبة في دخول السوق المصري.",
        "المستثمرون الذين يحتاجون إلى دعم منظم للتأسيس والالتزام.",
      ],
      benefits: [
        "الانتقال بين خطوات التأسيس بوضوح أكبر.",
        "تجهيز المستندات والالتزامات بصورة منظمة.",
        "ربط التأسيس بالجاهزية المحاسبية والضريبية والامتثال.",
      ],
      provides: [
        "استشارات تأسيس الشركات وإرشاد المستندات.",
        "دعم وتنسيق إجراءات التسجيل.",
        "إرشاد بعد التأسيس للمحاسبة والضرائب والاستشارات.",
      ],
      process: [
        "تحديد النشاط وهيكل الملكية والأهداف.",
        "تحديد المستندات المطلوبة ومسار التسجيل.",
        "تنسيق خطوات التأسيس والمتابعة.",
        "إعداد الشركة للالتزامات المحاسبية والضريبية والتقارير.",
      ],
    },
  },
  {
    slug: "investment-business-consulting",
    icon: "M12 3v18M5 8h14M7 21h10M8 8c0 5 8 5 8 0",
    en: {
      title: "Investment & Business Consulting",
      short:
        "Market entry, business planning, growth strategy, and corporate structuring support.",
      h1: "Investment and Business Advisory in Egypt",
      description:
        "AES Egypt provides business advisory Egypt support for investors and companies planning market entry, corporate structuring, growth strategy, business planning, and operational improvement.",
      who: [
        "Investors evaluating opportunities in Egypt.",
        "Companies entering new sectors or restructuring operations.",
        "Owners seeking practical growth and governance advice.",
      ],
      benefits: [
        "Clarify market entry and business planning priorities.",
        "Improve structure before expansion or investment.",
        "Align finance, tax, legal, and operational considerations.",
      ],
      provides: [
        "Business planning and market-entry advisory.",
        "Investment support and feasibility-focused analysis.",
        "Growth strategy and corporate structuring guidance.",
      ],
      process: [
        "Understand objectives, constraints, and investment context.",
        "Review available data, structure, and assumptions.",
        "Develop practical scenarios and recommendations.",
        "Support implementation planning and follow-up decisions.",
      ],
    },
    ar: {
      title: "استشارات الاستثمار والأعمال",
      short:
        "دعم دخول السوق والتخطيط والنمو وهيكلة الشركات للمستثمرين والأعمال.",
      h1: "استشارات استثمار وأعمال في مصر",
      description:
        "تقدم AES Egypt استشارات أعمال في مصر للمستثمرين والشركات في مجالات دخول السوق وهيكلة الشركات واستراتيجيات النمو والتخطيط وتحسين الأداء التشغيلي.",
      who: [
        "المستثمرون الذين يقيّمون فرصًا داخل مصر.",
        "الشركات التي تدخل قطاعات جديدة أو تعيد هيكلة عملياتها.",
        "أصحاب الأعمال الباحثون عن إرشاد عملي للنمو والحوكمة.",
      ],
      benefits: [
        "توضيح أولويات دخول السوق والتخطيط التجاري.",
        "تحسين الهيكل قبل التوسع أو الاستثمار.",
        "ربط الاعتبارات المالية والضريبية والقانونية والتشغيلية.",
      ],
      provides: [
        "استشارات تخطيط الأعمال ودخول السوق.",
        "دعم استثماري وتحليل موجه للجدوى.",
        "إرشاد في استراتيجية النمو وهيكلة الشركات.",
      ],
      process: [
        "فهم الأهداف والقيود وسياق الاستثمار.",
        "مراجعة البيانات والهيكل والافتراضات المتاحة.",
        "تطوير سيناريوهات وتوصيات عملية.",
        "دعم تخطيط التنفيذ وقرارات المتابعة.",
      ],
    },
  },
  {
    slug: "training-consulting",
    icon: "M4 6h16v10H4zM8 20h8M10 16v4M14 16v4",
    en: {
      title: "Training & Consulting",
      short:
        "Professional financial, tax, business, and customized corporate training programs.",
      h1: "Professional Training and Consulting Services",
      description:
        "AES Egypt delivers professional training and consulting for companies that need stronger internal capability in finance, accounting, tax awareness, reporting, and business management.",
      who: [
        "Companies developing finance, tax, or accounting teams.",
        "Managers who need stronger reporting and business control skills.",
        "Organizations seeking customized corporate workshops.",
      ],
      benefits: [
        "Build practical capability inside the organization.",
        "Improve understanding of financial and tax responsibilities.",
        "Translate professional knowledge into better daily decisions.",
      ],
      provides: [
        "Financial, accounting, and tax training.",
        "Business consulting and process improvement sessions.",
        "Customized workshops aligned with company needs.",
      ],
      process: [
        "Assess training objectives and participant profile.",
        "Design a focused workshop or consulting program.",
        "Deliver practical sessions with examples and discussion.",
        "Provide follow-up recommendations for implementation.",
      ],
    },
    ar: {
      title: "التدريب والاستشارات",
      short:
        "برامج تدريب واستشارات مالية وضريبية وإدارية مخصصة للشركات.",
      h1: "خدمات التدريب والاستشارات المهنية",
      description:
        "تقدم AES Egypt برامج تدريب واستشارات مهنية للشركات التي تسعى إلى بناء قدرات داخلية أقوى في المالية والمحاسبة والوعي الضريبي والتقارير وإدارة الأعمال.",
      who: [
        "الشركات التي تطور فرق المالية أو الضرائب أو المحاسبة.",
        "المديرون الذين يحتاجون إلى مهارات أقوى في التقارير والرقابة.",
        "المؤسسات الباحثة عن ورش عمل مخصصة.",
      ],
      benefits: [
        "بناء قدرات عملية داخل المؤسسة.",
        "تحسين فهم المسؤوليات المالية والضريبية.",
        "تحويل المعرفة المهنية إلى قرارات يومية أفضل.",
      ],
      provides: [
        "تدريب مالي ومحاسبي وضريبي.",
        "استشارات أعمال وجلسات تحسين إجراءات.",
        "ورش عمل مخصصة وفق احتياجات الشركة.",
      ],
      process: [
        "تقييم أهداف التدريب وطبيعة المشاركين.",
        "تصميم برنامج مركز للتدريب أو الاستشارات.",
        "تنفيذ جلسات عملية تتضمن أمثلة ونقاشات.",
        "تقديم توصيات متابعة للتطبيق داخل الشركة.",
      ],
    },
  },
  {
    slug: "translation-services",
    icon: "M4 5h9M9 3v2m-3 8c2-2 4-5 5-8m-6 0c1 3 3 6 6 8m3 6l3-7 3 7m-5-2h4",
    en: {
      title: "Translation Services",
      short:
        "Professional business, legal, financial, and corporate translation services.",
      h1: "Business, Legal, and Financial Translation Services",
      description:
        "AES Egypt provides professional translation services for corporate, legal, financial, and business documents where accuracy, confidentiality, and context matter.",
      who: [
        "Companies preparing business, legal, or financial documents.",
        "Foreign investors coordinating Egyptian market entry documents.",
        "Teams that need accurate translation for professional communication.",
      ],
      benefits: [
        "Protect meaning and context in sensitive documents.",
        "Support professional communication across languages.",
        "Maintain confidentiality around corporate and financial information.",
      ],
      provides: [
        "Business and corporate document translation.",
        "Legal and financial translation support.",
        "Review of terminology for clarity and consistency.",
      ],
      process: [
        "Review document type, language pair, and required timeline.",
        "Confirm confidentiality and formatting expectations.",
        "Translate with attention to terminology and context.",
        "Deliver the final document for review and use.",
      ],
    },
    ar: {
      title: "خدمات الترجمة",
      short:
        "ترجمة مهنية للمستندات التجارية والقانونية والمالية ومستندات الشركات.",
      h1: "خدمات ترجمة تجارية وقانونية ومالية",
      description:
        "تقدم AES Egypt خدمات ترجمة مهنية للمستندات التجارية والقانونية والمالية ومستندات الشركات حيث تكون الدقة والسرية وفهم السياق عناصر أساسية.",
      who: [
        "الشركات التي تعد مستندات تجارية أو قانونية أو مالية.",
        "المستثمرون الأجانب عند تجهيز مستندات دخول السوق المصري.",
        "الفرق التي تحتاج إلى ترجمة دقيقة للتواصل المهني.",
      ],
      benefits: [
        "الحفاظ على المعنى والسياق في المستندات الحساسة.",
        "دعم التواصل المهني بين اللغات.",
        "الحفاظ على سرية المعلومات المؤسسية والمالية.",
      ],
      provides: [
        "ترجمة مستندات الأعمال والشركات.",
        "دعم ترجمة المستندات القانونية والمالية.",
        "مراجعة المصطلحات لضمان الوضوح والاتساق.",
      ],
      process: [
        "مراجعة نوع المستند واللغات والجدول الزمني المطلوب.",
        "تأكيد متطلبات السرية والتنسيق.",
        "الترجمة بعناية للمصطلحات والسياق.",
        "تسليم المستند النهائي للمراجعة والاستخدام.",
      ],
    },
  },
];

const faq = {
  en: [
    ["What services does AES Egypt provide?", "AES Egypt provides audit, assurance, accounting, tax, legal, financial advisory, company formation, investment consulting, business consulting, training, and translation services."],
    ["Does AES Egypt provide audit and assurance services?", "Yes. AES Egypt supports companies with independent audit, assurance, financial statement review, compliance observations, and reporting confidence."],
    ["Can AES Egypt help with tax compliance in Egypt?", "Yes. The firm supports tax compliance, tax planning, filing coordination, and guidance on Egyptian corporate tax obligations."],
    ["Does AES Egypt help with company formation?", "Yes. AES Egypt helps local and foreign investors understand formation requirements, required documents, registration steps, and post-formation obligations."],
    ["What documents are required to start company formation?", "Required documents depend on the legal form, ownership structure, business activity, and investor profile. AES Egypt reviews the case and provides a clear document checklist."],
    ["Does AES Egypt support foreign investors entering Egypt?", "Yes. AES Egypt supports foreign companies and investors with market-entry planning, company formation guidance, tax and accounting readiness, and business advisory support."],
    ["Can AES Egypt manage accounting records for companies?", "Yes. AES Egypt can support bookkeeping, accounting records, reconciliations, reporting, and monthly accounting workflows."],
    ["Does AES Egypt provide financial advisory services?", "Yes. Financial advisory services include planning, analysis, performance reporting, investment support, and decision-making guidance."],
    ["Can I request a consultation through WhatsApp?", "Yes. You can use the WhatsApp buttons across the website or send a request from the contact form directly to WhatsApp."],
    ["How long does a consultation take?", "Consultation timing depends on the topic and document readiness. AES Egypt will clarify the expected scope and timeline after receiving your request."],
    ["Are client documents and financial information confidential?", "Yes. Client documents, financial information, and business details are handled with confidentiality and professional care."],
    ["Does AES Egypt provide legal and tax consultation?", "Yes. AES Egypt provides tax consultation and coordinates legal support related to corporate obligations through appropriate professional channels."],
    ["Does AES Egypt provide translation services?", "Yes. AES Egypt provides professional translation for business, legal, financial, and corporate documents."],
    ["Does AES Egypt provide training for companies?", "Yes. The firm provides financial, tax, accounting, and business training programs customized to company needs."],
    ["How can I contact AES Egypt?", "You can call +02 33050685, visit 57 Al-Quds Al Sharif St., Lebanon Sq., Mohandeseen, Giza, Egypt, or request support through WhatsApp."],
  ],
  ar: [
    ["ما الخدمات التي تقدمها AES Egypt؟", "تقدم AES Egypt خدمات التدقيق والمراجعة والمحاسبة والضرائب والاستشارات القانونية والمالية وتأسيس الشركات واستشارات الاستثمار والأعمال والتدريب والترجمة."],
    ["هل تقدم AES Egypt خدمات التدقيق والمراجعة؟", "نعم. تدعم AES Egypt الشركات من خلال التدقيق المستقل والمراجعة وفحص القوائم المالية وملاحظات الالتزام وتعزيز الثقة في التقارير."],
    ["هل يمكن أن تساعد AES Egypt في الالتزام الضريبي في مصر؟", "نعم. تقدم الشركة دعمًا في الالتزام الضريبي والتخطيط الضريبي وتنسيق الإقرارات والإرشاد بشأن الالتزامات الضريبية للشركات في مصر."],
    ["هل تساعد AES Egypt في تأسيس الشركات؟", "نعم. تساعد AES Egypt المستثمرين المحليين والأجانب في فهم متطلبات التأسيس والمستندات وخطوات التسجيل والالتزامات بعد التأسيس."],
    ["ما المستندات المطلوبة لبدء تأسيس شركة؟", "تختلف المستندات حسب الشكل القانوني وهيكل الملكية والنشاط وبيانات المستثمرين. تراجع AES Egypt الحالة وتقدم قائمة مستندات واضحة."],
    ["هل تدعم AES Egypt المستثمرين الأجانب في دخول السوق المصري؟", "نعم. تدعم AES Egypt الشركات والمستثمرين الأجانب في تخطيط دخول السوق وتأسيس الشركات والجاهزية الضريبية والمحاسبية والاستشارات التجارية."],
    ["هل يمكن أن تدير AES Egypt السجلات المحاسبية للشركات؟", "نعم. تقدم AES Egypt دعمًا في إمساك الدفاتر والسجلات والتسويات والتقارير ودورة العمل المحاسبية الشهرية."],
    ["هل تقدم AES Egypt استشارات مالية؟", "نعم. تشمل الاستشارات المالية التخطيط والتحليل وتقارير الأداء ودعم الاستثمار والإرشاد لاتخاذ القرارات."],
    ["هل يمكنني طلب استشارة عبر واتساب؟", "نعم. يمكنك استخدام أزرار واتساب في الموقع أو إرسال بيانات نموذج التواصل مباشرة عبر واتساب."],
    ["كم تستغرق الاستشارة؟", "يعتمد وقت الاستشارة على الموضوع وجاهزية المستندات. توضح AES Egypt النطاق والمدة المتوقعة بعد استلام الطلب."],
    ["هل يتم التعامل بسرية مع مستندات العملاء ومعلوماتهم المالية؟", "نعم. يتم التعامل مع المستندات والمعلومات المالية والتفاصيل التجارية بسرية وعناية مهنية."],
    ["هل تقدم AES Egypt استشارات قانونية وضريبية؟", "نعم. تقدم AES Egypt استشارات ضريبية وتنسق الدعم القانوني المرتبط بالالتزامات المؤسسية عبر القنوات المهنية المناسبة."],
    ["هل تقدم AES Egypt خدمات ترجمة؟", "نعم. تقدم AES Egypt ترجمة مهنية للمستندات التجارية والقانونية والمالية ومستندات الشركات."],
    ["هل تقدم AES Egypt تدريبًا للشركات؟", "نعم. تقدم الشركة برامج تدريب مالي وضريبي ومحاسبي وإداري مخصصة لاحتياجات الشركات."],
    ["كيف يمكنني التواصل مع AES Egypt؟", "يمكنك الاتصال على +02 33050685 أو زيارة 57 شارع القدس الشريف، ميدان لبنان، المهندسين، الجيزة، مصر أو طلب الدعم عبر واتساب."],
  ],
};

const pageCopy = {
  en: {
    home: {
      title: "Audit, Tax, Accounting & Business Advisory Services in Egypt",
      desc: "AES Egypt provides audit, tax, accounting, legal, financial advisory, company formation, consulting, training, and translation services in Egypt.",
      h1: "Trusted Audit, Tax, Accounting & Business Advisory Services in Egypt",
      sub:
        "AES Egypt supports companies, investors, and business owners with professional audit, tax, legal, accounting, financial advisory, company formation, and consulting services.",
      trust: ["Established in 1996", "Audit, Tax & Advisory Experts", "Corporate & Business Clients", "Egypt-Based Professional Services"],
      aboutTitle: "Professional Services Built on Discipline and Trust",
      aboutText:
        "Established in 1996, AES Egypt helps companies stay compliant, organized, and ready for growth. Our work connects audit, accounting, tax, legal coordination, financial advisory, and business consulting into practical support for real decisions.",
      whyTitle: "Why Choose AES Egypt",
      why: [
        "Integrated audit, tax, accounting, and advisory support from one professional firm.",
        "Clear guidance for Egyptian compliance, corporate obligations, and business planning.",
        "Confidential, senior-led service for companies, investors, SMEs, and market entrants.",
      ],
      processTitle: "A Clear Professional Process",
      process: ["Understand your business and objectives", "Review documents and obligations", "Plan the right professional response", "Deliver practical recommendations and follow-up"],
      industriesTitle: "Industries and Clients Served",
      industries: ["Corporate groups", "SMEs", "Startups", "Foreign investors", "Professional firms", "Trading companies", "Service businesses", "Growth-stage companies"],
      faqTitle: "Frequently Asked Questions",
      ctaTitle: "Ready to Discuss Your Business Needs?",
      ctaText:
        "Book a consultation with AES Egypt to clarify the right audit, tax, accounting, formation, advisory, or translation support for your company.",
    },
    about: {
      title: "About AES Egypt | Professional Audit, Tax & Advisory Firm",
      desc: "Learn about AES Egypt, established in 1996, and its professional audit, tax, legal, financial advisory, accounting, consulting, and translation services.",
      h1: "About AES Egypt",
      intro:
        "AES Egypt is a professional services firm established in 1996 to support businesses with reliable audit, accounting, tax, legal, financial advisory, company formation, training, consulting, and translation services.",
      sections: [
        ["Company Overview", "AES Egypt works with business owners, corporate teams, investors, startups, SMEs, and foreign companies entering the Egyptian market. The firm combines technical discipline with practical business understanding, helping clients manage obligations, improve reporting, and make confident decisions."],
        ["Mission", "To provide dependable professional services that help companies stay compliant, financially organized, and prepared for sustainable growth."],
        ["Vision", "To be a trusted professional partner for companies and investors seeking clear financial, tax, legal, and advisory support in Egypt."],
        ["Values", "Confidentiality, precision, accountability, clarity, and long-term client trust guide how AES Egypt works with every engagement."],
        ["Professional Standards", "AES Egypt approaches assignments with structured documentation, careful review, clear communication, and respect for applicable professional and regulatory requirements."],
        ["Why Clients Trust AES Egypt", "Clients rely on AES Egypt for integrated thinking across audit, tax, accounting, legal coordination, financial advisory, and business consulting. The focus is not only on completing a task, but on making the next business decision clearer."],
      ],
      founderTitle: "Leadership",
      founderText:
        "AES Egypt is led with the experience and professional judgment expected from a firm serving companies, investors, and business owners since 1996. The leadership approach is direct, confidential, and focused on practical results.",
    },
    services: {
      title: "Professional Services | AES Egypt",
      desc: "Explore AES Egypt services including audit, accounting, tax, legal, financial advisory, company formation, investment consulting, training, and translation.",
      h1: "Professional Audit, Tax, Accounting & Advisory Services",
      intro:
        "AES Egypt delivers integrated professional services for companies that need compliance, financial clarity, corporate structure, and practical business advice in Egypt.",
    },
    faq: {
      title: "FAQ | AES Egypt",
      desc: "Answers to common questions about audit, tax, company formation, accounting, financial advisory, translation, training, and consultations with AES Egypt.",
      h1: "Frequently Asked Questions",
      intro:
        "Find clear answers about AES Egypt services, consultation booking, confidentiality, company formation, tax compliance, and business advisory support.",
    },
    contact: {
      title: "Contact AES Egypt | Book a Consultation",
      desc: "Contact AES Egypt for audit, tax, accounting, legal, financial advisory, company formation, consulting, training, and translation services.",
      h1: "Contact AES Egypt",
      intro:
        "Speak with AES Egypt about your audit, tax, accounting, company formation, advisory, training, or translation needs.",
    },
    privacy: {
      title: "Privacy Policy | AES Egypt",
      desc: "AES Egypt privacy policy covering contact form data, WhatsApp communication, confidentiality, and client information handling.",
      h1: "Privacy Policy",
    },
    terms: {
      title: "Terms and Conditions | AES Egypt",
      desc: "Website terms and conditions for AES Egypt, including service information, consultation requests, intellectual property, and contact terms.",
      h1: "Terms and Conditions",
    },
  },
  ar: {
    home: {
      title: "خدمات تدقيق وضرائب ومحاسبة واستشارات أعمال في مصر",
      desc: "تقدم AES Egypt خدمات التدقيق والضرائب والمحاسبة والاستشارات القانونية والمالية وتأسيس الشركات والتدريب والترجمة في مصر.",
      h1: "خدمات تدقيق وضرائب ومحاسبة واستشارات أعمال موثوقة في مصر",
      sub:
        "تدعم AES Egypt الشركات والمستثمرين ورواد الأعمال من خلال خدمات مهنية في التدقيق والضرائب والمحاسبة والاستشارات المالية والقانونية وتأسيس الشركات.",
      trust: ["تأسست عام 1996", "خبراء في التدقيق والضرائب والاستشارات", "خدمات للشركات والعملاء التجاريين", "خدمات مهنية داخل مصر"],
      aboutTitle: "خدمات مهنية قائمة على الدقة والثقة",
      aboutText:
        "منذ تأسيسها عام 1996، تساعد AES Egypt الشركات على الالتزام والتنظيم والاستعداد للنمو. تجمع خدماتنا بين التدقيق والمحاسبة والضرائب والتنسيق القانوني والاستشارات المالية والتجارية بصورة عملية تدعم القرارات المهمة.",
      whyTitle: "لماذا تختار AES Egypt",
      why: [
        "دعم متكامل في التدقيق والضرائب والمحاسبة والاستشارات من شركة مهنية واحدة.",
        "إرشاد واضح بشأن الالتزام داخل مصر والالتزامات المؤسسية وتخطيط الأعمال.",
        "خدمة سرية يقودها خبراء للشركات والمستثمرين والمنشآت الصغيرة والمتوسطة والداخلين الجدد للسوق.",
      ],
      processTitle: "منهجية مهنية واضحة",
      process: ["فهم نشاطك وأهدافك", "مراجعة المستندات والالتزامات", "تحديد الاستجابة المهنية المناسبة", "تقديم توصيات عملية ومتابعة"],
      industriesTitle: "القطاعات والعملاء الذين نخدمهم",
      industries: ["المجموعات التجارية", "الشركات الصغيرة والمتوسطة", "الشركات الناشئة", "المستثمرون الأجانب", "الشركات المهنية", "شركات التجارة", "شركات الخدمات", "شركات النمو"],
      faqTitle: "الأسئلة الشائعة",
      ctaTitle: "هل ترغب في مناقشة احتياجات شركتك؟",
      ctaText:
        "احجز استشارة مع AES Egypt لتحديد الدعم المناسب في التدقيق أو الضرائب أو المحاسبة أو تأسيس الشركات أو الاستشارات أو الترجمة.",
    },
    about: {
      title: "من نحن | AES Egypt",
      desc: "تعرف على AES Egypt، شركة خدمات مهنية تأسست عام 1996 وتقدم التدقيق والضرائب والمحاسبة والاستشارات القانونية والمالية والتدريب والترجمة.",
      h1: "من نحن",
      intro:
        "AES Egypt شركة خدمات مهنية تأسست عام 1996 لدعم الشركات بخدمات موثوقة في التدقيق والمحاسبة والضرائب والاستشارات القانونية والمالية وتأسيس الشركات والتدريب والترجمة.",
      sections: [
        ["نبذة عن الشركة", "تعمل AES Egypt مع أصحاب الأعمال وفرق الشركات والمستثمرين والشركات الناشئة والمنشآت الصغيرة والمتوسطة والشركات الأجنبية التي تدخل السوق المصري. تجمع الشركة بين الانضباط المهني والفهم العملي للأعمال لمساعدة العملاء على إدارة الالتزامات وتحسين التقارير واتخاذ قرارات واثقة."],
        ["رسالتنا", "تقديم خدمات مهنية يمكن الاعتماد عليها لمساعدة الشركات على الالتزام والتنظيم المالي والاستعداد للنمو المستدام."],
        ["رؤيتنا", "أن نكون شريكًا مهنيًا موثوقًا للشركات والمستثمرين الذين يبحثون عن دعم واضح في المالية والضرائب والقانون والاستشارات داخل مصر."],
        ["قيمنا", "السرية والدقة والمسؤولية والوضوح وبناء الثقة طويلة الأجل هي المبادئ التي تقود عمل AES Egypt في كل مهمة."],
        ["المعايير المهنية", "تتعامل AES Egypt مع الأعمال من خلال توثيق منظم ومراجعة دقيقة وتواصل واضح واحترام للمتطلبات المهنية والتنظيمية ذات الصلة."],
        ["لماذا يثق العملاء في AES Egypt", "يعتمد العملاء على AES Egypt بسبب التفكير المتكامل بين التدقيق والضرائب والمحاسبة والتنسيق القانوني والاستشارات المالية والتجارية. الهدف ليس إنجاز المهمة فقط، بل جعل القرار التالي أكثر وضوحًا."],
      ],
      founderTitle: "القيادة",
      founderText:
        "تقود AES Egypt خبرة وحكمة مهنية مناسبة لشركة تخدم الشركات والمستثمرين وأصحاب الأعمال منذ عام 1996. يعتمد أسلوب القيادة على الوضوح والسرية والتركيز على النتائج العملية.",
    },
    services: {
      title: "الخدمات المهنية | AES Egypt",
      desc: "استعرض خدمات AES Egypt في التدقيق والمحاسبة والضرائب والاستشارات القانونية والمالية وتأسيس الشركات والتدريب والترجمة.",
      h1: "خدمات تدقيق وضرائب ومحاسبة واستشارات مهنية",
      intro:
        "تقدم AES Egypt خدمات مهنية متكاملة للشركات التي تحتاج إلى الالتزام والوضوح المالي والهيكلة المؤسسية والاستشارة العملية داخل مصر.",
    },
    faq: {
      title: "الأسئلة الشائعة | AES Egypt",
      desc: "إجابات عن الأسئلة الشائعة حول التدقيق والضرائب وتأسيس الشركات والمحاسبة والاستشارات المالية والترجمة والتدريب لدى AES Egypt.",
      h1: "الأسئلة الشائعة",
      intro:
        "إجابات واضحة حول خدمات AES Egypt وحجز الاستشارات والسرية وتأسيس الشركات والالتزام الضريبي والاستشارات التجارية.",
    },
    contact: {
      title: "تواصل مع AES Egypt | احجز استشارة",
      desc: "تواصل مع AES Egypt للحصول على خدمات التدقيق والضرائب والمحاسبة والاستشارات القانونية والمالية وتأسيس الشركات والتدريب والترجمة.",
      h1: "تواصل مع AES Egypt",
      intro:
        "تحدث مع AES Egypt بشأن احتياجاتك في التدقيق أو الضرائب أو المحاسبة أو تأسيس الشركات أو الاستشارات أو التدريب أو الترجمة.",
    },
    privacy: {
      title: "سياسة الخصوصية | AES Egypt",
      desc: "سياسة خصوصية AES Egypt بشأن بيانات نماذج التواصل والتواصل عبر واتساب وسرية معلومات العملاء.",
      h1: "سياسة الخصوصية",
    },
    terms: {
      title: "الشروط والأحكام | AES Egypt",
      desc: "الشروط والأحكام الخاصة باستخدام موقع AES Egypt ومعلومات الخدمات وطلبات الاستشارة والملكية الفكرية.",
      h1: "الشروط والأحكام",
    },
  },
};

const routes = [
  { key: "home", slug: "", alt: "home" },
  { key: "about", slug: "about", alt: "about" },
  { key: "services", slug: "services", alt: "services" },
  ...services.map((service) => ({
    key: "service",
    slug: `services/${service.slug}`,
    service,
    alt: `services/${service.slug}`,
  })),
  { key: "faq", slug: "faq", alt: "faq" },
  { key: "contact", slug: "contact", alt: "contact" },
  { key: "privacy", slug: "privacy-policy", alt: "privacy-policy" },
  { key: "terms", slug: "terms-and-conditions", alt: "terms-and-conditions" },
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function assetPath(file, lang, slug) {
  const depth = [lang, ...slug.split("/").filter(Boolean)].length;
  return `${"../".repeat(depth)}assets/${file}`;
}

function pagePath(lang, slug) {
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

function localPath(lang, slug) {
  return path.join(outDir, lang, ...slug.split("/").filter(Boolean), "index.html");
}

function url(lang, slug) {
  return `${config.siteUrl}${pagePath(lang, slug)}`;
}

function waHref(lang, message) {
  const fallback = lang === "ar"
    ? "مرحبًا AES Egypt،\nأرغب في طلب استشارة."
    : "Hello AES Egypt,\nI would like to request a consultation.";
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message || fallback)}`;
}

function icon(pathData) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="${pathData}"/></svg>`;
}

function nav(lang, slug) {
  const l = labels[lang];
  const other = lang === "en" ? "ar" : "en";
  const links = [
    ["", l.nav.home],
    ["about", l.nav.about],
    ["services", l.nav.services],
    ["faq", l.nav.faq],
    ["contact", l.nav.contact],
  ];
  const switchSlug = slug;
  return `
    <header class="site-header">
      <a class="skip-link" href="#main">${lang === "ar" ? "تجاوز إلى المحتوى" : "Skip to content"}</a>
      <div class="container header-inner">
        <a class="brand" href="${pagePath(lang, "")}" aria-label="${config.company}">
          <img src="${assetPath("images/aes-logo.png", lang, slug)}" alt="${config.company} logo" width="220" height="72">
        </a>
        <button class="nav-toggle" type="button" aria-label="${lang === "ar" ? "فتح القائمة" : "Open menu"}" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" aria-label="${lang === "ar" ? "القائمة الرئيسية" : "Primary navigation"}">
          ${links.map(([href, text]) => `<a href="${pagePath(lang, href)}">${esc(text)}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="phone-link" href="tel:${config.phone.replace(/\s/g, "")}">${config.phone}</a>
          <a class="btn btn-small btn-primary" href="${pagePath(lang, "contact")}">${esc(l.cta.consultation)}</a>
          <a class="icon-btn whatsapp-head" href="${waHref(lang)}" target="_blank" rel="noopener" aria-label="${esc(l.cta.whatsappContact)}">WA</a>
          <a class="language-switch" href="${pagePath(other, switchSlug)}" aria-label="${esc(l.language)}">EN | عربي</a>
        </div>
      </div>
    </header>`;
}

function footer(lang, slug) {
  const l = labels[lang];
  const links = [
    ["", l.nav.home],
    ["about", l.nav.about],
    ["services", l.nav.services],
    ["faq", l.nav.faq],
    ["contact", l.nav.contact],
    ["privacy-policy", l.nav.privacy],
    ["terms-and-conditions", l.nav.terms],
  ];
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="${assetPath("images/aes-logo.png", lang, slug)}" alt="${config.company} logo" width="220" height="72">
          <p>${esc(l.footerDesc)}</p>
          <a class="btn btn-outline" href="${waHref(lang)}" target="_blank" rel="noopener">${esc(l.cta.whatsappContact)}</a>
        </div>
        <div>
          <h2>${esc(l.quickLinks)}</h2>
          <ul>${links.map(([href, text]) => `<li><a href="${pagePath(lang, href)}">${esc(text)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h2>${esc(l.serviceLinks)}</h2>
          <ul>${services.map((service) => `<li><a href="${pagePath(lang, `services/${service.slug}`)}">${esc(service[lang].title)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h2>${esc(l.contact)}</h2>
          <p><strong>${esc(l.phone)}:</strong> <a href="tel:${config.phone.replace(/\s/g, "")}">${config.phone}</a></p>
          <p><strong>${esc(l.address)}:</strong> ${esc(lang === "ar" ? config.addressAr : config.addressEn)}</p>
          <p><strong>${esc(l.language)}:</strong> <a href="${pagePath("en", slug)}">EN</a> | <a href="${pagePath("ar", slug)}">عربي</a></p>
        </div>
      </div>
      <div class="container footer-bottom">${esc(l.copyright)}</div>
    </footer>`;
}

function seo({ lang, slug, title, desc, schema = [] }) {
  const l = labels[lang];
  const other = lang === "en" ? "ar" : "en";
  const canonical = url(lang, slug);
  const image = `${config.siteUrl}/assets/images/aes-logo.png`;
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "AccountingService"],
    name: config.company,
    legalName: config.legalName,
    url: config.siteUrl,
    logo: image,
    telephone: config.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "57 Al-Quds Al Sharif St., Lebanon Sq.",
      addressLocality: "Mohandeseen, Giza",
      addressCountry: "EG",
    },
    areaServed: "Egypt",
    foundingDate: "1996",
    sameAs: [],
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels[lang].breadcrumbHome, item: url(lang, "") },
      ...(slug ? [{ "@type": "ListItem", position: 2, name: title, item: canonical }] : []),
    ],
  };
  return `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="${lang}" href="${canonical}">
    <link rel="alternate" hreflang="${other}" href="${url(other, slug)}">
    <link rel="alternate" hreflang="x-default" href="${url("en", slug)}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="${l.locale}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(desc)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(desc)}">
    <meta name="twitter:image" content="${image}">
    <link rel="icon" href="${assetPath("images/aes-logo.png", lang, slug)}">
    <link rel="stylesheet" href="${assetPath("css/style.css", lang, slug)}">
    <script type="application/ld+json">${JSON.stringify(orgSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
    ${schema.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n")}`;
}

function layout({ lang, slug, title, desc, body, schema }) {
  const l = labels[lang];
  return `<!doctype html>
<html lang="${lang}" dir="${l.dir}">
  <head>
${seo({ lang, slug, title, desc, schema })}
  </head>
  <body data-lang="${lang}" data-whatsapp="${config.whatsappNumber}">
${nav(lang, slug)}
    <main id="main">
${body}
    </main>
${footer(lang, slug)}
    <a class="floating-whatsapp" href="${waHref(lang)}" target="_blank" rel="noopener" aria-label="${esc(l.cta.whatsappContact)}"><span>WhatsApp</span></a>
    <script src="${assetPath("js/main.js", lang, slug)}" defer></script>
  </body>
</html>`;
}

function cards(lang) {
  const l = labels[lang];
  return `<div class="service-grid">
    ${services.map((service) => `
      <article class="service-card">
        <div class="card-icon">${icon(service.icon)}</div>
        <h2>${esc(service[lang].title)}</h2>
        <p>${esc(service[lang].short)}</p>
        <div class="card-actions">
          <a class="btn btn-secondary" href="${pagePath(lang, `services/${service.slug}`)}">${esc(l.cta.learnMore)}</a>
          <a class="btn btn-whatsapp" href="${waHref(lang, `${lang === "ar" ? "مرحبًا AES Egypt،\nأرغب في طلب خدمة: " : "Hello AES Egypt,\nI would like to request: "}${service[lang].title}`)}" target="_blank" rel="noopener">${esc(l.cta.whatsapp)}</a>
        </div>
      </article>`).join("")}
  </div>`;
}

function cta(lang) {
  const home = pageCopy[lang].home;
  const l = labels[lang];
  return `<section class="cta-band">
    <div class="container cta-inner">
      <div>
        <h2>${esc(home.ctaTitle)}</h2>
        <p>${esc(home.ctaText)}</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="${pagePath(lang, "contact")}">${esc(l.cta.consultation)}</a>
        <a class="btn btn-whatsapp" href="${waHref(lang)}" target="_blank" rel="noopener">${esc(l.cta.whatsapp)}</a>
      </div>
    </div>
  </section>`;
}

function homePage(lang) {
  const p = pageCopy[lang].home;
  const l = labels[lang];
  const body = `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${lang === "ar" ? "شركة خدمات مهنية منذ 1996" : "Professional services firm since 1996"}</p>
          <h1>${esc(p.h1)}</h1>
          <p class="hero-sub">${esc(p.sub)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${pagePath(lang, "contact")}">${esc(l.cta.consultation)}</a>
            <a class="btn btn-secondary" href="${pagePath(lang, "services")}">${esc(l.cta.explore)}</a>
            <a class="btn btn-whatsapp" href="${waHref(lang)}" target="_blank" rel="noopener">${esc(l.cta.whatsapp)}</a>
          </div>
        </div>
        <div class="hero-panel" aria-label="${esc(config.company)}">
          <img src="${assetPath("images/founder.jpg", lang, "")}" alt="${lang === "ar" ? "قيادة AES Egypt المهنية" : "AES Egypt professional leadership"}" width="1200" height="1500" loading="eager">
        </div>
      </div>
      <div class="container trust-row">${p.trust.map((item) => `<div><strong>${esc(item)}</strong></div>`).join("")}</div>
    </section>
    <section class="section">
      <div class="container split">
        <div>
          <p class="eyebrow">${lang === "ar" ? "عن AES Egypt" : "About AES Egypt"}</p>
          <h2>${esc(p.aboutTitle)}</h2>
        </div>
        <div>
          <p class="lead">${esc(p.aboutText)}</p>
          <a class="text-link" href="${pagePath(lang, "about")}">${esc(l.cta.learnMore)}</a>
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="container section-head">
        <p class="eyebrow">${esc(l.servicesTitle)}</p>
        <h2>${esc(pageCopy[lang].services.h1)}</h2>
        <p>${esc(pageCopy[lang].services.intro)}</p>
      </div>
      <div class="container">${cards(lang)}</div>
    </section>
    <section class="section">
      <div class="container three-col">
        <div class="feature-large">
          <p class="eyebrow">${lang === "ar" ? "القيمة المهنية" : "Professional Value"}</p>
          <h2>${esc(p.whyTitle)}</h2>
        </div>
        ${p.why.map((item) => `<div class="feature"><span></span><p>${esc(item)}</p></div>`).join("")}
      </div>
    </section>
    <section class="section dark">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">${lang === "ar" ? "طريقة العمل" : "How We Work"}</p>
          <h2>${esc(p.processTitle)}</h2>
        </div>
        <div class="process-grid">${p.process.map((item, i) => `<div class="process-step"><b>${String(i + 1).padStart(2, "0")}</b><p>${esc(item)}</p></div>`).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="container section-head">
        <p class="eyebrow">${lang === "ar" ? "عملاؤنا" : "Who We Serve"}</p>
        <h2>${esc(p.industriesTitle)}</h2>
      </div>
      <div class="container tag-grid">${p.industries.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
    </section>
    <section class="section soft">
      <div class="container section-head">
        <p class="eyebrow">${esc(l.nav.faq)}</p>
        <h2>${esc(p.faqTitle)}</h2>
      </div>
      <div class="container faq-list preview">${faq[lang].slice(0, 5).map(([q, a]) => faqItem(q, a)).join("")}</div>
    </section>
    ${cta(lang)}`;
  return layout({ lang, slug: "", title: p.title, desc: p.desc, body });
}

function aboutPage(lang) {
  const p = pageCopy[lang].about;
  const body = `
    ${subHero(lang, p.h1, p.intro)}
    <section class="section">
      <div class="container about-grid">
        ${p.sections.map(([title, text]) => `<article><h2>${esc(title)}</h2><p>${esc(text)}</p></article>`).join("")}
      </div>
    </section>
    <section class="section soft">
      <div class="container leadership">
        <img src="${assetPath("images/founder.jpg", lang, "about")}" alt="${lang === "ar" ? "قيادة AES Egypt" : "AES Egypt leadership"}" width="1200" height="1500" loading="lazy">
        <div>
          <p class="eyebrow">${lang === "ar" ? "خبرة مهنية" : "Professional Leadership"}</p>
          <h2>${esc(p.founderTitle)}</h2>
          <p>${esc(p.founderText)}</p>
        </div>
      </div>
    </section>
    ${cta(lang)}`;
  return layout({ lang, slug: "about", title: p.title, desc: p.desc, body });
}

function servicesPage(lang) {
  const p = pageCopy[lang].services;
  const body = `
    ${subHero(lang, p.h1, p.intro)}
    <section class="section">
      <div class="container">${cards(lang)}</div>
    </section>
    ${cta(lang)}`;
  return layout({ lang, slug: "services", title: p.title, desc: p.desc, body });
}

function servicePage(lang, service) {
  const l = labels[lang];
  const s = service[lang];
  const title = `${s.h1} | AES Egypt`;
  const desc = s.description;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: { "@type": "Organization", name: config.company },
    areaServed: "Egypt",
    serviceType: s.title,
  };
  const body = `
    ${subHero(lang, s.h1, s.description)}
    <section class="section">
      <div class="container service-detail-grid">
        ${detailBlock(l.whoFor, s.who)}
        ${detailBlock(l.benefits, s.benefits)}
        ${detailBlock(l.provides, s.provides)}
        ${detailBlock(l.process, s.process, true)}
      </div>
    </section>
    <section class="section soft">
      <div class="container section-head">
        <p class="eyebrow">${esc(l.relatedFaq)}</p>
        <h2>${esc(l.relatedFaq)}</h2>
      </div>
      <div class="container faq-list preview">${faq[lang].slice(0, 4).map(([q, a]) => faqItem(q, a)).join("")}</div>
    </section>
    <section class="cta-band">
      <div class="container cta-inner">
        <div><h2>${esc(s.title)}</h2><p>${esc(lang === "ar" ? "أرسل طلبك الآن وسيقوم فريق AES Egypt بتحديد الخطوة المهنية المناسبة." : "Send your request now and AES Egypt will help define the right professional next step.")}</p></div>
        <div class="cta-actions">
          <a class="btn btn-primary" href="${pagePath(lang, "contact")}">${esc(l.cta.consultation)}</a>
          <a class="btn btn-whatsapp" href="${waHref(lang, `${lang === "ar" ? "مرحبًا AES Egypt،\nأرغب في طلب خدمة: " : "Hello AES Egypt,\nI would like to request: "}${s.title}`)}" target="_blank" rel="noopener">${esc(l.cta.whatsapp)}</a>
        </div>
      </div>
    </section>`;
  return layout({ lang, slug: `services/${service.slug}`, title, desc, body, schema: [serviceSchema] });
}

function detailBlock(title, items, numbered = false) {
  return `<article class="detail-block"><h2>${esc(title)}</h2><${numbered ? "ol" : "ul"}>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</${numbered ? "ol" : "ul"}></article>`;
}

function faqItem(q, a) {
  return `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`;
}

function faqPage(lang) {
  const p = pageCopy[lang].faq;
  const schema = [{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq[lang].map(([name, answer]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }];
  const body = `
    ${subHero(lang, p.h1, p.intro)}
    <section class="section">
      <div class="container faq-list">${faq[lang].map(([q, a]) => faqItem(q, a)).join("")}</div>
    </section>
    ${cta(lang)}`;
  return layout({ lang, slug: "faq", title: p.title, desc: p.desc, body, schema });
}

function contactPage(lang) {
  const p = pageCopy[lang].contact;
  const l = labels[lang];
  const body = `
    ${subHero(lang, p.h1, p.intro)}
    <section class="section">
      <div class="container contact-grid">
        <div class="contact-card">
          <h2>${esc(config.company)}</h2>
          <p><strong>${esc(l.phone)}:</strong> <a href="tel:${config.phone.replace(/\s/g, "")}">${config.phone}</a></p>
          <p><strong>${esc(l.address)}:</strong> ${esc(lang === "ar" ? config.addressAr : config.addressEn)}</p>
          <a class="btn btn-whatsapp" href="${waHref(lang)}" target="_blank" rel="noopener">${esc(l.cta.whatsappContact)}</a>
        </div>
        ${contactForm(lang)}
      </div>
    </section>`;
  return layout({ lang, slug: "contact", title: p.title, desc: p.desc, body });
}

function contactForm(lang) {
  const l = labels[lang];
  return `<form class="contact-form" data-contact-form novalidate>
    <div>
      <h2>${esc(l.form.title)}</h2>
      <p>${esc(l.form.intro)}</p>
    </div>
    <label>${esc(l.form.name)}<input name="name" type="text" autocomplete="name" required minlength="2"></label>
    <label>${esc(l.form.email)}<input name="email" type="email" autocomplete="email" required></label>
    <label>${esc(l.form.phone)}<input name="phone" type="tel" autocomplete="tel" required minlength="6"></label>
    <label>${esc(l.form.company)}<input name="company" type="text" autocomplete="organization" required minlength="2"></label>
    <label>${esc(l.form.service)}<select name="service" required>
      <option value="">${esc(l.form.service)}</option>
      ${services.map((service) => `<option>${esc(service[lang].title)}</option>`).join("")}
      <option>${esc(l.form.other)}</option>
    </select></label>
    <label>${esc(l.form.message)}<textarea name="message" rows="5" required minlength="10"></textarea></label>
    <label class="hp">${esc(l.form.honeypot)}<input name="website" type="text" tabindex="-1" autocomplete="off"></label>
    <p class="form-message" role="status" aria-live="polite"></p>
    <div class="form-actions">
      <button class="btn btn-primary" type="submit">${esc(l.cta.submit)}</button>
    </div>
  </form>`;
}

function policyPage(lang, type) {
  const isPrivacy = type === "privacy";
  const p = pageCopy[lang][type];
  const slug = isPrivacy ? "privacy-policy" : "terms-and-conditions";
  const sections = lang === "ar"
    ? isPrivacy
      ? [
          ["المعلومات التي نجمعها", "قد نجمع البيانات التي يرسلها المستخدم من خلال نموذج التواصل، مثل الاسم والبريد الإلكتروني ورقم الهاتف واسم الشركة والخدمة المطلوبة والرسالة."],
          ["كيفية استخدام المعلومات", "تستخدم المعلومات للرد على الاستفسارات وتنسيق الاستشارات وتقديم الدعم المهني المناسب للخدمة المطلوبة."],
          ["التواصل عبر واتساب", "عند استخدام زر واتساب يتم فتح تطبيق واتساب برسالة تحتوي على البيانات التي يختار المستخدم إرسالها. لا يتم إرسال البيانات عبر رابط صفحة الموقع."],
          ["سرية البيانات", "تتعامل AES Egypt مع بيانات العملاء ومستنداتهم بسرية وعناية مهنية ولا تنشرها دون سبب مشروع أو موافقة مناسبة."],
          ["عدم بيع البيانات", "لا تبيع AES Egypt بيانات العملاء أو زوار الموقع لأطراف خارجية."],
          ["التواصل", `للاستفسار عن الخصوصية يمكن التواصل مع AES Egypt عبر الهاتف ${config.phone} أو من خلال العنوان: ${config.addressAr}.`],
        ]
      : [
          ["استخدام الموقع", "يستخدم هذا الموقع لتقديم معلومات عامة عن خدمات AES Egypt ولتسهيل طلب التواصل والاستشارات."],
          ["معلومات الخدمات", "المحتوى المنشور لا يمثل اتفاق خدمة نهائيًا ولا يغني عن مراجعة الحالة والمستندات وتحديد نطاق العمل رسميًا."],
          ["طلبات الاستشارة", "إرسال طلب عبر الموقع أو واتساب لا ينشئ التزامًا مهنيًا إلا بعد قبول AES Egypt وتحديد النطاق والأتعاب والمتطلبات."],
          ["عدم وجود ضمان قبل الاتفاق", "لا تقدم AES Egypt ضمانًا لنتيجة محددة قبل وجود اتفاق رسمي وتوافر المعلومات والمستندات اللازمة."],
          ["الملكية الفكرية", "محتوى الموقع وتصميمه ومواده مملوكة أو مرخصة لـ AES Egypt ولا يجوز استخدامها بصورة غير مصرح بها."],
          ["شروط التواصل", `يمكن التواصل مع AES Egypt عبر الهاتف ${config.phone} أو العنوان: ${config.addressAr}.`],
        ]
    : isPrivacy
      ? [
          ["Information We Collect", "We may collect information submitted through contact forms, including name, email, phone number, company name, service needed, and message content."],
          ["How Information Is Used", "Information is used to respond to inquiries, coordinate consultations, and provide relevant professional follow-up for the requested service."],
          ["WhatsApp Communication", "When you use a WhatsApp button, WhatsApp opens with the message you choose to send. Form data is not submitted through the website URL."],
          ["Data Confidentiality", "AES Egypt handles client information, documents, and business details with confidentiality and professional care."],
          ["No Sale of Client Data", "AES Egypt does not sell client or website visitor data to third parties."],
          ["Contact Information", `For privacy questions, contact AES Egypt by phone at ${config.phone} or at ${config.addressEn}.`],
        ]
      : [
          ["Website Use", "This website provides general information about AES Egypt services and helps visitors request consultations and professional contact."],
          ["Service Information Disclaimer", "Website content is not a final service agreement and does not replace a formal review of documents, facts, scope, and requirements."],
          ["Consultation Requests", "Submitting a request through the website or WhatsApp does not create a professional engagement until AES Egypt accepts the work and confirms scope, fees, and requirements."],
          ["No Guarantee Before Formal Agreement", "AES Egypt does not guarantee a specific outcome before a formal agreement and access to the necessary information and documents."],
          ["Intellectual Property", "Website content, design, and materials are owned by or licensed to AES Egypt and may not be used without permission."],
          ["Contact Terms", `You can contact AES Egypt by phone at ${config.phone} or at ${config.addressEn}.`],
        ];
  const body = `
    ${subHero(lang, p.h1, p.desc)}
    <section class="section">
      <div class="container legal-content">
        ${sections.map(([title, text]) => `<article><h2>${esc(title)}</h2><p>${esc(text)}</p></article>`).join("")}
      </div>
    </section>`;
  return layout({ lang, slug, title: p.title, desc: p.desc, body });
}

function subHero(lang, title, intro) {
  return `<section class="sub-hero">
    <div class="container">
      <p class="eyebrow">${esc(config.company)}</p>
      <h1>${esc(title)}</h1>
      <p>${esc(intro)}</p>
    </div>
  </section>`;
}

const css = `:root{--navy:#101827;--charcoal:#1b2430;--muted:#5e6a78;--line:#e6e9ee;--soft:#f6f8fb;--gold:#b88a2d;--blue:#1f5c8f;--green:#128c7e;--white:#fff;--shadow:0 18px 45px rgba(16,24,39,.09);--radius:8px;--container:1180px}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,Segoe UI,Arial,sans-serif;color:var(--charcoal);background:#fff;line-height:1.65}html[lang=ar] body{font-family:Tahoma,Arial,sans-serif}a{color:inherit;text-decoration:none}img{max-width:100%;height:auto}button,input,select,textarea{font:inherit}.container{width:min(var(--container),calc(100% - 40px));margin-inline:auto}.skip-link{position:absolute;inset-inline-start:16px;top:-60px;background:var(--navy);color:#fff;padding:10px 14px;z-index:20}.skip-link:focus{top:10px}.site-header{position:sticky;top:0;background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border-bottom:1px solid var(--line);z-index:10}.header-inner{display:flex;align-items:center;gap:22px;min-height:86px}.brand{display:flex;align-items:center;flex:0 0 auto}.brand img{width:190px;height:auto}.main-nav{display:flex;align-items:center;gap:20px;margin-inline-start:auto;font-weight:700;color:#263241}.main-nav a{padding:8px 0}.main-nav a:hover,.text-link:hover{color:var(--blue)}.header-actions{display:flex;align-items:center;gap:10px}.phone-link{font-weight:800;color:var(--navy);white-space:nowrap}.language-switch{font-weight:800;border-inline-start:1px solid var(--line);padding-inline-start:10px;white-space:nowrap}.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:11px 18px;border-radius:var(--radius);font-weight:800;border:1px solid transparent;cursor:pointer;transition:.2s ease}.btn:hover{transform:translateY(-1px)}.btn-primary{background:var(--navy);color:#fff}.btn-secondary{background:#fff;color:var(--navy);border-color:#cdd4df}.btn-outline{border-color:#ccd3dd;color:var(--navy);background:#fff}.btn-whatsapp{background:var(--green);color:#fff}.btn-small{min-height:38px;padding:8px 12px;font-size:.9rem}.icon-btn{width:40px;height:40px;display:grid;place-items:center;border-radius:var(--radius);font-weight:900;background:#e8f5f1;color:#075e54}.nav-toggle{display:none;background:#fff;border:1px solid var(--line);border-radius:var(--radius);width:42px;height:42px}.nav-toggle span{display:block;width:18px;height:2px;background:var(--navy);margin:4px auto}.hero{background:linear-gradient(180deg,#f7f9fc 0%,#fff 72%);padding:74px 0 34px}.hero-grid{display:grid;grid-template-columns:minmax(0,1.06fr) minmax(320px,.78fr);gap:56px;align-items:center}.eyebrow{text-transform:uppercase;letter-spacing:0;color:var(--gold);font-weight:900;font-size:.82rem;margin:0 0 12px}.hero h1,.sub-hero h1{font-size:clamp(2.25rem,5vw,4.7rem);line-height:1.03;letter-spacing:0;margin:0;color:var(--navy)}.hero-sub,.sub-hero p,.lead{font-size:1.13rem;color:var(--muted);max-width:760px}.hero-actions,.card-actions,.cta-actions,.form-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px}.hero-panel{position:relative;min-height:480px;overflow:hidden;border-radius:var(--radius);box-shadow:var(--shadow);background:#dce3ea}.hero-panel:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(16,24,39,.05),rgba(31,92,143,.18));z-index:1}.hero-panel img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block}.trust-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:42px}.trust-row div{background:#fff;border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 10px 24px rgba(16,24,39,.05);padding:18px}.section{padding:82px 0}.section.soft{background:var(--soft)}.section.dark{background:var(--navy);color:#fff}.section.dark .eyebrow{color:#d7b56c}.section.dark h2,.section.dark p{color:#fff}.section-head{max-width:780px;margin-bottom:34px}.section-head h2,.split h2,.feature-large h2,.cta-inner h2,.contact-card h2,.contact-form h2,.legal-content h2,.about-grid h2,.leadership h2,.detail-block h2{font-size:clamp(1.55rem,3vw,2.35rem);line-height:1.16;color:var(--navy);margin:0 0 12px}.section-head p,.split p,.feature p,.about-grid p,.leadership p,.legal-content p,.detail-block li,.contact-card p,.contact-form p{color:var(--muted)}.split{display:grid;grid-template-columns:.78fr 1fr;gap:64px;align-items:start}.text-link{font-weight:900;color:var(--blue)}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.service-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 12px 28px rgba(16,24,39,.06);padding:24px;display:flex;flex-direction:column;min-height:330px}.service-card h2{font-size:1.25rem;line-height:1.25;margin:16px 0 8px;color:var(--navy)}.service-card p{color:var(--muted);margin:0}.service-card .card-actions{margin-top:auto}.card-icon{width:48px;height:48px;border-radius:var(--radius);display:grid;place-items:center;background:#eef5fb;color:var(--blue)}.card-icon svg{width:28px;height:28px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.three-col{display:grid;grid-template-columns:1.15fr repeat(3,1fr);gap:18px}.feature-large,.feature{border:1px solid var(--line);border-radius:var(--radius);padding:24px;background:#fff}.feature span{display:block;width:34px;height:4px;background:var(--gold);margin-bottom:18px}.process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.process-step{border:1px solid rgba(255,255,255,.17);border-radius:var(--radius);padding:24px;background:rgba(255,255,255,.04)}.process-step b{color:#d7b56c;font-size:1.45rem}.tag-grid{display:flex;gap:12px;flex-wrap:wrap}.tag-grid span{border:1px solid var(--line);border-radius:var(--radius);padding:10px 14px;font-weight:800;background:#fff}.cta-band{padding:54px 0;background:linear-gradient(135deg,var(--navy),#203755);color:#fff}.cta-inner{display:flex;align-items:center;justify-content:space-between;gap:30px}.cta-inner h2{color:#fff}.cta-inner p{color:#d8e0ea;max-width:720px}.sub-hero{padding:74px 0;background:linear-gradient(135deg,#f7f9fc,#eef3f9)}.about-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.about-grid article,.detail-block,.contact-card,.contact-form,.legal-content article{border:1px solid var(--line);border-radius:var(--radius);padding:26px;background:#fff;box-shadow:0 10px 26px rgba(16,24,39,.05)}.leadership{display:grid;grid-template-columns:360px 1fr;gap:48px;align-items:center}.leadership img{border-radius:var(--radius);box-shadow:var(--shadow);aspect-ratio:4/5;object-fit:cover;object-position:center top}.service-detail-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.detail-block ul,.detail-block ol{padding-inline-start:22px}.faq-list{display:grid;gap:12px;max-width:900px}.faq-list.preview{max-width:860px}.faq-list details{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:18px 20px;box-shadow:0 10px 24px rgba(16,24,39,.04)}.faq-list summary{font-weight:900;color:var(--navy);cursor:pointer}.faq-list p{color:var(--muted);margin-bottom:0}.contact-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:24px;align-items:start}.contact-form{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.contact-form>div,.contact-form label:nth-of-type(6),.contact-form .form-message,.form-actions{grid-column:1/-1}.contact-form label{display:grid;gap:7px;font-weight:800;color:var(--navy)}.contact-form input,.contact-form select,.contact-form textarea{width:100%;border:1px solid #cfd6df;border-radius:var(--radius);padding:12px 13px;background:#fff;color:var(--navy)}.contact-form input:focus,.contact-form select:focus,.contact-form textarea:focus{outline:3px solid rgba(31,92,143,.16);border-color:var(--blue)}.hp{position:absolute;left:-9999px}.form-message{min-height:24px;font-weight:800}.form-message.ok{color:#0a7c59}.form-message.err{color:#b42318}.legal-content{max-width:900px;display:grid;gap:18px}.site-footer{background:#f8fafc;border-top:1px solid var(--line);padding:56px 0 22px}.footer-grid{display:grid;grid-template-columns:1.35fr .78fr 1fr 1.1fr;gap:34px}.footer-brand img{width:210px}.footer-grid h2{font-size:1rem;color:var(--navy);margin:0 0 12px}.footer-grid ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}.footer-grid p,.footer-grid a{color:#4f5c6b}.footer-grid a:hover{color:var(--blue)}.footer-bottom{border-top:1px solid var(--line);margin-top:34px;padding-top:18px;color:#667386}.floating-whatsapp{position:fixed;right:18px;bottom:18px;z-index:12;background:var(--green);color:#fff;border-radius:999px;min-height:48px;padding:12px 18px;font-weight:900;box-shadow:0 16px 34px rgba(18,140,126,.28)}html[dir=rtl] .floating-whatsapp{right:auto;left:18px}html[dir=rtl] .main-nav{margin-inline-start:0;margin-inline-end:auto}@media (max-width:1060px){.header-actions .btn,.phone-link{display:none}.service-grid{grid-template-columns:repeat(2,1fr)}.three-col,.process-grid,.trust-row{grid-template-columns:repeat(2,1fr)}.footer-grid{grid-template-columns:repeat(2,1fr)}}@media (max-width:820px){.container{width:min(100% - 28px,var(--container))}.header-inner{min-height:74px}.brand img{width:158px}.nav-toggle{display:block;margin-inline-start:auto}.main-nav{position:absolute;left:14px;right:14px;top:74px;background:#fff;border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:16px;display:none;flex-direction:column;align-items:stretch;gap:6px}.main-nav.is-open{display:flex}.header-actions{gap:8px}.language-switch{border:0;padding:0}.hero{padding-top:46px}.hero-grid,.split,.leadership,.contact-grid{grid-template-columns:1fr;gap:28px}.hero-panel{min-height:390px}.hero h1,.sub-hero h1{font-size:2.28rem}.section{padding:58px 0}.service-grid,.about-grid,.service-detail-grid,.contact-form,.footer-grid{grid-template-columns:1fr}.three-col,.process-grid,.trust-row{grid-template-columns:1fr}.cta-inner{display:block}.contact-form label:nth-of-type(6){grid-column:auto}.floating-whatsapp{width:52px;height:52px;min-height:52px;padding:0;display:grid;place-items:center}.floating-whatsapp span{font-size:0}.floating-whatsapp:after{content:"WA";font-weight:900}.hero-actions .btn,.card-actions .btn,.form-actions .btn{width:100%}}@media (prefers-reduced-motion:reduce){*,html{scroll-behavior:auto!important;transition:none!important}}`;

const js = `(function(){const body=document.body;const lang=body.dataset.lang||"en";const number=body.dataset.whatsapp||"201XXXXXXXXX";const labels={en:{ok:"Opening WhatsApp with your request.",err:"Please complete or correct: ",intro:"Hello AES Egypt,\\nI would like to request a consultation.",name:"Name",email:"Email",phone:"Phone",company:"Company",service:"Service Needed",message:"Message"},ar:{ok:"سيتم فتح واتساب وإرسال بيانات طلبك.",err:"يرجى استكمال أو تصحيح: ",intro:"مرحبًا AES Egypt،\\nأرغب في طلب استشارة.",name:"الاسم",email:"البريد الإلكتروني",phone:"رقم الهاتف",company:"اسم الشركة",service:"الخدمة المطلوبة",message:"الرسالة"}};document.querySelectorAll(".nav-toggle").forEach((button)=>{button.addEventListener("click",()=>{const nav=document.querySelector(".main-nav");const open=nav.classList.toggle("is-open");button.setAttribute("aria-expanded",String(open));});});function clean(v){return String(v||"").trim().replace(/\\s+/g," ");}function validEmail(v){return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v);}function formData(form){return {name:clean(form.name.value),email:clean(form.email.value),phone:clean(form.phone.value),company:clean(form.company.value),service:clean(form.service.value),message:clean(form.message.value),website:clean(form.website.value)}}function missingFields(data){const t=labels[lang];const fields=[];if(data.website)fields.push("Spam check");if(data.name.length<2)fields.push(t.name);if(!validEmail(data.email))fields.push(t.email);if(data.phone.length<6)fields.push(t.phone);if(data.company.length<2)fields.push(t.company);if(!data.service)fields.push(t.service);if(data.message.length<10)fields.push(t.message);return fields;}function message(data){const t=labels[lang];return [t.intro,"",t.name+": "+data.name,t.email+": "+data.email,t.phone+": "+data.phone,t.company+": "+data.company,t.service+": "+data.service,t.message+": "+data.message].join("\\n");}function setStatus(form,type,text){const node=form.querySelector(".form-message");node.textContent=text;node.className="form-message "+type;}function openWhatsApp(data){window.open("https://wa.me/"+number+"?text="+encodeURIComponent(message(data)),"_blank","noopener");}document.querySelectorAll("[data-contact-form]").forEach((form)=>{form.addEventListener("submit",(event)=>{event.preventDefault();const data=formData(form);const missing=missingFields(data);if(missing.length){setStatus(form,"err",labels[lang].err+missing.join(", "));return;}setStatus(form,"ok",labels[lang].ok);openWhatsApp(data);});});})();`;

function write(file, contents) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents, "utf8");
}

function cleanGenerated() {
  for (const lang of ["en", "ar"]) {
    fs.rmSync(path.join(outDir, lang), { recursive: true, force: true });
  }
  fs.rmSync(path.join(outDir, "assets"), { recursive: true, force: true });
}

function build() {
  cleanGenerated();
  write(path.join(outDir, "assets", "css", "style.css"), css);
  write(path.join(outDir, "assets", "js", "main.js"), js);
  fs.mkdirSync(path.join(outDir, "assets", "images"), { recursive: true });
  fs.copyFileSync(uploadedAssets.logo, path.join(outDir, "assets", "images", "aes-logo.png"));
  fs.copyFileSync(uploadedAssets.founder, path.join(outDir, "assets", "images", "founder.jpg"));
  write(path.join(outDir, "assets", "data", "config.js"), `window.AES_CONFIG=${JSON.stringify(config, null, 2)};\n`);
  write(path.join(outDir, "assets", "data", "services.js"), `window.AES_SERVICES=${JSON.stringify(services.map((s) => ({ slug: s.slug, en: s.en, ar: s.ar })), null, 2)};\n`);
  write(path.join(outDir, "assets", "data", "faqs.js"), `window.AES_FAQS=${JSON.stringify(faq, null, 2)};\n`);
  write(path.join(outDir, "index.html"), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>AES Egypt</title><meta http-equiv="refresh" content="0; url=/en/"><link rel="canonical" href="${url("en", "")}"><script>location.replace("/en/");</script></head><body><a href="/en/">AES Egypt English</a> | <a href="/ar/">AES Egypt عربي</a></body></html>`);
  for (const lang of ["en", "ar"]) {
    write(localPath(lang, ""), homePage(lang));
    write(localPath(lang, "about"), aboutPage(lang));
    write(localPath(lang, "services"), servicesPage(lang));
    for (const service of services) {
      write(localPath(lang, `services/${service.slug}`), servicePage(lang, service));
    }
    write(localPath(lang, "faq"), faqPage(lang));
    write(localPath(lang, "contact"), contactPage(lang));
    write(localPath(lang, "privacy-policy"), policyPage(lang, "privacy"));
    write(localPath(lang, "terms-and-conditions"), policyPage(lang, "terms"));
  }
  const sitemapUrls = [];
  for (const lang of ["en", "ar"]) {
    for (const route of routes) sitemapUrls.push(url(lang, route.slug));
  }
  write(path.join(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((item) => `  <url><loc>${item}</loc></url>`).join("\n")}\n</urlset>\n`);
  write(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${config.siteUrl}/sitemap.xml\n`);
}

build();
