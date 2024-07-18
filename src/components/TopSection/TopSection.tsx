import { ChangeEvent, FC } from 'react';
import { TopSectionInput } from '../TopSectionInput/TopSectionInput';
import { TopSectionBtn } from '../TopSectionBtn/TopSectionBtn';
import { TopSectionErrorBtn } from '../TopSectionErrorBtn/TopSectionErrorBtn';
import styleTopSection from './TopSection.module.scss';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

const { topSection, topSection__btn, topSection__input, topSection__btn_red } =
  styleTopSection;
export interface TopSectionProp {
  handlerSearch: () => void;
  handlerChange: (event: ChangeEvent<HTMLInputElement>) => void;
  valueResult: string;
}

export const TopSection: FC<TopSectionProp> = ({
  handlerChange,
  handlerSearch,
  valueResult,
}) => {
  return (
    <ErrorBoundary>
      <section className={topSection}>
        <TopSectionInput
          onChange={handlerChange}
          className={topSection__input}
          valueResult={valueResult}
        />
        <TopSectionBtn onClick={handlerSearch} className={topSection__btn} />
        <TopSectionErrorBtn
          className={`${topSection__btn} ${topSection__btn_red}`}
        ></TopSectionErrorBtn>
      </section>
    </ErrorBoundary>
  );
};
