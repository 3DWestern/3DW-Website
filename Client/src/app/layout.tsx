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
  publisher: "3D Western",
  openGraph: {
	title: "3D Western",
	description: "Western University's Official 3D Printing Club",
	url: "https://3dwestern.ca", 
	siteName: "3D Western",
	images: [
    {
      url: "https://3dwestern.ca/banner.png",
      width: 1200,
      height: 630,
      alt: "3D Western: Western University's Official 3D Printing Club",
    },
  ],  
	locale: "en_US",
	type: "website",
  },
  icons: { // TODO: Optimize icons for platforms 
	icon: '/favicon.ico',
	shortcut: '/favicon.ico',
	apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  twitter: {
  	card: "summary_large_image",
  	title: "3D Western",
  	description: "Western University's Official 3D Printing Club",
  	images: [
      {
        url: "https://3dwestern.ca/banner.png",
        width: 1200,
        height: 630,
        alt: "3D Western: Western University's Official 3D Printing Club",
      },
    ], 
  //	creator: "@yourTwitterHandle", // optional
},
};

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
