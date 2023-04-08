export function createWrapper(wrapperId: string) {
  const wrapperElement = document.createElement('div');

  wrapperElement.style.cssText = `
    pointer-events: none;
    position: fixed;
    top: 0px;
    left: 0px;
  `;
  wrapperElement.setAttribute('id', wrapperId);
  document.body.append(wrapperElement);

  return wrapperElement;
}
