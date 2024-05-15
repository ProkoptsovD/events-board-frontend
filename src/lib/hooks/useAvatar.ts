import { ANIMALS_LIST } from "@/lib/const";

export const useAvatar = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomIndex = Math.floor(Math.random() * ANIMALS_LIST.length);
  const name = ANIMALS_LIST[randomIndex];

  const src = `/assets/animals/${name}.png`;

  return { src, name, color: randomColor };
};
