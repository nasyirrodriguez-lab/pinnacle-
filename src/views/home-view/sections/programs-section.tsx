import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/marketing/reveal'
import { SectionTitle, EyebrowDot } from './shared'
import type { HomeContent } from '@/content/home'

export function ProgramsSection({
  programs,
}: {
  programs: HomeContent['programs']
}) {
  return (
    <section
      id="programs"
      aria-labelledby="programs-title"
      className="rounded-card bg-bronze/40 px-6 py-16 sm:px-10 sm:py-20"
    >
      <EyebrowDot>{programs.eyebrow}</EyebrowDot>
      <SectionTitle id="programs-title" lines={programs.title} />

      <ol className="mt-10 border-t border-bronze-line">
        {programs.items.map((p, i) => (
          <Reveal as="li" key={p.index} delay={i * 90}>
            <Link
              href={p.href}
              className="group flex items-center gap-6 border-b border-bronze-line py-7 transition-colors hover:bg-bronze/60 sm:gap-10 sm:px-2"
            >
              <span className="w-8 shrink-0 font-stat text-sm text-ice-mute">
                {p.index}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-heading text-xl font-bold uppercase tracking-tight sm:text-2xl">
                  {p.name}
                </span>
                <span className="mt-1 block text-sm text-ice-dim">
                  {p.description}
                </span>
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-bronze-line text-ice-dim transition group-hover:border-turf group-hover:bg-turf group-hover:text-turf-ink">
                <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
