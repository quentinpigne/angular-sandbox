import { Renderer2 } from '@angular/core';

export function listenToTriggers(
  renderer: Renderer2,
  target: HTMLElement,
  openFn: () => void,
  closeFn: () => void,
): void {
  renderer.listen(target, 'mouseenter', openFn);
  renderer.listen(target, 'mouseleave', closeFn);
}
