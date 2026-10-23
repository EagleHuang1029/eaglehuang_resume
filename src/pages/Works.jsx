import { Link } from 'react-router'
import BraceHeading from '../components/BraceHeading.jsx'
import { PROJECTS, SOCIAL_LINKS } from '../data/site.js'
import { asset } from '../lib/asset.js'

const BEHANCE = SOCIAL_LINKS.find((s) => s.label === 'Behance').href

function WorkThumb({ src, alt }) {
  return (
    <span className="block rounded-[29px] bg-white/20 p-4 transition-transform duration-300 group-hover:-translate-y-1 md:p-6">
      <span className="block overflow-hidden rounded-[15px] bg-linear-to-b from-[#7693a5] to-[#c8d9e5]">
        <img src={asset(src)} alt={alt} className="aspect-[552/443] w-full object-cover" loading="lazy" />
      </span>
    </span>
  )
}

function WorkCaption({ name, subtitle, period }) {
  return (
    <span className="flex flex-col gap-4 md:gap-6">
      <span className="flex flex-col font-body leading-loose">
        <span className="text-2xl font-bold text-heading md:text-[32px]">{name}</span>
        <span className="text-xl font-medium text-ink/40 md:text-2xl">{subtitle}</span>
      </span>
      {period && <span className="text-base font-medium tracking-[0.32px] text-muted/50">{period}</span>}
    </span>
  )
}

export default function Works() {
  return (
    <>
      <section className="flex flex-col gap-6 pt-10 md:pt-16 xl:mx-auto xl:w-[1254px] xl:pt-[146px]">
        <BraceHeading as="h1">WORK</BraceHeading>
        <p className="font-body text-base leading-loose font-medium tracking-[2px] text-muted md:text-xl">
          快來看看我的作品吧，我的Behance還有更多的作品 ~ !
        </p>
      </section>

      <section className="card mt-10 grid gap-10 px-4 py-8 md:grid-cols-2 md:gap-x-6 md:gap-y-[25px] md:px-9 md:py-10 xl:mt-14 xl:gap-x-[46px]">
        {PROJECTS.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="group flex flex-col gap-6">
            <WorkThumb src={p.thumb} alt={`${p.name} 專案封面`} />
            <WorkCaption name={p.name} subtitle={p.subtitle} period={p.period} />
          </Link>
        ))}

        <a href={BEHANCE} target="_blank" rel="noreferrer" className="group flex flex-col gap-6">
          <WorkThumb src="works/behance.png" alt="Behance 作品集預覽" />
          <WorkCaption name="My Behance" subtitle="觀看我的其他專案" />
        </a>

        {/* Mascot with a speech bubble, filling the empty grid cell on tablet/desktop */}
        <div className="hidden flex-col items-center justify-end md:flex">
          <div className="relative flex w-[300px] flex-col items-center pb-[30px] xl:w-[398px]">
            <img src={asset('works/bubble.svg')} alt="" className="absolute inset-x-0 top-0 w-full" />
            <p className="relative py-6 text-center font-roboto text-xl leading-normal font-bold tracking-[1.37px] text-[#5a646a] xl:py-8 xl:text-[27px]">
              如果你對我的作品有興趣
              <br />
              歡迎隨時聯繫我！
            </p>
          </div>
          <img src={asset('works/mascot.png')} alt="Eagle 的插畫角色" className="w-[240px] xl:w-[318px]" loading="lazy" />
        </div>
      </section>
    </>
  )
}
