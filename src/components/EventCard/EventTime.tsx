import { formatTime } from "@/lib/dates";
import cn from "classnames";

type FormatterFn = (date: Date | string | number, options?: Record<string, unknown>) => string;
type EventDateProps = {
  date: Date | number | string;
  formatter?: FormatterFn;
} & PropsWithClassName;

export default function EventTime({ date, className, formatter = formatTime }: EventDateProps) {
  const formattedTime = formatter(date);

  return (
    <span className={cn("text-brand-700 text-[12px]", className)}>
      <span>Starting at </span>
      <time className="font-semibold text-brand-400">{formattedTime}</time>
    </span>
  );
}
