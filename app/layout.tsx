import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Pratap Mohan", template: "%s | Pratap Mohan" },
  description: "Learn market structure, liquidity concepts, disciplined risk management, and practical trading education.",
  keywords: ["trading", "prop firms", "brokers", "risk management", "trader portfolio"],
  openGraph: { title: "Pratap Mohan", description: "Markets, risk, and disciplined execution.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
