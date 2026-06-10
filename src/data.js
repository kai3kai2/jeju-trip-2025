const base = import.meta.env?.BASE_URL ?? '/'
const img = (file) => `${base}imgs/${file}`

export const tripInfo = {
  title: "🏝 濟州島 5天4夜自駕遊",
  subtitle: "2026年 6/23（二）出發 ～ 6/27（六）返台　✦　樂天租車4天",
  chips: [
    { icon: "✈️", label: "去程", value: "IT278 桃園06:40→濟州09:35" },
    { icon: "✈️", label: "回程", value: "IT279 濟州10:30→桃園11:35" },
    { icon: "🚗", label: "租車", value: "樂天租車 6/23取 6/26晚還" },
    { icon: "🏨", label: "住宿", value: "西歸浦2夜 / 樂天城市2夜" },
  ]
}

export const tabs = [
  { id: "day-1", label: "去程", date: "搭機", desc: "提醒", color: "blue" },
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
    subtitle: "虎航 IT278　桃園 06:40 → 濟州 09:35",
    headerGradient: "from-blue-900 to-blue-600",
    emoji: "✈️",
    sections: [
      {
        type: "flight",
        airline: "🛫 虎航 Tigerair IT278",
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
          { time: "06:40", desc: "✈️ IT278 起飛！", highlight: true },
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
        type: "label",
        emoji: "🍜",
        title: "11:00｜午餐｜豬肉湯麵"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
        title: "豬肉湯飯 순대국밥 / 豬肉麵 돔베고기국수",
        location: "제주시 일도이동（濟州機場附近市區）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%EC%8B%9C%EC%83%88%EC%9A%B0%EB%A6%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EC%88%9C%EB%8C%80%EA%B5%AD%EB%B0%A5", type: "naver" }
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
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        title: "玩具模型博物館 박물관은살아있다",
        location: "제주시 구좌읍 비자림로 2134-47",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%B0%95%EB%AC%BC%EA%B4%80%EC%9D%80%EC%82%B4%EC%95%84%EC%9E%88%EB%8B%A4%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%B0%95%EB%AC%BC%EA%B4%80%EC%9D%80%EC%82%B4%EC%95%84%EC%9E%88%EB%8B%A4%20%EC%A0%9C%EC%A3%BC", type: "naver" }
        ],
        note: "精緻仿真場景超有趣，各年齡層皆宜，票約15,000韓元，在南下路上順道進去"
      },
      {
        type: "label",
        emoji: "🌋",
        title: "15:30｜西歸浦景點"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('jusang.jpg'),
        title: "柱狀節理帶 주상절리대",
        location: "서귀포시 이어도로 36-30",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A3%BC%EC%83%81%EC%A0%88%EB%A6%AC%EB%8C%80", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A3%BC%EC%83%81%EC%A0%88%EB%A6%AC%EB%8C%80", type: "naver" }
        ],
        note: "玄武岩六角柱懸崖奇景，09:00–18:00（入場 17:40），票 2,000 韓元，連中無休"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('jungbang.jpg'),
        title: "正房瀑布 정방폭포",
        location: "서귀포시 칠십리로214번길 37",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%95%EB%B0%A9%ED%8F%AD%ED%8F%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A0%95%EB%B0%A9%ED%8F%AD%ED%8F%AC", type: "naver" }
        ],
        note: "亞洲唯一入海瀑布，09:00–18:00，票 2,000 韓元，連中無休，下坡步道約10分鐘"
      },
      {
        type: "label",
        emoji: "☕",
        title: "17:30｜橘子咖啡廳"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80",
        title: "橘子咖啡館",
        location: "서귀포시 서귀동（西歸浦市區）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%20%EA%B0%90%EA%B7%A4%20%EC%B9%B4%ED%8E%98", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%9C%EA%B7%80%ED%8F%AC%20%EA%B0%90%EA%B7%A4%20%EC%B9%B4%ED%8E%98", type: "naver" }
        ],
        note: "濟州特產柑橘主題，柚子茶＆橘子拿鐵必點，景點後甜蜜收尾"
      },
      {
        type: "label",
        emoji: "🏨",
        title: "18:00｜入住西歸浦住宿"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        title: "西歸浦住宿（前2夜）",
        location: "서귀포시 서귀동 일대",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EA%B7%80%ED%8F%AC%20%EC%9D%B4%EC%A4%91%EC%84%AD%EA%B1%B0%EB%A6%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%9C%EA%B7%80%ED%8F%AC%20%EC%9D%B4%EC%A4%91%EC%84%AD%EA%B1%B0%EB%A6%AC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=서귀포시+서귀동+숙소", type: "tmap" }
        ],
        note: "Booking.com 預訂，Check-in後步行約10分鐘至每日偶來市場"
      },
      {
        type: "label",
        emoji: "🌙",
        title: "19:00｜晚餐｜每日偶來市場"
      },
      {
        type: "card",
        cardType: "food",
        image: img('olle_mkt.jpg'),
        title: "西歸浦每日偶來市場 매일올레시장",
        location: "서귀포시 서귀동 340",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EA%B7%80%ED%8F%AC%EB%A7%A4%EC%9D%BC%EC%98%AC%EB%A0%88%EC%8B%9C%EC%9E%A5", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%A7%A4%EC%9D%BC%EC%98%AC%EB%A0%88%EC%8B%9C%EC%9E%A5", type: "naver" }
        ],
        note: "08:00–21:00，連中無休，必吃秋刀魚飯捲、蒜味炸雞，晚上氣氛最熱鬧"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
        title: "道排骨 도오갈비",
        location: "서귀포시 일주동로 8749-1",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%20%ED%9D%91%EB%8F%BC%EC%A7%80%EA%B1%B0%EB%A6%AC%20%EC%97%B0%EB%8F%99", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%8F%84%EC%98%A4%EA%B0%88%EB%B9%84", type: "naver" }
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
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        title: "Jeju Aqua Planet 水族館",
        location: "서귀포시 성산읍 섭지코지로 95",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%95%84%EC%BF%A0%EC%95%84%ED%94%8C%EB%9D%BC%EB%84%B7%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%95%84%EC%BF%A0%EC%95%84%ED%94%8C%EB%9D%BC%EB%84%B7%20%EC%A0%9C%EC%A3%BC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=아쿠아플라넷+제주", type: "tmap" }
        ],
        note: "韓國最大水族館，全天室內，票約33,000韓元"
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
        image: img('seongsan.jpg'),
        title: "城山日出峰 성산일출봉",
        location: "서귀포시 성산읍 일출로 284-12",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%B1%EC%82%B0%EC%9D%BC%EC%B6%9C%EB%B4%89", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%B1%EC%82%B0%EC%9D%BC%EC%B6%9C%EB%B4%89", type: "naver" }
        ],
        note: "UNESCO世遺！夏季 05:30–20:00（含日出前），票 5,000 韓元，連中無休，山頂俯瞰絕佳，下山後停車場有烤魚糕攤"
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
        image: img('seopjikoji.jpg'),
        title: "涉地可支 섭지코지",
        location: "서귀포시 성산읍 섭지코지로 107",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%AD%EC%A7%80%EC%BD%94%EC%A7%80", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%AD%EC%A7%80%EC%BD%94%EC%A7%80", type: "naver" }
        ],
        note: "韓劇《我叫金三順》取景地，燈塔+懸崖+草地，開車入場免費，繞一圈約40分鐘"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80",
        title: "Cafe Mou Moon 카페 무문",
        location: "서귀포시 성산읍 섭지코지로 84",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%B9%B4%ED%8E%98%20%EB%AC%B4%EB%AC%B8%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%EB%AC%B4%EB%AC%B8", type: "naver" }
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
        image: img('abalone.jpg'),
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
        image: img('udo.jpg'),
        title: "牛島 우도（城山港出發）",
        location: "서귀포시 성산읍 성산리（城山港搭船）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%B1%EC%82%B0%ED%95%AD%20%EC%A2%85%ED%95%A9%EC%97%AC%EA%B0%9D%ED%84%B0%EB%AF%B8%EB%84%90", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%B1%EC%82%B0%ED%95%AD%20%EC%A2%85%ED%95%A9%EC%97%AC%EA%B0%9D%ED%84%B0%EB%AF%B8%EB%84%90", type: "naver" }
        ],
        note: "城山港搭船約10分鐘！花生冰淇淋超有名，電動車環島超療癒，建議安排2-3小時"
      },
      {
        type: "label",
        emoji: "🌙",
        title: "晚上｜醬蟹晚餐"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
        title: "醬蟹 간장게장（성산읍 인근）",
        location: "서귀포시 성산읍 일대（城山 附近）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%20%EA%B0%84%EC%9E%A5%EA%B2%8C%EC%9E%A5", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%B1%EC%82%B0%20%EA%B0%84%EC%9E%A5%EA%B2%8C%EC%9E%A5", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=성산항+여객터미널", type: "tmap" }
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
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
        title: "西歸浦住宿（第2夜）",
        location: "서귀포시 서귀동 일대",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EA%B7%80%ED%8F%AC%20%EC%9D%B4%EC%A4%91%EC%84%AD%EA%B1%B0%EB%A6%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%9C%EA%B7%80%ED%8F%AC%20%EC%9D%B4%EC%A4%91%EC%84%AD%EA%B1%B0%EB%A6%AC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=서귀포시+서귀동+숙소", type: "tmap" }
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
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        title: "Jeju Aqua Planet（城山日出峰旁）",
        location: "서귀포시 성산읍 섭지코지로 95",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%95%84%EC%BF%A0%EC%95%84%ED%94%8C%EB%9D%BC%EB%84%B7%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%95%84%EC%BF%A0%EC%95%84%ED%94%8C%EB%9D%BC%EB%84%B7%20%EC%A0%9C%EC%A3%BC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=아쿠아플라넷+제주", type: "tmap" }
        ],
        note: "城山旁，即時轉場，全天室內"
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
        image: img('hamdeok.jpg'),
        title: "咸德海灘 함덕해수욕장",
        location: "제주시 조천읍 조함해안로 525",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%ED%95%A8%EB%8D%95%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%ED%95%A8%EB%8D%95%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5", type: "naver" }
        ],
        note: "翡翠色透明淺水，夏日戲水首選，有停車場，週末建議早到"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
        title: "lavarr 咖啡廳",
        location: "제주시 조천읍 함덕리（咸德海灘旁）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%9D%BC%EB%B0%94%EB%A5%B4%20%ED%95%A8%EB%8D%95", type: "google" },
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
        image: img('bagel.jpg'),
        title: "倫敦貝果 London Bagel Museum（濟州店）",
        location: "서귀포시 서귀동 291-1",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%9F%B0%EB%8D%98%EB%B2%A0%EC%9D%B4%EA%B8%80%EB%AE%A4%EC%A7%80%EC%97%84%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%9F%B0%EB%8D%98%EB%B2%A0%EC%9D%B4%EA%B8%80%EB%AE%A4%EC%A7%80%EC%97%84%20%EC%A0%9C%EC%A3%BC", type: "naver" }
        ],
        note: "08:00–18:00，連中無休，蒜香奶油必點，CatchTable app 提前抽號碼牌，地址在구좌읍（東部）"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
        title: "大蒜麵包",
        location: "서귀포시 중정로 50（近每日偶來市場）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EA%B7%80%ED%8F%AC%20%EB%A7%88%EB%8A%98%EB%B9%B5", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%9C%EA%B7%80%ED%8F%AC%20%EB%A7%88%EB%8A%98%EB%B9%B5", type: "naver" }
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
        image: img('manjanggul.jpg'),
        title: "萬丈窟 만장굴",
        location: "제주시 구좌읍 만장굴길 182",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A7%8C%EC%9E%A5%EA%B5%B4", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%A7%8C%EC%9E%A5%EA%B5%B4", type: "naver" }
        ],
        note: "全球最長熔岩洞穴之一，09:00–18:00（售票至17:00），恆溫11°C，帶薄外套，票 2,000 韓元"
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
        image: img('hyeopjae.jpg'),
        title: "挾才海水浴場 협재해수욕장",
        location: "제주시 한림읍 협재리 2497",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%ED%98%91%EC%9E%AC%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%ED%98%91%EC%9E%AC%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5", type: "naver" }
        ],
        note: "濟州最美白沙灘！碧藍清澈，可遠眺飛揚島，下午光線最美（若時間充裕才去）"
      },
      {
        type: "label",
        emoji: "🏨",
        title: "傍晚｜遷入濟州市樂天城市酒店"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
        title: "濟州市 樂天城市酒店",
        location: "제주시 연동 261-1（蓮洞）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=롯데시티호텔+제주", type: "tmap" }
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
        image: img('blackpork.jpg'),
        title: "黑豬肉一條街 흑돼지거리",
        location: "제주시 연동（蓮洞商圈）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%20%ED%9D%91%EB%8F%BC%EC%A7%80%EA%B1%B0%EB%A6%AC%20%EC%97%B0%EB%8F%99", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%ED%9D%91%EB%8F%BC%EC%A7%80%EA%B1%B0%EB%A6%AC%20%EC%97%B0%EB%8F%99", type: "naver" }
        ],
        note: "濟州必吃No.1！多家黑豬肉聚集，油脂豐厚，搭濟州米酒絕配"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
        title: "白帶魚料理 갈치조림（色達食堂）",
        location: "서귀포시 예래로 255-18",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%83%89%EB%8B%AC%EC%8B%9D%EB%8B%B9%20%EC%A4%91%EB%AC%B8", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%83%89%EB%8B%AC%EC%8B%9D%EB%8B%B9%20%EC%A4%91%EB%AC%B8", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=색달식당+제주+중문", type: "tmap" }
        ],
        note: "濟州特產白帶魚，紅燒清蒸都鮮美，市區多家可選"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
        title: "炸醬麵 짜장면（韓式中華料理）",
        location: "제주시 연동 일대（蓮洞周邊）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%EC%8B%9C%EC%83%88%EC%9A%B0%EB%A6%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EC%A7%9C%EC%9E%A5%EB%A9%B4", type: "naver" }
        ],
        note: "韓式炸醬麵口感獨特，搭配炒碼麵更過癮，輕鬆晚餐好選擇"
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
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        title: "Eco Land 生態樂園 에코랜드",
        location: "제주시 조천읍 번영로 1278-169",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%97%90%EC%BD%94%EB%9E%9C%EB%93%9C%20%ED%85%8C%EB%A7%88%ED%8C%8C%ED%81%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%97%90%EC%BD%94%EB%9E%9C%EB%93%9C%20%ED%85%8C%EB%A7%88%ED%8C%8C%ED%81%AC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=에코랜드+테마파크+제주", type: "tmap" }
        ],
        note: "蒸汽小火車穿梭森林，輕微小雨仍可玩，替代海灘"
      }
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Jeju_Mokgwana.jpg/800px-Jeju_Mokgwana.jpg",
        title: "濟州牧官衙 제주목관아",
        location: "제주시 관덕로 25",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%EB%AA%A9%EA%B4%80%EC%95%84", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%AA%A9%EA%B4%80%EC%95%84", type: "naver" }
        ],
        note: "朝鮮時代地方官府，09:00–18:00（入場 17:30），票 1,500 韓元，連中無休，距東門市場步行5分鐘"
      },
      {
        type: "label",
        emoji: "🏮",
        title: "11:30｜午餐｜東門市場"
      },
      {
        type: "card",
        cardType: "food",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Dongmun_Market_Jeju.jpg/800px-Dongmun_Market_Jeju.jpg",
        title: "東門市場 동문재래시장",
        location: "제주시 관덕로14길 20",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%8F%99%EB%AC%B8%EC%9E%AC%EB%9E%98%EC%8B%9C%EC%9E%A5", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%8F%99%EB%AC%B8%EC%8B%9C%EC%9E%A5", type: "naver" }
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
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        title: "蓮洞商圈 / Olive Young 연동",
        location: "제주시 연동",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81%20%EC%A0%9C%EC%A3%BC%EC%97%B0%EB%8F%99", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81%20%EC%A0%9C%EC%A3%BC%EC%97%B0%EB%8F%99", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=올리브영+제주+연동", type: "tmap" }
        ],
        note: "Olive Young 韓妝保養、服飾店集中，回台前採購伴手禮最佳時機"
      },
      {
        type: "label",
        emoji: "🚗",
        title: "17:00｜歸還租車"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
        title: "樂天租車 제주공항점",
        location: "제주시 용담이동 2876（濟州機場附近）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EB%A0%8C%ED%84%B0%EC%B9%B4%20%EC%A0%9C%EC%A3%BC%EA%B3%B5%ED%95%AD%EC%A0%90", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EB%A0%8C%ED%84%B0%EC%B9%B4%20%EC%A0%9C%EC%A3%BC%EA%B3%B5%ED%95%AD%EC%A0%90", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=롯데렌터카+제주공항점", type: "tmap" }
        ],
        note: "⚠️ 歸還前加滿柴油（경유 Diesel）、拍照記錄車況。還車後搭接駁車或 Kakao T 返回酒店"
      },
      {
        type: "label",
        emoji: "🌙",
        title: "晚餐｜黑豬肉"
      },
      {
        type: "card",
        cardType: "food",
        image: img('blackpork.jpg'),
        title: "黑豬肉一條街 흑돼지거리",
        location: "제주시 연동（蓮洞商圈）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%20%ED%9D%91%EB%8F%BC%EC%A7%80%EA%B1%B0%EB%A6%AC%20%EC%97%B0%EB%8F%99", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%ED%9D%91%EB%8F%BC%EC%A7%80%EA%B1%B0%EB%A6%AC%20%EC%97%B0%EB%8F%99", type: "naver" }
        ],
        note: "今晚主角！若Day3已吃過可換白帶魚或炸醬麵，逛完街直接走過去"
      },
      {
        type: "label",
        emoji: "🏨",
        title: "晚上｜回樂天城市酒店"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
        title: "濟州市 樂天城市酒店",
        location: "제주시 연동 261-1（蓮洞）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=롯데시티호텔+제주", type: "tmap" }
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
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        title: "蓮洞商圈 / Olive Young",
        location: "제주시 연동",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81%20%EC%A0%9C%EC%A3%BC%EC%97%B0%EB%8F%99", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81%20%EC%A0%9C%EC%A3%BC%EC%97%B0%EB%8F%99", type: "naver" }
        ],
        note: "雨天室內購物，回台前補貨"
      },
      {
        type: "card",
        cardType: "rain",
        image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?w=800&q=80",
        title: "NANTA 亂打秀",
        location: "제주시 연동（蓮洞附近）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%EB%82%9C%ED%83%80%ED%98%B8%ED%85%94", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%82%9C%ED%83%80%ED%98%B8%ED%85%94", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=난타+공연+제주", type: "tmap" }
        ],
        note: "廚房打擊秀，不需韓語，需提前網路預購票"
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
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
        title: "濟州市 樂天城市酒店 退房",
        location: "제주시 연동 261-1（蓮洞）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EC%A0%9C%EC%A3%BC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=롯데시티호텔+제주", type: "tmap" }
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
        image: "https://images.unsplash.com/photo-1526887520775-4b14b8aed897?w=800&q=80",
        title: "東門市場 / 酒店附近便利商店",
        location: "제주시 관덕로14길 20",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EB%8F%99%EB%AC%B8%EC%9E%AC%EB%9E%98%EC%8B%9C%EC%9E%A5", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EB%8F%99%EB%AC%B8%EC%8B%9C%EC%9E%A5", type: "naver" }
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
        note: "酒店接駁車→報到托運→安檢→10:30 IT279起飛→11:35桃園抵達"
      }
    ]
  },

  "day6": {
    id: "day6",
    title: "6/27（六）提醒",
    subtitle: "虎航 IT279　濟州 10:30 → 桃園 11:35",
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
          { time: "10:30", desc: "✈️ IT279 起飛！", highlight: true },
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
        image: img('udo.jpg'),
        title: "牛島 우도",
        location: "서귀포시 성산읍 성산리（城山港搭船）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%84%B1%EC%82%B0%ED%95%AD%20%EC%A2%85%ED%95%A9%EC%97%AC%EA%B0%9D%ED%84%B0%EB%AF%B8%EB%84%90", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%84%B1%EC%82%B0%ED%95%AD%20%EC%A2%85%ED%95%A9%EC%97%AC%EA%B0%9D%ED%84%B0%EB%AF%B8%EB%84%90", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=성산항+여객터미널", type: "tmap" }
        ],
        note: "🌟強烈推薦！城山港搭船10分鐘，花生冰淇淋超有名，租電動車環島，可接Day2城山後半天"
      },
      {
        type: "card",
        cardType: "spot",
        image: img('woljeong.jpg'),
        title: "月汀里海邊 월정리해변",
        location: "제주시 구좌읍 월정리",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%9B%94%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%80", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%9B%94%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%80", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=월정리해변", type: "tmap" }
        ],
        note: "IG打卡必訪！彩色椅子＋淺藍海水，傍晚最美，可加入Day3咸德路線"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Yongduam_Rock_Jeju.jpg/800px-Yongduam_Rock_Jeju.jpg",
        title: "龍頭岩 용두암",
        location: "제주시 용담이동 2897",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%9A%A9%EB%91%90%EC%95%94", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%9A%A9%EB%91%90%EC%95%94", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=용두암+제주", type: "tmap" }
        ],
        note: "免費！玄武岩奇石形似龍頭，濟州市區步行可達，適合Day4還車後快速參觀"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Hallasan_summit.jpg/800px-Hallasan_summit.jpg",
        title: "漢拏山 한라산",
        location: "제주시 1100로 2070-61（성판악登山口）",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%ED%95%9C%EB%9D%BC%EC%82%B0%20%EC%84%B1%ED%8C%90%EC%95%85%ED%83%90%EB%B0%A9%EB%A1%9C", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%ED%95%9C%EB%9D%BC%EC%82%B0%20%EC%84%B1%ED%8C%90%EC%95%85%ED%83%90%EB%B0%A9%EB%A1%9C", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=한라산+성판악+탐방로", type: "tmap" }
        ],
        note: "韓國最高峰，需官網預約，全程5-9小時，體力充裕者可考慮Day3清晨安排"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80",
        title: "史努比庭園 스누피가든",
        location: "제주시 구좌읍 금백조로 930",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%8A%A4%EB%88%84%ED%94%BC%EA%B0%80%EB%93%A0%20%EC%A0%9C%EC%A3%BC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%8A%A4%EB%88%84%ED%94%BC%EA%B0%80%EB%93%A0%20%EC%A0%9C%EC%A3%BC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=스누피가든+제주", type: "tmap" }
        ],
        note: "超可愛史努比主題公園，打卡超出片，可排入Day3東部路線"
      },
      {
        type: "card",
        cardType: "spot",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        title: "Eco Land 生態樂園 에코랜드",
        location: "제주시 조천읍 번영로 1278-169",
        links: [
          { text: "🗺 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%EC%97%90%EC%BD%94%EB%9E%9C%EB%93%9C%20%ED%85%8C%EB%A7%88%ED%8C%8C%ED%81%AC", type: "google" },
          { text: "🟢 Naver Map", href: "https://map.naver.com/p/search/%EC%97%90%EC%BD%94%EB%9E%9C%EB%93%9C%20%ED%85%8C%EB%A7%88%ED%8C%8C%ED%81%AC", type: "naver" },
          { text: "🚗 T-map", href: "https://tmap.life/search?keyword=에코랜드+테마파크+제주", type: "tmap" }
        ],
        note: "復古蒸汽小火車穿梭森林湖泊，親子情侶皆宜，可排入Day3咸德路線附近"
      }
    ]
  }
}
