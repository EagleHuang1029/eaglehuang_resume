import { useState } from 'react'
import { asset } from '../../lib/asset.js'
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

function PanelBlock({ heading, icon, title, columns = [], full = [], large, largeTitle }) {
  return (
    <section className="flex flex-col gap-6">
      {heading && <SectionHeading>{heading}</SectionHeading>}
      <Panel className="gap-6">
        {title && <IconTitle icon={icon}>{title}</IconTitle>}
        {columns.length > 0 && (
          <div className="grid gap-6 md:pl-10 xl:grid-cols-2 xl:gap-10">
            {columns.map((c) => (
              <TextItem key={c.title} {...c} large={large} largeTitle={largeTitle} />
            ))}
          </div>
        )}
        {full.map((c) => (
          <div key={c.title} className="md:pl-10">
            <TextItem {...c} large={large} largeTitle={largeTitle} />
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
    <section
      className={`flex flex-col gap-10 xl:items-center xl:gap-[60px] ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}
    >
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
            <TextItem {...it} titleClass="text-xl text-heading md:text-2xl" />
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

// Before/after mockups stacked on top of each other; dragging the handle reveals more of either side.
function CompareBlock({ before, after }) {
  const [pos, setPos] = useState(50)
  const label =
    'pointer-events-none absolute top-2 font-display text-xl font-bold text-heading transition-opacity md:top-4 md:text-4xl'
  return (
    // One wrapper so the scroll reveal animates the stack as a whole, not each layer.
    <section>
      <div className="relative select-none">
        <img
          src={asset(after.src)}
          alt={after.alt}
          className="block w-full"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
        <img
          src={asset(before.src)}
          alt={before.alt}
          className="absolute inset-0 size-full"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
        <span aria-hidden className={`${label} left-[4%]`} style={{ opacity: pos < 18 ? 0 : 1 }}>
          Before
        </span>
        <span aria-hidden className={`${label} right-[4%]`} style={{ opacity: pos > 82 ? 0 : 1 }}>
          After
        </span>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-button"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid size-10 -translate-1/2 place-items-center rounded-full bg-button text-lg text-white shadow-lg md:size-12">
            ⇔
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="0.5"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="拖曳比較改版前（左）與改版後（右）"
          className="absolute inset-0 size-full cursor-ew-resize touch-pan-y opacity-0"
        />
      </div>
    </section>
  )
}

// Before/after flow charts, exported from Figma with transparent backgrounds and dark text.
function FlowBlock({ flows }) {
  return (
    <section className="grid gap-12 md:grid-cols-2">
      {flows.map((f) => (
        <img
          key={f.src}
          src={asset(f.src)}
          alt={f.alt}
          className="w-full dark:rounded-3xl dark:bg-[#e7eff6] dark:p-6"
          loading="lazy"
          decoding="async"
        />
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
            <dd className="font-display text-[32px] font-extrabold text-accent md:text-[40px]">{s.value}</dd>
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
  compare: CompareBlock,
  flow: FlowBlock,
  stats: StatsBlock,
}

export function ProjectSection({ section }) {
  const Block = BLOCKS[section.type]
  return <Block {...section} />
}
