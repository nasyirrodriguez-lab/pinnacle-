import { cn } from '@/lib/utils'
import { Reveal } from '@/components/marketing/reveal'

export function EyebrowDot({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-turf',
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-turf" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionTitle({
  lines,
  id,
  className,
}: {
  lines: readonly string[]
  id?: string
  className?: string
}) {
  return (
    <h2
      id={id}
      className={cn(
        'heading-display mt-5 text-4xl sm:text-5xl md:text-6xl',
        className
      )}
    >
      {lines.map((line, i) => (
        <Reveal key={line} as="span" delay={i * 110} className="block">
          {line}
        </Reveal>
      ))}
    </h2>
  )
}
