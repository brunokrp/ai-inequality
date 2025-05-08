import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
});

const grotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-grotesk', 
});

export const metadata: Metadata = {
  title: "AI Inequality",
  description: "With love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${grotesk.variable} antialiased`}>
      <body
        className="bg-white"
      >
        {children}
      </body>
    </html>
  );
}
