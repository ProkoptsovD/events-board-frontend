import { PropsWithChildren } from "react";
import cn from "classnames";

export type EventNameProps = PropsWithChildren & PropsWithClassName;

export default function EventName({ className, children }: EventNameProps) {
  return (
    <p
      className={cn(
        "font-semibold text-brand-100 text-[20px] leading-[1.2] line-clamp-2",
        className
      )}
    >
      {children}
    </p>
  );
}
