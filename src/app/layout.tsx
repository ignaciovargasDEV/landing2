import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import SmoothScrolling from "./SmoothScroll";
import { ThemeProvider } from "next-themes";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alia Abogado",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={clsx(
          dmSans.className,
          "antialiased bg-black text-white overflow-clip"
        )}
      >
        <SmoothScrolling>
          <ThemeProvider attribute="class">{children} </ThemeProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}