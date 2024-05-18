import cn from "classnames";
import { TicketIcon } from "lucide-react";
import { Tooltip } from "react-tooltip";

import { formatCurrency } from "@/lib/helpers/currency";

type FormatterFn = (value: number) => string;
type EventCostProps = { cost: number | null; formatter?: FormatterFn } & PropsWithClassName;

export default function EventCost({ cost, className, formatter = formatCurrency }: EventCostProps) {
  const formattedCost = cost ? formatter(cost) : "Free";

  return (
    <>
      <span
        data-tooltip-id="event-cost-tooltip"
        className={cn("inline-flex items-center gap-2 text-[14px] font-semibold", className)}
      >
        <TicketIcon width={20} height={20} className="-rotate-30 fill-accent-100" />
        {formattedCost}
      </span>

      <Tooltip id="event-cost-tooltip" place="top-start" variant="info" content="Ticket cost" />
    </>
  );
}
