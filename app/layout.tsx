import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight:['400', '500','600','700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "WeCare-YourHome",
  description: "WeCare YourHome is a platform to supply medical equipments like BPAP, CPAP.",
  icons: {
    icon: '/assets/logo2.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
