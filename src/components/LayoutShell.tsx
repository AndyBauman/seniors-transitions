"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/SchemaMarkup";
import { UTMCapture } from "@/components/marketing/UTMCapture";
import { ScrollTracker } from "@/components/marketing/ScrollTracker";
import { StickyPhoneBar } from "@/components/marketing/StickyPhoneBar";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <OrganizationSchema />
      <Header />
      <main>{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <UTMCapture />
        <ScrollTracker />
        <StickyPhoneBar />
      </Suspense>
    </>
  );
}
