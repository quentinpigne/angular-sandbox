// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { FormFieldComponent } from '../form-field/form-field.component';
import { InputDirective } from './input.directive';

export default {
  title: 'Elements/Input',
  component: InputDirective,
  decorators: [
    moduleMetadata({
      declarations: [FormFieldComponent, InputDirective]
    })
  ],
} as Meta;

const Template: Story<InputDirective> = (args) => ({
  props: args,
  template: `
    <ui-form-field>
      <input uiInput type="text" placeholder="This is a text input" />
      <div class="ui-error">This is an error message</div>
    </ui-form-field>
  `
});

export const Principal = Template.bind({});
Principal.args = {
};
