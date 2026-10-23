import AboutCards from '../components/AboutCards.jsx'
import BraceHeading from '../components/BraceHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ScriptHeading from '../components/ScriptHeading.jsx'
import Tag from '../components/Tag.jsx'
import { PROJECTS } from '../data/site.js'
import { asset } from '../lib/asset.js'

const FOCUS = ['UI/UX Design', 'Product Thinking', 'Front-end Awareness', 'Prototype']

function Hero() {
  return (
    <section className="flex flex-wrap items-end justify-center gap-10 pt-10 md:pt-16 xl:gap-[70px] xl:pt-[104px]">
      <div className="flex w-full flex-col gap-8 xl:w-[1049px] xl:gap-12">
        <h1 className="flex flex-col gap-4 text-ink xl:gap-6">
          <span className="flex items-center gap-4 xl:gap-6">
            <span className="text-[28px] font-bold tracking-[1.28px] opacity-40 md:text-5xl xl:text-[64px]">嗨 ! 我是</span>
            <span className="font-display text-4xl font-extrabold md:text-6xl xl:text-[80px]">Eagle</span>
          </span>
          <span className="flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:gap-6">
            <span className="inline-flex items-center gap-4 rounded-full bg-chip px-5 py-2 md:w-[232px] md:justify-center md:px-8 md:py-4">
              <img src={asset('icons/verify.svg')} alt="" className="size-6 md:size-8" />
              <span className="text-base font-bold tracking-[0.48px] md:text-2xl">5 年經驗</span>
            </span>
            <span className="font-display text-4xl font-extrabold md:text-6xl xl:text-[80px]">UI UX Designer</span>
          </span>
        </h1>

        <p className="flex flex-col items-start gap-x-3 font-display text-[32px] leading-[1.3] font-extrabold text-ink md:flex-row md:items-center md:text-5xl xl:text-[72px]">
          <span>簡單留給使用者</span>
          <span className="order-first rounded-full bg-chip p-3 md:order-none md:p-4" aria-hidden>
            <img src={asset('icons/lamp.svg')} alt="" className="size-6 md:size-8" />
          </span>
          <span>複雜留給思考</span>
        </p>

        <ul className="flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-10">
          {FOCUS.map((f) => (
            <li key={f}>
              <Tag>{f}</Tag>
            </li>
          ))}
        </ul>
      </div>

      <a href="#selected-works" className="hidden items-center gap-2 text-accent xl:flex">
        <img src={asset('home/feather-arrow.svg')} alt="" className="h-[108px] w-[72px]" />
        <span className="font-semibold">
          Scroll down
          <br />
          to see
          <br />
          selected works
        </span>
      </a>
    </section>
  )
}

function Intro() {
  return (
    <section className="mt-12 flex flex-col-reverse gap-8 overflow-hidden rounded-3xl bg-linear-to-b from-white/15 to-white/0 to-80% px-6 py-10 md:px-12 xl:mt-[61px] xl:h-[616px] xl:flex-row xl:justify-between xl:gap-[84px] xl:pt-[53px] xl:pr-[117px] xl:pl-[88px]">
      <div className="flex flex-col gap-3 xl:w-[691px]">
        <ScriptHeading bold="What make me" script="different" />
        <div className="space-y-8 font-body text-base leading-loose font-medium tracking-[2px] text-muted md:p-2.5 md:text-xl">
          <p>
            我習慣在開始設計之前，先問一句：「為什麼要做這件事？」
            <br />
            比起直接回應需求，我更希望先理解問題背後的目的，再判斷需要透過使用者研究、桌面研究或競品分析找到線索。對我來說，設計不只是把需求轉換成畫面，而是從問題開始，找到真正需要被解決的事情。
          </p>
          <p>
            而過去實際接觸 HTML、CSS、RWD
            與前端切版的經驗，也讓我在設計時，會自然地把體驗與實作一起思考。從資訊層級、操作流程、不同裝置的呈現，到錯誤狀態與互動細節，我希望設計不只停留在
            Figma，而是成為一套能被理解、實作與延續的完整體驗。
          </p>
        </div>
      </div>
      <img
        src={asset('home/portrait.webp')}
        alt="Eagle 的插畫頭像"
        className="mx-auto w-[220px] md:w-[280px] xl:mx-0 xl:mt-[90px] xl:w-[336px] xl:self-start"
      />
    </section>
  )
}

function SelectedWorks() {
  return (
    <section id="selected-works" className="mt-12 flex scroll-mt-28 flex-col gap-6 xl:mt-[53px] xl:gap-[22px]">
      <ScriptHeading bold="Selected" script="Works" className="xl:p-2.5 [&>span:last-child]:xl:text-[64px]" />
      <div className="flex flex-col gap-10">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <SelectedWorks />
      {/* The 關於我 block is wider (1840px) than the main column on desktop */}
      <section className="mt-16 xl:relative xl:left-1/2 xl:mt-[189px] xl:w-[min(1840px,calc(100vw-48px))] xl:-translate-x-1/2">
        <BraceHeading className="mb-6 xl:mb-0 xl:p-2.5">關於我</BraceHeading>
        <AboutCards />
      </section>
    </>
  )
}
