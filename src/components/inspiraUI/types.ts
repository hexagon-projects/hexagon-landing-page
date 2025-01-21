export const ORBIT_DIRECTION = {
  Clockwise: "normal",
  CounterClockwise: "reverse"
} as const;

export interface Props {
  direction?: typeof ORBIT_DIRECTION[keyof typeof ORBIT_DIRECTION];
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  class?: string;
} 