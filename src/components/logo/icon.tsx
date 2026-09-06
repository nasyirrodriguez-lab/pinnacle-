import { cn } from '@/lib/utils'

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number
}

// Pinnacle mark (public/pinnacle-mark.svg): a peak with a flag planted
// on it. The file is black on transparent, so it is drawn through a CSS
// mask and takes the current text colour — text-ice, text-turf, etc.
const MARK_RATIO = 696 / 1253

export default function Icon({
  size = 32,
  className,
  style,
  ...props
}: IconProps) {
  return (
    <span
      role="img"
      aria-label="Pinnacle Fitness"
      className={cn('inline-block shrink-0 bg-current', className)}
      style={{
        width: Math.round(size * MARK_RATIO),
        height: size,
        maskImage: 'url(/pinnacle-mark.svg)',
        WebkitMaskImage: 'url(/pinnacle-mark.svg)',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        ...style,
      }}
      {...props}
    />
  )
}
