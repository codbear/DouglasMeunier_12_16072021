import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const useAxios = (method, endpoint, routeParams, requestOptions) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const url = endpoint.replace(/\/:([a-zA-Z0-9_]+)/gi, ($0, $1) =>
          routeParams[$1] ? `/${routeParams[$1]}` : ''
        );

        const response = await axios.request({
          method,
          url,
          ...requestOptions,
          headers: {
            Accept: 'application/json',
            ...requestOptions.headers,
          },
        });

        setData(response.data);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return { data, error, isLoading };
};

export default useAxios;
