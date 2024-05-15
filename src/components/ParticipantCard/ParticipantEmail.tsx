import cn from "classnames";
import { PropsWithChildren } from "react";

type ParticipantEmailProps = PropsWithChildren & PropsWithClassName;

export default function ParticipantEmail({ className, children }: ParticipantEmailProps) {
  return <p className={cn("text-sm font-medium text-brand-300 truncate", className)}>{children}</p>;
}
