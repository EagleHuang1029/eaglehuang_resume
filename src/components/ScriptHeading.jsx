// "What make me different" / "Selected Works": bold display word followed by a handwritten one.
export default function ScriptHeading({ as: Tag = 'h2', bold, script, className = '' }) {
  return (
    <Tag className={`flex flex-wrap items-center gap-x-3 text-ink ${className}`}>
      <span className="font-display text-[28px] font-extrabold md:text-[40px]">{bold}</span>
      <span className="font-script text-[34px] md:text-5xl">{script}</span>
    </Tag>
  )
}
