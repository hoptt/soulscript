import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";
import  localFont  from 'next/font/local';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "서호준 - Frontend Developer",
  description:
    "3년 경력의 프론트엔드 개발자 서호준의 포트폴리오입니다. React, Next.js, TypeScript 전문.",
  openGraph: {
    title: "서호준 - Frontend Developer",
    description:
      "3년 경력의 프론트엔드 개발자 서호준의 포트폴리오입니다. React, Next.js, TypeScript 전문.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "서호준 - Frontend Developer",
    description:
      "3년 경력의 프론트엔드 개발자 서호준의 포트폴리오입니다. React, Next.js, TypeScript 전문.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          rel="icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100 pt-14`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
