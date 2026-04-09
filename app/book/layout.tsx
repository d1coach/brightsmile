import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | BrightSmile Dental Care",
};

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
