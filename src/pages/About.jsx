import BraceHeading from '../components/BraceHeading.jsx'
import CardTitle from '../components/CardTitle.jsx'
import ExperienceItem from '../components/ExperienceItem.jsx'
import { AI_DESIGN, CERTIFICATIONS, EXPERIENCE, INTRO } from '../data/about.js'
import { SOCIAL_LINKS } from '../data/site.js'
import { asset } from '../lib/asset.js'

const iconButton = 'flex items-center justify-center gap-2.5 rounded-xl bg-button/30 p-4 transition-colors hover:bg-button/50'

function Intro() {
  return (
    <section className="mt-10 flex flex-col gap-8 overflow-hidden glass rounded-3xl bg-white/20 px-6 py-10 md:px-12 md:py-14 xl:mt-[160px] xl:min-h-[785px] xl:pt-[84px] xl:pr-[60px] xl:pb-[157px] xl:pl-[88px]">
      <h1 className="font-display text-2xl leading-[1.5] font-extrabold text-ink md:text-[32px] xl:max-w-[1140px] xl:text-[32px]">
        {INTRO.headline}
      </h1>

      <div className="flex flex-col-reverse gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-10">
        <div className="flex flex-col items-start gap-8 xl:min-w-0 xl:flex-1">
          <div className="space-y-4 py-2 font-body text-base leading-loose font-medium tracking-[2px] text-muted md:text-base">
            {INTRO.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className={iconButton}>
                  <img src={asset(s.icon)} alt="" className="size-6" />
                </a>
              </li>
            ))}
            <li>
              <a href={INTRO.mediumHref} target="_blank" rel="noreferrer" aria-label="Medium" className={iconButton}>
                <img src={asset('icons/medium.svg')} alt="" className="size-6" />
              </a>
            </li>
            <li>
              <a href={`mailto:${INTRO.email}`} className={iconButton}>
                <img src={asset('icons/mail-outline.svg')} alt="" className="size-6" />
                <span className="font-body text-base leading-6 font-medium tracking-[1px] whitespace-nowrap text-[#e7eff6]">
                  {INTRO.email}
                </span>
              </a>
            </li>
          </ul>

          <a
            href={`${import.meta.env.BASE_URL}${INTRO.resumeHref}`}
            download="黃育淇_Eagle_Huang_履歷.pdf"
            className="flex items-center gap-4 rounded-full bg-button px-6 py-4 text-base font-medium tracking-[1.28px] text-[#e7eff6] transition-opacity hover:opacity-90"
          >
            下載履歷
            <img src={asset('icons/download.svg')} alt="" className="size-6" />
          </a>
        </div>

        <img
          src={asset('about/portrait.webp')}
          alt="Eagle 的照片"
          className="mx-auto w-[200px] md:w-[260px] xl:mx-0 xl:w-[300px] xl:shrink-0"
        />
      </div>
    </section>
  )
}

function AiDesign() {
  return (
    <section className="flex flex-col gap-10 py-16 md:px-8 xl:gap-20 xl:py-20">
      <div className="flex flex-col gap-6">
        <BraceHeading>AI × Design</BraceHeading>
        <p className="font-body text-base leading-loose font-medium tracking-[2px] text-muted md:text-base xl:w-[964px]">
          {AI_DESIGN.lead}
        </p>
      </div>
      <ul className="grid gap-10 md:grid-cols-3">
        {AI_DESIGN.items.map((item) => (
          <li key={item.title} className="flex flex-col gap-6">
            <span className="flex size-16 items-center justify-center rounded-2xl bg-ai">
              <img src={asset(item.icon)} alt="" className="h-[30px] w-auto" />
            </span>
            <div className="flex max-w-[580px] flex-col gap-1 tracking-[2px]">
              <h3 className="font-body text-xl leading-loose font-bold text-heading md:text-2xl">{item.title}</h3>
              <p className="font-body text-base leading-loose text-muted md:text-base">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Experience() {
  return (
    <section className="card flex flex-col gap-[25px] px-4 py-8 md:px-9 md:py-10">
      <CardTitle>工作經驗</CardTitle>
      <ul className="flex flex-col gap-[25px]">
        {EXPERIENCE.map((job, i) => (
          <ExperienceItem key={job.company} job={job} defaultOpen={i === 0} />
        ))}
      </ul>
    </section>
  )
}

function Certifications() {
  return (
    <section className="flex flex-col gap-6 py-16 xl:py-20">
      <h2 className="font-script text-4xl text-ink md:text-5xl">Certifications</h2>
      <div className="flex flex-col gap-16 glass rounded-3xl bg-white/30 px-6 py-10 md:gap-20 md:px-20 md:py-16">
        {CERTIFICATIONS.map((c) => (
          <article key={c.title} className="flex flex-col gap-6">
            <h3 className="font-body text-xl leading-normal font-bold text-heading md:text-base">{c.title}</h3>
            <div className="space-y-0 font-body text-base leading-loose font-medium tracking-[2px] text-muted md:text-base">
              {c.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <img src={asset(c.image)} alt={`${c.title} 證書`} className={`w-full object-cover ${c.aspect}`} loading="lazy" decoding="async" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <Intro />
      <AiDesign />
      <Experience />
      <Certifications />
    </>
  )
}
