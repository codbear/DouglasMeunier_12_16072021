import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * @typedef {'GET'|'POST'|'PUT'|'PATCH'|'DELETE'} Method - Allowed method to request API
 */

/**
 * @typedef {Object.<string|number>} RouteParams
 */

/**
 * @typedef {Object} AxiosOptions
 * @property {boolean} [isEnabled] - Triggers the request when true, useful for dependant queries
 */

/**
 * @typedef {Object} AxiosResponse
 * @property {boolean} isLoading - True until request ends
 * @property {*} [data] - Body of the response
 * @property {Error} [error]
 */

/**
 * @description Base URL from which API is served
 * @type {string}
 */
axios.defaults.baseURL = process.env.REACT_APP_API_ROOT_URL;

/**
 * @description Create a request with Axios
 * @param {Method} method
 * @param {string} endpoint - The API's endpoint to which request must be send
 * @param {RouteParams} routeParams - The values of params in the endpoint
 * @param {AxiosOptions} options - Additional options for the request
 * @return {AxiosResponse}
 */
const useAxios = (method, endpoint, routeParams, options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const requestOptions = Object.assign({ isEnabled: true }, options);

  const { isEnabled } = requestOptions;

  const url = endpoint.replace(/\/:([a-zA-Z0-9_]+)/gi, ($0, $1) =>
    routeParams[$1] ? `/${routeParams[$1]}` : ''
  );

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.request({
          method,
          url,
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
  }, [isEnabled, method, url]);

  return { data, error, isLoading };
};

export default useAxios;
