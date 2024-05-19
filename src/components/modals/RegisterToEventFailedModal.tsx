import { InfoIcon } from "lucide-react";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";

import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/Button";

type RegisterToEventFailedModalProps = {
  reason: string;
  onClose: () => void;
};

export default function RegisterToEventFailedModal({
  reason,
  onClose,
}: RegisterToEventFailedModalProps) {
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <Modal>
      <div
        className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50"
        role="alert"
        ref={ref}
      >
        <div className="flex items-center">
          <InfoIcon className="flex-shrink-0 w-4 h-4 me-2" />

          <h3 className="text-lg font-medium">Registration failed!</h3>
        </div>

        <p className="mt-2 mb-4 text-sm">
          You probably entered incorrect data, so we could not proceed.
        </p>
        <p className="mt-2 mb-2 text-sm">Here is what we got from server:</p>
        <p className="mt-2 mb-4 text-sm font-semibold italic text-red-600">{reason}</p>

        <div className="flex justify-center">
          <Button
            as="button"
            type="button"
            onClick={onClose}
            className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-6 py-2 text-center "
          >
            Got it
          </Button>
        </div>
      </div>
    </Modal>
  );
}
