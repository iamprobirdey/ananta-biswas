import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ananta Biswas",
  description: "Modern ENT care with patient-first treatment plans and simple clinic contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-sans text-slate-700 antialiased">{children}</body>
    </html>
  );
}
