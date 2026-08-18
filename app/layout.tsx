import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javier Nemoga | AI & Data Portfolio",
  description:
    "Portfolio of Javier Nemoga — LLM Trainer, Data Analyst, Telecommunications Engineer and Data Science Specialist.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
