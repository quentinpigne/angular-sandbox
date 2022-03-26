import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { ModalModule } from './modal.module';

export default {
  title: 'Elements/Modal',
  decorators: [
    moduleMetadata({
      imports: [ModalModule],
    }),
  ],
} as Meta;

const Template: Story<Record<string, unknown>> = (args) => ({
  props: args,
  template: ``,
});

export const Principal = Template.bind({});
Principal.args = {};
