import cn from "classnames";
import { MouseEvent, PropsWithChildren } from "react";
import { XIcon } from "lucide-react";
import IconButton from "../IconButton";

type ModalHeaderProps = PropsWithChildren &
  PropsWithClassName & {
    hideClose?: boolean;
    onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
  };

export default function ModalHeader({
  children,
  className,
  hideClose = false,
  onClose,
}: ModalHeaderProps) {
  return (
    <div
      className={cn("flex items-center justify-between p-4 md:p-5 border-b rounded-t", className)}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{children}</h3>

      {!hideClose && (
        <IconButton
          icon={<XIcon />}
          onClick={onClose}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
        />
      )}
    </div>
  );
}
