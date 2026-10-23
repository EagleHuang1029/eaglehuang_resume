import BraceHeading from '../components/BraceHeading.jsx'
import { MascotBubble, WorkTile } from '../components/WorkTile.jsx'
import { BEHANCE_URL, PROJECTS } from '../data/site.js'

export default function Works() {
  return (
    <>
      <section className="flex flex-col gap-6 pt-10 md:pt-16 xl:mx-auto xl:max-w-[1200px] xl:w-full xl:pt-[146px]">
        <BraceHeading as="h1">WORK</BraceHeading>
        <p className="font-body text-base leading-loose font-medium tracking-[2px] text-muted md:text-base">
          快來看看我的作品吧，我的Behance還有更多的作品 ~ !
        </p>
      </section>

      <section className="card mt-10 grid gap-10 px-4 py-8 md:grid-cols-2 md:gap-x-6 md:gap-y-[25px] md:px-9 md:py-10 xl:mt-14 xl:gap-x-[46px]">
        {PROJECTS.map((p) => (
          <WorkTile
            key={p.slug}
            to={`/projects/${p.slug}`}
            thumb={p.thumb}
            alt={`${p.name} 專案封面`}
            name={p.name}
            subtitle={p.subtitle}
            period={p.period}
          />
        ))}
        <WorkTile
          href={BEHANCE_URL}
          thumb="works/behance.webp"
          alt="Behance 作品集預覽"
          name="My Behance"
          subtitle="觀看我的其他專案"
        />
        {/* Fills the empty grid cell on tablet/desktop; sits under the tiles on mobile */}
        <MascotBubble className="flex" />
      </section>
    </>
  )
}
