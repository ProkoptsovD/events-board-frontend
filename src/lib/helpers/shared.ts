export const isElementOverflowing = (element: HTMLElement | null) => {
  const overflowSide = {
    left: false,
    top: false,
    bottom: false,
    right: false,
  };

  if (!element) {
    return overflowSide;
  }

  const { top, left, right, bottom } = element.getBoundingClientRect();

  overflowSide.top = top < 0;
  overflowSide.left = left < 0;
  overflowSide.bottom = bottom > (window.innerHeight || document.documentElement.clientHeight);
  overflowSide.right = right > (window.innerWidth || document.documentElement.clientWidth);

  return overflowSide;
};

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
