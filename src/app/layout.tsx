import type { Metadata } from "next";
import { robotoFont } from "@/config/fonts";

import "./globals.css";



export const metadata: Metadata = {
  title: "JR Full Stack Utilidades",
  description: "Aplicacion de utilidades cotidianas de un programador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={robotoFont.className}>{children}</body>
    </html>
  );
}
