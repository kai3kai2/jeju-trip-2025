# 🏝 Jeju Trip 2026

## [📱 點此開啟行程表](https://kai3kai2.github.io/jeju-trip-2025/)

濟州島5天4夜自駕行程，含景點、餐廳、雨備方案及地圖連結。

## 🚀 技術棧

- **框架**: React 18 + Vite
- **樣式**: Tailwind CSS (響應式設計)
- **佈局**: 移動優先 (Mobile-first) RWD

## 💻 開發設定

### 安裝依賴

```bash
npm install
```

### 開發伺服器

```bash
npm run dev
```

開啟 http://localhost:5173

### 構建生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 📱 響應式設計

該應用程式採用行動優先的設計方法，在以下裝置上均有最佳體驗：

- 📱 手機 (320px+)
- 📱 平板 (640px+)
- 💻 桌機 (1024px+)

## 📁 項目結構

```
src/
├── components/        # React 元件
│   ├── Header.jsx
│   ├── Navigation.jsx
│   ├── DayContent.jsx
│   ├── SectionLabel.jsx
│   ├── InfoBullets.jsx
│   ├── Card.jsx
│   └── Footer.jsx
├── App.jsx           # 主應用
├── main.jsx          # 進入點
├── index.css         # Tailwind CSS
└── data.js           # 行程資料

vite.config.js        # Vite 設定
tailwind.config.js    # Tailwind 設定
postcss.config.js     # PostCSS 設定
```

## 🎨 自訂顏色

在 `tailwind.config.js` 中編輯主題顏色。
