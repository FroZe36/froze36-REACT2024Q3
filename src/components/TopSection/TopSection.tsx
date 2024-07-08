import { ChangeEvent, PureComponent } from 'react';
import TopSectionInput from '../TopSectionInput/TopSectionInput';
import { TopSectionBtn } from '../TopSectionBtn/TopSectionBtn';

import styleTopSection from './TopSection.module.scss';

const { topSection, topSection__btn, topSection__input } = styleTopSection;
export interface TopSectionProp {
  handlerSearch: () => void;
  handlerChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export class TopSection extends PureComponent<TopSectionProp> {
  render() {
    const { handlerChange, handlerSearch } = this.props;
    return (
      <section className={topSection}>
        <TopSectionInput onChange={handlerChange} className={topSection__input}/>
        <TopSectionBtn onClick={handlerSearch} className={topSection__btn}/>
      </section>
    );
  }
}
