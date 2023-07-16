/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0697f8',
        opacity_bg: "rgba(255, 255, 255, 0.1)",
      },
      flex: {
        "2": '2 2 0%',
        "3": '3 3 0%',
        "4": '4 4 0%',
      },
      maxWidth: {
        screen: '1200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-notoSansKR)'],
      },
      fontSize: {
        heading: ['30px', { fontWeight: 700, lineHeight: '1.3' }],
        heading_sub: ['24px', { fontWeight: 700, lineHeight: '1.3' }],
        body: ['16px', { fontWeight: 400, lineHeight: '1.3' }],
        detail: ['16px', { fontWeight: 300, lineHeight: '1.3' }],
        detail_s: ['14px', { fontWeight: 400, lineHeight: '1.3' }],
        accent: ['inherit', { fontWeight: 500, colors: "red" }],
      },
      boxShadow: {
        card: '0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #fff',
        card_inset: 'inset 0.2rem 0.2rem 0.5rem var(--greyLight-2), inset -0.2rem -0.2rem 0.5rem var(--white)',
        box: '2px 2px 4px rgba(0, 0, 0, 0.25)',
      },
      borderColor: {
        box: '1px solid rgba(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [],
}