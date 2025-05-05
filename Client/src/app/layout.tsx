import type { Metadata } from "next";
import { Jersey_25 } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";

// font definition 
const jersey_25 = Jersey_25({
  variable: "--font-jersey-25",
  subsets: ["latin"],
  weight: "400",
});

// theme color can be defined here if needed 
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}; 

// global metadata for SEO, can be overridden by specific individual pages
export const metadata: Metadata = {
  title: "3D Western",
  description: "Western University's Official 3D Printing Club",
  keywords: ["3D Printing", "Western University", "3D Western", "Engineering", "Western Printing Club"],
  creator: "3D Western Devs",
  publisher: "3D Western",
  robots: {
    index: true,
    follow:true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
// if page is contacts, then render black, if page is not contacts then render purple 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${jersey_25.className}`}>
             {children}
      </body>
    </html>
  );
}
