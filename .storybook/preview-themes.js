import baseTheme from "../projects/ui-lib/src/core/theming/themes/base-theme.scss";
import redTheme from "../projects/ui-lib/src/core/theming/themes/red-theme.scss";

const themes = {
  base: baseTheme,
  red: redTheme,
};

export const themeType = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: Object.keys(themes)[0],
    toolbar: {
      icon: 'paintbrush',
      items: Object.keys(themes),
      showName: false,
    },
  },
};

export const themeDecorator = (storyFn, context) => {
  const themeStyleElement = document.createElement('style');
  themeStyleElement.textContent = themes[context.globals.theme];
  document.head.appendChild(themeStyleElement);
  return {
    ...storyFn(),
    template: storyFn().template,
  }
};
