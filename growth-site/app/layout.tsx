import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yassir Hanafi – Quantitative Marketer",
  description:
    "Full‑stack growth & data expert turning performance into predictable ROI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[rgb(var(--color-bg))] text-[rgb(var(--color-fg))] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
