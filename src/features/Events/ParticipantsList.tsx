import ParticipantAvatar from "@/components/ParticipantCard/ParticipantAvatar";
import ParticipantCardBody from "@/components/ParticipantCard/ParticipantCardBody";
import ParticipantDetails from "@/components/ParticipantCard/ParticipantDetails";
import ParticipantEmail from "@/components/ParticipantCard/ParticipantEmail";
import ParticipantName from "@/components/ParticipantCard/ParticipantName";

export default function ParticipantsList() {
  return (
    <div className="md:container mx-auto grid grid-cols-1 sm:[&>*]:mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
      <ParticipantCardBody>
        <ParticipantAvatar />

        <ParticipantDetails>
          <ParticipantName>John Doe</ParticipantName>
          <ParticipantEmail>john@gmail.com</ParticipantEmail>
        </ParticipantDetails>
      </ParticipantCardBody>
      <ParticipantCardBody>
        <ParticipantAvatar />

        <ParticipantDetails>
          <ParticipantName>John Doe</ParticipantName>
          <ParticipantEmail>john@gmail.com</ParticipantEmail>
        </ParticipantDetails>
      </ParticipantCardBody>
      <ParticipantCardBody>
        <ParticipantAvatar />

        <ParticipantDetails>
          <ParticipantName>John Doe</ParticipantName>
          <ParticipantEmail>john@gmail.com</ParticipantEmail>
        </ParticipantDetails>
      </ParticipantCardBody>
      <ParticipantCardBody>
        <ParticipantAvatar />

        <ParticipantDetails>
          <ParticipantName>John Doe</ParticipantName>
          <ParticipantEmail>john@gmail.com</ParticipantEmail>
        </ParticipantDetails>
      </ParticipantCardBody>
      <ParticipantCardBody>
        <ParticipantAvatar />

        <ParticipantDetails>
          <ParticipantName>John Doe</ParticipantName>
          <ParticipantEmail>john@gmail.com</ParticipantEmail>
        </ParticipantDetails>
      </ParticipantCardBody>
      <ParticipantCardBody>
        <ParticipantAvatar />

        <ParticipantDetails>
          <ParticipantName>John Doe</ParticipantName>
          <ParticipantEmail>john@gmail.com</ParticipantEmail>
        </ParticipantDetails>
      </ParticipantCardBody>
      <ParticipantCardBody>
        <ParticipantAvatar />

        <ParticipantDetails>
          <ParticipantName>John Doe</ParticipantName>
          <ParticipantEmail>john@gmail.com</ParticipantEmail>
        </ParticipantDetails>
      </ParticipantCardBody>
    </div>
  );
}
