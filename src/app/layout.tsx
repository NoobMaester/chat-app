import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blip | Real-time Chat Application",
  description: "A modern real-time chat application built with Next.js. Connect and communicate with friends and colleagues instantly.",
  keywords: ["chat app", "messaging", "real-time communication", "next.js", "instant messaging"],
  authors: [{ name: "Your Name" }],
  creator: "Noobmaester",
  publisher: "Noobmaester",
  applicationName: "Chat App",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Blip | Real-time Messaging Platform",
    description: "Connect and communicate in real-time with our modern chat application",
    type: "website",
    url: "https://your-domain.com",
    siteName: "Chat App",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
