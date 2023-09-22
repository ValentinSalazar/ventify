import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#AAC0AA',
        secondColor: '#7A918D'
      },
      backgroundColor: {
        primaryBgColor: '#AAC0AA'
      },
      boxShadow: {
        firstShadow: '0px 3px 6px rgba(0,0,0,0.4)',
        secondShadow: '3px 3px 6px rgba(0,0,0,0.3)',
        inputShadow: '0px 6px 4px rgba(0,0,0,0.1)'
      },
    },
  },
  plugins: [],
}
export default config
