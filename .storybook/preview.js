
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

import "!style-loader!css-loader!sass-loader!../projects/ui-lib/src/core/theming/themes/base-theme.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  options: {
    storySort: {
      order: ["Welcome", "Getting Started", "Design Tokens", "Elements"]
    },
  },
}
