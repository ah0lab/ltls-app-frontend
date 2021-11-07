export const INTERACTION_TYPE = {
  SOUND: 0,
  VIDEO: 1
} as const;

export type LTLS_INTERACTION_TYPE =
  typeof INTERACTION_TYPE[keyof typeof INTERACTION_TYPE];
