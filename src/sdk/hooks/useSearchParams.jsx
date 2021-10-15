import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

/**
 * @description Fetch GET params
 * @return {URLSearchParams}
 */
const useSearchParams = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

export default useSearchParams;
