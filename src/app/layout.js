import { Host_Grotesk, Fustat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";


const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  display: "swap",
});

const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-fustat",
  display: "swap",
});

export const metadata = {
  title: "AS Research Lab - Advancing AI & Computational Science",
  description: "Research laboratory focused on cutting-edge AI, machine learning, and computational science. Pushing boundaries in neural networks, computer vision, and edge computing.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} ${fustat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
