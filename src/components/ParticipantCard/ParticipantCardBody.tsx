import cn from "classnames";
import { PropsWithChildren } from "react";

type ParticipantCardBodyProps = PropsWithChildren & PropsWithClassName;

export default function ParticipantCardBody({ className, children }: ParticipantCardBodyProps) {
  return <article className={cn("flex items-center w-full", className)}>{children}</article>;
}
