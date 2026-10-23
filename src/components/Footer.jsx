import { SOCIAL_LINKS } from '../data/site.js'
import { asset } from '../lib/asset.js'
import ContactButton from './ContactButton.jsx'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mx-auto w-full px-8 pt-16 pb-6 md:pt-[69px] md:pb-10 xl:w-[min(1840px,calc(100vw-48px))] xl:px-0">
      <div className="flex flex-col gap-10 glass rounded-[32px] bg-[#f8fcff]/95 px-6 py-10 md:rounded-[60px] md:px-[60px] md:py-12 xl:min-h-[535px] xl:justify-between dark:bg-white/5">
        <div className="flex flex-wrap items-start gap-[35px]">
          <div className="max-w-[1130px] font-display font-bold text-ink">
            <p className="text-[40px] leading-tight md:text-6xl xl:text-[80px] xl:leading-normal">
              LET’S <span className="text-accent">( Solve product issues )</span>
            </p>
            <p className="mt-2 text-[40px] leading-tight md:text-6xl xl:mt-6 xl:text-[80px] xl:leading-normal">
              TOGETHER
            </p>
          </div>
          <p className="min-w-[284px] flex-1 font-roboto text-base leading-normal font-bold tracking-[1px] text-muted md:p-2.5 md:text-base">
            如果你對我的作品有興趣，
            <br />
            歡迎隨時聯繫我！
          </p>
        </div>

        <ContactButton className="self-start px-8 py-5" />

        <div className="flex flex-col-reverse gap-6 px-2 md:flex-row md:items-center md:justify-between">
          <p className="font-roboto text-base text-muted/50">Eagle Huang ⓒ {YEAR}</p>
          <div className="flex gap-[22px]">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-xl bg-button p-4 transition hover:bg-ink-strong"
              >
                <img src={asset(s.icon)} alt="" className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
