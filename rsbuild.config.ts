import { resolve } from 'node:path'
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig(({ env }) => ({
  environments: {
    app: {
      source: {
        entry: {
          index: resolve('src/index.tsx'),
        },
      },
      output: {
        target: 'web',
      },
      html: {
        template: './index.tpl.html',
      },
    },
  },

  server: {
    port: 3700,
    open: true,
    base: '/',
  },

  plugins: [pluginReact()],

  resolve: {
    alias: {
      modules: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules')],
    },
    extensions: ['.ts', '.tsx', '.js', '.mjs', '.jsx', '.json', '.scss', '.css'],
  },
}))
