import js from '@eslint/js';
import json from '@eslint/json';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['**/public/']),
  {
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    extends: ['js/recommended'],
    files: ['**/*.js'],
    plugins: { js },
  },
  {
    ...perfectionist.configs['recommended-natural'],
    files: ['**/*.js'],
  },
  {
    extends: ['json/recommended'],
    files: ['**/*.json'],
    language: 'json/json',
    plugins: { json },
  },
]);
