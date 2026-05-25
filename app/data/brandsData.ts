import type { LanguageCode } from '../components/language-context';

export type LocalizedString = string | Partial<Record<LanguageCode, string>>;

export interface BrandProduct {
  name: string;
  images: string[];
  description: LocalizedString;
  plans?: {
    name: LocalizedString;
    details: LocalizedString;
  }[];
}

export interface BrandDetail {
  slug: string;

  name: string;
  logo: string;
  coverImage: string;
  description: LocalizedString;
  products: BrandProduct[];
}

export const brandsData: Record<string, BrandDetail> = {
  "lg-ericsson": {
    slug: "lg-ericsson",
    name: "LG-Ericsson",
    logo: "/image/brand/LG-Ericsson.png",
    coverImage: "/image/brand/LG-Ericsson.png",
    description: {
      id: "Kolaborasi antara LG Electronics dan Ericsson menciptakan solusi telekomunikasi mutakhir yang menggabungkan inovasi hardware dengan keahlian jaringan global.",
      en: "The collaboration between LG Electronics and Ericsson creates cutting-edge telecommunications solutions combining hardware innovation with global networking expertise.",
      zh: "LG电子与爱立信的合作创造了尖端的电信解决方案，将硬件创新与全球网络专业知识相结合。",
      ja: "LGエレクトロニクスとエリクソンのコラボレーションにより、ハードウェアの革新とグローバルなネットワーキングの専門知識を組み合わせた最先端の通信ソリューションが生み出されます。",
      ko: "LG전자와 에릭슨의 협력은 하드웨어 혁신과 글로벌 네트워킹 전문성을 결합한 최첨단 통신 솔루션을 창출합니다.",
      ar: "التعاون بين إل جي للإلكترونيات وإريكسون يخلق حلول اتصالات متطورة تجمع بين ابتكار الأجهزة وخبرة الشبكات العالمية."
    },
    products: [{
      name: "Enterprise Communication Systems",
      images: ["/image/brand/dekripsi_produk/LG/1.jpg"],
      description: {
        id: "Melalui kombinasi dari ide yang inovatif dan teknologi konvergensi jaringan, LG-Ericsson menyediakan konektifitas yang mengeliminasi hambatan dalam pertukaran informasi, membantu pelanggan mencapai potensi penuh.",
        en: "Through a combination of innovative ideas and network convergence technology, LG-Ericsson provides connectivity that eliminates barriers in information exchange, helping customers reach their full potential.",
        zh: "通过结合创新理念和网络融合技术，LG-Ericsson提供了消除信息交换障碍的连接性，帮助客户充分发挥潜力。",
        ja: "革新的なアイデアとネットワークコンバージェンステクノロジーの組み合わせにより、LG-Ericssonは情報交換の障壁をなくし、顧客が潜在能力を最大限に発揮できるようにする接続性を提供します。",
        ko: "혁신적인 아이디어와 네트워크 융합 기술의 결합을 통해 LG-Ericsson은 정보 교환의 장벽을 제거하는 연결성을 제공하여 고객이 잠재력을 최대한 발휘할 수 있도록 돕습니다.",
        ar: "من خلال مزيج من الأفكار المبتكرة وتكنولوجيا تقارب الشبكات، توفر إل جي-إريكسون اتصالاً يزيل الحواجز في تبادل المعلومات، مما يساعد العملاء على تحقيق إمكاناتهم الكاملة."
      },
      plans: [
        { 
          name: {
            id: "Merek Korea",
            en: "Korean Brand",
            zh: "韩国品牌",
            ja: "韓国ブランド",
            ko: "한국 브랜드",
            ar: "علامة تجارية كورية"
          }, 
          details: {
            id: "Router, Virtual Router, Multi-Service Edge Router, dll.",
            en: "Router, Virtual Router, Multi-Service Edge Router, etc.",
            zh: "路由器，虚拟路由器，多服务边缘路由器等",
            ja: "ルーター、仮想ルーター、マルチサービスエッジルーターなど",
            ko: "라우터, 가상 라우터, 멀티 서비스 에지 라우터 등",
            ar: "موجه، موجه افتراضي، موجه حافة متعدد الخدمات، إلخ."
          }
        }
      ]
    }]
  },
  "nitto": {
    slug: "nitto",
    name: "Nitto",
    logo: "/image/brand/Nitto.png",
    coverImage: "/image/brand/Nitto.png",
    description: "Nitto Kohki adalah produsen alat teknik presisi asal Jepang yang dikenal dengan quick-connect couplings dan alat pneumatik berkualitas tinggi.",
    products: [{
      name: "Quick Connect Couplings",
      images: [
        "/image/brand/dekripsi_produk/NITTO/1.jpg",
        "/image/brand/dekripsi_produk/NITTO/2.jpg",
        "/image/brand/dekripsi_produk/NITTO/3.jpg"
      ],
      description: {
        id: "Nitto Kohki Group membangun hubungan di berbagai area, mulai dari pengembangan teknologi baru sampai pengembangan pasar yang merupakan dasar dari inovasi generasi selanjutnya.",
        en: "The Nitto Kohki Group builds relationships across various areas, from new technology development to market development, which forms the basis for next-generation innovation.",
        zh: "Nitto Kohki集团在各个领域建立联系，从新技术开发到市场开发，这构成了下一代创新的基础。",
        ja: "日東工器グループは、新技術の開発から市場開拓まで、次世代のイノベーションの基盤となる様々な分野での関係を構築しています。",
        ko: "Nitto Kohki 그룹은 신기술 개발에서 시장 개발에 이르기까지 다양한 분야에서 관계를 구축하여 차세대 혁신의 기반을 마련합니다.",
        ar: "تبني مجموعة نيتو كوكي علاقات في مجالات مختلفة، من تطوير التكنولوجيا الجديدة إلى تطوير السوق، مما يشكل الأساس لابتكار الجيل القادم."
      },
      plans: [
        { 
          name: {
            id: "Merek Jepang",
            en: "Japanese Brand",
            zh: "日本品牌",
            ja: "日本のブランド",
            ko: "일본 브랜드",
            ar: "علامة تجارية يابانية"
          }, 
          details: {
            id: "Coupling, Machine & Tools, DELVO Electric Screwdriver, Air Compressor dan Vacuum Pump, dan Door Closer.",
            en: "Coupling, Machine & Tools, DELVO Electric Screwdriver, Air Compressor and Vacuum Pump, and Door Closer.",
            zh: "联轴器，机械及工具，DELVO电动螺丝刀，空气压缩机和真空泵，以及闭门器。",
            ja: "カップリング、機械・工具、DELVO電動ドライバー、エアコンプレッサーと真空ポンプ、およびドアクローザー。",
            ko: "커플링, 기계 및 도구, DELVO 전동 드라이버, 공기 압축기 및 진공 펌프, 도어 클로저.",
            ar: "وصلات التوصيل، الآلات والأدوات، مفك كهربائي DELVO، ضاغط هواء ومضخة تفريغ، وقافل الباب."
          }
        }
      ]
    }]
  },
  "amano": {
    slug: "amano",
    name: "Amano",
    logo: "/image/brand/amano.png",
    coverImage: "/image/brand/amano.png",
    description: "Pemimpin pasar dalam sistem manajemen waktu dan parkir, menyediakan solusi otomatisasi kantor yang cerdas.",
    products: [{
      name: "Time Management Systems",
      images: ["/image/brand/dekripsi_produk/AMANO/1.jpg"],
      description: {
        id: "Amano adalah sebuah merek Jepang yang menjual beragam sistem, seperti sistem informasi waktu, sistem parkir, sistem untuk lingkungan, dan sistem kebersihan. Dengan strategi “GLOCAL” (Global & Local), Amano terus berusaha untuk menjadi perusahaan yang baik, terpercaya, dan didukung oleh pelanggan kami di seluruh dunia.",
        en: "Amano is a Japanese brand that sells various systems, such as time information systems, parking systems, environmental systems, and cleaning systems. With a “GLOCAL” (Global & Local) strategy, Amano continuously strives to be a good, trusted company supported by our customers worldwide.",
        zh: "Amano是一个日本品牌，销售各种系统，如时间信息系统、停车系统、环境系统和清洁系统。通过“GLOCAL”（全球化与本土化）战略，Amano不断努力成为一家受到全球客户支持的优秀、值得信赖的公司。",
        ja: "アマノは、時間情報システム、駐車システム、環境システム、清掃システムなど、さまざまなシステムを販売する日本のブランドです。「GLOCAL」（グローバル＆ローカル）戦略により、アマノは世界中のお客様に支持される、優れた信頼される企業を目指して努力を続けています。",
        ko: "Amano는 시간 정보 시스템, 주차 시스템, 환경 시스템 및 청소 시스템과 같은 다양한 시스템을 판매하는 일본 브랜드입니다. “GLOCAL”(글로벌 & 로컬) 전략을 통해 Amano는 전 세계 고객의 지원을 받는 우수하고 신뢰할 수 있는 기업이 되기 위해 지속적으로 노력합니다.",
        ar: "أمانو هي علامة تجارية يابانية تبيع أنظمة مختلفة، مثل أنظمة معلومات الوقت وأنظمة وقوف السيارات والأنظمة البيئية وأنظمة التنظيف. من خلال استراتيجية “GLOCAL” (عالمية ومحلية)، تسعى أمانو باستمرار لتكون شركة جيدة وموثوقة مدعومة من عملائنا في جميع أنحاء العالم."
      },
      plans: [
        { 
          name: {
            id: "Merek Jepang",
            en: "Japanese Brand",
            zh: "日本品牌",
            ja: "日本のブランド",
            ko: "일본 브랜드",
            ar: "علامة تجارية يابانية"
          }, 
          details: {
            id: "Sistem Informasi Waktu: Terminal Biometrik Kartu ID/IC, Perangkat Lunak Waktu dan Kehadiran, Sistem Akses Pintu (Sistem Kontrol Akses), Perekam Waktu Konvensional, Perekam Waktu Terkomputerisasi, Cap Waktu (Side-Printers), Perekam Waktu Patroli, Kartu Waktu, dan aksesoris.\n\nSistem Parkir: Sistem Keluar Berbayar Otomatis, Sistem Keluar Berbayar Non-Otomatis, Perangkat Lunak Manajemen Fasilitas, Sistem Manajemen Tempat Parkir, dan Sistem Gerbang Keamanan.\n\nSistem untuk Lingkungan: Pembersih Debu Ukuran Kecil, Pembersih Debu Skala Besar, Pembersih Vakum Industri, Pembersih Kabut, Sistem Pneumatic Powder Conveying, dan Pembersih Industri (Alkaline Electrolytic Water Cleaning System).\n\nSistem Kebersihan: Pembersih Vakum Komersil, Pembersih Jalan dan Industri, Penggosok & Pengering Otomatis, Electronic High-Speed Buffing Machine, dan Produk Pelengkap Kimia.",
            en: "Time Information Systems: ID/IC Card Biometric Terminals, Time and Attendance Software, Door Access Systems (Access Control Systems), Conventional Time Recorders, Computerized Time Recorders, Time Stamps (Side-Printers), Patrol Time Recorders, Time Cards, and accessories.\n\nParking Systems: Automatic Pay Station Systems, Manual Pay Station Systems, Facility Management Software, Parking Space Management Systems, and Security Gate Systems.\n\nEnvironmental Systems: Small Dust Collectors, Large Scale Dust Collectors, Industrial Vacuum Cleaners, Mist Collectors, Pneumatic Powder Conveying Systems, and Industrial Cleaners (Alkaline Electrolytic Water Cleaning System).\n\nCleaning Systems: Commercial Vacuum Cleaners, Road and Industrial Sweepers, Auto Scrubbers & Dryers, Electronic High-Speed Buffing Machines, and Chemical Complementary Products.",
            zh: "时间信息系统：ID/IC卡生物识别终端，考勤软件，门禁系统，传统打卡机，计算机打卡机，时间戳，巡更打卡机，考勤卡和配件。\n\n停车系统：自动缴费站系统，非自动缴费站系统，设施管理软件，停车位管理系统和安全门系统。\n\n环境系统：小型除尘器，大型除尘器，工业吸尘器，油雾收集器，气动粉末输送系统和工业清洁器。\n\n清洁系统：商业吸尘器，道路和工业扫地机，自动洗地机和烘干机，电子高速抛光机和化学配套产品。",
            ja: "時間情報システム：ID/ICカード生体認証端末、勤怠管理ソフトウェア、ドアアクセスシステム、従来のタイムレコーダー、コンピュータ化されたタイムレコーダー、タイムスタンプ、巡回タイムレコーダー、タイムカード、およびアクセサリー。\n\n駐車システム：自動精算機システム、有人精算機システム、施設管理ソフトウェア、駐車スペース管理システム、およびセキュリティゲートシステム。\n\n環境システム：小型集塵機、大型集塵機、産業用掃除機、ミストコレクター、空気圧式粉体輸送システム、および産業用クリーナー。\n\n清掃システム：業務用掃除機、道路および産業用スイーパー、自動床洗浄機および乾燥機、電子高速バフ研磨機、および化学補完製品。",
            ko: "시간 정보 시스템: ID/IC 카드 생체 인식 단말기, 근태 관리 소프트웨어, 출입 통제 시스템, 기존 출퇴근 기록기, 컴퓨터화된 출퇴근 기록기, 타임 스탬프, 순찰 출퇴근 기록기, 타임 카드 및 액세서리.\n\n주차 시스템: 자동 요금 정산 시스템, 수동 요금 정산 시스템, 시설 관리 소프트웨어, 주차 공간 관리 시스템 및 보안 게이트 시스템.\n\n환경 시스템: 소형 집진기, 대형 집진기, 산업용 진공 청소기, 미스트 콜렉터, 공압 분말 이송 시스템 및 산업용 세정제.\n\n청소 시스템: 상업용 진공 청소기, 도로 및 산업용 청소차, 자동 스크러버 및 건조기, 전자식 고속 버핑 머신 및 화학 보완 제품.",
            ar: "أنظمة معلومات الوقت: محطات القياس الحيوي لبطاقات ID/IC، وبرامج الوقت والحضور، وأنظمة الوصول إلى الأبواب، ومسجلات الوقت التقليدية، ومسجلات الوقت المحوسبة، وطوابع الوقت، ومسجلات وقت الدوريات، وبطاقات الوقت، والملحقات.\n\nأنظمة وقوف السيارات: أنظمة محطات الدفع الآلي، وأنظمة محطات الدفع غير الآلية، وبرامج إدارة المرافق، وأنظمة إدارة مساحات وقوف السيارات، وأنظمة بوابات الأمان.\n\nالأنظمة البيئية: جامعات الغبار الصغيرة، وجامعات الغبار واسعة النطاق، والمكانس الكهربائية الصناعية، وجامعات الضباب، وأنظمة النقل الهوائي للمسحوق، والمنظفات الصناعية.\n\nأنظمة التنظيف: المكانس الكهربائية التجارية، وكاسحات الطرق والصناعية، وأجهزة الفرك والتجفيف التلقائية، وآلات التلميع الإلكترونية عالية السرعة، والمنتجات الكيميائية التكميلية."
          }
        }
      ]
    }]
  },
  "brother": {
    slug: "brother",
    name: "Brother",
    logo: "/image/brand/brother.png",
    coverImage: "/image/brand/brother.png",
    description: "Menghadirkan inovasi dalam teknologi pencetakan dan solusi kantor dengan slogan 'At Your Side'.",
    products: [{
      name: "Printing & Solutions",
      images: ["/image/brand/dekripsi_produk/BROTHER/1.jpg"],
      description: {
        id: "Produk Brother berkisar di peralatan kantor. Brother meluaskan bisnisnya ke lebih dari 40 negara untuk menghadirkan produk dan pelayanan ke pelanggan di seluruh dunia.",
        en: "Brother's products range across office equipment. Brother has expanded its business to more than 40 countries to deliver products and services to customers worldwide.",
        zh: "Brother的产品范围涵盖办公设备。Brother已将其业务扩展到40多个国家，为全球客户提供产品和服务。",
        ja: "ブラザーの製品はオフィス機器全般に及びます。ブラザーは世界中のお客様に製品とサービスを提供するため、40か国以上に事業を拡大しています。",
        ko: "Brother의 제품은 사무기기 전반에 걸쳐 있습니다. Brother는 전 세계 고객에게 제품과 서비스를 제공하기 위해 40개국 이상으로 사업을 확장했습니다.",
        ar: "تتراوح منتجات براذر عبر معدات المكاتب. قامت براذر بتوسيع أعمالها لتشمل أكثر من 40 دولة لتقديم المنتجات والخدمات للعملاء في جميع أنحاء العالم."
      },
      plans: [
        { 
          name: {
            id: "Merek Jepang",
            en: "Japanese Brand",
            zh: "日本品牌",
            ja: "日本のブランド",
            ko: "일본 브랜드",
            ar: "علامة تجارية يابانية"
          }, 
          details: {
            id: "Printer, Printer Multifungsi, Faksimil, Scanner, dan lain-lain.",
            en: "Printers, Multifunction Printers, Facsimiles, Scanners, and others.",
            zh: "打印机，多功能打印机，传真机，扫描仪等。",
            ja: "プリンター、多機能プリンター、ファクシミリ、スキャナーなど。",
            ko: "프린터, 다기능 프린터, 팩시밀리, 스캐너 등.",
            ar: "الطابعات، والطابعات متعددة الوظائف، وأجهزة الفاكس، والماسحات الضوئية، وغيرها."
          }
        }
      ]
    }]
  },

  
  "cas": {
    slug: "cas",
    name: "CAS",

    logo: "/image/brand/cas.png",
    coverImage: "/image/brand/cas.png",
    description: "CAS Corporation adalah produsen timbangan digital global yang menyediakan solusi penimbangan presisi untuk industri dan komersial.",
    products: [{
      name: "Digital Weighing Scales",
      images: ["https://images.unsplash.com/photo-1590235246717-383b82129873?auto=format&fit=crop&q=80&w=1000"],
      description: "Timbangan presisi tinggi untuk akurasi data yang optimal.",
      plans: [{ name: "Pilihan Produk", details: "Commercial Scales, Industrial Scales, Lab Balances." }]
    }]
  },

  "commax": {
    slug: "commax",
    name: "Commax",
    logo: "/image/brand/commax.png",
    coverImage: "/image/brand/commax.png",
    description: "Spesialis dalam sistem interkom dan keamanan pintar, membawa keamanan ke pintu rumah dan kantor Anda.",
    products: [{
      name: "Smart Home & Security",
      images: ["/image/brand/dekripsi_produk/COMMAX/1.jpg"],
      description: {
        id: "COMMAX adalah merek terkemuka yang menyediakan solusi rumah pintar (smart home) mutakhir, diakui secara global atas keunggulan dan inovasinya.",
        en: "COMMAX is a leading brand providing cutting-edge smart home solutions, recognized globally for its excellence and innovation.",
        zh: "COMMAX是一个提供尖端智能家居解决方案的领先品牌，其卓越和创新在全球范围内获得认可。",
        ja: "COMMAXは最先端のスマートホームソリューションを提供するトップブランドであり、その卓越性と革新性で世界的に認められています。",
        ko: "COMMAX는 최첨단 스마트 홈 솔루션을 제공하는 선도적인 브랜드로 우수성과 혁신성으로 전 세계적으로 인정받고 있습니다.",
        ar: "كوماكس هي علامة تجارية رائدة توفر حلول المنازل الذكية المتطورة، ومعترف بها عالمياً لتميزها وابتكارها."
      },
      plans: [
        { 
          name: {
            id: "Merek Korea",
            en: "Korean Brand",
            zh: "韩国品牌",
            ja: "韓国ブランド",
            ko: "한국 브랜드",
            ar: "علامة تجارية كورية"
          }, 
          details: {
            id: "Video Door Phones, Intercoms, Smart Home Systems, CCTV.",
            en: "Video Door Phones, Intercoms, Smart Home Systems, CCTV.",
            zh: "可视对讲，对讲机，智能家居系统，闭路电视。",
            ja: "ビデオドアホン、インターホン、スマートホームシステム、CCTV。",
            ko: "비디오 도어폰, 인터폰, 스마트 홈 시스템, CCTV.",
            ar: "هواتف الباب المرئية، والاتصال الداخلي، وأنظمة المنازل الذكية، وكاميرات المراقبة."
          }
        }
      ]
    }]
  },
  "cp-plus": {
    slug: "cp-plus",
    name: "CP Plus",
    logo: "/image/brand/cp-plus.png",
    coverImage: "/image/brand/cp-plus.png",
    description: "Penyedia solusi keamanan dan pengawasan global terkemuka dengan teknologi kamera CCTV tercanggih.",
    products: [{
      name: "CCTV & Surveillance",
      images: ["/image/brand/dekripsi_produk/CP PLUS/1.png"],
      description: {
        id: "CP PLUS, pemimpin global dari solusi keamanan dan pengawasan yang canggih, bertumbuh dari CP PLUS GmbH & Co. KG., Hamburg, Jerman. Janji CP PLUS adalah “Seumur hidup membuat mimpi PENGAWASAN KAPANPUN, DIMANAPUN anda menjadi kenyataan.”",
        en: "CP PLUS, a global leader in advanced security and surveillance solutions, grew out of CP PLUS GmbH & Co. KG., Hamburg, Germany. The CP PLUS promise is “To make your ANYWHERE, ANYTIME SURVEILLANCE dreams come true for a lifetime.”",
        zh: "CP PLUS是先进安全和监控解决方案的全球领导者，源自德国汉堡的CP PLUS GmbH＆Co. KG。CP PLUS的承诺是“一生让您‘随时随地监控’的梦想成真。”",
        ja: "CP PLUSは、高度なセキュリティと監視ソリューションのグローバルリーダーであり、ドイツ・ハンブルクのCP PLUS GmbH＆Co. KGから成長しました。CP PLUSの約束は「いつでもどこでも監視できる夢を一生実現する」ことです。",
        ko: "고급 보안 및 감시 솔루션의 글로벌 리더인 CP PLUS는 독일 함부르크의 CP PLUS GmbH & Co. KG.에서 성장했습니다. CP PLUS의 약속은 “언제 어디서나 감시의 꿈을 평생 실현하는 것”입니다.",
        ar: "نمت CP PLUS، الشركة الرائدة عالميًا في حلول الأمان والمراقبة المتقدمة، من CP PLUS GmbH & Co. KG.، هامبورغ، ألمانيا. وعد CP PLUS هو “لجعل أحلام المراقبة في أي مكان وزمان تتحقق مدى الحياة.”"
      },
      plans: [
        { 
          name: {
            id: "Merek Jerman",
            en: "German Brand",
            zh: "德国品牌",
            ja: "ドイツのブランド",
            ko: "독일 브랜드",
            ar: "علامة تجارية ألمانية"
          }, 
          details: {
            id: "Produk Surveillans, Waktu & Kehadiran, dan Home Solutions.",
            en: "Surveillance Products, Time & Attendance, and Home Solutions.",
            zh: "监控产品，考勤和家庭解决方案。",
            ja: "監視製品、出退勤管理、およびホームソリューション。",
            ko: "감시 제품, 근태 관리 및 홈 솔루션.",
            ar: "منتجات المراقبة والوقت والحضور والحلول المنزلية."
          }
        }
      ]
    }]
  },
  "dobot": {
    slug: "dobot",
    name: "Dobot",
    logo: "/image/brand/dobot-1.png",
    coverImage: "/image/brand/dobot-1.png",
    description: "DOBOT adalah penyedia terkemuka dunia untuk solusi lengan robotik cerdas, didedikasikan untuk pengembangan robot serbaguna.",
    products: [{
      name: "DOBOT Magician",
      images: [
        "/image/brand/dekripsi_produk/DOBOT/Dobot-Magician.png",
        "/image/brand/dekripsi_produk/DOBOT/2.png",
        "/image/brand/dekripsi_produk/DOBOT/3.png",
        "/image/brand/dekripsi_produk/DOBOT/4.png",
        "/image/brand/dekripsi_produk/DOBOT/5.png",
        "/image/brand/dekripsi_produk/DOBOT/6.png",
        "/image/brand/dekripsi_produk/DOBOT/7.png",
        "/image/brand/dekripsi_produk/DOBOT/8.png"
      ],
      description: {
        id: "Dobot adalah penyedia solusi robotika cerdas yang inovatif, ideal untuk pendidikan, manufaktur, dan aplikasi kreatif.",
        en: "Dobot is a provider of innovative intelligent robotics solutions, ideal for education, manufacturing, and creative applications.",
        zh: "Dobot是一家创新的智能机器人解决方案供应商，是教育、制造和创意应用的理想选择。",
        ja: "Dobotは革新的なインテリジェントロボティクスソリューションのプロバイダーであり、教育、製造、およびクリエイティブなアプリケーションに最適です。",
        ko: "Dobot은 교육, 제조 및 창조적 응용 분야에 이상적인 혁신적인 지능형 로봇 솔루션 제공업체입니다.",
        ar: "دوبوت هي شركة تقدم حلول روبوتات ذكية ومبتكرة، مثالية للتعليم والتصنيع والتطبيقات الإبداعية."
      },
      plans: [
        { 
          name: {
            id: "Merek Global",
            en: "Global Brand",
            zh: "全球品牌",
            ja: "グローバルブランド",
            ko: "글로벌 브랜드",
            ar: "علامة تجارية عالمية"
          }, 
          details: {
            id: "Robotic Arms, Educational Robots, Industrial Robots.",
            en: "Robotic Arms, Educational Robots, Industrial Robots.",
            zh: "机械臂，教育机器人，工业机器人。",
            ja: "ロボットアーム、教育用ロボット、産業用ロボット。",
            ko: "로봇 팔, 교육용 로봇, 산업용 로봇.",
            ar: "الأذرع الآلية، الروبوتات التعليمية، الروبوتات الصناعية."
          }
        }
      ]
    }]
  },
  "ks-tools": { 
    slug: "ks-tools",
    name: "KS Tools",
    logo: "/image/brand/ks-tools.png",
    coverImage: "/image/brand/ks-tools.png",
    description: "Produsen perkakas tangan dan khusus asal Jerman yang terkenal dengan kualitas dan durabilitas luar biasa.",
    products: [{
      name: "Professional Hand Tools",
      images: ["/image/brand/dekripsi_produk/KSTOOLS/1.jpg"],
      description: {
        id: "Selama 22 tahun, KS Tools sebagai penyedia perkakas modern telah terus menerus menyediakan solusi setiap hari dan perkakas yang inovatif untuk kebutuhan yang terus menerus berubah untuk hidup kita sehari-hari. Kualitas yang impresif, teknologi yang sangat baik untuk kenyamanan dan kontrol, serta harga yang kompetitif, sangat disukai oleh banyak pengguna di seluruh dunia.",
        en: "For 22 years, KS Tools as a modern tool provider has continuously provided daily solutions and innovative tools for the ever-changing needs of our daily lives. Impressive quality, excellent technology for comfort and control, and competitive prices are highly favored by many users worldwide.",
        zh: "22年来，KS Tools作为一家现代工具提供商，不断为我们日常生活中不断变化的需求提供日常解决方案和创新工具。令人印象深刻的质量、舒适和控制的出色技术以及具有竞争力的价格受到全球许多用户的高度青睐。",
        ja: "22年間にわたり、KS Toolsは最新のツールプロバイダーとして、私たちの日常生活の絶え間なく変化するニーズに対して、日常のソリューションと革新的なツールを継続的に提供してきました。印象的な品質、快適さとコントロールのための優れた技術、そして競争力のある価格は、世界中の多くのユーザーに非常に好まれています。",
        ko: "22년 동안 KS Tools는 최신 도구 제공업체로서 일상생활의 끊임없이 변화하는 요구에 대한 일상적인 솔루션과 혁신적인 도구를 지속적으로 제공해 왔습니다. 인상적인 품질, 편안함과 제어를 위한 뛰어난 기술, 경쟁력 있는 가격은 전 세계 많은 사용자들에게 큰 사랑을 받고 있습니다.",
        ar: "على مدار 22 عامًا، استمرت KS Tools كمزود للأدوات الحديثة في توفير الحلول اليومية والأدوات المبتكرة للاحتياجات المتغيرة باستمرار لحياتنا اليومية. الجودة المذهلة والتكنولوجيا الممتازة للراحة والتحكم والأسعار التنافسية مفضلة للغاية من قبل العديد من المستخدمين في جميع أنحاء العالم."
      },
      plans: [
        { 
          name: {
            id: "Merek Jerman",
            en: "German Brand",
            zh: "德国品牌",
            ja: "ドイツのブランド",
            ko: "독일 브랜드",
            ar: "علامة تجارية ألمانية"
          }, 
          details: {
            id: "DUO GEARplus Ratchet Spanner, Classic Socket Set, Classic Pliers, Combination spanner set, Electronic Professional Stethoscope, ERGOTORQUE plus Screwdriver, Hex Key Wrench, High Voltage (VDE) Tools, Impact Socket, Master Line Cabinet, Monster Pneumatic Impact Wrench, Slogging Spanner, Spiral Profile Socket, TORSION Power Bit, ULTIMATE Vision Basic Video Scope Set, Universal Tools Set, dan masih banyak lagi.",
            en: "DUO GEARplus Ratchet Spanner, Classic Socket Set, Classic Pliers, Combination spanner set, Electronic Professional Stethoscope, ERGOTORQUE plus Screwdriver, Hex Key Wrench, High Voltage (VDE) Tools, Impact Socket, Master Line Cabinet, Monster Pneumatic Impact Wrench, Slogging Spanner, Spiral Profile Socket, TORSION Power Bit, ULTIMATE Vision Basic Video Scope Set, Universal Tools Set, and many more.",
            zh: "DUO GEARplus棘轮扳手，经典套筒套装，经典钳子，组合扳手套装，电子专业听诊器，ERGOTORQUE plus螺丝刀，内六角扳手，高压（VDE）工具，冲击套筒，主线柜，Monster气动冲击扳手，敲击扳手，螺旋轮廓套筒，TORSION动力头，ULTIMATE Vision基础视频内窥镜套装，通用工具套装等等。",
            ja: "DUO GEARplusラチェットスパナ、クラシックソケットセット、クラシックプライヤー、コンビネーションスパナセット、電子プロフェッショナル聴診器、ERGOTORQUE plusドライバー、六角棒レンチ、高電圧（VDE）ツール、インパクトソケット、マスターラインキャビネット、モンスター空気圧インパクトレンチ、打撃スパナ、スパイラルプロファイルソケット、TORSIONパワービット、ULTIMATE Visionベーシックビデオスコープセット、ユニバーサルツールセットなど。",
            ko: "DUO GEARplus 래칫 스패너, 클래식 소켓 세트, 클래식 플라이어, 콤비네이션 스패너 세트, 전자 전문 청진기, ERGOTORQUE plus 스크루드라이버, 육각 키 렌치, 고전압(VDE) 도구, 임팩트 소켓, 마스터 라인 캐비닛, 몬스터 공압 임팩트 렌치, 타격 스패너, 나선형 프로파일 소켓, TORSION 파워 비트, ULTIMATE Vision 기본 비디오 스코프 세트, 유니버셜 도구 세트 등.",
            ar: "مفتاح الربط DUO GEARplus، مجموعة المقابس الكلاسيكية، كماشة كلاسيكية، مجموعة مفاتيح ربط مجمعة، سماعة طبية احترافية إلكترونية، مفك براغي ERGOTORQUE plus، مفتاح سداسي، أدوات الجهد العالي (VDE)، مقبس صدمي، خزانة Master Line، مفتاح ربط صدمي هوائي Monster، مفتاح ربط بالدق، مقبس لولبي، لقمة TORSION Power، مجموعة منظار فيديو ULTIMATE Vision Basic، مجموعة أدوات عالمية، وغيرها الكثير."
          }
        }
      ]
    }]
  },
  "m7": {
    slug: "m7",
    name: "M7",
    logo: "/image/brand/m7.png",
    coverImage: "/image/brand/m7.png",
    description: "Mighty Seven (M7) menyediakan alat pneumatik (air tools) yang kuat untuk aplikasi otomotif dan industri berat.",
    products: [{
      name: "Pneumatic Air Tools",
      images: [
        "/image/brand/dekripsi_produk/M7/1.png",
        "/image/brand/dekripsi_produk/M7/2.jpg",
        "/image/brand/dekripsi_produk/M7/3.jpg"
      ],
      description: {
        id: "Ketika M7 mengembangkan produk-produk seperti kunci pas dengan tenaga angin NC-4610, pelanggan M7 adalah dorongan dan fokus utamanya. Dengan membangun kepercayaan dan komunikasi yang baik dengan partner, distributor dan pelanggan, M7 dapat dengan cepat mengerti apa yang dicari oleh setiap pelanggan dan motivasinya mencari alat-alat.",
        en: "When M7 develops products such as the NC-4610 pneumatic impact wrench, M7 customers are the main driver and focus. By building trust and good communication with partners, distributors, and customers, M7 can quickly understand what each customer is looking for and their motivation for seeking tools.",
        zh: "当M7开发NC-4610气动扳手等产品时，M7的客户是其主要动力和焦点。通过与合作伙伴、分销商和客户建立信任和良好的沟通，M7可以快速了解每个客户的需求及其寻找工具的动机。",
        ja: "M7がNC-4610空気圧インパクトレンチなどの製品を開発する際、M7の顧客が主な原動力であり焦点です。パートナー、ディストリビューター、顧客との信頼と良好なコミュニケーションを築くことで、M7は各顧客が求めているものやツールを探す動機を迅速に理解することができます。",
        ko: "M7이 NC-4610 공압 임팩트 렌치와 같은 제품을 개발할 때 M7 고객은 주요 원동력이자 초점입니다. 파트너, 유통업체 및 고객과 신뢰와 원활한 소통을 구축함으로써 M7은 각 고객이 찾는 것과 도구를 찾는 동기를 신속하게 파악할 수 있습니다.",
        ar: "عندما تطور M7 منتجات مثل مفتاح الربط الصدمي الهوائي NC-4610، فإن عملاء M7 هم الدافع والتركيز الرئيسي. من خلال بناء الثقة والتواصل الجيد مع الشركاء والموزعين والعملاء، يمكن لـ M7 أن تفهم بسرعة ما يبحث عنه كل عميل ودوافعهم للبحث عن الأدوات."
      },
      plans: [
        { 
          name: {
            id: "Merek Taiwan",
            en: "Taiwanese Brand",
            zh: "台湾品牌",
            ja: "台湾ブランド",
            ko: "대만 브랜드",
            ar: "علامة تجارية تايوانية"
          }, 
          details: {
            id: "Air Tools: Air Impact Wrench, Air Ratchet Wrench, Air Die Grinder, Air Angle Grinder, Air Belt Sander, Air Sander, Air Cutting Tools, Air Drill, Air Screwdriver, Spring Balancer, Air Hammer, Air Needle Scaler, Air Hydraulic Riveter, Air Grease Gun, Air Blow Gun, Auto Repair Tool, Filter Regulator Lubricator, Air Hose Reel, Air Nailer/Air Stapler, Mobile Cabinets, Tool DisplaySeri 0.5 HP, Retailer Promotion\n\nPower Tools: Cordless Tools\n\nSocket: Impact Standard Socket, Impact Deep Socket, Locking Ring/Pin, SAE Impact Hex Driver, Bit Holder, Driver Male Adapter, Drive Universal Joint, Extension Bar\n\nAccessories: Bits, Grinding Categories, Various Couplers, Repair Kit, and Other Categories\n\nIndustry Endurance:Shut-off Screwdriver\n\nAuto Tools: Torque Wrench Rotating Ring Type, Torque Wrench Back Tuning Type, Torque Wrench,",
            en: "Air Tools: Air Impact Wrench, Air Ratchet Wrench, Air Die Grinder, Air Angle Grinder, Air Belt Sander, Air Sander, Air Cutting Tools, Air Drill, Air Screwdriver, Spring Balancer, Air Hammer, Air Needle Scaler, Air Hydraulic Riveter, Air Grease Gun, Air Blow Gun, Auto Repair Tool, Filter Regulator Lubricator, Air Hose Reel, Air Nailer/Air Stapler, Mobile Cabinets, Tool Display 0.5 HP Series, Retailer Promotion\n\nPower Tools: Cordless Tools\n\nSocket: Impact Standard Socket, Impact Deep Socket, Locking Ring/Pin, SAE Impact Hex Driver, Bit Holder, Driver Male Adapter, Drive Universal Joint, Extension Bar\n\nAccessories: Bits, Grinding Categories, Various Couplers, Repair Kit, and Other Categories\n\nIndustry Endurance: Shut-off Screwdriver\n\nAuto Tools: Torque Wrench Rotating Ring Type, Torque Wrench Back Tuning Type, Torque Wrench,",
            zh: "气动工具：气动冲击扳手，气动棘轮扳手，气动模具研磨机，气动角磨机，气动砂带机，气动打磨机，气动切割工具，气动钻，气动螺丝刀，弹簧平衡器，气锤，气动针束除锈机，气动液压铆钉机，气动黄油枪，气动吹尘枪，汽车维修工具，过滤调节润滑器，气管卷轴，气动钉枪/订书机，移动橱柜，工具展示0.5马力系列，零售商促销\n\n电动工具：无绳工具\n\n套筒：冲击标准套筒，冲击深套筒，锁紧环/销，SAE冲击六角起子，批头架，起子阳头适配器，驱动万向节，延长杆\n\n附件：批头，研磨类别，各种接头，修理包和其他类别\n\n工业耐力：自动关断螺丝刀\n\n汽车工具：旋转环型扭矩扳手，背调式扭矩扳手，扭矩扳手，",
            ja: "エアツール：エアインパクトレンチ、エアラチェットレンチ、エアダイグラインダー、エアアングルグラインダー、エアベルトサンダー、エアサンダー、エア切断ツール、エアドリル、エアドライバー、スプリングバランサー、エアハンマー、エアニードルスケーラー、エア油圧リベッター、エアグリースガン、エアブローガン、自動車修理ツール、フィルターレギュレータールブリケーター、エアホースリール、エアネイラー/エアステープラー、モバイルキャビネット、ツールディスプレイ0.5 HPシリーズ、小売業プロモーション\n\n電動工具：コードレスツール\n\nソケット：インパクト標準ソケット、インパクトディープソケット、ロッキングリング/ピン、SAEインパクトヘックスドライバー、ビットホルダー、ドライバーオスアダプター、ドライブユニバーサルジョイント、エクステンションバー\n\nアクセサリー：ビット、研削カテゴリー、各種カプラー、修理キット、およびその他のカテゴリー\n\n産業用耐久性：シャットオフドライバー\n\n自動車用ツール：回転リングタイプトルクレンチ、バックチューニングタイプトルクレンチ、トルクレンチ、",
            ko: "에어 툴: 에어 임팩트 렌치, 에어 래칫 렌치, 에어 다이 그라인더, 에어 앵글 그라인더, 에어 벨트 샌더, 에어 샌더, 에어 커팅 툴, 에어 드릴, 에어 스크루드라이버, 스프링 밸런서, 에어 해머, 에어 니들 스케일러, 에어 유압 리베터, 에어 그리스 건, 에어 블로우 건, 자동차 수리 도구, 필터 레귤레이터 윤활기, 에어 호스 릴, 에어 네일러/에어 스테이플러, 이동식 캐비닛, 툴 디스플레이 0.5 HP 시리즈, 소매점 프로모션\n\n전동 공구: 무선 도구\n\n소켓: 임팩트 표준 소켓, 임팩트 딥 소켓, 잠금 링/핀, SAE 임팩트 육각 드라이버, 비트 홀더, 드라이버 수 어댑터, 드라이브 유니버설 조인트, 연장 바\n\n액세서리: 비트, 연마 범주, 다양한 커플러, 수리 키트 및 기타 범주\n\n산업 내구성: 차단 스크루드라이버\n\n자동차 공구: 토크 렌치 회전 링 유형, 토크 렌치 후면 튜닝 유형, 토크 렌치,",
            ar: "أدوات الهواء: مفتاح ربط صدمي هوائي، مفتاح سقاطة هوائي، مطحنة قوالب هوائية، مطحنة زاوية هوائية، صنفرة حزام هوائية، صنفرة هوائية، أدوات قطع هوائية، مثقاب هوائي، مفك براغي هوائي، موازن زنبركي، مطرقة هوائية، قشارة إبرة هوائية، مبرشم هيدروليكي هوائي، مسدس شحم هوائي، مسدس نفخ هوائي، أداة إصلاح السيارات، مرشح منظم مشحم، بكرة خرطوم هواء، مسدس مسامير/دباسة هوائية، خزائن متحركة، عرض أدوات سلسلة 0.5 حصان، ترويج التجزئة\n\nالأدوات الكهربائية: أدوات لاسلكية\n\nالمقبس: مقبس قياسي صدمي، مقبس عميق صدمي، حلقة/دبوس قفل، مفك سداسي صدمي SAE، حامل لقمة، محول ذكر مفك، مفصل عالمي للمحرك، قضيب تمديد\n\nالملحقات: لقم، فئات الطحن، وصلات مختلفة، مجموعة إصلاح، وفئات أخرى\n\nقدرة التحمل الصناعية: مفك براغي مغلق\n\nأدوات السيارات: مفتاح عزم الدوران من نوع الحلقة الدوارة، مفتاح عزم الدوران من نوع الضبط الخلفي، مفتاح عزم الدوران،"
          }
        }
      ]
    }]
  },
  "northman": {
    slug: "northman",
    name: "Northman",
    logo: "/image/brand/northman2.png",
    coverImage: "/image/brand/northman2.png",
    description: "Spesialis dalam komponen hidrolik, Northman memproduksi katup dan pompa berkualitas untuk kontrol fluida.",
    products: [{
      name: "Hydraulic Components",
      images: ["/image/brand/dekripsi_produk/nortman/1.jpg"],
      description: {
        id: "Northman adalah hidrolik dari Taiwan. Northman mengangkat arti teknologi, alternatif yang diterima oleh lingkungan melalui proses kualitas yang ketat untuk memenuhi ekspektasi pelanggan untuk meningkatkan produktivitas dan menurunkan biaya operasional, sambil menghargai lingkungan.",
        en: "Northman is a hydraulic brand from Taiwan. Northman promotes the meaning of technology and environmentally acceptable alternatives through strict quality processes to meet customer expectations of increasing productivity and lowering operational costs, while respecting the environment.",
        zh: "Northman是来自台湾的液压品牌。Northman通过严格的质量流程提升技术和环保替代品的意义，以满足客户提高生产力和降低运营成本的期望，同时尊重环境。",
        ja: "Northmanは台湾の油圧ブランドです。Northmanは、生産性の向上と運用コストの削減という顧客の期待に応えるため、環境を尊重しながら、厳格な品質プロセスを通じて技術と環境に配慮した代替品の意義を推進しています。",
        ko: "Northman은 대만의 유압 브랜드입니다. Northman은 환경을 존중하면서 생산성 향상과 운영 비용 절감이라는 고객의 기대에 부응하기 위해 엄격한 품질 프로세스를 통해 기술과 환경적으로 수용 가능한 대안의 의미를 홍보합니다.",
        ar: "نورثمان هي علامة تجارية هيدروليكية من تايوان. تعزز نورثمان معنى التكنولوجيا والبدائل المقبولة بيئيًا من خلال عمليات الجودة الصارمة لتلبية توقعات العملاء في زيادة الإنتاجية وخفض تكاليف التشغيل، مع احترام البيئة."
      },
      plans: [
        { 
          name: {
            id: "Merek Taiwan",
            en: "Taiwanese Brand",
            zh: "台湾品牌",
            ja: "台湾ブランド",
            ko: "대만 브랜드",
            ar: "علامة تجارية تايوانية"
          }, 
          details: {
            id: "Hydraulic Control Valves, Solenoid Directional Valves, Hydraulic Cylinders, dan Hydraulic Power Units.",
            en: "Hydraulic Control Valves, Solenoid Directional Valves, Hydraulic Cylinders, and Hydraulic Power Units.",
            zh: "液压控制阀，电磁方向阀，液压缸和液压动力单元。",
            ja: "油圧制御弁、電磁方向弁、油圧シリンダー、および油圧パワーユニット。",
            ko: "유압 제어 밸브, 솔레노이드 방향 밸브, 유압 실린더 및 유압 파워 유닛.",
            ar: "صمامات التحكم الهيدروليكية، والصمامات الاتجاهية الملف اللولبي، والأسطوانات الهيدروليكية، ووحدات الطاقة الهيدروليكية."
          }
        }
      ]
    }]
  },
  "panasonic": {
    slug: "panasonic",
    name: "Panasonic",
    logo: "/image/brand/panasonic.png",
    coverImage: "/image/brand/panasonic.png",
    description: "Setiap saat, pelanggan di seluruh dunia beralih pada Panasonic untuk membuat hidup mereka menjadi lebih mudah, lebih enak, lebih produktif, dan lebih aman.",
    products: [
      {
        name: "Communication & Automation",
        images: [
          "/image/brand/dekripsi_produk/PANASONIC/telepon-pabx-panasonic.jpg",
          "/image/brand/dekripsi_produk/PANASONIC/panasonic-cctv.jpg"
        ],
        description: {
          id: "Setiap saat, pelanggan di seluruh dunia beralih pada Panasonic untuk membuat hidup mereka menjadi lebih mudah, lebih enak, lebih produktif, dan lebih aman. Sejak ditemukan hampir seribu tahun yang lalu, Panasonic berkomitmen untuk membuat hidup lebih baik dan membuat dunia menjadi tempat yang lebih baik.",
          en: "At all times, customers around the world turn to Panasonic to make their lives easier, more enjoyable, more productive, and safer. Since its founding nearly a century ago, Panasonic has been committed to making life better and making the world a better place.",
          zh: "每时每刻，全球的客户都转向松下，以使他们的生活更轻松，更愉快，更高产，更安全。自近一个世纪前成立以来，松下一直致力于让生活变得更美好，让世界变得更美好。",
          ja: "常に、世界中のお客様がより簡単で、より楽しく、より生産的で、より安全な生活を送るためにパナソニックに頼っています。約1世紀前の創業以来、パナソニックは生活をより良くし、世界をより良い場所にすることに尽力してきました。",
          ko: "언제나 전 세계 고객들은 더 쉽고, 즐겁고, 생산적이며, 안전한 삶을 위해 파나소닉을 찾습니다. 거의 한 세기 전 창립 이래 파나소닉은 더 나은 삶과 더 나은 세상을 만들기 위해 최선을 다해 왔습니다.",
          ar: "في جميع الأوقات، يتجه العملاء حول العالم إلى باناسونيك لجعل حياتهم أسهل وأكثر متعة وأكثر إنتاجية وأكثر أمانًا. منذ تأسيسها قبل ما يقرب من قرن من الزمان، التزمت باناسونيك بجعل الحياة أفضل وجعل العالم مكانًا أفضل."
        },
        plans: [{ 
          name: {
            id: "Merek Jepang",
            en: "Japanese Brand",
            zh: "日本品牌",
            ja: "日本のブランド",
            ko: "일본 브랜드",
            ar: "علامة تجارية يابانية"
          }, 
          details: {
            id: "Merek Jepang Sistem Telepon: Telepon Standar, Telepon Tanpa Kabel, Conference Phone, Faksimil, Analog PBX, Hybrid PBX, IP-based PBX, dan NS1000. Solusi Jaringan: CCTV, DVR dan NVR, HD Video Conference, Video Intercom, dan Aksesoris. Peralatan Kantor: Printers, Photocopy Machines, Panaboard, LCD Projector, Printer Toners/Drums, Fax Toner/Drums, dan Aksesoris.",
            en: "Japanese Brand Telephone Systems: Standard Phones, Cordless Phones, Conference Phones, Facsimiles, Analog PBX, Hybrid PBX, IP-based PBX, and NS1000. Network Solutions: CCTV, DVR and NVR, HD Video Conference, Video Intercom, and Accessories. Office Equipment: Printers, Photocopy Machines, Panaboard, LCD Projectors, Printer Toners/Drums, Fax Toners/Drums, and Accessories.",
            zh: "日本品牌电话系统：标准电话，无绳电话，会议电话，传真机，模拟PBX，混合PBX，基于IP的PBX和NS1000。网络解决方案：CCTV，DVR和NVR，高清视频会议，视频对讲和配件。办公设备：打印机，复印机，电子白板，液晶投影仪，打印机碳粉/硒鼓，传真机碳粉/硒鼓和配件。",
            ja: "日本のブランド電話システム：標準電話、コードレス電話、会議電話、ファクシミリ、アナログPBX、ハイブリッドPBX、IPベースPBX、およびNS1000。ネットワークソリューション：CCTV、DVRおよびNVR、HDビデオ会議、ビデオインターホン、およびアクセサリー。オフィス機器：プリンター、コピー機、パナボード、LCDプロジェクター、プリンタートナー/ドラム、ファックストナー/ドラム、およびアクセサリー。",
            ko: "일본 브랜드 전화 시스템: 표준 전화기, 무선 전화기, 회의용 전화기, 팩시밀리, 아날로그 PBX, 하이브리드 PBX, IP 기반 PBX 및 NS1000. 네트워크 솔루션: CCTV, DVR 및 NVR, HD 화상 회의, 비디오 인터폰 및 액세서리. 사무 기기: 프린터, 복사기, 파나보드, LCD 프로젝터, 프린터 토너/드럼, 팩스 토너/드럼 및 액세서리.",
            ar: "أنظمة هواتف العلامة التجارية اليابانية: الهواتف القياسية، والهواتف اللاسلكية، وهواتف المؤتمرات، وأجهزة الفاكس، و PBX التناظري، و PBX الهجين، و PBX القائم على IP، و NS1000. حلول الشبكات: كاميرات المراقبة، و DVR و NVR، ومؤتمرات الفيديو عالية الدقة، والاتصال الداخلي عبر الفيديو، والملحقات. معدات المكاتب: الطابعات، وآلات التصوير، وبانابورد، وأجهزة العرض LCD، وأحبار الطابعات / الطبول، وأحبار الفاكس / الطبول، والملحقات."
          }
        }]
      }
    ]
  },
  "plantronics": {
    slug: "plantronics",
    name: "Plantronics",
    logo: "/image/brand/plantronics.png",
    coverImage: "/image/brand/plantronics.png",
    description: "Pioneer dalam teknologi audio, menyediakan headset berkualitas tinggi untuk komunikasi bisnis yang jernih.",
    products: [{
      name: "Audio Solutions",
      images: ["/image/brand/dekripsi_produk/PLANTRONICS/1.jpg"],
      description: {
        id: "Plantronics adalah pionir headset ringan, headset ponsel, teknologi penghilang kebisingan dan pengeras suara pribadi, selalu didorong oleh satu tujuan: menghilangkan hambatan untuk komunikasi yang cerdas.",
        en: "Plantronics is a pioneer in lightweight headsets, mobile phone headsets, noise-canceling technology, and personal speakerphones, always driven by one goal: removing barriers to smarter communication.",
        zh: "Plantronics是轻型耳机、手机耳机、降噪技术和个人扬声器的先驱，始终受一个目标驱动：消除智能通信的障碍。",
        ja: "Plantronicsは、軽量ヘッドセット、携帯電話ヘッドセット、ノイズキャンセリング技術、およびパーソナルスピーカーフォンのパイオニアであり、よりスマートなコミュニケーションへの障壁を取り除くという1つの目標に常に駆り立てられています。",
        ko: "Plantronics는 경량 헤드셋, 휴대폰 헤드셋, 소음 제거 기술 및 개인용 스피커폰의 선구자로서 항상 더 스마트한 커뮤니케이션의 장벽을 제거한다는 한 가지 목표를 향해 나아갑니다.",
        ar: "بلانترونكس هي شركة رائدة في سماعات الرأس خفيفة الوزن وسماعات الهاتف المحمول وتكنولوجيا إلغاء الضوضاء ومكبرات الصوت الشخصية، مدفوعة دائمًا بهدف واحد: إزالة الحواجز أمام اتصال أكثر ذكاءً."
      },
      plans: [
        { 
          name: {
            id: "Merek USA",
            en: "USA Brand",
            zh: "美国品牌",
            ja: "米国のブランド",
            ko: "미국 브랜드",
            ar: "علامة تجارية أمريكية"
          }, 
          details: {
            id: "Bluetooth Headsets, Wireless Headsets, Corded Headsets, Speakerphones, Telepon, dan Aksesoris.",
            en: "Bluetooth Headsets, Wireless Headsets, Corded Headsets, Speakerphones, Telephones, and Accessories.",
            zh: "蓝牙耳机，无线耳机，有线耳机，扬声器，电话和配件。",
            ja: "Bluetoothヘッドセット、ワイヤレスヘッドセット、有線ヘッドセット、スピーカーフォン、電話、およびアクセサリー。",
            ko: "블루투스 헤드셋, 무선 헤드셋, 유선 헤드셋, 스피커폰, 전화기 및 액세서리.",
            ar: "سماعات بلوتوث، وسماعات لاسلكية، وسماعات سلكية، ومكبرات صوت، وهواتف، وملحقات."
          }
        }
      ]
    }]
  },
  "polycom": {
    slug: "polycom",
    name: "Polycom",
    logo: "/image/brand/polycom.png",
    coverImage: "/image/brand/polycom.png",
    description: "Pemimpin global dalam solusi kolaborasi video dan suara, memungkinkan tim untuk bekerja bersama dari jarak jauh.",
    products: [{
      name: "Conference Systems",
      images: ["/image/brand/dekripsi_produk/POLYCOM/1.jpg"],
      description: {
        id: "Polycom adalah sebuah merek yang berspesialisasi pada telepon dan video konferensi. Polycom membantu organisasi-organisasi untuk mengeluarkan kemampuan kolaborasi antar staff. Polycom menyediakan solusi kolaborasi yang fleksibel untuk segala jenis lingkungan.",
        en: "Polycom is a brand specializing in telephone and video conferencing. Polycom helps organizations unleash staff collaboration capabilities. Polycom provides flexible collaboration solutions for any environment.",
        zh: "Polycom是一个专门从事电话和视频会议的品牌。Polycom帮助组织释放员工协作能力。Polycom为各种环境提供灵活的协作解决方案。",
        ja: "Polycomは電話およびビデオ会議を専門とするブランドです。Polycomは、組織がスタッフのコラボレーション能力を最大限に引き出すのを支援します。Polycomは、あらゆる環境に対応する柔軟なコラボレーションソリューションを提供します。",
        ko: "Polycom은 전화 및 화상 회의를 전문으로 하는 브랜드입니다. Polycom은 조직이 직원의 협업 역량을 발휘하도록 돕습니다. Polycom은 모든 환경에 유연한 협업 솔루션을 제공합니다.",
        ar: "بوليكوم هي علامة تجارية متخصصة في المؤتمرات الهاتفية والمرئية. تساعد بوليكوم المؤسسات على إطلاق قدرات التعاون بين الموظفين. توفر بوليكوم حلول تعاون مرنة لأي بيئة."
      },
      plans: [
        { 
          name: {
            id: "Merek USA",
            en: "USA Brand",
            zh: "美国品牌",
            ja: "米国のブランド",
            ko: "미국 브랜드",
            ar: "علامة تجارية أمريكية"
          }, 
          details: {
            id: "Telepon Konferensi, VoIP Telepon, Audio yang sudah terpasang, dan Solusi Konferensi Video.",
            en: "Conference Phones, VoIP Phones, Installed Audio, and Video Conference Solutions.",
            zh: "会议电话，VoIP电话，已安装音频和视频会议解决方案。",
            ja: "会議電話、VoIP電話、インストール済みオーディオ、およびビデオ会議ソリューション。",
            ko: "회의용 전화기, VoIP 전화기, 설치된 오디오 및 화상 회의 솔루션.",
            ar: "هواتف المؤتمرات، وهواتف VoIP، والصوت المثبت، وحلول المؤتمرات المرئية."
          }
        }
      ]
    }]
  },
  "sahitel": {
    slug: "sahitel",
    name: "Sahitel",
    logo: "/image/brand/sahitel.png",
    coverImage: "/image/brand/sahitel.png",
    description: "Penyedia perangkat telepon kabel dan nirkabel yang terjangkau dan handal untuk kebutuhan rumah tangga dan bisnis.",
    products: [{
      name: "Telephony Systems",
      images: ["/image/brand/dekripsi_produk/SAHITEL/1.jpg"],
      description: {
        id: "Sahitel memproduksi variasi produk yang luas, mulai dari analog hingga digital, seperti telepon, pengeras suara, dan lampu LED. Sahitel berkomitmen untuk memberikan produk berkualitas dan berada didekat pelanggan untuk memberikan jaminan kepuasan.",
        en: "Sahitel produces a wide variety of products, from analog to digital, such as telephones, speakerphones, and LED lights. Sahitel is committed to delivering quality products and being close to customers to provide guaranteed satisfaction.",
        zh: "Sahitel生产各种产品，从模拟到数字，如电话、扬声器和LED灯。Sahitel致力于提供优质产品，并贴近客户以提供满意的保证。",
        ja: "Sahitelは、電話、スピーカーフォン、LEDライトなど、アナログからデジタルまで多種多様な製品を製造しています。Sahitelは、高品質の製品を提供し、お客様に寄り添って満足を保証することに尽力しています。",
        ko: "Sahitel은 전화기, 스피커폰, LED 조명 등 아날로그에서 디지털에 이르는 다양한 제품을 생산합니다. Sahitel은 고품질 제품을 제공하고 고객과 가까이하여 만족을 보장하기 위해 최선을 다하고 있습니다.",
        ar: "تنتج ساهيتيل مجموعة متنوعة من المنتجات، من التناظرية إلى الرقمية، مثل الهواتف ومكبرات الصوت ومصابيح LED. تلتزم ساهيتيل بتقديم منتجات عالية الجودة والاقتراب من العملاء لتوفير الرضا المضمون."
      },
      plans: [
        { 
          name: {
            id: "Merek Indonesia",
            en: "Indonesian Brand",
            zh: "印尼品牌",
            ja: "インドネシアのブランド",
            ko: "인도네시아 브랜드",
            ar: "علامة تجارية إندونيسية"
          }, 
          details: {
            id: "Telepon Standar, Telepon Tanpa Kabel, PABX, Telepon VoIP, dan SahiLED.",
            en: "Standard Telephones, Cordless Telephones, PABX, VoIP Phones, and SahiLED.",
            zh: "标准电话，无绳电话，PABX，VoIP电话和SahiLED。",
            ja: "標準電話、コードレス電話、PABX、VoIP電話、およびSahiLED。",
            ko: "표준 전화기, 무선 전화기, PABX, VoIP 전화기 및 SahiLED.",
            ar: "هواتف قياسية، هواتف لاسلكية، PABX، هواتف VoIP، و SahiLED."
          }
        }
      ]
    }]
  },
  "samsung": {
    slug: "samsung",
    name: "Samsung",
    logo: "/image/brand/samsung.png",
    coverImage: "/image/brand/samsung.png",
    description: "Samsung Electronics menghadirkan layar profesional dan solusi keamanan digital untuk masa depan yang terhubung.",
    products: [{
      name: "Digital Display & Security",
      images: ["/image/brand/dekripsi_produk/SAMSUNG/1.png"],
      description: {
        id: "Melalui produk dan pelayanan yang inovatif dan dapat diandalkan; orang-orang berbakat; pendekatan yang bertanggung jawab terhadap bisnis dan kewarganegaraan global; dan kolaborasi dengan partner dan pelanggan, Samsung membawa dunia ke arah baru yang imajinatif.",
        en: "Through innovative and reliable products and services; talented people; a responsible approach to business and global citizenship; and collaboration with partners and customers, Samsung is taking the world in imaginative new directions.",
        zh: "通过创新和可靠的产品及服务；才华横溢的员工；对商业和全球公民责任的负责任态度；以及与合作伙伴和客户的合作，三星正在将世界带入充满想象力的新方向。",
        ja: "革新的で信頼性の高い製品とサービス、才能ある人材、ビジネスとグローバル市民権に対する責任あるアプローチ、そしてパートナーや顧客とのコラボレーションを通じて、サムスンは世界を想像力に富んだ新しい方向へと導いています。",
        ko: "혁신적이고 신뢰할 수 있는 제품과 서비스, 재능 있는 인재, 비즈니스 및 글로벌 기업 시민 의식에 대한 책임 있는 접근 방식, 파트너 및 고객과의 협업을 통해 삼성은 상상력이 풍부한 새로운 방향으로 세상을 이끌고 있습니다.",
        ar: "من خلال المنتجات والخدمات المبتكرة والموثوقة؛ والأشخاص الموهوبين؛ والنهج المسؤول تجاه الأعمال والمواطنة العالمية؛ والتعاون مع الشركاء والعملاء، تأخذ سامسونج العالم في اتجاهات خيالية جديدة."
      },
      plans: [
        { 
          name: {
            id: "Merek Korea",
            en: "Korean Brand",
            zh: "韩国品牌",
            ja: "韓国ブランド",
            ko: "한국 브랜드",
            ar: "علامة تجارية كورية"
          }, 
          details: {
            id: "Sistem CCTV: Analogue CCTV Cameras, IP Full HD CCTV Cameras, DVR Security Solution, IP NVR Recorder Solution, dan WiseNet Lite.\n\nKomunikasi: VoIP Phones, Wireless LAN, Telephone Systems, Conference Phones, dan Headsets.\n\nPeralatan Kantor: Mono & Color Laser Printer, Mono & Color Multi-function Printer, dan Supplies.",
            en: "CCTV Systems: Analogue CCTV Cameras, IP Full HD CCTV Cameras, DVR Security Solution, IP NVR Recorder Solution, and WiseNet Lite.\n\nCommunication: VoIP Phones, Wireless LAN, Telephone Systems, Conference Phones, and Headsets.\n\nOffice Equipment: Mono & Color Laser Printers, Mono & Color Multi-function Printers, and Supplies.",
            zh: "CCTV系统：模拟CCTV摄像机，IP全高清CCTV摄像机，DVR安全解决方案，IP NVR记录仪解决方案和WiseNet Lite。\n\n通信：VoIP电话，无线LAN，电话系统，会议电话和耳机。\n\n办公设备：单色和彩色激光打印机，单色和彩色多功能打印机及耗材。",
            ja: "CCTVシステム：アナログCCTVカメラ、IPフルHD CCTVカメラ、DVRセキュリティソリューション、IP NVRレコーダーソリューション、およびWiseNet Lite。\n\n通信：VoIP電話、無線LAN、電話システム、会議電話、およびヘッドセット。\n\nオフィス機器：モノクロおよびカラーレーザープリンター、モノクロおよびカラー多機能プリンター、およびサプライ品。",
            ko: "CCTV 시스템: 아날로그 CCTV 카메라, IP 풀 HD CCTV 카메라, DVR 보안 솔루션, IP NVR 레코더 솔루션 및 WiseNet Lite.\n\n통신: VoIP 전화기, 무선 LAN, 전화 시스템, 회의용 전화기 및 헤드셋.\n\n사무 기기: 흑백 및 컬러 레이저 프린터, 흑백 및 컬러 다기능 프린터 및 소모품.",
            ar: "أنظمة CCTV: كاميرات CCTV التناظرية، وكاميرات CCTV IP Full HD، وحلول أمان DVR، وحلول مسجل IP NVR، و WiseNet Lite.\n\nالاتصالات: هواتف VoIP، والشبكة المحلية اللاسلكية، وأنظمة الهاتف، وهواتف المؤتمرات، وسماعات الرأس.\n\nمعدات المكاتب: طابعات ليزر أحادية وملونة، وطابعات متعددة الوظائف أحادية وملونة، ومستلزمات."
          }
        }
      ]
    }]
  },
  "smc": {
    slug: "smc",
    name: "SMC",
    logo: "/image/brand/smc.png",
    coverImage: "/image/brand/smc.png",
    description: "SMC Corporation adalah produsen komponen otomasi pneumatik terbesar di dunia, menawarkan solusi kontrol fluida presisi.",
    products: [{
      name: "Pneumatic Automation",
      images: [
        "/image/brand/dekripsi_produk/SMC/1.jpg",
        "/image/brand/dekripsi_produk/SMC/2.jpg",
        "/image/brand/dekripsi_produk/SMC/3.jpg"
      ],
      description: {
        id: "Sejak dibentuk, SMC telah menjadi pemimpin dalam teknologi pneumatic, menyediakan industri dengan teknologi dan produk untuk mendukung otomatisasi. SMC menawarkan teknologi selama bertahun-tahun, insinyur yang membawa produk-produk baru, kapasitas produksi yang dapat membuat berbagai macam produk dalam waktu yang singkat, dan jaringan penjualan yang luas di seluruh dunia.",
        en: "Since its establishment, SMC has been a leader in pneumatic technology, providing the industry with technology and products to support automation. SMC offers years of technology, engineers who bring new products, production capacity that can make a wide variety of products in a short time, and a broad sales network worldwide.",
        zh: "自成立以来，SMC一直是气动技术的领导者，为工业界提供支持自动化的技术和产品。SMC提供多年的技术，带来新产品的工程师，能够在短时间内制造各种产品的生产能力，以及遍布全球的广泛销售网络。",
        ja: "設立以来、SMCは空気圧技術のリーダーとして、自動化を支援する技術と製品を産業界に提供してきました。SMCは長年の技術、新製品を生み出すエンジニア、多種多様な製品を短期間で製造できる生産能力、そして世界中の広範な販売ネットワークを提供しています。",
        ko: "설립 이래 SMC는 공압 기술의 리더로서 자동화를 지원하는 기술과 제품을 산업에 제공해 왔습니다. SMC는 수년간의 기술, 신제품을 개발하는 엔지니어, 단시간에 다양한 제품을 만들 수 있는 생산 능력 및 전 세계의 광범위한 판매 네트워크를 제공합니다.",
        ar: "منذ تأسيسها، كانت SMC رائدة في التكنولوجيا الهوائية، حيث زودت الصناعة بالتكنولوجيا والمنتجات لدعم الأتمتة. تقدم SMC سنوات من التكنولوجيا، والمهندسين الذين يجلبون منتجات جديدة، والقدرة الإنتاجية التي يمكن أن تصنع مجموعة متنوعة من المنتجات في وقت قصير، وشبكة مبيعات واسعة في جميع أنحاء العالم."
      },
      plans: [
        { 
          name: {
            id: "Merek Jepang",
            en: "Japanese Brand",
            zh: "日本品牌",
            ja: "日本のブランド",
            ko: "일본 브랜드",
            ar: "علامة تجارية يابانية"
          }, 
          details: {
            id: "Directional Control Valves, Air Cylinders, Rotary Actuators/Air Grippers, Vacuum Equipment, Air Preparation Equipment, Modular F.R.L/Pressure Control Equipment, Lubrication Equipment, Fittings & Tubing, Flow Control Equipment Speed Controllers, Silencers/Exhaust Cleaners/Blow Guns/Pressure Gauges, Switches/Sensors, Static Neutralization Equipment, Process Valves, Chemical Liquid Valves/Fitting & Needle Valves/Tubing, Process Pumps (Diaphragm Pumps), Process Gas Equipment, Industrial Filters/Sintered Metal Elements, Temperature Control Equipment, Electric Actuators/Cylinders, High Vacuum Equipment, Hydraulic Equipment, Pneumatic Instrumentation Equipment, dll.",
            en: "Directional Control Valves, Air Cylinders, Rotary Actuators/Air Grippers, Vacuum Equipment, Air Preparation Equipment, Modular F.R.L/Pressure Control Equipment, Lubrication Equipment, Fittings & Tubing, Flow Control Equipment Speed Controllers, Silencers/Exhaust Cleaners/Blow Guns/Pressure Gauges, Switches/Sensors, Static Neutralization Equipment, Process Valves, Chemical Liquid Valves/Fitting & Needle Valves/Tubing, Process Pumps (Diaphragm Pumps), Process Gas Equipment, Industrial Filters/Sintered Metal Elements, Temperature Control Equipment, Electric Actuators/Cylinders, High Vacuum Equipment, Hydraulic Equipment, Pneumatic Instrumentation Equipment, etc.",
            zh: "方向控制阀，气缸，旋转执行器/气动夹爪，真空设备，空气处理设备，模块化F.R.L/压力控制设备，润滑设备，接头和油管，流量控制设备速度控制器，消音器/排气清洁器/吹尘枪/压力表，开关/传感器，静电消除设备，工艺阀门，化学液体阀门/接头和针阀/油管，工艺泵（隔膜泵），工艺气体设备，工业过滤器/烧结金属元件，温度控制设备，电动执行器/电缸，高真空设备，液压设备，气动仪表设备等。",
            ja: "方向制御弁、エアシリンダ、ロータリーアクチュエータ/エアグリッパ、真空機器、空気調製機器、モジュラーF.R.L/圧力制御機器、潤滑機器、継手とチューブ、流量制御機器スピードコントローラ、サイレンサ/エキゾーストクリーナ/ブローガン/圧力計、スイッチ/センサ、静電気除去機器、プロセスバルブ、薬液バルブ/継手とニードルバルブ/チューブ、プロセスポンプ（ダイヤフラムポンプ）、プロセスガス機器、工業用フィルター/焼結金属エレメント、温度制御機器、電動アクチュエータ/シリンダ、高真空機器、油圧機器、空気圧計装機器など。",
            ko: "방향 제어 밸브, 공압 실린더, 로터리 액추에이터/에어 그리퍼, 진공 장비, 공기 준비 장비, 모듈식 F.R.L/압력 제어 장비, 윤활 장비, 피팅 및 튜빙, 유량 제어 장비 속도 컨트롤러, 소음기/배기 클리너/블로우 건/압력계, 스위치/센서, 정전기 제거 장비, 공정 밸브, 화학 액체 밸브/피팅 및 니들 밸브/튜빙, 공정 펌프(다이어프램 펌프), 공정 가스 장비, 산업용 필터/소결 금속 엘리먼트, 온도 제어 장비, 전동 액추에이터/실린더, 고진공 장비, 유압 장비, 공압 계측 장비 등.",
            ar: "صمامات التحكم الاتجاهي، أسطوانات الهواء، المشغلات الدوارة / القابضات الهوائية، معدات التفريغ، معدات تحضير الهواء، معدات F.R.L المعيارية / معدات التحكم في الضغط، معدات التشحيم، التركيبات والأنابيب، معدات التحكم في التدفق ومراقب السرعة، كواتم الصوت / منظفات العادم / مسدسات النفخ / مقاييس الضغط، المفاتيح / أجهزة الاستشعار، معدات تحييد الكهرباء الساكنة، صمامات العملية، صمامات السوائل الكيميائية / التركيبات والصمامات الإبرية / الأنابيب، مضخات العملية (مضخات الغشاء)، معدات غاز العملية، المرشحات الصناعية / عناصر المعدن الملبد، معدات التحكم في درجة الحرارة، المشغلات / الأسطوانات الكهربائية، معدات التفريغ العالي، المعدات الهيدروليكية، معدات الأجهزة الهوائية، إلخ."
          }
        }
      ]
    }]
  },
  "tecsis": {
    slug: "tecsis",
    name: "Tecsis",
    logo: "/image/brand/tecsis.png",
    coverImage: "/image/brand/tecsis.png",
    description: "Tecsis (WIKA Group) adalah pakar dalam teknologi sensor tekanan dan suhu untuk aplikasi industri ekstrem.",
    products: [{
      name: "Measurement Solutions",
      images: [
        "/image/brand/dekripsi_produk/Tecsis/1.jpg",
        "/image/brand/dekripsi_produk/Tecsis/2.jpg"
      ],
      description: {
        id: "Lebih dari 90 tahun Tecsis berkembang menjadi pabrik terdepan dalam teknologi pengukuran. Ini mencakup pengukuran gaya, pengukuran tekanan, pengukuran suhu, dan juga untuk switching solutions.",
        en: "For over 90 years, Tecsis has developed into a leading manufacturer in measurement technology. This includes force measurement, pressure measurement, temperature measurement, and also switching solutions.",
        zh: "90多年来，Tecsis已发展成为测量技术的领先制造商。这包括力测量，压力测量，温度测量以及开关解决方案。",
        ja: "90年以上にわたり、Tecsisは測定技術の主要メーカーに成長しました。これには、力の測定、圧力の測定、温度の測定、およびスイッチングソリューションが含まれます。",
        ko: "90년 이상 동안 Tecsis는 측정 기술 분야의 선도적인 제조업체로 발전했습니다. 여기에는 힘 측정, 압력 측정, 온도 측정 및 스위칭 솔루션이 포함됩니다.",
        ar: "لأكثر من 90 عامًا، تطورت شركة Tecsis لتصبح شركة رائدة في تصنيع تكنولوجيا القياس. ويشمل ذلك قياس القوة وقياس الضغط وقياس درجة الحرارة وحلول التبديل أيضًا."
      },
      plans: [
        { 
          name: {
            id: "Merek Jerman",
            en: "German Brand",
            zh: "德国品牌",
            ja: "ドイツのブランド",
            ko: "독일 브랜드",
            ar: "علامة تجارية ألمانية"
          }, 
          details: {
            id: "Gaya: Load Beams/Shear Beams, Compression Force Transducer, Hydraulic Load Cells, Load Pins, Ring Force Transducer, Special Force Transducers, Load Cells, Tension/Compression Force Transducers, Tension Transducers, Electronics, Test Equipment, dan Aksesoris.\n\nTekanan: Electrical Pressure Measurement, Pressure Sensors for Special Applications, Mechanical Pressure Gauges, Mechatronical Pressure Gauges, Diaphragm Seal, Test Technology, dan Aksesoris.\n\nSuhu: Electrical Temperature Measuring, Mechanical Temperature Measuring, Test and Calibration Equipment, dan Thermowells.\n\nSwitch: Differential Pressure Switches, Electronic Pressure Switches, Mechanical Pressure Switches, Temperature Switches, dan Vacuum Pressure Switches.\n\nSolusi Sistem: Length Sensor, dan Inclination Sensor.",
            en: "Force: Load Beams/Shear Beams, Compression Force Transducers, Hydraulic Load Cells, Load Pins, Ring Force Transducers, Special Force Transducers, Load Cells, Tension/Compression Force Transducers, Tension Transducers, Electronics, Test Equipment, and Accessories.\n\nPressure: Electrical Pressure Measurement, Pressure Sensors for Special Applications, Mechanical Pressure Gauges, Mechatronical Pressure Gauges, Diaphragm Seals, Test Technology, and Accessories.\n\nTemperature: Electrical Temperature Measuring, Mechanical Temperature Measuring, Test and Calibration Equipment, and Thermowells.\n\nSwitch: Differential Pressure Switches, Electronic Pressure Switches, Mechanical Pressure Switches, Temperature Switches, and Vacuum Pressure Switches.\n\nSystem Solutions: Length Sensors, and Inclination Sensors.",
            zh: "力：称重梁/剪切梁，压缩力传感器，液压测力元件，测力销，环形力传感器，特种力传感器，测力元件，拉伸/压缩力传感器，拉力传感器，电子设备，测试设备和附件。\n\n压力：电气压力测量，特殊应用压力传感器，机械压力表，机电压力表，隔膜密封，测试技术和附件。\n\n温度：电气温度测量，机械温度测量，测试和校准设备以及热电偶套管。\n\n开关：差压开关，电子压力开关，机械压力开关，温度开关和真空压力开关。\n\n系统解决方案：长度传感器和倾角传感器。",
            ja: "力：ロードビーム/シアビーム、圧縮力トランスデューサ、油圧ロードセル、ロードピン、リング力トランスデューサ、特殊力トランスデューサ、ロードセル、引張/圧縮力トランスデューサ、引張トランスデューサ、電子機器、試験装置、およびアクセサリ。\n\n圧力：電気式圧力測定、特殊用途向け圧力センサー、機械式圧力計、メカトロニクス圧力計、ダイヤフラムシール、試験技術、およびアクセサリ。\n\n温度：電気式温度測定、機械式温度測定、試験および校正機器、およびサーモウェル。\n\nスイッチ：差圧スイッチ、電子圧力スイッチ、機械式圧力スイッチ、温度スイッチ、および真空圧力スイッチ。\n\nシステムソリューション：長さセンサー、および傾斜センサー。",
            ko: "힘: 로드 빔/전단 빔, 압축력 변환기, 유압 로드 셀, 로드 핀, 링 힘 변환기, 특수 힘 변환기, 로드 셀, 인장/압축력 변환기, 인장 변환기, 전자 장비, 테스트 장비 및 액세서리.\n\n압력: 전기 압력 측정, 특수 응용 분야를 위한 압력 센서, 기계식 압력계, 메카트로닉스 압력계, 다이어프램 씰, 테스트 기술 및 액세서리.\n\n온도: 전기 온도 측정, 기계적 온도 측정, 테스트 및 보정 장비, 써모웰.\n\n스위치: 차압 스위치, 전자 압력 스위치, 기계식 압력 스위치, 온도 스위치 및 진공 압력 스위치.\n\n시스템 솔루션: 길이 센서 및 경사 센서.",
            ar: "القوة: حزم التحميل / حزم القص، محولات قوة الضغط، خلايا الحمل الهيدروليكية، دبابيس الحمل، محولات قوة الحلقة، محولات القوة الخاصة، خلايا الحمل، محولات قوة الشد / الضغط، محولات الشد، الإلكترونيات، معدات الاختبار، والملحقات.\n\nالضغط: قياس الضغط الكهربائي، مستشعرات الضغط للتطبيقات الخاصة، مقاييس الضغط الميكانيكية، مقاييس الضغط الميكاترونيكية، أختام الحجاب الحاجز، تكنولوجيا الاختبار، والملحقات.\n\nدرجة الحرارة: قياس درجة الحرارة الكهربائية، قياس درجة الحرارة الميكانيكية، معدات الاختبار والمعايرة، والآبار الحرارية.\n\nالتبديل: مفاتيح الضغط التفاضلي، مفاتيح الضغط الإلكترونية، مفاتيح الضغط الميكانيكية، مفاتيح درجة الحرارة، ومفاتيح ضغط الفراغ.\n\nحلول النظام: مستشعرات الطول، ومستشعرات الميل."
          }
        }
      ]
    }]
  },
  "vickers": {
    slug: "vickers",
    name: "Vickers",
    logo: "/image/brand/vickers.png",
    coverImage: "/image/brand/vickers.png",
    description: "Bagian dari Eaton, Vickers adalah pionir dalam teknologi hidrolik yang andal untuk industri kedirgantaraan dan manufaktur.",
    products: [{
      name: "Hydraulic Systems",
      images: ["/image/brand/dekripsi_produk/VICKERS/1.jpg"],
      description: {
        id: "Vickers®, salah satu nama yang paling berpengalaman dan dihormati di hydraulics. Sebuah supplier komponen dan sistem dari power and motion control, Vickers vane dan piston pumps, valves, electro-hydraulic controls, cylinders dan produk filter yang ditemukan di industri.",
        en: "Vickers®, one of the most experienced and respected names in hydraulics. A supplier of power and motion control components and systems, Vickers vane and piston pumps, valves, electro-hydraulic controls, cylinders and filter products are found in industry.",
        zh: "Vickers®是液压行业中最有经验和受人尊敬的名字之一。作为动力和运动控制组件及系统的供应商，Vickers的叶片和活塞泵，阀门，电液控制，油缸和过滤产品在工业界随处可见。",
        ja: "Vickers®は、油圧機器において最も経験豊富で尊敬されている名前の1つです。電力およびモーションコントロールのコンポーネントとシステムのサプライヤーとして、Vickersのベーンポンプとピストンポンプ、バルブ、電動油圧制御装置、シリンダー、およびフィルター製品が産業界で見られます。",
        ko: "Vickers®는 유압 분야에서 가장 경험이 많고 존경받는 이름 중 하나입니다. 동력 및 모션 제어 구성 요소와 시스템의 공급업체인 Vickers의 베인 및 피스톤 펌프, 밸브, 전기 유압 제어, 실린더 및 필터 제품은 산업 전반에서 볼 수 있습니다.",
        ar: "Vickers®، أحد أكثر الأسماء خبرة واحترامًا في مجال الهيدروليكا. باعتبارها موردًا لمكونات وأنظمة التحكم في الطاقة والحركة، توجد مضخات فيكرز ذات الريش والمكبس والصمامات والضوابط الكهروهيدروليكية والأسطوانات ومنتجات التصفية في الصناعة."
      },
      plans: [
        { 
          name: {
            id: "Merek USA",
            en: "USA Brand",
            zh: "美国品牌",
            ja: "米国のブランド",
            ko: "미국 브랜드",
            ar: "علامة تجارية أمريكية"
          }, 
          details: {
            id: "Cylinder, Industrial Valves, Mobile Valves, Piston Motors, Piston Open Circuit – Industrial Pumps, Piston Open Circuit – Mobile Pumps, Screw-in Cartridge Valves, Servo Valves, Vane Motors, Vane Pumps, dan Filters.",
            en: "Cylinders, Industrial Valves, Mobile Valves, Piston Motors, Piston Open Circuit – Industrial Pumps, Piston Open Circuit – Mobile Pumps, Screw-in Cartridge Valves, Servo Valves, Vane Motors, Vane Pumps, and Filters.",
            zh: "油缸，工业阀门，移动阀门，活塞马达，活塞开路 - 工业泵，活塞开路 - 移动泵，旋入式插装阀，伺服阀，叶片马达，叶片泵和过滤器。",
            ja: "シリンダー、産業用バルブ、モバイルバルブ、ピストンモーター、ピストンオープン回路–産業用ポンプ、ピストンオープン回路–モバイルポンプ、ねじ込み式カートリッジバルブ、サーボバルブ、ベーンモーター、ベーンポンプ、およびフィルター。",
            ko: "실린더, 산업용 밸브, 모바일 밸브, 피스톤 모터, 피스톤 개방 회로 – 산업용 펌프, 피스톤 개방 회로 – 모바일 펌프, 스크류 인 카트리지 밸브, 서보 밸브, 베인 모터, 베인 펌프 및 필터.",
            ar: "الأسطوانات، والصمامات الصناعية، والصمامات المتنقلة، ومحركات المكبس، والدائرة المفتوحة للمكبس - المضخات الصناعية، والدائرة المفتوحة للمكبس - المضخات المتنقلة، والصمامات الخرطوشية اللولبية، والصمامات المؤازرة، ومحركات الريش، ومضخات الريش، والمرشحات."
          }
        }
      ]
    }]
  },
  "winters": {
    slug: "winters",
    name: "Winters",
    logo: "/image/brand/winters-2.png",
    coverImage: "/image/brand/winters-2.png",
    description: "Winters Instruments memproduksi peralatan pemantauan tekanan dan suhu yang tangguh sejak tahun 1953.",
    products: [{
      name: "Instrumentation",
      images: ["/image/brand/dekripsi_produk/WINTERS/1.jpg"],
      description: {
        id: "Sejak 1953, Winter Instruments telah memproduksi instrumentasi yang dibuat secara berkualitas untuk semua jenis pasar yang memerlukan pengukuran tekanan dan suhu. Winter Instruments telah berkembang dalam ukuran dan reputasi dan saat ini memimpin pasar produksi global dari instrumentasi industri",
        en: "Since 1953, Winters Instruments has been manufacturing quality built instrumentation for all markets that require pressure and temperature measurement. Winters Instruments has grown in size and reputation and is now a leading global manufacturer of industrial instrumentation.",
        zh: "自1953年以来，Winters Instruments一直为所有需要压力和温度测量的市场制造高质量的仪器。Winters Instruments在规模和声誉上不断发展，目前已成为全球领先的工业仪器制造商。",
        ja: "1953年以来、Winters Instrumentsは、圧力および温度測定を必要とするすべての市場向けに高品質の計装機器を製造してきました。Winters Instrumentsは規模と評判を拡大し、現在では産業用計装機器の主要なグローバルメーカーとなっています。",
        ko: "1953년 이래로 Winters Instruments는 압력 및 온도 측정이 필요한 모든 시장을 위해 고품질 계측기를 제조해 왔습니다. Winters Instruments는 규모와 명성이 성장하여 현재 산업용 계측기의 선도적인 글로벌 제조업체입니다.",
        ar: "منذ عام 1953، تقوم شركة Winters Instruments بتصنيع أجهزة قياس عالية الجودة لجميع الأسواق التي تتطلب قياس الضغط ودرجة الحرارة. نمت شركة Winters Instruments في الحجم والسمعة وهي الآن شركة تصنيع عالمية رائدة في مجال الأجهزة الصناعية."
      },
      plans: [
        { 
          name: {
            id: "Merek Kanada",
            en: "Canadian Brand",
            zh: "加拿大品牌",
            ja: "カナダのブランド",
            ko: "캐나다 브랜드",
            ar: "علامة تجارية كندية"
          }, 
          details: {
            id: "Pressure gauges, thermometers, diaphragm seals, transmitters, switches, RTD dan thermocouples, thermowells, dan aksesoris.",
            en: "Pressure gauges, thermometers, diaphragm seals, transmitters, switches, RTD and thermocouples, thermowells, and accessories.",
            zh: "压力表，温度计，隔膜密封，变送器，开关，RTD和热电偶，热电偶套管及附件。",
            ja: "圧力計、温度計、ダイヤフラムシール、トランスミッター、スイッチ、RTDおよび熱電対、サーモウェル、およびアクセサリー。",
            ko: "압력계, 온도계, 다이어프램 씰, 트랜스미터, 스위치, RTD 및 열전대, 써모웰 및 액세서리.",
            ar: "مقاييس الضغط ومقاييس الحرارة وأختام الحجاب الحاجز وأجهزة الإرسال والمفاتيح و RTD والمزدوجات الحرارية والآبار الحرارية والملحقات."
          }
        }
      ]
    }]
  },
  "wonwoo": {
    slug: "wonwoo",
    name: "Wonwoo",
    logo: "/image/brand/wonwoo.png",
    coverImage: "/image/brand/wonwoo.png",
    description: "Spesialis dalam sistem pengawasan CCTV asal Korea yang fokus pada inovasi optik dan penglihatan malam.",
    products: [{
      name: "CCTV & Optics",
      images: ["/image/brand/dekripsi_produk/WONWOO/1.jpg"],
      description: {
        id: "Wonwoo Engineering berusaha untuk menjadi pemimpin yang dihormati dan dihargai dalam industri CCTV. Wonwoo berkomitmen pada desain yang berkualitas, inovasi, harga, dan kepuasan pelanggan.",
        en: "Wonwoo Engineering strives to be a respected and valued leader in the CCTV industry. Wonwoo is committed to quality design, innovation, value, and customer satisfaction.",
        zh: "Wonwoo Engineering努力成为CCTV行业中受人尊敬和有价值的领导者。Wonwoo致力于优质设计，创新，价值和客户满意度。",
        ja: "Wonwoo Engineeringは、CCTV業界で尊敬され、評価されるリーダーになるよう努めています。Wonwooは、高品質の設計、革新、価値、そして顧客満足に取り組んでいます。",
        ko: "Wonwoo Engineering은 CCTV 산업에서 존경받고 가치 있는 리더가 되기 위해 노력합니다. Wonwoo는 고품질 설계, 혁신, 가치 및 고객 만족에 전념합니다.",
        ar: "تسعى Wonwoo Engineering لتصبح رائدة محترمة وقيمة في صناعة الدوائر التلفزيونية المغلقة. تلتزم Wonwoo بالتصميم عالي الجودة والابتكار والقيمة ورضا العملاء."
      },
      plans: [
        { 
          name: {
            id: "Merek Korea",
            en: "Korean Brand",
            zh: "韩国品牌",
            ja: "韓国ブランド",
            ko: "한국 브랜드",
            ar: "علامة تجارية كورية"
          }, 
          details: {
            id: "MAESTRO Camera: PTZ Camera, IR Camera, Box Camera, Dome Camera, and IR Bullet Camera.\n\nIP Camera, Analog Camera, Zoom Module, DVR, Controller, Rapport, Cable & Bracket, dan TrailerCam.",
            en: "MAESTRO Cameras: PTZ Cameras, IR Cameras, Box Cameras, Dome Cameras, and IR Bullet Cameras.\n\nIP Cameras, Analog Cameras, Zoom Modules, DVRs, Controllers, Rapport, Cables & Brackets, and TrailerCams.",
            zh: "MAESTRO摄像机：PTZ摄像机，红外摄像机，枪型摄像机，半球摄像机和红外子弹摄像机。\n\nIP摄像机，模拟摄像机，变焦模块，DVR，控制器，Rapport，电缆和支架以及TrailerCam。",
            ja: "MAESTROカメラ：PTZカメラ、IRカメラ、ボックスカメラ、ドームカメラ、およびIRバレットカメラ。\n\nIPカメラ、アナログカメラ、ズームモジュール、DVR、コントローラー、ラポール、ケーブルとブラケット、およびTrailerCam。",
            ko: "MAESTRO 카메라: PTZ 카메라, IR 카메라, 박스 카메라, 돔 카메라 및 IR 글머리 기호 카메라.\n\nIP 카메라, 아날로그 카메라, 줌 모듈, DVR, 컨트롤러, 라포, 케이블 및 브래킷, TrailerCam.",
            ar: "كاميرات MAESTRO: كاميرات PTZ، وكاميرات IR، وكاميرات Box، وكاميرات Dome، وكاميرات IR Bullet.\n\nكاميرات IP، والكاميرات التناظرية، ووحدات التكبير، و DVRs، وأجهزة التحكم، و Rapport، والكابلات والأقواس، و TrailerCams."
          }
        }
      ]
    }]
  },
  "yuken": {
    slug: "yuken",
    name: "Yuken",
    logo: "/image/brand/yuken.png",
    coverImage: "/image/brand/yuken.png",
    description: "Yuken Kogyo adalah pemimpin dunia dalam bidang hidrolik, menyediakan solusi daya untuk mesin industri berat.",
    products: [{
      name: "Hydraulic Technology",
      images: ["/image/brand/dekripsi_produk/YUKEN/1.jpg"],
      description: {
        id: "Dalam waktu 40 tahun, Yuken mengembangkan lini produk hidrolik serta beberapa jenis mesin yang bergantung pada tenaga hidrolik. Saat ini, Yuken mempunyai kantor yang tersebar di seluruh Jepang, dan berkembang secara signifikan di dunia.",
        en: "Over 40 years, Yuken has developed a line of hydraulic products and various machines that rely on hydraulic power. Today, Yuken has offices throughout Japan and is expanding significantly worldwide.",
        zh: "在40年的时间里，Yuken开发了一系列液压产品和依靠液压动力的各种机器。如今，Yuken在日本各地设有办事处，并在全球范围内显著扩张。",
        ja: "40年の間に、Yukenは油圧製品のラインアップと、油圧に依存するさまざまな機械を開発してきました。現在、Yukenは日本全国にオフィスを構え、世界中で大幅に事業を拡大しています。",
        ko: "40년 동안 Yuken은 유압 제품 라인과 유압 동력에 의존하는 다양한 기계를 개발했습니다. 오늘날 Yuken은 일본 전역에 지사를 두고 있으며 전 세계적으로 크게 확장하고 있습니다.",
        ar: "على مدار 40 عامًا، طورت يوكن مجموعة من المنتجات الهيدروليكية ومختلف الآلات التي تعتمد على الطاقة الهيدروليكية. واليوم، تمتلك يوكن مكاتب في جميع أنحاء اليابان وتتوسع بشكل كبير في جميع أنحاء العالم."
      },
      plans: [
        { 
          name: {
            id: "Merek Jepang",
            en: "Japanese Brand",
            zh: "日本品牌",
            ja: "日本のブランド",
            ko: "일본 브랜드",
            ar: "علامة تجارية يابانية"
          }, 
          details: {
            id: "Piston Pumps, Vane Pumps, Pressure Controls, Flow Controls, Directional Controls, Modulars, Logic Valves, Electro-Hydraulic Controls, Servo Valves, Actuators, Hydraulic Power Units, dan Accessories.",
            en: "Piston Pumps, Vane Pumps, Pressure Controls, Flow Controls, Directional Controls, Modulars, Logic Valves, Electro-Hydraulic Controls, Servo Valves, Actuators, Hydraulic Power Units, and Accessories.",
            zh: "活塞泵，叶片泵，压力控制，流量控制，方向控制，模块，逻辑阀，电液控制，伺服阀，执行器，液压动力单元和附件。",
            ja: "ピストンポンプ、ベーンポンプ、圧力制御、流量制御、方向制御、モジュラー、ロジックバルブ、電動油圧制御、サーボバルブ、アクチュエータ、油圧パワーユニット、およびアクセサリ。",
            ko: "피스톤 펌프, 베인 펌프, 압력 제어, 유량 제어, 방향 제어, 모듈, 논리 밸브, 전기 유압 제어, 서보 밸브, 액추에이터, 유압 파워 유닛 및 액세서리.",
            ar: "مضخات المكبس، ومضخات الريش، وضوابط الضغط، وضوابط التدفق، والضوابط الاتجاهية، والوحدات، والصمامات المنطقية، والضوابط الكهروهيدروليكية، والصمامات المؤازرة، والمشغلات، ووحدات الطاقة الهيدروليكية، والملحقات."
          }
        }
      ]
    }]
  }
};

