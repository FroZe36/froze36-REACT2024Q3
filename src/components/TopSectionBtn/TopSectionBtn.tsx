import { PureComponent, ReactNode } from 'react';

interface TopSectionBtnProp {
  onClick: () => void;
  className: string;
}

export class TopSectionBtn extends PureComponent<TopSectionBtnProp> {
  render(): ReactNode {
    const { onClick, className } = this.props;
    return (
      <button type="button" className={className} onClick={onClick}>
        Search
      </button>
    );
  }
}
