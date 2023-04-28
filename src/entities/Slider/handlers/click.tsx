interface IHandleChangeSlideProps {
  direction: 'prev' | 'next';
  wrapper: HTMLElement;
  slide: HTMLElement;
}

export const handleChangeSlide = ({ direction, wrapper, slide }: IHandleChangeSlideProps) => {
  const slideWidth = slide.getBoundingClientRect().width;

  wrapper.scrollBy(direction === 'next' ? slideWidth : -slideWidth, 0);
};

interface IHandleSelectSlideProps {
  index: number;
  activeSlide: number;
  wrapper: HTMLElement;
  slide: HTMLElement;
}

export const handleSelectSlide = ({
  index,
  activeSlide,
  wrapper,
  slide,
}: IHandleSelectSlideProps) => {
  const slideWidth = slide.getBoundingClientRect().width;

  wrapper.scrollBy(
    activeSlide < index ? slideWidth * index : -(slideWidth * (activeSlide - index)),
    0,
  );
};
