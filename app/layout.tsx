import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brain Health Course | Exceed Learning Center',
  description: 'An 8-week evidence-based Brain Health Course using neuroscience and cognitive psychology to sharpen your memory, improve focus, and boost problem-solving skills.',
  openGraph: {
    title: 'Brain Health Course | Exceed Learning Center',
    description: 'Sharpen your memory, improve focus, and boost problem-solving skills with our 8-week Brain Health Course.',
    type: 'website',
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
