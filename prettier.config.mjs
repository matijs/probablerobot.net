import prettierPluginXML from '@prettier/plugin-xml';

/**
 * @type {import("prettier").Config}
 **/
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
    {
      files: ['*.svg'],
      options: {
        plugins: [prettierPluginXML],
      },
    },
  ],
};
