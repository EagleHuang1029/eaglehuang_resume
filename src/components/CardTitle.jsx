import { asset } from '../lib/asset.js'

// Card heading with the feather-pen mark, e.g. 工作經驗 / 設計工具.
export default function CardTitle({ children }) {
  return (
    <h3 className="flex items-center gap-3 font-display text-2xl leading-normal font-extrabold text-ink md:text-[40px] md:leading-[1.5]">
      <img src={asset('icons/feather-pen.svg')} alt="" className="size-6 -scale-x-100 md:size-8" />
      {children}
    </h3>
  )
}
