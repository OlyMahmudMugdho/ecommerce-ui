import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PrimarySearchAppBar from "@/components/navigation/Navbar";

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
        <h1>Hello</h1>
      </body>
    </html>
  );
}
