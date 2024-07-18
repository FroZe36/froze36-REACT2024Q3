import { FC } from 'react';
import { Spinner } from '../spinner/spinner';
import { StarshipShortProperties } from '../../api/StarWarsService';
import styleBottomSection from './BottomSection.module.scss';

const { bottomSection, title, subtitle, list, listCard, cardItem } =
  styleBottomSection;

interface BottomSectionProps {
  loadingState: boolean;
  data: StarshipShortProperties[];
}

export const BottomSection: FC<BottomSectionProps> = ({
  loadingState,
  data,
}) => {
  return (
    <section className={bottomSection}>
      <h1 className={title}>Starships from The Star Wars</h1>
      <h2 className={subtitle}>
        A Starship resource is a single transport craft that has hyperdrive
        capability.
      </h2>
      <ul className={list}>
        {loadingState ? (
          <Spinner />
        ) : (
          data.map(({ name, model, manufacturer, length, consumables }, id) => (
            <li key={id}>
              <ul className={listCard}>
                <li className={cardItem}>The name: {name}</li>
                <li className={cardItem}>The model: {model}</li>
                <li className={cardItem}>The manufacturer: {manufacturer}</li>
                <li className={cardItem}>The length: {length}</li>
                <li className={cardItem}>Consumables: {consumables}</li>
              </ul>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};
