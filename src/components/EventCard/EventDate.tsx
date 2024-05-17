import { formatDate } from "@/lib/helpers/dates";
import cn from "classnames";

type FormatterFn = (date: Date | string | number, options?: Record<string, unknown>) => string;
type EventDateProps = {
  date: Date | number | string;
  formatter?: FormatterFn;
} & PropsWithClassName;

export default function EventDate({ date, className, formatter = formatDate }: EventDateProps) {
  const formattedDate = formatter(date);

  return (
    <time className={cn("break-words text-alt-100 font-semibold", className)}>{formattedDate}</time>
  );
}
