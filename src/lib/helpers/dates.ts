import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT, DEFAULT_LOCALE, DEFAULT_TIME_FORMAT } from "../const";

type FormatDateTimeOptions = {
  locale?: string;
  format?: string;
};

export const formatDate = (date: Date | string | number, options?: FormatDateTimeOptions) => {
  const { format = DEFAULT_DATE_FORMAT } = options ?? {};

  const parsed = dayjs(new Date(date), format);

  if (!parsed.isValid()) {
    return "";
  }

  return parsed.format(format);
};

export const formatTime = (date: Date | string | number, options?: FormatDateTimeOptions) => {
  const { locale = DEFAULT_LOCALE, format = DEFAULT_TIME_FORMAT } = options ?? {};

  return formatDate(date, { locale, format });
};
