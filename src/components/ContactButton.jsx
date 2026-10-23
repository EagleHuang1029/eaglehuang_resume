import { CONTACT_EMAIL } from '../data/site.js'
import { asset } from '../lib/asset.js'

export default function ContactButton({ className = '' }) {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-button font-black tracking-[0.32px] text-page transition hover:bg-ink-strong ${className}`}
    >
      <img src={asset('icons/mail.svg')} alt="" className="size-6" />
      與我聯繫
    </a>
  )
}
