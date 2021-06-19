// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Elements/Button',
  component: ButtonComponent,
  parameters: {
    actions: {
      handles: ['click'],
    },
  }
} as Meta;

const Template: Story<ButtonComponent & { libelle: string }> = (args) => ({
  props: args,
  template: `
    <button ui-button [disabled]=${args.disabled}>{{libelle}}</button>
  `
});

export const Principal = Template.bind({});
Principal.args = {
  libelle: 'Principal'
};

export const Disabled = Template.bind({});
Disabled.args = {
  libelle: 'Disabled',
  disabled: true
};
