# 交付說明 — AI Agent in ChatGPT Product Page Prototype v1

日期：2026-08-27
來源 Figma：`duL1igHfF3c1RGEAcCqDnH`（YCO_Content（Product Pages）），node `10313:26644`
依循規則：`system/YCO_product page_DESIGN-RULES.md`、`system/YCO_product page_SECTIONS.md`、`system/PROTOTYPE-CREATION-WORKFLOW.md`

## 這次涵蓋範圍

整頁：Header → Topbanner（左圖右文）→ Connect to AI Tools（3欄卡片）→ One AI Agent Three Creative Modes（3欄卡片）→ Zig-zag圖文交錯 ×3 → Explore what you can do（6項圖示特色列表）→ Start Creating CTA → FAQ（5則手風琴）→ Footer。
三個斷點皆已實作：Desktop（>1024px）／Tablet（769–1024px）／Mobile（≤768px）。

## ⚠️ 素材串接進度（2026-09-01 更新）

已從 `assets/Final` 資料夾把提供的圖片／影片串進頁面（存放在 `assets/media/`）：

1. **Topbanner** → `topbanner.mp4`（YouCam Online Editor 示範影片）✅
2. **Connect to AI Tools 三張圖示** → `tool-chatgpt.png` / `tool-claude.png` / `tool-gemini.png` ✅
3. **One AI Agent 三張示意影片** → `mode-photo-editing.mp4`（Chat Your Way to Pro Edits）／`mode-visual-creation.mp4`（You Decide the Concept）／`mode-beauty-fashion.mp4`（Explore your Next Look） ✅
4. **Zig-zag 第1組**（Make several edits in one conversation）→ `zigzag-01.mp4`（採用檔名 `3_3` 較新版本；`3_2` 舊版未使用，原檔還留在 `assets/Final`） ✅
5. **Explore 特色列表 6 個小圖示** → 5/6 已串接（`feature-explore-beauty-fashion.png`／`feature-enhance-image-quality.png`／`feature-combine-multiple-photos.png`／`feature-create-designs-scenes.png`／`feature-handle-several-requests.png`）

### 仍是虛線佔位框，需要補件

- **Zig-zag 第2組**（Refine results with follow-up chats）— `Final` 資料夾裡沒有對應圖／影片
- **Zig-zag 第3組**（Create beyond conventional photo editing）— `Final` 資料夾裡沒有對應圖／影片
- **Explore 特色列表「Edit Photos through Chat」小圖示** — `Final/Edit Photos through Chat.png` 檔案存在但整張空白（1552 bytes，無實際內容），需要重新提供

FAQ 手風琴用的箭頭圖示（`assets/page/icon_down.svg`）是我另外畫的簡化版本，不是 Figma 原始檔案，如果有正式圖示檔案也可以換上。

## 本次依循的規則來源

- 按鈕高度 42px、字重 500、藥丸圓角，「CONNECT IN CHATGPT」這類底線文字連結樣式沿用 DESIGN-RULES 章節5.1
- 3欄卡片（Connect to AI Tools、One AI Agent）目前 `SECTIONS.md` 沒有收錄過這個元件，我依 Figma 標註的 padding/圓角/字級直接還原，之後如果這個卡片元件之後會重複用到其他頁面，建議收錄進 SECTIONS.md
- Zig-zag 三組區塊沿用 SECTIONS.md「Section 07」規則
- FAQ 手風琴沿用「Section 17」規則（單選展開、淺薄荷綠底、箭頭旋轉）
- Explore 特色列表（6項小圖+文字兩欄）也是新元件，目前用 CSS Grid 2欄呈現，同樣建議之後收錄進 SECTIONS.md

## Tablet／Mobile 假設值

跟上次一樣，這個 Figma 檔案只有 **Desktop（1366px）版本**，沒有這頁專屬的 Tablet／Mobile 設計稿。所有窄螢幕版面都是依 DESIGN-RULES.md 累積的通用規則類比推導（Topbanner圖上文下、3欄卡片改單欄堆疊、Zig-zag改上下堆疊、Explore特色列表改單欄、圖在上文字在下），不是照專屬設計稿還原，之後有實際稿可以再修正。

## 前端互動範圍

- CTA 按鈕（Try AI Agent in ChatGPT／CONNECT IN CHATGPT／Try It Now／VIEW PRICING）只做前端 hover 效果，未串接下一步功能
- FAQ 手風琴、漢堡選單、語言切換按鈕已做前端展開/收合互動

## 檔案結構

```
index.html
style.css
script.js
assets/YCO/icons/   （沿用 workspace 既有固定素材）
assets/YCO/logos/   （沿用 workspace 既有固定素材）
assets/page/icon_down.svg   （FAQ 手繪簡化箭頭圖示）
```
