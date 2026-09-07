'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: 'div' | 'section' | 'article' | 'figure' | 'li' | 'span'
  delay?: number
  from?: 'up' | 'down' | 'scale' | 'none'
}

const HIDDEN: Record<NonNullable<Props['from']>, string[]> = {
  up: ['opacity-0', 'translate-y-8'],
  down: ['opacity-0', '-translate-y-8'],
  scale: ['opacity-0', 'scale-90'],
  none: ['opacity-0'],
}

// Reveal-on-scroll with plain CSS transitions. Server output is fully
// visible so nothing depends on JS to be readable; on the client the
// element is hidden just before it enters the viewport and released by
// an IntersectionObserver. Classes are toggled on the DOM node directly
// so the component never re-renders.
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  from = 'up',
  className,
  style,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const hidden = HIDDEN[from]
    el.classList.add(...hidden)
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.remove(...hidden)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [from])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element = Tag as any
  return (
    <Element
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]',
        className
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Element>
  )
}
