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
        primary: '#f0e4d3',
        sub_n: '#76a1b3',
        sub_p: '#ada8b6',
        sub_t: '#f6f3f0',
      },
      flex: {
        "2": '2 2 0%',
        "3": '3 3 0%',
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
        body: ['18px', { fontWeight: 400, lineHeight: '1.3' }],
        detail: ['16px', { fontWeight: 300, lineHeight: '1.3' }]
      }
    },
  },
  plugins: [],
}