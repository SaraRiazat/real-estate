import type { Metadata } from "next";
import "./globals.css";
import { yekanFont } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Real Estate",
  description: "A modern real estate application built with Next.js by Sara Riazat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${yekanFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
