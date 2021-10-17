// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IconComponent } from './icon.component';

export default {
  title: 'Elements/Icon',
  component: IconComponent,
} as Meta;

const Template: Story<IconComponent> = (args) => ({
  props: args,
  template: `
    <ui-icon>house</ui-icon>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
