import htmlConfig from '@genericmedia/config/eslint/html.mjs'
import jsconfig from '@genericmedia/config/eslint/js.mjs'
import tsconfig from '@genericmedia/config/eslint/ts.mjs'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  tsconfig,
  jsconfig,
  htmlConfig,
)
