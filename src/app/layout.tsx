import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PrimarySearchAppBar from "@/components/navigation/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
    title : "E-Commerce",
    description : "Online Shopping"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className +  "min-h-screen"}>
        <PrimarySearchAppBar suppressHydrationWarning></PrimarySearchAppBar>
        {children}
        
      </body>
    </html>
  );
}
