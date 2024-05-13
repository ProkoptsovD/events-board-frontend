"use client";

import {
  ForwardedRef,
  forwardRef,
  PointerEvent,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import cn from "classnames";
import dynamic from "next/dynamic";
import Input, { InputProps } from "@/components/ui/Input";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { formatDate } from "@/lib/dates";
import { DEFAULT_LOCALE } from "@/lib/const";

const Calendar = dynamic(() => import("react-calendar"));

type FormatterFn = (date: Date | string | number, options?: Record<string, unknown>) => string;
type ValuePiece = Date | null;

export type DateTimeValue = ValuePiece | [ValuePiece, ValuePiece];
export type DateTimeInputProps = {
  name?: string;
  value: Date | null;
  onChange: (date: DateTimeValue) => void;
  formatter?: FormatterFn;
} & Omit<InputProps, "onChange" | "value">;

function DateTimeInput(
  { name, value, onChange, className, formatter, ...restProps }: DateTimeInputProps,
  inputRef: ForwardedRef<HTMLInputElement>
) {
  const [isCalendarOpened, setIsCalendarOpened] = useState<boolean>(false);
  const displayValue = formatter
    ? formatter(value ?? "")
    : formatDate(value ?? "", { format: "YYYY-DD-MM" });

  const closeCalendar = useCallback(() => {
    setIsCalendarOpened(false);
  }, []);

  const ref = useOutsideClick(closeCalendar);

  function toggle(event: PointerEvent<HTMLInputElement>) {
    event.stopPropagation();
    setIsCalendarOpened(!isCalendarOpened);
  }

  useEffect(() => {
    if (isCalendarOpened) {
      import("react-calendar/dist/Calendar.css");
    }
  }, [isCalendarOpened]);

  return (
    <span ref={ref} className="relative block">
      <Input
        ref={inputRef}
        readOnly
        name={name}
        onClick={toggle}
        value={displayValue}
        className={cn("[&_.input]:cursor-pointer", className)}
        {...restProps}
      />

      <Suspense>
        {isCalendarOpened && (
          <Calendar
            value={value}
            onChange={onChange}
            locale={DEFAULT_LOCALE}
            className="absolute bottom-[80%] rounded-md !border-gray-300 [&_.react-calendar__tile]:rounded-lg"
          />
        )}
      </Suspense>
    </span>
  );
}

export default forwardRef(DateTimeInput);
