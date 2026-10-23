// "{ 關於我 }" style section title.
export default function BraceHeading({ children, className = '' }) {
  return (
    <h2 className={`flex items-center gap-5 font-display font-extrabold ${className}`}>
      <span className="text-5xl tracking-[3px] text-ink/40 md:text-[80px]">{'{'}</span>
      <span className="text-[32px] tracking-[2px] text-ink md:text-[64px]">{children}</span>
      <span className="text-5xl tracking-[3px] text-ink/40 md:text-[80px]">{'}'}</span>
    </h2>
  )
}
