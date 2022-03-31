import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { ModalModule } from './modal.module';
import { ModalService } from './modal.service';

@Component({
  selector: 'ui-modal-open-button',
  template: `<button (click)="openModal()">Open Modal</button>`,
})
class ModalWrapperComponent {
  constructor(private readonly _modalService: ModalService) {}

  openModal() {
    this._modalService.open(ModalComponent, { width: '200px', height: '200px' });
  }
}

@Component({
  selector: 'ui-story-modal',
  template: '<p>modal works!</p>',
})
class ModalComponent {}

export default {
  title: 'Overlay/Modal',
  decorators: [
    moduleMetadata({
      imports: [ModalModule],
      declarations: [ModalComponent, ModalWrapperComponent],
    }),
  ],
} as Meta;

const Template: Story<Record<string, unknown>> = (args) => ({
  props: args,
  template: `<ui-modal-open-button></ui-modal-open-button>`,
});

export const Principal = Template.bind({});
Principal.args = {};
