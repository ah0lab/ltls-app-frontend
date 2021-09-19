const TIP_CATEGORY = {
  APP: 0,
  PARENT: 1,
  HEARING: 2
} as const;

export type TIP_CATEGORIES = typeof TIP_CATEGORY[keyof typeof TIP_CATEGORY];
