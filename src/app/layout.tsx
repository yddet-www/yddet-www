import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wikrama Wardhana",
  description: "Personal web portfolio of Wikrama Wardhana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
