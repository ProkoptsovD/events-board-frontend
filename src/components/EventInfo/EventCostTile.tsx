import { TicketIcon } from "lucide-react";

import EventBaseTile from "./EventBaseTile";
import { formatCurrency } from "@/lib/helpers/currency";

type EventCostTileProps = { cost: number } & PropsWithClassName;

export default function EventCostTile({ cost, className }: EventCostTileProps) {
  const formattedCost = cost ? formatCurrency(cost) : "Free";

  return (
    <EventBaseTile
      className={className}
      icon={<TicketIcon className="shrink-0" width={20} height={20} />}
      value={
        <span className="flex flex-wrap">
          Tickets:&nbsp;<b className="text-violet-300">{formattedCost}</b>
        </span>
      }
    />
  );
}
