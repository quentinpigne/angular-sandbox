import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { TooltipDirective } from './tooltip.directive';
import { TooltipModule } from './tooltip.module';

export default {
  title: 'Elements/Tooltip',
  component: TooltipDirective,
  decorators: [
    moduleMetadata({
      imports: [TooltipModule],
    }),
  ],
} as Meta;

const Template: Story<TooltipDirective> = (args) => ({
  props: args,
  template: `
    <span [uiTooltip]="content">Hover to show tooltip</span>
  `,
});

export const Principal = Template.bind({});
Principal.args = {
  content: 'This is a tooltip',
};
