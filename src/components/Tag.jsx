export default function Tag({ children, className = '' }) {
  return (
    <span className={`inline-flex gap-2 font-tag text-base font-bold tracking-[2px] text-muted md:text-xl ${className}`}>
      <span className="text-accent">#</span>
      {children}
    </span>
  )
}
