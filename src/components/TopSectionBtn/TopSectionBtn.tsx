import { FC } from 'react';

interface TopSectionBtnProp {
  onClick: () => void;
  className: string;
}

export const TopSectionBtn: FC<TopSectionBtnProp> = ({
  onClick,
  className,
}) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      Search
    </button>
  );
};
