import { ReactNode } from 'react';
import errorImg from './error.gif';

export const ErrorMessage = (): ReactNode => {
  return (
    <img
      style={{
        display: 'block',
        width: '200px',
        height: '200px',
        objectFit: 'contain',
        margin: '0 auto',
      }}
      src={errorImg}
      alt="Error"
    />
  );
};
