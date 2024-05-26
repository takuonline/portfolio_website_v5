"use client";
import Navbar from "@/components/NavBar/Navbar";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
