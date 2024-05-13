import { formatCurrency } from "@/lib/currency";
import cn from "classnames";
import { TicketIcon } from "lucide-react";

type FormatterFn = (value: number) => string;
type EventCostProps = { cost: number; formatter?: FormatterFn } & PropsWithClassName;

export default function EventCost({ cost, className, formatter = formatCurrency }: EventCostProps) {
  const formattedCost = formatter(cost);

  return (
    <span className={cn("flex items-center gap-2 text-[14px] font-semibold", className)}>
      <TicketIcon width={20} height={20} className="-rotate-30 fill-accent-100" />
      {formattedCost}
    </span>
  );
}
