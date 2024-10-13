import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';

export default [
  {
    ignores: ['package.json'],
    name: 'global-ignores',
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    name: 'global-language-options',
  },
  {
    files: ['**/*.js'],
    name: 'eslint/config/recommended',
    ...js.configs.recommended,
  },
  {
    name: 'eslint-plugin-perfectionist/configs/recommended-natural',
    ...perfectionist.configs['recommended-natural'],
  },
];
