import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Duoeduca",
  description: "Duoeduca - Plataforma de ensino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased ${fontSans.variable}`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
