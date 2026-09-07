import { Reveal } from '@/components/marketing/reveal'
import { SectionTitle, EyebrowDot } from './shared'
import type { HomeContent } from '@/content/home'

export function CodeSection({ code }: { code: HomeContent['code'] }) {
  return (
    <section
      aria-labelledby="code-title"
      className="px-6 py-16 sm:px-10 sm:py-20"
    >
      <EyebrowDot>{code.eyebrow}</EyebrowDot>
      <SectionTitle id="code-title" lines={code.title} />
      <p className="mt-5 max-w-md text-sm text-ice-dim">
        Everyone who joins agrees to it. It is short on purpose.
      </p>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {code.lines.map((line, i) => (
          <Reveal
            as="li"
            key={line}
            delay={i * 80}
            className="flex flex-col justify-between gap-8 rounded-card bg-bronze p-6"
          >
            <span className="font-stat text-3xl text-turf">0{i + 1}</span>
            <span className="text-base leading-snug">{line}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
