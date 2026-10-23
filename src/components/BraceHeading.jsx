// "{ 關於我 }" style section title. `size="sm"` is the smaller variant used on the home page.
const SIZES = {
  md: { brace: 'text-5xl md:text-[80px]', text: 'text-[32px] md:text-[64px]' },
  sm: { brace: 'text-[32px] md:text-5xl xl:text-[64px]', text: 'text-2xl md:text-4xl xl:text-5xl' },
}

export default function BraceHeading({ as: Tag = 'h2', size = 'md', children, className = '' }) {
  const s = SIZES[size]
  return (
    <Tag className={`flex items-center gap-5 font-display font-extrabold ${className}`}>
      <span className={`${s.brace} tracking-[3px] text-ink/40`}>{'{'}</span>
      <span className={`${s.text} tracking-[2px] text-ink`}>{children}</span>
      <span className={`${s.brace} tracking-[3px] text-ink/40`}>{'}'}</span>
    </Tag>
  )
}
