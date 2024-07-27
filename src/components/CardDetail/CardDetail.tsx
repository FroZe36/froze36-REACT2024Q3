import styleCardDetail from './CaraDetail.module.scss';

import { useEffect, useState, useCallback } from 'react';
import { Spinner } from '../spinner/spinner';
import { StarshipData, StarWarsGetShip } from '../../api/StarWarsService';
import { useParams } from 'react-router-dom';

const { listCard, cardItem, buttonClose } = styleCardDetail;

const CardDetail = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<StarshipData | null>();
  const params = useParams<{ id: string; name: string }>();
  const setStateResponse = useCallback(async (name: string) => {
    setLoading(true);
    const data = await StarWarsGetShip(name);
    if (data) {
      setData(data);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    if (params.name)
      setStateResponse(params.name).catch((err) => console.log(err));
  }, [params.name, setStateResponse]);

  const clearData = () => {
    setData(null);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        data && (
          <ul className={listCard}>
            <button className={buttonClose} onClick={clearData}>
              X
            </button>
            <li className={cardItem}>The name: {data?.results[0].name}</li>
            <li className={cardItem}>The model: {data?.results[0].model}</li>
            <li className={cardItem}>
              The manufacturer: {data?.results[0].manufacturer}
            </li>
            <li className={cardItem}>The length: {data?.results[0].length}</li>
            <li className={cardItem}>
              Consumables: {data?.results[0].consumables}
            </li>
          </ul>
        )
      )}
    </>
  );
};

export default CardDetail;
