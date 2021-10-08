import useAxios from './useAxios';

const useGet = (endpoint, routeParams = {}, requestOptions = {}) => {
  return useAxios('GET', endpoint, routeParams, requestOptions);
};

export default useGet;
