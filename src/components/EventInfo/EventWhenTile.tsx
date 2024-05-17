import { CalendarDaysIcon } from "lucide-react";
import { formatDate } from "@/lib/helpers/dates";

import EventBaseTile from "./EventBaseTile";

type EventWhenTileProps = { date: Date | string | number } & PropsWithClassName;

export default function EventWhenTile({ date, className }: EventWhenTileProps) {
  const formattedDate = formatDate(date) || "TBD";

  return (
    <EventBaseTile
      className={className}
      icon={<CalendarDaysIcon className="shrink-0" width={20} height={20} />}
      value={
        <span className="flex flex-wrap">
          When:&nbsp;<b className="text-violet-300">{formattedDate}</b>
        </span>
      }
    />
  );
}
