const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-[1840px] px-4 pb-8 md:px-10">
      <div className="rounded-3xl bg-card p-6 md:p-12">
        <p className="font-display text-3xl font-extrabold md:text-5xl">
          LET’S <span className="text-brand-deep">( Solve product issues )</span> TOGETHER
        </p>
        <p className="mt-6 text-sm text-muted">Eagle Huang ⓒ {YEAR}</p>
      </div>
    </footer>
  )
}
