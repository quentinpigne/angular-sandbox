import { Renderer2 } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

function observeTrigger(renderer: Renderer2, target: HTMLElement): Observable<boolean> {
  return new Observable((subscriber: Subscriber<boolean>) => {
    const onActivate = () => subscriber.next(true);
    const onDeactivate = () => subscriber.next(false);

    renderer.listen(target, 'mouseenter', onActivate);
    renderer.listen(target, 'mouseleave', onDeactivate);
  });
}

export function listenToTriggers(
  renderer: Renderer2,
  target: HTMLElement,
  onActivate: () => void,
  onDeactivate: () => void,
): Subscription {
  return observeTrigger(renderer, target).subscribe((active: boolean) => (active ? onActivate() : onDeactivate()));
}
