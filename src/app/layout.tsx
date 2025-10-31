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
        url: "/images/martins_logo.png",
        width: 1200,
        height: 630,
        alt: siteConfig.company.logoAlt,
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
