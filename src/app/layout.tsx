import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgendeAqui DCET",
  description: "Seu espaço, sua visão, sua voz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
