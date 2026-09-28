import type { Metadata } from "next";
import "./globals.css";
import { fontPoppins, fontSatoshi } from "@/src/lib/fonts";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Discover Your Passion, Build Your Skills",
  icons: './favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", fontPoppins.variable, fontSatoshi.variable, "font-sans", geist.variable)}
    >
      <body className="flex flex-col">
        {children}
      </body>
    </html>
  );
}
