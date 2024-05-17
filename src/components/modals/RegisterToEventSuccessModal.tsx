import { useRouter, useParams } from "next/navigation";

import Modal from "@/components/ui/Modal/Modal";
import ModalBody from "../ui/Modal/ModalBody";
import ModalHeader from "../ui/Modal/ModalHeader";
import ModalText from "../ui/Modal/ModalText";
import ModalActions from "../ui/Modal/ModalActions";
import ModalActionButton from "../ui/Modal/ModalActionButton";

export default function RegisterToEventSuccessModal() {
  const router = useRouter();
  const { eventID } = useParams<{ eventID: string }>();

  function toAllEvents() {
    router.replace("/events");
  }
  function toEventPage() {
    router.replace(`/events/${eventID}`);
  }

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
        <ModalActionButton as="button" variant="secondary" onClick={toAllEvents}>
          To ALL Events
        </ModalActionButton>
        <ModalActionButton as="button" variant="primary" onClick={toEventPage}>
          To Event Page
        </ModalActionButton>
      </ModalActions>
    </Modal>
  );
}
