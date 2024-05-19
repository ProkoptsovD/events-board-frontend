type BaseOptions = Omit<RequestInit, "method">;

type GETOptions = Omit<BaseOptions, "body">;
type POSTOptions = BaseOptions;

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3003";

const baseFetch = async <TData = unknown, TError = unknown>(
  url: string,
  options: RequestInit
): Promise<TData | TError> => {
  try {
    const apiUrl = API_URL + url;
    const response = await fetch(apiUrl, options);
    const data = response.json();

    return data as TData;
  } catch (error) {
    console.log(error);
    throw error as TError;
  }
};

export const httpClient = {
  get: async <TData = unknown, TError = APIRequestError>(
    url: string,
    options?: GETOptions
  ): Promise<APIRequestSuccess<TData> | TError> => {
    const response = await baseFetch<APIRequestSuccess<TData>, TError>(url, {
      ...options,
      method: "GET",
    });

    return response;
  },
  post: async <TData = unknown, TError = APIRequestError>(
    url: string,
    options?: POSTOptions
  ): Promise<APIRequestSuccess<TData> | TError> => {
    const response = await baseFetch<APIRequestSuccess<TData>, TError>(url, {
      method: "POST",
      ...options,
    });

    return response;
  },
};
