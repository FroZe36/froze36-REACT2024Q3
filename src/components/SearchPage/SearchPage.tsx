import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { TopSection } from '../TopSection/TopSection';
import { BottomSection } from '../BottomSection/BottomSection';
import {
  StarshipShortProperties,
  StarWarsService,
} from '../../api/StarWarsService';
import styleSearchPage from './SearchPage.module.scss';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { useLocalStorage } from '../../hooks/useLocalStorage';
const { main } = styleSearchPage;

export const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [inputResult, setInputResult] = useState('');
  const [data, setData] = useState<StarshipShortProperties[]>([]);
  const [value, setValue] = useLocalStorage();

  const setStateResponse = useCallback(async (searchQuery: string) => {
    setLoading(true);
    const data = await StarWarsService(searchQuery);
    if (data) {
      setData(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    setInputResult(value);
    setStateResponse(value).catch((err) => console.log(err));
  }, [setStateResponse, value]);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputResult(e.target.value.trim());
  };

  const handlerSearch = () => {
    setValue(inputResult);
  };

  return (
    <ErrorBoundary>
      <main className={main}>
        <TopSection
          handlerChange={handlerChange}
          handlerSearch={handlerSearch}
          valueResult={inputResult}
        />
        <BottomSection loadingState={loading} data={data} />
      </main>
    </ErrorBoundary>
  );
};
