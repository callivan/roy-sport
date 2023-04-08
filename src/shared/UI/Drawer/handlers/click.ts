interface IClickProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleClick = ({ setOpen }: IClickProps) => setOpen((prev) => !prev);
