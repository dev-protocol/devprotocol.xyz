module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkSecondary: "#151414",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        display: ["WhyteInktrap", "sans-serif"],
        body: ['"Whyte"', "sans-serif"],
      },
      maxWidth: {
        para: "40ch",
        half: "50%",
      },
    },
  },
};
