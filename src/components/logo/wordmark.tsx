import { cn } from '@/lib/utils'

interface WordmarkProps {
  width?: number
  className?: string
}

// Pinnacle wordmark (public/pinnacle-logo.svg): the mark over PINNACLE
// FITNESS. Black on transparent, so it is drawn through a CSS mask and
// takes the current text colour. Defaults to ice; pass text-* to change.
const WORDMARK_RATIO = 1505 / 3143

export default function Wordmark({ width = 160, className }: WordmarkProps) {
  const height = Math.round(width * WORDMARK_RATIO)
  return (
    <span
      role="img"
      aria-label="Pinnacle Fitness"
      className={cn('block select-none bg-current text-ice', className)}
      style={{
        width,
        height,
        maskImage: 'url(/pinnacle-logo.svg)',
        WebkitMaskImage: 'url(/pinnacle-logo.svg)',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  )
}
