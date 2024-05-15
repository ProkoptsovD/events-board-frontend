import { CalendarDaysIcon } from "lucide-react";
import { formatDate } from "@/lib/dates";

import EventBaseTile from "./EventBaseTile";

type EventWhenTileProps = { date: Date | string | number } & PropsWithClassName;

export default function EventWhenTile({ date, className }: EventWhenTileProps) {
  return (
    <EventBaseTile
      className={className}
      icon={<CalendarDaysIcon width={20} height={20} />}
      value={
        <>
          When: <b>{formatDate(date)}</b>
        </>
      }
    />
  );
}
