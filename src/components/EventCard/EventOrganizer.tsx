import cn from "classnames";
import { SpeechIcon } from "lucide-react";
import { Tooltip } from "react-tooltip";

type EventOrganizerProps = { name: string } & PropsWithClassName;

export default function EventOrganizer({ name, className }: EventOrganizerProps) {
  return (
    <>
      <span
        data-tooltip-id="event-organizer-tooltip"
        className={cn("inline-flex items-center gap-2 text-[14px] font-semibold ", className)}
      >
        <SpeechIcon width={20} height={20} className="-rotate-30 fill-accent-100" />
        <span className="line-clamp-1">{name}</span>
      </span>

      <Tooltip
        id="event-organizer-tooltip"
        place="top-start"
        variant="info"
        content="Name of the event's organizer"
      />
    </>
  );
}
