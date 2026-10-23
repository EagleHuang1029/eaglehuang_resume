# Eagle Huang｜個人履歷網站

React + Vite + Tailwind CSS，設計稿來源：Figma「Eagle Resume」（PC 1920／平板 810／手機 390）。

## 本機開發

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 輸出到 dist/
npm run lint
```

## 頁面路由

| 網址 | 頁面 |
|---|---|
| `/#/` | 首頁 |
| `/#/about` | 關於我 |
| `/#/works` | 作品頁 |
| `/#/projects/:slug` | 專案頁 |

使用 hash 路由，在 GitHub Pages 上重新整理任何頁面都不會 404。

## 部署

推到 `main` 後，`.github/workflows/deploy.yml` 會自動建置並發佈到 GitHub Pages。
第一次需要到 repo 的 **Settings → Pages → Source** 選擇 **GitHub Actions**。

- repo 名稱是 `<帳號>.github.io` → 網址為 `https://<帳號>.github.io/`
- 其他名稱 → 網址為 `https://<帳號>.github.io/<repo 名稱>/`（workflow 會自動設定路徑）
