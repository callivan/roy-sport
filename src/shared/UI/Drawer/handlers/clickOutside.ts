interface IClickOutsideProps {
  e: MouseEvent;
  wrapper: HTMLDivElement;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleClickOutside = ({ e, wrapper, setOpen }: IClickOutsideProps) => {
  const target = e.target;

  if (!target || !(target instanceof HTMLElement) || wrapper.contains(target)) return;

  setOpen(false);
};
