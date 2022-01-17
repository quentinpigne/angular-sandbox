import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { CardComponent } from './card.component';

export default {
  title: 'Elements/Card',
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
    }),
  ],
} as Meta;

const Template: Story<CardComponent> = (args) => ({
  props: args,
  template: `
    <ui-card>
      <h1>Card title</h1>
      <h2>Card subtitle</h2>
      <p>Card content</p>
      <h4>Card footer</h4>
    </ui-card>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
