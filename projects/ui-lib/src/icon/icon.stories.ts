import { Story, Meta } from '@storybook/angular';

import { IconComponent } from './icon.component';

export default {
  title: 'Elements/Icon',
  component: IconComponent,
} as Meta;

const Template: Story<IconComponent & { icon: string }> = (args) => ({
  props: args,
  template: `
    <ui-icon>{{icon}}</ui-icon>
  `,
});

export const Principal = Template.bind({});
Principal.args = {
  icon: 'home',
};
