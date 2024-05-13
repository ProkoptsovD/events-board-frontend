import { ComponentProps, ForwardedRef, forwardRef, ReactNode } from "react";
import cn from "classnames";
import { isString } from "@/lib/type.guards";
import dynamic from "next/dynamic";

const InputErrorMessage = dynamic(() => import("@/components/ui/InputErrorMessage"));

export type InputProps = {
  icon?: ReactNode;
  iconPosition?: "leading" | "trailing";
  label?: string;
  errorMessage?: ReactNode;
  flow?: "row" | "col";
} & ComponentProps<"input">;

function Input(
  {
    label,
    icon,
    iconPosition = "leading",
    className,
    errorMessage,
    flow = "col",
    ...restProps
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const hasIcon = !!icon;
  const isStringMessage = isString(errorMessage);
  const isLeadingPosition = iconPosition === "leading";

  const errorMessageElement = isStringMessage ? (
    <InputErrorMessage message={errorMessage} className="error-message" />
  ) : (
    errorMessage
  );

  const inputElement = (
    <input
      ref={ref}
      className="py-2 px-3 border-gray-300 border rounded-md focus-within:outline-accent-100 text-[14px] input"
      {...restProps}
    />
  );

  return (
    <label aria-label={label} className={cn(`relative flex flex-${flow}`, className)}>
      {!!label && <span className="label">{label}</span>}

      {!hasIcon && inputElement}

      {hasIcon && (
        <span
          className={cn("relative h-full [&_.input]:block [&_.input]:w-full", {
            "[&_>:first-child]:absolute [&_>:first-child]:left-1 [&_>:first-child]:top-[50%] [&_>:first-child]:-translate-y-[50%] [&_.input]:pl-8":
              isLeadingPosition,
            "[&_>:last-child]:absolute [&_>:first-child]:right-1 [&_>:last-child]:top-[50%] [&_>:last-child]:-translate-y-[50%] [&_.input]:pr-8":
              !isLeadingPosition,
          })}
        >
          {isLeadingPosition && icon}
          {inputElement}
          {!isLeadingPosition && icon}
        </span>
      )}

      {!!errorMessage && errorMessageElement}
    </label>
  );
}

export default forwardRef(Input);
