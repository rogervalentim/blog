import type { Metadata } from "next";
import { PT_Sans_Caption, Inter } from "next/font/google";
import "./globals.css";

const ptSansCaption = PT_Sans_Caption({
  variable: "--font-pt-sans-caption",
  subsets: ["latin"],
  weight: "400"
});

const inter = Inter({
  variable: "--font-pt-sans-caption",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog and landing page"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${ptSansCaption.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
