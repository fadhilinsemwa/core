// app/layout.tsx
'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

const isDebug = process.env.NEXT_PUBLIC_DEBUG === 'true';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (isDebug) console.log("Debug: RootLayout is rendering");
  }, []);

  return (
    <html lang="en">
      <head>
        <title>MUDA</title>
        <meta name="description" content="All application in one area" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
