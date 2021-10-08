import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const useAxios = (method, endpoint, routeParams, options) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const requestOptions = Object.assign({ isEnabled: true }, options);

  const { isEnabled } = requestOptions;

  const memoizedMethod = useMemo(() => method, [method]);
  const memoizedUrl = useMemo(
    () =>
      endpoint.replace(/\/:([a-zA-Z0-9_]+)/gi, ($0, $1) =>
        routeParams[$1] ? `/${routeParams[$1]}` : ''
      ),
    [endpoint, routeParams]
  );

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.request({
          method: memoizedMethod,
          url: memoizedUrl,
          headers: {
            Accept: 'application/json',
          },
        });

        const { data: responseBody } = response.data;

        setData(responseBody);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    if (isEnabled) {
      getData();
    }
  }, [isEnabled, memoizedMethod, memoizedUrl]);

  return { data, error, isLoading };
};

export default useAxios;
