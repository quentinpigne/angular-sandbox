import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { IconModule } from '../icon/icon.module';
import { ToolbarComponent } from './toolbar.component';

export default {
  title: 'Elements/Toolbar',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
      imports: [IconModule],
    }),
  ],
} as Meta;

const Template: Story<ToolbarComponent> = (args) => ({
  props: args,
  template: `
    <ui-toolbar><ui-icon style="font-size: 3em">home</ui-icon><h1>My App</h1></ui-toolbar>
  `,
});

export const Principal = Template.bind({});
Principal.args = {};
