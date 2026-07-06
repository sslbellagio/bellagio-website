import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#96723E',
          light:   '#C4A06A',
          dark:    '#6B4E28',
          pale:    '#F5EDD8',
          xpale:   '#FBF7F0',
        },
        dark: {
          DEFAULT: '#1A1208',
          mid:     '#2C1F0E',
          subtle:  '#3D2E14',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading-next)', 'Georgia', 'serif'],
        body:    ['var(--font-body-next)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
