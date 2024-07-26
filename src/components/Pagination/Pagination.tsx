import { useNavigate, useParams } from 'react-router-dom';
import paginationStyles from './Pagination.module.scss';
import { FC, useEffect, useState } from 'react';

const { pagination, paginationButton } = paginationStyles;

interface PaginationProp {
  next: string | null;
  prev: string | null;
}

const Pagination: FC<PaginationProp> = ({ next, prev }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [pageNumber, setPageNumber] = useState(
    Number(params.id) <= 0 ? 1 : Number(params.id)
  );

  useEffect(() => {
    navigate(`/page/${pageNumber}`);
  }, [navigate, pageNumber]);

  const prevClickHandler = () => {
    if (prev) {
      setPageNumber((prevState) => prevState - 1);
    }
  };

  const nextClickHandler = () => {
    if (next) {
      setPageNumber((prevState) => prevState + 1);
    }
  };

  return (
    <div className={pagination}>
      <button
        type="button"
        className={paginationButton}
        onClick={prevClickHandler}
      >
        Prev
      </button>
      <button
        type="button"
        className={paginationButton}
        onClick={nextClickHandler}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
