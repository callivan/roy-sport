interface ISetContainerWidthProps {
  isOpen: boolean;
  isTop: boolean;
  container: HTMLDivElement;
}

export const setContainerWidth = ({ isOpen, isTop, container }: ISetContainerWidthProps) => {
  const content = container.querySelector<HTMLDivElement>('.drawer-content');

  if (!content || !content.children[0]) return;

  const containerSize = container.getBoundingClientRect()[isTop ? 'height' : 'width'];
  const childrenSize = content.children[0].getBoundingClientRect()[isTop ? 'height' : 'width'];

  container.style[isTop ? 'height' : 'width'] = isOpen
    ? `${childrenSize + containerSize}px`
    : '0px';
};
