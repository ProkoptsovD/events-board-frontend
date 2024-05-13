import Image from "next/image";
import t from "../../../public/assets/icons/image.png";

type EvenCardPosterProps = {
  width?: number;
  height?: number;
};

export default function EvenCardPoster({ width, height }: EvenCardPosterProps) {
  return (
    <div className="relative w-full h-full">
      <Image src={t} alt="poster" priority width={width} height={height} className="mx-auto" />
    </div>
  );
}
