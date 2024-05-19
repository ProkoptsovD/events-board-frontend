const isProductionMode = process.env.NODE_ENV === "production";

export const envConfig = {
  SERVER_URL: isProductionMode
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : process.env.NEXT_PUBLIC_SERVER_URL_DEV,
};
