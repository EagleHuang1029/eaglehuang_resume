import { asset } from '../../lib/asset.js'

const BLUE_ICONS = {
  target: 'icons/blue-target.svg',
  fire: 'icons/blue-fire.svg',
  solve: 'icons/blue-solve.svg',
  feather: 'icons/blue-feather.svg',
}

// Small "{ 關於專案 }" heading used between case-study sections.
export function SectionHeading({ children }) {
  return (
    <h2 className="flex items-center gap-3 p-2.5 font-display font-extrabold">
      <span className="text-[32px] tracking-[1.92px] text-ink/40 md:text-5xl">{'{'}</span>
      <span className="text-2xl tracking-[1.6px] text-ink md:text-[40px]">{children}</span>
      <span className="text-[32px] tracking-[1.92px] text-ink/40 md:text-5xl">{'}'}</span>
    </h2>
  )
}

// Plain 32px title, e.g. 優化項目 - … / 設計系統.
export function BlockTitle({ children }) {
  return <h2 className="font-body text-2xl leading-normal font-bold text-ink md:text-[32px]">{children}</h2>
}

export function IconTitle({ icon, children }) {
  return (
    <h3 className="flex items-center gap-3 font-display text-2xl leading-[1.5] font-bold text-ink md:text-[32px]">
      {icon && <img src={asset(BLUE_ICONS[icon])} alt="" className="size-7 md:size-8" />}
      {children}
    </h3>
  )
}

// A bold-titled paragraph; `body` may be a string or several paragraphs.
export function TextItem({ title, body, large = false, largeTitle = false, titleClass = 'text-heading' }) {
  const paragraphs = Array.isArray(body) ? body : [body]
  const size = large ? 'text-lg md:text-2xl' : 'text-base md:text-base'
  return (
    <div className={`font-body leading-loose tracking-[2px] text-muted ${size}`}>
      <p className={`font-bold ${largeTitle ? 'text-lg md:text-2xl' : ''} ${titleClass}`}>{title}</p>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  )
}

export function Panel({ children, className = '' }) {
  return <div className={`flex flex-col gap-4 glass rounded-3xl bg-white/35 px-5 py-8 md:px-8 md:py-10 ${className}`}>{children}</div>
}

export function Figure({ src, alt, caption, className = '' }) {
  return (
    <figure className={`flex flex-col items-center gap-4 ${className}`}>
      <img src={asset(src)} alt={alt} className="w-full" loading="lazy" decoding="async" />
      {caption && <figcaption className="font-body text-2xl font-bold text-heading md:text-[32px]">{caption}</figcaption>}
    </figure>
  )
}
