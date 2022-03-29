import { Story, Meta } from '@storybook/angular';

import { ListComponent } from './list.component';

export default {
  title: 'Layout/List',
  component: ListComponent,
} as Meta;

const Template: Story<ListComponent> = (args) => ({
  props: args,
  template: `
    <ui-list>
      <span>Item 1</span>
      <span>Item 2</span>
    </ui-list>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
