import { defineConfig } from 'vite'

export default defineConfig({
  build: {
      lib: {
          entry: 'index.js',
          name: 'flatten-ihe',
          formats: ['umd'],
          fileName: (format) => `index.${format}.js`,
      },
      outDir: 'lib',
  }
})