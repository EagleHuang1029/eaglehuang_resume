import { Link } from 'react-router'
import { asset } from '../lib/asset.js'
import Tag from './Tag.jsx'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden card transition hover:shadow-[0_12px_40px_rgb(43_159_217/0.15)] xl:h-[658px] xl:flex-row"
    >
      <div className="flex items-center justify-center overflow-hidden bg-[rgb(77_170_210/0.2)] p-6 md:p-10 xl:w-1/2 xl:shrink-0 xl:p-0">
        <img
          src={asset(project.cover)}
          alt=""
          className="w-full max-w-[560px] object-contain transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col justify-between gap-8 p-6 md:p-12 xl:w-1/2">
        <div className="flex flex-col gap-6 md:gap-8">
          <span className="self-start rounded-full bg-chip px-8 py-3 text-base font-medium tracking-[0.32px] text-ink">
            {project.period}
          </span>
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl leading-[1.5] font-extrabold text-ink md:p-2.5 md:text-[40px]">
              {project.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="font-body text-base leading-loose font-medium tracking-[2px] text-muted md:p-2.5">
              {project.summary}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Link>
  )
}
