import './globals.css';
import { Poppins } from 'next/font/google';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Maneesha',
  description: 'Blog website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} flex h-screen flex-col  justify-between p-12`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
