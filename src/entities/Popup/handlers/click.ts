interface IPopupClickProps {
  isOpen: boolean;

  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handlePopupClick = ({ isOpen, setOpen, setStart }: IPopupClickProps) => {
  if (isOpen) {
    setStart(false);
    setTimeout(() => setOpen(false), 300);
    return;
  }

  setOpen(true);
  setTimeout(() => setStart(true), 100);
};
