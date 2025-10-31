import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default: siteConfig.company.name,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.about.short,
  metadataBase: new URL("https://www.martinscom.top"),
  openGraph: {
    title: siteConfig.company.name,
    description: siteConfig.about.short,
    locale: "pt_BR",
    siteName: siteConfig.company.name,
    type: "website",
    images: [
      {
        url: "https://www.martinscom.top/images/martinscomerciologo.png",
        width: 1200,
        height: 630,
        alt: siteConfig.company.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
        <head>
          <meta name="facebook-domain-verification" content="xijo57gdkycb3xtuo6nzg33r9bhqbb" />
          <meta property="og:image" content="https://www.martinscom.top/images/martinscomerciologo.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://www.martinscom.top/images/martinscomerciologo.png" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <div className="site-wrapper">
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
  );
}
