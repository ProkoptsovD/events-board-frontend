"use client";

import cn from "classnames";
import { ChangeEvent, KeyboardEvent, useState } from "react";

import Input, { InputProps } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type SearchInputProps = PropsWithClassName &
  Pick<InputProps, "defaultValue" | "onChange"> & {
    inputProps?: Omit<InputProps, "value" | "defaultValue" | "onChange">;
    searchButtonText?: string;
    onSearch?: (q: string) => void;
  };

export default function SearchInput({
  className,
  searchButtonText,
  onSearch,
  inputProps,
  defaultValue,
  onChange,
}: SearchInputProps) {
  const [value, setValue] = useState<string>(String(defaultValue ?? ""));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);

    onChange?.(e);
  };

  const handleSearch = () => {
    onSearch?.(value);
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(value);
    }
  };

  return (
    <span className={cn("flex flex-row", className)}>
      <Input
        className="w-full [&_.input]:h-full"
        {...inputProps}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />

      {
        <Button
          as="button"
          variant="secondary"
          className="relative -left-[4px] rounded-r-md"
          onClick={handleSearch}
        >
          {searchButtonText || "Search"}
        </Button>
      }
    </span>
  );
}
