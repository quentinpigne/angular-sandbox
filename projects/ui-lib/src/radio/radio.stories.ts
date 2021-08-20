// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupDirective } from './radio-group.directive';

export default {
  title: 'Elements/Radio',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [RadioButtonComponent, RadioGroupDirective]
    })
  ],
} as Meta;

const Template: Story<RadioButtonComponent> = (args) => ({
  props: args,
  template: `
    <ui-radio-group>
      <ui-radio-button>Radio 1</ui-radio-button>
      <ui-radio-button>Radio 2</ui-radio-button>
    </ui-radio-group>
  `
});

export const Principal = Template.bind({});
Principal.args = {
};
