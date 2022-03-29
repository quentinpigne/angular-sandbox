import { Story, Meta } from '@storybook/angular';

import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Forms/Checkbox',
  component: CheckboxComponent,
  parameters: {
    actions: {
      handles: ['change'],
    },
  },
} as Meta;

const Template: Story<CheckboxComponent & { libelle: string }> = (args) => ({
  props: args,
  template: `
    <ui-checkbox>{{libelle}}</ui-checkbox>
  `,
});

export const Principal = Template.bind({});
Principal.args = {
  libelle: 'Click to check',
};
