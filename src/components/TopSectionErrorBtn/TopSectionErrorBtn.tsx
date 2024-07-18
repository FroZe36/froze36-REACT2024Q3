import { FC, useState } from 'react';

interface TopSectionErrorBtnProp {
  className: string;
}

export const TopSectionErrorBtn: FC<TopSectionErrorBtnProp> = ({
  className,
}) => {
  const [error, setError] = useState(false);

  const handleClick = () => {
    setError(true);
  };

  if (error) {
    throw new Error(
      'The error eject by pressed the button, reload the page to continue!'
    );
  }
  return (
    <button className={className} type="button" onClick={handleClick}>
      Throw error
    </button>
  );
};
