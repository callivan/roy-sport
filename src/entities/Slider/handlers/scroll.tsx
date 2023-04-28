interface IHandleScrollProps {
  wrapper: HTMLElement;
  slide: HTMLElement;

  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const handleScrollSlide = ({ slide, wrapper, setActiveSlide }: IHandleScrollProps) => {
  const wrapperScroll = wrapper.scrollLeft;
  const slideWidth = slide.getBoundingClientRect().width;

  setActiveSlide(wrapperScroll / slideWidth);
};
