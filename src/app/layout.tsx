import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evento | Find events around you",
  description: "Nisi incididunt tempor velit sit.",
};

type Props = PropsWithChildren;

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll bg-gray-950 text-white antialiased`}
      >
        <Container>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
