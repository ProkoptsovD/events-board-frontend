import { z } from "zod";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";

import { MIN_PARTICIPANT_AGE } from "../const";

dayjs.extend(isLeapYear);

export const birthDate = z.coerce.date().refine(
  (date) => {
    const today = dayjs();
    const minAgeDate = today.subtract(MIN_PARTICIPANT_AGE, "year");

    const birthDate = dayjs(date);
    const age = today.diff(birthDate, "year");
    const isLeapYearBirthday = birthDate.month() === 1 && birthDate.date() === 29;

    if (age > 18) {
      return true;
    } else if (age < 18) {
      return false;
    } else {
      if (isLeapYearBirthday) {
        if (today.isLeapYear() && today.month() === 1 && today.date() === 29) {
          return true;
        } else if (!today.isLeapYear() && today.month() === 1 && today.date() === 28) {
          return true;
        }
        return false;
      }
      return !birthDate.isAfter(minAgeDate);
    }
  },
  {
    message: "Age must be 18 years or older",
  }
);
