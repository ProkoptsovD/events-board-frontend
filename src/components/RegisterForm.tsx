"use client";

import cn from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ComponentProps, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Input from "@/components/ui/Input";
import Field from "@/components/Field";
import DateTimeInput from "@/components/ui/DateTimeInput";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";

const schema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/\w+\s\w+/, "Must be at least two words"),
  email: z.string().email(),
  birthDate: z.date().or(z.string().min(1, "Date of Birth is required")),
});

type RegisterForEventFormValues = z.infer<typeof schema>;
type RegisterFormProps = Omit<ComponentProps<"form">, "onSubmit">;

export default function RegisterForm({ className, ...props }: RegisterFormProps) {
  const [isClient, setIsClient] = useState(false);
  const form = useForm<RegisterForEventFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      birthDate: "",
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, [isClient]);

  const handleFormSubmit = () => {};

  const needShowSpinner = form.formState.isSubmitting;

  if (!isClient)
    return (
      <form
        className={cn(
          "bg-white rounded-l-[2.5rem] px-10 pt-[20px] md:pt-[100px] md:px-[80px]",
          className
        )}
      >
        <div className=" flex flex-col max-w-[800px] mx-auto gap-6">
          <p className="text-[32px] font-semibold">Register to Event</p>
        </div>
      </form>
    );

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

          <Button as="button" variant="secondary" type="submit" className="rounded-md text-white">
            Register
          </Button>
        </div>
      </form>

      {needShowSpinner && <Spinner backdrop />}
    </FormProvider>
  );
}