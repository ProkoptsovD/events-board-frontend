export const isString = (value: unknown): value is string => typeof value === "string";

export const isNullish = (value: unknown) => {
  return value === null || value === undefined;
};
