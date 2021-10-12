// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Elements/Checkbox',
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
