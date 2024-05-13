import { ComponentProps, ForwardedRef, forwardRef, ReactNode } from "react";
import cn from "classnames";

export type InputProps = {
  icon?: ReactNode;
  iconPosition?: "leading" | "trailing";
  label?: string;
  flow?: "row" | "col";
} & ComponentProps<"input">;

function Input(
  {
    label,
    icon,
    iconPosition = "leading",
    className,
    flow = "col",
    name,
    ...restProps
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const hasIcon = !!icon;
  const isLeadingPosition = iconPosition === "leading";

  const inputElement = (
    <input
      ref={ref}
      id={name}
      name={name}
      className="py-2 px-3 border-gray-300 border rounded-md focus-within:outline-accent-100 text-[14px] input"
      {...restProps}
    />
  );

  return (
    <div aria-label={label} className={cn(`flex flex-${flow}`, className)}>
      <label htmlFor={name}>{label}</label>

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
    </div>
  );
}

export default forwardRef(Input);
