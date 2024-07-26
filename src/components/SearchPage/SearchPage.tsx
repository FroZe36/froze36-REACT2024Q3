import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { TopSection } from '../TopSection/TopSection';
import { BottomSection } from '../BottomSection/BottomSection';
import { StarshipData, StarWarsService } from '../../api/StarWarsService';
import styleSearchPage from './SearchPage.module.scss';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
const { main } = styleSearchPage;

export const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [inputResult, setInputResult] = useState('');
  const [data, setData] = useState<StarshipData>();
  const [value, setValue] = useLocalStorage();
  const params = useParams();
  const navigate = useNavigate();

  const setStateResponse = useCallback(
    async (searchQuery: string, pageNum: number) => {
      setLoading(true);
      if (pageNum <= 0) {
        navigate(`/page/1`);
      }
      const data = await StarWarsService(
        searchQuery,
        pageNum <= 0 ? 1 : pageNum
      );
      if (data) {
        setData(data);
        console.log(data);
      }
      setLoading(false);
    },
    [navigate]
  );

  useEffect(() => {
    setInputResult(value);
    setStateResponse(value, Number(params.id)).catch((err) => console.log(err));
  }, [setStateResponse, value, params.id]);

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
        <div>
          <BottomSection
            loadingState={loading}
            data={data ? data.results : []}
          />
          <Outlet />
        </div>
        <Pagination
          next={data ? data.next : null}
          prev={data ? data.previous : null}
        />
      </main>
    </ErrorBoundary>
  );
};
