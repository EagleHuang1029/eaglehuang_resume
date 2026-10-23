import { Link } from 'react-router'
import { asset } from '../lib/asset.js'

// Project / Behance tile used on 作品頁 and in the OTHER PROJECT block of each case study.
export function WorkTile({ to, href, thumb, alt, name, subtitle, period }) {
  const body = (
    <>
      <span className="block rounded-[29px] bg-white/20 p-4 transition-transform duration-300 group-hover:-translate-y-1 md:p-6">
        <span className="block overflow-hidden rounded-[15px] bg-linear-to-b from-[#7693a5] to-[#c8d9e5]">
          <img src={asset(thumb)} alt={alt} className="aspect-[552/443] w-full object-cover" loading="lazy" />
        </span>
      </span>
      <span className="flex flex-col gap-4 md:gap-6">
        <span className="flex flex-col font-body leading-loose">
          <span className="text-2xl font-bold text-heading md:text-[32px]">{name}</span>
          <span className="text-xl font-medium text-ink/40 md:text-2xl">{subtitle}</span>
        </span>
        {period && <span className="text-base font-medium tracking-[0.32px] text-muted/50">{period}</span>}
      </span>
    </>
  )
  const className = 'group flex flex-col gap-6'
  return to ? (
    <Link to={to} className={className}>
      {body}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {body}
    </a>
  )
}

// Illustrated Eagle with a "contact me" speech bubble.
export function MascotBubble({ className = '' }) {
  return (
    <div className={`flex-col items-center justify-end ${className}`}>
      <div className="relative flex w-[230px] flex-col items-center pb-[24px] md:w-[300px] md:pb-[30px] xl:w-[398px]">
        <img src={asset('works/bubble.svg')} alt="" className="absolute inset-x-0 top-0 w-full" />
        <p className="relative py-4 text-center font-roboto text-sm leading-normal md:py-6 md:text-xl font-bold tracking-[1.37px] text-[#5a646a] xl:py-8 xl:text-[27px]">
          如果你對我的作品有興趣
          <br />
          歡迎隨時聯繫我！
        </p>
      </div>
      <img src={asset('works/mascot.png')} alt="Eagle 的插畫角色" className="w-[160px] md:w-[240px] xl:w-[318px]" loading="lazy" />
    </div>
  )
}
