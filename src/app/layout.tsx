import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VoiceProvider } from "@/hooks/useVoiceContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YantriOS | Your voice. Your computer. One AI.",
  description: "Talk to your computer in natural language. Understand what is on your screen, control your apps, and get work done without clicking through endless menus.",
  openGraph: {
    title: "YantriOS | Voice Operating System",
    description: "An AI computer assistant that lets you control your computer and applications using natural voice commands.",
    url: "https://omniai.example.com",
    siteName: "YantriOS",
    images: [
      {
        url: "https://omniai.example.com/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <VoiceProvider>
          {children}
        </VoiceProvider>
      </body>
    </html>
  );
}
