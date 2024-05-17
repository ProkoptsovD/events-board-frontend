import { MapPinIcon } from "lucide-react";

import EventBaseTile from "./EventBaseTile";

type EventWhereTileProps = { location: Venue | null | undefined } & PropsWithClassName;

export default function EventWhereTile({ location, className }: EventWhereTileProps) {
  const address = !location
    ? "No location provided..."
    : `${location.country}, ${location.state}, ${location.city} ${location.address}`;

  return (
    <EventBaseTile
      className={className}
      icon={<MapPinIcon className="shrink-0" width={20} height={20} />}
      value={
        <span className="flex flex-wrap">
          Where:&nbsp;<b className="text-violet-300">{address}</b>
        </span>
      }
    />
  );
}
