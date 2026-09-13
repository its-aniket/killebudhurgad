export type LangCode =
  | "en" | "mr" | "hi" | "ar" | "es" | "fr" | "de"
  | "nl" | "ru" | "zh" | "ja" | "pt" | "it" | "gu" | "ta";

export interface Translations {
  // Navbar
  nav_home: string;
  nav_products: string;
  nav_about: string;
  nav_contact: string;
  nav_get_quote: string;
  nav_search: string;

  // Hero
  hero_headline1: string;
  hero_headline2: string;
  hero_tagline: string;
  hero_subtext: string;
  hero_cta_explore: string;
  hero_cta_contact: string;
  hero_stat_years: string;
  hero_stat_countries: string;
  hero_stat_products: string;
  hero_stat_farmers: string;

  // Featured Products
  fp_section_label: string;
  fp_section_title: string;
  fp_view_all: string;
  fp_featured_label: string;
  fp_view_details: string;
  fp_bulk_inquiry: string;

  // Why Choose Us
  wcu_label: string;
  wcu_title1: string;
  wcu_title2: string;
  wcu_subtext: string;
  wcu_f1_title: string;
  wcu_f1_desc: string;
  wcu_f2_title: string;
  wcu_f2_desc: string;
  wcu_f3_title: string;
  wcu_f3_desc: string;
  wcu_f4_title: string;
  wcu_f4_desc: string;

  // Testimonials
  test_label: string;
  test_title1: string;
  test_title2: string;

  // CTA Section
  cta_label: string;
  cta_title: string;
  cta_subtext: string;
  cta_inquiry: string;
  cta_whatsapp: string;

  // Certifications
  cert_label: string;

  // FAQ
  faq_label: string;
  faq_title: string;
  faq_subtext: string;
  faq_contact_link: string;
  faq_q1: string; faq_a1: string;
  faq_q2: string; faq_a2: string;
  faq_q3: string; faq_a3: string;
  faq_q4: string; faq_a4: string;
  faq_q5: string; faq_a5: string;
  faq_q6: string; faq_a6: string;

  // Footer
  footer_tagline: string;
  footer_company: string;
  footer_products: string;
  footer_support: string;
  footer_get_in_touch: string;
  footer_rights: string;

  // WhatsApp FAB
  fab_label: string;

  // Footer link labels
  footer_about_us: string;
  footer_our_process: string;
  footer_certifications: string;
  footer_careers: string;
  footer_spices: string;
  footer_seeds: string;
  footer_herbs: string;
  footer_organic: string;
  footer_contact_us: string;
  footer_bulk_orders: string;
  footer_shipping: string;
  footer_faqs: string;
  footer_privacy: string;
  footer_terms: string;
  footer_cookies: string;

  // Products page
  prod_catalogue_label: string;
  prod_hero_title: string;
  prod_hero_sub: string;
  prod_filter_label: string;
  prod_search_placeholder: string;
  prod_found: string;
  prod_found_plural: string;
  prod_no_results: string;
  prod_no_results_sub: string;
  prod_view_details: string;
  prod_export_grade: string;
  prod_cta_title: string;
  prod_cta_sub: string;
  prod_cta_btn: string;
  prod_cat_all: string;

  // Product detail page
  pd_breadcrumb_home: string;
  pd_breadcrumb_products: string;
  pd_key_features: string;
  pd_specifications: string;
  pd_packaging: string;
  pd_request_quote: string;
  pd_chat_whatsapp: string;
  pd_explore_more: string;
  pd_related: string;

  // About page
  about_story_label: string;
  about_hero_title1: string;
  about_hero_title2: string;
  about_hero_p1: string;
  about_hero_p2: string;
  about_hero_cta_products: string;
  about_hero_cta_contact: string;
  about_stat_years: string;
  about_stat_countries: string;
  about_stat_products: string;
  about_stat_farmers: string;
  about_values_label: string;
  about_values_title: string;
  about_v1_title: string; about_v1_desc: string;
  about_v2_title: string; about_v2_desc: string;
  about_v3_title: string; about_v3_desc: string;
  about_v4_title: string; about_v4_desc: string;
  about_timeline_label: string;
  about_timeline_title: string;
  about_t1_title: string; about_t1_desc: string;
  about_t2_title: string; about_t2_desc: string;
  about_t3_title: string; about_t3_desc: string;
  about_t4_title: string; about_t4_desc: string;
  about_t5_title: string; about_t5_desc: string;
  about_t6_title: string; about_t6_desc: string;
  about_cert_label: string;
  about_cert_title: string;
  about_cert_sub: string;
  about_cta_label: string;
  about_cta_title: string;
  about_cta_sub: string;
  about_cta_quote: string;
  about_cta_browse: string;
  about_farmer_badge: string;
  about_countries_badge: string;

  // Contact page
  contact_reach_label: string;
  contact_hero_title: string;
  contact_hero_sub: string;
  contact_details_label: string;
  contact_details_title: string;
  contact_addr_label: string;
  contact_phone_label: string;
  contact_email_label: string;
  contact_hours_label: string;
  contact_hours_value: string;
  contact_whatsapp_title: string;
  contact_whatsapp_sub: string;
  contact_whatsapp_btn: string;
  contact_form_title: string;
  contact_name: string;
  contact_company: string;
  contact_email: string;
  contact_phone: string;
  contact_country: string;
  contact_inquiry_type: string;
  contact_inquiry_select: string;
  contact_message: string;
  contact_message_placeholder: string;
  contact_send: string;
  contact_sending: string;
  contact_privacy: string;
  contact_success_title: string;
  contact_success_sub: string;
  contact_inq_bulk: string;
  contact_inq_sample: string;
  contact_inq_label: string;
  contact_inq_pricing: string;
  contact_inq_cert: string;
  contact_inq_partner: string;
  contact_inq_other: string;
}

export const languages: { code: LangCode; label: string; nativeName: string; dir?: "rtl" }[] = [
  { code: "en", label: "English",    nativeName: "English" },
  { code: "mr", label: "Marathi",    nativeName: "मराठी" },
  { code: "hi", label: "Hindi",      nativeName: "हिन्दी" },
  { code: "ar", label: "Arabic",     nativeName: "العربية", dir: "rtl" },
  { code: "es", label: "Spanish",    nativeName: "Español" },
  { code: "fr", label: "French",     nativeName: "Français" },
  { code: "de", label: "German",     nativeName: "Deutsch" },
  { code: "nl", label: "Dutch",      nativeName: "Nederlands" },
  { code: "ru", label: "Russian",    nativeName: "Русский" },
  { code: "zh", label: "Mandarin",   nativeName: "中文" },
  { code: "ja", label: "Japanese",   nativeName: "日本語" },
  { code: "pt", label: "Portuguese", nativeName: "Português" },
  { code: "it", label: "Italian",    nativeName: "Italiano" },
  { code: "gu", label: "Gujarati",   nativeName: "ગુજરાતી" },
  { code: "ta", label: "Tamil",      nativeName: "தமிழ்" },
];

// Raw partial translations — non-English langs only need to override what they translate
type PartialTranslations = Partial<Translations>;

const raw: Record<string, PartialTranslations> = {
  en: {
    nav_home: "Home", nav_products: "Products", nav_about: "About", nav_contact: "Contact",
    nav_get_quote: "Get Quote", nav_search: "Search",
    hero_headline1: "Premium", hero_headline2: "Agro Products", hero_tagline: "for the World.",
    hero_subtext: "From the fertile soils of Kolhapur to 30+ countries, the finest spices, grains and organic commodities with zero compromise.",
    hero_cta_explore: "Explore Products", hero_cta_contact: "Contact Us",
    hero_stat_years: "Years in Business", hero_stat_countries: "Countries Served",
    hero_stat_products: "Premium Products", hero_stat_farmers: "Farmer Partners",
    fp_section_label: "Our Range", fp_section_title: "Featured Products",
    fp_view_all: "View All 15 Products", fp_featured_label: "Featured Product",
    fp_view_details: "View Details", fp_bulk_inquiry: "Bulk Inquiry",
    wcu_label: "Why Choose Us", wcu_title1: "The Promise Behind", wcu_title2: "Every Export",
    wcu_subtext: "We don't just ship products — we export the trust, heritage, and natural bounty of Kolhapur's farming communities.",
    wcu_f1_title: "Natural & Sustainable", wcu_f1_desc: "Every product traced to certified organic farms across Maharashtra.",
    wcu_f2_title: "International Standards", wcu_f2_desc: "FSSAI, ISO certified. Tested at every stage from soil to shipment.",
    wcu_f3_title: "Farmer Empowerment", wcu_f3_desc: "Direct partnerships with 500+ smallholder farming families.",
    wcu_f4_title: "Direct Export", wcu_f4_desc: "No intermediaries — competitive pricing for global buyers.",
    test_label: "Client Trust", test_title1: "Words from", test_title2: "Our Partners",
    cta_label: "Ready to Source?", cta_title: "Let's talk about your requirements.",
    cta_subtext: "Whether you're a buyer, distributor, or retailer — we'll find the right product and packaging for your market.",
    cta_inquiry: "Send an Inquiry", cta_whatsapp: "WhatsApp Us",
    cert_label: "Certified & Compliant",
    faq_label: "Got Questions?", faq_title: "Frequently Asked Questions",
    faq_subtext: "Everything you need to know about sourcing, shipping, and working with Kille Bhudargad Agro. Can't find your answer?",
    faq_contact_link: "Contact our team →",
    faq_q1: "What certifications do your products carry?",
    faq_a1: "Our products are certified by FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India, and carry Phytosanitary Certification — making them compliant for both domestic and international markets.",
    faq_q2: "Do you offer bulk and private-label packaging?",
    faq_a2: "Yes. We supply in bulk (loose bags, jumbo sacks) as well as retail-ready private-label packs. Minimum order quantities and packaging formats can be customised to your requirements.",
    faq_q3: "Which countries do you export to?",
    faq_a3: "We export to over 30 countries across Europe, North America, the Middle East, and Southeast Asia. If you don't see your region listed, reach out — we are always expanding our network.",
    faq_q4: "How do I place a bulk order or send an inquiry?",
    faq_a4: "You can use the 'Send an Inquiry' form on our Contact page or reach us directly on WhatsApp at +91 91565 19393. Our team typically responds within one business day.",
    faq_q5: "What is the typical lead time for an order?",
    faq_a5: "Standard lead time is 7–14 business days depending on the product, quantity, and destination. Rush orders may be accommodated — contact us for details.",
    faq_q6: "Are samples available before placing a large order?",
    faq_a6: "Yes, we provide product samples on request. Sample charges and courier costs may apply and are typically adjusted against your first bulk order.",
    footer_tagline: "From Bhudargad's fertile lands to over 30 countries — premium spices, grains, and organic commodities with uncompromising quality.",
    footer_company: "Company", footer_products: "Products", footer_support: "Support",
    footer_get_in_touch: "Get in Touch", footer_rights: "All rights reserved.",
    fab_label: "Chat on WhatsApp",
    footer_about_us: "About Us", footer_our_process: "Our Process", footer_certifications: "Certifications", footer_careers: "Careers",
    footer_spices: "Spices", footer_seeds: "Seeds & Grains", footer_herbs: "Herbs & Leaves", footer_organic: "Organic Range",
    footer_contact_us: "Contact Us", footer_bulk_orders: "Bulk Orders", footer_shipping: "Shipping Info", footer_faqs: "FAQs",
    footer_privacy: "Privacy Policy", footer_terms: "Terms of Service", footer_cookies: "Cookie Policy",
    prod_catalogue_label: "Our Catalogue", prod_hero_title: "Premium Agro Products",
    prod_hero_sub: "Certified organic spices, seeds, and grains sourced from Kolhapur's finest farms and export ready worldwide.",
    prod_filter_label: "Filter", prod_search_placeholder: "Search products…",
    prod_found: "product found", prod_found_plural: "products found",
    prod_no_results: "No products found", prod_no_results_sub: "Try adjusting your search or filter.",
    prod_view_details: "View Details", prod_export_grade: "Export Grade",
    prod_cta_title: "Need a custom product or bulk order?",
    prod_cta_sub: "We work with importers, distributors, and food manufacturers worldwide. Get in touch for custom specifications, private labelling, and volume pricing.",
    prod_cta_btn: "Request a Custom Quote", prod_cat_all: "All",
    pd_breadcrumb_home: "Home", pd_breadcrumb_products: "Products",
    pd_key_features: "Key Features", pd_specifications: "Specifications",
    pd_packaging: "Packaging Options", pd_request_quote: "Request a Quote",
    pd_chat_whatsapp: "Chat on WhatsApp", pd_explore_more: "Explore More", pd_related: "Related Products",
    about_story_label: "Our Story", about_hero_title1: "From Bhudargad's", about_hero_title2: "Farms to the World",
    about_hero_p1: "For over 25 years, Kille Bhudargad Agro Private Limited has been building bridges between the fertile farmlands of Kolhapur, Maharashtra and kitchens and food factories across the globe.",
    about_hero_p2: "We started as a small family operation with a single belief: that the finest agricultural produce should reach global markets with full traceability, fair pricing for farmers, and uncompromising quality. That belief guides every decision we make today.",
    about_hero_cta_products: "See Our Products", about_hero_cta_contact: "Get in Touch",
    about_stat_years: "Years of Excellence", about_stat_countries: "Countries Served",
    about_stat_products: "Export Products", about_stat_farmers: "Farmer Partners",
    about_values_label: "What Drives Us", about_values_title: "Our Core Values",
    about_v1_title: "Purity First", about_v1_desc: "Every product is tested for quality, purity, and safety before leaving our facilities. No compromises.",
    about_v2_title: "Farmer Welfare", about_v2_desc: "We believe thriving farmers produce the best products. Fair pricing and direct partnerships are non-negotiable.",
    about_v3_title: "Global Responsibility", about_v3_desc: "Sustainable farming practices protect the land for future generations while meeting global demand.",
    about_v4_title: "Continuous Improvement", about_v4_desc: "From field to shipment, we constantly refine processes to exceed international standards.",
    about_timeline_label: "Our Journey", about_timeline_title: "25 Years of Growth",
    about_t1_title: "Founded", about_t1_desc: "Kille Bhudargad Agro Private Limited established in Bhudargad, Kolhapur.",
    about_t2_title: "First International Shipment", about_t2_desc: "Expanded product range and completed our first international shipment to the UAE.",
    about_t3_title: "FSSAI & Spices Board Certified", about_t3_desc: "Obtained FSSAI certification and Spices Board of India registration. Entered European markets.",
    about_t4_title: "Organic Certifications", about_t4_desc: "Achieved USDA Organic and EU Organic certifications. Partnered with 200+ smallholder farmers.",
    about_t5_title: "ISO 22000 Certified", about_t5_desc: "ISO 22000 food safety certification. Launched direct-export operations to 25+ countries.",
    about_t6_title: "500+ Farmer Network", about_t6_desc: "500+ farmer partners. Exporting to 30+ countries across Asia, Europe, the Gulf, and the Americas.",
    about_cert_label: "Our Credentials", about_cert_title: "Certified for Global Export",
    about_cert_sub: "Every product we ship meets the highest international food safety and organic standards.",
    about_cta_label: "Work With Us", about_cta_title: "Ready to Source Premium Indian Spices?",
    about_cta_sub: "Connect with our export team to discuss your requirements, request samples, or get a custom quote. We export to 30+ countries with full documentation and compliance support.",
    about_cta_quote: "Get a Quote", about_cta_browse: "Browse Products",
    about_farmer_badge: "Farmer Partners", about_countries_badge: "Countries",
    contact_reach_label: "Reach Out", contact_hero_title: "Let's Work Together",
    contact_hero_sub: "Whether you're an importer, distributor, or food manufacturer — we'd love to discuss your requirements. Fill in the form or reach us directly.",
    contact_details_label: "Contact Details", contact_details_title: "Get in Touch",
    contact_addr_label: "Address", contact_phone_label: "Phone / WhatsApp",
    contact_email_label: "Email", contact_hours_label: "Business Hours",
    contact_hours_value: "Mon – Sat: 9:00 AM – 6:00 PM IST",
    contact_whatsapp_title: "Prefer WhatsApp?",
    contact_whatsapp_sub: "Message us directly for quick responses on product availability, pricing, and samples.",
    contact_whatsapp_btn: "Chat on WhatsApp",
    contact_form_title: "Send an Inquiry",
    contact_name: "Full Name", contact_company: "Company / Organisation",
    contact_email: "Email", contact_phone: "Phone / WhatsApp",
    contact_country: "Country", contact_inquiry_type: "Inquiry Type",
    contact_inquiry_select: "Select…",
    contact_message: "Message",
    contact_message_placeholder: "Tell us what you're looking for — products, quantities, destination port, certifications needed, etc.",
    contact_send: "Send Inquiry", contact_sending: "Sending…",
    contact_privacy: "We respond within 24 business hours. Your information is kept confidential.",
    contact_success_title: "Message Received!", contact_success_sub: "Thank you for reaching out. Our team will get back to you within 24 business hours. For urgent queries, please WhatsApp us directly.",
    contact_inq_bulk: "Bulk Order Inquiry", contact_inq_sample: "Sample Request",
    contact_inq_label: "Private Labelling", contact_inq_pricing: "Pricing & Quotation",
    contact_inq_cert: "Certification Documents", contact_inq_partner: "Partnership / Distribution",
    contact_inq_other: "Other",
  },
  mr: {
    nav_home: "मुख्यपृष्ठ", nav_products: "उत्पादने", nav_about: "आमच्याबद्दल", nav_contact: "संपर्क",
    nav_get_quote: "कोटेशन मिळवा", nav_search: "शोधा",
    hero_headline1: "प्रीमियम", hero_headline2: "कृषी उत्पादने", hero_tagline: "जगासाठी.",
    hero_subtext: "कोल्हापूरच्या सुपीक मातीतून ३०+ देशांपर्यंत — सर्वोत्तम मसाले, धान्य आणि सेंद्रिय वस्तू, कोणतीही तडजोड नाही.",
    hero_cta_explore: "उत्पादने पाहा", hero_cta_contact: "संपर्क करा",
    hero_stat_years: "वर्षांचा व्यवसाय", hero_stat_countries: "देश सेवित",
    hero_stat_products: "प्रीमियम उत्पादने", hero_stat_farmers: "शेतकरी भागीदार",
    fp_section_label: "आमची श्रेणी", fp_section_title: "वैशिष्ट्यीकृत उत्पादने",
    fp_view_all: "सर्व १५ उत्पादने पाहा", fp_featured_label: "वैशिष्ट्यीकृत उत्पादन",
    fp_view_details: "तपशील पाहा", fp_bulk_inquiry: "बल्क चौकशी",
    wcu_label: "आम्हाला का निवडा", wcu_title1: "प्रत्येक निर्यातीमागे", wcu_title2: "आमचे वचन",
    wcu_subtext: "आम्ही फक्त उत्पादने पाठवत नाही — कोल्हापूरच्या शेतकरी समुदायाचा विश्वास, वारसा आणि नैसर्गिक संपत्ती निर्यात करतो.",
    wcu_f1_title: "नैसर्गिक आणि टिकाऊ", wcu_f1_desc: "महाराष्ट्रातील प्रमाणित सेंद्रिय शेतातील प्रत्येक उत्पादन.",
    wcu_f2_title: "आंतरराष्ट्रीय मानके", wcu_f2_desc: "FSSAI, ISO प्रमाणित. जमिनीपासून जहाजापर्यंत प्रत्येक टप्प्यावर चाचणी.",
    wcu_f3_title: "शेतकरी सक्षमीकरण", wcu_f3_desc: "५०० हून अधिक लघु शेतकरी कुटुंबांशी थेट भागीदारी.",
    wcu_f4_title: "थेट निर्यात", wcu_f4_desc: "कोणतेही मध्यस्थ नाहीत — जागतिक खरेदीदारांसाठी स्पर्धात्मक किंमती.",
    test_label: "ग्राहक विश्वास", test_title1: "आमच्या भागीदारांचे", test_title2: "शब्द",
    cta_label: "स्रोत करायला तयार?", cta_title: "आपल्या आवश्यकतांबद्दल बोलूया.",
    cta_subtext: "तुम्ही खरेदीदार, वितरक किंवा किरकोळ विक्रेता असा — आम्ही तुमच्या बाजारपेठेसाठी योग्य उत्पादन आणि पॅकेजिंग शोधू.",
    cta_inquiry: "चौकशी पाठवा", cta_whatsapp: "WhatsApp करा",
    cert_label: "प्रमाणित आणि अनुपालित",
    faq_label: "प्रश्न आहेत?", faq_title: "वारंवार विचारले जाणारे प्रश्न",
    faq_subtext: "किले भुदरगड अ‍ॅग्रोसोबत स्रोत, शिपिंग आणि काम करण्याबद्दल आपल्याला माहित असणे आवश्यक आहे ते सर्व. उत्तर सापडले नाही?",
    faq_contact_link: "आमच्या टीमशी संपर्क करा →",
    faq_q1: "तुमच्या उत्पादनांना कोणती प्रमाणपत्रे आहेत?",
    faq_a1: "आमच्या उत्पादनांना FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India प्रमाणपत्रे आणि Phytosanitary Certification आहे.",
    faq_q2: "तुम्ही बल्क आणि प्रायव्हेट-लेबल पॅकेजिंग देता का?",
    faq_a2: "हो. आम्ही बल्क (सैल पिशव्या, जंबो गोण्या) तसेच किरकोळ-तयार प्रायव्हेट-लेबल पॅकमध्ये पुरवठा करतो.",
    faq_q3: "तुम्ही कोणत्या देशांना निर्यात करता?",
    faq_a3: "आम्ही युरोप, उत्तर अमेरिका, मध्य पूर्व आणि दक्षिणपूर्व आशियातील ३०+ देशांना निर्यात करतो.",
    faq_q4: "बल्क ऑर्डर कसा द्यायचा?",
    faq_a4: "आमच्या संपर्क पृष्ठावरील 'चौकशी पाठवा' फॉर्म वापरा किंवा WhatsApp वर +91 91565 19393 वर थेट संपर्क करा.",
    faq_q5: "ऑर्डरसाठी सामान्य लीड वेळ काय आहे?",
    faq_a5: "उत्पादन, प्रमाण आणि गंतव्यस्थानावर अवलंबून मानक लीड वेळ ७–१४ व्यावसायिक दिवस आहे.",
    faq_q6: "मोठी ऑर्डर देण्यापूर्वी नमुने उपलब्ध आहेत का?",
    faq_a6: "हो, आम्ही विनंतीवर उत्पादन नमुने प्रदान करतो. नमुना शुल्क आणि कुरिअर खर्च लागू होऊ शकतो.",
    footer_tagline: "भुदरगडच्या सुपीक भूमीतून ३०+ देशांपर्यंत — प्रीमियम मसाले, धान्य आणि सेंद्रिय वस्तू.",
    footer_company: "कंपनी", footer_products: "उत्पादने", footer_support: "समर्थन",
    footer_get_in_touch: "संपर्क साधा", footer_rights: "सर्व हक्क राखीव.",
    fab_label: "WhatsApp वर चॅट करा",
    footer_about_us: "आमच्याबद्दल", footer_our_process: "आमची प्रक्रिया", footer_certifications: "प्रमाणपत्रे", footer_careers: "करिअर",
    footer_spices: "मसाले", footer_seeds: "बियाणे आणि धान्य", footer_herbs: "औषधी वनस्पती", footer_organic: "सेंद्रिय श्रेणी",
    footer_contact_us: "संपर्क करा", footer_bulk_orders: "बल्क ऑर्डर", footer_shipping: "शिपिंग माहिती", footer_faqs: "प्रश्नोत्तरे",
    footer_privacy: "गोपनीयता धोरण", footer_terms: "सेवा अटी", footer_cookies: "कुकी धोरण",
    prod_catalogue_label: "आमची यादी", prod_hero_title: "प्रीमियम कृषी उत्पादने",
    prod_hero_sub: "कोल्हापूरच्या सर्वोत्तम शेतांमधून प्रमाणित सेंद्रिय मसाले, बियाणे आणि धान्य.",
    prod_filter_label: "फिल्टर", prod_search_placeholder: "उत्पादने शोधा…",
    prod_found: "उत्पादन सापडले", prod_found_plural: "उत्पादने सापडली",
    prod_no_results: "उत्पादने सापडली नाहीत", prod_no_results_sub: "आपला शोध किंवा फिल्टर बदलून पाहा.",
    prod_view_details: "तपशील पाहा", prod_export_grade: "निर्यात श्रेणी",
    prod_cta_title: "सानुकूल उत्पादन किंवा बल्क ऑर्डर हवी आहे?",
    prod_cta_sub: "आम्ही जगभरातील आयातदार, वितरक आणि खाद्य उत्पादकांसोबत काम करतो.",
    prod_cta_btn: "सानुकूल कोटेशन मागवा", prod_cat_all: "सर्व",
    pd_breadcrumb_home: "मुख्यपृष्ठ", pd_breadcrumb_products: "उत्पादने",
    pd_key_features: "मुख्य वैशिष्ट्ये", pd_specifications: "तपशील",
    pd_packaging: "पॅकेजिंग पर्याय", pd_request_quote: "कोटेशन मागवा",
    pd_chat_whatsapp: "WhatsApp वर चॅट करा", pd_explore_more: "अधिक शोधा", pd_related: "संबंधित उत्पादने",
    about_story_label: "आमची कथा", about_hero_title1: "भुदरगडच्या", about_hero_title2: "शेतांपासून जगापर्यंत",
    about_hero_p1: "२५ वर्षांहून अधिक काळ, किले भुदरगड अ‍ॅग्रो प्रायव्हेट लिमिटेड कोल्हापूर, महाराष्ट्रातील शेतजमीन आणि जागतिक स्वयंपाकघर यांच्यातील橋 बांधत आहे.",
    about_hero_p2: "आम्ही एका छोट्या कौटुंबिक व्यवसायातून सुरुवात केली — सर्वोत्तम कृषी उत्पादने जागतिक बाजारपेठेत पोहोचवणे हे आमचे एकमेव ध्येय होते.",
    about_hero_cta_products: "आमची उत्पादने पाहा", about_hero_cta_contact: "संपर्क करा",
    about_stat_years: "वर्षांचे उत्कृष्टता", about_stat_countries: "देश सेवित",
    about_stat_products: "निर्यात उत्पादने", about_stat_farmers: "शेतकरी भागीदार",
    about_values_label: "आम्हाला काय प्रेरणा देते", about_values_title: "आमची मूल्ये",
    about_v1_title: "शुद्धता प्रथम", about_v1_desc: "प्रत्येक उत्पादन सुविधा सोडण्यापूर्वी गुणवत्ता, शुद्धता आणि सुरक्षिततेसाठी चाचणी केली जाते.",
    about_v2_title: "शेतकरी कल्याण", about_v2_desc: "थेट भागीदारी आणि न्याय्य मूल्य निर्धारण — वाटाघाटी नाही.",
    about_v3_title: "जागतिक जबाबदारी", about_v3_desc: "शाश्वत शेती पद्धती भविष्यातील पिढ्यांसाठी जमीन संरक्षित करतात.",
    about_v4_title: "सतत सुधारणा", about_v4_desc: "शेतापासून जहाजापर्यंत, आम्ही आंतरराष्ट्रीय मानकांपेक्षा जास्त प्रक्रिया सुधारतो.",
    about_timeline_label: "आमचा प्रवास", about_timeline_title: "२५ वर्षांची वाढ",
    about_t1_title: "स्थापना", about_t1_desc: "भुदरगड, कोल्हापूर येथे किले भुदरगड अ‍ॅग्रो प्रायव्हेट लिमिटेडची स्थापना.",
    about_t2_title: "पहिली आंतरराष्ट्रीय शिपमेंट", about_t2_desc: "उत्पादन श्रेणी विस्तारित केली आणि UAE ला पहिली आंतरराष्ट्रीय शिपमेंट पूर्ण केली.",
    about_t3_title: "FSSAI आणि स्पाइसेस बोर्ड प्रमाणित", about_t3_desc: "FSSAI प्रमाणपत्र आणि भारतातील स्पाइसेस बोर्ड नोंदणी. युरोपीय बाजारपेठेत प्रवेश.",
    about_t4_title: "सेंद्रिय प्रमाणपत्रे", about_t4_desc: "USDA Organic आणि EU Organic प्रमाणपत्रे. २००+ लघु शेतकरी कुटुंबांशी भागीदारी.",
    about_t5_title: "ISO 22000 प्रमाणित", about_t5_desc: "ISO 22000 अन्न सुरक्षा प्रमाणपत्र. २५+ देशांमध्ये थेट निर्यात.",
    about_t6_title: "५००+ शेतकरी नेटवर्क", about_t6_desc: "५०० हून अधिक शेतकरी भागीदार. आशिया, युरोप, खाडी आणि अमेरिकेतील ३०+ देशांना निर्यात.",
    about_cert_label: "आमची प्रमाणपत्रे", about_cert_title: "जागतिक निर्यातीसाठी प्रमाणित",
    about_cert_sub: "आम्ही पाठवलेले प्रत्येक उत्पादन सर्वोच्च आंतरराष्ट्रीय मानके पूर्ण करते.",
    about_cta_label: "आमच्यासोबत काम करा", about_cta_title: "प्रीमियम भारतीय मसाले स्रोत करायला तयार?",
    about_cta_sub: "तुमच्या आवश्यकतांबद्दल, नमुने मागवण्यासाठी किंवा सानुकूल कोटेशनसाठी आमच्या निर्यात संघाशी संपर्क साधा.",
    about_cta_quote: "कोटेशन मिळवा", about_cta_browse: "उत्पादने पाहा",
    about_farmer_badge: "शेतकरी भागीदार", about_countries_badge: "देश",
    contact_reach_label: "संपर्क साधा", contact_hero_title: "एकत्र काम करूया",
    contact_hero_sub: "आयातदार, वितरक किंवा अन्न उत्पादक असो — आम्हाला तुमच्या आवश्यकतांबद्दल बोलण्यात आनंद होईल.",
    contact_details_label: "संपर्क तपशील", contact_details_title: "संपर्क साधा",
    contact_addr_label: "पत्ता", contact_phone_label: "फोन / WhatsApp",
    contact_email_label: "ईमेल", contact_hours_label: "व्यवसाय वेळ",
    contact_hours_value: "सोम – शनि: सकाळी ९:०० – सायं ६:०० (IST)",
    contact_whatsapp_title: "WhatsApp पसंत आहे?",
    contact_whatsapp_sub: "उत्पादन उपलब्धता, किंमत आणि नमुन्यांबद्दल जलद उत्तरांसाठी आम्हाला थेट संदेश पाठवा.",
    contact_whatsapp_btn: "WhatsApp वर चॅट करा",
    contact_form_title: "चौकशी पाठवा",
    contact_name: "पूर्ण नाव", contact_company: "कंपनी / संस्था",
    contact_email: "ईमेल", contact_phone: "फोन / WhatsApp",
    contact_country: "देश", contact_inquiry_type: "चौकशीचा प्रकार",
    contact_inquiry_select: "निवडा…",
    contact_message: "संदेश",
    contact_message_placeholder: "तुम्ही काय शोधत आहात ते सांगा — उत्पादने, प्रमाण, गंतव्य बंदर, आवश्यक प्रमाणपत्रे इ.",
    contact_send: "चौकशी पाठवा", contact_sending: "पाठवत आहे…",
    contact_privacy: "आम्ही २४ व्यावसायिक तासांत उत्तर देतो. तुमची माहिती गोपनीय ठेवली जाते.",
    contact_success_title: "संदेश मिळाला!", contact_success_sub: "संपर्क साधल्याबद्दल धन्यवाद. आमची टीम २४ व्यावसायिक तासांत उत्तर देईल.",
    contact_inq_bulk: "बल्क ऑर्डर चौकशी", contact_inq_sample: "नमुना विनंती",
    contact_inq_label: "प्रायव्हेट लेबलिंग", contact_inq_pricing: "किंमत आणि कोटेशन",
    contact_inq_cert: "प्रमाणपत्र दस्तऐवज", contact_inq_partner: "भागीदारी / वितरण",
    contact_inq_other: "इतर",
  },
  hi: {
    nav_home: "होम", nav_products: "उत्पाद", nav_about: "हमारे बारे में", nav_contact: "संपर्क",
    nav_get_quote: "कोटेशन लें", nav_search: "खोजें",
    hero_headline1: "प्रीमियम", hero_headline2: "कृषि उत्पाद", hero_tagline: "दुनिया के लिए।",
    hero_subtext: "कोल्हापुर की उपजाऊ भूमि से ३०+ देशों तक — बेहतरीन मसाले, अनाज और जैविक वस्तुएं, बिना किसी समझौते के।",
    hero_cta_explore: "उत्पाद देखें", hero_cta_contact: "संपर्क करें",
    hero_stat_years: "वर्षों का व्यवसाय", hero_stat_countries: "देशों में सेवा",
    hero_stat_products: "प्रीमियम उत्पाद", hero_stat_farmers: "किसान भागीदार",
    fp_section_label: "हमारी श्रृंखला", fp_section_title: "विशेष उत्पाद",
    fp_view_all: "सभी १५ उत्पाद देखें", fp_featured_label: "विशेष उत्पाद",
    fp_view_details: "विवरण देखें", fp_bulk_inquiry: "बल्क पूछताछ",
    wcu_label: "हमें क्यों चुनें", wcu_title1: "हर निर्यात के पीछे", wcu_title2: "हमारा वादा",
    wcu_subtext: "हम केवल उत्पाद नहीं भेजते — कोल्हापुर के किसान समुदायों का विश्वास, विरासत और प्राकृतिक संपदा निर्यात करते हैं।",
    wcu_f1_title: "प्राकृतिक और टिकाऊ", wcu_f1_desc: "महाराष्ट्र के प्रमाणित जैविक खेतों का प्रत्येक उत्पाद।",
    wcu_f2_title: "अंतर्राष्ट्रीय मानक", wcu_f2_desc: "FSSAI, ISO प्रमाणित। मिट्टी से जहाज तक हर चरण में परीक्षण।",
    wcu_f3_title: "किसान सशक्तिकरण", wcu_f3_desc: "५०० से अधिक लघु किसान परिवारों के साथ सीधी भागीदारी।",
    wcu_f4_title: "प्रत्यक्ष निर्यात", wcu_f4_desc: "कोई बिचौलिया नहीं — वैश्विक खरीदारों के लिए प्रतिस्पर्धी मूल्य।",
    test_label: "ग्राहक विश्वास", test_title1: "हमारे भागीदारों के", test_title2: "शब्द",
    cta_label: "सोर्स करने के लिए तैयार?", cta_title: "अपनी आवश्यकताओं के बारे में बात करें।",
    cta_subtext: "चाहे आप खरीदार, वितरक या खुदरा विक्रेता हों — हम आपके बाजार के लिए सही उत्पाद और पैकेजिंग खोजेंगे।",
    cta_inquiry: "पूछताछ भेजें", cta_whatsapp: "WhatsApp करें",
    cert_label: "प्रमाणित और अनुपालित",
    faq_label: "प्रश्न हैं?", faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    faq_subtext: "किले भुदरगड एग्रो के साथ सोर्सिंग, शिपिंग और काम करने के बारे में सब कुछ। उत्तर नहीं मिला?",
    faq_contact_link: "हमारी टीम से संपर्क करें →",
    faq_q1: "आपके उत्पादों में कौन से प्रमाणपत्र हैं?",
    faq_a1: "हमारे उत्पाद FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India द्वारा प्रमाणित हैं और Phytosanitary Certification रखते हैं।",
    faq_q2: "क्या आप बल्क और प्राइवेट-लेबल पैकेजिंग प्रदान करते हैं?",
    faq_a2: "हाँ। हम बल्क (ढीले बैग, जंबो बोरियाँ) और रिटेल-रेडी प्राइवेट-लेबल पैक में आपूर्ति करते हैं।",
    faq_q3: "आप किन देशों को निर्यात करते हैं?",
    faq_a3: "हम यूरोप, उत्तरी अमेरिका, मध्य पूर्व और दक्षिण-पूर्व एशिया के ३०+ देशों को निर्यात करते हैं।",
    faq_q4: "बल्क ऑर्डर कैसे दें?",
    faq_a4: "हमारे संपर्क पृष्ठ पर 'पूछताछ भेजें' फ़ॉर्म का उपयोग करें या WhatsApp पर +91 91565 19393 पर सीधे पहुँचें।",
    faq_q5: "ऑर्डर के लिए सामान्य लीड टाइम क्या है?",
    faq_a5: "उत्पाद, मात्रा और गंतव्य के आधार पर मानक लीड टाइम ७–१४ कार्यदिवस है।",
    faq_q6: "बड़ा ऑर्डर देने से पहले नमूने उपलब्ध हैं?",
    faq_a6: "हाँ, हम अनुरोध पर उत्पाद नमूने प्रदान करते हैं।",
    footer_tagline: "भुदरगड की उपजाऊ भूमि से ३०+ देशों तक — प्रीमियम मसाले, अनाज और जैविक वस्तुएं।",
    footer_company: "कंपनी", footer_products: "उत्पाद", footer_support: "सहायता",
    footer_get_in_touch: "संपर्क करें", footer_rights: "सर्वाधिकार सुरक्षित।",
    fab_label: "WhatsApp पर चैट करें",
    footer_about_us: "हमारे बारे में", footer_our_process: "हमारी प्रक्रिया", footer_certifications: "प्रमाणपत्र", footer_careers: "करियर",
    footer_spices: "मसाले", footer_seeds: "बीज और अनाज", footer_herbs: "जड़ी-बूटियां", footer_organic: "जैविक श्रेणी",
    footer_contact_us: "संपर्क करें", footer_bulk_orders: "बल्क ऑर्डर", footer_shipping: "शिपिंग जानकारी", footer_faqs: "FAQ",
    footer_privacy: "गोपनीयता नीति", footer_terms: "सेवा की शर्तें", footer_cookies: "कुकी नीति",
    prod_catalogue_label: "हमारी सूची", prod_hero_title: "प्रीमियम कृषि उत्पाद",
    prod_hero_sub: "कोल्हापुर के सर्वश्रेष्ठ खेतों से प्रमाणित जैविक मसाले, बीज और अनाज।",
    prod_filter_label: "फ़िल्टर", prod_search_placeholder: "उत्पाद खोजें…",
    prod_found: "उत्पाद मिला", prod_found_plural: "उत्पाद मिले",
    prod_no_results: "कोई उत्पाद नहीं मिला", prod_no_results_sub: "अपनी खोज या फ़िल्टर समायोजित करें।",
    prod_view_details: "विवरण देखें", prod_export_grade: "निर्यात श्रेणी",
    prod_cta_title: "कस्टम उत्पाद या बल्क ऑर्डर चाहिए?",
    prod_cta_sub: "हम दुनिया भर के आयातकों, वितरकों और खाद्य निर्माताओं के साथ काम करते हैं।",
    prod_cta_btn: "कस्टम कोटेशन अनुरोध करें", prod_cat_all: "सभी",
    pd_breadcrumb_home: "होम", pd_breadcrumb_products: "उत्पाद",
    pd_key_features: "मुख्य विशेषताएं", pd_specifications: "विशिष्टताएं",
    pd_packaging: "पैकेजिंग विकल्प", pd_request_quote: "कोटेशन अनुरोध करें",
    pd_chat_whatsapp: "WhatsApp पर चैट करें", pd_explore_more: "और एक्सप्लोर करें", pd_related: "संबंधित उत्पाद",
    about_story_label: "हमारी कहानी", about_hero_title1: "भुदरगड के", about_hero_title2: "खेतों से दुनिया तक",
    about_hero_p1: "२५ वर्षों से अधिक समय से, किले भुदरगड अ‍ॅग्रो प्राइवेट लिमिटेड कोल्हापुर, महाराष्ट्र की उपजाऊ खेती और वैश्विक रसोई के बीच सेतु बना रहा है।",
    about_hero_p2: "हमने एक छोटे पारिवारिक व्यवसाय के रूप में शुरुआत की — सर्वोत्तम कृषि उत्पादों को वैश्विक बाजारों तक पहुंचाना हमारा एकमात्र विश्वास था।",
    about_hero_cta_products: "हमारे उत्पाद देखें", about_hero_cta_contact: "संपर्क करें",
    about_stat_years: "वर्षों की उत्कृष्टता", about_stat_countries: "देशों में सेवा",
    about_stat_products: "निर्यात उत्पाद", about_stat_farmers: "किसान भागीदार",
    about_values_label: "हमें क्या प्रेरित करता है", about_values_title: "हमारे मूल मूल्य",
    about_v1_title: "शुद्धता सर्वप्रथम", about_v1_desc: "हर उत्पाद हमारी सुविधाएं छोड़ने से पहले गुणवत्ता, शुद्धता और सुरक्षा के लिए परीक्षण किया जाता है।",
    about_v2_title: "किसान कल्याण", about_v2_desc: "प्रत्यक्ष साझेदारी और उचित मूल्य निर्धारण — कोई समझौता नहीं।",
    about_v3_title: "वैश्विक जिम्मेदारी", about_v3_desc: "टिकाऊ खेती भविष्य की पीढ़ियों के लिए भूमि की रक्षा करती है।",
    about_v4_title: "निरंतर सुधार", about_v4_desc: "खेत से जहाज तक, हम अंतरराष्ट्रीय मानकों से अधिक प्रक्रियाओं को परिष्कृत करते हैं।",
    about_timeline_label: "हमारी यात्रा", about_timeline_title: "२५ साल की वृद्धि",
    about_t1_title: "स्थापना", about_t1_desc: "भुदरगड, कोल्हापुर में किले भुदरगड अ‍ॅग्रो प्राइवेट लिमिटेड की स्थापना।",
    about_t2_title: "पहली अंतर्राष्ट्रीय शिपमेंट", about_t2_desc: "उत्पाद श्रृंखला विस्तारित की और UAE को पहली अंतर्राष्ट्रीय शिपमेंट पूरी की।",
    about_t3_title: "FSSAI और स्पाइसेस बोर्ड प्रमाणित", about_t3_desc: "FSSAI प्रमाणपत्र और भारत के स्पाइसेस बोर्ड पंजीकरण। यूरोपीय बाजारों में प्रवेश।",
    about_t4_title: "जैविक प्रमाणपत्र", about_t4_desc: "USDA Organic और EU Organic प्रमाणपत्र। २०० से अधिक किसान परिवारों के साथ साझेदारी।",
    about_t5_title: "ISO 22000 प्रमाणित", about_t5_desc: "ISO 22000 खाद्य सुरक्षा प्रमाणपत्र। २५+ देशों में प्रत्यक्ष निर्यात।",
    about_t6_title: "५०० से अधिक किसान नेटवर्क", about_t6_desc: "५०० से अधिक किसान भागीदार। एशिया, यूरोप, खाड़ी और अमेरिका में ३०+ देशों को निर्यात।",
    about_cert_label: "हमारी प्रमाण-पत्र", about_cert_title: "वैश्विक निर्यात के लिए प्रमाणित",
    about_cert_sub: "हम जो भी उत्पाद भेजते हैं वह उच्चतम अंतरराष्ट्रीय मानकों को पूरा करता है।",
    about_cta_label: "हमारे साथ काम करें", about_cta_title: "प्रीमियम भारतीय मसाले स्रोत करने के लिए तैयार?",
    about_cta_sub: "अपनी आवश्यकताओं पर चर्चा करने, नमूने अनुरोध करने या कस्टम कोटेशन के लिए हमारी निर्यात टीम से संपर्क करें।",
    about_cta_quote: "कोटेशन पाएं", about_cta_browse: "उत्पाद देखें",
    about_farmer_badge: "किसान भागीदार", about_countries_badge: "देश",
    contact_reach_label: "संपर्क करें", contact_hero_title: "साथ मिलकर काम करते हैं",
    contact_hero_sub: "चाहे आप आयातक, वितरक या खाद्य निर्माता हों — हम आपकी आवश्यकताओं पर चर्चा करना पसंद करेंगे।",
    contact_details_label: "संपर्क विवरण", contact_details_title: "संपर्क करें",
    contact_addr_label: "पता", contact_phone_label: "फोन / WhatsApp",
    contact_email_label: "ईमेल", contact_hours_label: "व्यावसायिक घंटे",
    contact_hours_value: "सोम – शनि: सुबह ९:०० – शाम ६:०० (IST)",
    contact_whatsapp_title: "WhatsApp पसंद है?",
    contact_whatsapp_sub: "उत्पाद उपलब्धता, मूल्य और नमूनों पर त्वरित उत्तर के लिए हमें सीधे संदेश भेजें।",
    contact_whatsapp_btn: "WhatsApp पर चैट करें",
    contact_form_title: "पूछताछ भेजें",
    contact_name: "पूरा नाम", contact_company: "कंपनी / संगठन",
    contact_email: "ईमेल", contact_phone: "फोन / WhatsApp",
    contact_country: "देश", contact_inquiry_type: "पूछताछ का प्रकार",
    contact_inquiry_select: "चुनें…",
    contact_message: "संदेश",
    contact_message_placeholder: "बताएं कि आप क्या ढूंढ रहे हैं — उत्पाद, मात्रा, गंतव्य बंदरगाह, आवश्यक प्रमाणपत्र आदि।",
    contact_send: "पूछताछ भेजें", contact_sending: "भेजा जा रहा है…",
    contact_privacy: "हम २४ व्यावसायिक घंटों में जवाब देते हैं। आपकी जानकारी गोपनीय रखी जाती है।",
    contact_success_title: "संदेश प्राप्त हुआ!", contact_success_sub: "संपर्क करने के लिए धन्यवाद। हमारी टीम २४ व्यावसायिक घंटों में वापस आएगी।",
    contact_inq_bulk: "बल्क ऑर्डर पूछताछ", contact_inq_sample: "नमूना अनुरोध",
    contact_inq_label: "प्राइवेट लेबलिंग", contact_inq_pricing: "मूल्य और कोटेशन",
    contact_inq_cert: "प्रमाणपत्र दस्तावेज", contact_inq_partner: "साझेदारी / वितरण",
    contact_inq_other: "अन्य",
  },
  ar: {
    nav_home: "الرئيسية", nav_products: "المنتجات", nav_about: "من نحن", nav_contact: "اتصل بنا",
    nav_get_quote: "احصل على عرض", nav_search: "بحث",
    hero_headline1: "منتجات زراعية", hero_headline2: "متميزة", hero_tagline: "للعالم.",
    hero_subtext: "من أراضي كولهابور الخصبة إلى أكثر من ٣٠ دولة — أجود التوابل والحبوب والسلع العضوية دون تنازل.",
    hero_cta_explore: "استكشف المنتجات", hero_cta_contact: "اتصل بنا",
    hero_stat_years: "سنوات في العمل", hero_stat_countries: "دولة نخدمها",
    hero_stat_products: "منتجات متميزة", hero_stat_farmers: "شركاء مزارعون",
    fp_section_label: "مجموعتنا", fp_section_title: "المنتجات المميزة",
    fp_view_all: "عرض جميع ١٥ منتجاً", fp_featured_label: "منتج مميز",
    fp_view_details: "عرض التفاصيل", fp_bulk_inquiry: "استفسار بالجملة",
    wcu_label: "لماذا تختارنا", wcu_title1: "الوعد خلف كل", wcu_title2: "عملية تصدير",
    wcu_subtext: "نحن لا نشحن المنتجات فحسب — بل نصدر الثقة والتراث والخيرات الطبيعية لمجتمعات مزارعي كولهابور.",
    wcu_f1_title: "طبيعي ومستدام", wcu_f1_desc: "كل منتج مُتتبَّع من مزارع عضوية معتمدة عبر ماهاراشترا.",
    wcu_f2_title: "معايير دولية", wcu_f2_desc: "معتمد من FSSAI وISO. مُختبَر في كل مرحلة من التربة إلى الشحن.",
    wcu_f3_title: "تمكين المزارعين", wcu_f3_desc: "شراكات مباشرة مع أكثر من ٥٠٠ أسرة زراعية صغيرة.",
    wcu_f4_title: "تصدير مباشر", wcu_f4_desc: "لا وسطاء — أسعار تنافسية للمشترين العالميين.",
    test_label: "ثقة العملاء", test_title1: "كلمات من", test_title2: "شركائنا",
    cta_label: "مستعد للتوريد؟", cta_title: "دعنا نتحدث عن متطلباتك.",
    cta_subtext: "سواء كنت مشترياً أو موزعاً أو تاجر تجزئة — سنجد المنتج والتغليف المناسب لسوقك.",
    cta_inquiry: "أرسل استفساراً", cta_whatsapp: "تواصل عبر واتساب",
    cert_label: "معتمد ومتوافق",
    faq_label: "لديك أسئلة؟", faq_title: "الأسئلة الشائعة",
    faq_subtext: "كل ما تحتاج معرفته حول المصادر والشحن والعمل مع Kille Bhudargad Agro. لم تجد إجابتك؟",
    faq_contact_link: "تواصل مع فريقنا →",
    faq_q1: "ما هي الشهادات التي تحملها منتجاتكم؟",
    faq_a1: "منتجاتنا معتمدة من FSSAI وISO 22000 وUSDA Organic وEU Organic وSpices Board India وتحمل شهادة صحة النبات.",
    faq_q2: "هل تقدمون تغليفاً بالجملة وبالعلامة الخاصة؟",
    faq_a2: "نعم. نوفر بالجملة (أكياس مفكوكة، أكياس ضخمة) وعبوات جاهزة للبيع بالتجزئة بالعلامة الخاصة.",
    faq_q3: "ما الدول التي تصدرون إليها؟",
    faq_a3: "نصدر إلى أكثر من ٣٠ دولة في أوروبا وأمريكا الشمالية والشرق الأوسط وجنوب شرق آسيا.",
    faq_q4: "كيف يمكنني تقديم طلب بالجملة أو إرسال استفسار؟",
    faq_a4: "استخدم نموذج 'أرسل استفساراً' في صفحة الاتصال أو تواصل معنا مباشرة عبر واتساب على +91 91565 19393.",
    faq_q5: "ما هو وقت التسليم المعتاد للطلب؟",
    faq_a5: "وقت التسليم القياسي ٧–١٤ يوم عمل حسب المنتج والكمية والوجهة.",
    faq_q6: "هل تتوفر عينات قبل تقديم طلب كبير؟",
    faq_a6: "نعم، نوفر عينات المنتجات عند الطلب. قد تُطبَّق رسوم العينة وتكاليف الشحن.",
    footer_tagline: "من أراضي بهوداركاد الخصبة إلى أكثر من ٣٠ دولة — توابل وحبوب وسلع عضوية متميزة.",
    footer_company: "الشركة", footer_products: "المنتجات", footer_support: "الدعم",
    footer_get_in_touch: "تواصل معنا", footer_rights: "جميع الحقوق محفوظة.",
    fab_label: "تواصل عبر واتساب",
  },
  ur: {
    nav_home: "ہوم", nav_products: "مصنوعات", nav_about: "ہمارے بارے میں", nav_contact: "رابطہ",
    nav_get_quote: "قیمت لیں", nav_search: "تلاش",
    hero_headline1: "پریمیم", hero_headline2: "زرعی مصنوعات", hero_tagline: "دنیا کے لیے۔",
    hero_subtext: "کولہاپور کی زرخیز زمین سے ۳۰+ ممالک تک — بہترین مصالحے، اناج اور نامیاتی اجناس بغیر کسی سمجھوتے کے۔",
    hero_cta_explore: "مصنوعات دیکھیں", hero_cta_contact: "رابطہ کریں",
    hero_stat_years: "سال کا کاروبار", hero_stat_countries: "ممالک خدمت میں",
    hero_stat_products: "پریمیم مصنوعات", hero_stat_farmers: "کسان شراکت دار",
    fp_section_label: "ہماری رینج", fp_section_title: "نمایاں مصنوعات",
    fp_view_all: "تمام ۱۵ مصنوعات دیکھیں", fp_featured_label: "نمایاں مصنوع",
    fp_view_details: "تفصیل دیکھیں", fp_bulk_inquiry: "بلک انکوائری",
    wcu_label: "ہمیں کیوں منتخب کریں", wcu_title1: "ہر برآمد کے پیچھے", wcu_title2: "ہمارا وعدہ",
    wcu_subtext: "ہم صرف مصنوعات نہیں بھیجتے — کولہاپور کے کسان برادریوں کا اعتماد، ورثہ اور قدرتی نعمت برآمد کرتے ہیں۔",
    wcu_f1_title: "قدرتی اور پائیدار", wcu_f1_desc: "مہاراشٹر کے سرٹیفائیڈ نامیاتی فارموں سے ہر مصنوع۔",
    wcu_f2_title: "بین الاقوامی معیار", wcu_f2_desc: "FSSAI، ISO سرٹیفائیڈ۔ مٹی سے ترسیل تک ہر مرحلے پر جانچ۔",
    wcu_f3_title: "کسانوں کا اختیار", wcu_f3_desc: "۵۰۰ سے زائد چھوٹے کسان خاندانوں سے براہ راست شراکت۔",
    wcu_f4_title: "براہ راست برآمد", wcu_f4_desc: "کوئی بیچوان نہیں — عالمی خریداروں کے لیے مسابقتی قیمتیں۔",
    test_label: "گاہک اعتماد", test_title1: "ہمارے شراکت داروں کے", test_title2: "الفاظ",
    cta_label: "سورس کرنے کے لیے تیار؟", cta_title: "اپنی ضروریات کے بارے میں بات کریں۔",
    cta_subtext: "چاہے آپ خریدار، تقسیم کار یا خردہ فروش ہوں — ہم آپ کی مارکیٹ کے لیے مناسب مصنوع اور پیکیجنگ تلاش کریں گے۔",
    cta_inquiry: "انکوائری بھیجیں", cta_whatsapp: "واٹس ایپ کریں",
    cert_label: "سرٹیفائیڈ اور تعمیل یافتہ",
    faq_label: "سوالات ہیں؟", faq_title: "اکثر پوچھے جانے والے سوالات",
    faq_subtext: "Kille Bhudargad Agro کے ساتھ سورسنگ، شپنگ اور کام کرنے کے بارے میں جاننے کے لیے ہر چیز۔ جواب نہیں ملا؟",
    faq_contact_link: "ہماری ٹیم سے رابطہ کریں →",
    faq_q1: "آپ کی مصنوعات میں کون سے سرٹیفکیٹ ہیں؟",
    faq_a1: "ہماری مصنوعات FSSAI، ISO 22000، USDA Organic، EU Organic، Spices Board India سے سرٹیفائیڈ ہیں۔",
    faq_q2: "کیا آپ بلک اور پرائیویٹ لیبل پیکیجنگ دیتے ہیں؟",
    faq_a2: "جی ہاں۔ ہم بلک (ڈھیلے تھیلے، جمبو بوری) اور ریٹیل ریڈی پرائیویٹ لیبل پیک میں فراہم کرتے ہیں۔",
    faq_q3: "آپ کن ممالک کو برآمد کرتے ہیں؟",
    faq_a3: "ہم یورپ، شمالی امریکہ، مشرق وسطیٰ اور جنوب مشرقی ایشیا کے ۳۰+ ممالک کو برآمد کرتے ہیں۔",
    faq_q4: "بلک آرڈر کیسے دیں؟",
    faq_a4: "ہمارے رابطہ صفحے پر 'انکوائری بھیجیں' فارم استعمال کریں یا واٹس ایپ پر +91 91565 19393 پر رابطہ کریں۔",
    faq_q5: "آرڈر کی معمول کی لیڈ ٹائم کیا ہے؟",
    faq_a5: "معیاری لیڈ ٹائم ۷–۱۴ کاروباری دن ہے جو مصنوع، مقدار اور منزل پر منحصر ہے۔",
    faq_q6: "بڑا آرڈر دینے سے پہلے نمونے دستیاب ہیں؟",
    faq_a6: "جی ہاں، ہم درخواست پر مصنوع کے نمونے فراہم کرتے ہیں۔",
    footer_tagline: "بھوداکاڑ کی زرخیز زمین سے ۳۰+ ممالک تک — پریمیم مصالحے، اناج اور نامیاتی اجناس۔",
    footer_company: "کمپنی", footer_products: "مصنوعات", footer_support: "سپورٹ",
    footer_get_in_touch: "رابطہ کریں", footer_rights: "جملہ حقوق محفوظ ہیں۔",
    fab_label: "واٹس ایپ پر چیٹ کریں",
  },
  gu: {
    nav_home: "હોમ", nav_products: "ઉત્પાદનો", nav_about: "અમારા વિશે", nav_contact: "સંપર્ક",
    nav_get_quote: "કોટેશન મેળવો", nav_search: "શોધો",
    hero_headline1: "પ્રીમિયમ", hero_headline2: "કૃષિ ઉત્પાદનો", hero_tagline: "વિશ્વ માટે.",
    hero_subtext: "કોલ્હાપુરની ફળદ્રુપ ભૂમિ પરથી ૩૦+ દેશો સુધી — શ્રેષ્ઠ મસાલા, ધાન્ય અને ઓર્ગેનિક ઉત્પાદનો.",
    hero_cta_explore: "ઉત્પાદનો જુઓ", hero_cta_contact: "સંપર્ક કરો",
    hero_stat_years: "વ્યવસાયના વર્ષ", hero_stat_countries: "દેશોની સેવા",
    hero_stat_products: "પ્રીમિયમ ઉત્પાદનો", hero_stat_farmers: "ખેડૂત ભાગીદારો",
    fp_section_label: "અમારી શ્રેણી", fp_section_title: "વિશેષ ઉત્પાદનો",
    fp_view_all: "બધા ૧૫ ઉત્પાદનો જુઓ", fp_featured_label: "વિશેષ ઉત્પાદન",
    fp_view_details: "વિગતો જુઓ", fp_bulk_inquiry: "બલ્ક પૂછપરછ",
    wcu_label: "અમને શા માટે પસંદ કરો", wcu_title1: "દરેક નિકાસ પાછળ", wcu_title2: "અમારું વચન",
    wcu_subtext: "અમે ફક્ત ઉત્પાદનો મોકલતા નથી — કોલ્હાપુરના ખેડૂત સમુદાયોનો વિશ્વાસ, વારસો અને કુદરતી સંપત્તિ નિકાસ કરીએ છીએ.",
    wcu_f1_title: "કુદરતી અને ટકાઉ", wcu_f1_desc: "મહારાષ્ટ્ર的 certified ઓર્ગેનિક ખેતરોનું દરેક ઉત્પાદન.",
    wcu_f2_title: "આંતરરાષ્ટ્રીય ધોરણ", wcu_f2_desc: "FSSAI, ISO certified. જમીનથી શિપ સુધી દરેક તબક્કે ટેસ્ટ.",
    wcu_f3_title: "ખેડૂત સશક્તિકરણ", wcu_f3_desc: "૫૦૦+ નાના ખેડૂત પરિવારો સાથે સીધી ભાગીદારી.",
    wcu_f4_title: "સીધી નિકાસ", wcu_f4_desc: "કોઈ મધ્યસ્થ નહીં — વૈશ્વિક ખરીદારો માટે સ્પર્ધાત્મક ભાવ.",
    test_label: "ગ્રાહક વિશ્વાસ", test_title1: "અમારા ભાગીદારોના", test_title2: "શબ્દો",
    cta_label: "સ્ત્રોત કરવા તૈયાર?", cta_title: "તમારી જરૂરિયાતો વિશે વાત કરીએ.",
    cta_subtext: "ખરીદનાર, વિતરક કે છૂટક વિક્રેતા — અમે તમારા બજાર માટે સાચો ઉત્પાદ અને પેકેજિંગ શોધીશું.",
    cta_inquiry: "પૂછપરછ મોકલો", cta_whatsapp: "WhatsApp કરો",
    cert_label: "Certified અને Compliant",
    faq_label: "પ્રશ્નો છે?", faq_title: "વારંવાર પૂછાતા પ્રશ્નો",
    faq_subtext: "Kille Bhudargad Agro સાથે સોર્સિંગ, શિપિંગ વિશે બધું જ. જવાબ ન મળ્યો?",
    faq_contact_link: "અમારી ટીમ સાથે સંપર્ક કરો →",
    faq_q1: "તમારા ઉત્પાદનો પર કઈ certifications છે?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "Bulk અને private-label packaging ઉપલબ્ધ છે?", faq_a2: "હા, bulk અને retail-ready private-label packs બંને.",
    faq_q3: "તમે કઈ countries ને export કરો છો?", faq_a3: "Europe, North America, Middle East, Southeast Asia માં ૩૦+ countries.",
    faq_q4: "Bulk order કેવી રીતે આપવો?", faq_a4: "Contact page પર form ભરો અથવા WhatsApp: +91 91565 19393.",
    faq_q5: "Lead time કેટલો છે?", faq_a5: "૭–૧૪ business days.",
    faq_q6: "Samples ઉપલબ્ધ છે?", faq_a6: "હા, request on samples ઉપલબ્ધ.",
    footer_tagline: "ભુદરગડની ફળદ્રુ ભૂમિ પરથી ૩૦+ countries — premium મસાલા, ધાન્ય, ઓર્ગેનિક ઉત્પાદ.",
    footer_company: "કંપની", footer_products: "ઉત્પાદનો", footer_support: "સહાય",
    footer_get_in_touch: "સંપર્ક કરો", footer_rights: "સર્વ અધિકારો સુરક્ષિત.",
    fab_label: "WhatsApp પર ચેટ કરો",
  },
  ta: {
    nav_home: "முகப்பு", nav_products: "தயாரிப்புகள்", nav_about: "எங்களை பற்றி", nav_contact: "தொடர்பு",
    nav_get_quote: "மேற்கோள் பெறுக", nav_search: "தேடு",
    hero_headline1: "சிறந்த", hero_headline2: "விவசாய பொருட்கள்", hero_tagline: "உலகிற்காக.",
    hero_subtext: "கொல்லாப்பூரின் வளமான மண்ணிலிருந்து ३०+ நாடுகளுக்கு — சிறந்த மசாலாக்கள், தானியங்கள் மற்றும் இயற்கை பொருட்கள்.",
    hero_cta_explore: "பொருட்களை ஆராயுங்கள்", hero_cta_contact: "தொடர்பு கொள்க",
    hero_stat_years: "ஆண்டுகள் வணிகம்", hero_stat_countries: "நாடுகள் சேவை",
    hero_stat_products: "சிறந்த பொருட்கள்", hero_stat_farmers: "விவசாயி கூட்டாளிகள்",
    fp_section_label: "எங்கள் வரிசை", fp_section_title: "சிறப்பு தயாரிப்புகள்",
    fp_view_all: "அனைத்து 15 பொருட்களையும் காண்க", fp_featured_label: "சிறப்பு தயாரிப்பு",
    fp_view_details: "விவரங்கள் காண்க", fp_bulk_inquiry: "மொத்த விசாரணை",
    wcu_label: "எங்களை ஏன் தேர்வு செய்க", wcu_title1: "ஒவ்வொரு ஏற்றுமதியின் பின்னணியில்", wcu_title2: "எங்கள் வாக்குறுதி",
    wcu_subtext: "நாங்கள் வெறும் பொருட்களை அனுப்புவதில்லை — கொல்லாப்பூர் விவசாய சமூகங்களின் நம்பிக்கையையும் பாரம்பரியத்தையும் ஏற்றுமதி செய்கிறோம்.",
    wcu_f1_title: "இயற்கை மற்றும் நிலையான", wcu_f1_desc: "மஹாராஷ்டிரா முழுவதும் சான்றளிக்கப்பட்ட இயற்கை பண்ணைகளிலிருந்து.",
    wcu_f2_title: "சர்வதேச தரநிலைகள்", wcu_f2_desc: "FSSAI, ISO சான்றளிக்கப்பட்டது. மண்ணிலிருந்து கப்பல் வரை சோதனை.",
    wcu_f3_title: "விவசாயி மேம்பாடு", wcu_f3_desc: "500+ சிறிய விவசாயி குடும்பங்களுடன் நேரடி கூட்டாண்மை.",
    wcu_f4_title: "நேரடி ஏற்றுமதி", wcu_f4_desc: "இடைத்தரகர்கள் இல்லை — உலக வாங்குபவர்களுக்கு போட்டி விலை.",
    test_label: "வாடிக்கையாளர் நம்பிக்கை", test_title1: "எங்கள் கூட்டாளிகளிடமிருந்து", test_title2: "வார்த்தைகள்",
    cta_label: "ஆதாரம் பெற தயாரா?", cta_title: "உங்கள் தேவைகள் பற்றி பேசலாம்.",
    cta_subtext: "வாங்குபவர், விநியோகஸ்தர் அல்லது சில்லறை வணிகர் — உங்கள் சந்தைக்கேற்ற பொருள் மற்றும் பேக்கேஜிங் கண்டறிவோம்.",
    cta_inquiry: "விசாரணை அனுப்புக", cta_whatsapp: "WhatsApp செய்யுங்கள்",
    cert_label: "சான்றளிக்கப்பட்டு இணக்கமானது",
    faq_label: "கேள்விகள் உள்ளதா?", faq_title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faq_subtext: "Kille Bhudargad Agro உடன் ஆதாரம், கப்பல் மற்றும் பணி பற்றி தெரிந்துகொள்ள. பதில் கிடைக்கவில்லையா?",
    faq_contact_link: "எங்கள் குழுவை தொடர்பு கொள்க →",
    faq_q1: "உங்கள் தயாரிப்புகளுக்கு என்ன சான்றிதழ்கள் உள்ளன?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "மொத்த மற்றும் தனிப்பட்ட லேபிள் பேக்கேஜிங் கிடைக்குமா?", faq_a2: "ஆம். மொத்தமாகவும் சில்லறை தயார் தனிப்பட்ட லேபிள் பேக்குகளும் கிடைக்கும்.",
    faq_q3: "எந்த நாடுகளுக்கு ஏற்றுமதி செய்கிறீர்கள்?", faq_a3: "ஐரோப்பா, வட அமெரிக்கா, மத்திய கிழக்கு மற்றும் தென்கிழக்கு ஆசியாவில் 30+ நாடுகள்.",
    faq_q4: "மொத்த ஆர்டர் எவ்வாறு வழங்குவது?", faq_a4: "தொடர்பு பக்கத்தில் படிவத்தை பயன்படுத்துங்கள் அல்லது WhatsApp: +91 91565 19393.",
    faq_q5: "வழக்கமான முன்னணி நேரம் என்ன?", faq_a5: "7–14 வணிக நாட்கள்.",
    faq_q6: "பெரிய ஆர்டருக்கு முன் மாதிரிகள் கிடைக்குமா?", faq_a6: "ஆம், கோரிக்கையின் பேரில் மாதிரிகள் கிடைக்கும்.",
    footer_tagline: "பூதர்காட்டின் வளமான நிலங்களிலிருந்து 30+ நாடுகளுக்கு — சிறந்த மசாலாக்கள், தானியங்கள்.",
    footer_company: "நிறுவனம்", footer_products: "தயாரிப்புகள்", footer_support: "ஆதரவு",
    footer_get_in_touch: "தொடர்பு கொள்க", footer_rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    fab_label: "WhatsApp இல் அரட்டை அடிக்க",
  },
  te: {
    nav_home: "హోమ్", nav_products: "ఉత్పత్తులు", nav_about: "మా గురించి", nav_contact: "సంప్రదించండి",
    nav_get_quote: "కోటేషన్ పొందండి", nav_search: "శోధించండి",
    hero_headline1: "ప్రీమియం", hero_headline2: "వ్యవసాయ ఉత్పత్తులు", hero_tagline: "ప్రపంచానికి.",
    hero_subtext: "కొల్హాపూర్ సారవంతమైన నేల నుండి 30+ దేశాలకు — అత్యుత్తమ మసాలాలు, ధాన్యాలు మరియు సేంద్రీయ వస్తువులు.",
    hero_cta_explore: "ఉత్పత్తులు అన్వేషించండి", hero_cta_contact: "సంప్రదించండి",
    hero_stat_years: "వ్యాపార సంవత్సరాలు", hero_stat_countries: "సేవ చేసిన దేశాలు",
    hero_stat_products: "ప్రీమియం ఉత్పత్తులు", hero_stat_farmers: "రైతు భాగస్వాములు",
    fp_section_label: "మా శ్రేణి", fp_section_title: "విశేష ఉత్పత్తులు",
    fp_view_all: "అన్ని 15 ఉత్పత్తులు చూడండి", fp_featured_label: "విశేష ఉత్పత్తి",
    fp_view_details: "వివరాలు చూడండి", fp_bulk_inquiry: "బల్క్ విచారణ",
    wcu_label: "మమ్మల్నే ఎందుకు ఎంచుకోవాలి", wcu_title1: "ప్రతి ఎగుమతి వెనక", wcu_title2: "మా వాగ్దానం",
    wcu_subtext: "మేము కేవలం ఉత్పత్తులు పంపించము — కొల్హాపూర్ వ్యవసాయ సమాజాల నమ్మకం, వారసత్వం ఎగుమతి చేస్తాం.",
    wcu_f1_title: "సహజ మరియు స్థిరమైన", wcu_f1_desc: "మహారాష్ట్ర అంతటా ధృవీకృత సేంద్రీయ వ్యవసాయం.",
    wcu_f2_title: "అంతర్జాతీయ ప్రమాణాలు", wcu_f2_desc: "FSSAI, ISO ధృవీకృతం. నేల నుండి రవాణా వరకు పరీక్ష.",
    wcu_f3_title: "రైతు సాధికారత", wcu_f3_desc: "500+ చిన్న రైతు కుటుంబాలతో ప్రత్యక్ష భాగస్వామ్యం.",
    wcu_f4_title: "ప్రత్యక్ష ఎగుమతి", wcu_f4_desc: "మధ్యవర్తులు లేరు — గ్లోబల్ కొనుగోలుదారులకు పోటీ ధరలు.",
    test_label: "కస్టమర్ విశ్వాసం", test_title1: "మా భాగస్వాముల", test_title2: "మాటలు",
    cta_label: "సోర్స్ చేయడానికి సిద్ధంగా ఉన్నారా?", cta_title: "మీ అవసరాల గురించి మాట్లాడుదాం.",
    cta_subtext: "మీరు కొనుగోలుదారు, పంపిణీదారు లేదా చిల్లర వ్యాపారి — మీ మార్కెట్‌కు సరైన ఉత్పత్తి కనుగొంటాం.",
    cta_inquiry: "విచారణ పంపండి", cta_whatsapp: "WhatsApp చేయండి",
    cert_label: "ధృవీకృత మరియు అనుగుణంగా",
    faq_label: "ప్రశ్నలు ఉన్నాయా?", faq_title: "తరచుగా అడిగే ప్రశ్నలు",
    faq_subtext: "Kille Bhudargad Agro తో సోర్సింగ్, షిప్పింగ్ గురించి అవసరమైన సమాచారం. సమాధానం దొరకలేదా?",
    faq_contact_link: "మా టీమ్‌ని సంప్రదించండి →",
    faq_q1: "మీ ఉత్పత్తులకు ఏ సర్టిఫికేషన్లు ఉన్నాయి?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "బల్క్ మరియు ప్రైవేట్-లేబల్ ప్యాకేజింగ్ అందుబాటులో ఉందా?", faq_a2: "అవును, బల్క్ మరియు రిటైల్-రెడీ ప్రైవేట్-లేబల్ ప్యాక్‌లు.",
    faq_q3: "మీరు ఏ దేశాలకు ఎగుమతి చేస్తారు?", faq_a3: "యూరప్, ఉత్తర అమెరికా, మధ్యప్రాచ్యం, ఆగ్నేయ ఆసియాలో 30+ దేశాలు.",
    faq_q4: "బల్క్ ఆర్డర్ ఎలా ఇవ్వాలి?", faq_a4: "సంప్రదింపుల పేజీలో ఫారమ్ ఉపయోగించండి లేదా WhatsApp: +91 91565 19393.",
    faq_q5: "సాధారణ లీడ్ టైమ్ ఎంత?", faq_a5: "7–14 వ్యాపార రోజులు.",
    faq_q6: "పెద్ద ఆర్డర్ ముందు నమూనాలు అందుబాటులో ఉన్నాయా?", faq_a6: "అవును, అభ్యర్థనపై నమూనాలు అందుబాటులో ఉన్నాయి.",
    footer_tagline: "భుదరగడ్ సారవంతమైన భూముల నుండి 30+ దేశాలకు — ప్రీమియం మసాలాలు, ధాన్యాలు.",
    footer_company: "కంపెనీ", footer_products: "ఉత్పత్తులు", footer_support: "మద్దతు",
    footer_get_in_touch: "సంప్రదించండి", footer_rights: "అన్ని హక్కులు రిజర్వు చేయబడ్డాయి.",
    fab_label: "WhatsApp లో చాట్ చేయండి",
  },
  kn: {
    nav_home: "ಹೋಮ್", nav_products: "ಉತ್ಪನ್ನಗಳು", nav_about: "ನಮ್ಮ ಬಗ್ಗೆ", nav_contact: "ಸಂಪರ್ಕಿಸಿ",
    nav_get_quote: "ಕೋಟೇಶನ್ ಪಡೆಯಿರಿ", nav_search: "ಹುಡುಕಿ",
    hero_headline1: "ಪ್ರೀಮಿಯಂ", hero_headline2: "ಕೃಷಿ ಉತ್ಪನ್ನಗಳು", hero_tagline: "ಜಗತ್ತಿಗಾಗಿ.",
    hero_subtext: "ಕೊಲ್ಹಾಪುರದ ಫಲವತ್ತಾದ ಮಣ್ಣಿನಿಂದ 30+ ದೇಶಗಳಿಗೆ — ಅತ್ಯುತ್ತಮ ಮಸಾಲೆ, ಧಾನ್ಯ ಮತ್ತು ಸಾವಯವ ಸರಕುಗಳು.",
    hero_cta_explore: "ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ", hero_cta_contact: "ಸಂಪರ್ಕಿಸಿ",
    hero_stat_years: "ವ್ಯಾಪಾರದ ವರ್ಷಗಳು", hero_stat_countries: "ಸೇವಿಸಿದ ದೇಶಗಳು",
    hero_stat_products: "ಪ್ರೀಮಿಯಂ ಉತ್ಪನ್ನಗಳು", hero_stat_farmers: "ರೈತ ಪಾಲುದಾರರು",
    fp_section_label: "ನಮ್ಮ ಶ್ರೇಣಿ", fp_section_title: "ವಿಶೇಷ ಉತ್ಪನ್ನಗಳು",
    fp_view_all: "ಎಲ್ಲಾ 15 ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ", fp_featured_label: "ವಿಶೇಷ ಉತ್ಪನ್ನ",
    fp_view_details: "ವಿವರಗಳನ್ನು ನೋಡಿ", fp_bulk_inquiry: "ಬಲ್ಕ್ ವಿಚಾರಣೆ",
    wcu_label: "ನಮ್ಮನ್ನೇ ಏಕೆ ಆರಿಸಬೇಕು", wcu_title1: "ಪ್ರತಿ ರಫ್ತಿನ ಹಿಂದೆ", wcu_title2: "ನಮ್ಮ ಭರವಸೆ",
    wcu_subtext: "ನಾವು ಕೇವಲ ಉತ್ಪನ್ನಗಳನ್ನು ಕಳುಹಿಸುವುದಿಲ್ಲ — ಕೊಲ್ಹಾಪುರ ರೈತ ಸಮುದಾಯಗಳ ನಂಬಿಕೆ ರಫ್ತು ಮಾಡುತ್ತೇವೆ.",
    wcu_f1_title: "ನೈಸರ್ಗಿಕ ಮತ್ತು ಸುಸ್ಥಿರ", wcu_f1_desc: "ಮಹಾರಾಷ್ಟ್ರದ ಸಾವಯವ ಕೃಷಿಯಿಂದ.",
    wcu_f2_title: "ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಾನದಂಡಗಳು", wcu_f2_desc: "FSSAI, ISO ಪ್ರಮಾಣೀಕೃತ.",
    wcu_f3_title: "ರೈತ ಸಬಲೀಕರಣ", wcu_f3_desc: "500+ ರೈತ ಕುಟುಂಬಗಳೊಂದಿಗೆ ನೇರ ಪಾಲುದಾರಿಕೆ.",
    wcu_f4_title: "ನೇರ ರಫ್ತು", wcu_f4_desc: "ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ — ಸ್ಪರ್ಧಾತ್ಮಕ ಬೆಲೆ.",
    test_label: "ಗ್ರಾಹಕ ವಿಶ್ವಾಸ", test_title1: "ನಮ್ಮ ಪಾಲುದಾರರ", test_title2: "ಮಾತುಗಳು",
    cta_label: "ಮೂಲ ಸಂಗ್ರಹಕ್ಕೆ ಸಿದ್ಧರಾಗಿದ್ದೀರಾ?", cta_title: "ನಿಮ್ಮ ಅಗತ್ಯಗಳ ಬಗ್ಗೆ ಮಾತಾಡೋಣ.",
    cta_subtext: "ಖರೀದಿದಾರ, ವಿತರಕ ಅಥವಾ ಚಿಲ್ಲರೆ — ನಿಮ್ಮ ಮಾರುಕಟ್ಟೆಗೆ ಸರಿಯಾದ ಉತ್ಪನ್ನ ಕಂಡುಕೊಳ್ಳುತ್ತೇವೆ.",
    cta_inquiry: "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ", cta_whatsapp: "WhatsApp ಮಾಡಿ",
    cert_label: "ಪ್ರಮಾಣೀಕೃತ ಮತ್ತು ಅನುಸರಣೀಯ",
    faq_label: "ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?", faq_title: "ಆಗಾಗ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
    faq_subtext: "Kille Bhudargad Agro ಜೊತೆ ಕೆಲಸ ಮಾಡುವ ಬಗ್ಗೆ ತಿಳಿಯಬೇಕಾದ ಎಲ್ಲವೂ. ಉತ್ತರ ಸಿಗಲಿಲ್ಲವೇ?",
    faq_contact_link: "ನಮ್ಮ ತಂಡ ಸಂಪರ್ಕಿಸಿ →",
    faq_q1: "ಉತ್ಪನ್ನಗಳಿಗೆ ಯಾವ ಪ್ರಮಾಣಪತ್ರಗಳಿವೆ?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "ಬಲ್ಕ್ ಮತ್ತು ಪ್ರೈವೇಟ್-ಲೇಬಲ್ ಪ್ಯಾಕೇಜಿಂಗ್ ಲಭ್ಯವಿದೆಯೇ?", faq_a2: "ಹೌದು.",
    faq_q3: "ಯಾವ ದೇಶಗಳಿಗೆ ರಫ್ತು ಮಾಡುತ್ತೀರಿ?", faq_a3: "30+ ದೇಶಗಳಿಗೆ.",
    faq_q4: "ಬಲ್ಕ್ ಆರ್ಡರ್ ಹೇಗೆ ನೀಡಬೇಕು?", faq_a4: "ಸಂಪರ್ಕ ಪುಟ ಅಥವಾ WhatsApp: +91 91565 19393.",
    faq_q5: "ಲೀಡ್ ಟೈಮ್ ಎಷ್ಟು?", faq_a5: "7–14 ವ್ಯಾಪಾರ ದಿನಗಳು.",
    faq_q6: "ಮಾದರಿಗಳು ಲಭ್ಯವಿವೆಯೇ?", faq_a6: "ಹೌದು, ವಿನಂತಿ ಮೇರೆಗೆ.",
    footer_tagline: "ಭುದರಗಡ ಫಲವತ್ತಾದ ಭೂಮಿಯಿಂದ 30+ ದೇಶಗಳಿಗೆ — ಪ್ರೀಮಿಯಂ ಮಸಾಲೆ, ಧಾನ್ಯ.",
    footer_company: "ಕಂಪನಿ", footer_products: "ಉತ್ಪನ್ನಗಳು", footer_support: "ಬೆಂಬಲ",
    footer_get_in_touch: "ಸಂಪರ್ಕಿಸಿ", footer_rights: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    fab_label: "WhatsApp ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ",
  },
  bn: {
    nav_home: "হোম", nav_products: "পণ্যসমূহ", nav_about: "আমাদের সম্পর্কে", nav_contact: "যোগাযোগ",
    nav_get_quote: "কোটেশন পান", nav_search: "খুঁজুন",
    hero_headline1: "প্রিমিয়াম", hero_headline2: "কৃষি পণ্য", hero_tagline: "বিশ্বের জন্য।",
    hero_subtext: "কোলহাপুরের উর্বর মাটি থেকে ৩০+ দেশে — সেরা মশলা, শস্য এবং জৈব পণ্য।",
    hero_cta_explore: "পণ্য অন্বেষণ করুন", hero_cta_contact: "যোগাযোগ করুন",
    hero_stat_years: "বছরের ব্যবসা", hero_stat_countries: "দেশে সেবা",
    hero_stat_products: "প্রিমিয়াম পণ্য", hero_stat_farmers: "কৃষক অংশীদার",
    fp_section_label: "আমাদের পরিসর", fp_section_title: "বিশেষ পণ্যসমূহ",
    fp_view_all: "সব ১৫টি পণ্য দেখুন", fp_featured_label: "বিশেষ পণ্য",
    fp_view_details: "বিস্তারিত দেখুন", fp_bulk_inquiry: "বাল্ক অনুসন্ধান",
    wcu_label: "আমাদের কেন বেছে নেবেন", wcu_title1: "প্রতিটি রফতানির পেছনে", wcu_title2: "আমাদের প্রতিশ্রুতি",
    wcu_subtext: "আমরা শুধু পণ্য পাঠাই না — কোলহাপুরের কৃষক সম্প্রদায়ের বিশ্বাস ও ঐতিহ্য রফতানি করি।",
    wcu_f1_title: "প্রাকৃতিক ও টেকসই", wcu_f1_desc: "মহারাষ্ট্রের প্রত্যয়িত জৈব খামার থেকে।",
    wcu_f2_title: "আন্তর্জাতিক মান", wcu_f2_desc: "FSSAI, ISO প্রত্যয়িত।",
    wcu_f3_title: "কৃষক ক্ষমতায়ন", wcu_f3_desc: "৫০০+ কৃষক পরিবারের সাথে সরাসরি অংশীদারিত্ব।",
    wcu_f4_title: "সরাসরি রফতানি", wcu_f4_desc: "মধ্যস্থতাকারী নেই — প্রতিযোগিতামূলক মূল্য।",
    test_label: "গ্রাহক বিশ্বাস", test_title1: "আমাদের অংশীদারদের", test_title2: "কথা",
    cta_label: "উৎস করতে প্রস্তুত?", cta_title: "আপনার প্রয়োজনীয়তা নিয়ে কথা বলুন।",
    cta_subtext: "ক্রেতা, পরিবেশক বা খুচরা বিক্রেতা — আপনার বাজারের জন্য সঠিক পণ্য খুঁজে পাব।",
    cta_inquiry: "অনুসন্ধান পাঠান", cta_whatsapp: "WhatsApp করুন",
    cert_label: "প্রত্যয়িত এবং সম্মত",
    faq_label: "প্রশ্ন আছে?", faq_title: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলি",
    faq_subtext: "Kille Bhudargad Agro-এর সাথে কাজ সম্পর্কে জানার সব কিছু। উত্তর পাননি?",
    faq_contact_link: "আমাদের দলের সাথে যোগাযোগ করুন →",
    faq_q1: "আপনার পণ্যে কোন সার্টিফিকেশন আছে?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "বাল্ক ও প্রাইভেট-লেবেল প্যাকেজিং পাওয়া যায়?", faq_a2: "হ্যাঁ।",
    faq_q3: "কোন দেশে রফতানি করেন?", faq_a3: "৩০+ দেশে।",
    faq_q4: "বাল্ক অর্ডার কিভাবে দেবেন?", faq_a4: "যোগাযোগ পাতার ফর্ম বা WhatsApp: +91 91565 19393।",
    faq_q5: "লিড টাইম কত?", faq_a5: "৭–১৪ কার্যদিবস।",
    faq_q6: "নমুনা পাওয়া যায়?", faq_a6: "হ্যাঁ, অনুরোধে।",
    footer_tagline: "ভুদরগড়ের উর্বর জমি থেকে ৩০+ দেশে — প্রিমিয়াম মশলা, শস্য ও জৈব পণ্য।",
    footer_company: "কোম্পানি", footer_products: "পণ্যসমূহ", footer_support: "সহায়তা",
    footer_get_in_touch: "যোগাযোগ করুন", footer_rights: "সর্বস্বত্ব সংরক্ষিত।",
    fab_label: "WhatsApp-এ চ্যাট করুন",
  },
  pa: {
    nav_home: "ਹੋਮ", nav_products: "ਉਤਪਾਦ", nav_about: "ਸਾਡੇ ਬਾਰੇ", nav_contact: "ਸੰਪਰਕ",
    nav_get_quote: "ਕੋਟੇਸ਼ਨ ਲਓ", nav_search: "ਖੋਜੋ",
    hero_headline1: "ਪ੍ਰੀਮੀਅਮ", hero_headline2: "ਖੇਤੀ ਉਤਪਾਦ", hero_tagline: "ਦੁਨੀਆ ਲਈ।",
    hero_subtext: "ਕੋਲਹਾਪੁਰ ਦੀ ਉਪਜਾਊ ਧਰਤੀ ਤੋਂ ੩੦+ ਦੇਸ਼ਾਂ ਤੱਕ — ਸਭ ਤੋਂ ਵਧੀਆ ਮਸਾਲੇ, ਅਨਾਜ ਅਤੇ ਜੈਵਿਕ ਵਸਤੂਆਂ।",
    hero_cta_explore: "ਉਤਪਾਦ ਦੇਖੋ", hero_cta_contact: "ਸੰਪਰਕ ਕਰੋ",
    hero_stat_years: "ਸਾਲਾਂ ਦਾ ਕਾਰੋਬਾਰ", hero_stat_countries: "ਦੇਸ਼ਾਂ ਦੀ ਸੇਵਾ",
    hero_stat_products: "ਪ੍ਰੀਮੀਅਮ ਉਤਪਾਦ", hero_stat_farmers: "ਕਿਸਾਨ ਭਾਈਵਾਲ",
    fp_section_label: "ਸਾਡੀ ਲੜੀ", fp_section_title: "ਵਿਸ਼ੇਸ਼ ਉਤਪਾਦ",
    fp_view_all: "ਸਾਰੇ ੧੫ ਉਤਪਾਦ ਦੇਖੋ", fp_featured_label: "ਵਿਸ਼ੇਸ਼ ਉਤਪਾਦ",
    fp_view_details: "ਵੇਰਵੇ ਦੇਖੋ", fp_bulk_inquiry: "ਬਲਕ ਪੁੱਛ-ਗਿੱਛ",
    wcu_label: "ਸਾਨੂੰ ਕਿਉਂ ਚੁਣੋ", wcu_title1: "ਹਰ ਨਿਰਯਾਤ ਦੇ ਪਿੱਛੇ", wcu_title2: "ਸਾਡਾ ਵਾਅਦਾ",
    wcu_subtext: "ਅਸੀਂ ਸਿਰਫ਼ ਉਤਪਾਦ ਨਹੀਂ ਭੇਜਦੇ — ਕੋਲਹਾਪੁਰ ਦੇ ਕਿਸਾਨ ਭਾਈਚਾਰੇ ਦਾ ਭਰੋਸਾ ਨਿਰਯਾਤ ਕਰਦੇ ਹਾਂ।",
    wcu_f1_title: "ਕੁਦਰਤੀ ਅਤੇ ਟਿਕਾਊ", wcu_f1_desc: "ਮਹਾਰਾਸ਼ਟਰ ਦੇ ਜੈਵਿਕ ਖੇਤਾਂ ਤੋਂ।",
    wcu_f2_title: "ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਿਆਰ", wcu_f2_desc: "FSSAI, ISO ਪ੍ਰਮਾਣਿਤ।",
    wcu_f3_title: "ਕਿਸਾਨ ਸਸ਼ਕਤੀਕਰਨ", wcu_f3_desc: "੫੦੦+ ਛੋਟੇ ਕਿਸਾਨ ਪਰਿਵਾਰਾਂ ਨਾਲ ਸਿੱਧੀ ਭਾਈਵਾਲੀ।",
    wcu_f4_title: "ਸਿੱਧਾ ਨਿਰਯਾਤ", wcu_f4_desc: "ਕੋਈ ਵਿਚੋਲੇ ਨਹੀਂ — ਮੁਕਾਬਲੇਬਾਜ਼ ਕੀਮਤਾਂ।",
    test_label: "ਗਾਹਕ ਭਰੋਸਾ", test_title1: "ਸਾਡੇ ਭਾਈਵਾਲਾਂ ਦੇ", test_title2: "ਸ਼ਬਦ",
    cta_label: "ਸਰੋਤ ਕਰਨ ਲਈ ਤਿਆਰ?", cta_title: "ਆਪਣੀਆਂ ਲੋੜਾਂ ਬਾਰੇ ਗੱਲ ਕਰੋ।",
    cta_subtext: "ਖਰੀਦਦਾਰ, ਵਿਤਰਕ ਜਾਂ ਪ੍ਰਚੂਨ ਵਿਕ੍ਰੇਤਾ — ਤੁਹਾਡੀ ਮਾਰਕੀਟ ਲਈ ਸਹੀ ਉਤਪਾਦ ਲੱਭਾਂਗੇ।",
    cta_inquiry: "ਪੁੱਛ-ਗਿੱਛ ਭੇਜੋ", cta_whatsapp: "WhatsApp ਕਰੋ",
    cert_label: "ਪ੍ਰਮਾਣਿਤ ਅਤੇ ਅਨੁਕੂਲ",
    faq_label: "ਸਵਾਲ ਹਨ?", faq_title: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
    faq_subtext: "Kille Bhudargad Agro ਨਾਲ ਕੰਮ ਕਰਨ ਬਾਰੇ ਜਾਣੋ। ਜਵਾਬ ਨਹੀਂ ਮਿਲਿਆ?",
    faq_contact_link: "ਸਾਡੀ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ →",
    faq_q1: "ਤੁਹਾਡੇ ਉਤਪਾਦਾਂ 'ਤੇ ਕਿਹੜੇ ਸਰਟੀਫਿਕੇਟ ਹਨ?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "ਬਲਕ ਅਤੇ ਪ੍ਰਾਈਵੇਟ-ਲੇਬਲ ਪੈਕੇਜਿੰਗ ਉਪਲਬਧ ਹੈ?", faq_a2: "ਹਾਂ।",
    faq_q3: "ਕਿਹੜੇ ਦੇਸ਼ਾਂ ਨੂੰ ਨਿਰਯਾਤ ਕਰਦੇ ਹੋ?", faq_a3: "੩੦+ ਦੇਸ਼ਾਂ ਨੂੰ।",
    faq_q4: "ਬਲਕ ਆਰਡਰ ਕਿਵੇਂ ਦੇਣਾ ਹੈ?", faq_a4: "ਸੰਪਰਕ ਪੰਨੇ ਦਾ ਫਾਰਮ ਜਾਂ WhatsApp: +91 91565 19393।",
    faq_q5: "ਲੀਡ ਟਾਈਮ ਕਿੰਨਾ ਹੈ?", faq_a5: "੭–੧੪ ਕਾਰੋਬਾਰੀ ਦਿਨ।",
    faq_q6: "ਨਮੂਨੇ ਉਪਲਬਧ ਹਨ?", faq_a6: "ਹਾਂ, ਬੇਨਤੀ 'ਤੇ।",
    footer_tagline: "ਭੁਦਰਗੜ੍ਹ ਦੀ ਉਪਜਾਊ ਜ਼ਮੀਨ ਤੋਂ ੩੦+ ਦੇਸ਼ਾਂ ਤੱਕ — ਪ੍ਰੀਮੀਅਮ ਮਸਾਲੇ ਅਤੇ ਅਨਾਜ।",
    footer_company: "ਕੰਪਨੀ", footer_products: "ਉਤਪਾਦ", footer_support: "ਸਹਾਇਤਾ",
    footer_get_in_touch: "ਸੰਪਰਕ ਕਰੋ", footer_rights: "ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ ਹਨ।",
    fab_label: "WhatsApp 'ਤੇ ਚੈਟ ਕਰੋ",
  },
  nl: {
    nav_home: "Home", nav_products: "Producten", nav_about: "Over ons", nav_contact: "Contact",
    nav_get_quote: "Offerte aanvragen", nav_search: "Zoeken",
    hero_headline1: "Premium", hero_headline2: "Landbouwproducten", hero_tagline: "voor de wereld.",
    hero_subtext: "Van de vruchtbare grond van Kolhapur naar meer dan 30 landen — de beste specerijen, granen en biologische producten.",
    hero_cta_explore: "Producten bekijken", hero_cta_contact: "Neem contact op",
    hero_stat_years: "Jaar ervaring", hero_stat_countries: "Bediende landen", hero_stat_products: "Premiumproducten", hero_stat_farmers: "Boerenpartners",
    fp_section_label: "Ons assortiment", fp_section_title: "Uitgelichte producten", fp_view_all: "Bekijk alle 15 producten", fp_featured_label: "Uitgelicht product", fp_view_details: "Details bekijken", fp_bulk_inquiry: "Bulk-aanvraag",
    wcu_label: "Waarom voor ons kiezen", wcu_title1: "De belofte achter", wcu_title2: "elke export", wcu_subtext: "We verzenden niet alleen producten — we exporteren het vertrouwen en erfgoed van de landbouwgemeenschappen van Kolhapur.",
    wcu_f1_title: "Natuurlijk en duurzaam", wcu_f1_desc: "Elk product is herleidbaar tot gecertificeerde biologische boerderijen.", wcu_f2_title: "Internationale normen", wcu_f2_desc: "FSSAI- en ISO-gecertificeerd.", wcu_f3_title: "Boeren versterken", wcu_f3_desc: "Directe samenwerkingen met meer dan 500 boerengezinnen.", wcu_f4_title: "Directe export", wcu_f4_desc: "Geen tussenpersonen — concurrerende prijzen.",
    test_label: "Vertrouwen van klanten", test_title1: "Woorden van", test_title2: "onze partners", cta_label: "Klaar om in te kopen?", cta_title: "Laten we uw behoeften bespreken.", cta_subtext: "Voor kopers, distributeurs en retailers vinden we het juiste product en de juiste verpakking.", cta_inquiry: "Stuur een aanvraag", cta_whatsapp: "WhatsApp ons", cert_label: "Gecertificeerd en conform", faq_label: "Vragen?", faq_title: "Veelgestelde vragen", faq_subtext: "Alles over inkopen, verzending en samenwerken met Kille Bhudargad Agro.", faq_contact_link: "Neem contact op met ons team →", footer_tagline: "Van de vruchtbare grond van Bhudargad naar meer dan 30 landen — premium specerijen, granen en biologische producten.", footer_company: "Bedrijf", footer_products: "Producten", footer_support: "Ondersteuning", footer_get_in_touch: "Neem contact op", footer_rights: "Alle rechten voorbehouden.", fab_label: "Chat via WhatsApp",
  },
  ru: {
    nav_home: "Главная", nav_products: "Продукты", nav_about: "О компании", nav_contact: "Контакты",
    nav_get_quote: "Получить предложение", nav_search: "Поиск",
    hero_headline1: "Премиальные", hero_headline2: "агропродукты", hero_tagline: "для всего мира.",
    hero_subtext: "С плодородных земель Колхапура в более чем 30 стран — лучшие специи, зерно и органическая продукция.",
    hero_cta_explore: "Посмотреть продукты", hero_cta_contact: "Связаться с нами",
    hero_stat_years: "Лет работы", hero_stat_countries: "Стран обслуживания", hero_stat_products: "Премиальных продуктов", hero_stat_farmers: "Фермеров-партнёров",
    fp_section_label: "Наш ассортимент", fp_section_title: "Рекомендуемые продукты", fp_view_all: "Все 15 продуктов", fp_featured_label: "Рекомендуемый продукт", fp_view_details: "Подробнее", fp_bulk_inquiry: "Оптовый запрос",
    wcu_label: "Почему выбирают нас", wcu_title1: "Обещание за", wcu_title2: "каждым экспортом", wcu_subtext: "Мы не просто отправляем продукты — мы экспортируем доверие и наследие фермерских сообществ Колхапура.",
    wcu_f1_title: "Натурально и устойчиво", wcu_f1_desc: "Каждый продукт отслеживается до сертифицированных органических ферм.", wcu_f2_title: "Международные стандарты", wcu_f2_desc: "Сертификация FSSAI и ISO.", wcu_f3_title: "Поддержка фермеров", wcu_f3_desc: "Прямое партнёрство с более чем 500 фермерскими семьями.", wcu_f4_title: "Прямой экспорт", wcu_f4_desc: "Без посредников — конкурентные цены.",
    test_label: "Доверие клиентов", test_title1: "Слова наших", test_title2: "партнёров", cta_label: "Готовы к закупке?", cta_title: "Обсудим ваши требования.", cta_subtext: "Покупателям, дистрибьюторам и ритейлерам мы подберём нужный продукт и упаковку.", cta_inquiry: "Отправить запрос", cta_whatsapp: "Написать в WhatsApp", cert_label: "Сертифицировано и соответствует нормам", faq_label: "Есть вопросы?", faq_title: "Часто задаваемые вопросы", faq_subtext: "Всё о закупках, доставке и работе с Kille Bhudargad Agro.", faq_contact_link: "Связаться с нашей командой →", footer_tagline: "С плодородных земель Бударгада в более чем 30 стран — премиальные специи, зерно и органическая продукция.", footer_company: "Компания", footer_products: "Продукты", footer_support: "Поддержка", footer_get_in_touch: "Связаться", footer_rights: "Все права защищены.", fab_label: "Написать в WhatsApp",
  },
  it: {
    nav_home: "Home", nav_products: "Prodotti", nav_about: "Chi siamo", nav_contact: "Contatti",
    nav_get_quote: "Richiedi un preventivo", nav_search: "Cerca",
    hero_headline1: "Prodotti agricoli", hero_headline2: "premium", hero_tagline: "per il mondo.",
    hero_subtext: "Dalle fertili terre di Kolhapur a oltre 30 paesi — le migliori spezie, cereali e prodotti biologici.",
    hero_cta_explore: "Esplora i prodotti", hero_cta_contact: "Contattaci",
    hero_stat_years: "Anni di attività", hero_stat_countries: "Paesi serviti", hero_stat_products: "Prodotti premium", hero_stat_farmers: "Agricoltori partner",
    fp_section_label: "La nostra gamma", fp_section_title: "Prodotti in evidenza", fp_view_all: "Vedi tutti i 15 prodotti", fp_featured_label: "Prodotto in evidenza", fp_view_details: "Vedi dettagli", fp_bulk_inquiry: "Richiesta all'ingrosso",
    wcu_label: "Perché sceglierci", wcu_title1: "La promessa dietro", wcu_title2: "ogni esportazione", wcu_subtext: "Non spediamo solo prodotti — esportiamo la fiducia e il patrimonio delle comunità agricole di Kolhapur.",
    wcu_f1_title: "Naturale e sostenibile", wcu_f1_desc: "Ogni prodotto è tracciato fino a fattorie biologiche certificate.", wcu_f2_title: "Standard internazionali", wcu_f2_desc: "Certificato FSSAI e ISO.", wcu_f3_title: "Sostegno agli agricoltori", wcu_f3_desc: "Partnership dirette con oltre 500 famiglie di agricoltori.", wcu_f4_title: "Esportazione diretta", wcu_f4_desc: "Senza intermediari — prezzi competitivi.",
    test_label: "Fiducia dei clienti", test_title1: "Le parole dei", test_title2: "nostri partner", cta_label: "Pronto per l'approvvigionamento?", cta_title: "Parliamo delle tue esigenze.", cta_subtext: "Per acquirenti, distributori e rivenditori troviamo il prodotto e l'imballaggio giusti.", cta_inquiry: "Invia una richiesta", cta_whatsapp: "Scrivici su WhatsApp", cert_label: "Certificato e conforme", faq_label: "Hai domande?", faq_title: "Domande frequenti", faq_subtext: "Tutto su approvvigionamento, spedizioni e collaborazione con Kille Bhudargad Agro.", faq_contact_link: "Contatta il nostro team →", footer_tagline: "Dalle fertili terre di Bhudargad a oltre 30 paesi — spezie, cereali e prodotti biologici premium.", footer_company: "Azienda", footer_products: "Prodotti", footer_support: "Supporto", footer_get_in_touch: "Contattaci", footer_rights: "Tutti i diritti riservati.", fab_label: "Chatta su WhatsApp",
  },
  fr: {
    nav_home: "Accueil", nav_products: "Produits", nav_about: "À propos", nav_contact: "Contact",
    nav_get_quote: "Obtenir un devis", nav_search: "Rechercher",
    hero_headline1: "Produits agricoles", hero_headline2: "Premium", hero_tagline: "pour le monde.",
    hero_subtext: "Des terres fertiles de Kolhapur à plus de 30 pays — les meilleures épices, céréales et produits bio sans compromis.",
    hero_cta_explore: "Explorer les produits", hero_cta_contact: "Nous contacter",
    hero_stat_years: "Ans d'activité", hero_stat_countries: "Pays servis",
    hero_stat_products: "Produits premium", hero_stat_farmers: "Agriculteurs partenaires",
    fp_section_label: "Notre gamme", fp_section_title: "Produits vedettes",
    fp_view_all: "Voir les 15 produits", fp_featured_label: "Produit vedette",
    fp_view_details: "Voir les détails", fp_bulk_inquiry: "Demande en gros",
    wcu_label: "Pourquoi nous choisir", wcu_title1: "La promesse derrière", wcu_title2: "chaque exportation",
    wcu_subtext: "Nous n'expédions pas seulement des produits — nous exportons la confiance et le patrimoine naturel de Kolhapur.",
    wcu_f1_title: "Naturel et durable", wcu_f1_desc: "Chaque produit issu de fermes biologiques certifiées du Maharashtra.",
    wcu_f2_title: "Normes internationales", wcu_f2_desc: "Certifié FSSAI, ISO. Testé à chaque étape.",
    wcu_f3_title: "Autonomisation des agriculteurs", wcu_f3_desc: "Partenariats directs avec plus de 500 familles agricoles.",
    wcu_f4_title: "Export direct", wcu_f4_desc: "Pas d'intermédiaires — prix compétitifs.",
    test_label: "Confiance client", test_title1: "Les mots de", test_title2: "nos partenaires",
    cta_label: "Prêt à s'approvisionner ?", cta_title: "Parlons de vos besoins.",
    cta_subtext: "Acheteur, distributeur ou détaillant — nous trouverons le bon produit pour votre marché.",
    cta_inquiry: "Envoyer une demande", cta_whatsapp: "WhatsApp",
    cert_label: "Certifié et conforme",
    faq_label: "Des questions ?", faq_title: "Questions fréquentes",
    faq_subtext: "Tout ce que vous devez savoir sur l'approvisionnement avec Kille Bhudargad Agro. Pas de réponse ?",
    faq_contact_link: "Contactez notre équipe →",
    faq_q1: "Quelles certifications portent vos produits ?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "Proposez-vous un emballage en vrac et sous marque privée ?", faq_a2: "Oui. En vrac et en packs prêts à la vente.",
    faq_q3: "Vers quels pays exportez-vous ?", faq_a3: "Plus de 30 pays en Europe, Amérique du Nord, Moyen-Orient et Asie du Sud-Est.",
    faq_q4: "Comment passer une commande en gros ?", faq_a4: "Via le formulaire de contact ou WhatsApp : +91 91565 19393.",
    faq_q5: "Quel est le délai habituel ?", faq_a5: "7 à 14 jours ouvrables selon le produit et la destination.",
    faq_q6: "Des échantillons sont-ils disponibles ?", faq_a6: "Oui, sur demande.",
    footer_tagline: "Des terres fertiles de Bhudargad à plus de 30 pays — épices, céréales et produits biologiques.",
    footer_company: "Société", footer_products: "Produits", footer_support: "Support",
    footer_get_in_touch: "Nous contacter", footer_rights: "Tous droits réservés.",
    fab_label: "Chattez sur WhatsApp",
  },
  de: {
    nav_home: "Startseite", nav_products: "Produkte", nav_about: "Über uns", nav_contact: "Kontakt",
    nav_get_quote: "Angebot einholen", nav_search: "Suchen",
    hero_headline1: "Premium", hero_headline2: "Agrarprodukte", hero_tagline: "für die Welt.",
    hero_subtext: "Von den fruchtbaren Böden Kolhapurs in 30+ Länder — beste Gewürze, Getreide und Bio-Waren ohne Kompromisse.",
    hero_cta_explore: "Produkte entdecken", hero_cta_contact: "Kontaktieren",
    hero_stat_years: "Jahre im Geschäft", hero_stat_countries: "Belieferte Länder",
    hero_stat_products: "Premium-Produkte", hero_stat_farmers: "Landwirt-Partner",
    fp_section_label: "Unser Sortiment", fp_section_title: "Ausgewählte Produkte",
    fp_view_all: "Alle 15 Produkte anzeigen", fp_featured_label: "Ausgewähltes Produkt",
    fp_view_details: "Details anzeigen", fp_bulk_inquiry: "Großbestellung anfragen",
    wcu_label: "Warum uns wählen", wcu_title1: "Das Versprechen hinter", wcu_title2: "jedem Export",
    wcu_subtext: "Wir liefern nicht nur Produkte — wir exportieren das Vertrauen und Erbe Kolhapurs.",
    wcu_f1_title: "Natürlich & nachhaltig", wcu_f1_desc: "Jedes Produkt aus zertifizierten Bio-Farmen in Maharashtra.",
    wcu_f2_title: "Internationale Standards", wcu_f2_desc: "FSSAI, ISO zertifiziert.",
    wcu_f3_title: "Bauern-Förderung", wcu_f3_desc: "Direktpartnerschaften mit 500+ Kleinbauernfamilien.",
    wcu_f4_title: "Direktexport", wcu_f4_desc: "Keine Zwischenhändler — wettbewerbsfähige Preise.",
    test_label: "Kundenvertrauen", test_title1: "Worte unserer", test_title2: "Partner",
    cta_label: "Bereit zum Einkauf?", cta_title: "Lassen Sie uns über Ihre Anforderungen sprechen.",
    cta_subtext: "Ob Käufer, Händler oder Einzelhändler — wir finden das richtige Produkt für Ihren Markt.",
    cta_inquiry: "Anfrage senden", cta_whatsapp: "WhatsApp schreiben",
    cert_label: "Zertifiziert & konform",
    faq_label: "Fragen?", faq_title: "Häufig gestellte Fragen",
    faq_subtext: "Alles was Sie über Kille Bhudargad Agro wissen müssen. Keine Antwort gefunden?",
    faq_contact_link: "Unser Team kontaktieren →",
    faq_q1: "Welche Zertifizierungen tragen Ihre Produkte?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "Bieten Sie Bulk- und Eigenmarkenverpackung an?", faq_a2: "Ja. Sowohl Bulk als auch verkaufsfertige Eigenmarken-Packs.",
    faq_q3: "In welche Länder exportieren Sie?", faq_a3: "30+ Länder in Europa, Nordamerika, Naher Osten und Südostasien.",
    faq_q4: "Wie gebe ich eine Großbestellung auf?", faq_a4: "Über das Kontaktformular oder WhatsApp: +91 91565 19393.",
    faq_q5: "Wie lange ist die Lieferzeit?", faq_a5: "7–14 Werktage.",
    faq_q6: "Sind Muster erhältlich?", faq_a6: "Ja, auf Anfrage.",
    footer_tagline: "Von den fruchtbaren Böden Bhudargads in 30+ Länder — erstklassige Gewürze, Getreide und Bio-Produkte.",
    footer_company: "Unternehmen", footer_products: "Produkte", footer_support: "Support",
    footer_get_in_touch: "Kontakt aufnehmen", footer_rights: "Alle Rechte vorbehalten.",
    fab_label: "Per WhatsApp chatten",
  },
  es: {
    nav_home: "Inicio", nav_products: "Productos", nav_about: "Nosotros", nav_contact: "Contacto",
    nav_get_quote: "Obtener cotización", nav_search: "Buscar",
    hero_headline1: "Productos agrícolas", hero_headline2: "Premium", hero_tagline: "para el mundo.",
    hero_subtext: "De las fértiles tierras de Kolhapur a más de 30 países — las mejores especias, granos y productos orgánicos sin compromiso.",
    hero_cta_explore: "Explorar productos", hero_cta_contact: "Contáctenos",
    hero_stat_years: "Años en el negocio", hero_stat_countries: "Países atendidos",
    hero_stat_products: "Productos premium", hero_stat_farmers: "Agricultores asociados",
    fp_section_label: "Nuestra gama", fp_section_title: "Productos destacados",
    fp_view_all: "Ver los 15 productos", fp_featured_label: "Producto destacado",
    fp_view_details: "Ver detalles", fp_bulk_inquiry: "Consulta al por mayor",
    wcu_label: "Por qué elegirnos", wcu_title1: "La promesa detrás", wcu_title2: "de cada exportación",
    wcu_subtext: "No solo enviamos productos — exportamos la confianza y el patrimonio natural de las comunidades de Kolhapur.",
    wcu_f1_title: "Natural y sostenible", wcu_f1_desc: "Cada producto rastreado a granjas orgánicas certificadas en Maharashtra.",
    wcu_f2_title: "Estándares internacionales", wcu_f2_desc: "Certificado FSSAI, ISO.",
    wcu_f3_title: "Empoderamiento agrícola", wcu_f3_desc: "Asociaciones directas con más de 500 familias agricultoras.",
    wcu_f4_title: "Exportación directa", wcu_f4_desc: "Sin intermediarios — precios competitivos.",
    test_label: "Confianza del cliente", test_title1: "Palabras de", test_title2: "nuestros socios",
    cta_label: "¿Listo para abastecerse?", cta_title: "Hablemos de sus requisitos.",
    cta_subtext: "Comprador, distribuidor o minorista — encontraremos el producto adecuado para su mercado.",
    cta_inquiry: "Enviar consulta", cta_whatsapp: "WhatsApp",
    cert_label: "Certificado y conforme",
    faq_label: "¿Preguntas?", faq_title: "Preguntas frecuentes",
    faq_subtext: "Todo lo que necesita saber sobre abastecerse con Kille Bhudargad Agro. ¿No encuentra respuesta?",
    faq_contact_link: "Contacte a nuestro equipo →",
    faq_q1: "¿Qué certificaciones tienen sus productos?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "¿Ofrecen embalaje a granel y de marca propia?", faq_a2: "Sí.",
    faq_q3: "¿A qué países exportan?", faq_a3: "Más de 30 países.",
    faq_q4: "¿Cómo hacer un pedido al por mayor?", faq_a4: "Formulario de contacto o WhatsApp: +91 91565 19393.",
    faq_q5: "¿Cuál es el plazo de entrega?", faq_a5: "7–14 días hábiles.",
    faq_q6: "¿Hay muestras disponibles?", faq_a6: "Sí, bajo solicitud.",
    footer_tagline: "De las fértiles tierras de Bhudargad a más de 30 países — especias, granos y productos orgánicos premium.",
    footer_company: "Empresa", footer_products: "Productos", footer_support: "Soporte",
    footer_get_in_touch: "Ponerse en contacto", footer_rights: "Todos los derechos reservados.",
    fab_label: "Chatear por WhatsApp",
  },
  pt: {
    nav_home: "Início", nav_products: "Produtos", nav_about: "Sobre nós", nav_contact: "Contato",
    nav_get_quote: "Obter cotação", nav_search: "Pesquisar",
    hero_headline1: "Produtos agrícolas", hero_headline2: "Premium", hero_tagline: "para o mundo.",
    hero_subtext: "Das terras férteis de Kolhapur para mais de 30 países — as melhores especiarias, grãos e produtos orgânicos.",
    hero_cta_explore: "Explorar produtos", hero_cta_contact: "Fale conosco",
    hero_stat_years: "Anos de negócio", hero_stat_countries: "Países atendidos",
    hero_stat_products: "Produtos premium", hero_stat_farmers: "Parceiros agricultores",
    fp_section_label: "Nossa linha", fp_section_title: "Produtos em destaque",
    fp_view_all: "Ver todos os 15 produtos", fp_featured_label: "Produto em destaque",
    fp_view_details: "Ver detalhes", fp_bulk_inquiry: "Consulta por atacado",
    wcu_label: "Por que nos escolher", wcu_title1: "A promessa por trás", wcu_title2: "de cada exportação",
    wcu_subtext: "Não apenas enviamos produtos — exportamos a confiança e o patrimônio das comunidades rurais de Kolhapur.",
    wcu_f1_title: "Natural e sustentável", wcu_f1_desc: "Cada produto rastreado a fazendas orgânicas certificadas.",
    wcu_f2_title: "Padrões internacionais", wcu_f2_desc: "Certificado FSSAI, ISO.",
    wcu_f3_title: "Empoderamento de agricultores", wcu_f3_desc: "Parcerias diretas com mais de 500 famílias.",
    wcu_f4_title: "Exportação direta", wcu_f4_desc: "Sem intermediários — preços competitivos.",
    test_label: "Confiança do cliente", test_title1: "Palavras dos", test_title2: "nossos parceiros",
    cta_label: "Pronto para abastecer?", cta_title: "Vamos falar sobre seus requisitos.",
    cta_subtext: "Comprador, distribuidor ou varejista — encontraremos o produto certo para o seu mercado.",
    cta_inquiry: "Enviar consulta", cta_whatsapp: "WhatsApp",
    cert_label: "Certificado e em conformidade",
    faq_label: "Tem perguntas?", faq_title: "Perguntas frequentes",
    faq_subtext: "Tudo que você precisa saber sobre fornecimento com a Kille Bhudargad Agro. Não encontrou resposta?",
    faq_contact_link: "Contate nossa equipe →",
    faq_q1: "Quais certificações seus produtos possuem?", faq_a1: "FSSAI, ISO 22000, USDA Organic, EU Organic, Spices Board India.",
    faq_q2: "Oferecem embalagem a granel e marca própria?", faq_a2: "Sim.",
    faq_q3: "Para quais países exportam?", faq_a3: "Mais de 30 países.",
    faq_q4: "Como fazer um pedido a granel?", faq_a4: "Formulário de contato ou WhatsApp: +91 91565 19393.",
    faq_q5: "Qual é o prazo de entrega?", faq_a5: "7–14 dias úteis.",
    faq_q6: "Há amostras disponíveis?", faq_a6: "Sim, mediante solicitação.",
    footer_tagline: "Das terras férteis de Bhudargad para mais de 30 países — especiarias, grãos e produtos orgânicos.",
    footer_company: "Empresa", footer_products: "Produtos", footer_support: "Suporte",
    footer_get_in_touch: "Entre em contato", footer_rights: "Todos os direitos reservados.",
    fab_label: "Converse pelo WhatsApp",
  },
  zh: {
    nav_home: "首页", nav_products: "产品", nav_about: "关于我们", nav_contact: "联系我们",
    nav_get_quote: "获取报价", nav_search: "搜索",
    hero_headline1: "优质", hero_headline2: "农产品", hero_tagline: "走向世界。",
    hero_subtext: "从科尔哈普尔肥沃的土地到30多个国家——最优质的香料、谷物和有机商品，绝不妥协。",
    hero_cta_explore: "浏览产品", hero_cta_contact: "联系我们",
    hero_stat_years: "年经验", hero_stat_countries: "服务国家",
    hero_stat_products: "优质产品", hero_stat_farmers: "农民合作伙伴",
    fp_section_label: "我们的系列", fp_section_title: "特色产品",
    fp_view_all: "查看全部15种产品", fp_featured_label: "特色产品",
    fp_view_details: "查看详情", fp_bulk_inquiry: "大宗询价",
    wcu_label: "为什么选择我们", wcu_title1: "每次出口背后的", wcu_title2: "承诺",
    wcu_subtext: "我们不只是运输产品——我们出口科尔哈普尔农业社区的信任、传统和自然财富。",
    wcu_f1_title: "天然可持续", wcu_f1_desc: "来自马哈拉施特拉邦认证有机农场的每一种产品。",
    wcu_f2_title: "国际标准", wcu_f2_desc: "FSSAI、ISO认证，从土壤到装运的每个阶段均经过测试。",
    wcu_f3_title: "农民赋权", wcu_f3_desc: "与500多个小农家庭建立直接合作关系。",
    wcu_f4_title: "直接出口", wcu_f4_desc: "没有中间商——为全球买家提供有竞争力的价格。",
    test_label: "客户信任", test_title1: "合作伙伴的", test_title2: "心声",
    cta_label: "准备好采购了吗？", cta_title: "让我们谈谈您的需求。",
    cta_subtext: "无论您是买家、分销商还是零售商——我们将为您的市场找到合适的产品和包装。",
    cta_inquiry: "发送询价", cta_whatsapp: "WhatsApp联系",
    cert_label: "认证合规",
    faq_label: "有疑问？", faq_title: "常见问题",
    faq_subtext: "关于从Kille Bhudargad Agro采购的一切信息。没找到答案？",
    faq_contact_link: "联系我们的团队 →",
    faq_q1: "您的产品有哪些认证？", faq_a1: "FSSAI、ISO 22000、USDA有机、欧盟有机、印度香料委员会。",
    faq_q2: "您提供散装和贴牌包装吗？", faq_a2: "是的，散装和零售就绪私标包装均可。",
    faq_q3: "您出口到哪些国家？", faq_a3: "欧洲、北美、中东和东南亚30多个国家。",
    faq_q4: "如何下大宗订单？", faq_a4: "通过联系页面的表单或WhatsApp：+91 91565 19393。",
    faq_q5: "通常的交货期是多久？", faq_a5: "根据产品、数量和目的地，标准交货期为7-14个工作日。",
    faq_q6: "大量订购前是否提供样品？", faq_a6: "是的，可根据要求提供样品。",
    footer_tagline: "从布达尔加德肥沃的土地到30多个国家——优质香料、谷物和有机商品。",
    footer_company: "公司", footer_products: "产品", footer_support: "支持",
    footer_get_in_touch: "联系我们", footer_rights: "版权所有。",
    fab_label: "WhatsApp聊天",
  },
  ja: {
    nav_home: "ホーム", nav_products: "製品", nav_about: "会社概要", nav_contact: "お問い合わせ",
    nav_get_quote: "見積もりを取得", nav_search: "検索",
    hero_headline1: "プレミアム", hero_headline2: "農産物", hero_tagline: "世界へ。",
    hero_subtext: "コルハープルの肥沃な大地から30カ国以上へ — 最高品質のスパイス、穀物、オーガニック商品を妥協なく。",
    hero_cta_explore: "製品を見る", hero_cta_contact: "お問い合わせ",
    hero_stat_years: "年の実績", hero_stat_countries: "輸出国",
    hero_stat_products: "プレミアム製品", hero_stat_farmers: "農家パートナー",
    fp_section_label: "製品ラインナップ", fp_section_title: "注目の製品",
    fp_view_all: "全15製品を見る", fp_featured_label: "注目製品",
    fp_view_details: "詳細を見る", fp_bulk_inquiry: "大量注文の問い合わせ",
    wcu_label: "選ばれる理由", wcu_title1: "すべての輸出の背後にある", wcu_title2: "約束",
    wcu_subtext: "製品を届けるだけでなく — コルハープル農家コミュニティの信頼と遺産を輸出します。",
    wcu_f1_title: "自然で持続可能", wcu_f1_desc: "マハラシュトラ州の認定有機農場からのすべての製品。",
    wcu_f2_title: "国際基準", wcu_f2_desc: "FSSAI、ISO認証。土壌から出荷まで各段階でテスト済み。",
    wcu_f3_title: "農家のエンパワーメント", wcu_f3_desc: "500以上の小規模農家家族との直接提携。",
    wcu_f4_title: "直接輸出", wcu_f4_desc: "仲介業者なし — 世界の購買者に競争力のある価格。",
    test_label: "お客様の信頼", test_title1: "パートナーからの", test_title2: "声",
    cta_label: "調達の準備はできましたか？", cta_title: "ご要件についてお話しましょう。",
    cta_subtext: "バイヤー、ディストリビューター、または小売業者 — お客様の市場に適した製品を見つけます。",
    cta_inquiry: "問い合わせを送る", cta_whatsapp: "WhatsAppで連絡",
    cert_label: "認証取得・準拠",
    faq_label: "ご質問ですか？", faq_title: "よくある質問",
    faq_subtext: "Kille Bhudargad Agroとの調達・出荷に関するすべて。答えが見つかりませんか？",
    faq_contact_link: "チームに連絡する →",
    faq_q1: "製品はどのような認証を取得していますか？", faq_a1: "FSSAI、ISO 22000、USDA有機、EU有機、インドスパイス委員会認定。",
    faq_q2: "バルクおよびプライベートラベルの包装は可能ですか？", faq_a2: "はい。バルクと小売対応のプライベートラベルパックの両方が可能です。",
    faq_q3: "どの国に輸出していますか？", faq_a3: "ヨーロッパ、北米、中東、東南アジアの30カ国以上。",
    faq_q4: "大量注文はどうすれば？", faq_a4: "お問い合わせフォームまたはWhatsApp：+91 91565 19393。",
    faq_q5: "通常のリードタイムは？", faq_a5: "製品・数量・目的地によって7〜14営業日。",
    faq_q6: "大量注文前にサンプルはありますか？", faq_a6: "はい、ご要望に応じてサンプルを提供します。",
    footer_tagline: "ブダルガードの肥沃な大地から30カ国以上へ — プレミアムスパイス、穀物、オーガニック商品。",
    footer_company: "会社", footer_products: "製品", footer_support: "サポート",
    footer_get_in_touch: "お問い合わせ", footer_rights: "All rights reserved.",
    fab_label: "WhatsAppでチャット",
  },
};

// Catalogue and product-detail wording is shared by every product route. Keeping
// it separate lets the homepage dictionaries stay concise while ensuring a
// selected locale carries through from product cards to the detail view.
const commerce: Partial<Record<LangCode, PartialTranslations>> = {
  ar: { prod_catalogue_label: "كتالوجنا", prod_hero_title: "منتجات زراعية ممتازة", prod_hero_sub: "توابل وبذور وحبوب عضوية معتمدة من أفضل مزارع كولهابور، جاهزة للتصدير عالميًا.", prod_filter_label: "تصفية", prod_search_placeholder: "ابحث عن المنتجات…", prod_found: "منتج موجود", prod_found_plural: "منتجات موجودة", prod_no_results: "لم يتم العثور على منتجات", prod_no_results_sub: "جرّب تعديل البحث أو التصفية.", prod_view_details: "عرض التفاصيل", prod_export_grade: "درجة تصدير", prod_cta_title: "تحتاج منتجًا مخصصًا أو طلبًا بالجملة؟", prod_cta_sub: "تواصل معنا للمواصفات المخصصة والملصقات الخاصة وأسعار الكميات.", prod_cta_btn: "اطلب عرضًا مخصصًا", prod_cat_all: "الكل", pd_breadcrumb_home: "الرئيسية", pd_breadcrumb_products: "المنتجات", pd_key_features: "الميزات الرئيسية", pd_specifications: "المواصفات", pd_packaging: "خيارات التعبئة", pd_request_quote: "اطلب عرضًا", pd_chat_whatsapp: "تحدث عبر واتساب", pd_explore_more: "استكشف المزيد", pd_related: "منتجات ذات صلة" },
  es: { prod_catalogue_label: "Nuestro catálogo", prod_hero_title: "Productos agrícolas premium", prod_hero_sub: "Especias, semillas y granos orgánicos certificados de las mejores granjas de Kolhapur, listos para exportación mundial.", prod_filter_label: "Filtrar", prod_search_placeholder: "Buscar productos…", prod_found: "producto encontrado", prod_found_plural: "productos encontrados", prod_no_results: "No se encontraron productos", prod_no_results_sub: "Intente ajustar su búsqueda o filtro.", prod_view_details: "Ver detalles", prod_export_grade: "Calidad de exportación", prod_cta_title: "¿Necesita un producto personalizado o pedido al por mayor?", prod_cta_sub: "Contáctenos para especificaciones personalizadas, marca privada y precios por volumen.", prod_cta_btn: "Solicitar una cotización", prod_cat_all: "Todos", pd_breadcrumb_home: "Inicio", pd_breadcrumb_products: "Productos", pd_key_features: "Características principales", pd_specifications: "Especificaciones", pd_packaging: "Opciones de embalaje", pd_request_quote: "Solicitar cotización", pd_chat_whatsapp: "Chatear por WhatsApp", pd_explore_more: "Explorar más", pd_related: "Productos relacionados" },
  fr: { prod_catalogue_label: "Notre catalogue", prod_hero_title: "Produits agricoles premium", prod_hero_sub: "Épices, graines et céréales bio certifiées des meilleures fermes de Kolhapur, prêtes pour l'export mondial.", prod_filter_label: "Filtrer", prod_search_placeholder: "Rechercher des produits…", prod_found: "produit trouvé", prod_found_plural: "produits trouvés", prod_no_results: "Aucun produit trouvé", prod_no_results_sub: "Essayez de modifier votre recherche ou votre filtre.", prod_view_details: "Voir les détails", prod_export_grade: "Qualité export", prod_cta_title: "Besoin d'un produit sur mesure ou d'une commande en vrac ?", prod_cta_sub: "Contactez-nous pour des spécifications sur mesure, une marque privée et des tarifs en volume.", prod_cta_btn: "Demander un devis", prod_cat_all: "Tous", pd_breadcrumb_home: "Accueil", pd_breadcrumb_products: "Produits", pd_key_features: "Caractéristiques clés", pd_specifications: "Spécifications", pd_packaging: "Options d'emballage", pd_request_quote: "Demander un devis", pd_chat_whatsapp: "Discuter sur WhatsApp", pd_explore_more: "Découvrir plus", pd_related: "Produits associés" },
  de: { prod_catalogue_label: "Unser Katalog", prod_hero_title: "Premium-Agrarprodukte", prod_hero_sub: "Zertifizierte Bio-Gewürze, Samen und Getreide von Kolhapurs besten Farmen, weltweit exportbereit.", prod_filter_label: "Filtern", prod_search_placeholder: "Produkte suchen…", prod_found: "Produkt gefunden", prod_found_plural: "Produkte gefunden", prod_no_results: "Keine Produkte gefunden", prod_no_results_sub: "Passen Sie Ihre Suche oder Ihren Filter an.", prod_view_details: "Details ansehen", prod_export_grade: "Exportqualität", prod_cta_title: "Benötigen Sie ein Sonderprodukt oder eine Großbestellung?", prod_cta_sub: "Kontaktieren Sie uns für individuelle Spezifikationen, Eigenmarken und Mengenpreise.", prod_cta_btn: "Individuelles Angebot anfordern", prod_cat_all: "Alle", pd_breadcrumb_home: "Startseite", pd_breadcrumb_products: "Produkte", pd_key_features: "Hauptmerkmale", pd_specifications: "Spezifikationen", pd_packaging: "Verpackungsoptionen", pd_request_quote: "Angebot anfordern", pd_chat_whatsapp: "Per WhatsApp chatten", pd_explore_more: "Mehr entdecken", pd_related: "Ähnliche Produkte" },
  nl: { prod_catalogue_label: "Onze catalogus", prod_hero_title: "Premium landbouwproducten", prod_hero_sub: "Gecertificeerde biologische specerijen, zaden en granen van de beste boerderijen van Kolhapur, wereldwijd exportklaar.", prod_filter_label: "Filter", prod_search_placeholder: "Zoek producten…", prod_found: "product gevonden", prod_found_plural: "producten gevonden", prod_no_results: "Geen producten gevonden", prod_no_results_sub: "Pas uw zoekopdracht of filter aan.", prod_view_details: "Details bekijken", prod_export_grade: "Exportkwaliteit", prod_cta_title: "Een maatproduct of bulkbestelling nodig?", prod_cta_sub: "Neem contact op voor maatwerkspecificaties, private labels en volumetarieven.", prod_cta_btn: "Vraag een offerte aan", prod_cat_all: "Alle", pd_breadcrumb_home: "Home", pd_breadcrumb_products: "Producten", pd_key_features: "Belangrijkste kenmerken", pd_specifications: "Specificaties", pd_packaging: "Verpakkingsopties", pd_request_quote: "Offerte aanvragen", pd_chat_whatsapp: "Chat via WhatsApp", pd_explore_more: "Meer ontdekken", pd_related: "Gerelateerde producten" },
  ru: { prod_catalogue_label: "Наш каталог", prod_hero_title: "Премиальные агропродукты", prod_hero_sub: "Сертифицированные органические специи, семена и зерно с лучших ферм Колхапура, готовые к экспорту по всему миру.", prod_filter_label: "Фильтр", prod_search_placeholder: "Поиск продуктов…", prod_found: "продукт найден", prod_found_plural: "продуктов найдено", prod_no_results: "Продукты не найдены", prod_no_results_sub: "Измените поиск или фильтр.", prod_view_details: "Подробнее", prod_export_grade: "Экспортное качество", prod_cta_title: "Нужен индивидуальный продукт или оптовый заказ?", prod_cta_sub: "Свяжитесь с нами для индивидуальных спецификаций, частной марки и объёмных цен.", prod_cta_btn: "Запросить предложение", prod_cat_all: "Все", pd_breadcrumb_home: "Главная", pd_breadcrumb_products: "Продукты", pd_key_features: "Ключевые особенности", pd_specifications: "Характеристики", pd_packaging: "Варианты упаковки", pd_request_quote: "Запросить предложение", pd_chat_whatsapp: "Написать в WhatsApp", pd_explore_more: "Смотреть больше", pd_related: "Похожие продукты" },
  zh: { prod_catalogue_label: "我们的目录", prod_hero_title: "优质农产品", prod_hero_sub: "来自科尔哈普尔优质农场的认证有机香料、种子和谷物，已准备好出口全球。", prod_filter_label: "筛选", prod_search_placeholder: "搜索产品…", prod_found: "件产品", prod_found_plural: "件产品", prod_no_results: "未找到产品", prod_no_results_sub: "请调整搜索或筛选条件。", prod_view_details: "查看详情", prod_export_grade: "出口级", prod_cta_title: "需要定制产品或批量订单？", prod_cta_sub: "请联系我们，获取定制规格、贴牌服务和批量价格。", prod_cta_btn: "申请定制报价", prod_cat_all: "全部", pd_breadcrumb_home: "首页", pd_breadcrumb_products: "产品", pd_key_features: "主要特点", pd_specifications: "规格", pd_packaging: "包装选项", pd_request_quote: "申请报价", pd_chat_whatsapp: "通过 WhatsApp 联系", pd_explore_more: "探索更多", pd_related: "相关产品" },
  ja: { prod_catalogue_label: "製品カタログ", prod_hero_title: "プレミアム農産物", prod_hero_sub: "コルハープルの優良農場から届く、認証済み有機スパイス・種子・穀物。世界各地への輸出に対応しています。", prod_filter_label: "絞り込み", prod_search_placeholder: "製品を検索…", prod_found: "件の製品が見つかりました", prod_found_plural: "件の製品が見つかりました", prod_no_results: "製品が見つかりません", prod_no_results_sub: "検索語またはフィルターを調整してください。", prod_view_details: "詳細を見る", prod_export_grade: "輸出品質", prod_cta_title: "特注製品または大量注文が必要ですか？", prod_cta_sub: "カスタム仕様、プライベートラベル、数量別価格についてお問い合わせください。", prod_cta_btn: "個別見積もりを依頼", prod_cat_all: "すべて", pd_breadcrumb_home: "ホーム", pd_breadcrumb_products: "製品", pd_key_features: "主な特徴", pd_specifications: "仕様", pd_packaging: "包装オプション", pd_request_quote: "見積もりを依頼", pd_chat_whatsapp: "WhatsAppでチャット", pd_explore_more: "さらに見る", pd_related: "関連製品" },
  pt: { prod_catalogue_label: "Nosso catálogo", prod_hero_title: "Produtos agrícolas premium", prod_hero_sub: "Especiarias, sementes e grãos orgânicos certificados das melhores fazendas de Kolhapur, prontos para exportação mundial.", prod_filter_label: "Filtrar", prod_search_placeholder: "Pesquisar produtos…", prod_found: "produto encontrado", prod_found_plural: "produtos encontrados", prod_no_results: "Nenhum produto encontrado", prod_no_results_sub: "Tente ajustar sua pesquisa ou filtro.", prod_view_details: "Ver detalhes", prod_export_grade: "Qualidade de exportação", prod_cta_title: "Precisa de um produto personalizado ou pedido em volume?", prod_cta_sub: "Fale conosco para especificações personalizadas, marca própria e preços por volume.", prod_cta_btn: "Solicitar cotação", prod_cat_all: "Todos", pd_breadcrumb_home: "Início", pd_breadcrumb_products: "Produtos", pd_key_features: "Principais características", pd_specifications: "Especificações", pd_packaging: "Opções de embalagem", pd_request_quote: "Solicitar cotação", pd_chat_whatsapp: "Conversar no WhatsApp", pd_explore_more: "Explorar mais", pd_related: "Produtos relacionados" },
  it: { prod_catalogue_label: "Il nostro catalogo", prod_hero_title: "Prodotti agricoli premium", prod_hero_sub: "Spezie, semi e cereali biologici certificati dalle migliori aziende agricole di Kolhapur, pronti per l'esportazione mondiale.", prod_filter_label: "Filtra", prod_search_placeholder: "Cerca prodotti…", prod_found: "prodotto trovato", prod_found_plural: "prodotti trovati", prod_no_results: "Nessun prodotto trovato", prod_no_results_sub: "Prova a modificare la ricerca o il filtro.", prod_view_details: "Vedi dettagli", prod_export_grade: "Qualità da esportazione", prod_cta_title: "Serve un prodotto personalizzato o un ordine all'ingrosso?", prod_cta_sub: "Contattaci per specifiche su misura, marchio privato e prezzi per volume.", prod_cta_btn: "Richiedi un preventivo", prod_cat_all: "Tutti", pd_breadcrumb_home: "Home", pd_breadcrumb_products: "Prodotti", pd_key_features: "Caratteristiche principali", pd_specifications: "Specifiche", pd_packaging: "Opzioni di imballaggio", pd_request_quote: "Richiedi un preventivo", pd_chat_whatsapp: "Chatta su WhatsApp", pd_explore_more: "Scopri di più", pd_related: "Prodotti correlati" },
  gu: { prod_catalogue_label: "અમારી સૂચિ", prod_hero_title: "પ્રીમિયમ કૃષિ ઉત્પાદનો", prod_hero_sub: "કોલ્હાપુરના શ્રેષ્ઠ ખેતરોમાંથી પ્રમાણિત ઓર્ગેનિક મસાલા, બીજ અને અનાજ — વૈશ્વિક નિકાસ માટે તૈયાર.", prod_filter_label: "ફિલ્ટર", prod_search_placeholder: "ઉત્પાદનો શોધો…", prod_found: "ઉત્પાદન મળ્યું", prod_found_plural: "ઉત્પાદનો મળ્યા", prod_no_results: "કોઈ ઉત્પાદન મળ્યું નથી", prod_no_results_sub: "તમારી શોધ અથવા ફિલ્ટર બદલો.", prod_view_details: "વિગતો જુઓ", prod_export_grade: "નિકાસ ગ્રેડ", prod_cta_title: "કસ્ટમ ઉત્પાદન અથવા જથ્થાબંધ ઓર્ડર જોઈએ છે?", prod_cta_sub: "કસ્ટમ વિશિષ્ટતાઓ, પ્રાઇવેટ લેબલ અને જથ્થા મુજબના ભાવ માટે સંપર્ક કરો.", prod_cta_btn: "કસ્ટમ ક્વોટ માંગો", prod_cat_all: "બધા", pd_breadcrumb_home: "મુખ્ય પૃષ્ઠ", pd_breadcrumb_products: "ઉત્પાદનો", pd_key_features: "મુખ્ય વિશેષતાઓ", pd_specifications: "વિશિષ્ટતાઓ", pd_packaging: "પેકેજિંગ વિકલ્પો", pd_request_quote: "ક્વોટ માંગો", pd_chat_whatsapp: "WhatsApp પર ચેટ કરો", pd_explore_more: "વધુ જાણો", pd_related: "સંબંધિત ઉત્પાદનો" },
  ta: { prod_catalogue_label: "எங்கள் பட்டியல்", prod_hero_title: "உயர்தர வேளாண் பொருட்கள்", prod_hero_sub: "கோலாப்பூரின் சிறந்த பண்ணைகளிலிருந்து சான்றளிக்கப்பட்ட இயற்கை மசாலா, விதைகள் மற்றும் தானியங்கள் — உலக ஏற்றுமதிக்குத் தயாராக உள்ளன.", prod_filter_label: "வடிகட்டு", prod_search_placeholder: "பொருட்களைத் தேடுங்கள்…", prod_found: "பொருள் கிடைத்தது", prod_found_plural: "பொருட்கள் கிடைத்தன", prod_no_results: "பொருட்கள் எதுவும் கிடைக்கவில்லை", prod_no_results_sub: "தேடல் அல்லது வடிகட்டலை மாற்றிப் பார்க்கவும்.", prod_view_details: "விவரங்களைப் பார்க்கவும்", prod_export_grade: "ஏற்றுமதி தரம்", prod_cta_title: "தனிப்பயன் பொருள் அல்லது மொத்த ஆர்டர் வேண்டுமா?", prod_cta_sub: "தனிப்பயன் விவரக்குறிப்புகள், தனியார் லேபிள் மற்றும் அளவு விலைக்கு எங்களைத் தொடர்பு கொள்ளவும்.", prod_cta_btn: "தனிப்பயன் மேற்கோளை கோருங்கள்", prod_cat_all: "அனைத்தும்", pd_breadcrumb_home: "முகப்பு", pd_breadcrumb_products: "பொருட்கள்", pd_key_features: "முக்கிய அம்சங்கள்", pd_specifications: "விவரக்குறிப்புகள்", pd_packaging: "பேக்கேஜிங் விருப்பங்கள்", pd_request_quote: "மேற்கோளை கோருங்கள்", pd_chat_whatsapp: "WhatsApp-ல் உரையாடவும்", pd_explore_more: "மேலும் ஆராயுங்கள்", pd_related: "தொடர்புடைய பொருட்கள்" },
};

const footerLinks: Partial<Record<LangCode, PartialTranslations>> = {
  ar: { footer_our_process: "عمليتنا", footer_careers: "الوظائف", footer_organic: "النطاق العضوي", footer_shipping: "معلومات الشحن", footer_faqs: "الأسئلة الشائعة", footer_privacy: "سياسة الخصوصية", footer_terms: "شروط الخدمة", footer_cookies: "سياسة ملفات تعريف الارتباط" },
  es: { footer_our_process: "Nuestro proceso", footer_careers: "Carreras", footer_organic: "Gama orgánica", footer_shipping: "Información de envío", footer_faqs: "Preguntas frecuentes", footer_privacy: "Política de privacidad", footer_terms: "Términos de servicio", footer_cookies: "Política de cookies" },
  fr: { footer_our_process: "Notre processus", footer_careers: "Carrières", footer_organic: "Gamme biologique", footer_shipping: "Informations d'expédition", footer_faqs: "FAQ", footer_privacy: "Politique de confidentialité", footer_terms: "Conditions d'utilisation", footer_cookies: "Politique de cookies" },
  de: { footer_our_process: "Unser Prozess", footer_careers: "Karriere", footer_organic: "Bio-Sortiment", footer_shipping: "Versandinformationen", footer_faqs: "Häufige Fragen", footer_privacy: "Datenschutz", footer_terms: "Nutzungsbedingungen", footer_cookies: "Cookie-Richtlinie" },
  nl: { footer_our_process: "Ons proces", footer_careers: "Vacatures", footer_organic: "Biologisch assortiment", footer_shipping: "Verzendinformatie", footer_faqs: "Veelgestelde vragen", footer_privacy: "Privacybeleid", footer_terms: "Servicevoorwaarden", footer_cookies: "Cookiebeleid" },
  ru: { footer_our_process: "Наш процесс", footer_careers: "Карьера", footer_organic: "Органическая линейка", footer_shipping: "Информация о доставке", footer_faqs: "Частые вопросы", footer_privacy: "Политика конфиденциальности", footer_terms: "Условия обслуживания", footer_cookies: "Политика cookie" },
  zh: { footer_our_process: "我们的流程", footer_careers: "招聘", footer_organic: "有机系列", footer_shipping: "运输信息", footer_faqs: "常见问题", footer_privacy: "隐私政策", footer_terms: "服务条款", footer_cookies: "Cookie 政策" },
  ja: { footer_our_process: "当社のプロセス", footer_careers: "採用情報", footer_organic: "オーガニック製品", footer_shipping: "配送情報", footer_faqs: "よくある質問", footer_privacy: "プライバシーポリシー", footer_terms: "利用規約", footer_cookies: "Cookieポリシー" },
  pt: { footer_our_process: "Nosso processo", footer_careers: "Carreiras", footer_organic: "Linha orgânica", footer_shipping: "Informações de envio", footer_faqs: "Perguntas frequentes", footer_privacy: "Política de privacidade", footer_terms: "Termos de serviço", footer_cookies: "Política de cookies" },
  it: { footer_our_process: "Il nostro processo", footer_careers: "Lavora con noi", footer_organic: "Linea biologica", footer_shipping: "Informazioni sulla spedizione", footer_faqs: "Domande frequenti", footer_privacy: "Informativa sulla privacy", footer_terms: "Termini di servizio", footer_cookies: "Informativa sui cookie" },
  gu: { footer_our_process: "અમારી પ્રક્રિયા", footer_careers: "કારકિર્દી", footer_organic: "ઓર્ગેનિક શ્રેણી", footer_shipping: "શિપિંગ માહિતી", footer_faqs: "વારંવાર પૂછાતા પ્રશ્નો", footer_privacy: "ગોપનીયતા નીતિ", footer_terms: "સેવાની શરતો", footer_cookies: "કૂકી નીતિ" },
  ta: { footer_our_process: "எங்கள் செயல்முறை", footer_careers: "வேலைவாய்ப்புகள்", footer_organic: "இயற்கை வரம்பு", footer_shipping: "அனுப்புதல் தகவல்", footer_faqs: "அடிக்கடி கேட்கப்படும் கேள்விகள்", footer_privacy: "தனியுரிமைக் கொள்கை", footer_terms: "சேவை விதிமுறைகள்", footer_cookies: "குக்கீ கொள்கை" },
};

// Merge every language with English defaults so new keys are always available
export const t = Object.fromEntries(
  languages.map(({ code }) => [
    code,
    { ...raw.en, ...raw[code], ...commerce[code], ...footerLinks[code] } as Translations,
  ])
) as Record<LangCode, Translations>;
