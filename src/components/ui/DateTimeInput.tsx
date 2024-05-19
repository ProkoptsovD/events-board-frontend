"use client";

import { ForwardedRef, forwardRef, PointerEvent, Suspense, useState } from "react";
import cn from "classnames";
import dynamic from "next/dynamic";

import Input, { InputProps } from "@/components/ui/Input";
import { formatDate } from "@/lib/helpers/dates";
import { CalendarProps } from "react-calendar";

const Calendar = dynamic(() => import("@/components/ui/Calendar"), { ssr: false, suspense: true });

type FormatterFn = (date: Date | string | number, options?: Record<string, unknown>) => string;
type ValuePiece = Date | null;

export type DateTimeValue = ValuePiece | [ValuePiece, ValuePiece];
export type DateTimeInputProps = {
  name?: string;
  value: Date | null;
  onChange: (date: DateTimeValue | null) => void;
  formatter?: FormatterFn;
  calendarOptions?: Omit<CalendarProps, "className">;
} & Omit<InputProps, "onChange" | "value">;

function DateTimeInput(
  {
    name,
    value,
    onChange,
    className,
    formatter,
    calendarOptions,
    ...restProps
  }: DateTimeInputProps,
  inputRef: ForwardedRef<HTMLInputElement>
) {
  const [isCalendarOpened, setIsCalendarOpened] = useState<boolean>(false);

  const displayValue = formatter
    ? formatter(value ?? "")
    : formatDate(value ?? "", { format: "YYYY-DD-MM" });

  const closeCalendar = () => {
    setIsCalendarOpened(false);
  };
  const closeCalendarWithoutSave = () => {
    onChange(null);
    closeCalendar();
  };

  function toggle(event: PointerEvent<HTMLInputElement>) {
    event.stopPropagation();
    setIsCalendarOpened(!isCalendarOpened);
  }

  return (
    <span className="relative block">
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
            {...calendarOptions}
            onClose={closeCalendarWithoutSave}
            onSubmit={closeCalendar}
            value={value}
            onChange={onChange}
          />
        )}
      </Suspense>
    </span>
  );
}

export default forwardRef(DateTimeInput);
