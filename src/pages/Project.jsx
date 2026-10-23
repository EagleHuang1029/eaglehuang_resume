import { useParams } from 'react-router'

// Placeholder: case-study pages (專案一 / 專案二) will be built from Figma.
export default function Project() {
  const { slug } = useParams()
  return (
    <section className="py-16">
      <h1 className="font-display text-4xl font-extrabold md:text-6xl">專案：{slug}</h1>
    </section>
  )
}
