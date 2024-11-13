import type { Metadata } from 'next';
import './globals.css';
import { Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Maverick',
    description: 'Shop for cars'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${outfit.className}  antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
