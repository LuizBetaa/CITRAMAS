import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. Citramas Alfa Sejahtera",
  description: "Technology by Strategy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
