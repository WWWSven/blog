import { RootProvider } from 'fumadocs-ui/provider';
import './globals.css'
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
      <Analytics/>
      <RootProvider search={{
          links: [
            ['Home', '/'],
            ['Blog', '/blog'],
          ],
        }}
      >
        {children}
      </RootProvider>
      </body>
    </html>
  );
}
