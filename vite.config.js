import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import PrerenderSPAPlugin from 'prerender-spa-plugin'
import path from 'path'

// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    new PrerenderSPAPlugin(
      // Absolute path to compiled SPA
      path.resolve(__dirname, 'dist'),
      // List of routes to prerender
      [ '/'],
      // {
      //   // options
      // }
    ),
  ]
})
