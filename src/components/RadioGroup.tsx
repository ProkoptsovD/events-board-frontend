"use client";

import cn from "classnames";
import { useController } from "react-hook-form";

type Option = { label: string; value: any };

type RadioGroupProps = {
  label: string;
  name: string;
  options: Option[];
};

export default function RadioGroup({ label, name, options }: RadioGroupProps) {
  const { field } = useController({ name });

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
