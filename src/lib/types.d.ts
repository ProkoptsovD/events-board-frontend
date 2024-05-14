type PropsWithClassName = {
  className?: string;
};
type Option = { label: string; value: any };

declare module "react-calendar/dist/Calendar.css" {
  const content: any;
  export default content;
}
