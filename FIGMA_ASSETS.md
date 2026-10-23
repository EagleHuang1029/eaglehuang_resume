# Figma assets to export

Every image the code references lives in `public/images/<path>`. Export each node from
Figma file `Cn8kunj18UdvHfitsibbuY` (page Resume_web) and save it at the path below.

| Path | Figma node | Notes |
|---|---|---|
| bg-noise.png | fill of 19:3 | 128px noise tile |
| home/avatar.png | I138:54;136:15 | header avatar (raw image) |
| home/portrait.png | 72:6 | export the mask group |
| home/feather-arrow.svg | 64:2612 | |
| home/project-web.png | 96:44 | |
| home/project-app.png | 100:8 | |
| home/company-logo.png | 109:50 | |
| home/aapd.png | 116:96 | |
| icons/mail.svg | 78:34 | |
| icons/theme.svg | I138:54;136:22;37:51 | |
| icons/verify.svg | 43:131 | |
| icons/lamp.svg | 63:41 | |
| icons/feather-pen.svg | 107:46 | |
| icons/external-link.svg | 116:142 | |
| icons/behance.svg | 141:95 | |
| icons/linkedin.svg | 141:94 | |
| icons/medium.svg | 413:8559 | |
| icons/mail-outline.svg | 414:8592 | |
| icons/download.svg | 407:8500 | |
| icons/more.svg | 430:3837 | |
| icons/less.svg | 430:3836 | |
| tools/claude.png | 112:60 | |
| tools/figma.png | 112:71 | |
| tools/photoshop.png | 112:64 | |
| tools/illustrator.png | 112:67 | |
| tools/framer.png | 112:74 | |
| tools/notion.png | 112:77 | |
| tools/chatgpt.png | 114:80 | |
| about/portrait.png | 407:8479 | export the mask group (keeps mirror + shadow) |
| about/ai-insight.svg | 492:3712 | |
| about/ai-cocreate.svg | 493:3780 | |
| about/ai-validate.svg | 493:3797 | |
| about/logo-dazhen.png | 449:4063 | |
| about/logo-tangle.png | 449:4159 | export cropped |
| about/logo-zhihui.png | 449:4088 | |
| about/logo-milo.png | 451:4184 | export cropped |
| about/logo-jiujiu.png | I565:9107;451:4204 | export cropped |
| about/cert-aapd.png | 420:3687 | |
| about/cert-hexschool.png | 457:3695 | |

`public/resume.pdf` is the 下載履歷 file; it is not in Figma and must be supplied.

## 作品頁 (563:8342)

| Path | Figma node | Notes |
|---|---|---|
| works/web.png | 564:8623 | export the gradient frame |
| works/app.png | 564:8790 | export the gradient frame |
| works/behance.png | 564:8924 | export the whole collage frame |
| works/bubble.svg | 564:8886 | speech bubble shape only (text is live) |
| works/mascot.png | 564:8884 | |

## 專案頁 (專案一 279:6578 = /projects/app, 專案二 233:3480 = /projects/web)

| Path | Figma node | Notes |
|---|---|---|
| icons/link.svg | 357:3763 | |
| icons/blue-target.svg | 279:6642 | |
| icons/blue-fire.svg | 279:6648 | |
| icons/blue-solve.svg | 279:6656 | |
| icons/blue-feather.svg | 279:6671 | |
| p-app/hero.png | 279:6616 | 1760 wide |
| p-app/home-before.png | 313:9044 | |
| p-app/home-after.png | 313:9171 | |
| p-app/games-before.png | 301:2206 | |
| p-app/games-after.png | 301:2332 | |
| p-app/account-flow.png | 368:8794 | |
| p-app/design-type.png | 279:6678 | |
| p-app/design-color.png | 279:6698 | |
| p-app/design-components.png | 279:6727 | |
| p-app/user-flow.png | 368:14681 | |
| p-web/hero.png | 233:3518 | 1760 wide |
| p-web/style-before.png | 233:3626 | |
| p-web/style-after.png | 233:3612 | |
| p-web/design-type.png | 233:3676 | |
| p-web/design-color.png | 235:3711 | |
| p-web/design-components.png | 255:311 | |
| p-web/banner.png | 273:547 | |
| p-web/trade-screens.png | 273:6526 | |

Export PNGs at 2x. Images over 30 KB are then converted to WebP (quality 82, max 2400 px wide) and the code points at the .webp file. After adding everything, check every route at 1920 / 810 / 390 against the
Figma frames (tablet and mobile copies sit below each PC frame).
