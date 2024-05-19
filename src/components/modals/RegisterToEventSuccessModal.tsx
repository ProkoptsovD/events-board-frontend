import Modal from "@/components/ui/Modal/Modal";
import ModalBody from "../ui/Modal/ModalBody";
import ModalHeader from "../ui/Modal/ModalHeader";
import ModalText from "../ui/Modal/ModalText";
import ModalActions from "../ui/Modal/ModalActions";
import ModalActionButton from "../ui/Modal/ModalActionButton";

type RegisterToEventSuccessModalProps = { eventId: number | string };

export default function RegisterToEventSuccessModal({ eventId }: RegisterToEventSuccessModalProps) {
  return (
    <Modal>
      <ModalHeader hideClose>Congratulations!</ModalHeader>

      <ModalBody>
        <ModalText>You successfully registered to the event.</ModalText>
        <ModalText>
          You may proceed to All events page to explore more events or see particular the Event in
          details. The page contains info about participants, event itself and registration statics
          displayed in chart for your convenience.
        </ModalText>
        <ModalText>Choose your path, warrior...</ModalText>
      </ModalBody>

      <ModalActions className="flex items-center justify-center gap-2">
        <ModalActionButton as="a" href="/events" variant="secondary">
          To ALL Events
        </ModalActionButton>
        <ModalActionButton as="a" href={`/events/${eventId}`} variant="primary">
          To Event Page
        </ModalActionButton>
      </ModalActions>
    </Modal>
  );
}

export const RegisterToEventSuccessModalSkeleton = () => {
  return (
    <Modal>
      <div className="w-full py-6 px-4 animate-pulse">
        <div className="h-10 bg-gray-200 rounded-full w-full mb-4"></div>
        <div className="h-0.5 bg-gray-200 rounded-full w-full mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full mb-4"></div>

        <div className="flex justify-center gap-4 mb-3">
          <div className="h-10 bg-gray-200 rounded-full w-[30%]"></div>
          <div className="h-10 bg-gray-200 rounded-full w-[30%]"></div>
        </div>
      </div>
    </Modal>
  );
};
