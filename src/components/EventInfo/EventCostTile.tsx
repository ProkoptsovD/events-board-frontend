import { TicketIcon } from "lucide-react";

import EventBaseTile from "./EventBaseTile";
import { formatCurrency } from "@/lib/currency";

type EventCostTileProps = { cost: number } & PropsWithClassName;

export default function EventCostTile({ cost, className }: EventCostTileProps) {
  const formattedCost = cost ? formatCurrency(cost) : "Free";

  return (
    <EventBaseTile
      className={className}
      icon={<TicketIcon width={20} height={20} />}
      value={
        <>
          Tickets: <b>{formattedCost}</b>
        </>
      }
    />
  );
}
