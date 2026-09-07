import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/marketing/reveal'
import { SectionTitle } from './shared'
import type { HomeContent } from '@/content/home'

export function FacilitiesSection({
  facilities,
}: {
  facilities: HomeContent['facilities']
}) {
  return (
    <section
      id="facilities"
      aria-labelledby="facilities-title"
      className="px-6 pb-20 pt-16 sm:px-10"
    >
      <div className="grid items-end gap-10 md:grid-cols-2">
        <div className="max-w-sm">
          <Reveal
            as="span"
            from="scale"
            className="relative block size-16 overflow-hidden rounded-card"
          >
            <Image
              src={facilities.icon}
              alt={facilities.iconAlt}
              fill
              sizes="64px"
              className="object-cover"
            />
          </Reveal>
          <SectionTitle
            id="facilities-title"
            lines={facilities.title}
            className="mt-6 text-4xl sm:text-5xl md:text-5xl"
          />
          <Reveal delay={250}>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ice-dim">
              {facilities.body}
            </p>
          </Reveal>
        </div>

        <div className="flex items-end gap-5">
          {facilities.tiles.map((tile, i) => (
            <Reveal
              as="figure"
              key={tile.name}
              delay={i * 140}
              className={cn('flex-1', i === 1 && 'mb-8')}
            >
              <div className="group relative block aspect-[3/4] overflow-hidden rounded-card bg-bronze">
                <Image
                  src={tile.image}
                  alt={tile.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 20rem"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption
                  className={cn(
                    'absolute inset-x-3 bottom-3 rounded-xl px-4 py-3 backdrop-blur-md',
                    tile.tone === 'turf'
                      ? 'bg-turf/75 text-turf-ink'
                      : 'bg-ground/60 text-ice'
                  )}
                >
                  <span className="block text-sm font-semibold">
                    {tile.name}
                  </span>
                  <span className="mt-0.5 block text-[0.65rem] leading-snug opacity-85">
                    {tile.description}
                  </span>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
