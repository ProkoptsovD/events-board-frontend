"use client";

import cn from "classnames";
import { MouseEvent, PointerEvent, useCallback, useState } from "react";

import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { isNullish } from "@/lib/type.guards";

import Button from "@/components/ui/Button";

type SelectProps = PropsWithClassName & {
  value?: any;
  options?: Option[];
  placeholder?: string;
  keepOpenOnSelect?: boolean;
  onChange?: (event: MouseEvent<HTMLElement>, option: Option) => void;
  renderOption?: (option: Option, index?: number) => any;
};

export default function Select({
  value,
  options,
  onChange,
  className,
  renderOption,
  keepOpenOnSelect = false,
  placeholder = "Select option",
}: SelectProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const closeDropdown = useCallback(() => setIsOpened(false), []);
  const ref = useOutsideClick<HTMLDivElement>(closeDropdown);

  function toggle(event: PointerEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setIsOpened(!isOpened);
  }

  function handleOptionSelect(event: MouseEvent<HTMLElement>, option: Option) {
    onChange?.(event, option);

    if (!keepOpenOnSelect) {
      closeDropdown();
    }
  }

  const selectedValue = value === "" || isNullish(value) ? placeholder : value;

  return (
    <div ref={ref} className="relative inline-block">
      <Button
        as="button"
        variant="outline"
        type="button"
        onClick={toggle}
        className={cn("px-4", { "text-gray-400": selectedValue === placeholder }, className)}
      >
        {selectedValue}
      </Button>

      {isOpened && (
        <div
          id="dropdown"
          className="z-10 absolute top-100 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {options?.map((option, index) => {
              if (renderOption) return renderOption(option, index);

              return (
                <li key={index}>
                  <Button
                    as="button"
                    variant="text"
                    value={option.value}
                    onClick={(e) => handleOptionSelect(e, option)}
                    className="block w-full !text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {option.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
