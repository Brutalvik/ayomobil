import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modals/Modal";

export const metadata: Metadata = {
  title: "AyoMobil",
  description: "Peer-to-peer car sharing app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen title="Login" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
