import SortByClientComponent from "./SortByClientComponent";
import SortByPrefetchComponent from "./SortByPrefetchComponent";

export default function SortBy({ className }: PropsWithClassName) {
  return (
    <SortByPrefetchComponent>
      <SortByClientComponent className={className} />
    </SortByPrefetchComponent>
  );
}
