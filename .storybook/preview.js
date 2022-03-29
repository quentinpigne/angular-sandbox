import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

import { themeDecorator, themeType } from './preview-themes';

export const globalTypes = { ...themeType };

export const decorators = [themeDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  options: {
    storySort: {
      order: [
        'Welcome',
        'Getting Started',
        'Contributing',
        'Changelog',
        'Design Tokens',
        'Controls',
        'Forms',
        'Display',
        'Layout',
        'Overlay',
        'Media',
      ],
    },
  },
};
