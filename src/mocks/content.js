/** 公開頁內容。之後改由資料庫提供時，只替換 src/api/content.js。 */
import history001 from '@/assets/img/history-001.webp'
import history003 from '@/assets/img/history-003.webp'
import history004 from '@/assets/img/history-004.webp'
import history005 from '@/assets/img/history-005.webp'
import history006 from '@/assets/img/history006.webp'
import history007 from '@/assets/img/history-007.webp'
import significance001 from '@/assets/img/significance-001.webp'
import significance002 from '@/assets/img/significance-002.webp'
import significance003 from '@/assets/img/significance-003.webp'

export const home = {
  name: '萬選居',
  title: '青錢萬選',
  lead: '豐原翁社的張氏客家宅院，2004 年登錄為臺中市歷史建築。這裡整理它的歷史、管理單位與參觀方式。',
  aboutEyebrow: '歷史建築與客家文化',
  aboutTitle: '關於萬選居',
  aboutBody:
    '萬選居在清同治 10 年（1871）由張始習起造，號萬春，祖籍廣東潮州府大埔。他的渡臺祖張達京與墾號「張振萬」，是漢人入墾臺中中部的重要人物。張始習於隔年逝世，四子續建，同治 12 年（1873）落成。宅名取自唐代張鷟「青錢萬選」，期許子孫勤學、文采出眾。2004 年 2 月 6 日登錄為歷史建築，宅內至今仍有族人居住。',
  aboutQuote: '萬選青錢文傳海內，千秋金鑑名震朝中。',
  features: [
    {
      title: '歷史沿革',
      description: '從張達京與葫蘆墩開墾，到同治年間建宅、登錄與修復',
      to: '/history',
      mark: '史',
    },
    {
      title: '組織架構',
      description: '祭祀公業臺中市張萬春管理維護，文化資產處辦理登錄與修復',
      to: '/organization',
      mark: '組',
    },
    {
      title: '委員會務',
      description: '整理目前公開的管理委員會資料',
      to: '/directors',
      mark: '委',
    },
    {
      title: '公務資訊',
      description: '登錄公告、修正公告與 2020 年修復紀錄',
      to: '/public-affairs',
      mark: '務',
    },
  ],
  visit: {
    title: '參觀方式',
    items: [
      '每日 09:00–12:00、14:00–17:00',
      '由左護龍進入至三進，再由左護龍離開',
      '第二進公廳與右護龍住戶空間不開放',
      '15 人以上請於三日前電洽文化資產處 04-22290280',
    ],
  },
  statistics: [
    { value: '1873', label: '落成年份' },
    { value: '2004', label: '登錄歷史建築' },
    { value: '3,228萬', label: '修復經費' },
    { value: '每日', label: '上下午開放' },
  ],
}

export const timelineEvents = [
  {
    year: '1690',
    title: '渡臺祖張達京',
    description:
      '張達京（1690–1773）為岸裡社首任通事，墾號「張振萬」。任內開築水圳灌溉農田，與葫蘆墩（今豐原）的開墾關係密切。',
  },
  {
    year: '1871',
    title: '張始習起造',
    description:
      '第十五世張始習（1802–1872），號萬春，於同治 10 年動工興建萬選居。官方頁記其祖籍為廣東潮州府大埔縣。隔年他逝世，由四子續建。',
  },
  {
    year: '1873',
    title: '宅院落成',
    image: history001,
    imageAlt: '萬選居宅院',
    description:
      '同治 12 年正式落成，以「青錢萬選」命名。臺中市文化資產處 2020 年修復新聞記主體為三落二護龍（圍屋），含外埕、禾埕、門樓與半月池。工法融合漳、泉、潮。客家雲與國家文化記憶庫另記為三進四護龍。',
  },
  {
    year: '1971',
    title: '民國 60 年重修',
    description:
      '上一次大修在民國 60 年，由當時的臺中市長張啟仲出資。',
  },
  {
    year: '1999',
    title: '九二一震災修復',
    images: [
      { src: history003, alt: '九二一震災後的萬選居' },
      { src: history004, alt: '九二一震災後的萬選居' },
      { src: history006, alt: '九二一震災後的萬選居' },
    ],
    description:
      '正廳、門廳受損。震災後修復時，一落與二落原有的唐山灰瓦不易取得，一度改鋪紅瓦。',
  },
  {
    year: '2004',
    title: '登錄歷史建築',
    description:
      '2002 年 5 月 17 日會勘後決定登錄。2004 年 2 月 6 日，臺中縣政府以府授文資字第 093001067-4 號公告，登錄種類為其他設施。2008 年 8 月 29 日另有修正公告。',
  },
  {
    year: '2017',
    title: '修復開工',
    image: history005,
    imageAlt: '萬選居修復開工',
    description:
      '2017 年 5 月 26 日，市長林佳龍主持修復開工。經費新臺幣 3,228 萬元，其中客家委員會 2,517 萬元、臺中市政府 711 萬元。',
  },
  {
    year: '2020',
    title: '修復完工',
    image: history007,
    imageAlt: '萬選居修復完工',
    description:
      '2020 年 3 月 23 日完工。工程恢復黑瓦、重貼子孫廊貝殼，並保留日治時期彈孔。其後由祭祀公業臺中市張萬春管理維護，並適度開放參觀。',
  },
]

export const historicalSignificance = [
  {
    title: '地方開發',
    image: significance003,
    imageAlt: '葫蘆墩圳灌溉路界圖',
    description:
      '張達京與葫蘆墩水利、農墾相關，萬選居是這支張氏家族留在翁社的宅院，也是豐原地區開發史的具體場所。',
  },
  {
    title: '建築工藝',
    image: significance001,
    imageAlt: '萬選居一落門楣「詒穀堂」',
    description:
      '閩客合院，材料為杉木、石材與土埆。木構偏泉州式樣。一落門楣為堂號「詒穀堂」，壁堵交趾陶傳為晉江一品堂蔡姓匠師作品。正廳另有「曲江世德」匾，以及「紹祖宗一脈真傳克勤克儉，教兒孫兩件正事惟讀惟耕」對聯。',
  },
  {
    title: '修復與居住',
    image: significance002,
    imageAlt: '萬選居貝殼屏門',
    description:
      '2020 年修復保留彈痕、恢復唐山灰瓦與貝殼屏門。宅院仍是私有民宅，文化記憶庫記約有二十多戶族人居住。',
  },
]

export const departments = [
  {
    name: '祭祀公業臺中市張萬春',
    manager: '管理維護者',
    description:
      '私有民宅的管理單位。2020 年修復完成後，由公業系統性維護，並適度開放參觀、配合當地客家文化活動。',
    responsibilities: ['日常管理與維護', '住戶生活與參觀的分界', '客家文化活動配合', '翁社社區形象'],
  },
  {
    name: '臺中市文化資產處',
    manager: '主管機關',
    description:
      '辦理歷史建築登錄、修復與行政聯繫。15 人以上團體參觀，須於三日前的上班時間電洽本處，電話是文化資產處總機，不是宅內電話。',
    responsibilities: ['登錄與修正公告', '修復工程', '團體參觀事前通知', '文化資產保存行政'],
  },
]

export const organizationChart = {
  leaders: [
    { name: '祭祀公業臺中市張萬春', title: '管理維護者' },
    { name: '臺中市文化資產處', title: '主管機關' },
  ],
}

export const boardMembers = []

export const boardStructure = [
  {
    title: '祭祀公業',
    description: '法定管理維護單位為祭祀公業臺中市張萬春，新聞中亦稱祭祀公業法人張萬春管理委員會。',
  },
  {
    title: '主任委員',
    description: '委員姓名、人數與任期尚未見於公開資料。',
  },
  {
    title: '主管機關',
    description: '登錄、修復與團體參觀通知由臺中市文化資產處辦理。',
  },
]

export const meetingSchedule = []

export const affairs = {
  categories: [
    {
      title: '登錄與法規',
      description: '歷史建築登錄與適用的文化資產法規',
      items: ['文化資產保存法', '2004 年登錄公告', '2008 年修正公告'],
    },
    {
      title: '修復工程',
      description: '2017 年至 2020 年的修復範圍與經費',
      items: ['經費 3,228 萬元', '門樓與一落門廳', '二落祖先廳', '護龍、過水廊與屋瓦'],
    },
    {
      title: '參觀管理',
      description: '依文化資產處歷史建築頁的現行說明',
      items: ['每日上下午開放', '左護龍動線', '公廳與右護龍不開放', '15 人以上須三日前通知'],
    },
  ],
  documents: [
    {
      title: '豐原「萬選居」登錄公告',
      description: '府授文資字第 093001067-4 號，最初登錄公告',
      date: '2004-02-06',
      author: '臺中縣政府',
      type: 'PDF',
      href: 'https://www.tchac.taichung.gov.tw/uploads/tchac/files/202205/3fe95872-0191-4bd3-a50d-79fcc0acf8d8.pdf',
    },
    {
      title: '豐原「萬選居」修正公告',
      description: '登錄資料修正。公告內文以原 PDF 為準',
      date: '2008-08-29',
      author: '臺中縣政府',
      type: 'PDF',
      href: 'https://www.tchac.taichung.gov.tw/uploads/tchac/files/202205/5ba5058f-1ee5-4ad7-a43e-839978bae0e0.pdf',
    },
    {
      title: '萬選居古厝重修，百年風華綿延',
      description: '修復完工說明：經費、工程項目、黑瓦、貝殼屏門與彈孔保留',
      date: '2020-04-27',
      author: '臺中市文化資產處',
      type: '新聞',
      href: 'https://www.tchac.taichung.gov.tw/information?pid=4265&uid=4',
    },
  ],
}

export const announcements = [
  {
    id: 'repair-2020',
    title: '歷史建築豐原萬選居修復完工',
    content: '修復工程於 2020 年 3 月 23 日完工，總經費新臺幣 3,228 萬元。',
    fullContent:
      '臺中市文化資產處於 2020 年 4 月 27 日發布：歷史建築豐原「萬選居」修復工程歷時兩年多，於 2020 年 3 月 23 日完工。總經費新臺幣 3,228 萬元，其中客家委員會 2,517 萬元、臺中市政府 711 萬元。\n\n工程包含門樓、一落門廳、二落祖先廳、左右次間、左右過水廊與右橫屋。一落、二落恢復唐山灰瓦；二落子孫廊木屏門以貝殼碎片重貼；一落正立面斗砌磚牆上的舊彈孔填補後保留彈痕。\n\n完工後由祭祀公業臺中市張萬春管理維護，並適度開放參觀。',
    date: '2020-04-27',
    author: '臺中市文化資產處',
    category: '修復紀錄',
    isImportant: true,
  },
  {
    id: 'repair-2017',
    title: '萬選居修復工程開工',
    content: '2017 年 5 月 26 日，市長林佳龍主持修復開工。',
    fullContent:
      '2017 年 5 月 26 日，臺中市長林佳龍主持歷史建築豐原萬選居修復開工。工程經費新臺幣 3,228 萬元，於 2020 年 3 月 23 日完工。\n\n這是一段已經結束的工程紀錄，不是現行閉館公告。參觀前請仍以文化資產處歷史建築頁的開放時間為準。',
    date: '2017-05-26',
    author: '相關報導',
    category: '修復紀錄',
    isImportant: false,
  },
  {
    id: 'designation-2004',
    title: '公告登錄為歷史建築',
    content: '臺中縣政府於 2004 年 2 月 6 日登錄豐原「萬選居」。',
    fullContent:
      '2004 年 2 月 6 日，臺中縣政府以府授文資字第 093001067-4 號公告，將豐原「萬選居」登錄為歷史建築，種類為其他設施。登錄理由是宅院興築於清同治年間，為中部少見的大型宅院，在豐原開發史上具有意義，建築工法融合漳、泉、潮等派別。\n\n2008 年 8 月 29 日另有修正公告。原文見公務資訊頁所附 PDF。',
    date: '2004-02-06',
    author: '臺中縣政府',
    category: '登錄公告',
    isImportant: true,
  },
]

export const contactInfo = [
  {
    title: '地址',
    label: '萬選居',
    value: '臺中市豐原區翁社里豐年路149巷10弄16號',
    note: '每日 09:00–12:00、14:00–17:00 開放參觀。請由左護龍進入至三進，再由左護龍離開。第二進公廳與右護龍住戶空間不開放。宅內有住戶，請放輕腳步。',
    href: 'https://maps.google.com/?q=臺中市豐原區豐年路149巷10弄16號',
    lat: 24.265712,
    lon: 120.737575,
    map: 'https://maps.google.com/maps?q=24.265712,120.737575&hl=zh-TW&z=17&output=embed',
    action: '在 Google Maps 查看',
  },
  {
    title: '電話',
    label: '團體參觀 · 臺中市文化資產處',
    value: '04-22290280',
    note: '15 人以上請於三日前來電，上班日 08:00–17:00。這是文化資產處總機（臺中市西區市府路41巷19號），不是宅內電話。',
    href: 'tel:04-22290280',
  },
  {
    title: '社群平台',
    value: '青錢萬選 萬選居',
    href: 'https://www.facebook.com/profile.php?id=100064501097860',
    icon: 'facebook',
  },
]
