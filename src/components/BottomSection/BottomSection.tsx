import { FC } from 'react';
import { Spinner } from '../spinner/spinner';
import { StarshipShortProperties } from '../../api/StarWarsService';
import styleBottomSection from './BottomSection.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

const { bottomSection, title, subtitle, list, listCard, cardItem, list__li } =
  styleBottomSection;

interface BottomSectionProps {
  loadingState: boolean;
  data: StarshipShortProperties[];
}

export const BottomSection: FC<BottomSectionProps> = ({
  loadingState,
  data,
}) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
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
          data.map(({ name }, id) => (
            <li key={id} className={list__li}>
              <ul className={listCard}>
                <li className={cardItem}>The name: {name}</li>
                <button onClick={() => navigate(`/page/${params.id}/${name}`)}>
                  About
                </button>
              </ul>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};
