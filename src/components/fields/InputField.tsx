"use client";

import { Suspense, lazy } from "react";
import { useController, useFormContext } from "react-hook-form";
import Input, { InputProps } from "../ui/Input";

const ErrorMessage = lazy(() => import("@/components/ui/ErrorMessage"));

type FieldProps = {
  name: string;
} & Omit<InputProps, "onChange" | "value">;

export default function InputField({ name, ...restProps }: FieldProps) {
  // const { register } = useFormContext();
  // const hasErrorMessage = !!fieldState.error?.message;

  return (
    <span className="inline-block relative">
      <Input {...restProps} />

      {/* <Suspense>
        {!!hasErrorMessage && (
          <ErrorMessage message={fieldState.error?.message as string} className="error-message" />
        )}
      </Suspense> */}
    </span>
  );
}
