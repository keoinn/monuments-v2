/** 公開頁內容。之後改由資料庫提供時，只替換 src/api/content.js。 */

export const home = {
  name: '萬選居',
  title: '青錢萬選',
  lead: '深入了解這座珍貴古蹟的歷史沿革、組織架構與文化價值。',
  aboutEyebrow: '古蹟的歷史與文化',
  aboutTitle: '關於萬選居',
  aboutBody:
    '這座古蹟始建於清朝道光年間，最初作為地方官員的辦公場所，見證了當時的政治與社會變遷。建築風格融合了傳統中式建築與當時的時代特色。歷經日治、戰後重建與正式列為古蹟，至今仍以傳統工法與現代技術維持其歷史風貌。',
  aboutQuote: '作為重要的文化載體，傳承了當地的歷史文化，是後代了解過去的重要窗口。',
  features: [
    {
      title: '歷史沿革',
      description: '探索古蹟的建造背景、歷史變遷與文化意義',
      to: '/history',
      mark: '史',
    },
    {
      title: '組織架構',
      description: '了解古蹟管理組織的結構與運作方式',
      to: '/organization',
      mark: '組',
    },
    {
      title: '委員會務',
      description: '查看理事會成員與相關公務資訊',
      to: '/directors',
      mark: '委',
    },
    {
      title: '公務資訊',
      description: '瀏覽古蹟相關的公務公告與重要資訊',
      to: '/public-affairs',
      mark: '務',
    },
  ],
  statistics: [
    { value: '200+', label: '年歷史' },
    { value: '50+', label: '重要文物' },
    { value: '1000+', label: '參觀人次' },
    { value: '5', label: '星級評等' },
  ],
}

export const timelineEvents = [
  {
    year: '1820',
    title: '古蹟建造',
    description:
      '這座古蹟始建於清朝道光年間，最初作為地方官員的辦公場所，見證了當時的政治與社會變遷。建築風格融合了傳統中式建築與當時的時代特色。',
  },
  {
    year: '1895',
    title: '日治時期',
    description:
      '進入日治時期後，建築物被重新規劃使用，成為重要的行政中心。在此期間，建築物經歷了部分改建，但仍保持原有的基本結構。',
  },
  {
    year: '1945',
    title: '戰後重建',
    description:
      '第二次世界大戰結束後，建築物在戰火中受損，經過精心修復後重新開放。這個時期標誌著古蹟保護意識的萌芽。',
  },
  {
    year: '1985',
    title: '列為古蹟',
    description:
      '正式被政府列為歷史古蹟，開始受到法律保護。這標誌著古蹟保護工作進入新的階段，也為後續的修復與維護奠定了基礎。',
  },
  {
    year: '2000',
    title: '全面修復',
    description:
      '進行了全面的修復工程，採用傳統工法與現代技術相結合的方式，確保古蹟的結構安全與歷史風貌的完整性。',
  },
]

export const historicalSignificance = [
  {
    title: '建築藝術',
    description:
      '展現了清朝中後期的建築特色，融合了傳統工藝與時代美學，是研究當時建築技術的重要實例。',
  },
  {
    title: '歷史見證',
    description: '見證了從清朝到現代的重要歷史變遷，承載了豐富的歷史記憶與文化內涵。',
  },
  {
    title: '文化傳承',
    description: '作為重要的文化載體，傳承了當地的歷史文化，是後代了解過去的重要窗口。',
  },
]

export const departments = [
  {
    name: '行政部',
    manager: '王建國',
    description: '負責古蹟管理處的日常行政事務與人事管理',
    phone: '02-1234-5678',
    email: 'admin@monument.gov.tw',
    responsibilities: ['人事管理與員工培訓', '財務預算編列與執行', '文書處理與檔案管理', '對外聯絡與協調'],
  },
  {
    name: '維護部',
    manager: '陳志明',
    description: '負責古蹟的日常維護與修復工作',
    phone: '02-1234-5679',
    email: 'maintenance@monument.gov.tw',
    responsibilities: ['古蹟結構安全檢查', '日常清潔與保養', '修復工程規劃與執行', '設備維護與更新'],
  },
  {
    name: '教育推廣部',
    manager: '林雅婷',
    description: '負責古蹟的教育推廣與文化活動',
    phone: '02-1234-5680',
    email: 'education@monument.gov.tw',
    responsibilities: ['導覽服務與解說', '教育活動規劃與執行', '文化推廣活動', '志工培訓與管理'],
  },
  {
    name: '研究部',
    manager: '黃文博',
    description: '負責古蹟的學術研究與文獻整理',
    phone: '02-1234-5681',
    email: 'research@monument.gov.tw',
    responsibilities: ['古蹟歷史研究', '文獻資料整理', '學術論文發表', '數位典藏建置'],
  },
  {
    name: '財務部',
    manager: '劉美惠',
    description: '負責古蹟管理處的財務管理與會計事務',
    phone: '02-1234-5682',
    email: 'finance@monument.gov.tw',
    responsibilities: ['預算編列與執行', '會計帳務處理', '財務報表製作', '採購管理'],
  },
  {
    name: '資訊部',
    manager: '張志強',
    description: '負責古蹟管理處的資訊系統與數位化服務',
    phone: '02-1234-5683',
    email: 'it@monument.gov.tw',
    responsibilities: ['資訊系統維護', '網站管理與更新', '數位化服務開發', '技術支援服務'],
  },
]

export const organizationChart = {
  chairman: { name: '張文華', title: '理事長' },
  viceChairman: { name: '李美玲', title: '副理事長' },
}

export const boardMembers = [
  {
    name: '張文華',
    title: '理事長',
    description: '致力於古蹟保護與文化傳承，擁有豐富的歷史建築修復經驗。',
    education: '國立台灣大學建築與城鄉研究所博士',
  },
  {
    name: '李美玲',
    title: '副理事長',
    description: '專精於文化資產管理與教育推廣，推動古蹟活化再利用。',
    education: '國立政治大學歷史學系碩士',
  },
  {
    name: '陳志明',
    title: '常務理事',
    description: '建築工程專家，專精於古蹟結構安全評估與修復技術。',
    education: '國立成功大學建築學系學士',
  },
  {
    name: '林雅婷',
    title: '常務理事',
    description: '文化創意產業專家，致力於古蹟文化價值推廣與創新應用。',
    education: '國立台灣藝術大學文化創意產業學系碩士',
  },
  {
    name: '黃文博',
    title: '理事',
    description: '歷史學者，專精於台灣史研究與文獻整理，為古蹟歷史研究提供學術支持。',
    education: '國立台灣大學歷史學系博士',
  },
  {
    name: '劉美惠',
    title: '理事',
    description: '財務管理專家，負責古蹟管理處的財務規劃與預算管理。',
    education: '國立政治大學會計學系碩士',
  },
]

export const boardStructure = [
  { title: '理事長', description: '負責理事會整體運作與決策', count: 1, unit: '人' },
  { title: '常務理事', description: '協助理事長處理日常事務', count: 3, unit: '人' },
  { title: '一般理事', description: '參與重大決策與監督管理', count: 8, unit: '人' },
]

export const meetingSchedule = [
  {
    date: '2024-01-15',
    title: '第一季理事會會議',
    description: '討論年度工作計畫與預算分配',
    time: '14:00-16:00',
    location: '古蹟管理處會議室',
  },
  {
    date: '2024-04-15',
    title: '第二季理事會會議',
    description: '檢討第一季執行成果與調整計畫',
    time: '14:00-16:00',
    location: '古蹟管理處會議室',
  },
  {
    date: '2024-07-15',
    title: '第三季理事會會議',
    description: '中期檢討與下半年重點工作',
    time: '14:00-16:00',
    location: '古蹟管理處會議室',
  },
  {
    date: '2024-10-15',
    title: '第四季理事會會議',
    description: '年度總結與下年度規劃',
    time: '14:00-16:00',
    location: '古蹟管理處會議室',
  },
]

export const affairs = {
  categories: [
    {
      title: '法規政策',
      description: '古蹟保護相關法規與政策文件',
      items: ['文化資產保存法', '古蹟修復準則', '管理辦法', '申請表格'],
    },
    {
      title: '預算財務',
      description: '年度預算與財務報告',
      items: ['年度預算書', '財務報表', '採購公告', '決標結果'],
    },
    {
      title: '人事管理',
      description: '人事相關公告與規定',
      items: ['職缺公告', '人事異動', '考核辦法', '福利制度'],
    },
    {
      title: '工程維護',
      description: '古蹟維護工程相關資訊',
      items: ['工程招標', '施工公告', '安全檢查', '修復報告'],
    },
    {
      title: '教育推廣',
      description: '教育活動與推廣計畫',
      items: ['導覽活動', '教育課程', '文化講座', '志工招募'],
    },
    {
      title: '研究報告',
      description: '學術研究與調查報告',
      items: ['歷史研究', '調查報告', '學術論文', '文獻整理'],
    },
  ],
  documents: [
    {
      title: '2024年度古蹟維護計畫',
      description: '詳細說明本年度古蹟維護工作的規劃與執行方式',
      date: '2024-01-15',
      author: '維護部',
      type: 'PDF',
    },
    {
      title: '古蹟參觀導覽服務公告',
      description: '提供專業導覽服務，歡迎民眾預約參觀',
      date: '2024-01-12',
      author: '教育推廣部',
      type: 'DOC',
    },
    {
      title: '古蹟修復工程招標公告',
      description: '公開招標古蹟修復工程，歡迎合格廠商投標',
      date: '2024-01-10',
      author: '工程部',
      type: 'PDF',
    },
    {
      title: '古蹟管理處人事異動公告',
      description: '公告最新人事異動情況與職務調整',
      date: '2024-01-08',
      author: '人事部',
      type: 'DOC',
    },
    {
      title: '古蹟歷史研究報告',
      description: '最新完成的古蹟歷史研究與文獻整理報告',
      date: '2024-01-05',
      author: '研究部',
      type: 'PDF',
    },
  ],
}

export const announcements = [
  {
    id: 'maintain-2024',
    title: '古蹟維護工程期間參觀注意事項',
    content: '因進行古蹟維護工程，部分區域將暫時關閉，請參觀民眾注意安全。',
    fullContent:
      '因進行古蹟維護工程，部分區域將暫時關閉。工程期間，請參觀民眾注意以下事項：\n\n1. 請遵循現場工作人員指示，勿進入施工區域\n2. 參觀時請保持安靜，避免影響工程進行\n3. 建議提前預約參觀時間，避免現場等候\n4. 如有任何疑問，請洽詢服務台工作人員\n\n工程預計於2024年3月底完成，感謝您的配合與諒解。',
    date: '2024-01-20',
    author: '維護部',
    category: '工程公告',
    isImportant: true,
  },
  {
    id: 'lecture-2024',
    title: '2024年春季文化講座系列活動',
    content: '邀請知名學者分享古蹟歷史與文化價值，歡迎民眾踴躍參加。',
    fullContent:
      '2024年春季文化講座系列活動即將開始，我們邀請了多位知名學者與專家，為大家分享古蹟的歷史背景、建築特色與文化價值。\n\n講座主題包括古蹟建築藝術賞析、歷史文化背景探討、修復技術與工法介紹，以及文化資產保護理念。\n\n活動時間：每週六下午2:00-4:00\n活動地點：古蹟管理處會議室\n報名方式：請至服務台或線上報名',
    date: '2024-01-18',
    author: '教育推廣部',
    category: '活動訊息',
    isImportant: false,
  },
  {
    id: 'hours-2024',
    title: '古蹟導覽服務時間調整公告',
    content: '自2月1日起，導覽服務時間將調整為每週二至週日，週一休館。',
    fullContent:
      '自2024年2月1日起，古蹟導覽服務時間將進行調整。\n\n開放時間為週二至週日上午9:00至下午5:00，週一休館（國定假日除外）。定時導覽為每日上午10:00與下午2:00，團體導覽需提前3天預約。',
    date: '2024-01-15',
    author: '服務部',
    category: '服務異動',
    isImportant: false,
  },
  {
    id: 'law-2024',
    title: '古蹟保護法規修訂公告',
    content: '文化部修訂古蹟保護相關法規，請相關人員詳閱新規定。',
    fullContent:
      '文化部於2024年1月10日發布修訂「文化資產保存法」部分條文，主要修訂內容包括古蹟修復準則更新、管理維護責任明確化、違規處罰標準調整，以及申請程序簡化。\n\n請相關人員務必詳閱並遵循新規定。',
    date: '2024-01-12',
    author: '研究部',
    category: '法規更新',
    isImportant: true,
  },
]

export const contactInfo = [
  {
    title: '地址',
    label: '古蹟管理處',
    value: '台北市中正區重慶南路一段122號',
    note: '參觀與洽公請先電話確認開放時間。導覽服務為週二至週日，週一休館。',
    href: 'https://maps.google.com/?q=台北市中正區重慶南路一段122號',
    action: '在 Google Maps 查看',
  },
  {
    title: '電話',
    label: '總機',
    value: '02-1234-5678',
    href: 'tel:02-1234-5678',
  },
  {
    title: '電子信箱',
    label: '公務信箱',
    value: 'info@monument.gov.tw',
    href: 'mailto:info@monument.gov.tw',
  },
]
