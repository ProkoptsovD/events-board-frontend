"use client";

import cn from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ComponentProps } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { EVENTS_LEAD_CHANEL_OPTIONS } from "@/lib/const";

import Field from "@/components/Field";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import RadioGroup from "@/components/RadioGroup";
import DateTimeInput from "@/components/ui/DateTimeInput";

const schema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/\w+\s\w+/, "Must be at least two words"),
  email: z.string().email(),
  birthDate: z.date().or(z.string().min(1, "Date of Birth is required")),
  eventChannel: z.string().min(1, "The field is required"),
});

type RegisterForEventFormValues = z.infer<typeof schema>;
type RegisterFormProps = Omit<ComponentProps<"form">, "onSubmit">;

export default function RegisterForm({ className, ...props }: RegisterFormProps) {
  const form = useForm<RegisterForEventFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      birthDate: "",
      eventChannel: "",
    },
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = () => {};

  const needShowSpinner = form.formState.isSubmitting;

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

          <Field name="fullName" label="Full name" placeholder="E.g. John Doe" component={Input} />
          <Field name="email" label="Email" placeholder="example@mail.com" component={Input} />
          <Field
            name="birthDate"
            label="Date of birth"
            placeholder="Select from calendar..."
            component={DateTimeInput}
          />

          <RadioGroup
            label="Where did you here about this event?"
            name="fruit"
            options={EVENTS_LEAD_CHANEL_OPTIONS}
          />

          <Button as="button" variant="secondary" type="submit" className="rounded-md text-white">
            Register
          </Button>
        </div>
      </form>

      {needShowSpinner && <Spinner backdrop />}
    </FormProvider>
  );
}
