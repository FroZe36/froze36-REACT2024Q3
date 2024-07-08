import { ChangeEvent, PureComponent, ReactNode } from 'react';

interface TopSectionInputProp {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
  valueResult: string;
}

export default class TopSectionInput extends PureComponent<TopSectionInputProp> {
  render(): ReactNode {
    const { onChange, className, valueResult } = this.props;
    return (
      <input
        type="text"
        onChange={onChange}
        className={className}
        placeholder="Write the name of starship or the model!"
        value={valueResult}
      />
    );
  }
}
