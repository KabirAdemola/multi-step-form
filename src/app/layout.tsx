"use client";

import { FormProvider } from "~/components/FormContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200/50`}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
