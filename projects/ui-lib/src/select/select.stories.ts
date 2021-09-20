// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
  title: 'Elements/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [SelectComponent]
    })
  ],
} as Meta;

const Template: Story<SelectComponent> = (args) => ({
  props: args,
  template: `
    <ui-select>
      <option>Option 1</option>
      <option>Option 2</option>
    </ui-select>
  `
});

export const Principal = Template.bind({});
Principal.args = {
};
