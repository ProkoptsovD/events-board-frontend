import "react-calendar/dist/Calendar.css";

import cn from "classnames";
import { MouseEvent } from "react";
import ReactCalendar, { CalendarProps as ReactCalendarProps } from "react-calendar";

import { DEFAULT_LOCALE } from "@/lib/const";
import Button from "@/components/ui/Button";

type CalendarActions = {
  onClose: (e?: MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (e?: MouseEvent<HTMLButtonElement>) => void;
};
export type CalendarProps = ReactCalendarProps & CalendarActions & PropsWithClassName;

export default function Calendar({
  value,
  onChange,
  locale = DEFAULT_LOCALE,
  className,
  onClose,
  onSubmit,
  ...restProps
}: CalendarProps) {
  return (
    <div className={cn("absolute bottom-[4px]", className)}>
      <ReactCalendar
        {...restProps}
        value={value}
        onChange={onChange}
        locale={locale}
        className="rounded-tl-md rounded-tr-md !border-gray-300 !border-b-0 [&_.react-calendar__tile]:rounded-lg"
      />
      <div className="rounded-bl-md rounded-br-md border-gray-300 border-t-0 border-b-[1px] border-x-[1px] flex p-2 bg-white justify-end gap-2">
        <Button
          as="button"
          variant="outline"
          className="rounded-md py-[4px] text-[12px]"
          onClick={onClose}
        >
          Close
        </Button>

        <Button
          as="button"
          variant="secondary"
          className="rounded-md py-[4px] text-[12px]"
          onClick={onSubmit}
        >
          Select
        </Button>
      </div>
    </div>
  );
}
