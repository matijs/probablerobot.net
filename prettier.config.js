import prettierPluginXML from '@prettier/plugin-xml';

/**
 * @type {import("prettier").Config}
 **/
export default {
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
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
  ],
  singleQuote: true,
};
