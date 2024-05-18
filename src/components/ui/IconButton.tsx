import { ComponentProps, ForwardedRef, forwardRef, ReactNode } from "react";
import cn from "classnames";

type IconButtonProps = { icon: ReactNode } & Omit<ComponentProps<"button">, "children" | "ref">;

function IconButton(
  { icon, className, ...restProps }: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={cn(
        "flex items-center justify-center rounded-md cursor-pointer disabled:cursor-default disabled:opacity-50",
        className
      )}
      {...restProps}
    >
      {icon}
    </button>
  );
}

export default forwardRef(IconButton);
