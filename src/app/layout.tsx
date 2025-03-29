import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./font";
import ClientBody from "./ClientBody";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "UMBC Ethical Software Lab V1",
  description: "Ethical Software Lab V1 - Digital Nutrition Labels for Software",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <ClientBody>
        {children}
        <Toaster />
      </ClientBody>
    </html>
  );
}
