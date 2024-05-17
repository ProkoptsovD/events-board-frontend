import cn from "classnames";
import { PropsWithChildren } from "react";

type ModalTextProps = PropsWithChildren & PropsWithClassName;

export default function ModalText({ children, className }: ModalTextProps) {
  return <p className={cn("text-base leading-relaxed text-gray-500", className)}>{children}</p>;
}
