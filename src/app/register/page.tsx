import RegisterForm from "@/components/RegisterForm";
import Header from "@/components/ui/Header";
import Logo from "@/components/ui/Logo";
import { formatCurrency } from "@/lib/currency";
import { formatDate } from "@/lib/dates";
import { MapPinIcon, Clock2Icon, TicketIcon } from "lucide-react";
import Link from "next/link";

const loadEvent = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ name: "Cool cool event", location: "New York City", time: new Date(), cost: 0 });
    }, 1000);
  });
};

export default async function Page() {
  const { name, location, time, cost } = await loadEvent();

  const formattedCost = cost ? formatCurrency(cost) : "Free";

  return (
    <div className="bg-brand-300 h-screen grid grid-cols-12 grid-rows-12 gap-2">
      <Header className="col-start-1 col-end-5 row-span-1 bg-brand-300">
        <Link href="/" className="col-start-1 cursor-pointer">
          <Logo />
        </Link>
      </Header>

      <div className="col-start-2 col-end-5 row-start-4 pl-4 pr-4 text-center text-white text-[20px]">
        <h1 className="text-center">
          Great choice, mate! You are going to register for the <i>{name}</i> event!
        </h1>
        <br />
        <p className="flex items-center gap-2 text-left text-[16px] mb-1">
          <Clock2Icon width={20} height={20} /> When: <b>{formatDate(time)}</b>
        </p>
        <p className="flex items-center gap-2 text-left text-[16px] mb-1">
          <MapPinIcon width={20} height={20} /> Where: <b>{location}</b>
        </p>
        <p className="flex items-center gap-2 text-left text-[16px]">
          <TicketIcon width={20} height={20} /> Tickets: <b>{formattedCost}</b>
        </p>
      </div>

      <RegisterForm className="col-start-6 col-span-full row-span-full" />
    </div>
  );
}
