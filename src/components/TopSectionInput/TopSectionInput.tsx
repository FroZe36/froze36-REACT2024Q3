import { ChangeEvent, PureComponent, ReactNode } from 'react';

interface TopSectionInputProp {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export default class TopSectionInput extends PureComponent<TopSectionInputProp> {
  render(): ReactNode {
    const { onChange, className } = this.props;
    return <input type="text" onChange={onChange} className={className} />;
  }
}
