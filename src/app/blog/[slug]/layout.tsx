import ContactMe from "@/components/ContactMe/ContactMe";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
      <ContactMe />
    </>
  );
}
