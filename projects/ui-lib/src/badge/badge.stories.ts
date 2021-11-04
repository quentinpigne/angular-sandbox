import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { BadgeComponent } from './standalone/badge.component';
import { BadgeDirective } from './embedded/badge.directive';

export default {
  title: 'Elements/Badge',
  decorators: [
    moduleMetadata({
      declarations: [BadgeComponent, BadgeDirective],
    }),
  ],
} as Meta;

const StandaloneTemplate: Story<BadgeComponent> = (args) => ({
  props: args,
  template: `
    <ui-badge [value]="value"></ui-badge>
  `,
});

const EmbeddedTemplate: Story<BadgeDirective & { libelle: string }> = (args) => ({
  props: args,
  template: `
    <span [uiBadge]="content" [uiBadgePosition]="position">{{libelle}}</span>
  `,
});

export const Standalone = StandaloneTemplate.bind({});
Standalone.args = {
  value: 1,
};

export const Embedded = EmbeddedTemplate.bind({});
Embedded.args = {
  libelle: 'Principal',
  content: '1',
  position: 'top right',
};
