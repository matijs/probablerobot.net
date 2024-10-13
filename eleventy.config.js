import eleventyPluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import markdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';

import {
  humanReadableDate,
  toISO,
  toISODate,
  toRFC2822,
} from './src/utils/date.js';

export default (config) => {
  config.setLibrary(
    'md',
    markdownIt({
      html: true,
      linkify: false,
    }).use(markdownItFootnote),
  );
  config.addPlugin(eleventyPluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  config.addPassthroughCopy('src/site/robots.txt');
  config.addWatchTarget('src/utils');

  config.addNunjucksFilter('humanReadableDate', humanReadableDate);
  config.addNunjucksFilter('toISODate', toISODate);
  config.addNunjucksFilter('toISO', toISO);
  config.addNunjucksFilter('toRFC2822', toRFC2822);

  return {
    dir: {
      input: 'src/site',
      output: 'public',
    },
  };
};
