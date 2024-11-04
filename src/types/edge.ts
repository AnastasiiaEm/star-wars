export enum EdgeType {
  DEFAULT = 'default',
  STRAIGHT = 'straight',
  STEP = 'step',
  SMOOTHSTEP = 'smoothstep',
  CUSTOM = 'custom',
}
export type Edge = {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
  animated: boolean;
  className: string;
};