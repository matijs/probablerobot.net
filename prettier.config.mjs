export default {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.css', '*.scss', '*.yml'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
