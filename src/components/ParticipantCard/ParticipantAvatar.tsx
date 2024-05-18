"use client";

import Image from "next/image";
import { useAvatar } from "@/lib/hooks/useAvatar";

type ParticipantAvatarProps = PropsWithClassName & {
  iconSize?: number;
};

export default function ParticipantAvatar({ iconSize = 30 }: ParticipantAvatarProps) {
  const { color, name, src } = useAvatar();

  return (
    <div
      data-tooltip-id={"avatar-tooltip-" + name}
      className="flex-shrink-0 relative overflow-hidden rounded-full p-1"
      style={{ backgroundColor: color }}
    >
      <Image src={src} width={iconSize} height={iconSize} alt={name} />
    </div>
  );
}
