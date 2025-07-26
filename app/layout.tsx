import type { Metadata } from "next";
import "./globals.css";
import { yekanFont } from "@/utils/fonts";
import Layout from "@/components/layout/Layout";

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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
