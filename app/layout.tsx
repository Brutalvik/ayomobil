import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./Providers/ToasterProvider";

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
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
