import { ComponentProps, ReactNode } from "react";
import cn from "classnames";

type IconButtonProps = { icon: ReactNode } & Omit<ComponentProps<"button">, "children" | "ref">;

export default function IconButton({ icon, className, ...restProps }: IconButtonProps) {
  return (
    <button
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
