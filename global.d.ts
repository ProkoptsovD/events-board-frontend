declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: any;
  export default content;
}

declare module "react-calendar/dist/Calendar.css" {
  const content: any;
  export default content;
}

type PropsWithClassName = {
  className?: string;
};
type Option = { label: string; value: any };

type APIRequestError = {
  message: string;
  status: number;
};
type APIRequestSuccess<TData = unknown> = {
  data: TData;
  meta?: { count: number; totalCount: number };
};

type BaseSearchParams = {
  perPage?: string;
  page?: string;
  q?: string;
};

type EventSearchParams = BaseSearchParams & {
  sortBy?: string;
};

type PageProps<Params, SearchParams = undefined> = {
  params: Params;
  searchParams: SearchParams;
};
