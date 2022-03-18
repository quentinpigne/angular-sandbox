import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { TabComponent } from './tab.component';
import { TabGroupComponent } from './tab-group.component';

export default {
  title: 'Elements/Tabs',
  decorators: [
    moduleMetadata({
      declarations: [TabComponent, TabGroupComponent],
    }),
  ],
} as Meta;

const Template: Story<TabGroupComponent> = (args) => ({
  props: args,
  template: `
    <ui-tab-group selectedTab="2">
      <ui-tab label="Tab 1">
        Ceci est le contenu de la tab 1
      </ui-tab>
      <ui-tab label="Tab 2">
        Ceci est le contenu de la tab 2
      </ui-tab>
      <ui-tab label="Tab 3">
        Ceci est le contenu de la tab 3
      </ui-tab>
    </ui-tab-group>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
