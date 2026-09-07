import { Reveal } from '@/components/marketing/reveal'
import { SectionTitle, EyebrowDot } from './shared'
import type { HomeContent } from '@/content/home'

export function StatsSection({ stats }: { stats: HomeContent['stats'] }) {
  return (
    <section
      aria-labelledby="stats-title"
      className="rounded-card bg-bronze px-6 py-16 text-ice sm:px-10 sm:py-20"
    >
      <EyebrowDot>{stats.eyebrow}</EyebrowDot>
      <SectionTitle id="stats-title" lines={stats.title} />
      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {stats.items.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 100}
            className="border-t border-ice/15 pt-6"
          >
            <dd className="font-stat text-5xl leading-none text-turf sm:text-6xl">
              {s.value}
            </dd>
            <dt className="mt-3 text-xs text-ice-dim">{s.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
