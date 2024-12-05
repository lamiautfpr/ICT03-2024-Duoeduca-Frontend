"use client";
import PrivateRoute from "@/shared/components/PrivateRoute";
import { checkIsPublicRoute } from "@/shared/utils/check-is-public-route";
import { NextUIProvider } from "@nextui-org/react";
import { Inter as FontSans } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  const isPublicPage = checkIsPublicRoute(pathName);

  return (
    <html lang="pt-BR">
      <head>
        <title>Duoeduca</title>
      </head>
      <body className={`antialiased ${fontSans.variable}`}>
        <NextUIProvider>
          {isPublicPage && <>{children}</>}
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
        </NextUIProvider>
      </body>
    </html>
  );
}
