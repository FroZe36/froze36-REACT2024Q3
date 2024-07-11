import { Component, ReactNode } from 'react';
import errorImg from './error.gif';

export class ErrorMessage extends Component {
  render(): ReactNode {
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
  }
}
