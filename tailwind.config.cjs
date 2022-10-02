module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkPrimary: '#0d0f12',
        darkSecondary: '#1E3A8A',
        darkThird: '#1F2937'
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        body: ['Syne', 'sans-serif']
      },
      maxWidth: {
        para: '40ch',
        half: '50%'
      },
      screens: {
        burger: '800px'
      },
      backgroundImage: {
        'texture-gradient-dark': 'url(/assets/texture/texture-iohaoQrlPrY.jpg)',
        'texture-gradient-light':
          'url(/assets/texture/texture-EoAUMbv_KAw.jpg)',
        maxie: 'url(/assets/art/art--maxie--baby.png)'
      },
      animation: {
        'floating-one': 'fl1 2s linear infinite alternate',
        'floating-two': 'fl2 2s linear infinite alternate'
      },
      keyframes: {
        fl1: {
          '0%': { borderRadius: '50% 50% 50% 70%/50% 50% 70% 60%' },
          '33%': { borderRadius: '80% 30% 50% 50%/50%' },
          '100%': { borderRadius: '40% 40% 50% 40%/30% 50% 40% 80%' }
        },
        fl2: {
          '0%': { borderRadius: '40% 40% 50% 40%/30% 50% 40% 80%' },
          '33%': { borderRadius: '80% 30% 50% 50%/50%' },
          '100%': { borderRadius: '50% 50% 50% 70%/50% 50% 70% 60%' }
        }
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  }
}
