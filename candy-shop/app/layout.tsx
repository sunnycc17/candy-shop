import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sweet-delights.store"),
  title: "Sweet Delights | Candy Shop",
  description:
    "Discover premium sweets, unique handmade treats, imported candies, gift boxes, and seasonal bundles. Your destination for everything sugary.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sweet Delights – Premium Candy Delivered Fresh",
    description:
      "Explore curated candies, exclusive bundles, and fresh seasonal sweets. Perfect for gifting, parties, or treating yourself.",
    url: "https://sweet-delights.store",
    siteName: "Sweet Delights",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Delights – Your Favorite Candy Shop",
    description:
      "Shop imported candies, handmade sweets, and limited-edition bundles. Fast delivery, amazing taste.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased  text-[#eceaea]">{children}</body>
    </html>
  );
}
