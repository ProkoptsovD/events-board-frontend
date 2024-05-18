import "@/lib/css/bg-patterns.css";

import { randomNumber } from "@/lib/helpers/shared";
import { BG_PATTERNS_CSS_CLASSES } from "@/lib/const";

export const useBgPattern = (name?: (typeof BG_PATTERNS_CSS_CLASSES)[number]) => {
  if (name) {
    const nameIndex = BG_PATTERNS_CSS_CLASSES.indexOf(name);

    return BG_PATTERNS_CSS_CLASSES[nameIndex];
  }

  const randomIndex = randomNumber(0, BG_PATTERNS_CSS_CLASSES.length);
  const patternCssClass = BG_PATTERNS_CSS_CLASSES[randomIndex];

  return patternCssClass;
};
