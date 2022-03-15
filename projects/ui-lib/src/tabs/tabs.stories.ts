import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { TabGroupComponent } from './tab-group.component';

export default {
  title: 'Elements/Tabs',
  component: TabGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<TabGroupComponent> = (args) => ({
  props: args,
  template: `
    <ui-tab-group></ui-tab-group>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
