import { Story, Meta } from '@storybook/angular';

import { ProgressBarComponent } from './progress-bar.component';

export default {
  title: 'Elements/ProgressBar',
  component: ProgressBarComponent,
} as Meta;

const Template: Story<ProgressBarComponent> = (args) => ({
  props: args,
  template: `
    <ui-progress-bar [mode]="mode" [value]="value"></ui-progress-bar>
  `,
});

export const Determinate = Template.bind({});
Determinate.args = {
  mode: 'determinate',
  value: 38,
};
