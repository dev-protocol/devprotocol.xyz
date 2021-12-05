module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkPrimary: '#111827',
        darkSecondary: '#1E3A8A',
        darkThird: '#1F2937'
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['WhyteInktrap', 'sans-serif'],
        body: ['Whyte', 'sans-serif']
      },
      maxWidth: {
        para: '40ch',
        half: '50%'
      },
      screens: {
        'burger': '800px'
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  }
}
