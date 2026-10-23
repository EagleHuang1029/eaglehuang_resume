// Infinite horizontal scroll inside a fixed-width card (skills / design tools).
export default function Marquee({ children, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none">
        <div className="flex shrink-0 gap-4">{children}</div>
        <div aria-hidden className="flex shrink-0 gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}
