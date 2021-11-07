import { Story, Meta } from '@storybook/angular';

import { TooltipDirective } from './tooltip.directive';

export default {
  title: 'Elements/Tooltip',
  component: TooltipDirective,
} as Meta;

const Template: Story<TooltipDirective> = (args) => ({
  props: args,
  template: `
    <span uiTooltip>Hover to show tooltip</span>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
