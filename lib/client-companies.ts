import type { LangCode } from "./translations";

// Company profiles link to the official sources for the brief descriptions.
// Client relationships are supplied by the site owner, not inferred from these sources.
export const clientCompanies = [
  { name: "LuLu", src: "/company images/Lulu.jpeg", url: "https://www.luluretail.com/" },
  { name: "McCormick", src: "/company images/mccormic.jpeg", url: "https://www.mccormickcorporation.com/company" },
  { name: "SunRice", src: "/company images/sunrice.jpeg", url: "https://www.sunrice.com.au/" },
  { name: "TRS", src: "/company images/trs.jpeg", url: "https://www.trsfood.com/" },
] as const;

type ClientTrustCopy = { title: string; descriptions: [string, string, string, string] };

export const clientTrustCopy: Record<LangCode, ClientTrustCopy> = {
  en: {
    title: "Companies we work with",
    descriptions: ["A retail group operating hypermarkets and food retail stores.", "A global food company specialising in spices, seasonings and flavour.", "An Australian brand offering rice and rice-based foods.", "A food brand bringing South Asian spices, pulses and flours to European kitchens."],
  },
  mr: {
    title: "आमच्यासोबत काम करणाऱ्या कंपन्या",
    descriptions: ["हायपरमार्केट आणि खाद्यपदार्थांची किरकोळ विक्री करणारा समूह.", "मसाले, चववर्धक मिश्रणे आणि स्वाद यांमध्ये विशेष प्राविण्य असलेली जागतिक खाद्य कंपनी.", "तांदूळ आणि तांदळापासून बनवलेले खाद्यपदार्थ देणारा ऑस्ट्रेलियन ब्रँड.", "दक्षिण आशियाई मसाले, डाळी आणि पीठ युरोपातील स्वयंपाकघरांपर्यंत पोहोचवणारा खाद्य ब्रँड."],
  },
  hi: {
    title: "हमारे साथ काम करने वाली कंपनियाँ",
    descriptions: ["हाइपरमार्केट और खाद्य खुदरा स्टोर संचालित करने वाला समूह।", "मसालों, सीज़निंग और स्वाद में विशेषज्ञता रखने वाली वैश्विक खाद्य कंपनी।", "चावल और चावल से बने खाद्य उत्पाद पेश करने वाला ऑस्ट्रेलियाई ब्रांड।", "दक्षिण एशियाई मसाले, दालें और आटा यूरोपीय रसोई तक पहुँचाने वाला खाद्य ब्रांड।"],
  },
  ar: {
    title: "الشركات التي نعمل معها",
    descriptions: ["مجموعة تجزئة تدير متاجر هايبرماركت ومتاجر لبيع المواد الغذائية.", "شركة أغذية عالمية متخصصة في التوابل وخلطات التتبيل والنكهات.", "علامة تجارية أسترالية تقدم الأرز والأطعمة المصنوعة منه.", "علامة غذائية تقدم توابل جنوب آسيا وبقولياتها ودقيقها للمطابخ الأوروبية."],
  },
  es: {
    title: "Empresas con las que trabajamos",
    descriptions: ["Grupo minorista que opera hipermercados y tiendas de alimentación.", "Empresa alimentaria global especializada en especias, condimentos y sabores.", "Marca australiana de arroz y alimentos elaborados con arroz.", "Marca de alimentos que lleva especias, legumbres y harinas del sur de Asia a las cocinas europeas."],
  },
  fr: {
    title: "Les entreprises avec lesquelles nous travaillons",
    descriptions: ["Groupe de distribution exploitant des hypermarchés et des magasins alimentaires.", "Entreprise alimentaire mondiale spécialisée dans les épices, les assaisonnements et les saveurs.", "Marque australienne de riz et de produits alimentaires à base de riz.", "Marque alimentaire proposant aux cuisines européennes des épices, légumineuses et farines d’Asie du Sud."],
  },
  de: {
    title: "Unternehmen, mit denen wir arbeiten",
    descriptions: ["Einzelhandelsgruppe mit Hypermärkten und Lebensmittelgeschäften.", "Globales Lebensmittelunternehmen für Gewürze, Würzmischungen und Aromen.", "Australische Marke für Reis und Lebensmittel auf Reisbasis.", "Lebensmittelmarke, die südasiatische Gewürze, Hülsenfrüchte und Mehle in europäische Küchen bringt."],
  },
  nl: {
    title: "Bedrijven waarmee we samenwerken",
    descriptions: ["Retailgroep met hypermarkten en levensmiddelenwinkels.", "Wereldwijd voedingsbedrijf gespecialiseerd in specerijen, kruidenmengsels en smaak.", "Australisch merk voor rijst en voedingsmiddelen op basis van rijst.", "Voedingsmerk dat Zuid-Aziatische specerijen, peulvruchten en meel naar Europese keukens brengt."],
  },
  ru: {
    title: "Компании, с которыми мы работаем",
    descriptions: ["Розничная группа, управляющая гипермаркетами и продуктовыми магазинами.", "Международная пищевая компания, специализирующаяся на специях, приправах и ароматах.", "Австралийский бренд риса и продуктов на его основе.", "Продовольственный бренд, поставляющий специи, бобовые и муку из Южной Азии на европейские кухни."],
  },
  zh: {
    title: "与我们合作的企业",
    descriptions: ["经营大型超市和食品零售商店的零售集团。", "专注于香料、调味料和风味的全球食品公司。", "提供大米及米制食品的澳大利亚品牌。", "将南亚香料、豆类和面粉带入欧洲厨房的食品品牌。"],
  },
  ja: {
    title: "お取引先企業",
    descriptions: ["ハイパーマーケットや食品小売店を運営する小売グループ。", "スパイス、調味料、風味を専門とするグローバル食品企業。", "米と米を使った食品を提供するオーストラリアのブランド。", "南アジアのスパイス、豆類、穀粉をヨーロッパの食卓に届ける食品ブランド。"],
  },
  pt: {
    title: "Empresas com que trabalhamos",
    descriptions: ["Grupo de retalho que opera hipermercados e lojas de alimentação.", "Empresa alimentar global especializada em especiarias, temperos e sabores.", "Marca australiana de arroz e alimentos à base de arroz.", "Marca alimentar que leva especiarias, leguminosas e farinhas do sul da Ásia às cozinhas europeias."],
  },
  it: {
    title: "Le aziende con cui lavoriamo",
    descriptions: ["Gruppo della distribuzione che gestisce ipermercati e negozi alimentari.", "Azienda alimentare globale specializzata in spezie, condimenti e aromi.", "Marchio australiano di riso e alimenti a base di riso.", "Marchio alimentare che porta spezie, legumi e farine dell’Asia meridionale nelle cucine europee."],
  },
  gu: {
    title: "અમારી સાથે કામ કરતી કંપનીઓ",
    descriptions: ["હાઇપરમાર્કેટ અને ખાદ્યપદાર્થોની છૂટક દુકાનો ચલાવતું જૂથ.", "મસાલા, સીઝનિંગ અને સ્વાદમાં નિષ્ણાત વૈશ્વિક ખાદ્ય કંપની.", "ચોખા અને ચોખામાંથી બનેલા ખાદ્યપદાર્થો પ્રદાન કરતી ઑસ્ટ્રેલિયન બ્રાન્ડ.", "દક્ષિણ એશિયાના મસાલા, કઠોળ અને લોટ યુરોપના રસોડાં સુધી પહોંચાડતી ખાદ્ય બ્રાન્ડ."],
  },
  ta: {
    title: "எங்களுடன் பணியாற்றும் நிறுவனங்கள்",
    descriptions: ["ஹைப்பர்மார்க்கெட்டுகள் மற்றும் உணவுச் சில்லறை விற்பனைக் கடைகளை நடத்தும் குழுமம்.", "மசாலா, சுவையூட்டிகள் மற்றும் சுவைகளில் நிபுணத்துவம் பெற்ற உலகளாவிய உணவு நிறுவனம்.", "அரிசி மற்றும் அரிசி சார்ந்த உணவுகளை வழங்கும் ஆஸ்திரேலிய பிராண்ட்.", "தெற்காசிய மசாலா, பருப்பு மற்றும் மாவு வகைகளை ஐரோப்பிய சமையலறைகளுக்குக் கொண்டுசெல்லும் உணவு பிராண்ட்."],
  },
};
