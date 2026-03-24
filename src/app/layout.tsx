import type { Metadata } from "next";
import { Lato, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/SchemaMarkup";

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
  title: "Senior Transitions Group | Expert Senior Transition Specialists",
  description: "We guide seniors and families through life's most significant housing changes with expertise, compassion, and unwavering support.",
  keywords: ["senior transitions", "senior living", "downsizing", "real estate", "placement services", "move management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${cormorant.variable} antialiased`}>
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
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
