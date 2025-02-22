import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Turborepo With Tailwind",
  description: "A stater monorepo with Turborepo and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
