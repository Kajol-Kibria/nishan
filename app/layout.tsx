import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";
import { Nav } from "@/src/components/Nav";
import { Footer } from "@/src/components/Footer";
import { ScrollProvider } from "@/src/components/ScrollProvider";
import "./globals.css";

/* Self-hosted editorial type system */
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nishan Lab - Department of Pharmacy, Dhaka International University",
  description:
    "Nishan Lab - a research group in the Department of Pharmacy at Dhaka International University, studying natural product chemistry and pharmacology. Research, people, publications and contact.",
  openGraph: {
    type: "website",
    siteName: "Nishan Lab",
    title: "Nishan Lab - Natural Product Chemistry & Pharmacology",
    description:
      "A research group in the Department of Pharmacy at Dhaka International University: medicinal plants, phytochemistry, and computational pharmacology.",
    images: [
      {
        url: "https://images.pexels.com/photos/11730899/pexels-photo-11730899.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
        width: 1200,
        height: 630,
        alt: "A researcher working in the laboratory",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="bg-paper text-ink min-h-screen flex flex-col">
        <ScrollProvider>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
