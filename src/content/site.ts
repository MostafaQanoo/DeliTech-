export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return value === "ar" || value === "en";
}

export const company = {
  mark: "delitech",
  name: { ar: "ديلي تكنولوجي", en: "Deli Technology" },
  email: "info@delitechnology.net",
  phoneDisplay: "0599624899",
  phoneTel: "+970599624899",
  phoneHref: "tel:+970599624899",
  whatsapp: "https://wa.me/970599624899",
  hours: "09:00 - 17:00",
  place: { ar: "فلسطين", en: "Palestine" },
  freelanceYear: "2019",
  officialYear: "2021",
} as const;

type Copy = { ar: string; en: string };

const services = [
  {
    slug: "systems",
    icon: "systems",
    title: {
      ar: "برمجة الأنظمة الإدارية والمحاسبية",
      en: "Administrative and accounting systems",
    },
    summary: {
      ar: "أنظمة تنظّم الحسابات والعمليات اليومية، بتكلفة تناسب المشاريع الصغيرة والكبيرة.",
      en: "Systems that organize accounting and day-to-day operations, priced for small and large projects.",
    },
    body: {
      ar: [
        "نبرمج أنظمة إدارية ومحاسبية للشركات التي تحتاج متابعة أوضح للحسابات والعمليات، من دون تكلفة مخفية.",
        "النطاق يُحدَّد حسب حجم النشاط: ما يحتاجه مشروع صغير يختلف عما تحتاجه مؤسسة أكبر، والتكلفة تُقال بوضوح قبل البدء.",
      ],
      en: [
        "We build administrative and accounting systems for companies that need a clearer view of their accounts and daily operations, with no hidden fees.",
        "Scope follows the size of the business. A small project does not need the same system as a larger organization, and the price is agreed before work starts.",
      ],
    },
    tags: {
      ar: ["أنظمة", "محاسبة", "تقارير", "صلاحيات"],
      en: ["Systems", "Accounting", "Reports", "Permissions"],
    },
    outcomes: {
      ar: ["متابعة الحسابات والعمليات", "تقارير أوضح للإدارة", "تكلفة معلنة قبل التنفيذ"],
      en: ["Clearer accounts and operations", "Reports the team can actually use", "Price agreed before build"],
    },
  },
  {
    slug: "websites",
    icon: "web",
    title: { ar: "برمجة المواقع الإلكترونية", en: "Website development" },
    summary: {
      ar: "موقع تعريفي، متجر إلكتروني، أو موقع بمواصفات خاصة — حسب نشاطك وميزانيتك.",
      en: "A company site, an online store, or a custom build — matched to your business and budget.",
    },
    body: {
      ar: [
        "نساعدك في إنشاء الموقع الإلكتروني المناسب لنشاطك التجاري أو الخدمي وفقًا لميزانيتك، سواء كنت تريد موقعًا تعريفيًا لشركة أو مؤسسة، أو متجرًا إلكترونيًا لبيع المنتجات عبر الإنترنت، أو موقعًا بمواصفات تصميم وبرمجة خاصة.",
      ],
      en: [
        "We help you launch the website that fits your business and your budget: a company profile, an online store, or a site with its own design and engineering requirements.",
      ],
    },
    tags: {
      ar: ["مواقع تعريفية", "متاجر", "واجهات", "لوحات تحكم"],
      en: ["Company sites", "Stores", "Interfaces", "Dashboards"],
    },
    outcomes: {
      ar: ["حضور واضح للشركة", "بيع عبر الإنترنت عند الحاجة", "تصميم وبرمجة حسب الطلب"],
      en: ["A clear company presence", "Online selling when you need it", "Design and code scoped to the brief"],
    },
  },
  {
    slug: "mobile",
    icon: "mobile",
    title: { ar: "برمجة تطبيقات الجوال", en: "Mobile app development" },
    summary: {
      ar: "تطبيقات أندرويد وآيفون، من الفكرة الجديدة إلى المشروع القائم.",
      en: "Android and iPhone apps, whether you are starting from an idea or extending a live product.",
    },
    body: {
      ar: [
        "إذا كنت تريد إنشاء تطبيق جوال لتحوّل فكرتك إلى مشروع، أو إذا كان لديك مشروع قائم وتريد تطبيقات تعمل على هواتف أندرويد وآيفون، فنحن نوفر لك تنفيذ ذلك بمعايير تصميم وبرمجة وتأمين عالية.",
      ],
      en: [
        "If you want a mobile app that turns an idea into a product, or you already have a business and need Android and iPhone apps, we build them with a high bar for design, engineering, and security.",
      ],
    },
    tags: {
      ar: ["أندرويد", "آيفون", "تطبيقات", "تجربة استخدام"],
      en: ["Android", "iPhone", "Apps", "Product design"],
    },
    outcomes: {
      ar: ["تطبيق على أندرويد وآيفون", "تحويل الفكرة إلى منتج", "تصميم وتأمين ضمن التنفيذ"],
      en: ["Apps for Android and iPhone", "An idea turned into a product", "Design and security included in the build"],
    },
  },
  {
    slug: "design",
    icon: "design",
    title: { ar: "تصميم الجرافيك والهوية البصرية", en: "Graphic design and visual identity" },
    summary: {
      ar: "من الفكرة إلى خامات دعائية تخدم هدف المؤسسة، بمحتوى واضح وتكلفة مناسبة.",
      en: "From the idea to campaign materials that serve the organization, with clear content and a fair cost.",
    },
    body: {
      ar: [
        "نحوّل الأفكار والرسومات إلى خامات دعائية عالية الجودة تخدم أهداف مؤسستك، بأسلوب تقديم راقٍ ومحتوى واضح وتكلفة مناسبة.",
      ],
      en: [
        "We turn ideas and artwork into high-quality promotional materials that serve your organization’s goals, with a polished presentation, clear content, and a fair cost.",
      ],
    },
    tags: {
      ar: ["هوية", "شعار", "مطبوعات", "خامات دعائية"],
      en: ["Identity", "Logo", "Print", "Campaign art"],
    },
    outcomes: {
      ar: ["هوية يمكن التعرّف عليها", "مواد جاهزة للاستخدام", "محتوى أوضح للجمهور"],
      en: ["An identity people recognize", "Materials ready to use", "Clearer content for your audience"],
    },
  },
  {
    slug: "marketing",
    icon: "marketing",
    title: { ar: "خدمات التسويق الرقمي", en: "Digital marketing" },
    summary: {
      ar: "خطة مكتوبة: وضعك الحالي، المنافسون، والأهداف المتفق عليها لفترة التعاقد.",
      en: "A written plan: where you stand, what competitors do, and the goals we agree for the contract.",
    },
    body: {
      ar: [
        "تشمل خدمات التسويق الرقمي لدينا إعداد مستند خطة التسويق الرقمي، متضمنًا تحليل الوضع الحالي لتواجد مشروعك على الإنترنت، وتحليل أنشطة أبرز المنافسين، والاتفاق على الأهداف التي تريد تحقيقها خلال فترة التعاقد.",
      ],
      en: [
        "Digital marketing starts with a written plan: where your project stands online today, what your main competitors are doing, and the goals we agree to pursue during the contract.",
      ],
    },
    tags: {
      ar: ["خطة تسويق", "تحليل منافسين", "أهداف", "حضور رقمي"],
      en: ["Marketing plan", "Competitor review", "Goals", "Online presence"],
    },
    outcomes: {
      ar: ["خطة مكتوبة لا حملة عشوائية", "فهم للوضع الحالي", "أهداف متفق عليها"],
      en: ["A written plan, not a random campaign", "A read on the current presence", "Goals both sides agree on"],
    },
  },
  {
    slug: "operations",
    icon: "ops",
    title: { ar: "التشغيل والإدارة والصيانة", en: "Operations and maintenance" },
    summary: {
      ar: "إذا لم يتوفر فريق لإدارة الموقع أو المتجر أو التطبيق، نشغّله ونصونه معك.",
      en: "If you do not have a team to run the site, store, or app, we operate and maintain it with you.",
    },
    body: {
      ar: [
        "إذا لم يكن لديك الوقت أو فريق العمل الكافي لإدارة موقعك أو متجرك الإلكتروني أو تطبيق الجوال الخاص بمشروعك، فنحن هنا لدعمك. لا نكتفي بإنشاء التطبيقات والمواقع، بل نشغّلها ونديرها ونصونها أيضًا.",
        "الدعم الفني والصيانة جزء من عمل الشركة، إلى جانب التواجد المعلن على مدار الساعة لمن يحتاج متابعة بعد الإطلاق.",
      ],
      en: [
        "If you do not have the time or the team to run your website, online store, or mobile app, we stay on after launch. We do not only build products — we operate, manage, and maintain them.",
        "Technical support and maintenance are part of the work, including the round-the-clock availability the company advertises for clients who need follow-up after release.",
      ],
    },
    tags: {
      ar: ["تشغيل", "صيانة", "دعم فني", "إدارة"],
      en: ["Operations", "Maintenance", "Support", "Management"],
    },
    outcomes: {
      ar: ["المنتج لا يتوقف بعد التسليم", "دعم فني وصيانة", "إدارة عند غياب الفريق الداخلي"],
      en: ["The product keeps running after handoff", "Support and maintenance", "Operations when you have no in-house team"],
    },
  },
] as const;

const projects = [
  {
    slug: "arabstock",
    image: "/work/arabstock.webp",
    width: 1000,
    height: 668,
    href: "https://arabsstock.com/ar",
    name: { ar: "منصة عربستوك", en: "Arabstock" },
    kind: { ar: "منصة محتوى", en: "Content platform" },
    summary: {
      ar: "منصة عربستوك كما نُشرت في أعمال الشركة: مكتبة محتوى عربي من صور وفيديو ورسوم، والرابط الظاهر على الموقع هو arabsstock.com.",
      en: "Arabstock, as published in the company portfolio: an Arabic library of photos, video, and graphics. The site links it to arabsstock.com.",
    },
  },
  {
    slug: "designers",
    image: "/work/designers.webp",
    width: 1000,
    height: 668,
    href: "https://apps.apple.com/sa/app/designers-for-client/id1607593622",
    name: { ar: "Designers", en: "Designers" },
    kind: { ar: "تطبيق للعميل", en: "Client app" },
    summary: {
      ar: "تطبيق Designers للعميل من معرض الأعمال: تصفح أعمال المصممين وطلب تصميم. الرابط المنشور يقود إلى صفحة التطبيق على آب ستور.",
      en: "Designers for Client, from the portfolio: browse designers’ work and request a design. The published link opens the App Store page.",
    },
  },
  {
    slug: "amrak",
    image: "/work/amrak.webp",
    width: 1280,
    height: 1920,
    href: "https://apps.apple.com/il/app/ammrk/id1602354851",
    name: { ar: "أمرك", en: "Amrak" },
    kind: { ar: "تطبيق مطاعم", en: "Restaurant app" },
    summary: {
      ar: "أمرك كما تظهر صورته على الموقع: تطبيق على طاولة المطعم بقائمة رقمية وطلب وحساب. الرابط المنشور هو تطبيق Ammrk.",
      en: "Amrak, as shown on the company site: a phone app at the restaurant table, with a digital menu, an order, and the bill. The published link is the Ammrk app.",
    },
  },
  {
    slug: "car-booking",
    image: "/work/car-booking.webp",
    width: 1280,
    height: 1280,
    href: "https://blackwayexpress.com/",
    name: { ar: "حجز سيارة", en: "Car booking" },
    kind: { ar: "حجز وتنقّل", en: "Ride booking" },
    summary: {
      ar: "حجز سيارة عبر Black Way: مشاوير بين المدن، توصيل المطار، واستئجار بالساعة. الرابط المنشور هو blackwayexpress.com.",
      en: "Car booking with Black Way: city-to-city rides, airport transfers, and hire by the hour. The published link is blackwayexpress.com.",
    },
  },
  {
    slug: "shoe-store",
    image: "/work/shoe-store.webp",
    width: 1280,
    height: 582,
    href: "https://benetto.ro/",
    name: { ar: "متجر أحذية", en: "Shoe store" },
    kind: { ar: "متجر إلكتروني", en: "Online store" },
    summary: {
      ar: "متجر أحذية من المعرض: واجهة لأحذية رياضية مع بحث وتصنيفات. الرابط المنشور هو benetto.ro.",
      en: "A shoe store from the portfolio: a sneaker shop with search and categories. The published link is benetto.ro.",
    },
  },
  {
    slug: "speed-car",
    image: "/work/speed-car.webp",
    width: 1000,
    height: 668,
    href: "https://play.google.com/store/apps/details?id=com.h.mortaja.speed_car_customers",
    name: { ar: "Speed Car", en: "Speed Car" },
    kind: { ar: "تطبيق سيارات", en: "Car services app" },
    summary: {
      ar: "Speed Car من الأعمال: تطبيق جوال لخدمات السيارة، من حجز وغسيل وقطع. الرابط المنشور يقود إلى صفحة التطبيق على متجر قوقل.",
      en: "Speed Car from the portfolio: a mobile app for car services, from booking and washing to parts. The published link opens the Google Play listing.",
    },
  },
  {
    slug: "binaya",
    image: "/work/binaya.webp",
    width: 1000,
    height: 1500,
    href: "https://binaya-sa.com",
    name: { ar: "منصة بناية", en: "Binaya" },
    kind: { ar: "مواد بناء", en: "Building materials" },
    summary: {
      ar: "منصة بناية كما نُشرت: واجهة لمواد البناء مع بحث وتصنيفات وحساب. الرابط الظاهر على الموقع هو binaya-sa.com.",
      en: "Binaya, as published: a building-materials screen with search, categories, and an account. The link on the company site is binaya-sa.com.",
    },
  },
  {
    slug: "e-optics",
    image: "/work/e-optics.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "مراكز البصريات", en: "E-Optics" },
    kind: { ar: "نظام عيادات", en: "Clinic system" },
    summary: {
      ar: "منصة لمراكز البصريات تجمع المواعيد والوصفات والمخزون والفوترة وملف العميل في نظام واحد، من محل واحد إلى أكثر من فرع.",
      en: "A platform for optical centers that puts scheduling, prescriptions, inventory, billing, and the customer file in one system, from a single shop to several branches.",
    },
  },
  {
    slug: "customers-crm",
    image: "/work/customers-crm.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "نظام العملاء", en: "Customers CRM" },
    kind: { ar: "إدارة عملاء", en: "CRM" },
    summary: {
      ar: "نظام يجمع سجلات العملاء، يرتّب التواصل، ويؤتمت المتابعة، مع تقارير تحوّل البيانات إلى قرار.",
      en: "A system that keeps customer records together, organizes communication, automates follow-up, and turns the data into reports.",
    },
  },
  {
    slug: "speed-limit",
    image: "/work/speed-limit.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "مراقبة السرعة", en: "Speed Limit" },
    kind: { ar: "تطبيق سلامة", en: "Safety app" },
    summary: {
      ar: "تطبيق يراقب سرعة المركبة لحظة بلحظة مقابل الحد المسموح، وينبّه السائق فور التجاوز.",
      en: "An app that watches vehicle speed in real time against the local limit and alerts the driver as soon as they pass it.",
    },
  },
  {
    slug: "devrika",
    image: "/work/devrika.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "ديفريكا", en: "Devrika" },
    kind: { ar: "تجارة بالواقع المعزز", en: "AR commerce" },
    summary: {
      ar: "متجر يخلّي الزبون يشوف المنتج في مكانه قبل الشراء، بين واجهة المتجر والتجربة في البيت.",
      en: "A store that lets a shopper see the product in their own space before buying, between the online shop and the room at home.",
    },
  },
  {
    slug: "cyberx",
    image: "/work/cyberx.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "سايبركس", en: "CYBERX" },
    kind: { ar: "توعية رقمية", en: "Security awareness" },
    summary: {
      ar: "منصة عربية للتوعية بالأمن الرقمي: مواد واضحة وأدوات عملية للأفراد والمؤسسات.",
      en: "An Arabic platform for digital-security awareness: clear material and practical tools for people and organizations.",
    },
  },
  {
    slug: "identities",
    image: "/work/identities.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "هويات بصرية", en: "Brand identities" },
    kind: { ar: "تصميم هوية", en: "Identity design" },
    summary: {
      ar: "هويات وشعارات لمشاريع مختلفة: سوق وظائف، مزاد سيارات، تطبيق مقايضة، عمل خيري زراعي، وسوق أسر منتجة.",
      en: "Logos and identity systems across different products: a jobs marketplace, car auctions, a barter app, an agricultural charity, and a marketplace for home producers.",
    },
  },
  {
    slug: "shop-o",
    image: "/work/shop-o.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "شوب أو", en: "Shop O" },
    kind: { ar: "متجر إلكترونيات", en: "Electronics store" },
    summary: {
      ar: "متجر إلكتروني للإلكترونيات: تصفّح، شراء آمن، وتوصيل، بواجهة واضحة للأفراد والشركات.",
      en: "An online store for electronics: browsing, secure checkout, and delivery, with a clear shop for people and businesses.",
    },
  },
  {
    slug: "fikra",
    image: "/work/fikra.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "فكرة", en: "Fikra" },
    kind: { ar: "تسويق إلكتروني", en: "E-marketing" },
    summary: {
      ar: "موقع تسويق إلكتروني يعرض المنتجات ويجهّز خططًا ترفع المبيعات، من الواجهة حتى خطة النمو.",
      en: "An e-marketing site that presents products and sets out plans to raise sales, from the storefront to the growth plan.",
    },
  },
  {
    slug: "jeeply",
    image: "/work/jeeply.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "جيبلي", en: "JEEPLY" },
    kind: { ar: "تطبيق توصيل", en: "Delivery app" },
    summary: {
      ar: "تطبيق يجمع خدمات التوصيل في مكان واحد: طلب، تتبع، وتسليم.",
      en: "An app that gathers delivery services in one place: order, track, and handoff.",
    },
  },
  {
    slug: "delivered",
    image: "/work/delivered.webp",
    width: 1280,
    height: 720,
    href: "",
    concept: true,
    name: { ar: "ديليفريد", en: "Delivered" },
    kind: { ar: "توصيل طعام", en: "Food delivery" },
    summary: {
      ar: "تطبيق يوصل الطلبات من المطاعم: قائمة، طلب، وحالة التوصيل لحظة بلحظة.",
      en: "An app that brings orders from restaurants: a menu, an order, and live delivery status.",
    },
  },
] as const;

const workSections = [
  {
    id: "apps",
    title: { ar: "تطبيقات", en: "Apps" },
    featured: ["designers", "amrak"],
    rest: ["car-booking", "speed-car", "speed-limit", "devrika", "jeeply", "delivered"],
  },
  {
    id: "sites",
    title: { ar: "مواقع ومتاجر", en: "Sites and stores" },
    featured: ["arabstock", "shoe-store"],
    rest: ["binaya", "shop-o", "fikra"],
  },
  {
    id: "systems",
    title: { ar: "أنظمة", en: "Systems" },
    featured: ["e-optics", "customers-crm"],
    rest: [],
  },
  {
    id: "brand",
    title: { ar: "هوية وتسويق", en: "Identity and marketing" },
    featured: ["identities", "cyberx"],
    rest: [],
  },
] as const;

export const portfolioSlugs = projects.map((project) => project.slug);
export const serviceSlugs = services.map((service) => service.slug);
export const workSectionIds = workSections
  .filter((section) => section.rest.length > 0)
  .map((section) => section.id);

export type Service = {
  slug: string;
  icon: (typeof services)[number]["icon"];
  title: string;
  summary: string;
  body: string[];
  tags: string[];
  outcomes: string[];
};

export type Project = {
  slug: string;
  image: string;
  width: number;
  height: number;
  href: string;
  concept?: boolean;
  name: string;
  kind: string;
  summary: string;
  imageAlt: string;
};

export type Dictionary = ReturnType<typeof getDictionary>;

function pick<T extends Copy | { ar: readonly string[]; en: readonly string[] }>(
  locale: Locale,
  value: T,
): T[Locale] {
  return value[locale];
}

function projectBySlug(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project: ${slug}`);
  return project;
}

const projectImageAlt: Record<(typeof projects)[number]["slug"], Copy> = {
  arabstock: {
    ar: "منصة عربستوك — منصة محتوى رقمي لمكتبة صور وفيديو ورسوم عربية",
    en: "Arabstock — digital content platform for Arabic photos, video, and graphics",
  },
  designers: {
    ar: "تطبيق Designers — تصفح أعمال المصممين وطلب تصميم من العميل",
    en: "Designers — client app for browsing designer work and requesting a design",
  },
  amrak: {
    ar: "أمرك — تطبيق مطاعم بقائمة رقمية وطلب وحساب على الطاولة",
    en: "Amrak — restaurant app with a digital menu, order, and bill",
  },
  "car-booking": {
    ar: "حجز سيارة — مشاوير بين المدن وتوصيل المطار واستئجار بالساعة",
    en: "Car booking — city-to-city rides, airport transfers, and hourly hire",
  },
  "shoe-store": {
    ar: "متجر أحذية — متجر إلكتروني لأحذية رياضية مع بحث وتصنيفات",
    en: "Shoe store — online sneaker shop with search and categories",
  },
  "speed-car": {
    ar: "Speed Car — تطبيق جوال لخدمات السيارة من حجز وغسيل وقطع",
    en: "Speed Car — mobile app for car booking, washing, and parts",
  },
  binaya: {
    ar: "منصة بناية — منصة مواد بناء مع بحث وتصنيفات وحساب",
    en: "Binaya — building materials platform with search, categories, and an account",
  },
  "e-optics": {
    ar: "مراكز البصريات — صورة تعبيرية لنظام مواعيد ووصفات ومخزون",
    en: "E-Optics — expressive visual of an optical clinic system for appointments, prescriptions, and inventory",
  },
  "customers-crm": {
    ar: "نظام العملاء — صورة تعبيرية لنظام إدارة العملاء والمتابعة والتقارير",
    en: "Customers CRM — expressive visual of a customer management system",
  },
  "speed-limit": {
    ar: "مراقبة السرعة — صورة تعبيرية لتطبيق ينبّه السائق عند تجاوز الحد",
    en: "Speed Limit — expressive visual of a vehicle speed safety app",
  },
  devrika: {
    ar: "ديفريكا — صورة تعبيرية لمتجر يعرض المنتج بالواقع المعزز قبل الشراء",
    en: "Devrika — expressive visual of an augmented-reality shopping experience",
  },
  cyberx: {
    ar: "سايبركس — صورة تعبيرية لمنصة عربية للتوعية بالأمن الرقمي",
    en: "CYBERX — expressive visual of an Arabic digital security awareness platform",
  },
  identities: {
    ar: "هويات بصرية — صورة تعبيرية لشعارات وهويات عدة مشاريع",
    en: "Brand identities — expressive visual of logos and identity systems for several businesses",
  },
  "shop-o": {
    ar: "شوب أو — صورة تعبيرية لمتجر إلكترونيات مع شراء وتوصيل",
    en: "Shop O — expressive visual of an electronics online store",
  },
  fikra: {
    ar: "فكرة — صورة تعبيرية لموقع تسويق إلكتروني وخطط نمو المبيعات",
    en: "Fikra — expressive visual of an e-marketing website and sales plans",
  },
  jeeply: {
    ar: "جيبلي — صورة تعبيرية لتطبيق يجمع خدمات التوصيل",
    en: "JEEPLY — expressive visual of a delivery app for ordering and tracking",
  },
  delivered: {
    ar: "ديليفريد — صورة تعبيرية لتطبيق توصيل طلبات المطاعم",
    en: "Delivered — expressive visual of a food delivery app",
  },
};

function presentProject(project: (typeof projects)[number], t: (value: Copy) => string) {
  return {
    slug: project.slug,
    image: project.image,
    width: project.width,
    height: project.height,
    href: project.href,
    concept: "concept" in project && project.concept === true,
    name: t(project.name),
    kind: t(project.kind),
    summary: t(project.summary),
    imageAlt: t(projectImageAlt[project.slug]),
  };
}

export function getDictionary(locale: Locale) {
  const t = (value: Copy) => pick(locale, value);
  const list = (value: { ar: readonly string[]; en: readonly string[] }) => [
    ...pick(locale, value),
  ];

  return {
    locale,
    brand: t(company.name),
    meta: {
      title: t({
        ar: "شركة برمجة وتطوير حلول رقمية في فلسطين | ديلي تكنولوجي",
        en: "Software Development & Digital Solutions Company in Palestine | Deli Technology",
      }),
      description: t({
        ar: "ديلي تكنولوجي شركة برمجة وتطوير حلول رقمية في فلسطين. نبني المواقع وتطبيقات الجوال والأنظمة الإدارية، ونصمّم الهوية البصرية، ونقدّم التسويق الرقمي.",
        en: "Deli Technology is a software development and digital solutions company in Palestine. We build websites, mobile apps, and business systems, and we deliver graphic design and digital marketing.",
      }),
    },
    nav: {
      services: t({ ar: "الخدمات", en: "Services" }),
      work: t({ ar: "الأعمال", en: "Work" }),
      about: t({ ar: "من نحن", en: "About" }),
      contact: t({ ar: "تواصل معنا", en: "Contact" }),
      terms: t({ ar: "الشروط والأحكام", en: "Terms" }),
      cta: t({ ar: "احجز مكالمة", en: "Schedule a call" }),
      menu: t({ ar: "القائمة", en: "Menu" }),
      close: t({ ar: "إغلاق", en: "Close" }),
      lang: t({ ar: "English", en: "العربية" }),
    },
    hero: {
      line: t({
        ar: "نسرّع منتجك الرقمي مع فريق",
        en: "Accelerate your product with a team that",
      }),
      accent: t({
        ar: "يبرمج، ويصمّم، ويسوّق.",
        en: "builds, designs, and markets.",
      }),
      lines: [
        t({ ar: "يبرمج، ويصمّم، ويسوّق.", en: "builds, designs, and markets." }),
        t({ ar: "يحوّل الفكرة إلى منتج.", en: "turns the idea into a product." }),
        t({ ar: "يكمّل بعد الإطلاق.", en: "stays on after launch." }),
      ],
      lede: t({
        ar: "منذ 2019، وبشكل رسمي منذ 2021، نبني المواقع والتطبيقات والأنظمة الإدارية، ونصمّم الهوية، وندير التسويق الإلكتروني — من فلسطين، للأفراد والشركات بمختلف أحجامها.",
        en: "Since 2019, and as a registered company since 2021, we ship websites, mobile apps, and business systems, design brands, and run digital marketing — from Palestine, for individuals and companies of every size.",
      }),
      secondary: t({ ar: "تعرّف علينا", en: "About the company" }),
      panelKicker: t({ ar: "ثلاثة مسارات في فريق واحد", en: "Three practices, one team" }),
      panelTitle: t({ ar: "برمجة، تصميم، تسويق.", en: "Software, design, marketing." }),
    },
    stats: [
      { value: "12", label: t({ ar: "أنظمة", en: "Systems" }) },
      { value: "260", label: t({ ar: "مواقع ويب", en: "Websites" }) },
      { value: "150", label: t({ ar: "تصاميم", en: "Designs" }) },
      { value: "250", label: t({ ar: "تطبيقات", en: "Apps" }) },
    ],
    servicesIntro: {
      kicker: t({ ar: "الخدمات", en: "Services" }),
      title: t({
        ar: "كل التخصص الذي تحتاجه، من أول تصميم حتى التشغيل.",
        en: "Every discipline you need, from first design to live operations.",
      }),
      text: t({
        ar: "خدمات في مجال البرمجة والتصميم والتسويق. اختر المسار، أو اجمعها في مشروع واحد.",
        en: "Programming, design, and marketing. Pick one path, or combine them in a single project.",
      }),
    },
    services: services.map((service) => ({
      slug: service.slug,
      icon: service.icon,
      title: t(service.title),
      summary: t(service.summary),
      body: list(service.body),
      tags: list(service.tags),
      outcomes: list(service.outcomes),
    })),
    milestones: {
      kicker: t({ ar: "مسار الشركة", en: "The company so far" }),
      title: t({
        ar: "بدأنا حرًا عام 2019. صرنا شركة عام 2021.",
        en: "Freelance in 2019. A registered company in 2021.",
      }),
      items: [
        {
          year: "2019",
          title: t({ ar: "العمل الحر", en: "Freelance practice" }),
          text: t({
            ar: "بدأ العمل قبل التسجيل الرسمي، بمشاريع برمجة وتصميم وتسويق.",
            en: "The work started before registration, with programming, design, and marketing projects.",
          }),
        },
        {
          year: "2021",
          title: t({ ar: "التأسيس الرسمي", en: "Official registration" }),
          text: t({
            ar: "تأسست ديلي تكنولوجي لدى الجهات المعنية باسمها الحالي.",
            en: "Deli Technology was registered with the authorities under its current name.",
          }),
        },
        {
          year: t({ ar: "اليوم", en: "Today" }),
          title: t({ ar: "باقات متكاملة", en: "A full offer" }),
          text: t({
            ar: "مواقع، تطبيقات، أنظمة، هوية بصرية، وتسويق رقمي، مع تشغيل وصيانة بعد الإطلاق.",
            en: "Websites, apps, systems, visual identity, and digital marketing, plus operations and maintenance after launch.",
          }),
        },
      ],
    },
    why: {
      kicker: t({ ar: "لماذا ديلي", en: "Why Delitech" }),
      title: t({
        ar: "النجاح الذي نحققه يعود إلى الناس، والشراكات، والاستمرار.",
        en: "The results come from the people, the partnerships, and staying at it.",
      }),
      text: t({
        ar: "من أهم أسباب النجاحات التي حققناها ونحققها طاقم العمل المتميز، والشراكات التي بنيناها مع شركات عالمية، والبحث المستمر عن أسماء لامعة للتعاون معها.",
        en: "A large part of the success so far is the team, the partnerships built with international companies, and a continuous search for strong people to work with.",
      }),
      items: [
        {
          title: t({ ar: "لا توجد تكلفة خفية", en: "No hidden cost" }),
          text: t({
            ar: "تكلفة مناسبة للمشاريع الكبيرة والصغيرة، وتُقال قبل أن يبدأ التنفيذ.",
            en: "A fair price for large and small projects, stated before the work begins.",
          }),
        },
        {
          title: t({ ar: "فريق متخصص", en: "A specialist team" }),
          text: t({
            ar: "فريق يعمل في المجال البرمجي، لا وسيط يمرّر الطلب ثم يختفي.",
            en: "A team that works in software, not a middle layer that takes the brief and disappears.",
          }),
        },
        {
          title: t({ ar: "متاح 24/7", en: "Available 24/7" }),
          text: t({
            ar: "التواجد معلن على مدار الساعة لمن يحتاج متابعة، إلى جانب دوام المكتب من 9 إلى 5.",
            en: "Availability is advertised around the clock for clients who need follow-up, alongside office hours from 9 to 5.",
          }),
        },
        {
          title: t({ ar: "الخبرة في العمل", en: "Working experience" }),
          text: t({
            ar: "لدى الشركة فريق بمستوى عالٍ من الخبرة في مجال البرمجة.",
            en: "The company has a team with a high level of experience in programming.",
          }),
        },
        {
          title: t({ ar: "الجودة", en: "Quality" }),
          text: t({
            ar: "نقدّم خدمات بمستوى عالٍ من الجودة في البرمجة والتصميم والتسويق.",
            en: "The bar is a high level of quality across programming, design, and marketing.",
          }),
        },
        {
          title: t({ ar: "الدعم والصيانة", en: "Support and maintenance" }),
          text: t({
            ar: "نوفّر الدعم الفني والصيانة بعد التسليم، لا نكتفي بيوم الإطلاق.",
            en: "Technical support and maintenance continue after delivery. Launch day is not the end of the work.",
          }),
        },
      ],
    },
    work: {
      kicker: t({ ar: "الأعمال", en: "Work" }),
      title: t({ ar: "أعمال ومنصات وتطبيقات.", en: "Work, platforms, and apps." }),
      text: t({
        ar: "منصات ومواقع وتطبيقات وأنظمة وهويات. الأعمال الأولى منشورة على موقع الشركة بصورها وروابطها، والبقية نماذج قريبة من نفس نوع الشغل.",
        en: "Platforms, sites, apps, systems, and identities. The first works are published on the company site with their images and links. The rest are samples in the same kinds of work.",
      }),
      concept: t({
        ar: "صورة تعبيرية عن فكرة المشروع.",
        en: "A visual made around the idea of the project.",
      }),
      all: t({ ar: "كل الأعمال", en: "All work" }),
      view: t({ ar: "شاهد العمل", en: "View the work" }),
      pick: t({
        ar: "كل عمل لوحة. انزل، واللوحة التالية تطلع فوقها.",
        en: "Each work is a plate. Scroll, and the next plate rises over it.",
      }),
      samples: t({
        ar: "نموذجان من كل قسم، والباقي من رابط القسم.",
        en: "Two samples from each section. The rest opens from the section link.",
      }),
      more: t({ ar: "باقي مشاريع القسم", en: "More from this section" }),
      sectionRest: t({
        ar: "باقي مشاريع هذا القسم.",
        en: "The rest of this section.",
      }),
      prev: t({ ar: "العمل السابق", en: "Previous work" }),
      next: t({ ar: "العمل التالي", en: "Next work" }),
      published: t({ ar: "منشور", en: "Published" }),
      sample: t({ ar: "نموذج", en: "Sample" }),
      visit: t({ ar: "افتح العمل المنشور", en: "Open the published work" }),
      note: t({
        ar: "مشروع ظاهر في معرض أعمال ديلي تكنولوجي على موقعها.",
        en: "A project shown in the Deli Technology portfolio on its own site.",
      }),
      visual: t({
        ar: "الصورة نفسها المنشورة في معرض الأعمال، من غير لقطة جديدة.",
        en: "The same image published in the portfolio, not a new screenshot.",
      }),
    },
    projects: projects.map((project) => presentProject(project, t)),
    workSections: workSections.map((section) => ({
      id: section.id,
      title: t(section.title),
      featured: section.featured.map((slug) => presentProject(projectBySlug(slug), t)),
      rest: section.rest.map((slug) => presentProject(projectBySlug(slug), t)),
    })),
    models: {
      kicker: t({ ar: "أسلوب التعاون", en: "How we engage" }),
      title: t({
        ar: "أنت تحدد الناتج. نحن نبنيه، أو نشغّله، أو نسوّقه.",
        en: "You define the outcome. We build it, run it, or market it.",
      }),
      text: t({
        ar: "ثلاث طرق عملية للبدء، حسب ما يحتاجه المشروع الآن.",
        en: "Three practical ways to start, depending on what the project needs now.",
      }),
      items: [
        {
          title: t({ ar: "مشروع متكامل", en: "Full project" }),
          text: t({
            ar: "من الفكرة إلى الإطلاق: موقع، تطبيق، أو نظام، مع التصميم والتنفيذ ونطاق مكتوب.",
            en: "From the idea to launch: a website, an app, or a system, with design, engineering, and a written scope.",
          }),
        },
        {
          title: t({ ar: "تشغيل وإدارة", en: "Run and maintain" }),
          text: t({
            ar: "إذا لم يتوفر فريق لإدارة الموقع أو المتجر أو التطبيق، نشغّله ونصونه وندعمك بعد الإطلاق.",
            en: "If there is no team to manage the site, store, or app, we operate it, maintain it, and support you after launch.",
          }),
        },
        {
          title: t({ ar: "هوية وتسويق", en: "Brand and marketing" }),
          text: t({
            ar: "هوية بصرية وخطة تسويق رقمي مبنية على وضعك الحالي، والمنافسين، والأهداف المتفق عليها.",
            en: "A visual identity and a digital marketing plan based on where you stand, your competitors, and the goals we agree.",
          }),
        },
      ],
    },
    process: {
      kicker: t({ ar: "الخطوات", en: "The process" }),
      title: t({
        ar: "ثلاث خطوات. واضحة، ومن دون مفاجآت في التكلفة.",
        en: "Three steps. Clear, and no surprises in the cost.",
      }),
      items: [
        {
          step: "01",
          title: t({ ar: "مكالمة تعارف", en: "A discovery call" }),
          text: t({
            ar: "نحكي عن النشاط، والنتيجة المطلوبة، والميزانية، والمدة. إذا لم نكن الجهة المناسبة، نقول ذلك.",
            en: "We talk about the business, the result you want, the budget, and the timeline. If we are not the right fit, we say so.",
          }),
        },
        {
          step: "02",
          title: t({ ar: "تحديد الحل", en: "Agree the solution" }),
          text: t({
            ar: "نثبت نطاق العمل والتكلفة والجدول قبل التنفيذ. لا بند يتغير بصمت بعد الاتفاق.",
            en: "We lock scope, price, and schedule before production. Nothing changes quietly after the agreement.",
          }),
        },
        {
          step: "03",
          title: t({ ar: "تنفيذ ومتابعة", en: "Build and follow through" }),
          text: t({
            ar: "نبدأ العمل، نشارك التقدم، وبعد الإطلاق يبقى الدعم والصيانة جزءًا من العلاقة.",
            en: "We start the work, share progress, and keep support and maintenance as part of the relationship after launch.",
          }),
        },
      ],
    },
    closing: {
      title: t({
        ar: "تريد أن يبدأ المشروع بشكل صحيح؟",
        en: "Want the project to start properly?",
      }),
      text: t({
        ar: "احجز مكالمة، أو راسلنا على الواتساب والبريد. المكتب في فلسطين من 9 صباحًا حتى 5 مساءً.",
        en: "Schedule a call, or write on WhatsApp and email. The office in Palestine is open from 9 to 5.",
      }),
    },
    about: {
      kicker: t({ ar: "من نحن", en: "About" }),
      title: t({
        ar: "شركة برمجة وتصميم وتسويق، من فلسطين.",
        en: "A software, design, and marketing company from Palestine.",
      }),
      lede: t({
        ar: "رسالتنا أن نقدّم خدمات نوعية تلبّي تطلعات العملاء، من الأفراد إلى الشركات بمختلف أحجامها.",
        en: "The mission is specific: services that meet what clients expect, from individuals to companies of every size.",
      }),
      missionTitle: t({ ar: "الرسالة", en: "Mission" }),
      mission: [
        t({
          ar: "بدأنا العمل منذ عام 2019 بشكل حر دون الطابع الرسمي، ومع بداية عام 2021 تم إنشاء الشركة لدى الجهات المعنية باسم ديلي تكنولوجي.",
          en: "Work began in 2019 as an independent practice. At the start of 2021 the company was registered with the authorities as Deli Technology.",
        }),
        t({
          ar: "تميّزنا خلال سنوات الخبرة بتقديم باقات متكاملة من المنتجات والحلول لقطاع تكنولوجيا المعلومات، وبنينا نجاحات متتالية على سياسة واضحة: إيجاد خدمات نوعية تلبّي تطلعات عملائنا من كافة القطاعات، بدءًا بالأفراد والشركات بمختلف أحجامها.",
          en: "Over those years the studio delivered complete packages of products and solutions for information technology, and kept a clear policy: services that meet clients across sectors, starting with individuals and companies of every size.",
        }),
        t({
          ar: "نعمل لتحقيق هدف وضع الاسم ضمن الشركات البارزة في قطاع تقنية المعلومات. الخدمات الأساسية ثلاث: البرمجة، والتسويق الإلكتروني، والتصميم.",
          en: "The aim is to place the name among the companies that matter in information technology. The core services are three: programming, digital marketing, and design.",
        }),
      ],
      visionTitle: t({ ar: "الرؤية", en: "Vision" }),
      vision: t({
        ar: "الريادة في ابتكار وتطوير أفكار برمجية إبداعية على المستويين الإقليمي والعالمي.",
        en: "Leadership in inventing and developing creative software ideas, regionally and internationally.",
      }),
      sectorsTitle: t({ ar: "لمن نعمل", en: "Who we work with" }),
      sectors: [
        t({ ar: "أفراد", en: "Individuals" }),
        t({ ar: "شركات صغيرة", en: "Small companies" }),
        t({ ar: "مؤسسات", en: "Organizations" }),
        t({ ar: "متاجر", en: "Stores" }),
        t({ ar: "مشاريع خدمية", en: "Service businesses" }),
      ],
    },
    faq: {
      title: t({ ar: "أسئلة قبل المكالمة", en: "Before the call" }),
      items: [
        {
          q: t({ ar: "أين تعملون؟", en: "Where are you based?" }),
          a: t({
            ar: "من فلسطين. ساعات المكتب من 9:00 حتى 17:00، والدعم الفني معلن على مدار الساعة.",
            en: "In Palestine. Office hours are 09:00 to 17:00, and technical support is advertised around the clock.",
          }),
        },
        {
          q: t({ ar: "ماذا يمكن أن نطلب؟", en: "What can we ask you to do?" }),
          a: t({
            ar: "موقعًا، متجرًا، تطبيق جوال، نظامًا إداريًا أو محاسبيًا، هوية بصرية، خطة تسويق رقمي، أو تشغيل وصيانة منتج قائم.",
            en: "A website, a store, a mobile app, an administrative or accounting system, a visual identity, a digital marketing plan, or operations and maintenance for a product you already have.",
          }),
        },
        {
          q: t({ ar: "هل التكلفة تتغير أثناء العمل؟", en: "Does the price move during the work?" }),
          a: t({
            ar: "لا نعمل بتكلفة مخفية. النطاق والسعر يُتفق عليهما قبل البدء، وأي إضافة تُناقش قبل تنفيذها.",
            en: "We do not work with hidden fees. Scope and price are agreed before we start, and any addition is discussed before it is built.",
          }),
        },
        {
          q: t({ ar: "منذ متى وأنتم تعملون؟", en: "How long have you been doing this?" }),
          a: t({
            ar: "العمل الحر بدأ عام 2019، والتسجيل الرسمي للشركة كان عام 2021.",
            en: "The freelance practice started in 2019. The company was registered in 2021.",
          }),
        },
      ],
    },
    contact: {
      kicker: t({ ar: "تواصل معنا", en: "Contact" }),
      title: t({
        ar: "احكِ لنا عن المشروع. نرد عليك من فلسطين.",
        en: "Tell us about the project. We reply from Palestine.",
      }),
      lede: t({
        ar: "الاسم، البريد، الجوال، وعنوان الرسالة. أرسلها عبر واتساب أو عبر بريدك إلى info@delitechnology.net.",
        en: "Name, email, phone, and a subject. Send it on WhatsApp, or from your mail app to info@delitechnology.net.",
      }),
      office: t({ ar: "المكتب", en: "Office" }),
      hoursLabel: t({ ar: "ساعات المكتب", en: "Office hours" }),
      support: t({
        ar: "الدعم الفني معلن 24 ساعة.",
        en: "Technical support is advertised 24 hours a day.",
      }),
      form: {
        name: t({ ar: "الاسم", en: "Name" }),
        email: t({ ar: "البريد الإلكتروني", en: "Email" }),
        phone: t({ ar: "رقم الجوال", en: "Phone" }),
        subject: t({ ar: "عنوان الرسالة", en: "Subject" }),
        message: t({ ar: "الرسالة", en: "Message" }),
        whatsapp: t({ ar: "أرسل عبر واتساب", en: "Send on WhatsApp" }),
        emailAction: t({ ar: "أرسل بالبريد", en: "Send by email" }),
        hint: t({
          ar: "الرسالة تُجهَّز على جهازك. لا نخزّنها على خادم هذا الموقع.",
          en: "The message is prepared on your device. This website does not store it on a server.",
        }),
        success: t({
          ar: "جهّزنا الرسالة. إذا لم تُفتح النافذة، استخدم الرابط المباشر.",
          en: "The message is ready. If a window did not open, use the direct link.",
        }),
        required: t({ ar: "هذا الحقل مطلوب.", en: "This field is required." }),
        emailInvalid: t({ ar: "اكتب بريدًا صحيحًا.", en: "Enter a valid email." }),
        messageShort: t({
          ar: "اكتب رسالة أوضح، عشر أحرف على الأقل.",
          en: "Write a little more — at least 10 characters.",
        }),
        invalid: t({
          ar: "أكمل الحقول المطلوبة قبل الإرسال.",
          en: "Complete the required fields before sending.",
        }),
      },
    },
    terms: {
      kicker: t({ ar: "الشروط والأحكام", en: "Terms" }),
      title: t({
        ar: "كيف نتعامل قبل أن يبدأ أي مشروع.",
        en: "How an engagement works before any project starts.",
      }),
      lede: t({
        ar: "هذه شروط التعامل المنشورة على هذا الموقع. عرض السعر المكتوب، بعد موافقته، هو الذي يثبت نطاق العمل.",
        en: "These are the engagement terms published on this site. A written quote, once accepted, is what fixes the scope.",
      }),
      updated: t({ ar: "آخر تحديث: 2026", en: "Last updated: 2026" }),
      sections: [
        {
          title: t({ ar: "العروض والنطاق", en: "Quotes and scope" }),
          text: t({
            ar: "أي وصف في الموقع يعرّف بالخدمة ولا يُعد عرض سعر. النطاق، والمدة، والتكلفة تُكتب في عرض مستقل. العمل خارج هذا النطاق يُسعَّر قبل تنفيذه.",
            en: "Anything on this website describes a service. It is not a quote. Scope, schedule, and price are written in a separate proposal. Work outside that scope is priced before it is done.",
          }),
        },
        {
          title: t({ ar: "التكلفة", en: "Price" }),
          text: t({
            ar: "لا نضيف تكلفة مخفية داخل نطاق متفق عليه. إذا تغيّر الطلب، نوقف الإضافة حتى نتفق على أثرها في السعر والوقت.",
            en: "We do not add a hidden fee inside an agreed scope. If the request changes, the addition waits until we agree on its effect on price and time.",
          }),
        },
        {
          title: t({ ar: "الملكية", en: "Ownership" }),
          text: t({
            ar: "بعد سداد المستحقات المتفق عليها، تنتقل إلى العميل مخرجات المشروع المتفق على تسليمها، ما لم يُذكر غير ذلك في العرض. أدواتنا الداخلية وقوالبنا تبقى لنا.",
            en: "After the agreed fees are paid, the deliverables named in the proposal transfer to the client, unless the proposal says otherwise. Our internal tools and templates stay ours.",
          }),
        },
        {
          title: t({ ar: "الدعم والصيانة", en: "Support and maintenance" }),
          text: t({
            ar: "الدعم بعد الإطلاق يكون حسب ما يُكتب في العرض أو في اتفاق الصيانة. ساعات المكتب من 9:00 إلى 17:00 بتوقيت فلسطين، والدعم الفني الطارئ يُتابع حسب الاتفاق.",
            en: "Support after launch follows the proposal or a maintenance agreement. Office hours are 09:00 to 17:00 Palestine time, and urgent technical support follows what was agreed.",
          }),
        },
        {
          title: t({ ar: "السرية", en: "Confidentiality" }),
          text: t({
            ar: "تفاصيل مشروعك لا تُستخدم مادةً تسويقية باسمك إلا بموافقة. أسماء المشاريع المنشورة هنا هي الأعمال التي عرضتها الشركة علنًا.",
            en: "Your project details are not used as marketing under your name without consent. The project names on this site are works the company has already shown publicly.",
          }),
        },
        {
          title: t({ ar: "التواصل عبر الموقع", en: "Messages from this site" }),
          text: t({
            ar: "نموذج التواصل يجهّز رسالة على جهازك عبر واتساب أو البريد. إرسالها مسؤوليتك، والوصول إليها يعتمد على تلك القنوات.",
            en: "The contact form prepares a message on your device through WhatsApp or email. Sending it is up to you, and delivery depends on those channels.",
          }),
        },
      ],
    },
    footer: {
      blurb: t({
        ar: "برمجة، تصميم، وتسويق رقمي من فلسطين. منذ 2019، وبشكل رسمي منذ 2021.",
        en: "Software, design, and digital marketing from Palestine. Since 2019, and registered since 2021.",
      }),
      services: t({ ar: "الخدمات", en: "Services" }),
      company: t({ ar: "الشركة", en: "Company" }),
      rights: t({
        ar: "جميع الحقوق محفوظة.",
        en: "All rights reserved.",
      }),
    },
    notFound: {
      title: t({ ar: "هذه الصفحة غير موجودة.", en: "This page is not here." }),
      text: t({
        ar: "ارجع إلى الرئيسية أو تصفّح الخدمات.",
        en: "Go back home, or look through the services.",
      }),
      home: t({ ar: "الرئيسية", en: "Home" }),
    },
  };
}

export function pathFor(locale: string, path = "") {
  if (!path || path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function swapLocale(pathname: string, next: Locale) {
  const parts = pathname.split("/");
  if (parts[1] === "ar" || parts[1] === "en") {
    parts[1] = next;
    const nextPath = parts.join("/");
    return nextPath === "" ? `/${next}` : nextPath;
  }
  return `/${next}`;
}

export function getService(locale: Locale, slug: string) {
  return getDictionary(locale).services.find((service) => service.slug === slug);
}

export function getProject(locale: Locale, slug: string) {
  return getDictionary(locale).projects.find((project) => project.slug === slug);
}

export function getWorkSection(locale: Locale, id: string) {
  return getDictionary(locale).workSections.find((section) => section.id === id);
}
