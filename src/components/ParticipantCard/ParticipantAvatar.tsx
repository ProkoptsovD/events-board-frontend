import { ANIMALS_LIST } from "@/lib/const";
import { useAvatar } from "@/lib/hooks/useAvatar";
import Image from "next/image";

type ParticipantAvatarProps = PropsWithClassName & {
  iconSize?: number;
};

export default function ParticipantAvatar({ iconSize = 30 }: ParticipantAvatarProps) {
  const { color, name, src } = useAvatar();

  return (
    <div
      className="flex-shrink-0 relative overflow-hidden rounded-full p-1"
      style={{ backgroundColor: color }}
    >
      <Image src={src} width={iconSize} height={iconSize} alt="avatar" />
    </div>
  );
}
