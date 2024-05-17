import cn from "classnames";
import { PropsWithChildren } from "react";

type ModalBodyProps = PropsWithChildren & PropsWithClassName;

export default function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={cn("p-4 md:p-5 space-y-4", className)}>{children}</div>;
}
