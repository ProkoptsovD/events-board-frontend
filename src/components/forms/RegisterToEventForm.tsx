"use client";

import dynamic from "next/dynamic";
import cn from "classnames";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps, Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { eventService } from "@/lib/services/eventService";

import Field from "@/components/Field";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import RadioGroup from "@/components/RadioGroup";
import DateTimeInput from "@/components/ui/DateTimeInput";

const RegisterToEventSuccessModal = dynamic(
  () => import("@/components/modals/RegisterToEventSuccessModal")
);

const schema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .regex(/\w+\s\w+/, "Must be at least two words"),
  email: z.string().email(),
  birthDate: z.date().or(z.string().min(1, "Date of Birth is required")),
  eventChannel: z.string().min(1, "The field is required"),
});

type RegisterForEventFormValues = z.infer<typeof schema>;
type RegisterFormProps = Omit<ComponentProps<"form">, "onSubmit"> & { eventId: number };

export default function RegisterForm({ className, eventId, ...props }: RegisterFormProps) {
  const form = useForm<RegisterForEventFormValues>({
    defaultValues: {
      name: "",
      email: "",
      birthDate: "",
      eventChannel: "",
    },
    resolver: zodResolver(schema),
  });
  const { mutateAsync, isPending, isSuccess } = useMutation<
    unknown,
    unknown,
    { eventId: number; participant: CreateEventParticipantDTO }
  >({
    mutationFn: (dto) => eventService.registerToEvent(dto.eventId, dto.participant),
  });

  const handleFormSubmit = async (participantData: RegisterForEventFormValues) => {
    const participant = {
      ...participantData,
      birthDate: new Date(participantData.birthDate),
    };

    await mutateAsync({ eventId, participant });
  };

  const needShowSpinner = form.formState.isSubmitting || isPending;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className={cn(
          "bg-white rounded-l-[2.5rem]  px-10 pt-[20px] md:pt-[100px] md:px-[80px]",
          className
        )}
        {...props}
      >
        <div className=" flex flex-col max-w-[800px] mx-auto gap-6">
          <p className="text-[32px] font-semibold">Register to Event</p>

          <Field name="name" label="Full name" placeholder="E.g. John Doe" component={Input} />
          <Field name="email" label="Email" placeholder="example@mail.com" component={Input} />
          <Field
            name="birthDate"
            label="Date of birth"
            placeholder="Select from calendar..."
            component={DateTimeInput}
          />

          <RadioGroup
            label="Where did you here about this event?"
            name="eventChannel"
            loadAsyncOptions={eventService.getEventChanelByOptions}
          />

          <Button as="button" variant="secondary" type="submit" className="rounded-md text-white">
            Register
          </Button>
        </div>
      </form>

      {needShowSpinner && <Spinner backdrop />}

      <Suspense>{isSuccess && <RegisterToEventSuccessModal eventId={eventId} />}</Suspense>
    </FormProvider>
  );
}
