import cn from "classnames";
import { PropsWithChildren } from "react";

type ModalActionsProps = PropsWithChildren & PropsWithClassName;

export default function ModalActions({ children, className }: ModalActionsProps) {
  return (
    <div
      className={cn("flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b", className)}
    >
      {children}
    </div>
  );
}
