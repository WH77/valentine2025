import type { Metadata } from "next";
import { Tangerine } from 'next/font/google';
import "./globals.css";

const tangerineFont = Tangerine({
  weight: "700",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "<3",
  description: "Will you be my Valentine?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tangerineFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
