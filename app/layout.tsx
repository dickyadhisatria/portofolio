import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { cn } from '../lib/cn';

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Dicky Adhi Satria — Engineering Scalable Backends, Spatial Systems, and AI Pipelines',
  description:
    'Portfolio of Dicky Adhi Satria, backend developer focused on scalable APIs, spatial systems, and ML-assisted data pipelines.',
  keywords: ['Backend Developer', 'Spatial Systems', 'Machine Learning', 'API Development', 'Microservices', 'PostGIS', 'TensorFlow', 'Keras', 'Node.js', 'Golang', 'Python', 'Docker', 'CI/CD', 'Software Engineering'],
  authors: [{ name: 'Dicky Adhi Satria' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-thin" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, 'bg-background font-sans text-foreground antialiased')} suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=["bis_","bis_skin_","__processed_","__plugin__"];var s=Element.prototype.setAttribute;Element.prototype.setAttribute=function(n,v){for(var i=0;i<p.length;i++){if(n.indexOf(p[i])===0)return}return s.call(this,n,v)};document.querySelectorAll("*").forEach(function(e){e.getAttributeNames().forEach(function(n){for(var i=0;i<p.length;i++){if(n.indexOf(p[i])===0)e.removeAttribute(n)}})})})()`,
          }}
        />{children}
      </body>
    </html>
  );
}
