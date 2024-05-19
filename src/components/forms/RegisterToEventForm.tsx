"use client";

import dynamic from "next/dynamic";
import cn from "classnames";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps, Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { eventService } from "@/lib/services/eventService";
import { getDateWithYears } from "@/lib/helpers/dates";
import { birthDate } from "@/lib/validation/fields";
import { MIN_PARTICIPANT_AGE } from "@/lib/const";

import Field from "@/components/Field";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import RadioGroup from "@/components/RadioGroup";
import DateTimeInput, { DateTimeInputProps } from "@/components/ui/DateTimeInput";

const RegisterToEventSuccessModal = dynamic(
  () => import("@/components/modals/RegisterToEventSuccessModal")
);
const RegisterToEventFailedModal = dynamic(
  () => import("@/components/modals/RegisterToEventFailedModal")
);

const schema = z.object({
  name: z
    .string({ required_error: "Full name is required" })
    .min(3, "Need at least 3 chars")
    .max(255, "Must be less than 255 chars"),
  email: z.string().email(),
  birthDate,
  eventChannel: z.string().min(1, "The field is required"),
});

const calendarOptions: DatetimeInputPartialProps["calendarOptions"] = {
  maxDate: getDateWithYears(MIN_PARTICIPANT_AGE),
  defaultActiveStartDate: getDateWithYears(MIN_PARTICIPANT_AGE),
};

type RegisterForEventFormValues = z.infer<typeof schema>;
type RegisterFormProps = Omit<ComponentProps<"form">, "onSubmit"> & { eventId: number };
type DatetimeInputPartialProps = Omit<DateTimeInputProps, "ref" | "onChange" | "value">;

export default function RegisterForm({ className, eventId, ...props }: RegisterFormProps) {
  const form = useForm<RegisterForEventFormValues>({
    defaultValues: {
      name: "",
      email: "",
      birthDate: getDateWithYears(18),
      eventChannel: "",
    },
    resolver: zodResolver(schema),
  });
  const { mutate, reset, isPending, isSuccess, isError, error } = useMutation<
    unknown,
    string,
    { eventId: number; participant: CreateEventParticipantDTO }
  >({
    mutationFn: (dto) => eventService.registerToEvent(dto.eventId, dto.participant),
  });

  const handleFormSubmit = async (participantData: RegisterForEventFormValues) => {
    const participant = {
      ...participantData,
      birthDate: new Date(participantData.birthDate),
    };

    mutate({ eventId, participant });
  };

  const needShowSpinner = form.formState.isSubmitting || isPending;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className={cn(
          "bg-white rounded-lg md:rounded-none md:rounded-l-[2.5rem] px-10 pt-[20px] pb-[20px] md:pt-[100px] md:px-[80px]",
          className
        )}
        {...props}
      >
        <div className=" flex flex-col max-w-[800px] mx-auto gap-6">
          <p className="text-[32px] font-semibold">Register to Event</p>

          <Field name="name" label="Full name" placeholder="E.g. John Doe" component={Input} />
          <Field name="email" label="Email" placeholder="example@mail.com" component={Input} />
          <Field<DatetimeInputPartialProps>
            name="birthDate"
            label="Date of birth"
            placeholder="Min age is 18 years old..."
            component={DateTimeInput}
            calendarOptions={calendarOptions}
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

      <Suspense>
        {isError && <RegisterToEventFailedModal reason={error} onClose={reset} />}
        {isSuccess && <RegisterToEventSuccessModal eventId={eventId} />}
      </Suspense>
    </FormProvider>
  );
}
