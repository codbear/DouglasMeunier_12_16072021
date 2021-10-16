import useAxios from './useAxios';

/**
 * @description Create a GET request
 * @param {string} endpoint - The API's endpoint to which request must be send
 * @param {RouteParams} [routeParams={}] - The values of params in the endpoint
 * @param {AxiosOptions} [requestOptions={}] - Additional options for the request
 * @return {AxiosResponse}
 */
const useGet = (endpoint, routeParams = {}, requestOptions = {}) => {
  return useAxios('GET', endpoint, routeParams, requestOptions);
};

export default useGet;
