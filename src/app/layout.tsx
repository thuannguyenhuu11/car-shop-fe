import type { Metadata } from 'next';
import './globals.css';
import { Outfit } from 'next/font/google';

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
                {children}
            </body>
        </html>
    );
}
