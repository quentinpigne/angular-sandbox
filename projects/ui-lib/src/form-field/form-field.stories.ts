// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormFieldComponent } from './form-field.component';

export default {
  title: 'Elements/FormField',
  component: FormFieldComponent
} as Meta;

const Template: Story<FormFieldComponent> = (args) => ({
  props: args,
  template: `
    <ui-form-field>
      <input type="text" class="ui-input" placeholder="This is a text input" />
      <div class="ui-error">This is an error message</div>
    </ui-form-field>
  `
});

export const Principal = Template.bind({});
Principal.args = {
};
