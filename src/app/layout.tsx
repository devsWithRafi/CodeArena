import type { Metadata } from 'next';
import { Poppins, Abel } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import ReduxProvider from '@/context/ReduxProvider';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const abel = Abel({
  variable: '--font-abel',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'CodeArena',
  description:
    'A code editor built with Next.js, Tailwind CSS, and TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${abel.variable} h-full antialiased font-poppins`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ReduxProvider>{children}</ReduxProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
