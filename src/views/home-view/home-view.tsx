import { HOME } from '@/content/home'
import { HeroSection } from './sections/hero-section'
import { TrustSection } from './sections/trust-section'
import { ProgramsSection } from './sections/programs-section'
import { FacilitiesSection } from './sections/facilities-section'
import { StatsSection } from './sections/stats-section'
import { CodeSection } from './sections/code-section'
import { ClosingSection } from './sections/closing-section'

export default function HomeView() {
  return (
    <div className="w-full overflow-x-clip bg-ground p-2 sm:p-3">
      <HeroSection hero={HOME.hero} />
      <TrustSection trust={HOME.trust} />
      <ProgramsSection programs={HOME.programs} />
      <FacilitiesSection facilities={HOME.facilities} />
      <StatsSection stats={HOME.stats} />
      <CodeSection code={HOME.code} />
      <ClosingSection closing={HOME.closing} />
    </div>
  )
}
