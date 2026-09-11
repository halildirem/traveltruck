import { useDispatch } from 'react-redux';
import { resetFilters } from '../redux/filters/slice';
import { fetchCampers } from '../redux/campers/operations';

export const useClearFilters = () => {
  const dispatch = useDispatch();

  return () => {
    dispatch(resetFilters());
    dispatch(fetchCampers());
  };
};
