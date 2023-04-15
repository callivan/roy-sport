import { TNavigationItem } from '../types/component';

interface IClickProps {
  index: number;
  setList: React.Dispatch<React.SetStateAction<TNavigationItem[]>>;
}

export const handleNavigationClick = ({ index, setList }: IClickProps) => {
  setList((prev) =>
    prev.map((item, i) =>
      i === index ? { ...item, isActive: true } : { ...item, isActive: false },
    ),
  );
};
