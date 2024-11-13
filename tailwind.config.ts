import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                Red: '#db2d2e',
                White: '#ffffff',
                Black: '#000000',
                Orange: '#db2d2e',
                WhiteGray: '#bfa37c',
                Blur: '#f7f5f2'
            }
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        }
    },
    plugins: []
};
export default config;
