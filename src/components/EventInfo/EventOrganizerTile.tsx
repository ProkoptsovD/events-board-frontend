import { SpeechIcon } from "lucide-react";

import EventBaseTile from "./EventBaseTile";

type EventOrganizerTileProps = { organizer?: string } & PropsWithClassName;

export default function EventOrganizerTile({ organizer, className }: EventOrganizerTileProps) {
  return (
    <EventBaseTile
      className={className}
      icon={<SpeechIcon className="shrink-0" width={20} height={20} />}
      value={
        <span className="flex flex-wrap">
          Organizer:&nbsp;<b className="text-violet-300">{organizer}</b>
        </span>
      }
    />
  );
}
