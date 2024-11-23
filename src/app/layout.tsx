import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/lib/aos";
import MainLayout from "@/components/layout/MainLayout";


const roboto = Roboto({ subsets: [], weight: "500" });
// const inter = Inter({ subsets: [], weight: "400" });

export const metadata: Metadata = {
  title: "Altas",
  description: "Altas",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${roboto.className}`}>
      <AOSInit />
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
