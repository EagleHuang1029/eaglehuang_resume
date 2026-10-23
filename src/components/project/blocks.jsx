import { BlockTitle, Figure, IconTitle, Panel, SectionHeading, TextItem } from './parts.jsx'

export function AboutProject({ about }) {
  return (
    <section className="flex flex-col gap-6">
      <SectionHeading>關於專案</SectionHeading>
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Panel>
            <IconTitle icon="target">目標</IconTitle>
            <ol className="list-decimal ps-[30px] font-body text-base leading-loose tracking-[2px] text-muted md:ps-[70px] md:text-base">
              {about.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ol>
          </Panel>
          <Panel className="flex-1">
            <IconTitle icon="fire">挑戰</IconTitle>
            <div className="flex flex-col gap-2 md:pl-10">
              {about.challenges.map((c) => (
                <TextItem key={c.title} {...c} />
              ))}
            </div>
          </Panel>
        </div>
        <Panel className="bg-[#f8fcff]/90 dark:bg-white/10">
          <IconTitle icon="solve">解決方案</IconTitle>
          <div className="flex flex-col gap-2 md:pr-3 md:pl-10">
            {about.solutions.map((s) => (
              <TextItem key={s.title} {...s} />
            ))}
          </div>
        </Panel>
      </div>
    </section>
  )
}

function PanelBlock({ heading, icon, title, columns = [], full = [], large }) {
  return (
    <section className="flex flex-col gap-6">
      {heading && <SectionHeading>{heading}</SectionHeading>}
      <Panel className="gap-6">
        {title && <IconTitle icon={icon}>{title}</IconTitle>}
        {columns.length > 0 && (
          <div className="grid gap-6 md:pl-10 xl:grid-cols-2 xl:gap-10">
            {columns.map((c) => (
              <TextItem key={c.title} {...c} large={large} />
            ))}
          </div>
        )}
        {full.map((c) => (
          <div key={c.title} className="md:pl-10">
            <TextItem {...c} large={large} />
          </div>
        ))}
      </Panel>
    </section>
  )
}

function FeatureBlock({ title, items, figures, reverse }) {
  const text = (
    <div className="flex flex-col gap-8 xl:w-[574px] xl:shrink-0">
      {title && <BlockTitle>{title}</BlockTitle>}
      {items.map((it) => (
        <div key={it.title} className="font-body tracking-[2px]">
          <h3 className="text-xl leading-loose font-bold text-heading md:text-2xl">{it.title}</h3>
          <p className="text-base leading-loose text-muted md:text-base">{it.body}</p>
        </div>
      ))}
    </div>
  )
  const figs = (
    <div className="grid flex-1 grid-cols-2 items-end gap-4 md:gap-10">
      {figures.map((f) => (
        <Figure key={f.src} {...f} className={f.wide ? 'col-span-2' : ''} />
      ))}
    </div>
  )
  return (
    <section className={`flex flex-col gap-10 xl:items-center xl:gap-[60px] ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}>
      {text}
      {figs}
    </section>
  )
}

function StepsBlock({ title, items, figure }) {
  return (
    <section className="flex flex-col gap-8">
      <BlockTitle>{title}</BlockTitle>
      <div className="grid gap-6 xl:grid-cols-2 xl:gap-x-12">
        {items.map((it) => (
          <div key={it.title} className={it.wide ? 'xl:col-span-2' : ''}>
            <TextItem {...it} titleClass="text-ink" />
          </div>
        ))}
      </div>
      <Figure {...figure} />
    </section>
  )
}

function DesignSystemBlock({ title, heading, images }) {
  const [first, second, ...rest] = images
  return (
    <section className="flex flex-col gap-6">
      {heading ? <SectionHeading>{heading}</SectionHeading> : <BlockTitle>{title}</BlockTitle>}
      <div className="grid gap-6 xl:grid-cols-[475fr_817fr]">
        <Figure {...first} />
        <Figure {...second} />
      </div>
      {rest.map((img) => (
        <Figure key={img.src} {...img} />
      ))}
    </section>
  )
}

function FigureBlock({ title, src, alt }) {
  return (
    <section className="flex flex-col gap-6">
      {title && <BlockTitle>{title}</BlockTitle>}
      <Figure src={src} alt={alt} />
    </section>
  )
}

function GalleryBlock({ images }) {
  return (
    <section className="grid gap-6 md:grid-cols-2 min-[1440px]:-mx-[54px]">
      {images.map((img) => (
        <Figure key={img.src} {...img} />
      ))}
    </section>
  )
}

function FlowNode({ children }) {
  return (
    <span className="flex min-h-[72px] items-center justify-center rounded-2xl bg-white/65 px-6 py-3 text-center font-display text-lg font-bold text-ink shadow-[inset_2px_2px_4px_0_rgb(255_255_255/0.25)] md:min-h-[104px] md:text-2xl dark:bg-white/10">
      {children}
    </span>
  )
}

function FlowArrow() {
  return <span aria-hidden className="mx-auto h-10 w-px bg-ink/40 md:h-[80px]" />
}

function FlowBlock({ flows }) {
  return (
    <section className="grid gap-12 md:grid-cols-2">
      {flows.map((flow) => (
        <div key={flow.title} className="flex flex-col">
          <h3 className="mb-8 text-center font-display text-2xl font-bold text-ink md:text-[32px]">{flow.title}</h3>
          <div className="grid grid-cols-2 gap-2">
            {flow.start.map((s) => (
              <FlowNode key={s}>{s}</FlowNode>
            ))}
          </div>
          {flow.steps.map((step) => (
            <div key={step} className="flex flex-col">
              <FlowArrow />
              <FlowNode>{step}</FlowNode>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

function StatsBlock({ icon, title, items }) {
  return (
    <Panel className="gap-6 bg-[#f8fcff]/90 dark:bg-white/10">
      <IconTitle icon={icon}>{title}</IconTitle>
      <dl className="grid grid-cols-2 gap-6 md:pl-10 xl:grid-cols-4">
        {items.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-1 font-body">
            <dt className="text-base tracking-[2px] text-muted md:text-base">{s.label}</dt>
            <dd className="font-display text-4xl font-extrabold text-accent md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  )
}

const BLOCKS = {
  panel: PanelBlock,
  feature: FeatureBlock,
  steps: StepsBlock,
  designSystem: DesignSystemBlock,
  figure: FigureBlock,
  gallery: GalleryBlock,
  flow: FlowBlock,
  stats: StatsBlock,
}

export function ProjectSection({ section }) {
  const Block = BLOCKS[section.type]
  return <Block {...section} />
}
