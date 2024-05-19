"use client";

import cn from "classnames";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Filler,
  Title,
} from "chart.js";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";

import { useEventRegistrationStatsQuery } from "@/lib/hooks/queries/useEventRegistrationStatsQuery";
import { formatDate } from "@/lib/helpers/dates";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Title);

type EventRegisterChartProps = { eventId: number } & PropsWithClassName;

const config = {
  animation: false as const,
  scales: {
    yAxis: {
      beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Registrations per day",
    },
  },
};

const getConfig = (max: number) => {
  // @ts-ignore
  config.scales.yAxis.max = max;
  return config;
};

export default function EventRegisterChart({ eventId, className }: EventRegisterChartProps) {
  const { data: stats = [], isLoading } = useEventRegistrationStatsQuery(eventId);

  const groupedStats = useMemo(() => {
    return stats?.reduce(
      (acc, { count, date }) => {
        acc.labels.push(formatDate(date, { format: "MMM DD" }));
        acc.data.push(count);

        return acc;
      },
      { labels: [] as string[], data: [] as number[] }
    );
  }, [stats]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-12 w-12" />
      </div>
    );
  }

  if (!stats) return null;

  const data = {
    labels: groupedStats?.labels,
    datasets: [
      {
        label: "Count",
        data: groupedStats?.data,
        borderColor: "#2B293D", // accent-100 color in tailwind
        borderWidth: 2,
        pointRadius: 4,
        fill: true,
        backgroundColor: "#d4c57995",
      },
    ],
  };

  return (
    <div className={cn("max-w-[900px] mx-auto [*_canvas]:mx-auto", className)}>
      <Line data={data} options={getConfig(Math.max(...(groupedStats?.data ?? [])) + 2)} />
    </div>
  );
}
