import { Story, Meta } from '@storybook/angular';

import { IconComponent } from './icon.component';

export default {
  title: 'Elements/Icon',
  component: IconComponent,
} as Meta;

const Template: Story<IconComponent & { icon: string; size: number }> = (args) => ({
  props: args,
  template: `
    <ui-icon style="font-size:{{size}}px">{{icon}}</ui-icon>
  `,
});

export const Principal = Template.bind({});
Principal.args = {
  icon: 'home',
  size: 24,
};
