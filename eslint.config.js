import js from '@eslint/js';
import json from '@eslint/json';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';

export default [
  {
    ignores: ['**/public/'],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
    ...perfectionist.configs['recommended-natural'],
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
];
