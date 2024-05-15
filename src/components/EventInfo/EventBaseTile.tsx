import cn from "classnames";
import { ReactNode } from "react";

export type EventBaseTileProps = {
  icon: ReactNode;
  value: ReactNode;
} & PropsWithClassName;

export default function EventBaseTile({ className, icon, value }: EventBaseTileProps) {
  return (
    <p className={cn("flex items-center gap-2 text-left text-[16px]", className)}>
      {icon} {value}
    </p>
  );
}
