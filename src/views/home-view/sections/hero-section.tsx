'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/marketing/reveal'
import type { HomeContent } from '@/content/home'

export function HeroSection({ hero }: { hero: HomeContent['hero'] }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[34rem] h-[calc(100svh-4.5rem)] max-h-[56rem] flex-col overflow-hidden rounded-card bg-bronze text-ice"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ground/70 via-ground/25 to-ground/85" />
      </div>

      <div className="px-6 pt-8 sm:px-10 sm:pt-10">
        <h1
          id="hero-title"
          className="heading-display text-[13vw] leading-[0.85] sm:text-[11vw] lg:text-[9.5vw]"
        >
          {hero.title.split(' ').map((word, i) => (
            <span
              key={word}
              className="inline-block animate-[rise_1.1s_cubic-bezier(0.16,1,0.3,1)_both] pr-[0.22em] last:pr-0"
              style={{ animationDelay: `${120 + i * 140}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

      <div className="mt-auto flex flex-col items-start gap-6 px-6 pb-6 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:pb-10">
        <p className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ice/90 sm:text-4xl">
          {hero.tagline.map((line, i) => (
            <span
              key={line}
              className="block animate-[rise_0.9s_cubic-bezier(0.16,1,0.3,1)_both]"
              style={{ animationDelay: `${420 + i * 110}ms` }}
            >
              {line}
            </span>
          ))}
        </p>

        <div className="flex w-full items-end gap-4 sm:w-auto">
          <CardSlider cards={hero.cards} />
          <StatCard stat={hero.stat} />
        </div>
      </div>
    </section>
  )
}

function CardSlider({ cards }: { cards: HomeContent['hero']['cards'] }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % cards.length), 3800)
    return () => clearInterval(id)
  }, [cards.length])
  const card = cards[index]

  return (
    <Reveal delay={650} className="hidden w-64 flex-col gap-3 md:flex">
      <Link
        key={card.title}
        href={card.href}
        className="flex items-center gap-3 rounded-card border border-ice/15 bg-ice/10 p-3 shadow-lg shadow-ground/30 backdrop-blur-md transition-colors hover:bg-ice/15 animate-[rise_0.6s_cubic-bezier(0.16,1,0.3,1)_both]"
      >
        <span className="relative aspect-square w-14 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={card.image}
            alt={card.imageAlt}
            fill
            sizes="56px"
            className="object-cover"
          />
        </span>
        <span className="min-w-0">
          <span className="block text-[0.7rem] font-bold uppercase tracking-wide text-turf">
            {card.eyebrow}
          </span>
          <span className="block text-[0.75rem] uppercase text-ice/85">
            {card.title}
          </span>
          <span className="mt-1 inline-flex items-center gap-1 text-[0.65rem] underline underline-offset-2 opacity-90">
            {card.cta} <ArrowUpRight size={10} />
          </span>
        </span>
      </Link>
      <div className="flex items-center gap-1.5 pl-1" aria-label="Featured">
        {cards.map((c, i) => (
          <button
            key={c.title}
            type="button"
            aria-label={`Show ${c.title}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              'h-1.5 rounded-full transition-all',
              i === index ? 'w-6 bg-ice' : 'w-1.5 bg-ice/40 hover:bg-ice/70'
            )}
          />
        ))}
      </div>
    </Reveal>
  )
}

function StatCard({ stat }: { stat: HomeContent['hero']['stat'] }) {
  return (
    <Reveal
      as="article"
      delay={780}
      className="flex w-full max-w-xs items-stretch gap-3 rounded-card border border-ice/15 bg-ice/10 p-3 shadow-lg shadow-ground/30 backdrop-blur-md sm:w-60"
    >
      <span className="flex flex-col justify-between">
        <span className="font-stat text-3xl leading-none">{stat.value}</span>
        <span className="flex -space-x-2">
          {['bg-turf', 'bg-ice', 'bg-bronze-raised', 'bg-turf-deep'].map(
            (c) => (
              <span
                key={c}
                className={cn('size-5 rounded-full border border-ground/60', c)}
              />
            )
          )}
        </span>
        <span className="mt-2 text-[0.65rem] leading-tight text-ice/80">
          {stat.caption}
        </span>
      </span>
      <span className="relative ml-auto aspect-[3/4] w-16 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={stat.image}
          alt={stat.imageAlt}
          fill
          sizes="64px"
          className="object-cover"
        />
      </span>
    </Reveal>
  )
}
