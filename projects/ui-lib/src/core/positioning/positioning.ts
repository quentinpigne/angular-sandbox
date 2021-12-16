export type Position = 'top left' | 'top right' | 'bottom left' | 'below right' | 'left' | 'right' | 'top' | 'bottom';

export function getAllStyles(element: HTMLElement): CSSStyleDeclaration {
  return window.getComputedStyle(element);
}

export function getStyle(element: HTMLElement, prop: string): string {
  return getAllStyles(element).getPropertyValue(prop);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function positionElement(hostElement: HTMLElement, targetElement: HTMLElement, position: Position) {
  const hostElPosition = hostElement.getBoundingClientRect();
  const targetStyle: CSSStyleDeclaration = targetElement?.style;
  const topPosition = hostElPosition?.top + hostElPosition?.height;
  const leftPosition = hostElPosition?.left + hostElPosition?.width / 2 - targetElement?.offsetWidth / 2;
  targetStyle.position = 'absolute';
  targetStyle.top = '0';
  targetStyle.left = '0';
  targetElement.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;
}
