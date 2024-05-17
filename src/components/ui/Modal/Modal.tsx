import cn from "classnames";
import { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren & PropsWithClassName;

export default function Modal({ children, className }: ModalProps) {
  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className={cn(
        "overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center pt-[100px] w-full max-h-full bg-black/50",
        className
      )}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
}
