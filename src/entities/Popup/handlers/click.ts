import { TPopupItem } from '../types/component';

interface IPopupItemClickProps {
  index: number;
  setList: React.Dispatch<React.SetStateAction<TPopupItem[]>>;
}

export const handlePopupItemClick = ({ index, setList }: IPopupItemClickProps) => {
  setList((prev) =>
    prev.map((item, i) =>
      i === index ? { ...item, isActive: true } : { ...item, isActive: false },
    ),
  );
};

interface IPopupClickProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handlePopupClick = ({ setOpen }: IPopupClickProps) => setOpen((prev) => !prev);
