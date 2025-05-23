import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});


export const metadata: Metadata = {
  title: "Zelimu",
  description: "Zelimu - Learn and Teach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
