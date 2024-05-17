import "@/lib/css/bg-patterns.css";

import { randomNumber } from "@/lib/helpers/shared";
import { BG_PATTERNS_CSS_CLASSES } from "@/lib/const";

export const useBgPattern = () => {
  const randomIndex = randomNumber(0, BG_PATTERNS_CSS_CLASSES.length);
  const patternCssClass = BG_PATTERNS_CSS_CLASSES[randomIndex];

  return patternCssClass;
};
