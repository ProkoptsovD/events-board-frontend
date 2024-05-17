"use client";

import { ForwardedRef, forwardRef, PointerEvent, Suspense, useEffect, useState } from "react";
import cn from "classnames";
import dynamic from "next/dynamic";

import Input, { InputProps } from "@/components/ui/Input";
import { formatDate } from "@/lib/helpers/dates";

const Calendar = dynamic(() => import("@/components/ui/Calendar"), { ssr: false, suspense: true });

type FormatterFn = (date: Date | string | number, options?: Record<string, unknown>) => string;
type ValuePiece = Date | null;

export type DateTimeValue = ValuePiece | [ValuePiece, ValuePiece];
export type DateTimeInputProps = {
  name?: string;
  value: Date | null;
  onChange: (date: DateTimeValue | null) => void;
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

  useEffect(() => {
    if (isCalendarOpened) {
      import("react-calendar/dist/Calendar.css");
    }
  }, [isCalendarOpened]);

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

      <Suspense fallback={<div>Loading....</div>}>
        {isCalendarOpened && (
          <Calendar
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
