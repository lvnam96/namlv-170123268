import './global.css';
import type { Metadata } from 'next';
import { baseUrl } from '@/robots';
import ScrollToTopAuto from '@/components/ScrollToTopAuto';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'DevSoft - Giải pháp công nghệ đổi mới và sáng tạo',
    template: '%s | DevSoft - Giải pháp công nghệ đổi mới và sáng tạo',
  },
  description:
    'DevSoft Vietnam là công ty cung cấp các giải pháp phần mềm và công nghệ, góp phần hỗ trợ quá trình chuyển đổi số của quốc gia.',
  openGraph: {
    title: 'DevSoft - Giải pháp công nghệ đổi mới và sáng tạo',
    description:
      'DevSoft Vietnam là công ty cung cấp các giải pháp phần mềm và công nghệ, góp phần hỗ trợ quá trình chuyển đổi số của quốc gia.',
    url: baseUrl,
    siteName: 'DevSoft Vietnam',
    locale: 'vi_VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="text-black bg-white dark:text-white dark:bg-black">
      <link rel="manifest" href="/site.webmanifest" />
      <body className="antialiased">
        <Toaster />
        <Navbar />
        {children}
        <ScrollToTopAuto />
        <Footer />
      </body>
    </html>
  );
}
