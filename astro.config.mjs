import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

export default {
  root: '.', // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  scrDir: './src/pages', // Path to Astro components, pages, and data
  outDir: './dist', // When running `astro build`, path to final static output
  publicDir: './public', // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  build: {
    site: 'https://devprotocol.xyz', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true // Generate sitemap (set to "false" to disable)
  },
  server: {
    hostname: 'localhost', // The hostname to run the dev server on.
    port: 3000 // The port to run the dev server on.
  },
  integrations: [
    tailwind({
      // Example: Provide a custom path to a Tailwind config file
      config: {
        path: './tailwind.config.cjs',
        applyBaseStyles: false
      }
    }),
    vue()
  ]
}
