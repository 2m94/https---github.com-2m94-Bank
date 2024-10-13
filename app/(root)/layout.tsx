import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets:['latin'],
  weight:['400', '700'],
  variable:'--font-ibm-plex-serif'
})
export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
        SIDEBAR
      {children}
    </main>
  );
}