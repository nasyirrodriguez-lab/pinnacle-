import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/marketing/reveal'
import { SectionTitle, EyebrowDot } from './shared'
import type { HomeContent } from '@/content/home'

export function ClosingSection({
  closing,
}: {
  closing: HomeContent['closing']
}) {
  return (
    <section
      aria-labelledby="closing-title"
      className="rounded-card bg-turf px-6 py-16 text-turf-ink sm:px-10 sm:py-20"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <EyebrowDot className="text-turf-ink [&>span]:bg-turf-ink">
            {closing.eyebrow}
          </EyebrowDot>
          <SectionTitle id="closing-title" lines={closing.title} />
          <Reveal delay={200}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-turf-ink/80">
              {closing.body}
            </p>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <Link
            href={closing.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-ground px-7 py-4 text-sm font-bold uppercase tracking-wide text-ice transition hover:bg-bronze"
          >
            {closing.cta.label} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
