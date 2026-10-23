import { ACHIEVEMENT, CURRENT_JOB, SKILLS, TOOLS } from '../data/profile.js'
import { asset } from '../lib/asset.js'
import CardTitle from './CardTitle.jsx'
import Marquee from './Marquee.jsx'

const highlight = 'text-accent'

function Experience() {
  return (
    <section className="flex flex-col gap-4 card px-6 py-8 md:py-10 md:pl-9">
      <CardTitle>工作經驗</CardTitle>
      <p className="font-body text-base leading-loose font-medium tracking-[2px] text-muted md:pl-11">
        目前在大真有限公司擔任UI/UX Design Lead，過往有10年工作經驗包含
        <span className={highlight}>UIUX設計</span>、<span className={highlight}>網站設計</span>、
        <span className={highlight}>APP設計</span>、<span className={highlight}>前端切板</span>等經驗。
      </p>
      <div className="relative md:ml-11 md:w-[494px]">
        <div className="relative z-10 flex items-center justify-between gap-4 rounded-2xl bg-[#f8fcff] p-4 drop-shadow-[8px_0_2px_rgb(154_154_154/0.15)] md:w-[372px] dark:bg-white/10">
          <div className="flex items-center gap-4">
            <div className="rounded-[20px] border-2 border-[#74c5eb] bg-white p-2.5">
              <img src={asset(CURRENT_JOB.logo)} alt="" className="size-[45px] rounded-[13px] object-cover" />
            </div>
            <p className="font-body text-base leading-normal font-medium text-muted">
              <span className="block font-bold">{CURRENT_JOB.company}</span>
              <span className="block text-accent">{CURRENT_JOB.role}</span>
            </p>
          </div>
          <span className="hidden p-2.5 font-body text-base text-muted/50 md:block">{CURRENT_JOB.period}</span>
        </div>
        <span className="mt-2 block p-2.5 font-body text-base text-muted/50 md:hidden">{CURRENT_JOB.period}</span>
        <div className="flex h-12 items-center rounded-2xl bg-linear-to-r from-[#f8fcff]/0 from-70% to-[#f8fcff]/70 px-4 md:absolute md:inset-0 md:h-auto md:justify-end">
          <span className="p-2.5 font-body text-base text-muted/50">10 Years +</span>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="flex flex-col gap-4 card py-8 md:py-10">
      <div className="px-6 md:pl-9">
        <CardTitle>我的技能有</CardTitle>
      </div>
      <Marquee className="px-6 md:mx-9 md:px-0">
        {SKILLS.map((s) => (
          <span
            key={s}
            className="tile px-[33px] py-4 text-center font-roboto text-base leading-loose font-bold tracking-[1px] whitespace-nowrap text-muted md:text-xl"
          >
            {s}
          </span>
        ))}
      </Marquee>
    </section>
  )
}

function Tools() {
  return (
    <section className="flex flex-col gap-4 card py-8 md:py-10">
      <div className="px-6 md:pl-9">
        <CardTitle>設計工具</CardTitle>
      </div>
      <Marquee className="px-6 md:px-9">
        {TOOLS.map((t) => (
          <figure
            key={t.name}
            className="tile flex size-[116px] shrink-0 flex-col items-center justify-center gap-1"
          >
            <img src={asset(t.logo)} alt="" loading="lazy" className="size-[52px] rounded-xl object-cover" />
            <figcaption className="font-roboto text-base leading-loose font-bold tracking-[1px] text-muted">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  )
}

function Achievement() {
  return (
    <section className="flex flex-col gap-8 card px-6 py-8 md:px-8 md:py-10">
      <CardTitle>成就分享</CardTitle>
      <a
        href={ACHIEVEMENT.href}
        target="_blank"
        rel="noreferrer"
        className="tile flex items-center gap-5 p-5 transition hover:bg-white/70 md:max-w-[764px] md:py-[22px] md:pr-[34px] md:pl-[22px]"
      >
        <img src={asset(ACHIEVEMENT.logo)} alt="" loading="lazy" className="size-14 shrink-0 rounded-2xl object-cover md:size-[72px]" />
        <span className="flex min-w-0 flex-1 flex-col gap-2 md:gap-3">
          <span className="font-roboto text-lg leading-snug font-extrabold tracking-[1px] text-muted md:text-[28px]">
            {ACHIEVEMENT.title}
          </span>
          <span className="font-body text-sm font-medium tracking-[2px] text-accent md:text-base">
            {ACHIEVEMENT.subtitle}
          </span>
        </span>
        <img src={asset('icons/external-link.svg')} alt="在新分頁開啟" className="size-6 shrink-0 self-start md:self-center" />
      </a>
    </section>
  )
}

// The four "關於我" cards: two columns on desktop, stacked on tablet / mobile.
export default function AboutCards() {
  return (
    <div className="grid gap-6 xl:grid-cols-[944fr_872fr]">
      <div className="flex min-w-0 flex-col gap-6">
        <Experience />
        <Skills />
      </div>
      <div className="flex min-w-0 flex-col gap-6">
        <Tools />
        <Achievement />
      </div>
    </div>
  )
}
