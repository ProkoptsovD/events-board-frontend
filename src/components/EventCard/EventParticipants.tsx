import cn from "classnames";
import { UsersIcon } from "lucide-react";
import { Tooltip } from "react-tooltip";

type EventParticipantsProps = { participantsCount: number } & PropsWithClassName;

export default function EventParticipants({
  participantsCount,
  className,
}: EventParticipantsProps) {
  const hasParticipants = !!participantsCount;

  return (
    <>
      <span
        data-tooltip-id="event-participants-tooltip"
        className={cn("inline-flex items-center gap-2 text-[14px] font-semibold", className)}
      >
        <UsersIcon width={20} height={20} className="fill-accent-100" />
        {hasParticipants && (
          <span>
            <span>{participantsCount}</span>&nbsp;<span className="text-[12px]">are going</span>
          </span>
        )}

        {!hasParticipants && <span className="text-brand-500 font-normal">Be the first...</span>}
      </span>

      <Tooltip
        id="event-participants-tooltip"
        place="top-start"
        variant="info"
        content="People who attend the event"
      />
    </>
  );
}
