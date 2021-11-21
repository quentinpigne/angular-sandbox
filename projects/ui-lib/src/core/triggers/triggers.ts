import { Renderer2 } from '@angular/core';
import { delay, filter, merge, Observable, Subscriber, Subscription } from 'rxjs';

function observeTriggers(renderer: Renderer2, target: HTMLElement): Observable<boolean> {
  return new Observable((subscriber: Subscriber<boolean>) => {
    const onActivate = () => subscriber.next(true);
    const onDeactivate = () => subscriber.next(false);

    renderer.listen(target, 'mouseenter', onActivate);
    renderer.listen(target, 'mouseleave', onDeactivate);
  });
}

const delayIfNeeded = <T>(_delay: number) =>
  _delay > 0 ? delay<T>(_delay) : (triggerState$: Observable<T>) => triggerState$;

function delayTriggers(activateDelay: number, deactivateDelay: number) {
  return (triggerState$: Observable<boolean>) => {
    const delayedActivate$ = triggerState$.pipe(
      filter((activate: boolean) => activate),
      delayIfNeeded(activateDelay),
    );
    const delayedDeactivate$ = triggerState$.pipe(
      filter((activate: boolean) => !activate),
      delayIfNeeded(deactivateDelay),
    );
    return merge(delayedActivate$, delayedDeactivate$);
  };
}

export function listenToTriggers(
  renderer: Renderer2,
  target: HTMLElement,
  onActivate: () => void,
  onDeactivate: () => void,
  activateDelay: number = 0,
  deactivateDelay: number = 0,
): Subscription {
  return observeTriggers(renderer, target)
    .pipe(delayTriggers(activateDelay, deactivateDelay))
    .subscribe((active: boolean) => (active ? onActivate() : onDeactivate()));
}
