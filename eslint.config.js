import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['vendor/**', 'node_modules/**'], 
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ...pluginReact.configs.flat.recommended,
    rules: {
      'react/prop-types': 'warn',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],  
      'react/jsx-indent': ['error', 2],  
      'react/jsx-indent-props': ['error', 2],  
      'react/jsx-props-no-spreading': 'warn'  
    },
  },
];