import js from "@eslint/js"
import pluginVue from "eslint-plugin-vue"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,vue}"],
    plugins: { js, vue: pluginVue },
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly",
        module: "readonly"
      }
    },
    rules: {
      semi: ["error", "never"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "vue/html-indent": ["error", 2]
    }
  },
  pluginVue.configs["flat/essential"]
])
