import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATLAS OS",
  description: "AI Business Operating System for creators",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
