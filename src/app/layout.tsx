import "./globals.css";
import cn from "classnames";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryClientProvider from "@/lib/providers/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventify | Find events platform",
  description: "Great events for better mood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
