export const siteConfig = {
  name: "Salon Lueur",
  shortName: "Lueur",
  concept: "自分らしい美しさを、静かな空間で整えるプライベートサロン",
  description:
    "眉・まつげ・フェイシャルを扱う、完全予約制のプライベート美容サロン。",
  lineUrl: "https://line.me/R/ti/p/@lueur-salon",
  contactUrl: "#menu",
  instagramUrl: "https://www.instagram.com/",
  mapsUrl: "https://maps.google.com/",
  phone: "03-0000-0000",
  address: "東京都渋谷区神宮前0-0-0 Lueur Maison 2F",
  station: "表参道駅 A2出口 徒歩5分",
  hours: "10:00 - 20:00",
  closed: "不定休",
  payment: "現金 / クレジットカード / QR決済",
  cta: {
    primary: "LINEで予約する",
    secondary: "メニューを確認する",
    mobileShort: "LINEで予約",
    note: "メニュー相談だけでもOK",
  },
  hero: {
    eyebrow: "Private Beauty Salon in Omotesando",
    title: "いつもの表情に、少しだけ自信を。",
    subtitle:
      "眉・まつげ・肌を自然に整える、完全予約制のプライベートサロン。初めてでも安心して過ごせる、静かな美容時間をお届けします。",
    reassurance:
      "料金と流れは事前にご案内。迷ったらLINEで相談してから予約できます。",
  },
  offer: {
    label: "First Consultation",
    title: "初回カウンセリング",
    price: "無料",
    time: "15分",
    description:
      "似合うメニューが分からない方へ。眉・まつげ・肌のお悩みを伺い、無理のない施術をご提案します。",
    points: ["完全予約制", "料金を事前案内", "LINE相談OK"],
  },
  theme: {
    accent: "rose-beige",
    primary: "#9f6f72",
    rose: "#c9989a",
    mauve: "#9d7d86",
    gold: "#c8aa73",
    ivory: "#fbf7f2",
  },
  images: {
    hero: "/images/salon-hero.png",
    staff: "/images/salon-staff.png",
    treatment: "/images/salon-treatment.png",
    vanity: "/images/salon-vanity.png",
  },
};

export const navItems = [
  { label: "お悩み", href: "#problems" },
  { label: "メニュー", href: "#menu" },
  { label: "流れ", href: "#flow" },
  { label: "FAQ", href: "#faq" },
  { label: "アクセス", href: "#access" },
];

export const heroStrengths = [
  "完全予約制",
  "初めてでも安心",
  "眉・まつげ・肌を相談",
];

export const trustBadges = [
  { value: "15min", label: "初回相談無料" },
  { value: "1席", label: "プライベート空間" },
  { value: "LINE", label: "予約・相談OK" },
];

export const problems = [
  "自分に似合う眉の形が分からない",
  "まつげや目元の印象を自然に整えたい",
  "大型サロンは少し緊張してしまう",
  "料金や施術の流れが分からないと不安",
  "清潔感や垢抜け感を、無理なく出したい",
  "肌や顔まわりの印象をやさしく整えたい",
];

export const reasons = [
  {
    title: "完全予約制のプライベート空間",
    description:
      "周りを気にせず過ごせる、落ち着いた小さなサロン。初めての方も緊張しにくい空間づくりを大切にしています。",
    icon: "DoorClosed",
  },
  {
    title: "丁寧なカウンセリング",
    description:
      "骨格、雰囲気、普段のメイク、なりたい印象を伺い、似合うデザインを一緒に決めていきます。",
    icon: "MessagesSquare",
  },
  {
    title: "自然に馴染むデザイン提案",
    description:
      "作り込みすぎず、毎日の表情に馴染む仕上がりへ。清潔感と自分らしさのバランスを整えます。",
    icon: "Sparkles",
  },
  {
    title: "眉・まつげ・フェイシャルを相談",
    description:
      "目元から肌印象まで、顔まわりの悩みをまとめて相談できます。メニュー選びに迷う方にも安心です。",
    icon: "ScanFace",
  },
  {
    title: "LINEで簡単予約",
    description:
      "空き状況の確認、メニュー相談、予約変更までLINEで完結。Instagramからの予約導線もスムーズです。",
    icon: "MessageCircle",
  },
  {
    title: "無理な追加提案なし",
    description:
      "必要な内容と料金を事前にご案内します。相談だけ、カウンセリングだけでも気軽にご連絡ください。",
    icon: "ShieldCheck",
  },
];

export const menus = [
  {
    name: "似合わせ美眉スタイリング",
    time: "60分",
    price: "5,500円",
    description:
      "骨格や雰囲気に合わせて、自然に整った眉へ。眉サロンが初めての方にもおすすめです。",
    label: "人気",
    highlighted: true,
  },
  {
    name: "まつげリフト",
    time: "75分",
    price: "6,600円",
    description:
      "目元に合わせた自然なカールで、毎日のメイクが心地よく決まる印象へ整えます。",
    label: "定番",
    highlighted: false,
  },
  {
    name: "眉毛 + まつげセット",
    time: "120分",
    price: "11,000円",
    description:
      "目元の印象をまとめて整えたい方へ。初めての垢抜けにも選ばれています。",
    label: "初回おすすめ",
    highlighted: true,
  },
  {
    name: "フェイシャルケア",
    time: "60分",
    price: "7,700円",
    description:
      "肌の状態に合わせて、やさしく整えるフェイシャル。顔まわりの印象をなめらかに見せます。",
    label: "Relax",
    highlighted: false,
  },
  {
    name: "初回カウンセリング",
    time: "15分",
    price: "無料",
    description:
      "施術前の不安やメニュー相談に対応します。予約前に聞きたいことがある方も歓迎です。",
    label: "相談OK",
    highlighted: false,
  },
];

export const flowSteps = [
  {
    title: "LINEで予約",
    description:
      "希望日時と気になるメニューを送るだけ。迷っている場合は、相談からでも大丈夫です。",
  },
  {
    title: "ご来店",
    description:
      "完全予約制のため、落ち着いた空間でお迎えします。初めての方もゆっくりお越しください。",
  },
  {
    title: "カウンセリング",
    description:
      "お悩み、普段のメイク、なりたい雰囲気、肌の不安などを丁寧に伺います。",
  },
  {
    title: "デザイン提案",
    description:
      "骨格や目元の印象に合わせて、自然に馴染むデザインをご提案します。",
  },
  {
    title: "施術",
    description:
      "確認しながら進めるので、仕上がりのイメージが不安な方も安心して過ごせます。",
  },
  {
    title: "仕上がり確認",
    description:
      "鏡で一緒に確認し、気になる点があればその場で微調整します。",
  },
  {
    title: "アフターケア説明",
    description:
      "きれいな状態を保つためのホームケアや次回来店目安を、分かりやすくお伝えします。",
  },
];

export const finishImages = [
  {
    title: "眉のラインを自然に整える",
    before: "形がぼんやりして見える状態",
    after: "表情がすっきり明るく見える印象へ",
  },
  {
    title: "まつげのカールで目元をやわらかく",
    before: "ビューラーが長持ちしにくい状態",
    after: "自然に華やかな目元の印象へ",
  },
  {
    title: "肌の印象をやさしく整える",
    before: "乾燥やくすみ感が気になりやすい状態",
    after: "なめらかで清潔感のある印象へ",
  },
];

export const staff = {
  name: "美月 はるか",
  role: "Beauty Designer / Esthetician",
  career:
    "都内美容サロンで眉毛・まつげ・フェイシャル施術を経験後、完全予約制のプライベートサロンとしてSalon Lueurをオープン。自然に馴染む目元デザインと、初めての方に寄り添うカウンセリングを得意としています。",
  specialty: "似合わせ美眉 / まつげリフト / フェイシャルケア",
  message:
    "初めての方にも、緊張せず過ごしていただけるよう、カウンセリングの時間を大切にしています。派手に変えるより、いつもの自分が少し好きになるような仕上がりを一緒に見つけましょう。",
};

export const testimonials = [
  {
    quote:
      "初めての眉サロンで不安でしたが、似合う形を丁寧に説明してもらえて安心できました。",
    name: "20代女性",
    profile: "会社員",
  },
  {
    quote:
      "お店の雰囲気が落ち着いていて、まつげの仕上がりも自然で気に入っています。",
    name: "30代女性",
    profile: "主婦",
  },
  {
    quote:
      "メニューや料金が分かりやすく、LINEで予約できるのが便利でした。",
    name: "20代女性",
    profile: "学生",
  },
];

export const reservationAssurances = [
  "無理な追加提案なし",
  "料金は事前に案内",
  "メニュー相談だけでもOK",
  "完全予約制",
  "LINEで質問可能",
  "敏感肌や不安がある場合も事前相談可能",
];

export const faqs = [
  {
    question: "初めてでも大丈夫ですか？",
    answer:
      "はい、大丈夫です。初めての方にはカウンセリングの時間をしっかり取り、施術内容や料金、仕上がりのイメージを確認してから進めます。",
  },
  {
    question: "どのメニューを選べばいいか分かりません",
    answer:
      "LINEで今のお悩みや気になる雰囲気を送っていただければ、合いそうなメニューをご案内します。来店後に相談しながら決めることもできます。",
  },
  {
    question: "当日のメイクはどうすればいいですか？",
    answer:
      "眉メニューは普段の眉メイクが分かる状態でお越しいただくと、好みを確認しやすくなります。まつげメニューはアイメイクを控えめにしていただくとスムーズです。",
  },
  {
    question: "施術時間はどれくらいですか？",
    answer:
      "美眉スタイリングは約60分、まつげリフトは約75分、セットメニューは約120分が目安です。初回はカウンセリングに少しお時間をいただきます。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer:
      "現金、クレジットカード、QR決済に対応しています。利用可能な決済方法は予約時にもご案内します。",
  },
  {
    question: "キャンセルや変更はできますか？",
    answer:
      "予定変更がある場合は、分かり次第LINEでご連絡ください。完全予約制のため、できるだけ前日までのご連絡をお願いしています。",
  },
];

export const accessInfo = [
  { label: "住所", value: siteConfig.address },
  { label: "最寄駅", value: siteConfig.station },
  { label: "営業時間", value: siteConfig.hours },
  { label: "定休日", value: siteConfig.closed },
  { label: "支払い", value: siteConfig.payment },
  { label: "電話", value: siteConfig.phone },
];
