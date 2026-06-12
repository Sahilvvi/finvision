import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finvision | Premium Finance & Risk Management Education",
  description: "Accelerate your career in finance, investment banking, and risk management. Premium preparation for CFA®, FRM®, and practical Financial Modeling classes led by Ashwini Bajaj.",
  metadataBase: new URL("https://finvision.com"),
  openGraph: {
    title: "Finvision | Premium Finance & Risk Management Education",
    description: "Accelerate your career in finance, investment banking, and risk management. Practical coaching, CFA® & FRM® certifications led by Ashwini Bajaj.",
    url: "https://finvision.com",
    siteName: "Finvision",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Finvision Education and Career Guidance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finvision | Premium Finance & Risk Management Education",
    description: "Accelerate your career in finance, investment banking, and risk management.",
    creator: "@finvision",
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
      className={`${inter.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-background text-txt-primary flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
