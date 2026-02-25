import react from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    plugins: {
      react,
    },
    ignores: ['node_modules'],
    rules: {
      'react/self-closing-comp': 'warn',
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  eslintConfigPrettier, // Prettier 설정을 마지막에 추가하여 스타일 충돌 방지
]
