import { DEFAULT_LOCALE } from "../const";

export const formatCurrency = (
  value: number,
  options?: Intl.NumberFormatOptions & { locale?: Intl.LocalesArgument }
) => {
  const { locale = DEFAULT_LOCALE, ...restOptions } = options ?? {};

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    ...restOptions,
  });

  return formatter.format(value);
};
