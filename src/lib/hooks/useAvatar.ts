import { ANIMALS_LIST } from "@/lib/const";

export const useAvatar = () => {
  const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  const randomIndex = Math.floor(Math.random() * (ANIMALS_LIST.length - 0) + 0);
  const name = ANIMALS_LIST[randomIndex];

  const src = `/assets/animals/${name}.png`;

  return { src, name, color: randomColor };
};
