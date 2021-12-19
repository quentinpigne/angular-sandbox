export type Position = 'left' | 'right' | 'top' | 'bottom';

export function positionElement(hostElement: HTMLElement, targetElement: HTMLElement, position: Position) {
  const targetStyle: CSSStyleDeclaration = targetElement.style;
  targetStyle.position = 'absolute';
  targetStyle.top = '0';
  targetStyle.left = '0';

  const hostElPosition: DOMRect = hostElement.getBoundingClientRect();

  let topPosition: number = 0;
  let leftPosition: number = 0;

  switch (position) {
    case 'top':
      topPosition = hostElPosition.top - targetElement.offsetHeight;
      break;
    case 'bottom':
      topPosition = hostElPosition.top + hostElPosition.height;
      break;
    case 'left':
      leftPosition = hostElPosition.left - targetElement.offsetWidth;
      break;
    case 'right':
      leftPosition = hostElPosition.left + hostElPosition.width;
      break;
  }

  if (position === 'top' || position === 'bottom') {
    leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
  } else {
    topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
  }

  targetElement.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;
}
