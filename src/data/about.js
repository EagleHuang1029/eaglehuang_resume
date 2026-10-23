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
    role: 'UI / UX 設計師 · 組長',
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
        heading: '小組長工作項目',
        points: [
          '製作Figma教學文件，並指導組員有效運用Figma功能及AI工具。',
          '制定設計流程，讓原本混亂且難以延續跟維護的設計專案內容得到改善。',
          'Variables 系統教學及實際建置，讓專案未來維護更方便且與開發更有效的溝通。',
          '制定 Design QA 流程以統一不同設計師下能維持統一的設計品質。',
        ],
      },
    ],
  },
  { company: '塶樂為創有限公司', role: 'UI / UX Designer', period: '2021 - 2025', logo: 'about/logo-tangle.png' },
  { company: '誌彙科技有限公司', role: 'UI Designer', period: '2018 - 2021', logo: 'about/logo-zhihui.png' },
  { company: '米洛科技有限公司', role: '網頁設計助理', period: '2017 - 2018', logo: 'about/logo-milo.png' },
  { company: '卡貓科技有限公司 ( 結束營運 )', role: '梅樹設計兼企劃助理', period: '2016 - 2017', logoText: '貓' },
  { company: '九玖雲端有限公司 ( 結束營運 )', role: '網頁美術設計', period: '2015 - 2016', logo: 'about/logo-jiujiu.png' },
]

export const CERTIFICATIONS = [
  {
    title: 'AAPD - 2026產品設計實戰營',
    paragraphs: [
      '參加AAPD 產品設計實戰營瞭解業界較正式的產品設計流程，學習到產品從0 → 1 的產品前期規劃，釐清使用者痛點背後真實需要被解決的問題，在透過規劃產品來解決痛點，並融入AI工具加入流程加速產出MVP(最小可行性產品)，及後續各種狀態paith的規劃等等完整流程，完成後透過與營隊夥伴及營隊專業的教練反饋進行調整。',
      '由於一直待在對於產品設計較不重視的產業中，對於產品設計較正式的流程及輸出規範等希望透過實戰營學習了解。',
    ],
    image: 'about/cert-aapd.png',
    aspect: 'aspect-[2400/1200]',
  },
  {
    title: '六角學院 - 網頁切版專題班',
    paragraphs: [
      '職涯過程中，許多時候都會有與工程開發人員對接與溝通的時刻，但設計師與工程師的專業領域的不同，溝通上難免會有遇到不是那麼順利的時候，所以決定主動學習前端相關語言，並在專題班中實作出網站產品，也讓我之後與開發溝通時，用開發人員了解的語言或是直接用網站的開法者模式溝通，甚至可以更理解開發人員開的需求，加速專案的開發。',
    ],
    image: 'about/cert-hexschool.png',
    aspect: 'aspect-[1053/745]',
  },
]
