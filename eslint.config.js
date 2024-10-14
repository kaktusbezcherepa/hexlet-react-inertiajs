import reactPlugin from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      'indent': ['error', 2], // Отступы в 2 пробела
      'quotes': ['error', 'single'], // Кавычки
      'semi': ['error', 'always'], // Точка с запятой
      'react/jsx-indent': ['error', 2], // Отступы в JSX
      'react/jsx-indent-props': ['error', 2], // Отступы для свойств JSX
      'no-unused-vars': 'off',
    },
    ignores: [
      'vendor/**',
      'node_modules/**',
      'public/**',
      '*.min.js',
    ],
  },
];
