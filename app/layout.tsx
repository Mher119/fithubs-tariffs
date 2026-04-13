import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css"; 

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "FitHub - Тарифы",
  description: "Выбери свой тариф",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[#12171d] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}