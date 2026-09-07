// Home page content. Copy comes from the previous pinnaclefitnesstt site
// and the gym's Instagram; photos are editorial stand-ins until the gym
// supplies its own (see public/images/gym/README).

export const HOME = {
  hero: {
    title: 'Train with us',
    tagline: ['Show up.', 'Put in the work.'],
    image: '/images/gym/hero-turf.jpg',
    imageAlt:
      'The turf strip at Pinnacle Fitness under the covered roof at dusk',
    cards: [
      {
        eyebrow: 'Small-group PT',
        title: 'Coached, up to 6',
        cta: 'See programs',
        href: '/programs',
        image: '/images/gym/coach-rack.jpg',
        imageAlt: 'A coach guiding a member at the squat rack',
      },
      {
        eyebrow: 'Open gym',
        title: 'Weights, machines, turf',
        cta: 'How it works',
        href: '/programs#open-gym',
        image: '/images/gym/weight-floor.jpg',
        imageAlt: 'Dumbbell racks and a squat rack on the weight floor',
      },
      {
        eyebrow: 'Saturday bootcamp',
        title: 'The community session',
        cta: 'Come try one',
        href: '/apply',
        image: '/images/gym/bootcamp.jpg',
        imageAlt: 'Members on air bikes on the turf during bootcamp',
      },
    ],
    stat: {
      value: '5:30',
      caption: 'Doors open, Mon to Fri',
      image: '/images/gym/dumbbells.jpg',
      imageAlt: 'Hex dumbbells beside the turf',
    },
  },
  trust: {
    circle: { value: '1:6', caption: 'Coach to member, every session' },
    badge: {
      index: '#01',
      title: 'Not a first gym',
      body: 'Sessions are coached and progressive, so we look for people who already train and want to be pushed further. Membership is by application.',
    },
    slides: [
      {
        name: 'Coached small groups',
        role: 'Up to 6 per session, Nasyir or Matthew',
        image: '/images/gym/coach-rack.jpg',
        imageAlt: 'A coach at the squat rack with a member',
        headline: ['Direct', 'Coached', 'Small', 'Groups'],
      },
      {
        name: 'Strength and sport',
        role: 'Structured programming, not just effort',
        image: '/images/gym/sandbag.jpg',
        imageAlt: 'Athlete carrying a sandbag down the turf',
        headline: ['Strength', 'Sport', 'Built', 'Around'],
      },
      {
        name: 'The community',
        role: 'The secret to consistency',
        image: '/images/gym/bootcamp.jpg',
        imageAlt: 'Bootcamp on the turf',
        headline: ['Come', 'Train', 'Stay', 'People'],
      },
    ],
  },
  programs: {
    eyebrow: 'Programs',
    title: ['Train with', 'intention.'],
    items: [
      {
        index: '01',
        name: 'Strength Training',
        description:
          'Progressive, structured, coached. Real muscle, real confidence, a real habit.',
        href: '/programs#strength',
      },
      {
        index: '02',
        name: 'Sport Specific Performance',
        description:
          'Precision work for competitive athletes, built around your sport and position.',
        href: '/programs#sport',
      },
      {
        index: '03',
        name: 'Bootcamps',
        description:
          'High-energy group sessions on the turf. You push because the person next to you is pushing.',
        href: '/programs#bootcamps',
      },
      {
        index: '04',
        name: 'Open Gym',
        description:
          'Your schedule, your pace. Weights, machines and turf whenever we are open.',
        href: '/programs#open-gym',
      },
    ],
  },
  facilities: {
    icon: '/images/gym/dumbbells.jpg',
    iconAlt: 'Hex dumbbells on the floor',
    title: ['Outdoor.', 'Covered.', 'Built to train.'],
    body: 'Open skies at the edges, a roof over the floor. A full weight floor, machines, and a dedicated turf strip at The Playground on Western Main Road.',
    tiles: [
      {
        name: 'The turf',
        description:
          'Sleds, carries, sprints and bootcamp. The green strip down the middle of everything.',
        image: '/images/gym/turf-night.jpg',
        imageAlt: 'The turf strip under the roof at night',
        tone: 'turf',
      },
      {
        name: 'The weight floor',
        description:
          'Racks, free weights and plate-loaded machines on either side of the turf.',
        image: '/images/gym/weight-floor.jpg',
        imageAlt: 'Dumbbell racks and machines on the weight floor',
        tone: 'bronze',
      },
    ],
  },
  stats: {
    eyebrow: 'By the numbers',
    title: ['Small', 'by design.'],
    items: [
      { value: '2', label: 'Head coaches' },
      { value: '6', label: 'Max per session' },
      { value: '20', label: 'Person floor cap' },
      { value: '5:30', label: 'AM opening, weekdays' },
    ],
  },
  code: {
    eyebrow: 'The Member Code',
    title: ['How we', 'train here.'],
    lines: [
      'Respect the equipment. Re-rack what you use.',
      'Respect people’s space and their time.',
      'No filming other members.',
      'Show up for what you book, or cancel in time.',
      'Leave the floor better than you found it.',
    ],
  },
  closing: {
    eyebrow: 'Get started',
    title: ['Come train', 'with us.'],
    body: 'Apply, meet a coach at an intro session, pick a plan. The fastest way to know if this place is for you is to be in it.',
    cta: { label: 'Apply to join', href: '/apply' },
  },
} as const

export type HomeContent = typeof HOME
