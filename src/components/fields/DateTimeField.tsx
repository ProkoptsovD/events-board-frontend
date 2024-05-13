"use client";

import { Suspense, lazy } from "react";
import { useController } from "react-hook-form";
import { InputProps } from "../ui/Input";
import DateTimeInput from "../ui/DateTimeInput";

const ErrorMessage = lazy(() => import("@/components/ui/ErrorMessage"));

type FieldProps = {
  name: string;
} & Omit<InputProps, "onChange" | "value">;

export default function DateTimeField({ name, ...restProps }: FieldProps) {
  const { field, fieldState } = useController({ name });
  const hasErrorMessage = !!fieldState.error?.message;

  return (
    <div className="inline-block relative">
      <DateTimeInput {...restProps} {...field} />

      <Suspense>
        {!!hasErrorMessage && (
          <ErrorMessage message={fieldState.error?.message as string} className="error-message" />
        )}
      </Suspense>
    </div>
  );
}
