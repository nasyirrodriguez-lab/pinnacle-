export const GOALS = ['strength', 'lean', 'performance', 'health'] as const
export type Goal = (typeof GOALS)[number]
