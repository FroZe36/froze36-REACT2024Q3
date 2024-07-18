import { ChangeEvent, FC } from 'react';

interface TopSectionInputProp {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
  valueResult: string;
}

export const TopSectionInput: FC<TopSectionInputProp> = ({
  onChange,
  className,
  valueResult,
}) => {
  return (
    <input
      type="text"
      onChange={onChange}
      className={className}
      placeholder="Write the name of starship or the model!"
      value={valueResult}
    />
  );
};
