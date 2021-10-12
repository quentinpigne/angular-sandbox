// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { InputDirective } from './input.directive';
import { FormFieldModule } from '../form-field/form-field.module';

export default {
  title: 'Elements/Input',
  component: InputDirective,
  decorators: [
    moduleMetadata({
      imports: [FormFieldModule],
      declarations: [InputDirective],
    }),
  ],
} as Meta;

const Template: Story<InputDirective> = (args) => ({
  props: args,
  template: `
    <ui-form-field>
      <input uiInput type="text" placeholder="This is a text input" />
      <ui-error>This is an error message</ui-error>
    </ui-form-field>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
