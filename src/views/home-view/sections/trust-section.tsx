'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/marketing/reveal'
import type { HomeContent } from '@/content/home'

export function TrustSection({ trust }: { trust: HomeContent['trust'] }) {
  const [index, setIndex] = useState(0)
  const slides = trust.slides
  const slide = slides[index]
  const [a, b, c, d] = slide.headline
  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  return (
    <section
      aria-labelledby="trust-title"
      className="relative isolate overflow-hidden px-6 py-16 sm:px-10 sm:py-20"
    >
      <div className="relative z-20 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <Reveal
          from="scale"
          className="grid size-28 shrink-0 place-items-center rounded-full bg-bronze text-center sm:size-32"
        >
          <span>
            <span className="block font-stat text-2xl text-turf">
              {trust.circle.value}
            </span>
            <span className="mx-auto mt-1 block max-w-[8em] text-[0.6rem] leading-tight text-ice-dim">
              {trust.circle.caption}
            </span>
          </span>
        </Reveal>

        <Reveal
          as="article"
          delay={120}
          className="flex max-w-md gap-4 rounded-card bg-bronze p-5 sm:gap-5 sm:p-6"
        >
          <span className="h-fit rounded-xl bg-ground px-4 py-2 font-stat text-xl text-turf">
            {trust.badge.index}
          </span>
          <span>
            <span className="block font-heading text-lg font-bold uppercase tracking-tight">
              {trust.badge.title}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-ice-dim">
              {trust.badge.body}
            </span>
          </span>
        </Reveal>
      </div>

      <h2
        id="trust-title"
        aria-label={slide.headline.join(' ')}
        className="heading-display pointer-events-none relative z-0 mx-auto mt-12 max-w-[88rem] select-none text-[7vw] leading-[1.02]"
      >
        <span
          className="flex items-baseline justify-between"
          aria-hidden="true"
        >
          <GhostWord key={a} word={a} tone="ghost" />
          <GhostWord key={b} word={b} tone="ghost" />
        </span>
        <span
          className="flex items-baseline justify-between"
          aria-hidden="true"
        >
          <GhostWord key={c} word={c} tone="ink" />
          <GhostWord key={d} word={d} tone="ghost" />
        </span>
      </h2>

      <div className="pointer-events-none relative z-10 mx-auto mt-8 w-52 sm:absolute sm:left-1/2 sm:top-1/2 sm:mt-0 sm:w-64 sm:-translate-x-1/2 sm:-translate-y-1/2">
        <Reveal as="figure" className="pointer-events-auto">
          <span className="block rotate-[6deg]">
            <span
              key={slide.name}
              className="relative block aspect-[3/4] overflow-hidden rounded-card bg-bronze shadow-2xl shadow-ground/60 animate-[rise_0.6s_cubic-bezier(0.16,1,0.3,1)_both]"
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                sizes="(max-width: 640px) 13rem, 16rem"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-3 bottom-3 rounded-xl bg-ground/55 px-3 py-2 text-ice backdrop-blur-md">
                <span className="block text-sm font-semibold">
                  {slide.name}
                </span>
                <span className="block text-[0.65rem] text-ice-dim">
                  {slide.role}
                </span>
              </figcaption>
            </span>
          </span>
        </Reveal>
      </div>

      <div className="relative z-20 mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="grid size-11 place-items-center rounded-full border border-bronze-line text-ice transition-colors hover:bg-bronze"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-label={`Show ${s.name}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === index ? 'w-6 bg-ice' : 'w-1.5 bg-ice/30 hover:bg-ice/60'
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="grid size-11 place-items-center rounded-full bg-turf text-turf-ink transition hover:brightness-110"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}

function GhostWord({ word, tone }: { word: string; tone: 'ghost' | 'ink' }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <span
        className={cn(
          'block animate-[rise_0.7s_cubic-bezier(0.16,1,0.3,1)_both] whitespace-nowrap',
          tone === 'ink' ? 'text-ice' : 'text-bronze-raised/60'
        )}
      >
        {word}
      </span>
    </span>
  )
}
