import { Story, Meta } from '@storybook/angular';

import { ProgressBarComponent } from './progress-bar.component';

export default {
  title: 'Elements/ProgressBar',
  component: ProgressBarComponent,
} as Meta;

const Template: Story<ProgressBarComponent> = (args) => ({
  props: args,
  template: `
    <ui-progress-bar></ui-progress-bar>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
