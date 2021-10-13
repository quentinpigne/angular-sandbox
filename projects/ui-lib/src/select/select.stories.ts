// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { OptionComponent } from './option.component';
import { SelectComponent } from './select.component';

export default {
  title: 'Elements/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [OptionComponent, SelectComponent],
    }),
  ],
  argTypes: { selectionChange: { action: 'selectionChange' } },
} as Meta;

const Template: Story<SelectComponent> = (args) => ({
  props: args,
  template: `
    <ui-select value="2" (selectionChange)="selectionChange($event)">
      <ui-option value="1">Option 1</ui-option>
      <ui-option value="2">Option 2</ui-option>
    </ui-select>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
