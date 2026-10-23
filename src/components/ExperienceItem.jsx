import { useId, useState } from 'react'
import { asset } from '../lib/asset.js'

function CompanyLogo({ job }) {
  return (
    <span className="flex size-14 shrink-0 items-center justify-center rounded-[20px] border-2 border-accent bg-white p-2.5 md:size-[72px]">
      {job.logo ? (
        <img
          src={asset(job.logo)}
          alt=""
          loading="lazy"
          className="max-h-full max-w-full rounded-[13px] object-contain"
        />
      ) : (
        <span className="font-roboto text-2xl font-semibold text-[#2e4046] md:text-[32px]">{job.logoText}</span>
      )}
    </span>
  )
}

// One row of 工作經驗. Rows with `details` expand/collapse with a height transition; the first one starts open.
export default function ExperienceItem({ job, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const expandable = Boolean(job.details)

  const summary = (
    <>
      <CompanyLogo job={job} />
      <span className="flex min-w-0 flex-1 flex-col gap-2 text-left md:flex-row md:items-center md:justify-between md:gap-6">
        <span className="flex flex-col gap-2 md:gap-3">
          <span className="font-roboto text-lg leading-snug font-semibold text-muted md:text-2xl">{job.company}</span>
          <span className="font-body text-base leading-normal font-medium text-accent">{job.role}</span>
        </span>
        <span className="font-body text-base font-medium text-muted/50 md:px-2 md:text-base">{job.period}</span>
      </span>
      {expandable && (
        <span className="relative size-6 shrink-0 self-start md:self-center" aria-hidden>
          <img
            src={asset('icons/more.svg')}
            alt=""
            className={`absolute inset-0 size-6 transition duration-300 ${open ? 'rotate-90 opacity-0' : 'opacity-100'}`}
          />
          <img
            src={asset('icons/less.svg')}
            alt=""
            className={`absolute inset-0 size-6 transition duration-300 ${open ? 'opacity-100' : '-rotate-90 opacity-0'}`}
          />
        </span>
      )}
    </>
  )

  return (
    <li className={`tile overflow-hidden transition-colors duration-500 ${open ? 'bg-white/90 dark:bg-white/10' : ''}`}>
      {expandable ? (
        <button
          type="button"
          className="flex w-full cursor-pointer items-start gap-5 p-4 md:items-center md:px-[22px] md:py-[22px] md:pr-[34px]"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {summary}
        </button>
      ) : (
        <div className="flex items-start gap-5 p-4 md:items-center md:px-[22px] md:py-[22px] md:pr-[34px]">
          {summary}
        </div>
      )}

      {expandable && (
        // grid-rows 0fr -> 1fr animates the panel to its natural height
        <div
          id={panelId}
          inert={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="px-4 pb-6 md:pr-[26px] md:pb-10 md:pl-[114px]">
              {job.details.map((group, i) => (
                <div
                  key={group.heading ?? i}
                  className={`flex flex-col gap-3 py-6 ${i === 0 ? 'pt-4' : ''} ${i < job.details.length - 1 ? 'border-b border-dashed border-line' : ''}`}
                >
                  {group.heading && (
                    <h4 className="font-body text-lg leading-normal font-bold text-heading md:text-base">
                      {group.heading}
                    </h4>
                  )}
                  <ul className="flex list-disc flex-col gap-4 ps-[30px] font-body text-base leading-normal font-medium text-muted md:text-base">
                    {group.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
