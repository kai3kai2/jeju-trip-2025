const base = import.meta.env?.BASE_URL ?? '/'
const img = (file) => `${base}imgs/${file}`

export const tripInfo = {
  title: "🏝 濟州島 5天4夜自駕遊",
  subtitle: "2026年 6/23（二）出發 ～ 6/27（六）返台　✦　樂天租車4天",
  chips: [
    { icon: "✈️", label: "去程", value: "IT654 桃園06:40→濟州09:35" },
    { icon: "✈️", label: "回程", value: "IT655 濟州10:30→桃園11:35" },
    { icon: "🚗", label: "租車", value: "樂天租車 6/23取 6/26晚還" },
    { icon: "🏨", label: "住宿", value: "西歸浦2夜 / 樂天城市2夜" },
  ]
}

export const tabs = [
  { id: "day-1", label: "去程", date: "搭機", desc: "提醒", color: "blue" },
  { id: "drive", label: "🚗開車", date: "自駕", desc: "須知", color: "red" },
  { id: "day1", label: "Day1", date: "6/23", desc: "抵達", color: "teal" },
  { id: "day2", label: "Day2", date: "6/24", desc: "城山", color: "teal" },
  { id: "day3", label: "Day3", date: "6/25", desc: "咸德", color: "teal" },
  { id: "day4", label: "Day4", date: "6/26", desc: "挾才", color: "teal" },
  { id: "day5", label: "Day5", date: "6/27", desc: "返台", color: "teal" },
  { id: "day6", label: "回程", date: "搭機", desc: "提醒", color: "blue" },
  { id: "day0", label: "➕", date: "推薦", desc: "加選", color: "red" },
]

export const days = {
  "day-1": {
    id: "day-1",
    title: "6/23(二）提醒",
    subtitle: "虎航 IT654　桃園 06:40 → 濟州 09:35",
    headerGradient: "from-blue-900 to-blue-600",
    emoji: "✈️",
    sections: [
      {
        type: "flight",
        airline: "🛫 虎航 Tigerair IT654",
        from: { code: "TPE", name: "桃園國際機場", time: "06:40" },
        to: { code: "CJU", name: "濟州國際機場", time: "09:35" },
        duration: "約 1h 55m"
      },
      {
        type: "label",
        emoji: "⏰",
        title: "出發前行李清單"
      },
      {
        type: "checklist",
        items: [
          "護照（有效期6個月以上）+ 機票 QR Code",
          "韓元現金（建議準備 15-20 萬韓元）+ 信用卡",
          "<strong>國際駕照 + 台灣駕照</strong>（租車兩本都要帶！）",
          "樂天租車預訂確認書（電子版即可）",
          "西歸浦住宿 + 樂天城市酒店訂房確認信",
          "防曬乳、薄外套（萬丈窟恆溫 11°C）",
          "充電線（韓國 Type A，與台灣相同可直插）",
          "已安裝：Naver Map、Papago、Kakao T"
        ]
      },
      {
        type: "label",
        emoji: "📱",
        title: "出發前 App 確認"
      },
      {
        type: "info",
        items: [
          "Naver Map — 韓國最準確導航，景點、停車場搜尋",
          "Papago — 韓語翻譯，拍照即翻，菜單救星",
          "Kakao T — 叫計程車，歸還租車後使用",
          "CatchTable — 熱門餐廳線上候位（倫敦貝果必備）"
        ]
      },
      {
        type: "label",
        emoji: "✈️",
        title: "出發當天流程"
      },
      {
        type: "timeline",
        items: [
          { time: "03:30", desc: "起床、出門前最後確認行李" },
          { time: "04:30", desc: "抵達桃園機場 T2（虎航在第二航廈）" },
          { time: "04:45", desc: "辦理報到 Check-in、托運行李" },
          { time: "05:15", desc: "通關安檢、出境" },
          { time: "05:30", desc: "候機室等待，可買早餐" },
          { time: "06:40", desc: "✈️ IT655 起飛！", highlight: true },
          { time: "09:35", desc: "濟州機場落地" },
          { time: "10:00", desc: "通關、提領行李、前往樂天租車" },
          { time: "10:30", desc: "取車完成！前往 EGG DROP 吃早餐 🍳" }
        ]
      },
      {
        type: "label",
        emoji: "💡",
        title: "實用資訊"
      },
      {
        type: "info",
        items: [
          "濟州島對台灣護照免簽 30 天，入境無需填申報表",
          "加油：自助加油站 셀프주유소，柴油=경유，還車前加滿",
          "停車費約 1,000–3,000 韓元/次，多數刷卡即可",
          "緊急聯絡：報警 112，救護車 119，台灣外館 +82-2-399-2767"
        ]
      }
    ]
  },

  "drive": {
    id: "drive",
    title: "🚗 濟州島自駕注意事項",
    subtitle: "出發前必看！韓國行車規則 · 速限 · 事故處理 SOP",
    headerGradient: "from-green-600 to-green-700",
    emoji: "🚗",
    sections: [
      {
        type: "info",
        items: [
          "韓國與台灣相同：左駕、靠右行駛，上手不難，但規則更嚴、罰則更重，務必全員看完這頁！",
          "濟州測速照相、區間測速密布，租車違規罰單會寄回租車公司並從信用卡扣款，切勿僥倖。"
        ]
      },
      {
        type: "label",
        emoji: "📄",
        title: "一、上路必帶證件（缺一不可）"
      },
      {
        type: "checklist",
        items: [
          "<strong>國際駕照（B類，日內瓦公約）</strong> — 入境韓國一年內有效",
          "<strong>台灣駕照正本</strong> — 韓國規定須與國際駕照一起隨身攜帶，缺一即屬無照駕駛",
          "護照 — 租車取車核對身分用",
          "樂天租車預訂確認書 + 駕駛人本人信用卡",
          "⚠️ 三本證件（國際駕照＋台灣駕照＋護照）開車時務必都帶在身上"
        ]
      },
      {
        type: "label",
        emoji: "🚦",
        title: "二、與台灣不一樣的地方"
      },
      {
        type: "info",
        items: [
          "紅燈可右轉，但新規須「先完全停車」確認左方來車與行人，無人才可右轉；行人穿越中嚴禁右轉。",
          "看到「비보호（無保護左轉）」標示：沒有左轉燈，需自行看號誌與來車狀況左轉。",
          "行人最大！只要行人在斑馬線上或準備穿越，車輛一律停讓，違者重罰。",
          "全車（含後座）強制繫安全帶；6歲以下兒童須使用安全座椅（可向租車公司加租）。",
          "導航建議用 Naver Map 或 Kakao Navi，輸入電話號碼或景點韓文最準。"
        ]
      },
      {
        type: "label",
        emoji: "⚡",
        title: "三、速限規定（安全速度 5030）"
      },
      {
        type: "info",
        items: [
          "市區主要道路：50 km/h",
          "市區巷弄 / 住宅區：30 km/h",
          "兒童保護區（校區）：30 km/h（取締最嚴，務必減速）",
          "郊區一般道路：60–80 km/h",
          "高速公路 / 快速道路：100–110 km/h（依路段標誌為準）",
          "🚨 一切以路邊與路面標誌實際數字為準，寧慢勿快。"
        ]
      },
      {
        type: "label",
        emoji: "🏫",
        title: "四、兒童保護區「民植法 민식이법」"
      },
      {
        type: "info",
        items: [
          "學校、幼兒園周邊半徑約300公尺劃為「兒童保護區」，地面常漆成紅色並標示 30。",
          "區內限速30、違規一律加倍處罰，常設固定測速與監視器。",
          "若在區內肇事致兒童傷亡，將面臨極重刑責，看到請務必大幅減速、隨時準備停車。"
        ]
      },
      {
        type: "label",
        emoji: "🍺",
        title: "五、酒駕零容忍（千萬別碰）"
      },
      {
        type: "info",
        items: [
          "血中酒精濃度 0.03%（約一杯啤酒）即屬違法。",
          "0.03–0.08%：吊扣駕照＋罰款 / 拘役；0.08% 以上：直接吊銷。",
          "外國人酒駕同樣重罰，並可能影響日後入境，喝酒就交給代駕或計程車（Kakao T）。"
        ]
      },
      {
        type: "label",
        emoji: "⛽",
        title: "六、加油與停車"
      },
      {
        type: "info",
        items: [
          "本次為柴油車：認明「경유（Diesel）」油槍，千萬別加錯成「휘발유（汽油）」！",
          "自助加油站（셀프주유소）較便宜，可請站務協助或用 Papago 翻譯操作。",
          "還車前務必加滿油，並拍照記錄油表與車況。",
          "停車多為計時收費，約 1,000–3,000 韓元/次，多數可刷卡；勿停紅線與身障 / 婦幼車位。"
        ]
      },
      {
        type: "label",
        emoji: "🚨",
        title: "七、發生事故處理 SOP（即使小擦撞也要做）"
      },
      {
        type: "timeline",
        items: [
          { time: "1", desc: "確保安全：開雙黃燈、後方放三角警示牌，人員移至安全處", highlight: true },
          { time: "2", desc: "拍照存證：雙方車牌、車輛位置、所有損傷、現場全景" },
          { time: "3", desc: "報警 112：即使小擦撞也必須報警取得紀錄，否則保險無法理賠" },
          { time: "4", desc: "有人受傷立刻叫救護車 119" },
          { time: "5", desc: "聯繫樂天租車：依保險方案指示處理，勿私下和解" },
          { time: "6", desc: "需要翻譯協助打 1330（觀光通譯專線，提供中文）" },
          { time: "7", desc: "未經拍照與報案前，勿擅自移車（若嚴重影響交通，移車前先拍照定位）" }
        ]
      },
      {
        type: "label",
        emoji: "☎️",
        title: "八、緊急聯絡電話（存進手機）"
      },
      {
        type: "info",
        items: [
          "🚓 報警：112",
          "🚑 救護車 / 消防：119",
          "🗣 旅遊諮詢・翻譯（24小時中文）：1330",
          "🚘 樂天租車緊急專線：取車時索取並記下",
          "🏛 駐韓國台北代表部急難救助：+82-2-399-2767"
        ]
      },
      {
        type: "info",
        items: [
          "💡 心法：濟州路況單純好開，最大風險是超速與兒童保護區，全程「看標誌、守速限、禮讓行人」就能安全玩遍濟州！"
        ]
      }
    ]
  },

  "day1": {
    id: "day1",
    title: "6/23（二）",
    subtitle: "抵達 · 機場早餐 · 白帶魚午餐 · 柱狀節理帶 · 每日偶來市場",
    headerGradient: "from-teal-700 to-teal-600",
    emoji: "Day 1",
    sections: [
      {
        type: "label",
        emoji: "✈️",
        title: "09:35｜抵達濟州 & 取車"
      },
      {
        type: "info",
        items: [
          "落地濟州機場 → 提領行李 → 前往樂天租車（機場1F）",
          "確認保險方案、油種（柴油 경유 Diesel）、拍照記錄車況"
        ]
      },
      {
        type: "card",
        cardType: "spot",
        image: img('樂天租車.png'),
        title: "樂天租車 제주공항점（取車）",
        location: "제주시 용담이동 2876（濟州機場附近）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EB%A0%8C%ED%84%B0%EC%B9%B4%20%EC%A0%9C%EC%A3%BC%EA%B3%B5%ED%95%AD%EC%A0%90", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/5oE5y0S5", type: "naver" }
        ],
        note: "機場1F出口取車，確認保險方案、油種（柴油 경유）、拍照記錄車況再出發"
      },
      {
        type: "label",
        emoji: "🍜",
        title: "11:00｜午餐｜豬肉湯麵"
      },
      {
        type: "card",
        cardType: "food",
        image: img('豬肉湯飯.png'),
        title: "豬肉湯飯 순대국밥 / 豬肉麵 돔베고기국수",
        location: "제주시 일도이동（濟州機場附近市區）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%EC%8B%9C%EC%83%88%EC%9A%B0%EB%A6%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xKERj2sz", type: "naver" }
        ],
        note: "落地後第一餐！濃郁豬骨湯底，份量紮實，機場附近多家可選"
      },
      {
        type: "label",
        emoji: "🚗",
        title: "12:00｜南下西歸浦（約1小時）"
      },
      {
        type: "info",
        items: ["沿1132號海岸公路南下，沿途海景美麗"]
      },
      {
        type: "label",
        emoji: "🧸",
        title: "13:30｜玩具模型博物館"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('手辦博物館.png'),
        title: "手辦博物館濟州 박물관은살아있다",
        location: "서귀포시 안덕면 한창로 243",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/6PGRqdehzDdjDVkV6", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/5qLvrR3Z", type: "naver" }
        ],
        note: "全球知名的3D錯視藝術博物館，運用立體繪畫與仿真場景打造可互動拍照的趣味空間，從恐龍、名畫到海底世界主題豐富，大人小孩都能玩得開心。💰 成人約 15,000 韓元、青少年/兒童約 13,000 韓元。🎫 Klook、KKday 線上購票常有約8折優惠（約 11,000–12,000 韓元），出示電子票券即可入場，南下西歸浦路上順道安排"
      },
      {
        type: "label",
        emoji: "🌋",
        title: "15:30｜西歸浦景點"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('柱狀節理帶.png'),
        title: "柱狀節理帶 주상절리대",
        location: "서귀포시 중문동 2768-1",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A3%BC%EC%83%81%EC%A0%88%EB%A6%AC%EB%8C%80", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/5UEc0zez", type: "naver" }
        ],
        note: "玄武岩遇海水急速冷卻形成的六角形石柱懸崖，是濟州最具代表性的火山地質奇景，海浪拍打石柱噴起浪花氣勢磅礡，設有木棧觀景步道輕鬆好走。🕘 09:00–18:00（入場至 17:40），連中無休。💰 成人 2,000 韓元、青少年/兒童 1,000 韓元，現場購票即可，免預約"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('正房瀑布.png'),
        title: "正房瀑布 정방폭포",
        location: "정방폭포주차장（停車場）",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/P2VPUodHkzsWRQw27", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/58NXx4jC", type: "naver" }
        ],
        note: "亞洲唯一直接傾瀉入海的瀑布，高約23公尺，水流自懸崖奔落大海蔚為壯觀，被列為韓國名勝。🕘 09:00–18:00，連中無休。💰 成人 2,000 韓元、青少年/兒童 1,000 韓元，現場購票即可。需走下坡石階步道約10分鐘，建議穿好走的鞋"
      },
      {
        type: "label",
        emoji: "☕",
        title: "17:30｜橘子咖啡廳（三選一）"
      },
      {
        type: "info",
        items: ["以下三家皆為推薦，擇一前往即可"]
      },
      {
        type: "card",
        cardType: "food",
        image: img('橘子咖啡館.png'),
        title: "橘子咖啡館",
        location: "서귀포시 이어도로1027번길 34",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/mSke6cmYpQse2BeH9", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%9C%EA%B7%80%ED%8F%AC%EC%8B%9C%20%EC%9D%B4%EC%96%B4%EB%8F%841027%EB%B2%88%EA%B8%B8%2034", type: "naver" }
        ],
        note: "濟州特產柑橘主題，柚子茶＆橘子拿鐵必點，景點後甜蜜收尾"
      },
      {
        type: "card",
        cardType: "food",
        image: img('橘子咖啡館.png'),
        title: "橘花閣樓 귤화각루",
        location: "서귀포시 이어도로1027번길 34",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/Tq3mT1oU2R9KDeim6", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/5Q37nTIS", type: "naver" }
        ],
        note: "韓式傳統閣樓風格，柑橘花主題裝潢，拍照氛圍極佳，與橘子咖啡館相鄰可順道比較"
      },
      {
        type: "card",
        cardType: "food",
        image: img('橘子咖啡館.png'),
        title: "Gamttanam 감따남（柑橘採摘）",
        location: "서귀포시 강정동 1890-2",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/egkkKc5juNn2yRvp7", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/5bVsTCQn", type: "naver" }
        ],
        note: "可親手採摘濟州柑橘的體驗農場，季節限定（約11月–2月最佳），現採現吃新鮮感十足，位於江汀洞"
      },
      {
        type: "label",
        emoji: "🏨",
        title: "18:00｜入住西歸浦住宿"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('Casaloma Hotel.png'),
        title: "卡薩洛瑪飯店 Casaloma Hotel（前2夜）",
        location: "서귀포시 서홍동 546",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/DYgb6GZWGgyZbtY37", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%B9%B4%EC%82%AC%EB%A1%9C%EB%A7%88%ED%98%B8%ED%85%94%20%EC%84%9C%EA%B7%80%ED%8F%AC", type: "naver" }
        ],
        note: "Check-in後步行約10分鐘至每日偶來市場"
      },
      {
        type: "label",
        emoji: "🌙",
        title: "19:00｜晚餐｜每日偶來市場"
      },
      {
        type: "card",
        cardType: "food",
        image: img('偶來市場.png'),
        title: "西歸浦每日偶來市場 매일올레시장",
        location: "서귀포시 서귀동 340",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EA%B7%80%ED%8F%AC%EB%A7%A4%EC%9D%BC%EC%98%AC%EB%A0%88%EC%8B%9C%EC%9E%A5", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/FgHDJag6", type: "naver" }
        ],
        note: "08:00–21:00，連中無休，必吃秋刀魚飯捲、蒜味炸雞，晚上氣氛最熱鬧"
      },
      {
        type: "card",
        cardType: "food",
        image: img('道排骨.png'),
        title: "道排骨 도오갈비",
        location: "서귀포시 일주동로 8749-1",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/51cB1QY6zGnZHZQ39", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/IDFUWjYl", type: "naver" }
        ],
        note: "西歸浦人氣排骨名店，建議提早到避免候位（偶來市場吃不夠的話）"
      },
      {
        type: "label",
        emoji: "☂️",
        title: "雨備方案（天候不佳時）"
      },
      {
        type: "card",
        cardType: "rain",
        image: img('水族館.png'),
        title: "Jeju Aqua Planet 水族館",
        location: "서귀포시 성산읍 섭지코지로 95",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%95%84%EC%BF%A0%EC%95%84%ED%94%8C%EB%9D%BC%EB%84%B7%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xiquOGa4", type: "naver" }
        ],
        note: "韓國最大、亞洲頂級的海洋水族館，擁有巨型主缸與海女實境表演，飼育鯊魚、魟魚等逾500種海洋生物，全程室內為絕佳雨備景點。💰 成人約 33,000 韓元、兒童約 31,000 韓元。🎫 Klook、KKday 線上購票約 25,000–27,000 韓元（約75–8折），比現場划算，建議先網路購票"
      },
      {
        type: "card",
        cardType: "rain",
        image: img('Arte Museum Jeju.png'),
        title: "Arte Museum Jeju 아르떼뮤지엄 제주（濟州島西邊）",
        location: "제주시 애월읍 어림비로 478",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%95%84%EB%A5%B4%EB%96%BC%EB%AE%A4%EC%A7%80%EC%97%84%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/GSDAiZ5B", type: "naver" }
        ],
        note: "由韓國知名團隊d'strict打造的沉浸式數位媒體藝術展，以光影、音樂結合超大投影營造夢幻空間，是濟州最熱門的室內打卡景點，雨天首選。💰 成人約 18,000 韓元、青少年約 13,000 韓元、兒童約 10,000 韓元。🎫 Klook、KKday 線上購票約 15,000 韓元（約85折），位於愛月邑西部"
      }
    ]
  },

  "day2": {
    id: "day2",
    title: "6/24（三）",
    subtitle: "城山日出峰 · 涉地可支 · 明珍鮑魚 · 倫敦貝果",
    headerGradient: "from-teal-700 to-teal-600",
    emoji: "Day 2",
    sections: [
      {
        type: "label",
        emoji: "🌅",
        title: "05:30｜清晨出發看日出"
      },
      {
        type: "info",
        items: ["建議05:30出發，開車約50分鐘至城山，6月日出約05:20"]
      },
      {
        type: "card",
        cardType: "spot",
        image: img('城山日出峰.png'),
        title: "城山日出峰 성산일출봉",
        location: "서귀포시 성산읍 일출로 284-12",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%B1%EC%82%B0%EC%9D%BC%EC%B6%9C%EB%B4%89", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xa5Rn5U3", type: "naver" }
        ],
        note: "UNESCO世界自然遺產！由海底火山噴發形成的巨型火山口，碗狀火口被99座岩峰環繞，登頂俯瞰東部海岸與日出絕美，是濟州必訪地標。🕘 夏季 05:30–20:00（含日出前入場），連中無休。💰 成人 5,000 韓元、青少年/兒童 2,500 韓元，現場購票即可。登頂步道約20–30分鐘，下山後停車場有海女現烤海鮮攤"
      },
      {
        type: "label",
        emoji: "🍳",
        title: "08:00｜早餐"
      },
      {
        type: "info",
        items: [
          "城山停車場周邊小攤：紫菜包飯、魚餅湯，約5,000-8,000韓元",
          "或 GS25/CU 便利商店熱食三明治先填飽"
        ]
      },
      {
        type: "label",
        emoji: "☀️",
        title: "09:00｜東部海岸漫步"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('涉地可支.png'),
        title: "涉地可支 섭지코지",
        location: "서귀포시 성산읍 섭지코지로 107",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/JDTzrDfBRirtNn5g9", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/FbONgQz0", type: "naver" }
        ],
        note: "突出於東部海岸的美麗海角，擁有遼闊草地、紅色燈塔與玄武岩懸崖，韓劇《我叫金三順》取景地，安藤忠雄設計的Glass House與Genius Loci亦座落於此。🚗 開車入園免費，停車費約 1,000–2,000 韓元，繞行步道一圈約40分鐘"
      },
      {
        type: "card",
        cardType: "food",
        image: img('Cafe Mou Moon.png'),
        title: "Cafe Mou Moon 카페 무문",
        location: "서귀포시 성산읍 섭지코지로 84",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/fr594bbKG5GpXdT6A", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/5JpyZtdH", type: "naver" }
        ],
        note: "涉地可支旁無敵海景咖啡廳，網紅打卡熱點"
      },
      {
        type: "label",
        emoji: "🐚",
        title: "11:30｜午餐｜鮑魚大餐"
      },
      {
        type: "card",
        cardType: "food",
        image: img('明珍鮑魚.png'),
        title: "明珍鮑魚 명진전복",
        location: "서귀포시 성산읍 고성리 236",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%AA%85%EC%A7%84%EC%A0%84%EB%B3%B5%20%EC%84%B1%EC%82%B0", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%AA%85%EC%A7%84%EC%A0%84%EB%B3%B5", type: "naver" }
        ],
        note: "09:30–21:00（L.O. 20:00），連中無休，鮮活現宰鮑魚刺身＋石鍋飯，11:30 前去避免久候"
      },
      {
        type: "label",
        emoji: "🏝",
        title: "13:30｜下午｜牛島（可選）"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('牛島.png'),
        title: "牛島 우도（城山港出發）",
        location: "서귀포시 성산읍 성산리（城山港搭船）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%B1%EC%82%B0%ED%95%AD%20%EC%A2%85%ED%95%A9%EC%97%AC%EA%B0%9D%ED%84%B0%EB%AF%B8%EB%84%90", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%B1%EC%82%B0%ED%95%AD%20%EC%A2%85%ED%95%A9%EC%97%AC%EA%B0%9D%ED%84%B0%EB%AF%B8%EB%84%90", type: "naver" }
        ],
        note: "搭船從城山港出發僅約10分鐘即可抵達的離島，花生田、白沙灘與燈塔風光療癒，花生冰淇淋是必嚐名物，租電動車或觀光車環島最愜意。💰 來回渡輪票成人約 10,500 韓元（含登島環境費），電動車租借約 3–4 萬韓元起。🎫 渡輪現場購票即可，需攜帶護照登記，建議安排2–3小時"
      },
      {
        type: "label",
        emoji: "🌙",
        title: "晚上｜醬蟹晚餐"
      },
      {
        type: "card",
        cardType: "food",
        image: img('醬蟹.png'),
        title: "醬蟹 간장게장（성산읍 인근）",
        location: "서귀포시 성산읍 일대（城山 附近）",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/4YRqhE3AnXVJZQUb8", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/IFgd6OHn", type: "naver" }
        ],
        note: "牛島玩完晚上來吃！醬蟹是「飯的強盜」，鮮蟹醃漬入味，配白飯絕配。⚠️ 建議出發前 Naver Map 確認營業時間"
      },
      {
        type: "label",
        emoji: "🏨",
        title: "晚上｜回西歸浦住宿"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('Casaloma Hotel.png'),
        title: "卡薩洛瑪飯店 Casaloma Hotel（第2夜）",
        location: "서귀포시 서홍동 546",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/DYgb6GZWGgyZbtY37", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%B9%B4%EC%82%AC%EB%A1%9C%EB%A7%88%ED%98%B8%ED%85%94%20%EC%84%9C%EA%B7%80%ED%8F%AC", type: "naver" }
        ],
        note: "醬蟹吃完驅車回西歸浦住宿，明日清晨05:30出發去城山，建議早點休息"
      },
      {
        type: "label",
        emoji: "☂️",
        title: "雨備方案（天候不佳時）"
      },
      {
        type: "info",
        items: ["城山日出峰雨天能見度低 → 可調換至晴天"]
      },
      {
        type: "card",
        cardType: "rain",
        image: img('水族館.png'),
        title: "Jeju Aqua Planet（城山日出峰旁）",
        location: "서귀포시 성산읍 섭지코지로 95",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%95%84%EC%BF%A0%EC%95%84%ED%94%8C%EB%9D%BC%EB%84%B7%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xiquOGa4", type: "naver" }
        ],
        note: "城山旁，即時轉場、全程室內。韓國最大海洋水族館，海女表演與大型海洋生物展示為亮點。💰 成人約 33,000 韓元，🎫 線上購票約 25,000–27,000 韓元更划算"
      }
    ]
  },

  "day3": {
    id: "day3",
    title: "6/25（四）",
    subtitle: "咸德海灘 · 萬丈窟 · 遷入濟州市 · 東門市場",
    headerGradient: "from-teal-700 to-teal-600",
    emoji: "Day 3",
    sections: [
      {
        type: "label",
        emoji: "☀️",
        title: "上午｜東北海岸出發"
      },
      {
        type: "info",
        items: ["由西歸浦出發沿海岸線北上約1小時至咸德"]
      },
      {
        type: "card",
        cardType: "spot",
        image: img('咸德海灘.png'),
        title: "咸德海灘 함덕해수욕장",
        location: "제주시 조천읍 조함해안로 525",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%ED%95%A8%EB%8D%95%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xBwJypFt", type: "naver" }
        ],
        note: "濟州東北部最美海灘之一，翡翠綠透明淺水搭配白沙與背後的犀牛峰，水淺平緩適合戲水與親子同遊，旁邊就是知名海景咖啡廳。免費入場，設有免費停車場，夏日與週末建議早到佔位"
      },
      {
        type: "card",
        cardType: "food",
        image: img('Lavarr Cafe.png'),
        title: "lavarr 咖啡廳",
        location: "제주시 조천읍 함덕리（咸德海灘旁）",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/TguFr5mYiRVBHsMs7", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/lavarr%20%EC%A0%9C%EC%A3%BC", type: "naver" }
        ],
        note: "海灘旁人氣海景咖啡廳，景觀位早佔"
      },
      {
        type: "label",
        emoji: "🥯",
        title: "上午｜早餐甜點"
      },
      {
        type: "card",
        cardType: "food",
        image: img('倫敦貝果.png'),
        title: "倫敦貝果 London Bagel Museum（濟州店）",
        location: "서귀포시 서귀동 291-1",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%9F%B0%EB%8D%98%EB%B2%A0%EC%9D%B4%EA%B8%80%EB%AE%A4%EC%A7%80%EC%97%84%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/x3jFhsyC", type: "naver" }
        ],
        note: "08:00–18:00，連中無休，蒜香奶油必點，CatchTable app 提前抽號碼牌，地址在구좌읍（東部）"
      },
      {
        type: "card",
        cardType: "food",
        image: img('大蒜麵包.png'),
        title: "大蒜麵包",
        location: "서귀포시 중정로 50（近每日偶來市場）",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/mcGRyeExYyE7xAGC6", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/FIfsKrin", type: "naver" }
        ],
        note: "現烤大蒜奶油麵包，香氣濃郁，邊走邊吃最過癮"
      },
      {
        type: "label",
        emoji: "🌿",
        title: "上午中｜地底探險"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('萬丈窟.png'),
        title: "萬丈窟 만장굴",
        location: "제주시 구좌읍 만장굴길 182",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A7%8C%EC%9E%A5%EA%B5%B4", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xTTF0mnY", type: "naver" }
        ],
        note: "全球最長的熔岩洞穴之一，開放參觀約1公里，洞內可見全世界最高的熔岩石柱（約7.6公尺），列為UNESCO世界自然遺產。🕘 09:00–18:00（售票至17:00），每月第一個週三公休（建議出發前確認）。💰 成人 2,000 韓元、青少年/兒童 1,000 韓元，現場購票即可。洞內恆溫約11°C且濕滑，務必帶薄外套、穿好走防滑鞋"
      },
      {
        type: "label",
        emoji: "🍽",
        title: "12:30｜午餐"
      },
      {
        type: "info",
        items: [
          "選項A：萬丈窟附近食堂解決（구좌읍 一帶有幾家在地食堂）",
          "選項B：開往挾才方向路上吃（約40分鐘車程，市區選擇更多）"
        ]
      },
      {
        type: "label",
        emoji: "🌊",
        title: "14:00｜西部海灘（可選）"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('挾才海水浴場.png'),
        title: "挾才海水浴場 협재해수욕장",
        location: "제주시 한림읍 협재리 2497",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/Cg5UMVwhJbC4d36v5", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/5XJIlPtO", type: "naver" }
        ],
        note: "濟州西部最美白沙灘，乳白色貝殼沙與碧藍漸層海水形成絕美對比，正對外海的飛揚島（비양도），是拍照與夕陽的人氣地點。免費入場，設有停車場，下午光線最美（若時間充裕才去）"
      },
      {
        type: "label",
        emoji: "🏨",
        title: "傍晚｜遷入濟州市樂天城市酒店"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('樂天酒店.png'),
        title: "濟州市 樂天城市酒店",
        location: "제주시 연동 261-1（蓮洞）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xucpYkyQ", type: "naver" }
        ],
        note: "Check-in 放行李，今晚起步行＆計程車代步，仍有租車可開"
      },
      {
        type: "label",
        emoji: "🌙",
        title: "晚餐｜濟州市區三選一"
      },
      {
        type: "card",
        cardType: "food",
        image: img('黑豬肉一條街.png'),
        title: "黑豬肉一條街 흑돼지거리",
        location: "제주시 연동（蓮洞商圈）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%20%ED%9D%91%EB%8F%BC%EC%A7%80%EA%B1%B0%EB%A6%AC%20%EC%97%B0%EB%8F%99", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xExWB9KT", type: "naver" }
        ],
        note: "濟州必吃No.1！多家黑豬肉聚集，油脂豐厚，搭濟州米酒絕配"
      },
      {
        type: "card",
        cardType: "food",
        image: img('豬肉湯飯.png'),
        title: "豬肉湯飯 순대국밥 / 豬肉麵 돔베고기국수",
        location: "제주시 일도이동（濟州機場附近市區）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%EC%8B%9C%EC%83%88%EC%9A%B0%EB%A6%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xKERj2sz", type: "naver" }
        ],
        note: "落地後第一餐！濃郁豬骨湯底，份量紮實，機場附近多家可選"
      },
      {
        type: "label",
        emoji: "☂️",
        title: "雨備方案（天候不佳時）"
      },
      {
        type: "info",
        items: [
          "✅ 萬丈窟全室內，下雨照常去！",
          "☂️ 咸德海灘遇大雨可略過，改提早前往萬丈窟",
          "☂️ 挾才也可捨去，直接開車回市區逛蓮洞商圈"
        ]
      },
      {
        type: "card",
        cardType: "rain",
        image: img('Eco Land生態樂園.png'),
        title: "Eco Land 生態樂園 에코랜드",
        location: "제주시 조천읍 번영로 1278-169",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%97%90%EC%BD%94%EB%9E%9C%EB%93%9C%20%ED%85%8C%EB%A7%88%ED%8C%8C%ED%81%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/GMmgqDjq", type: "naver" }
        ],
        note: "以復古蒸汽小火車穿梭於곶자왈原始森林與湖泊間的主題樂園，分多站可下車漫步賞景，親子情侶皆宜，輕微小雨仍可玩、可替代海灘。💰 成人約 16,000 韓元、青少年約 13,000 韓元、兒童約 11,000 韓元。🎫 Klook、KKday 線上購票常有折扣（約 13,000–14,000 韓元）"
      },
      {
        type: "card",
        cardType: "rain",
        image: img('光之地堡.png'),
        title: "光之地堡 빛의 벙커（濟州島東邊）",
        location: "제주시 구좌읍 비자림로 2894-78",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%B9%9B%EC%9D%98%EB%B2%99%EC%BB%A4%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xcnaMIV3", type: "naver" }
        ],
        note: "利用前國家通訊密碼地下碉堡改造的沉浸式光影藝術展館，以大型投影將世界名畫鋪滿牆面與地板並配上音樂，全室內為雨天最佳選擇。💰 成人約 18,000 韓元、青少年約 13,000 韓元、兒童約 10,000 韓元。🎫 Klook、KKday 線上購票約 15,000 韓元更划算，位於東部비자림路上"
      },
      ]
  },

  "day4": {
    id: "day4",
    title: "6/26（五）",
    subtitle: "挾才海灘 · 歸還租車 · 黑豬肉",
    headerGradient: "from-teal-700 to-teal-600",
    emoji: "Day 4",
    sections: [
      {
        type: "label",
        emoji: "🏛",
        title: "09:00｜濟州牧官衙"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('濟州官衙.png'),
        title: "濟州牧官衙 제주목관아",
        location: "제주시 관덕로 25",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%EB%AA%A9%EA%B4%80%EC%95%84", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xucpi9hW", type: "naver" }
        ],
        note: "朝鮮時代濟州地方行政的官府所在，經考古復原重現觀德亭、望京樓等傳統韓式建築群，可了解濟州歷史並穿韓服拍照，位於市區交通便利。🕘 09:00–18:00（入場至17:30），連中無休。💰 成人 1,500 韓元、青少年/兒童 800 韓元，現場購票即可，距東門市場步行約5分鐘"
      },
      {
        type: "label",
        emoji: "🏮",
        title: "11:30｜午餐｜東門市場"
      },
      {
        type: "card",
        cardType: "food",
        image: img('東門市場.png'),
        title: "東門市場 동문재래시장",
        location: "제주시 관덕로14길 20",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/8hMA4jA65K2Q83XB8", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/Gald0M2Q", type: "naver" }
        ],
        note: "07:00–21:00，連中無休。夜市（夏季）19:00–24:00，橘子大福、魚餅串必吃"
      },
      {
        type: "label",
        emoji: "🛍",
        title: "14:00｜下午逛街"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('蓮洞商圈.png'),
        title: "蓮洞商圈 / Olive Young 연동",
        location: "제주시 연동",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/X8HsNmCtnfP6qE2UA", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/FIfsxK2w", type: "naver" }
        ],
        note: "濟州市區最熱鬧的購物商圈，Olive Young韓妝保養、流行服飾、美食餐廳與咖啡廳林立，是回台前採購伴手禮與藥妝的最佳地點。免費逛街，夜晚更熱鬧"
      },
      {
        type: "label",
        emoji: "🚗",
        title: "17:00｜歸還租車"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('樂天租車.png'),
        title: "樂天租車 제주공항점",
        location: "제주시 용담이동 2876（濟州機場附近）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EB%A0%8C%ED%84%B0%EC%B9%B4%20%EC%A0%9C%EC%A3%BC%EA%B3%B5%ED%95%AD%EC%A0%90", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/5oE5y0S5", type: "naver" }
        ],
        note: "⚠️ 歸還前加滿柴油（경유 Diesel）、拍照記錄車況。還車後搭接駁車或 Kakao T 返回酒店"
      },
      {
        type: "label",
        emoji: "🌙",
        title: "晚餐｜熟成道"
      },
      {
        type: "card",
        cardType: "food",
        image: img('黑豬肉一條街.png'),
        title: "熟成道 숙성도",
        location: "제주시 연동（蓮洞商圈）",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/T4VskAAv8NGL2SvR6", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/53lKwzKI", type: "naver" }
        ],
        note: "熟成黑豬肉專門店，肉質鮮嫩香氣濃郁，逛完街直接走過去"
      },
      {
        type: "label",
        emoji: "🏨",
        title: "晚上｜回樂天城市酒店"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('樂天酒店.png'),
        title: "濟州市 樂天城市酒店",
        location: "제주시 연동 261-1（蓮洞）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xucpYkyQ", type: "naver" }
        ],
        note: "黑豬肉一條街步行回酒店，明日 07:30 退房，建議打包行李、確認遺留物"
      },
      {
        type: "label",
        emoji: "☂️",
        title: "雨備方案（天候不佳時）"
      },
      {
        type: "info",
        items: ["濟州牧官衙若遇整修可改龍頭岩（免費，步行可達）"]
      },
      {
        type: "card",
        cardType: "rain",
        image: img('蓮洞商圈.png'),
        title: "蓮洞商圈 / Olive Young",
        location: "제주시 연동",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/X8HsNmCtnfP6qE2UA", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/FIfsxK2w", type: "naver" }
        ],
        note: "雨天室內購物，回台前補貨"
      },
      {
        type: "card",
        cardType: "rain",
        image: img('亂打秀.png'),
        title: "NANTA 亂打秀",
        location: "제주시 연동（蓮洞附近）",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/m9ws6riMCodtdu7a8", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/x1VvFJCI", type: "naver" }
        ],
        note: "韓國最具代表性的無對白默劇，以廚房鍋碗瓢盆敲打出節奏感十足的打擊樂，融合特技與觀眾互動，不需懂韓語也能盡情享受，全室內適合雨天。💰 票價約 40,000–60,000 韓元（依座位分區）。🎫 Klook、KKday 或官網線上預購較便宜且保留座位，建議提前訂票"
      }
    ]
  },

  "day5": {
    id: "day5",
    title: "6/27（六）",
    subtitle: "早班機返台（無景點）",
    headerGradient: "from-teal-700 to-teal-600",
    emoji: "Day 5",
    sections: [
      {
        type: "info",
        items: [
          "⚠️ 注意：10:30 早班機 → 08:30 須抵達機場 → 07:30 退房。Day5 不安排景點，全程退房→機場→候機→返台。"
        ]
      },
      {
        type: "label",
        emoji: "🏨",
        title: "07:30｜辦理退房"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('樂天酒店.png'),
        title: "濟州市 樂天城市酒店 退房",
        location: "제주시 연동 261-1（蓮洞）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/xucpYkyQ", type: "naver" }
        ],
        note: "07:30 辦理退房 Check-out，搭免費接駁車前往濟州機場（約15分鐘），退房前確認行李無遺漏"
      },
      {
        type: "label",
        emoji: "🛍",
        title: "07:00｜退房前最後採買"
      },
      {
        type: "card",
        cardType: "food",
        image: img('東門市場.png'),
        title: "東門市場 / 酒店附近便利商店",
        location: "제주시 관덕로14길 20",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/8hMA4jA65K2Q83XB8", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/Gald0M2Q", type: "naver" }
        ],
        note: "橘子大福、柑橘巧克力、海苔，帶回台灣分享"
      },
      {
        type: "label",
        emoji: "✈️",
        title: "07:30｜退房 & 前往機場"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
        title: "濟州國際機場 제주국제공항",
        location: "제주시 공항로 2",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%EA%B5%AD%EC%A0%9C%EA%B3%B5%ED%95%AD", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EA%B5%AD%EC%A0%9C%EA%B3%B5%ED%95%AD", type: "naver" }
        ],
        note: "酒店接駁車→報到托運→安檢→10:30 IT655起飛→11:35桃園抵達"
      }
    ]
  },

  "day6": {
    id: "day6",
    title: "6/27（六）提醒",
    subtitle: "虎航 IT655　濟州 10:30 → 桃園 11:35",
    headerGradient: "from-blue-900 to-blue-600",
    emoji: "✈️",
    sections: [
      {
        type: "label",
        emoji: "⏰",
        title: "回程當天時間表"
      },
      {
        type: "timeline",
        items: [
          { time: "07:00", desc: "起床整理行李，確認無遺漏" },
          { time: "07:30", desc: "樂天城市酒店辦理退房 Check-out" },
          { time: "07:45", desc: "搭飯店免費接駁車 → 濟州機場（約15分鐘）" },
          { time: "08:30", desc: "抵達機場，辦理報到、托運行李" },
          { time: "09:00", desc: "通關安檢 → 前往候機室" },
          { time: "09:30", desc: "候機室逛免稅店、吃早餐" },
          { time: "10:30", desc: "✈️ IT655 起飛！", highlight: true },
          { time: "11:35", desc: "桃園 T2 落地，提領行李，回家 🏠" }
        ]
      },
      {
        type: "label",
        emoji: "🛍",
        title: "最後採買清單"
      },
      {
        type: "info",
        items: [
          "漢拏峰橘子大福 — 東門市場或機場免稅店必買",
          "濟州柑橘巧克力 / 橘子餅乾 — 最受歡迎伴手禮",
          "濟州海苔 재래김 — 真空包裝好帶，超市有售",
          "漢拏山燒酒 한라산 소주 — 濟州限定，超市 / 便利商店",
          "Olive Young 保養品 — 蓮洞店 Day4 晚最後補貨"
        ]
      },
      {
        type: "label",
        emoji: "📦",
        title: "行李注意事項"
      },
      {
        type: "info",
        items: [
          "租車已於 6/26 晚歸還，確認車上無遺忘物品",
          "生鮮食品（水果、肉類、蔬菜）不可攜帶入台",
          "泡菜密封完整可帶（建議真空包裝）",
          "液體 / 乳霜超 100ml 須托運，隨身不可帶上機",
          "多餘韓元可在機場換回，或留著下次用",
          "機場免稅店預購商品記得提貨"
        ]
      }
    ]
  },

  "day0": {
    id: "day0",
    title: "額外推薦",
    subtitle: "可選加入行程的景點、美食、購物",
    headerGradient: "from-red-600 to-red-500",
    emoji: "✦",
    sections: [
      {
        type: "label",
        emoji: "🏝",
        title: "景點推薦"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('牛島.png'),
        title: "牛島 우도",
        location: "서귀포시 성산읍 성산리（城山港搭船）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%B1%EC%82%B0%ED%95%AD%20%EC%A2%85%ED%95%A9%EC%97%AC%EA%B0%9D%ED%84%B0%EB%AF%B8%EB%84%90", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%B1%EC%82%B0%ED%95%AD%20%EC%A2%85%ED%95%A9%EC%97%AC%EA%B0%9D%ED%84%B0%EB%AF%B8%EB%84%90", type: "naver" }
        ],
        note: "🌟強烈推薦！搭船從城山港出發僅約10分鐘的離島，花生田、白沙灘與燈塔風光療癒，花生冰淇淋必嚐，租電動車環島最愜意。💰 來回渡輪票成人約 10,500 韓元（含環境費），電動車租借約 3–4 萬韓元起。🎫 渡輪現場購票需帶護照登記，可接Day2城山後半天，建議2–3小時"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('月汀里海邊.png'),
        title: "月汀里海邊 월정리해변",
        location: "제주시 구좌읍 월정리",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%9B%94%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%80", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/G1wS0VUO", type: "naver" }
        ],
        note: "IG打卡名所！沿岸排列彩色咖啡椅，搭配淺藍漸層海水與遠方風車，畫面清新夢幻，傍晚與夕陽時最美，海岸咖啡廳林立。免費入場，可順遊加入Day3咸德、萬丈窟東部路線"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('龍頭岩.png'),
        title: "龍頭岩 용두암",
        location: "제주시 용담이동 2897",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%9A%A9%EB%91%90%EC%95%94", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/IDFUMguf", type: "naver" }
        ],
        note: "由海岸熔岩經海浪與風長年侵蝕形成的奇岩，外型宛如昂首向天的龍頭，是濟州市區著名地標，夜間打燈別具氛圍。免費參觀，距濟州市區與機場近，適合Day4還車後快速順遊"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('漢努山.png'),
        title: "漢拏山 한라산",
        location: "제주시 1100로 2070-61（성판악登山口）",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/UkrP1tcvGXrqkFX4A", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/GG7tHhe5", type: "naver" }
        ],
        note: "韓國最高峰（海拔1,947公尺），列為UNESCO世界自然遺產，山頂白鹿潭火口湖景色壯麗。성판악、관음사等主要登山路線往返需5–9小時。攻頂路線須事先於官網預約（免費入山），需備足體力、糧食與裝備，體力充裕者可考慮清晨安排"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('史奴比庭園.png'),
        title: "史努比庭園 스누피가든",
        location: "제주시 구좌읍 금백조로 930",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%8A%A4%EB%88%84%ED%94%BC%EA%B0%80%EB%93%A0%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/502MzmiO", type: "naver" }
        ],
        note: "以《花生漫畫》史努比為主題的大型庭園，分為室內展館與戶外五大主題花園，造景可愛、處處是打卡點，親子情侶皆宜。💰 成人約 18,000 韓元、青少年約 15,000 韓元、兒童約 12,000 韓元。🎫 Klook、KKday 線上購票約 15,000 韓元更划算，可排入Day3東部路線"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('Eco Land生態樂園.png'),
        title: "Eco Land 生態樂園 에코랜드",
        location: "제주시 조천읍 번영로 1278-169",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%97%90%EC%BD%94%EB%9E%9C%EB%93%9C%20%ED%85%8C%EB%A7%88%ED%8C%8C%ED%81%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/GMmgqDjq", type: "naver" }
        ],
        note: "以復古蒸汽小火車穿梭곶자왈原始森林與湖泊間的主題樂園，分多站可下車漫步賞景，親子情侶皆宜。💰 成人約 16,000 韓元、青少年約 13,000 韓元、兒童約 11,000 韓元。🎫 Klook、KKday 線上購票常有折扣（約 13,000–14,000 韓元），可排入Day3咸德路線附近"
      },
      {
        type: "card",
        cardType: "food",
        image: img('色達時常.png'),
        title: "穡達食堂 색달식당（白帶魚料理）",
        location: "서귀포시 예래로 255-18",
        links: [
          { text: "🗺 Google Maps", href: "https://maps.app.goo.gl/MYSQSKJ7a5qqQkDa7", type: "google" },
          { text: "🟢 Naver Map", href: "https://naver.me/FRLNpN7u", type: "naver" }
        ],
        note: "濟州特產白帶魚名店，紅燒清蒸都鮮美，位於中文觀光區附近"
      }
    ]
  }
}
