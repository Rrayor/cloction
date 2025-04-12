import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { configs, config } from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'

export default config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...configs.recommended,
      eslintPluginJsxA11y.flatConfigs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    ignores: ['node_modules', 'dist', "src/components/ui/*.tsx"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
    },
  }
)
