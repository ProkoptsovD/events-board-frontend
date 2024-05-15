import cn from "classnames";
import { PropsWithChildren } from "react";

type ParticipantNameProps = PropsWithChildren & PropsWithClassName;

export default function ParticipantName({ className, children }: ParticipantNameProps) {
  return <p className={cn("text-sm font-medium text-brand-400 truncate", className)}>{children}</p>;
}
