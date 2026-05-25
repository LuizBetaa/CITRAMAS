import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/language-context";

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
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
