import type { Metadata } from "next";
import { Lato, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import { SITE_URL } from "@/lib/site";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Senior Transitions Group | Portland–Vancouver Senior Living & Transition Help",
    template: "%s | Senior Transitions Group",
  },
  description:
    "Portland–Vancouver metro: senior living placement, home transition planning, downsizing, and move coordination for families—no-obligation conversation at (503) 755-8555.",
  keywords: [
    "senior transitions",
    "senior living Portland",
    "assisted living placement Vancouver WA",
    "downsizing",
    "senior move management",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Senior Transitions Group",
    title: "Senior Transitions Group | Portland–Vancouver Senior Transitions",
    description:
      "Placement, real estate & downsizing, and move coordination for families in the Portland, OR and Vancouver, WA metros.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Transitions Group",
    description:
      "Senior living placement and home transition help in the Portland–Vancouver metro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${cormorant.variable} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
        <Script id="statcounter-config" strategy="afterInteractive">
          {`var sc_project=13212616; var sc_invisible=1; var sc_security="6136a1c0";`}
        </Script>
        <Script
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
          async
        />
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics Made Easy - Statcounter"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="statcounter"
                src="https://c.statcounter.com/13212616/0/6136a1c0/1/"
                alt="Web Analytics Made Easy - Statcounter"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
