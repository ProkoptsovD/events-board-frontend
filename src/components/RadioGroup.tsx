"use client";

import { useQuery } from "@tanstack/react-query";
import cn from "classnames";
import { useEffect, useRef } from "react";
import { useController } from "react-hook-form";

type RadioGroupBaseProps = {
  label: string;
  name: string;
};

type RadioGroupProps =
  | (RadioGroupBaseProps & {
      options: Option[];
    })
  | (RadioGroupBaseProps & { loadAsyncOptions: () => Promise<{ data: Option[] } | null> });

export default function RadioGroup({ label, name, ...restProps }: RadioGroupProps) {
  const resolvedQueryFn =
    "loadAsyncOptions" in restProps
      ? restProps.loadAsyncOptions
      : () => Promise.resolve({ data: restProps.options });

  const { data, isSuccess, isPlaceholderData } = useQuery({
    queryKey: [name],
    queryFn: resolvedQueryFn,
    staleTime: 0,
    placeholderData: {
      data: [
        { label: "Loading...", value: "1" },
        { label: "Loading...", value: "2" },
        { label: "Loading...", value: "3" },
      ],
    },
  });

  const { data: options = [] } = data ?? {};
  const { field } = useController({ name });
  const isDefaultValueSet = useRef<boolean>(false);

  useEffect(() => {
    if (isSuccess && !isPlaceholderData && !isDefaultValueSet.current) {
      field.onChange(options[0].value);
      isDefaultValueSet.current = true;
    }
  }, [field, isSuccess, isPlaceholderData, options]);

  return (
    <fieldset>
      <p className="pb-2">{label}</p>
      <ul className="flex flex-col gap-1">
        {options.map(({ label: optionLabel, value }, index) => {
          const isChecked = field.value === value;

          return (
            <li key={index} className="inline-flex gap-2">
              <input
                id={String(index)}
                name={name}
                type="radio"
                value={value}
                onChange={field.onChange}
                checked={isChecked}
                className="hidden"
              />

              <label
                htmlFor={String(index)}
                className="inline-flex items-center hover:cursor-pointer text-[14px]"
              >
                <span
                  className={cn("w-4 h-4 inline-block mr-1 border border-grey transition", {
                    "bg-choice-100 shadow-[0px_0px_0px_2px_white_inset]": isChecked,
                  })}
                />

                <span className={cn("transition", { "text-choice-100": isChecked })}>
                  {optionLabel}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
