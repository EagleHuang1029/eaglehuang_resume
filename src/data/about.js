// Content for the 關於我 page (Figma frame 403:3621).
import { ACHIEVEMENT } from './profile.js'

export const INTRO = {
  headline: '我是 Eagle，一位具備產品視角的設計師，從需求與使用者角度思考設計，持續探索更好的產品體驗。',
  paragraphs: [
    '目前在現公司擔任 UIUX Design Leader，專注於現有產品的功能設計與體驗優化。有需求時，我會拆解分析確認需求背後問題的本質，在分析業界競爭對手的產品來制定設計策略。',
    '也在目前公司第一次擔任管理職務，並指導團隊成員如何有效的使用Figma及正確的使用設計系統使其落地可被延續，並導入設計規範、設計驗收及設計流程。',
  ],
  email: 'huangdiesel27@gmail.com',
  // The design has no Medium profile URL yet, so this points at the AAPD article.
  mediumHref: ACHIEVEMENT.href,
  resumeHref: 'resume.pdf',
}

export const AI_DESIGN = {
  lead: '將 AI 融入設計流程，從問題理解、設計探索到快速驗證，讓設計思考能更快轉化為可測試的成果。',
  items: [
    {
      icon: 'about/ai-insight.svg',
      title: 'AI × 問題洞察',
      body: '運用 AI 協助整理使用者資訊、分析需求與探索問題，並透過 JTBD 等框架建立假設，幫助我從大量資訊中更快找到值得深入的方向。',
    },
    {
      icon: 'about/ai-cocreate.svg',
      title: 'AI × 設計共創',
      body: '將 AI 作為設計過程中的協作夥伴，透過 Claude、Figma 等工具探索介面方向、整理設計邏輯，並嘗試將想法快速轉化為可視化成果。',
    },
    {
      icon: 'about/ai-validate.svg',
      title: 'AI × 快速驗證',
      body: '透過 AI 加速 Prototype 與概念驗證，讓設計不只停留在靜態畫面，而能更快建立、測試與調整，縮短從想法到驗證的距離。',
    },
  ],
}

// `logo` is an image path, or a single character drawn as text when the company has no logo.
export const EXPERIENCE = [
  {
    company: '大真有限公司',
    role: 'UI / UX 設計師',
    period: '2025 - 現在',
    logo: 'about/logo-dazhen.png',
    details: [
      {
        heading: '產品設計及UI / UX 優化',
        points: [
          '主導產品功能設計，轉化 PM 需求為具體方案，與工程團隊協作確保設計落地與體驗一致。',
          '根據用戶反饋優化介面與流程，提高任務完成率與用戶滿意度。',
          '建立並維護設計系統，提升設計一致性與跨部門協作效率。',
          '使用瀏覽器開發者工具進行切版校稿，確認網頁呈現與 RWD 響應式效果是否一致。',
        ],
      },
      {
        heading: '教學與流程制定',
        points: [
          '製作Figma教學文件，並指導組員有效運用Figma功能及AI工具。',
          '制定設計流程，讓原本混亂且難以延續跟維護的設計專案內容得到改善。',
          'Variables 系統教學及實際建置，讓專案未來維護更方便且與開發更有效的溝通。',
          '制定 Design QA 流程以統一不同設計師下能維持統一的設計品質。',
        ],
      },
    ],
  },
  {
    company: '塶樂為創有限公司',
    role: 'UI / UX Designer',
    period: '2021 - 2025',
    logo: 'about/logo-tangle.png',
    details: [
      {
        heading: '網站平台 UI / UX',
        points: [
          '與 PM 對接產品需求，梳理功能架構並製作 Function Map。',
          '規劃各功能操作流程，建立 Flow Chart、UI Flow 與 Wireframe。',
          '將 Wireframe 延伸為 High-Fidelity Mockup，完成介面視覺與互動設計。',
          '使用瀏覽器開發者工具進行切版校稿，確認網頁呈現與 RWD 響應式效果。',
        ],
      },
      {
        heading: '遊戲 UI 設計',
        points: [
          '規劃與設計遊戲介面及遊戲內各項 UI 元件。',
          '製作平台行銷活動所需的 Banner 與相關視覺素材。',
          '配合遊戲需求進行介面調整與視覺設計。',
        ],
      },
      {
        heading: '前端協作與開發溝通',
        points: [
          '具備 HTML、CSS 與基礎 JavaScript 能力，可透過開發者工具理解網頁結構與實作方式。',
          '協助設計團隊與 RD 溝通設計細節，降低設計與開發之間的理解落差。',
          '設計前會先了解專案使用的前端框架／元件庫及其 Guidelines，讓設計盡量符合既有元件規範，降低後續開發成本並提升團隊協作效率。',
        ],
      },
    ],
  },
  {
    company: '誌彙科技有限公司',
    role: 'UI Designer',
    period: '2018 - 2021',
    logo: 'about/logo-zhihui.png',
    details: [
      {
        points: [
          '負責網站與數位介面規劃，依據客戶需求進行需求釐清、資訊架構規劃、Wireframe 繪製與 Mockup 視覺設計，將需求轉化為具體介面方案。',
          '參與網站前端實作，使用 HTML、CSS 進行切版與 RWD 響應式設計，並搭配 jQuery 製作基礎互動效果，具備設計落地與前端實作概念。',
          '使用 WordPress 進行網站建置、介面視覺調整與內容維護，並依實際營運需求持續進行網站更新與版面優化。',
          '與企劃、設計及程式開發人員協作執行專案，協助需求溝通、功能確認與設計調整，確保設計方案與實際開發需求順利銜接。',
          '支援品牌與行銷相關視覺設計，包含品牌識別、網站改版、活動 Banner、數位廣告與行銷素材製作，累積跨平台視覺設計經驗。',
        ],
      },
    ],
  },
  {
    company: '米洛科技有限公司',
    role: '網頁設計助理',
    period: '2017 - 2018',
    logo: 'about/logo-milo.png',
    details: [
      {
        points: [
          '協助網站頁面規劃與客戶提案，依需求製作網站 Mockup 與版型設計。',
          '使用公司自行開發的網站編輯系統進行網頁製作，並運用 HTML、CSS 及 Bootstrap 完成頁面切版與樣式調整。',
          '執行 RWD 響應式網頁製作，並針對不同裝置與瀏覽器進行 CSS 相容性與版面調整。',
          '協助網站日常維護與問題排除，處理客戶內容編輯後產生的版面異常、跑版等問題。',
        ],
      },
    ],
  },
  {
    company: '卡貓科技有限公司 ( 結束營運 )',
    role: '梅樹設計兼企劃助理',
    period: '2016 - 2017',
    logoText: '貓',
    details: [
      {
        points: [
          '參與卡牌類遊戲 UI 介面提案與設計，配合遊戲企劃需求進行介面版型、視覺元素與相關素材製作。',
          '負責公司官網整體視覺設計，包含 Logo、Banner、Icon 等網站相關素材製作。',
          '執行影像後製與美編作業，包含素材合成、去背、修圖及其他影像處理。',
          '協助企劃主管整理與撰寫產品規格文件，配合專案需求進行內容彙整與製作。',
        ],
      },
    ],
  },
  {
    company: '九玖雲端有限公司 ( 結束營運 )',
    role: '網頁美術設計',
    period: '2015 - 2016',
    logo: 'about/logo-jiujiu.png',
    details: [
      {
        points: [
          '負責遊戲活動 Banner、EDM、GIF 及站外宣傳素材設計。',
          '執行遊戲活動獨立頁面設計與版面規劃。',
          '負責遊戲平台 UI 改版與視覺調整，配合營運需求進行介面更新。',
          '協助公司內部環境與臨時需求之美術素材製作。',
          '與企劃、程式開發等相關人員協作執行專案。',
        ],
      },
    ],
  },
]

export const CERTIFICATIONS = [
  {
    title: 'AAPD - 2026產品設計實戰營',
    paragraphs: [
      '參加AAPD 產品設計實戰營瞭解業界較正式的產品設計流程，學習到產品從0 → 1 的產品前期規劃，釐清使用者痛點背後真實需要被解決的問題，在透過規劃產品來解決痛點，並融入AI工具加入流程加速產出MVP(最小可行性產品)，及後續各種狀態paith的規劃等等完整流程，完成後透過與營隊夥伴及營隊專業的教練反饋進行調整。',
      '由於一直待在對於產品設計較不重視的產業中，對於產品設計較正式的流程及輸出規範等希望透過實戰營學習了解。',
    ],
    image: 'about/cert-aapd.webp',
    aspect: 'aspect-[2400/1200]',
  },
  {
    title: '六角學院 - 網頁切版專題班',
    paragraphs: [
      '職涯過程中，許多時候都會有與工程開發人員對接與溝通的時刻，但設計師與工程師的專業領域的不同，溝通上難免會有遇到不是那麼順利的時候，所以決定主動學習前端相關語言，並在專題班中實作出網站產品，也讓我之後與開發溝通時，用開發人員了解的語言或是直接用網站的開法者模式溝通，甚至可以更理解開發人員開的需求，加速專案的開發。',
    ],
    image: 'about/cert-hexschool.webp',
    aspect: 'aspect-[1053/745]',
  },
]
