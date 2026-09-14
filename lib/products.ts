import type { LangCode } from "./translations";

export type CategoryId = "spices" | "seeds" | "herbs" | "grains";
export type ProductTagId =
  | "organic-certified"
  | "export-grade"
  | "bulk-available"
  | "sun-dried"
  | "machine-sorted"
  | "machine-cleaned"
  | "shade-dried"
  | "hand-harvested"
  | "superfood"
  | "fssai-approved";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface PackagingOption {
  size: string;
  desc: string;
}

interface ProductDetails {
  tagline: string;
  features: string[];
  specs: ProductSpec[];
  packaging: PackagingOption[];
}

export interface Product {
  slug: string;
  name: string;
  names: Partial<Record<LangCode, string>>;
  categoryId: CategoryId;
  description: string;
  image: string | null;
  bgColor: string;
  tags: ProductTagId[];
  searchAliases: string[];
  details?: ProductDetails;
}

export interface LocalizedProduct extends Omit<Product, "name" | "tags" | "description" | "details"> {
  name: string;
  category: string;
  description: string;
  tags: string[];
  tagline: string;
  features: string[];
  specs: ProductSpec[];
  packaging: PackagingOption[];
  searchTerms: string[];
}

const names = (mr: string, hi: string) => ({ mr, hi });

const riceCatalogueProduct = (
  slug: string,
  name: string,
  description: string,
  series: "Primary" | "Extended",
): Product => ({
  slug,
  name: `${name} (${series} Series)`,
  names: names(`${name} (${series} मालिका)`, `${name} (${series} श्रृंखला)`),
  categoryId: "grains",
  description,
  image: "/rice.png",
  bgColor: "rgb(245, 245, 240)",
  tags: ["export-grade", "bulk-available", "machine-cleaned"],
  searchAliases: ["rice", "basmati", "sella", "steam", name, series],
});

const localizedNames: Partial<Record<LangCode, Record<string, string>>> = {
  ar: { rice: "أرز بسمتي", turmeric: "مسحوق كركم عضوي", "black-pepper": "فلفل أسود", "red-chilli": "مسحوق فلفل حار", "dry-ginger": "زنجبيل مجفف", cumin: "بذور الكمون", coriander: "بذور الكزبرة", fenugreek: "بذور الحلبة", fennel: "بذور الشمر", sesame: "بذور السمسم", mint: "أوراق النعناع", basil: "أوراق الريحان", moringa: "أوراق المورينغا", "curry-leaves": "أوراق الكاري", cardamom: "هيل", wheat: "قمح" },
  es: { rice: "Arroz basmati", turmeric: "Cúrcuma orgánica en polvo", "black-pepper": "Pimienta negra", "red-chilli": "Chile rojo en polvo", "dry-ginger": "Jengibre seco", cumin: "Semillas de comino", coriander: "Semillas de cilantro", fenugreek: "Semillas de fenogreco", fennel: "Semillas de hinojo", sesame: "Semillas de sésamo", mint: "Hojas de menta", basil: "Hojas de albahaca", moringa: "Hojas de moringa", "curry-leaves": "Hojas de curry", cardamom: "Cardamomo", wheat: "Trigo" },
  fr: { rice: "Riz basmati", turmeric: "Curcuma bio en poudre", "black-pepper": "Poivre noir", "red-chilli": "Piment rouge en poudre", "dry-ginger": "Gingembre séché", cumin: "Graines de cumin", coriander: "Graines de coriandre", fenugreek: "Graines de fenugrec", fennel: "Graines de fenouil", sesame: "Graines de sésame", mint: "Feuilles de menthe", basil: "Feuilles de basilic", moringa: "Feuilles de moringa", "curry-leaves": "Feuilles de curry", cardamom: "Cardamome", wheat: "Blé" },
  de: { rice: "Basmati-Reis", turmeric: "Bio-Kurkumapulver", "black-pepper": "Schwarzer Pfeffer", "red-chilli": "Rotes Chilipulver", "dry-ginger": "Getrockneter Ingwer", cumin: "Kreuzkümmelsamen", coriander: "Koriandersamen", fenugreek: "Bockshornkleesamen", fennel: "Fenchelsamen", sesame: "Sesamsamen", mint: "Minzblätter", basil: "Basilikumblätter", moringa: "Moringablätter", "curry-leaves": "Curryblätter", cardamom: "Kardamom", wheat: "Weizen" },
  nl: { rice: "Basmatirijst", turmeric: "Biologisch kurkumapoeder", "black-pepper": "Zwarte peper", "red-chilli": "Rood chilipoeder", "dry-ginger": "Gedroogde gember", cumin: "Komijnzaad", coriander: "Korianderzaad", fenugreek: "Fenegriekzaad", fennel: "Venkelzaad", sesame: "Sesamzaad", mint: "Muntblaadjes", basil: "Basilicumblaadjes", moringa: "Moringabladeren", "curry-leaves": "Currybladeren", cardamom: "Kardemom", wheat: "Tarwe" },
  ru: { rice: "Рис басмати", turmeric: "Органический порошок куркумы", "black-pepper": "Чёрный перец", "red-chilli": "Порошок красного чили", "dry-ginger": "Сушёный имбирь", cumin: "Семена кумина", coriander: "Семена кориандра", fenugreek: "Семена пажитника", fennel: "Семена фенхеля", sesame: "Семена кунжута", mint: "Листья мяты", basil: "Листья базилика", moringa: "Листья моринги", "curry-leaves": "Листья карри", cardamom: "Кардамон", wheat: "Пшеница" },
  zh: { rice: "巴斯马蒂大米", turmeric: "有机姜黄粉", "black-pepper": "黑胡椒", "red-chilli": "红辣椒粉", "dry-ginger": "干姜", cumin: "孜然籽", coriander: "芫荽籽", fenugreek: "葫芦巴籽", fennel: "茴香籽", sesame: "芝麻", mint: "薄荷叶", basil: "罗勒叶", moringa: "辣木叶", "curry-leaves": "咖喱叶", cardamom: "豆蔻", wheat: "小麦" },
  ja: { rice: "バスマティ米", turmeric: "有機ターメリックパウダー", "black-pepper": "黒こしょう", "red-chilli": "赤唐辛子パウダー", "dry-ginger": "乾燥生姜", cumin: "クミンシード", coriander: "コリアンダーシード", fenugreek: "フェヌグリークシード", fennel: "フェンネルシード", sesame: "ごま", mint: "ミントの葉", basil: "バジルの葉", moringa: "モリンガの葉", "curry-leaves": "カレーリーフ", cardamom: "カルダモン", wheat: "小麦" },
  pt: { rice: "Arroz basmati", turmeric: "Cúrcuma orgânica em pó", "black-pepper": "Pimenta-preta", "red-chilli": "Pimenta vermelha em pó", "dry-ginger": "Gengibre seco", cumin: "Sementes de cominho", coriander: "Sementes de coentro", fenugreek: "Sementes de feno-grego", fennel: "Sementes de funcho", sesame: "Sementes de sésamo", mint: "Folhas de hortelã", basil: "Folhas de manjericão", moringa: "Folhas de moringa", "curry-leaves": "Folhas de curry", cardamom: "Cardamomo", wheat: "Trigo" },
  it: { rice: "Riso basmati", turmeric: "Curcuma biologica in polvere", "black-pepper": "Pepe nero", "red-chilli": "Peperoncino rosso in polvere", "dry-ginger": "Zenzero essiccato", cumin: "Semi di cumino", coriander: "Semi di coriandolo", fenugreek: "Semi di fieno greco", fennel: "Semi di finocchio", sesame: "Semi di sesamo", mint: "Foglie di menta", basil: "Foglie di basilico", moringa: "Foglie di moringa", "curry-leaves": "Foglie di curry", cardamom: "Cardamomo", wheat: "Grano" },
  gu: { rice: "બાસમતી ચોખા", turmeric: "ઓર્ગેનિક હળદર પાવડર", "black-pepper": "કાળા મરી", "red-chilli": "લાલ મરચાં પાવડર", "dry-ginger": "સૂંઠ", cumin: "જીરું", coriander: "ધાણાના બીજ", fenugreek: "મેથીના બીજ", fennel: "વરિયાળીના બીજ", sesame: "તલના બીજ", mint: "ફુદીનાના પાન", basil: "તુલસીના પાન", moringa: "સરગવાના પાન", "curry-leaves": "કઢીપત્તા", cardamom: "એલચી", wheat: "ઘઉં" },
  ta: { rice: "பாஸ்மதி அரிசி", turmeric: "இயற்கை மஞ்சள் தூள்", "black-pepper": "கருப்பு மிளகு", "red-chilli": "சிவப்பு மிளகாய்த் தூள்", "dry-ginger": "உலர் இஞ்சி", cumin: "சீரக விதைகள்", coriander: "கொத்தமல்லி விதைகள்", fenugreek: "வெந்தய விதைகள்", fennel: "சோம்பு விதைகள்", sesame: "எள் விதைகள்", mint: "புதினா இலைகள்", basil: "துளசி இலைகள்", moringa: "முருங்கை இலைகள்", "curry-leaves": "கறிவேப்பிலை", cardamom: "ஏலக்காய்", wheat: "கோதுமை" },
};

export const products: Product[] = [
  {
    slug: "rice", name: "Basmati Rice", names: names("बासमती तांदूळ", "बासमती चावल"), categoryId: "grains",
    description: "Premium long-grain basmati rice, carefully selected for its delicate aroma, fluffy texture, and consistent export quality.",
    image: "/rice.png", bgColor: "rgb(245, 245, 240)", tags: ["export-grade", "bulk-available"], searchAliases: ["rice", "basmati", "तांदूळ", "चावल"],
  },
  riceCatalogueProduct("pr-11-14-white-sella-rice-primary", "PR 11/14 White Sella Rice", "Medium grain white parboiled rice. Ideal for puffed rice (murmurra), farsan, and daily meals.", "Primary"),
  riceCatalogueProduct("pr-11-14-steam-rice-primary", "PR 11/14 Steam Rice", "Medium grain steamed rice. Perfect for daily cooking, pulao, and idli-dosa batter.", "Primary"),
  riceCatalogueProduct("1121-steam-basmati-rice-primary", "1121 Steam Basmati Rice", "Long grain premium steamed basmati rice. Excellent for biryani, pulao, and jeera rice.", "Primary"),
  riceCatalogueProduct("1121-white-sella-basmati-rice-primary", "1121 White Sella Basmati Rice", "Long grain white parboiled basmati rice. Best for royal biryanis and special feasts.", "Primary"),
  riceCatalogueProduct("fr-64-parboiled-rice-primary", "FR-64 Parboiled Rice", "Short grain parboiled rice. Best choice for south Indian dishes like idli, dosa, and uttapam.", "Primary"),
  riceCatalogueProduct("1509-white-sella-basmati-rice-primary", "1509 White Sella Basmati Rice", "Extra-long grain white parboiled basmati rice. Ideal for premium long-grain rice dishes and royal events.", "Primary"),
  riceCatalogueProduct("1509-steam-basmati-rice-primary", "1509 Steam Basmati Rice", "Extra-long grain steamed basmati rice. Superior quality for long rice dishes and flavourful pulao.", "Primary"),
  riceCatalogueProduct("1509-golden-sella-basmati-rice-primary", "1509 Golden Sella Basmati Rice", "Extra-long grain golden parboiled basmati rice. Perfect for grand weddings, banquets, and royal biryanis.", "Primary"),
  riceCatalogueProduct("1121-golden-sella-basmati-rice-primary", "1121 Golden Sella Basmati Rice", "Long grain golden parboiled basmati rice. Highly preferred for catering, celebrations, and restaurant biryani.", "Primary"),
  riceCatalogueProduct("pr-11-14-golden-sella-rice-primary", "PR 11/14 Golden Sella Rice", "Medium grain golden parboiled rice. Suitable for bulk cooking and everyday consumption.", "Primary"),
  riceCatalogueProduct("pr-11-14-white-sella-rice-extended", "PR 11/14 White Sella Rice", "Medium grain white parboiled rice. Ideal for puffed rice (murmurra), farsan, and daily meals.", "Extended"),
  riceCatalogueProduct("pr-11-14-steam-rice-extended", "PR 11/14 Steam Rice", "Medium grain steamed rice. Perfect for daily cooking, pulao, and idli-dosa batter.", "Extended"),
  riceCatalogueProduct("1121-steam-basmati-rice-extended", "1121 Steam Basmati Rice", "Long grain premium steamed basmati rice. Excellent for biryani, pulao, and jeera rice.", "Extended"),
  riceCatalogueProduct("1121-white-sella-basmati-rice-extended", "1121 White Sella Basmati Rice", "Long grain white parboiled basmati rice. Best for royal biryanis and special feasts.", "Extended"),
  riceCatalogueProduct("fr-64-parboiled-rice-extended", "FR-64 Parboiled Rice", "Short grain parboiled rice. Best choice for south Indian dishes like idli, dosa, and uttapam.", "Extended"),
  riceCatalogueProduct("1509-white-sella-basmati-rice-extended", "1509 White Sella Basmati Rice", "Extra-long grain white parboiled basmati rice. Ideal for premium long-grain rice dishes and royal events.", "Extended"),
  riceCatalogueProduct("1509-steam-basmati-rice-extended", "1509 Steam Basmati Rice", "Extra-long grain steamed basmati rice. Superior quality for long rice dishes and flavourful pulao.", "Extended"),
  riceCatalogueProduct("1509-golden-sella-basmati-rice-extended", "1509 Golden Sella Basmati Rice", "Extra-long grain golden parboiled basmati rice. Perfect for grand weddings, banquets, and royal biryanis.", "Extended"),
  riceCatalogueProduct("1121-golden-sella-basmati-rice-extended", "1121 Golden Sella Basmati Rice", "Long grain golden parboiled basmati rice. Highly preferred for catering, celebrations, and restaurant biryani.", "Extended"),
  riceCatalogueProduct("pr-11-14-golden-sella-rice-extended", "PR 11/14 Golden Sella Rice", "Medium grain golden parboiled rice. Suitable for bulk cooking and everyday consumption.", "Extended"),
  {
    slug: "turmeric", name: "Organic Turmeric Powder", names: names("सेंद्रिय हळद पावडर", "जैविक हल्दी पाउडर"), categoryId: "spices",
    description: "Golden-bright, certified organic turmeric from Kolhapur's finest farms. Over 25% curcumin content. Available in 1 kg to 50 kg bulk configurations.",
    image: "/turmeric.png", bgColor: "rgb(245, 245, 240)", tags: ["organic-certified", "export-grade", "bulk-available"], searchAliases: ["turmeric", "haldi", "h̄alaḍa", "हळद", "हल्दी"],
    details: {
      tagline: "Golden-bright, certified organic turmeric",
      features: ["Over 25% curcumin content, premium quality guaranteed", "Certified organic, no pesticides or synthetic additives", "Sun-dried and stone-ground to preserve natural oils", "Available in 1 kg to 1000 kg configurations", "Full export documentation provided"],
      specs: [{ label: "Origin", value: "Kolhapur, Maharashtra, India" }, { label: "Form", value: "Powder / Whole / Finger" }, { label: "Curcumin Content", value: "≥ 3.5% (min)" }, { label: "Moisture", value: "≤ 10%" }, { label: "Colour Value", value: "≥ 500 ASTA" }, { label: "Shelf Life", value: "24 months" }, { label: "Certification", value: "FSSAI, ISO 22000, USDA Organic" }],
      packaging: [{ size: "1 kg", desc: "Retail / Sample" }, { size: "5 kg", desc: "Small Bulk" }, { size: "25 kg", desc: "Commercial" }, { size: "50 kg", desc: "Wholesale" }],
    },
  },
  {
    slug: "black-pepper", name: "Black Pepper", names: names("काळी मिरी", "काली मिर्च"), categoryId: "spices",
    description: "Bold, pungent black pepper, the king of spices. Sun-dried to lock in natural oils and sharp heat. Export-grade, FSSAI certified, full documentation.",
    image: "/black-pepper.png", bgColor: "rgb(240, 245, 240)", tags: ["sun-dried", "export-grade", "bulk-available"], searchAliases: ["black pepper", "kali mirch", "काळी मिरी", "काली मिर्च"],
    details: {
      tagline: "The King of Spices, bold and pungent",
      features: ["5–7% piperine content for superior pungency", "Machine-cleaned, graded peppercorns", "Available whole, cracked, or ground", "Available in 1 kg to 500 kg configurations", "Phytosanitary certificate provided"],
      specs: [{ label: "Origin", value: "Kerala & Karnataka, India" }, { label: "Form", value: "Whole / Ground / Cracked" }, { label: "Piperine Content", value: "≥ 5%" }, { label: "Moisture", value: "≤ 12%" }, { label: "Bulk Density", value: "500–600 g/L" }, { label: "Shelf Life", value: "24 months" }, { label: "Certification", value: "FSSAI, Spices Board India" }],
      packaging: [{ size: "1 kg", desc: "Retail / Sample" }, { size: "5 kg", desc: "Small Bulk" }, { size: "25 kg", desc: "Commercial" }, { size: "50 kg", desc: "Wholesale" }],
    },
  },
  {
    slug: "red-chilli", name: "Chili Powder", names: names("लाल तिखट", "लाल मिर्च पाउडर"), categoryId: "spices",
    description: "Bold and spicy red chili that brings vibrant color and rich heat to any recipe. Available as whole dried, flakes, or finely ground powder.",
    image: "/red-chilli.png", bgColor: "rgb(250, 242, 240)", tags: ["sun-dried", "export-grade", "bulk-available"], searchAliases: ["chili", "chilli", "lal mirch", "लाल तिखट", "लाल मिर्च"],
    details: {
      tagline: "Bold, fiery red chili, whole, flakes, or powder",
      features: ["High ASTA color value, deep red, vibrant appearance", "Available whole, flakes, or powder", "Low moisture content for extended shelf life", "Available in 1 kg to 500 kg configurations", "Phytosanitary certificate provided"],
      specs: [{ label: "Origin", value: "Maharashtra & Andhra Pradesh, India" }, { label: "Form", value: "Whole / Flakes / Powder" }, { label: "ASTA Color", value: "≥ 80" }, { label: "Moisture", value: "≤ 11%" }, { label: "Capsaicin", value: "0.1% – 0.3%" }, { label: "Shelf Life", value: "24 months" }, { label: "Certification", value: "FSSAI, APEDA Certified" }],
      packaging: [{ size: "1 kg", desc: "Retail / Sample" }, { size: "5 kg", desc: "Small Bulk" }, { size: "25 kg", desc: "Commercial" }, { size: "50 kg", desc: "Wholesale" }],
    },
  },
  { slug: "dry-ginger", name: "Dry Ginger", names: names("सुंठ", "सूखी अदरक"), categoryId: "spices", description: "High quality dried ginger with a strong aroma and spicy flavor, naturally supporting immunity and digestion. Available whole, split, or powdered.", image: "/dry-ginger.png", bgColor: "rgb(245, 245, 240)", tags: ["sun-dried", "export-grade"], searchAliases: ["ginger", "sonth", "सुंठ", "सूखी अदरक"] },
  { slug: "cumin", name: "Cumin Seeds", names: names("जिरे", "जीरा"), categoryId: "seeds", description: "Warm, earthy cumin with high essential oil content. Cleaned and machine sorted for maximum purity. Trusted by spice importers across the Gulf and Europe.", image: "/cumin.png", bgColor: "rgb(240, 245, 240)", tags: ["machine-sorted", "export-grade", "bulk-available"], searchAliases: ["cumin", "jeera", "जिरे", "जीरा"] },
  { slug: "coriander", name: "Coriander Seeds", names: names("धणे", "धनिया बीज"), categoryId: "seeds", description: "Mild, citrusy coriander seeds from Rajasthan and Maharashtra farms. Machine cleaned, split-free, and packed for long-haul export.", image: "/coriander.png", bgColor: "rgb(245, 245, 240)", tags: ["machine-cleaned", "export-grade"], searchAliases: ["coriander", "dhania", "धणे", "धनिया"] },
  { slug: "fenugreek", name: "Fenugreek Seeds", names: names("मेथी दाणे", "मेथी दाना"), categoryId: "seeds", description: "Aromatic, slightly bitter fenugreek seeds rich in dietary fibre. Widely used in food, nutraceutical, and cosmetic industries globally.", image: "/fenugreek.png", bgColor: "rgb(240, 245, 240)", tags: ["machine-cleaned", "export-grade"], searchAliases: ["fenugreek", "methi", "मेथी"] },
  { slug: "fennel", name: "Fennel Seeds", names: names("बडीशेप", "सौंफ"), categoryId: "seeds", description: "Fragrant fennel with a sweet, mild flavor, carefully processed for dependable food and export applications.", image: "/fennel.png", bgColor: "rgb(245, 245, 240)", tags: ["machine-cleaned", "export-grade"], searchAliases: ["fennel", "saunf", "बडीशेप", "सौंफ"] },
  { slug: "sesame", name: "Sesame Seeds", names: names("तीळ", "तिल"), categoryId: "seeds", description: "Classic premium sesame seeds prized for their smooth flavor and rich oil content, suitable for culinary and traditional sweet preparations.", image: "/sesame.png", bgColor: "rgb(240, 245, 240)", tags: ["machine-sorted", "export-grade"], searchAliases: ["sesame", "til", "तीळ", "तिल"] },
  { slug: "mint", name: "Mint Leaves", names: names("पुदिन्याची पाने", "पुदीना पत्ते"), categoryId: "herbs", description: "Aromatic mint leaves with a sweet, refreshing flavor, naturally dried for reliable food and wellness applications.", image: "/mint.png", bgColor: "rgb(240, 245, 240)", tags: ["shade-dried", "export-grade"], searchAliases: ["mint", "pudina", "पुदिना", "पुदीना"] },
  { slug: "basil", name: "Basil Leaves", names: names("तुळशीची पाने", "तुलसी के पत्ते"), categoryId: "herbs", description: "Aromatic basil leaves, carefully dried and selected for health, food, and herbal-product applications.", image: "/basil.png", bgColor: "rgb(245, 245, 240)", tags: ["hand-harvested", "organic-certified"], searchAliases: ["basil", "tulsi", "तुळस", "तुलसी"] },
  { slug: "moringa", name: "Moringa Leaves", names: names("शेवग्याची पाने", "सहजन के पत्ते"), categoryId: "herbs", description: "Nutrient-rich dried moringa leaves, selected for food, nutraceutical, and wellness applications.", image: "/moringa.png", bgColor: "rgb(245, 245, 240)", tags: ["superfood", "organic-certified"], searchAliases: ["moringa", "drumstick leaves", "शेवगा", "सहजन"] },
  { slug: "curry-leaves", name: "Curry Leaves", names: names("कढीपत्त्याची पाने", "करी पत्ते"), categoryId: "herbs", description: "Highly aromatic curry leaves, dried to preserve their traditional culinary character and natural freshness.", image: "/curry-leaves.png", bgColor: "rgb(240, 245, 240)", tags: ["shade-dried", "export-grade"], searchAliases: ["curry leaves", "kadi patta", "कढीपत्ता", "करी पत्ता"] },
  {
    slug: "cardamom", name: "Cardamom", names: names("वेलची", "इलायची"), categoryId: "spices",
    description: "Premium green cardamom pods, carefully selected for their floral aroma, rich flavor, and export quality.",
    image: "/cardamom.png", bgColor: "rgb(245, 248, 245)", tags: ["hand-harvested", "export-grade", "bulk-available"], searchAliases: ["cardamom", "elaichi", "वेलची", "इलायची"],
    details: {
      tagline: "Hand-picked green cardamom pods",
      features: ["Intense floral aroma, harvested at peak maturity", "Bold green color, naturally sun-dried", "Sizes 6mm–8mm+ available", "Available in 1 kg to 100 kg configurations", "Full export documentation"],
      specs: [{ label: "Origin", value: "Kerala & Karnataka, India" }, { label: "Form", value: "Whole Pods / Seeds" }, { label: "Size", value: "6mm – 8mm+" }, { label: "Moisture", value: "≤ 12%" }, { label: "Volatile Oil", value: "≥ 4%" }, { label: "Shelf Life", value: "18 months" }, { label: "Certification", value: "FSSAI, Spices Board India" }],
      packaging: [{ size: "500 g", desc: "Retail / Sample" }, { size: "1 kg", desc: "Small Pack" }, { size: "10 kg", desc: "Commercial" }, { size: "25 kg", desc: "Wholesale" }],
    },
  },
  { slug: "wheat", name: "Wheat", names: names("गहू", "गेहूं"), categoryId: "grains", description: "Quality wheat grains selected for consistent texture, cleanliness, and dependable bulk supply.", image: "/wheat.png", bgColor: "rgb(245, 245, 240)", tags: ["export-grade", "bulk-available"], searchAliases: ["wheat", "gehu", "गहू", "गेहूं"] },
];

export const featuredProductSlugs = ["rice", "turmeric", "red-chilli", "cumin"] as const;
export const categoryIds: CategoryId[] = ["spices", "seeds", "herbs"];

const riceLabels: Record<LangCode, string> = {
  en: "Rice", mr: "तांदूळ", hi: "चावल", ar: "أرز", es: "Arroz", fr: "Riz",
  de: "Reis", nl: "Rijst", ru: "Рис", zh: "大米", ja: "米", pt: "Arroz",
  it: "Riso", gu: "ચોખા", ta: "அரிசி",
};

export function getLocalizedRiceLabel(lang: LangCode) {
  return riceLabels[lang];
}

const terms = {
  en: {
    categories: { spices: "Spices", seeds: "Seeds", herbs: "Herbs", grains: "Grains" },
    tags: { "organic-certified": "Organic Certified", "export-grade": "Export Grade", "bulk-available": "Bulk Available", "sun-dried": "Sun Dried", "machine-sorted": "Machine Sorted", "machine-cleaned": "Machine Cleaned", "shade-dried": "Shade Dried", "hand-harvested": "Hand-Harvested", superfood: "Superfood", "fssai-approved": "FSSAI Approved" },
    tagline: "Premium quality for global buyers", summary: "Premium {name}, carefully selected and prepared for dependable export quality.",
    features: ["Selected for consistent quality", "Available for bulk sourcing", "Export documentation available on request"],
    specs: { origin: "Origin", form: "Product", quality: "Quality", shelfLife: "Shelf Life", country: "India", onRequest: "Available on request" },
    packaging: ["Retail / Sample", "Small Bulk", "Commercial", "Wholesale"],
  },
  mr: {
    categories: { spices: "मसाले", seeds: "बियाणे", herbs: "औषधी वनस्पती", grains: "धान्य" },
    tags: { "organic-certified": "सेंद्रिय प्रमाणित", "export-grade": "निर्यात दर्जा", "bulk-available": "मोठ्या प्रमाणात उपलब्ध", "sun-dried": "सूर्यप्रकाशात वाळवलेले", "machine-sorted": "यंत्राने वर्गीकृत", "machine-cleaned": "यंत्राने स्वच्छ केलेले", "shade-dried": "सावलीत वाळवलेले", "hand-harvested": "हाताने काढलेले", superfood: "सुपरफूड", "fssai-approved": "FSSAI मान्यताप्राप्त" },
    tagline: "जागतिक खरेदीदारांसाठी उत्तम दर्जा", summary: "उत्तम दर्जाचे {name}, विश्वासार्ह निर्यात गुणवत्तेसाठी काळजीपूर्वक निवडलेले आणि तयार केलेले.",
    features: ["सातत्यपूर्ण गुणवत्तेसाठी निवडलेले", "मोठ्या प्रमाणात उपलब्ध", "विनंतीनुसार निर्यात कागदपत्रे उपलब्ध"],
    specs: { origin: "उत्पत्ती", form: "उत्पादन", quality: "दर्जा", shelfLife: "शेल्फ लाइफ", country: "भारत", onRequest: "विनंतीनुसार उपलब्ध" },
    packaging: ["किरकोळ / नमुना", "लहान प्रमाण", "व्यावसायिक", "घाऊक"],
  },
  hi: {
    categories: { spices: "मसाले", seeds: "बीज", herbs: "जड़ी-बूटियाँ", grains: "अनाज" },
    tags: { "organic-certified": "जैविक प्रमाणित", "export-grade": "निर्यात ग्रेड", "bulk-available": "थोक में उपलब्ध", "sun-dried": "धूप में सुखाया", "machine-sorted": "मशीन से छांटा", "machine-cleaned": "मशीन से साफ किया", "shade-dried": "छाया में सुखाया", "hand-harvested": "हाथ से चुना", superfood: "सुपरफूड", "fssai-approved": "FSSAI अनुमोदित" },
    tagline: "वैश्विक खरीदारों के लिए प्रीमियम गुणवत्ता", summary: "प्रीमियम {name}, भरोसेमंद निर्यात गुणवत्ता के लिए सावधानी से चुना और तैयार किया गया।",
    features: ["एकसमान गुणवत्ता के लिए चयनित", "थोक आपूर्ति के लिए उपलब्ध", "अनुरोध पर निर्यात दस्तावेज उपलब्ध"],
    specs: { origin: "मूल स्थान", form: "उत्पाद", quality: "गुणवत्ता", shelfLife: "शेल्फ लाइफ", country: "भारत", onRequest: "अनुरोध पर उपलब्ध" },
    packaging: ["खुदरा / नमूना", "छोटा थोक", "वाणिज्यिक", "थोक विक्रय"],
  },
  ar: {
    categories: { spices: "توابل", seeds: "بذور", herbs: "أعشاب", grains: "حبوب" },
    tags: { "organic-certified": "عضوي معتمد", "export-grade": "درجة تصدير", "bulk-available": "متاح بالجملة", "sun-dried": "مجفف بالشمس", "machine-sorted": "مفروز آليًا", "machine-cleaned": "منظف آليًا", "shade-dried": "مجفف في الظل", "hand-harvested": "محصود يدويًا", superfood: "غذاء فائق", "fssai-approved": "معتمد من FSSAI" },
    tagline: "جودة ممتازة للمشترين حول العالم", summary: "{name} ممتاز، مختار ومجهز بعناية لجودة تصدير موثوقة.", features: ["مختار لجودة ثابتة", "متاح للتوريد بالجملة", "وثائق التصدير متاحة عند الطلب"],
    specs: { origin: "المنشأ", form: "المنتج", quality: "الجودة", shelfLife: "مدة الصلاحية", country: "الهند", onRequest: "متاح عند الطلب" }, packaging: ["تجزئة / عينة", "جملة صغيرة", "تجاري", "جملة"],
  },
  es: {
    categories: { spices: "Especias", seeds: "Semillas", herbs: "Hierbas", grains: "Granos" },
    tags: { "organic-certified": "Orgánico certificado", "export-grade": "Calidad de exportación", "bulk-available": "Disponible a granel", "sun-dried": "Secado al sol", "machine-sorted": "Clasificado a máquina", "machine-cleaned": "Limpieza mecánica", "shade-dried": "Secado a la sombra", "hand-harvested": "Cosechado a mano", superfood: "Superalimento", "fssai-approved": "Aprobado por FSSAI" },
    tagline: "Calidad premium para compradores globales", summary: "{name} premium, seleccionado y preparado cuidadosamente para una calidad de exportación fiable.", features: ["Seleccionado por su calidad constante", "Disponible para compras a granel", "Documentación de exportación disponible bajo solicitud"],
    specs: { origin: "Origen", form: "Producto", quality: "Calidad", shelfLife: "Vida útil", country: "India", onRequest: "Disponible bajo solicitud" }, packaging: ["Venta minorista / muestra", "Pequeño volumen", "Comercial", "Mayorista"],
  },
  fr: {
    categories: { spices: "Épices", seeds: "Graines", herbs: "Herbes", grains: "Céréales" },
    tags: { "organic-certified": "Bio certifié", "export-grade": "Qualité export", "bulk-available": "Disponible en vrac", "sun-dried": "Séché au soleil", "machine-sorted": "Trié mécaniquement", "machine-cleaned": "Nettoyé mécaniquement", "shade-dried": "Séché à l'ombre", "hand-harvested": "Récolté à la main", superfood: "Superaliment", "fssai-approved": "Approuvé par la FSSAI" },
    tagline: "Qualité premium pour les acheteurs du monde entier", summary: "{name} premium, soigneusement sélectionné et préparé pour une qualité export fiable.", features: ["Sélectionné pour une qualité constante", "Disponible pour l'approvisionnement en vrac", "Documents d'exportation disponibles sur demande"],
    specs: { origin: "Origine", form: "Produit", quality: "Qualité", shelfLife: "Durée de conservation", country: "Inde", onRequest: "Disponible sur demande" }, packaging: ["Détail / échantillon", "Petit vrac", "Commercial", "Grossiste"],
  },
  de: {
    categories: { spices: "Gewürze", seeds: "Samen", herbs: "Kräuter", grains: "Getreide" },
    tags: { "organic-certified": "Bio-zertifiziert", "export-grade": "Exportqualität", "bulk-available": "Als Großmenge verfügbar", "sun-dried": "Sonnengetrocknet", "machine-sorted": "Maschinell sortiert", "machine-cleaned": "Maschinell gereinigt", "shade-dried": "Schattentrocknung", "hand-harvested": "Handgeerntet", superfood: "Superfood", "fssai-approved": "FSSAI-zugelassen" },
    tagline: "Premiumqualität für Käufer weltweit", summary: "Premium-{name}, sorgfältig ausgewählt und vorbereitet für zuverlässige Exportqualität.", features: ["Für gleichbleibende Qualität ausgewählt", "Für Großmengen verfügbar", "Exportdokumente auf Anfrage erhältlich"],
    specs: { origin: "Herkunft", form: "Produkt", quality: "Qualität", shelfLife: "Haltbarkeit", country: "Indien", onRequest: "Auf Anfrage erhältlich" }, packaging: ["Einzelhandel / Muster", "Kleine Menge", "Gewerblich", "Großhandel"],
  },
  nl: {
    categories: { spices: "Specerijen", seeds: "Zaden", herbs: "Kruiden", grains: "Granen" },
    tags: { "organic-certified": "Biologisch gecertificeerd", "export-grade": "Exportkwaliteit", "bulk-available": "In bulk beschikbaar", "sun-dried": "Zongedroogd", "machine-sorted": "Machinaal gesorteerd", "machine-cleaned": "Machinaal gereinigd", "shade-dried": "In de schaduw gedroogd", "hand-harvested": "Handgeoogst", superfood: "Superfood", "fssai-approved": "FSSAI-goedgekeurd" },
    tagline: "Premiumkwaliteit voor wereldwijde inkopers", summary: "Premium {name}, zorgvuldig geselecteerd en voorbereid voor betrouwbare exportkwaliteit.", features: ["Geselecteerd voor constante kwaliteit", "Beschikbaar voor bulklevering", "Exportdocumentatie op aanvraag beschikbaar"],
    specs: { origin: "Herkomst", form: "Product", quality: "Kwaliteit", shelfLife: "Houdbaarheid", country: "India", onRequest: "Op aanvraag beschikbaar" }, packaging: ["Retail / monster", "Kleine bulk", "Commercieel", "Groothandel"],
  },
  ru: {
    categories: { spices: "Специи", seeds: "Семена", herbs: "Травы", grains: "Зерновые" },
    tags: { "organic-certified": "Органически сертифицировано", "export-grade": "Экспортное качество", "bulk-available": "Доступно оптом", "sun-dried": "Сушёное на солнце", "machine-sorted": "Машинная сортировка", "machine-cleaned": "Машинная очистка", "shade-dried": "Сушёное в тени", "hand-harvested": "Ручной сбор", superfood: "Суперфуд", "fssai-approved": "Одобрено FSSAI" },
    tagline: "Премиальное качество для покупателей по всему миру", summary: "Премиальный {name}, тщательно отобранный и подготовленный для надёжного экспортного качества.", features: ["Отобрано для стабильного качества", "Доступно для оптовых поставок", "Экспортные документы предоставляются по запросу"],
    specs: { origin: "Происхождение", form: "Продукт", quality: "Качество", shelfLife: "Срок хранения", country: "Индия", onRequest: "Доступно по запросу" }, packaging: ["Розница / образец", "Мелкий опт", "Коммерческая упаковка", "Опт"],
  },
  zh: {
    categories: { spices: "香料", seeds: "种子", herbs: "草本", grains: "谷物" },
    tags: { "organic-certified": "有机认证", "export-grade": "出口级", "bulk-available": "可批量供应", "sun-dried": "日晒干燥", "machine-sorted": "机器分选", "machine-cleaned": "机器清洁", "shade-dried": "阴干", "hand-harvested": "手工采收", superfood: "超级食品", "fssai-approved": "FSSAI 认证" },
    tagline: "面向全球买家的优质品质", summary: "优质{name}，经过精心挑选和处理，保证可靠的出口品质。", features: ["为稳定品质精心挑选", "可批量采购", "可按要求提供出口文件"],
    specs: { origin: "原产地", form: "产品", quality: "品质", shelfLife: "保质期", country: "印度", onRequest: "可按要求提供" }, packaging: ["零售 / 样品", "小批量", "商业包装", "批发"],
  },
  ja: {
    categories: { spices: "スパイス", seeds: "種子", herbs: "ハーブ", grains: "穀物" },
    tags: { "organic-certified": "有機認証", "export-grade": "輸出品質", "bulk-available": "大量供給可能", "sun-dried": "天日乾燥", "machine-sorted": "機械選別", "machine-cleaned": "機械洗浄", "shade-dried": "陰干し", "hand-harvested": "手摘み", superfood: "スーパーフード", "fssai-approved": "FSSAI承認" },
    tagline: "世界のバイヤーのためのプレミアム品質", summary: "プレミアム{name}。信頼できる輸出品質のため、丁寧に選別・加工しています。", features: ["安定した品質のために選別", "大量調達に対応", "輸出書類はご要望に応じて提供"],
    specs: { origin: "原産地", form: "製品", quality: "品質", shelfLife: "賞味期限", country: "インド", onRequest: "ご要望に応じて提供" }, packaging: ["小売 / サンプル", "小ロット", "業務用", "卸売"],
  },
  pt: {
    categories: { spices: "Especiarias", seeds: "Sementes", herbs: "Ervas", grains: "Grãos" },
    tags: { "organic-certified": "Orgânico certificado", "export-grade": "Qualidade de exportação", "bulk-available": "Disponível a granel", "sun-dried": "Seco ao sol", "machine-sorted": "Selecionado por máquina", "machine-cleaned": "Limpo por máquina", "shade-dried": "Seco à sombra", "hand-harvested": "Colhido à mão", superfood: "Superalimento", "fssai-approved": "Aprovado pela FSSAI" },
    tagline: "Qualidade premium para compradores globais", summary: "{name} premium, cuidadosamente selecionado e preparado para uma qualidade de exportação confiável.", features: ["Selecionado para qualidade consistente", "Disponível para compra a granel", "Documentação de exportação disponível mediante solicitação"],
    specs: { origin: "Origem", form: "Produto", quality: "Qualidade", shelfLife: "Validade", country: "Índia", onRequest: "Disponível mediante solicitação" }, packaging: ["Varejo / amostra", "Pequeno volume", "Comercial", "Atacado"],
  },
  it: {
    categories: { spices: "Spezie", seeds: "Semi", herbs: "Erbe", grains: "Cereali" },
    tags: { "organic-certified": "Biologico certificato", "export-grade": "Qualità da esportazione", "bulk-available": "Disponibile all'ingrosso", "sun-dried": "Essiccato al sole", "machine-sorted": "Selezionato a macchina", "machine-cleaned": "Pulito a macchina", "shade-dried": "Essiccato all'ombra", "hand-harvested": "Raccolto a mano", superfood: "Superfood", "fssai-approved": "Approvato FSSAI" },
    tagline: "Qualità premium per acquirenti di tutto il mondo", summary: "{name} premium, selezionato e preparato con cura per una qualità di esportazione affidabile.", features: ["Selezionato per una qualità costante", "Disponibile per forniture all'ingrosso", "Documentazione di esportazione disponibile su richiesta"],
    specs: { origin: "Origine", form: "Prodotto", quality: "Qualità", shelfLife: "Durata di conservazione", country: "India", onRequest: "Disponibile su richiesta" }, packaging: ["Vendita al dettaglio / campione", "Piccolo quantitativo", "Commerciale", "Ingrosso"],
  },
  gu: {
    categories: { spices: "મસાલા", seeds: "બીજ", herbs: "જડીબુટ્ટીઓ", grains: "અનાજ" },
    tags: { "organic-certified": "ઓર્ગેનિક પ્રમાણિત", "export-grade": "નિકાસ ગ્રેડ", "bulk-available": "જથ્થાબંધ ઉપલબ્ધ", "sun-dried": "સૂર્યમાં સૂકવેલ", "machine-sorted": "મશીનથી છાંટેલ", "machine-cleaned": "મશીનથી સાફ કરેલ", "shade-dried": "છાયામાં સૂકવેલ", "hand-harvested": "હાથે લણેલ", superfood: "સુપરફૂડ", "fssai-approved": "FSSAI માન્ય" },
    tagline: "વિશ્વભરના ખરીદદારો માટે પ્રીમિયમ ગુણવત્તા", summary: "પ્રીમિયમ {name}, વિશ્વસનીય નિકાસ ગુણવત્તા માટે કાળજીપૂર્વક પસંદ કરેલ અને તૈયાર કરેલ.", features: ["સતત ગુણવત્તા માટે પસંદ કરેલ", "જથ્થાબંધ સોર્સિંગ માટે ઉપલબ્ધ", "વિનંતી પર નિકાસ દસ્તાવેજો ઉપલબ્ધ"],
    specs: { origin: "મૂળ", form: "ઉત્પાદન", quality: "ગુણવત્તા", shelfLife: "શેલ્ફ લાઇફ", country: "ભારત", onRequest: "વિનંતી પર ઉપલબ્ધ" }, packaging: ["છૂટક / નમૂનો", "નાનો જથ્થો", "વ્યાવસાયિક", "જથ્થાબંધ"],
  },
  ta: {
    categories: { spices: "மசாலாக்கள்", seeds: "விதைகள்", herbs: "மூலிகைகள்", grains: "தானியங்கள்" },
    tags: { "organic-certified": "இயற்கைச் சான்றளிப்பு", "export-grade": "ஏற்றுமதி தரம்", "bulk-available": "மொத்தமாக கிடைக்கும்", "sun-dried": "வெயிலில் உலர்த்தியது", "machine-sorted": "இயந்திரத் தேர்வு", "machine-cleaned": "இயந்திரச் சுத்தம்", "shade-dried": "நிழலில் உலர்த்தியது", "hand-harvested": "கையால் அறுவடை செய்தது", superfood: "சூப்பர் உணவு", "fssai-approved": "FSSAI அங்கீகரித்தது" },
    tagline: "உலகளாவிய வாங்குபவர்களுக்கான உயர்தர தரம்", summary: "உயர்தர {name}, நம்பகமான ஏற்றுமதி தரத்திற்காக கவனமாகத் தேர்ந்தெடுத்து தயாரிக்கப்பட்டது.", features: ["சீரான தரத்திற்காக தேர்ந்தெடுக்கப்பட்டது", "மொத்த கொள்முதலுக்கு கிடைக்கும்", "கோரிக்கையின் பேரில் ஏற்றுமதி ஆவணங்கள் கிடைக்கும்"],
    specs: { origin: "தோற்றம்", form: "தயாரிப்பு", quality: "தரம்", shelfLife: "அடுக்கு ஆயுள்", country: "இந்தியா", onRequest: "கோரிக்கையின் பேரில் கிடைக்கும்" }, packaging: ["சில்லறை / மாதிரி", "சிறிய மொத்தம்", "வணிகம்", "மொத்த விற்பனை"],
  },
} as const;

function productTerms(lang: LangCode) {
  return terms[lang as keyof typeof terms] ?? terms.en;
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getLocalizedCategory(categoryId: CategoryId, lang: LangCode) {
  return productTerms(lang).categories[categoryId];
}

export function getLocalizedProduct(product: Product, lang: LangCode): LocalizedProduct {
  const localeTerms = productTerms(lang);
  const name = localizedNames[lang]?.[product.slug] ?? product.names[lang] ?? product.name;
  const useEnglishDetail = lang === "en" && product.details;
  const genericSpecs: ProductSpec[] = [
    { label: localeTerms.specs.origin, value: localeTerms.specs.country },
    { label: localeTerms.specs.form, value: name },
    { label: localeTerms.specs.quality, value: localeTerms.tags["export-grade"] },
    { label: localeTerms.specs.shelfLife, value: localeTerms.specs.onRequest },
  ];

  return {
    ...product,
    name,
    category: localeTerms.categories[product.categoryId],
    description: lang === "en" ? product.description : localeTerms.summary.replace("{name}", name),
    tags: product.tags.map((tag) => localeTerms.tags[tag]),
    tagline: useEnglishDetail ? product.details!.tagline : localeTerms.tagline,
    features: useEnglishDetail ? product.details!.features : [...localeTerms.features],
    specs: useEnglishDetail ? product.details!.specs : genericSpecs,
    packaging: (useEnglishDetail ? product.details!.packaging.map((pack) => pack.desc) : localeTerms.packaging).map((desc, index) => ({ size: ["1 kg", "5 kg", "25 kg", "50 kg"][index], desc })),
    searchTerms: [product.name, name, ...product.searchAliases].map((term) => term.toLowerCase()),
  };
}
