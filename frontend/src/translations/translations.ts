export type TranslationKey = 
  | 'search_placeholder'
  | 'account'
  | 'electronics'
  | 'fashion'
  | 'home_garden'
  | 'sports'
  | 'books'
  | 'grocery'
  | 'hot_deals'
  | 'change_language'
  | 'learn_more'
  | 'free_delivery'
  | 'proudly_nepali'
  | 'categories'
  | 'top_deals'
  | 'featured_products'
  | 'trending_products'
  | 'highest_selling'
  | 'just_for_you';

export const translations: Record<string, Record<TranslationKey, string>> = {
  en: {
    search_placeholder: 'Search for products, brands, categories...',
    account: 'Account',
    electronics: 'Electronics',
    fashion: 'Fashion',
    home_garden: 'Home & Garden',
    sports: 'Sports',
    books: 'Books',
    grocery: 'Grocery',
    hot_deals: '🔥 Hot Deals',
    change_language: 'Change language',
    learn_more: 'Learn more',
    free_delivery: '🚚 Free Delivery in Kathmandu Valley',
    proudly_nepali: '🇳🇵 Proudly Nepali',
    categories: 'Categories',
    top_deals: 'Top Deals',
    featured_products: 'Featured Products',
    trending_products: 'Trending Products',
    highest_selling: 'Highest Selling',
    just_for_you: 'Just For You'
  },
  es: {
    search_placeholder: 'Buscar productos, marcas, categorías...',
    account: 'Cuenta',
    electronics: 'Electrónicos',
    fashion: 'Moda',
    home_garden: 'Hogar y Jardín',
    sports: 'Deportes',
    books: 'Libros',
    grocery: 'Comestibles',
    hot_deals: '🔥 Ofertas Calientes',
    change_language: 'Cambiar idioma',
    learn_more: 'Aprende más',
    free_delivery: '🚚 Entrega Gratis en Valle de Katmandú',
    proudly_nepali: '🇳🇵 Orgullosamente Nepalí',
    categories: 'Categorías',
    top_deals: 'Mejores Ofertas',
    featured_products: 'Productos Destacados',
    trending_products: 'Productos Trending',
    highest_selling: 'Más Vendidos',
    just_for_you: 'Solo Para Ti'
  },
  ar: {
    search_placeholder: 'البحث عن المنتجات والعلامات التجارية والفئات...',
    account: 'الحساب',
    electronics: 'الإلكترونيات',
    fashion: 'الأزياء',
    home_garden: 'المنزل والحديقة',
    sports: 'الرياضة',
    books: 'الكتب',
    grocery: 'البقالة',
    hot_deals: '🔥 عروض ساخنة',
    change_language: 'تغيير اللغة',
    learn_more: 'اعرف أكثر',
    free_delivery: '🚚 توصيل مجاني في وادي كاتماندو',
    proudly_nepali: '🇳🇵 فخورون بكوننا نيباليين',
    categories: 'الفئات',
    top_deals: 'أفضل العروض',
    featured_products: 'المنتجات المميزة',
    trending_products: 'المنتجات الرائجة',
    highest_selling: 'الأكثر مبيعاً',
    just_for_you: 'خصيصاً لك'
  },
  de: {
    search_placeholder: 'Nach Produkten, Marken, Kategorien suchen...',
    account: 'Konto',
    electronics: 'Elektronik',
    fashion: 'Mode',
    home_garden: 'Haus & Garten',
    sports: 'Sport',
    books: 'Bücher',
    grocery: 'Lebensmittel',
    hot_deals: '🔥 Heiße Angebote',
    change_language: 'Sprache ändern',
    learn_more: 'Mehr erfahren',
    free_delivery: '🚚 Kostenlose Lieferung im Kathmandu-Tal',
    proudly_nepali: '🇳🇵 Stolz nepalesisch',
    categories: 'Kategorien',
    top_deals: 'Top-Angebote',
    featured_products: 'Ausgewählte Produkte',
    trending_products: 'Trending Produkte',
    highest_selling: 'Meistverkauft',
    just_for_you: 'Nur für Sie'
  },
  he: {
    search_placeholder: 'חיפוש מוצרים, מותגים, קטגוריות...',
    account: 'חשבון',
    electronics: 'אלקטרוניקה',
    fashion: 'אופנה',
    home_garden: 'בית וגינה',
    sports: 'ספורט',
    books: 'ספרים',
    grocery: 'מכולת',
    hot_deals: '🔥 מבצעים לוהטים',
    change_language: 'שנה שפה',
    learn_more: 'למד עוד',
    free_delivery: '🚚 משלוח חינם בעמק קטמנדו',
    proudly_nepali: '🇳🇵 בגאווה נפאלית',
    categories: 'קטגוריות',
    top_deals: 'המבצעים הטובים ביותר',
    featured_products: 'מוצרים מובחרים',
    trending_products: 'מוצרים טרנדיים',
    highest_selling: 'הנמכרים ביותר',
    just_for_you: 'רק בשבילך'
  },
  ko: {
    search_placeholder: '제품, 브랜드, 카테고리 검색...',
    account: '계정',
    electronics: '전자제품',
    fashion: '패션',
    home_garden: '홈 & 가든',
    sports: '스포츠',
    books: '도서',
    grocery: '식료품',
    hot_deals: '🔥 핫딜',
    change_language: '언어 변경',
    learn_more: '더 알아보기',
    free_delivery: '🚚 카트만두 밸리 무료배송',
    proudly_nepali: '🇳🇵 자랑스러운 네팔',
    categories: '카테고리',
    top_deals: '최고 할인',
    featured_products: '추천 상품',
    trending_products: '인기 상품',
    highest_selling: '베스트셀러',
    just_for_you: '당신을 위한 추천'
  },
  pt: {
    search_placeholder: 'Procurar produtos, marcas, categorias...',
    account: 'Conta',
    electronics: 'Eletrônicos',
    fashion: 'Moda',
    home_garden: 'Casa e Jardim',
    sports: 'Esportes',
    books: 'Livros',
    grocery: 'Mercearia',
    hot_deals: '🔥 Ofertas Quentes',
    change_language: 'Alterar idioma',
    learn_more: 'Saiba mais',
    free_delivery: '🚚 Entrega Grátis no Vale de Katmandu',
    proudly_nepali: '🇳🇵 Orgulhosamente Nepalês',
    categories: 'Categorias',
    top_deals: 'Melhores Ofertas',
    featured_products: 'Produtos em Destaque',
    trending_products: 'Produtos em Alta',
    highest_selling: 'Mais Vendidos',
    just_for_you: 'Só Para Você'
  },
  'zh-s': {
    search_placeholder: '搜索产品、品牌、类别...',
    account: '账户',
    electronics: '电子产品',
    fashion: '时尚',
    home_garden: '家居园艺',
    sports: '运动',
    books: '图书',
    grocery: '杂货',
    hot_deals: '🔥 热门优惠',
    change_language: '更改语言',
    learn_more: '了解更多',
    free_delivery: '🚚 加德满都谷地免费送货',
    proudly_nepali: '🇳🇵 骄傲的尼泊尔',
    categories: '类别',
    top_deals: '顶级优惠',
    featured_products: '精选产品',
    trending_products: '热门产品',
    highest_selling: '最畅销',
    just_for_you: '为您推荐'
  },
  'zh-t': {
    search_placeholder: '搜索產品、品牌、類別...',
    account: '帳戶',
    electronics: '電子產品',
    fashion: '時尚',
    home_garden: '家居園藝',
    sports: '運動',
    books: '圖書',
    grocery: '雜貨',
    hot_deals: '🔥 熱門優惠',
    change_language: '更改語言',
    learn_more: '了解更多',
    free_delivery: '🚚 加德滿都谷地免費送貨',
    proudly_nepali: '🇳🇵 驕傲的尼泊爾',
    categories: '類別',
    top_deals: '頂級優惠',
    featured_products: '精選產品',
    trending_products: '熱門產品',
    highest_selling: '最暢銷',
    just_for_you: '為您推薦'
  }
};
