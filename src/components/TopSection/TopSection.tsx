import { ChangeEvent, PureComponent } from 'react';
import TopSectionInput from '../TopSectionInput/TopSectionInput';
import { TopSectionBtn } from '../TopSectionBtn/TopSectionBtn';

import styleTopSection from './TopSection.module.scss';

const { topSection, topSection__btn, topSection__input } = styleTopSection;
export interface TopSectionProp {
  handlerSearch: () => void;
  handlerChange: (event: ChangeEvent<HTMLInputElement>) => void;
  valueResult: string;
}

export class TopSection extends PureComponent<TopSectionProp> {
  render() {
    const { handlerChange, handlerSearch, valueResult } = this.props;
    return (
      <section className={topSection}>
        <TopSectionInput
          onChange={handlerChange}
          className={topSection__input}
          valueResult={valueResult}
        />
        <TopSectionBtn onClick={handlerSearch} className={topSection__btn} />
      </section>
    );
  }
}
