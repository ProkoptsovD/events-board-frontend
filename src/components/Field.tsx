"use client";

import { FunctionComponent, Suspense, lazy } from "react";
import { useController } from "react-hook-form";

const ErrorMessage = lazy(() => import("@/components/ui/ErrorMessage"));

type FieldProps = {
  name: string;
  component: FunctionComponent<{ value: any; onChange: any }>;
};

export default function Field<TProps>({
  component: Component,
  name,
  ...restProps
}: TProps & FieldProps) {
  const { field, fieldState } = useController({ name });
  const error = fieldState.error?.message;

  return (
    <div className="inline-block relative">
      {<Component {...restProps} {...field} />}

      <Suspense>
        {!!error && <ErrorMessage message={error as string} className="error-message" />}
      </Suspense>
    </div>
  );
}
