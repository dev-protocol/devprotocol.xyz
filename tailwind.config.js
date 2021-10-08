module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
     'mono': ['IBM Plex Mono', 'monospace'],
     'display': ['WhyteInktrap', "sans-serif"],
     'body': ['"Whyte"', "sans-serif"],
    }
  }
};
