"use client"

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import StickyContactItems from "@/components/shared/StickyContactItems";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col dark">
        <Header />
        <main className="flex-1">{children}</main>
        <StickyContactItems />
        <Footer/>
      </div>
    );
  }