import Image from "next/image";
import fallback from "../../../public/assets/icons/image.png";

type EvenCardPosterProps = {
  width?: number;
  height?: number;
  src: string | null;
};

export default function EvenCardPoster({ src, width, height }: EvenCardPosterProps) {
  return (
    <div className="relative w-full">
      <Image
        src={src ?? fallback}
        alt="poster"
        priority
        width={width}
        height={height}
        className="mx-auto"
      />
    </div>
  );
}
