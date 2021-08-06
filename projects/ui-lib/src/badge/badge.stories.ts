// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BadgeDirective } from './badge.directive';

export default {
  title: 'Elements/Badge',
  component: BadgeDirective
} as Meta;

const Template: Story<BadgeDirective & { libelle: string }> = (args) => ({
  props: args,
  template: `
    <div uiBadge="1">{{libelle}}</div>
  `
});

export const Principal = Template.bind({});
Principal.args = {
  libelle: 'Principal'
};
