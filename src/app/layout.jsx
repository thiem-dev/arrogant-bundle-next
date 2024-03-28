import { Inter } from 'next/font/google';
import './globals.css';
import '../css/main.css';
import ShoppingCartProvider from './components/ShoppingCartContext/ShoppingCartProvider.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arrogant Bundle Nextjs',
  description: 'A clone of Humble Bundle',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ShoppingCartProvider>
        <body className={inter.className}>{children}</body>
      </ShoppingCartProvider>
    </html>
  );
}
