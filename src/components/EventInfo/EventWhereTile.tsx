import { MapPinIcon } from "lucide-react";

import EventBaseTile from "./EventBaseTile";

type EventWhereTileProps = { location: string } & PropsWithClassName;

export default function EventWhereTile({ location, className }: EventWhereTileProps) {
  return (
    <EventBaseTile
      className={className}
      icon={<MapPinIcon width={20} height={20} />}
      value={
        <>
          Where: <b>{location}</b>
        </>
      }
    />
  );
}
