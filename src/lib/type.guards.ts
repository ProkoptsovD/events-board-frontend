export const isString = (value: unknown): value is string => typeof value === "string";

export const isNullish = (value: unknown) => {
  return value === null || value === undefined;
};

export const isNumber = (value: unknown): value is number => typeof value === "number";
