"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type LanguageCode = "id" | "en" | "zh" | "ja" | "ko" | "ar";

export const languages = [
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "Mandarin", flag: "🇨🇳" },
  { code: "ja", label: "Japanese", flag: "🇯🇵" },
  { code: "ko", label: "Korean", flag: "🇰🇷" },
  { code: "ar", label: "Arabic", flag: "🇸🇦" },
] as const;

const translations = {
  id: {
    nav: {
      about: "TENTANG KAMI",
      brands: "MEREK & PRODUK",
      clients: "KLIEN",
      careers: "KARIR",
      contact: "HUBUNGI KAMI",
    },
    brandsPage: {
      pageTitle: "Merek",
      partnerLabel: "MITRA TERPERCAYA KAMI",
      worldLabel: "MEREK KELAS DUNIA",
      categories: {
        all: "SEMUA",
        electronics: "ELEKTRONIK & OTOMASI KANTOR",
        industry: "INDUSTRI & TEKNIS",
        automation: "OTOMASI INDUSTRI",
      },
      noBrands: "Tidak ada merek yang ditemukan di kategori ini.",
      viewDetails: "Lihat Detail",
      brandNotFound: "Merek tidak ditemukan",
      backToList: "Kembali ke Daftar Merek",
    },
    brandDetailPage: {
      home: "BERANDA",
      brands: "MEREK",
      overview: "GAMBARAN",
      productDescriptionTitle: "Deskripsi Produk",
      technicalSelections: "PILIHAN PRODUK",
      exploreAllBrands: "JELAJAHI SEMUA MEREK",
      brandNotFound: "Merek Tidak Ditemukan",
    },
    hero: {
      tagline: "Solusi Industri Terkemuka",
      desc: "Sistem Hidrolik, Pneumatik & Rekayasa, Distribusi Komponen, Telekomunikasi, Jig & Fixture, Press Parts, Mesin Khusus, dan Sistem Peralatan Kantor.",
      cta: "Hubungi Kami",
      since1990: "SEJAK 1990",
    },
    about: {
      title: "Tentang Kami",
      subtitle: "Salah Satu Perusahaan Barang Industri Tertua di Indonesia",
      text: "Dengan kantor pusat yang terletak di Jakarta, Indonesia, PT Citramas Alfa Sejahtera beroperasi dalam berbagai macam barang, baik barang-barang industri dan alat-alat teknik, maupun alat telekomunikasi dan sistem otomatisasi kantor. Sejak tahun 1990, kami telah melayani berbagai pelanggan, mulai dari perorangan dan usaha kecil menengah sampai perusahaan multinasional. Kami bertujuan untuk memperoleh pengakuan di seluruh Indonesia dan di luar negeri untuk keahlian kami. Pengalaman dan jaringan yang luas memastikan standar tertinggi dalam kualitas dan pelayanan kami.",
      divisions: [
        "HIDRAULIK & PNEUMATIK",
        "ALAT-ALAT TEKNIK",
        "JIG, FIXTURE, MOULD, & MESIN KHUSUS",
        "OTOMATISASI INDUSTRI",
        "TELEKOMUNIKASI & OTOMATISASI KANTOR",
        "PROYEK",
      ],
    },
    visi: {
      title: "Visi Kami",
      missionTitle: "Misi Kami",
      statement: "Menjadi perusahaan kelas dunia dengan standar tertinggi dalam kualitas dan pelayanan.",
      missions: [
        {
          title: "Jaminan Kepuasan Pelanggan",
          desc: "Kami memberikan jaminan berupa produk berkualitas. Hanya produk dengan kualitas terbaik yang tepat untuk Anda.",
        },
        {
          title: "Pelayanan Pelanggan Kelas Dunia",
          desc: "Kami menyediakan layanan pelanggan terbaik berkelas dunia. Staff kami siap membantu menyelesaikan masalah Anda.",
        },
        {
          title: "Pemimpin Pasar di Industrinya",
          desc: "Kami berusaha menjadi pemimpin pasar dalam industri melalui peningkatan kualitas tanpa henti di setiap bagian yang ada.",
        },
      ],
    },
    dna: {
      title: "DNA Kami",
      items: [
        { id: 1, title: "Akurasi", desc: "Ketepatan dan ketelitian dalam setiap aspek pekerjaan kami." },
        { id: 2, title: "Aktif", desc: "Proaktif dan penuh inisiatif dalam menghadapi setiap tantangan." },
        { id: 3, title: "Kontinu", desc: "Peningkatan kualitas yang berkelanjutan tanpa henti." },
        { id: 4, title: "Integritas", desc: "Menjunjung tinggi kejujuran dan etika profesional." },
        { id: 5, title: "Termotivasi", desc: "Selalu terdorong untuk memberikan hasil yang terbaik." },
        { id: 6, title: "Dapat Diandalkan", desc: "Jangan khawatir, Anda dapat mengandalkan kami." },
        { id: 7, title: "Keberlanjutan", desc: "Berkomitmen pada praktik yang berkelanjutan dan berwawasan lingkungan." },
        { id: 8, title: "Kerja Tim", desc: "Bekerja sama dan saling mendukung untuk mencapai kesuksesan bersama." },
      ],
    },
    clients: {
      title: "Klien",
      subtitle: "Beberapa dari pelanggan setia yang telah kami layani dalam beberapa tahun ini."
    },
    careers: {
      title: "Karir",
      cultureHeading: "Mulai dari sekarang.",
      cultureBody1: "Hidup itu singkat. Jangan jadi penonton hidup yang kosong.",
      cultureBody2: "Kami, Citramas, mencari pribadi yang siap untuk bertindak. Seseorang yang ingin menjadi luar biasa.",
      valuesTitle1: "Produk berkualitas untuk keperluan pelanggan",
      valuesDesc1: "Setiap produk dan sistem mewakili kualitas kami. Itu sebabnya kami hanya menyediakan produk terbaik.",
      valuesTitle2: "Pelayanan prima yang melebihi ekspektasi",
      valuesDesc2: "Kami selalu mengusahakan yang terbaik untuk mengerti apa yang pelanggan kami butuhkan.",
      jobsTitle: "Lowongan Pekerjaan",
      readMore: "Baca selengkapnya",
      sales: "PENJUALAN (SALES)",
      salesEngineerTitle: "Sales Engineer",
      salesEngineerDesc: "Sales engineer menggunakan pengetahuan teknis bersama dengan keterampilan penjualan untuk memberikan saran dan dukungan pada berbagai produk.",
      productSpecialistTitle: "Product Specialist",
      productSpecialistDesc: "Posisi ini bertanggung jawab bekerja sama dengan klien baru dan prospektif untuk memahami kebutuhan mereka dan memberikan solusi teknis."
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Kami siap memberikan solusi terbaik untuk kebutuhan industri Anda.",
      getInTouch: "Mari Berhubungan.",
      getInTouchDesc: "Silakan hubungi kami melalui kontak digital berikut untuk respons cepat.",
      email: "Email",
      website: "Situs Web",
      headOffice: "KANTOR PUSAT",
      branch: "CABANG",
      workshop: "BENGKEL KERJA",
      tel: "Telp",
      fax: "Faks",
      sendMessage: "Kirim Pesan",
      successMsg: "Pesan Anda berhasil terkirim! Kami akan segera menghubungi Anda.",
      errorMsg: "Terjadi kesalahan saat mengirim pesan.",
      formName: "Nama Anda",
      formNamePlaceholder: "Masukkan nama Anda",
      formEmail: "Alamat Email",
      formEmailPlaceholder: "contoh@email.com",
      formSubject: "Subjek",
      formSubjectPlaceholder: "Apa yang ingin Anda tanyakan?",
      formMessage: "Pesan",
      formMessagePlaceholder: "Tuliskan detail pesan Anda di sini...",
      btnSending: "Mengirim Pesan...",
      btnSend: "Kirim Pesan"
    },
  },
  en: {
    nav: {
      about: "ABOUT US",
      brands: "BRANDS",
      clients: "CLIENTS",
      careers: "CAREERS",
      contact: "CONTACT US",
    },
    brandsPage: {
      pageTitle: "Brands",
      partnerLabel: "OUR TRUSTED PARTNERS",
      worldLabel: "WORLD CLASS BRANDS",
      categories: {
        all: "ALL",
        electronics: "ELECTRONICS & OFFICE AUTOMATION",
        industry: "INDUSTRY & TECHNICAL",
        automation: "INDUSTRIAL AUTOMATION",
      },
      noBrands: "No brands found in this category.",
      viewDetails: "View Details",
      brandNotFound: "Brand Not Found",
      backToList: "Back to Brands List",
    },
    brandDetailPage: {
      home: "HOME",
      brands: "BRANDS",
      overview: "OVERVIEW",
      productDescriptionTitle: "Product Description",
      technicalSelections: "TECHNICAL SELECTIONS",
      exploreAllBrands: "EXPLORE ALL BRANDS",
      brandNotFound: "Brand Not Found",
    },
    hero: {
      direction: "ltr",
      tagline: "Leading Industrial Solutions",
      desc: "Hydraulics, Pneumatics & Engineering Systems, Component Distribution, Telecommunications, Jig & Fixture, Press Parts, Special Purpose Machines, and Office Automation Systems.",
      cta: "Contact Us",
      since1990: "SINCE 1990",
    },
    about: {
      title: "About Us",
      subtitle: "One of Indonesia's oldest industrial goods companies",
      text: "Headquartered in Jakarta, Indonesia, PT Citramas Alfa Sejahtera operates across a wide range of products, including industrial goods, engineering tools, telecommunication equipment, and office automation systems. Since 1990, we have served customers from individuals and SMEs to multinational corporations. We aim to earn recognition throughout Indonesia and abroad for our expertise. Our experience and extensive network ensure the highest standards of quality and service.",
      divisions: [
        "HYDRAULICS & PNEUMATICS",
        "ENGINEERING TOOLS",
        "JIG, FIXTURE, MOULD, & SPECIAL MACHINES",
        "INDUSTRIAL AUTOMATION",
        "TELECOMMUNICATION & OFFICE AUTOMATION",
        "PROJECTS",
      ],
    },
    visi: {
      title: "Our Vision",
      missionTitle: "Our Mission",
      statement: "To become a world-class company with the highest standards in quality and service.",
      missions: [
        {
          title: "Customer Satisfaction Guarantee",
          desc: "We provide a guarantee of quality products. Only the best, most suitable products for you.",
        },
        {
          title: "World-Class Customer Service",
          desc: "We deliver premium customer service. Our staff are ready to solve your problems.",
        },
        {
          title: "Industry Market Leader",
          desc: "We strive to be a market leader through continuous quality improvement in every area.",
        },
      ],
    },
    dna: {
      title: "Our DNA",
      items: [
        { id: 1, title: "Accuracy", desc: "Precision and attention to detail in every part of our work." },
        { id: 2, title: "Active", desc: "Proactive and full of initiative when facing every challenge." },
        { id: 3, title: "Continuous", desc: "Continuous quality improvement without stopping." },
        { id: 4, title: "Integrity", desc: "Upholding honesty and professional ethics." },
        { id: 5, title: "Motivated", desc: "Constantly driven to deliver the best results." },
        { id: 6, title: "Reliability", desc: "Rest assured, you can rely on us." },
        { id: 7, title: "Sustainability", desc: "Committed to sustainable and environmentally minded practices." },
        { id: 8, title: "Team Work", desc: "Collaborating and supporting each other to achieve success together." },
      ],
    },
    clients: {
      title: "Clients",
      subtitle: "Some of the loyal customers we have served over the years."
    },
    careers: {
      title: "Careers",
      cultureHeading: "Start from now.",
      cultureBody1: "Life is short. Don't be an empty spectator of life.",
      cultureBody2: "We, Citramas, are looking for individuals who are ready to act. Someone who wants to be extraordinary.",
      valuesTitle1: "Quality products for customer needs",
      valuesDesc1: "Every product and system represents our quality. That's why we only provide the best products.",
      valuesTitle2: "Excellent service exceeding expectations",
      valuesDesc2: "We always do our best to understand what our customers need.",
      jobsTitle: "Job Openings",
      readMore: "Read more",
      sales: "SALES",
      salesEngineerTitle: "Sales Engineer",
      salesEngineerDesc: "Sales engineers use their technical knowledge together with sales skills to provide advice and support on a range of products.",
      productSpecialistTitle: "Product Specialist",
      productSpecialistDesc: "This position is responsible for working with new and prospective clients to understand their needs and provide technical solutions."
    },
    contact: {
      title: "Reach Out to Us",
      subtitle: "We are ready to provide the best solutions for your industrial needs.",
      getInTouch: "Get in Touch.",
      getInTouchDesc: "Please contact us via the following digital contacts for a quick response.",
      email: "Email",
      website: "Website",
      headOffice: "HEAD OFFICE",
      branch: "BRANCH",
      workshop: "WORKSHOP",
      tel: "Tel",
      fax: "Fax",
      sendMessage: "Send us a Message",
      successMsg: "Your message has been sent successfully! We will contact you soon.",
      errorMsg: "An error occurred while sending the message.",
      formName: "Your Name",
      formNamePlaceholder: "Enter your name",
      formEmail: "Email Address",
      formEmailPlaceholder: "example@email.com",
      formSubject: "Subject",
      formSubjectPlaceholder: "What would you like to ask?",
      formMessage: "Message",
      formMessagePlaceholder: "Write your message details here...",
      btnSending: "Sending Message...",
      btnSend: "Send Message"
    },
  },
  zh: {
    nav: {
      about: "关于我们",
      brands: "品牌与产品",
      clients: "客户",
      careers: "事业",
      contact: "联系我们",
    },
    brandsPage: {
      pageTitle: "品牌",
      partnerLabel: "我们信赖的合作伙伴",
      worldLabel: "世界级品牌",
      categories: {
        all: "全部",
        electronics: "电子与办公自动化",
        industry: "工业与技术",
        automation: "工业自动化",
      },
      noBrands: "此类别中未找到品牌。",
      viewDetails: "查看详情",
      brandNotFound: "未找到品牌",
      backToList: "返回品牌列表",
    },
    brandDetailPage: {
      home: "主页",
      brands: "品牌",
      overview: "概览",
      productDescriptionTitle: "产品描述",
      technicalSelections: "技术选择",
      exploreAllBrands: "探索所有品牌",
      brandNotFound: "未找到品牌",
    },
    hero: {
      direction: "ltr",
      tagline: "领先的工业解决方案",
      desc: "液压、气动及工程系统、部件分销、电信、治具及夹具、冲压件、专用机械和办公自动化系统。",
      cta: "联系我们",
      since1990: "始于 1990",
    },
    about: {
      title: "关于我们",
      subtitle: "印度尼西亚最古老的工业品公司之一",
      text: "总部位于印度尼西亚雅加达，PT Citramas Alfa Sejahtera 经营多种产品，包括工业用品、工程工具、电信设备和办公自动化系统。自1990年以来，我们为个人、中小企业和跨国公司提供服务。我们致力于凭借专业知识在印度尼西亚及海外赢得认可。我们的经验和广泛网络确保最高的质量和服务标准。",
      divisions: [
        "液压与气动",
        "工程工具",
        "夹具、工装、模具与特种机械",
        "工业自动化",
        "电信与办公自动化",
        "项目",
      ],
    },
    visi: {
      title: "我们的愿景",
      missionTitle: "我们的使命",
      statement: "成为一家在质量和服务方面达到最高标准的世界级公司。",
      missions: [
        {
          title: "客户满意保证",
          desc: "我们提供优质产品保证。只为您提供最合适的优质产品。",
        },
        {
          title: "世界级客户服务",
          desc: "我们提供高端客户服务。我们的员工随时准备解决您的问题。",
        },
        {
          title: "行业市场领先者",
          desc: "我们通过不断提高质量在各个领域努力成为市场领导者。",
        },
      ],
    },
    dna: {
      title: "我们的 DNA",
      items: [
        { id: 1, title: "准确性", desc: "我们工作中每个环节都注重精确和细节。" },
        { id: 2, title: "积极", desc: "积极主动，面对每个挑战都充满主动性。" },
        { id: 3, title: "持续", desc: "持续不断地提升质量。" },
        { id: 4, title: "诚信", desc: "坚持诚信和专业伦理。" },
        { id: 5, title: "动力", desc: "不断努力提供最佳成果。" },
        { id: 6, title: "可靠性", desc: "请放心，您可以信赖我们。" },
        { id: 7, title: "可持续性", desc: "致力于可持续和环保的实践。" },
        { id: 8, title: "团队合作", desc: "协作互助，共同实现成功。" },
      ],
    },
    clients: {
      title: "客户",
      subtitle: "多年来我们服务过的一些忠实客户。"
    },
    careers: {
      title: "事业",
      cultureHeading: "从现在开始。",
      cultureBody1: "生命短暂。不要做一个空虚的生活旁观者。",
      cultureBody2: "我们，Citramas，正在寻找准备采取行动的个人。想要变得非凡的人。",
      valuesTitle1: "满足客户需求的高质量产品",
      valuesDesc1: "每一个产品和系统都代表了我们的质量。这就是为什么我们只提供最好的产品。",
      valuesTitle2: "超越期望的卓越服务",
      valuesDesc2: "我们总是尽最大努力了解客户的需求。",
      jobsTitle: "职位空缺",
      readMore: "阅读更多",
      sales: "销售",
      salesEngineerTitle: "销售工程师",
      salesEngineerDesc: "销售工程师结合其技术知识和销售技巧，为各种产品提供建议和支持。",
      productSpecialistTitle: "产品专员",
      productSpecialistDesc: "该职位负责与新客户和潜在客户合作，了解他们的需求并提供技术解决方案。"
    },
    contact: {
      title: "联系我们",
      subtitle: "我们准备为您提供满足您工业需求的最佳解决方案。",
      getInTouch: "保持联系。",
      getInTouchDesc: "请通过以下数字联系方式与我们联系以获得快速回复。",
      email: "电子邮件",
      website: "网站",
      headOffice: "总部",
      branch: "分公司",
      workshop: "车间",
      tel: "电话",
      fax: "传真",
      sendMessage: "发送消息",
      successMsg: "您的消息已成功发送！我们将尽快与您联系。",
      errorMsg: "发送消息时发生错误。",
      formName: "您的名字",
      formNamePlaceholder: "输入您的名字",
      formEmail: "电子邮件地址",
      formEmailPlaceholder: "example@email.com",
      formSubject: "主题",
      formSubjectPlaceholder: "您想问什么？",
      formMessage: "消息",
      formMessagePlaceholder: "在此处写下您的消息详情...",
      btnSending: "正在发送消息...",
      btnSend: "发送消息"
    },
  },
  ja: {
    nav: {
      about: "私たちについて",
      brands: "ブランド",
      clients: "お客様",
      careers: "採用",
      contact: "お問い合わせ",
    },
    brandsPage: {
      pageTitle: "ブランド",
      partnerLabel: "信頼されるパートナー",
      worldLabel: "ワールドクラスブランド",
      categories: {
        all: "すべて",
        electronics: "電子＆オフィス自動化",
        industry: "産業＆技術",
        automation: "産業オートメーション",
      },
      noBrands: "このカテゴリではブランドが見つかりません。",
      viewDetails: "詳細を見る",
      brandNotFound: "ブランドが見つかりません",
      backToList: "ブランド一覧に戻る",
    },
    brandDetailPage: {
      home: "ホーム",
      brands: "ブランド",
      overview: "概要",
      productDescriptionTitle: "製品説明",
      technicalSelections: "技術選択",
      exploreAllBrands: "すべてのブランドを見る",
      brandNotFound: "ブランドが見つかりません",
    },
    hero: {
      direction: "ltr",
      tagline: "最先端の産業ソリューション",
      desc: "油圧・空圧・エンジニアリングシステム、部品流通、通信、治具・取付具、プレス部品、専用機、オフィス自動化システム。",
      cta: "お問い合わせ",
      since1990: "1990年以来",
    },
    about: {
      title: "私たちについて",
      subtitle: "インドネシアで最も古い工業用品会社のひとつ",
      text: "本社はインドネシアのジャカルタにあり、PT Citramas Alfa Sejahteraは工業用品、エンジニアリングツール、通信機器、オフィス自動化システムなど幅広い製品を扱っています。1990年以降、個人、中小企業、そして多国籍企業にサービスを提供してきました。私たちは専門知識でインドネシア国内外で高い評価を得ることを目指しています。経験と広範なネットワークが最高の品質とサービス基準を保証します。",
      divisions: [
        "油圧＆空気圧",
        "エンジニアリングツール",
        "治具、フィクスチャー、金型、特殊機械",
        "産業自動化",
        "通信＆オフィス自動化",
        "プロジェクト",
      ],
    },
    visi: {
      title: "私たちのビジョン",
      missionTitle: "私たちのミッション",
      statement: "品質とサービスにおいて最高基準を持つ世界的な企業になること。",
      missions: [
        {
          title: "顧客満足保証",
          desc: "高品質な製品を保証します。最適な製品だけをお届けします。",
        },
        {
          title: "世界基準の顧客サービス",
          desc: "プレミアムなカスタマーサービスを提供します。スタッフが問題解決をサポートします。",
        },
        {
          title: "業界のマーケットリーダー",
          desc: "品質を継続的に向上させ、業界のリーダーを目指します。",
        },
      ],
    },
    dna: {
      title: "私たちのDNA",
      items: [
        { id: 1, title: "正確さ", desc: "仕事のあらゆる面で正確さと注意深さを重視します。" },
        { id: 2, title: "積極性", desc: "すべての課題に対して主体的に取り組みます。" },
        { id: 3, title: "継続", desc: "品質の継続的な改善を止めません。" },
        { id: 4, title: "誠実さ", desc: "正直さとプロとしての倫理を大切にします。" },
        { id: 5, title: "やる気", desc: "常に最高の成果を出すために努力します。" },
        { id: 6, title: "信頼性", desc: "私たちを安心して信頼できます。" },
        { id: 7, title: "持続可能性", desc: "持続可能で環境に配慮した取り組みを行います。" },
        { id: 8, title: "チームワーク", desc: "協力し支え合い、共に成功をめざします。" },
      ],
    },
    clients: {
      title: "お客様",
      subtitle: "私たちが長年にわたりサービスを提供してきた忠実なお客様の一部です。"
    },
    careers: {
      title: "採用",
      cultureHeading: "今から始めましょう。",
      cultureBody1: "人生は短いです。空虚な人生の傍観者にならないでください。",
      cultureBody2: "私たちCitramasは、行動する準備ができている個人を探しています。非凡になりたい人を。",
      valuesTitle1: "顧客のニーズに応える高品質な製品",
      valuesDesc1: "すべての製品とシステムが私たちの品質を表しています。だからこそ、私たちは最高の製品のみを提供します。",
      valuesTitle2: "期待を超える優れたサービス",
      valuesDesc2: "私たちは常に顧客のニーズを理解するために最善を尽くしています。",
      jobsTitle: "求人情報",
      readMore: "続きを読む",
      sales: "営業",
      salesEngineerTitle: "セールスエンジニア",
      salesEngineerDesc: "セールスエンジニアは、技術的知識と営業スキルを組み合わせて、さまざまな製品に関するアドバイスやサポートを提供します。",
      productSpecialistTitle: "プロダクトスペシャリスト",
      productSpecialistDesc: "このポジションは、新規および見込み客と協力してニーズを理解し、技術的ソリューションを提供する責任があります。"
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "私たちはあなたの産業ニーズに最適なソリューションを提供する準備ができています。",
      getInTouch: "連絡を取り合う。",
      getInTouchDesc: "迅速な対応のために、以下のデジタル連絡先からお問い合わせください。",
      email: "Eメール",
      website: "ウェブサイト",
      headOffice: "本社",
      branch: "支店",
      workshop: "ワークショップ",
      tel: "電話",
      fax: "ファックス",
      sendMessage: "メッセージを送る",
      successMsg: "メッセージは正常に送信されました！すぐにご連絡いたします。",
      errorMsg: "メッセージの送信中にエラーが発生しました。",
      formName: "お名前",
      formNamePlaceholder: "名前を入力してください",
      formEmail: "メールアドレス",
      formEmailPlaceholder: "example@email.com",
      formSubject: "件名",
      formSubjectPlaceholder: "何を質問したいですか？",
      formMessage: "メッセージ",
      formMessagePlaceholder: "ここにメッセージの詳細を書いてください...",
      btnSending: "メッセージを送信中...",
      btnSend: "メッセージを送信"
    },
  },
  ko: {
    nav: {
      about: "회사 소개",
      brands: "브랜드",
      clients: "고객",
      careers: "채용",
      contact: "문의하기",
    },
    brandsPage: {
      pageTitle: "브랜드",
      partnerLabel: "신뢰할 수 있는 파트너",
      worldLabel: "세계적 수준의 브랜드",
      categories: {
        all: "전체",
        electronics: "전자 및 사무 자동화",
        industry: "산업 및 기술",
        automation: "산업 자동화",
      },
      noBrands: "이 카테고리에서는 브랜드를 찾을 수 없습니다.",
      viewDetails: "자세히 보기",
      brandNotFound: "브랜드를 찾을 수 없습니다",
      backToList: "브랜드 목록으로 돌아가기",
    },
    brandDetailPage: {
      home: "홈",
      brands: "브랜드",
      overview: "개요",
      productDescriptionTitle: "제품 설명",
      technicalSelections: "기술 선택",
      exploreAllBrands: "모든 브랜드 보기",
      brandNotFound: "브랜드를 찾을 수 없습니다",
    },
    hero: {
      direction: "ltr",
      tagline: "선도적인 산업 솔루션",
      desc: "유압, 공압 및 엔지니어링 시스템, 부품 유통, 통신, 지그 및 픽스쳐, 프레스 부품, 특수 목적 기계 및 사무 자동화 시스템.",
      cta: "문의하기",
      since1990: "1990년부터",
    },
    about: {
      title: "회사 소개",
      subtitle: "인도네시아에서 가장 오래된 산업용품 회사 중 하나",
      text: "본사는 인도네시아 자카르타에 있으며 PT Citramas Alfa Sejahtera는 산업용품, 엔지니어링 도구, 통신 장비 및 사무 자동화 시스템 등 다양한 제품을 취급합니다. 1990년부터 개인, 중소기업 및 다국적 기업에 서비스를 제공해 왔습니다. 우리는 전문성으로 인도네시아 및 해외에서 인정받는 것을 목표로 합니다. 우리의 경험과 폭넓은 네트워크는 최고 수준의 품질과 서비스를 보장합니다.",
      divisions: [
        "유압 및 공압",
        "엔지니어링 도구",
        "지그, 픽스처, 금형 및 특수 기계",
        "산업 자동화",
        "통신 및 사무 자동화",
        "프로젝트",
      ],
    },
    visi: {
      title: "우리의 비전",
      missionTitle: "우리의 미션",
      statement: "품질과 서비스에서 최고 기준을 갖춘 세계적인 기업이 되는 것.",
      missions: [
        {
          title: "고객 만족 보장",
          desc: "우리는 품질 제품을 보장합니다. 고객에게 가장 적합한 최고의 제품만 제공합니다.",
        },
        {
          title: "세계적 수준의 고객 서비스",
          desc: "프리미엄 고객 서비스를 제공합니다. 직원이 문제 해결을 도와드립니다.",
        },
        {
          title: "업계 시장 리더",
          desc: "지속적인 품질 개선을 통해 업계 리더가 되기 위해 노력합니다.",
        },
      ],
    },
    dna: {
      title: "우리의 DNA",
      items: [
        { id: 1, title: "정확성", desc: "업무의 모든 측면에서 정밀함과 세심함을 추구합니다.", image: "/image/accuracy.jpg" },
        { id: 2, title: "적극성", desc: "모든 과제에 대해 적극적으로 임합니다.", image: "/image/active.jpg" },
        { id: 3, title: "지속성", desc: "중단 없는 품질 향상을 실천합니다.", image: "/image/continuous.jpg" },
        { id: 4, title: "정직", desc: "정직과 전문 윤리를 존중합니다.", image: "/image/integrity.jpg" },
        { id: 5, title: "동기", desc: "항상 최고의 결과를 위해 노력합니다.", image: "/image/motivated.jpg" },
        { id: 6, title: "신뢰성", desc: "안심하고 우리를 신뢰할 수 있습니다.", image: "/image/reliability.jpg" },
        { id: 7, title: "지속 가능성", desc: "지속 가능하고 환경을 생각하는 실천에 전념합니다.", image: "/image/sustainability.jpg" },
        { id: 8, title: "팀워크", desc: "협력하고 서로를 지원하며 함께 성공을 이룹니다.", image: "/image/teamwork.jpg" },
      ],
    },
    clients: {
      title: "고객",
      subtitle: "우리가 수년간 서비스를 제공해 온 충성도 높은 고객 중 일부입니다."
    },
    careers: {
      title: "채용",
      cultureHeading: "지금부터 시작하세요.",
      cultureBody1: "인생은 짧습니다. 공허한 구경꾼이 되지 마십시오.",
      cultureBody2: "우리 Citramas는 행동할 준비가 된 개인을 찾고 있습니다. 비범해지고 싶은 사람을.",
      valuesTitle1: "고객의 요구를 충족하는 고품질 제품",
      valuesDesc1: "모든 제품과 시스템은 우리의 품질을 나타냅니다. 그렇기 때문에 우리는 최고의 제품만 제공합니다.",
      valuesTitle2: "기대를 뛰어넘는 우수한 서비스",
      valuesDesc2: "우리는 항상 고객의 요구 사항을 이해하기 위해 최선을 다합니다.",
      jobsTitle: "채용 정보",
      readMore: "자세히 보기",
      sales: "영업",
      salesEngineerTitle: "세일즈 엔지니어",
      salesEngineerDesc: "세일즈 엔지니어는 기술 지식과 영업 기술을 함께 사용하여 다양한 제품에 대한 조언과 지원을 제공합니다.",
      productSpecialistTitle: "제품 전문가",
      productSpecialistDesc: "이 직책은 신규 및 잠재 고객과 협력하여 요구 사항을 파악하고 기술 솔루션을 제공하는 일을 담당합니다."
    },
    contact: {
      title: "문의하기",
      subtitle: "우리는 귀하의 산업 요구에 맞는 최상의 솔루션을 제공할 준비가 되어 있습니다.",
      getInTouch: "연락주세요.",
      getInTouchDesc: "빠른 답변을 원하시면 아래의 디지털 연락처를 통해 문의해 주십시오.",
      email: "이메일",
      website: "웹사이트",
      headOffice: "본사",
      branch: "지점",
      workshop: "워크샵",
      tel: "전화",
      fax: "팩스",
      sendMessage: "메시지 보내기",
      successMsg: "메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.",
      errorMsg: "메시지를 보내는 중 오류가 발생했습니다.",
      formName: "귀하의 이름",
      formNamePlaceholder: "이름을 입력하세요",
      formEmail: "이메일 주소",
      formEmailPlaceholder: "example@email.com",
      formSubject: "제목",
      formSubjectPlaceholder: "무엇을 물어보고 싶으신가요?",
      formMessage: "메시지",
      formMessagePlaceholder: "여기에 메시지 세부 정보를 작성하십시오...",
      btnSending: "메시지 전송 중...",
      btnSend: "메시지 보내기"
    },
  },
  ar: {
    nav: {
      about: "من نحن",
      brands: "العلامات التجارية",
      clients: "العملاء",
      careers: "الوظائف",
      contact: "اتصل بنا",
    },
    brandsPage: {
      pageTitle: "العلامات التجارية",
      partnerLabel: "شركاؤنا الموثوقون",
      worldLabel: "علامات تجارية عالمية المستوى",
      categories: {
        all: "الكل",
        electronics: "الإلكترونيات وأتمتة المكاتب",
        industry: "الصناعة والفني",
        automation: "الأتمتة الصناعية",
      },
      noBrands: "لم يتم العثور على علامات تجارية في هذه الفئة.",
      viewDetails: "عرض التفاصيل",
      brandNotFound: "لم يتم العثور على العلامة التجارية",
      backToList: "العودة إلى قائمة العلامات التجارية",
    },
    brandDetailPage: {
      home: "الصفحة الرئيسية",
      brands: "العلامات التجارية",
      overview: "نظرة عامة",
      productDescriptionTitle: "وصف المنتج",
      technicalSelections: "الخيارات الفنية",
      exploreAllBrands: "استكشف جميع العلامات التجارية",
      brandNotFound: "العلامة التجارية غير موجودة",
    },
    hero: {
      direction: "ltr",
      tagline: "حلول صناعية رائدة",
      desc: "الهيدروليكا والأنظمة الهوائية والأنظمة الهندسية، وتوزيع المكونات، والاتصالات، وتركيبات التثبيت، وأجزاء المكبس، والآلات ذات الأغراض الخاصة، وأنظمة أتمتة المكاتب.",
      cta: "اتصل بنا",
      since1990: "منذ عام 1990",
    },
    about: {
      title: "معلومات عنا",
      subtitle: "واحدة من أقدم شركات السلع الصناعية في إندونيسيا",
      text: "يقع المقر الرئيسي في جاكرتا بإندونيسيا، وتعمل شركة PT Citramas Alfa Sejahtera عبر مجموعة واسعة من المنتجات بما في ذلك السلع الصناعية وأدوات الهندسة ومعدات الاتصالات وأنظمة أتمتة المكاتب. منذ عام 1990، قمنا بخدمة العملاء من الأفراد والشركات الصغيرة والمتوسطة إلى الشركات متعددة الجنسيات. نحن نسعى لكسب الاعتراف في جميع أنحاء إندونيسيا وخارجها بفضل خبرتنا. تضمن خبرتنا وشبكتنا الموسعة أعلى معايير الجودة والخدمة.",
      divisions: [
        "الهيدروليك والهوائي",
        "أدوات الهندسة",
        "القوالب والتجهيزات والآلات الخاصة",
        "الأتمتة الصناعية",
        "الاتصالات وأتمتة المكاتب",
        "المشاريع",
      ],
    },
    visi: {
      title: "رؤيتنا",
      missionTitle: "مهمتنا",
      statement: "أن نصبح شركة عالمية المستوى بأعلى معايير الجودة والخدمة.",
      missions: [
        {
          title: "ضمان رضا العملاء",
          desc: "نقدم ضمانًا على المنتجات عالية الجودة. فقط الأفضل والأكثر ملاءمة لك.",
        },
        {
          title: "خدمة عملاء عالمية المستوى",
          desc: "نقدم خدمة عملاء متميزة. فريقنا جاهز لحل مشكلاتك.",
        },
        {
          title: "القائد السوقي في الصناعة",
          desc: "نسعى أن نكون رائدين في السوق من خلال تحسين الجودة بشكل مستمر في كل مجال.",
        },
      ],
    },
    dna: {
      title: "الحمض النووي الخاص بنا",
      items: [
        { id: 1, title: "الدقة", desc: "الدقة والانتباه للتفاصيل في كل جزء من عملنا.", image: "/image/accuracy.jpg" },
        { id: 2, title: "النشاط", desc: "المبادرة والإيجابية في مواجهة كل تحدٍ.", image: "/image/active.jpg" },
        { id: 3, title: "الاستمرارية", desc: "تحسين الجودة باستمرار دون توقف.", image: "/image/continuous.jpg" },
        { id: 4, title: "النزاهة", desc: "نحن نتمسك بالأمانة والأخلاق المهنية.", image: "/image/integrity.jpg" },
        { id: 5, title: "التحفيز", desc: "دائمًا ما ندفع لتقديم أفضل النتائج.", image: "/image/motivated.jpg" },
        { id: 6, title: "الموثوقية", desc: "ثق بأنك يمكنك الاعتماد علينا.", image: "/image/reliability.jpg" },
        { id: 7, title: "الاستدامة", desc: "ملتزمون بالممارسات المستدامة والصديقة للبيئة.", image: "/image/sustainability.jpg" },
        { id: 8, title: "العمل الجماعي", desc: "التعاون ودعم بعضنا البعض لتحقيق النجاح معًا.", image: "/image/teamwork.jpg" },
      ],
    },
    clients: {
      title: "العملاء",
      subtitle: "بعض العملاء المخلصين الذين خدمناهم على مر السنين."
    },
    careers: {
      title: "الوظائف",
      cultureHeading: "ابدأ من الآن.",
      cultureBody1: "الحياة قصيرة. لا تكن متفرجًا فارغًا على الحياة.",
      cultureBody2: "نحن في Citramas نبحث عن أفراد مستعدين للعمل. شخص يريد أن يكون استثنائيًا.",
      valuesTitle1: "منتجات عالية الجودة لاحتياجات العملاء",
      valuesDesc1: "كل منتج ونظام يمثل جودتنا. لهذا السبب نقدم فقط أفضل المنتجات.",
      valuesTitle2: "خدمة ممتازة تفوق التوقعات",
      valuesDesc2: "نحن نبذل قصارى جهدنا دائمًا لفهم ما يحتاجه عملاؤنا.",
      jobsTitle: "فرص العمل",
      readMore: "اقرأ المزيد",
      sales: "المبيعات",
      salesEngineerTitle: "مهندس مبيعات",
      salesEngineerDesc: "يستخدم مهندسو المبيعات معرفتهم الفنية مع مهارات المبيعات لتقديم المشورة والدعم بشأن مجموعة من المنتجات.",
      productSpecialistTitle: "أخصائي منتجات",
      productSpecialistDesc: "هذا المنصب مسؤول عن العمل مع العملاء الجدد والمحتملين لفهم احتياجاتهم وتقديم الحلول التقنية."
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن مستعدون لتقديم أفضل الحلول لاحتياجاتك الصناعية.",
      getInTouch: "ابقى على تواصل.",
      getInTouchDesc: "يرجى الاتصال بنا عبر جهات الاتصال الرقمية التالية للرد السريع.",
      email: "البريد الإلكتروني",
      website: "موقع الكتروني",
      headOffice: "المكتب الرئيسي",
      branch: "فرع",
      workshop: "ورشة عمل",
      tel: "هاتف",
      fax: "فاكس",
      sendMessage: "أرسل لنا رسالة",
      successMsg: "تم إرسال رسالتك بنجاح! سوف نتصل بك قريبا.",
      errorMsg: "حدث خطأ أثناء إرسال الرسالة.",
      formName: "اسمك",
      formNamePlaceholder: "أدخل اسمك",
      formEmail: "عنوان البريد الإلكتروني",
      formEmailPlaceholder: "example@email.com",
      formSubject: "الموضوع",
      formSubjectPlaceholder: "ماذا تريد أن تسأل؟",
      formMessage: "رسالة",
      formMessagePlaceholder: "اكتب تفاصيل رسالتك هنا...",
      btnSending: "جاري إرسال الرسالة...",
      btnSend: "إرسال رسالة"
    },
  },
} as const;

type Translations = typeof translations[LanguageCode];

type LanguageContextValue = {
  language: (typeof languages)[number];
  setLanguage: (language: (typeof languages)[number]) => void;
  t: Translations;
  allLanguages: readonly (typeof languages)[number][];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<(typeof languages)[number]>(languages[0]);
  const t = translations[language.code];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("citramas-language");
    if (stored && stored !== language.code) {
      const storedLanguage = languages.find((lang) => lang.code === stored);
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("citramas-language", language.code);
  }, [language.code]);

  useEffect(() => {
    document.documentElement.dir = (t as any).hero?.direction || "ltr";
    document.documentElement.lang = language.code;
  }, [t, language.code]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, allLanguages: languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
