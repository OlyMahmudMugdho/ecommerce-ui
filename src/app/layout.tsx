import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PrimarySearchAppBar from "@/components/navigation/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <PrimarySearchAppBar suppressHydrationWarning={true}></PrimarySearchAppBar>
        {children}
        
      </body>
    </html>
  );
}
