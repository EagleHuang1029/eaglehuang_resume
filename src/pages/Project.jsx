import { Navigate, useParams } from 'react-router'
import { AboutProject, ProjectSection } from '../components/project/blocks.jsx'
import { SectionHeading } from '../components/project/parts.jsx'
import Tag from '../components/Tag.jsx'
import { MascotBubble, WorkTile } from '../components/WorkTile.jsx'
import { PROJECT_DETAILS } from '../data/projectDetails.js'
import { BEHANCE_URL, PROJECTS } from '../data/site.js'
import { asset } from '../lib/asset.js'

function ProjectHeader({ project }) {
  return (
    <header className="flex flex-col gap-4 pt-10 md:pt-16 xl:gap-2 xl:pt-[106px]">
      <h1 className="font-display text-[32px] leading-[1.5] font-extrabold text-ink md:text-5xl xl:text-[80px]">
        <span className="text-ink/40">{project.titleMuted}</span>
        {project.title}
      </h1>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-10 gap-y-2">
          {project.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
        <a
          href={BEHANCE_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 font-tag text-xl font-bold text-accent md:text-base hover:underline"
        >
          <img src={asset('icons/link.svg')} alt="" className="size-[18px]" />
          Behance Link
        </a>
      </div>
    </header>
  )
}

function ProjectInfo({ info }) {
  return (
    <dl className="grid gap-6 border-b border-line/60 py-10 md:grid-cols-3 md:gap-10 xl:gap-[88px] xl:py-16">
      {info.map((row) => (
        <div key={row.label} className="flex flex-col gap-3 px-2 py-3">
          <dt className="font-display text-xl leading-[1.5] font-bold text-ink md:text-2xl">{row.label}</dt>
          <dd className="font-body text-base leading-loose tracking-[2px] whitespace-pre-wrap text-muted md:text-base">
            {row.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function OtherProjects({ current }) {
  const others = PROJECTS.filter((p) => p.slug !== current)
  return (
    <section className="flex flex-col gap-6">
      <SectionHeading>OTHER PROJECT</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-[494fr_494fr_292fr] xl:gap-[22px]">
        {others.map((p) => (
          <WorkTile
            key={p.slug}
            to={`/projects/${p.slug}`}
            thumb={p.thumb}
            alt={`${p.name} 專案封面`}
            name={p.name}
            subtitle={p.subtitle}
          />
        ))}
        <WorkTile
          href={BEHANCE_URL}
          thumb="works/behance.webp"
          alt="Behance 作品集預覽"
          name="My Behance"
          subtitle="觀看我其他的專案"
        />
        <MascotBubble className="hidden xl:flex xl:justify-start [&>div]:w-[290px] [&>img]:w-[220px]" />
      </div>
    </section>
  )
}

export default function Project() {
  const { slug } = useParams()
  const project = PROJECT_DETAILS[slug]
  if (!project) return <Navigate to="/works" replace />

  return (
    <article className="flex flex-col gap-16 xl:gap-20">
      <div>
        <ProjectHeader project={project} />
        {/* The hero mockup is wider (1760px) than the text column on large screens */}
        <img
          src={asset(project.hero)}
          alt={`${project.titleMuted}${project.title} 主視覺`}
          fetchPriority="high"
          className="mt-8 w-full rounded-3xl xl:relative xl:left-1/2 xl:mt-8 xl:w-[min(1760px,calc(100vw-48px))] xl:max-w-none xl:-translate-x-1/2"
        />
        <ProjectInfo info={project.info} />
      </div>
      <AboutProject about={project.about} />
      {project.sections.map((section, i) => (
        <ProjectSection key={i} section={section} />
      ))}
      <OtherProjects current={slug} />
    </article>
  )
}
