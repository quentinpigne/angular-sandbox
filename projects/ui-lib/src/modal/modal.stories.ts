import { Component } from '@angular/core';
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { ModalModule } from './modal.module';
import { ModalService } from './modal.service';

@Component({
  selector: 'ui-modal-wrapper',
  template: `
    <button (click)="openModal()">Open Modal</button>
    <button (click)="closeModal()">Close Modal</button>
  `,
})
class ModalWrapperComponent {
  constructor(private readonly _modalService: ModalService) {}

  openModal() {
    this._modalService.open(ModalComponent);
  }

  closeModal() {
    this._modalService.close();
  }
}

@Component({
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
  template: `<ui-modal-wrapper></ui-modal-wrapper>`,
});

export const Principal = Template.bind({});
Principal.args = {};
