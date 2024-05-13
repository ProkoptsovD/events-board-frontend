import cn from "classnames";
import { UsersIcon } from "lucide-react";

type EventParticipantsProps = { participantsCount: number } & PropsWithClassName;

export default function EventParticipants({
  participantsCount,
  className,
}: EventParticipantsProps) {
  return (
    <span className={cn("flex items-center gap-1 text-[14px] font-semibold", className)}>
      <UsersIcon width={20} height={20} className="fill-accent-100" />
      <span>
        <span>{participantsCount}</span>&nbsp;<span className="text-[12px]">are going</span>
      </span>
    </span>
  );
}
