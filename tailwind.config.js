module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkPrimary: '#0d0f12',
        darkSecondary: '#1E3A8A',
        darkThird: '#1F2937',
        transparentBlack: 'rgb(0 0 0 / 24%)',
        transparentWhite: 'rgb(255 255 255 / 24%)',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        body: ['Syne', 'sans-serif'],
      },
      maxWidth: {
        para: '40ch',
        half: '50%',
      },
      screens: {
        burger: '800px',
      },
      backgroundImage: {
        'texture-gradient-dark': 'url(/assets/texture/texture-iohaoQrlPrY.jpg)',
        'texture-gradient-light':
          'url(/assets/texture/texture-EoAUMbv_KAw.jpg)',
        'texture-gradient-light-alt':
          'url(/assets/texture/texture-bvruqj_Rp-M.jpg)',
        'texture-mars': 'url(/assets/texture/texture-TnudzJxjVCI.jpg)',
        'texture-brilliant': 'url(/assets/texture/texture-zYD_XzNyRyo.jpg)',
        'texture-gradient-dark-alt':
          'url(/assets/texture/texture-NgLtdWk-6FI.jpg)',
        'texture-bubble-light': 'url(/assets/texture/texture-0If4NyeDOpU.jpg)',
        'texture-bubble-dark': 'url(/assets/texture/texture-AyN_yGdfqqI.jpg)',
      },
      animation: {
        'floating-one': 'fl1 3s linear infinite alternate',
        'floating-two': 'fl2 3s linear infinite alternate',
        'hero-slot': 'hero-slot 12s linear infinite',
      },
      keyframes: {
        fl1: {
          '0%': { borderRadius: '50% 50% 50% 70%/50% 50% 70% 60%' },
          '33%': { borderRadius: '80% 30% 50% 50%/50%' },
          '100%': { borderRadius: '40% 40% 50% 40%/30% 50% 40% 80%' },
        },
        fl2: {
          '0%': { borderRadius: '40% 40% 50% 40%/30% 50% 40% 80%' },
          '33%': { borderRadius: '80% 30% 50% 50%/50%' },
          '100%': { borderRadius: '50% 50% 50% 70%/50% 50% 70% 60%' },
        },
        'hero-slot': {
          '0%': {
            content: "'Open Source'",
          },
          '20%': {
            content: "'Research'",
          },
          '40%': {
            content: "'Creative Commons'",
          },
          '60%': {
            content: "'Local Community'",
          },
          '80%': {
            content: "'Public Goods'",
          },
          '100%': {
            content: "'Open Source'",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
}
