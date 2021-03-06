import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { CardContentDirective } from './card-content/card-content.directive';
import { CardFooterDirective } from './card-footer/card-footer.directive';
import { CardSubtitleDirective } from './card-subtitle/card-subtitle.directive';
import { CardTitleDirective } from './card-title/card-title.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, CardContentDirective, CardFooterDirective, CardSubtitleDirective, CardTitleDirective],
  exports: [CardComponent],
})
export class CardModule {}
