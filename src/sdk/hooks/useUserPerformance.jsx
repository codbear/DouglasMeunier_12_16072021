import useGet from './useGet';

/**
 * @typedef {Object} UserPerformance
 * @property {number} userId
 * @property {Object.<string>} kind
 * @property {Object[]} data
 * @property {number} data.value
 * @property {number} data.kind
 */

/**
 * @description Fetch user's performances
 * @param {number} userId - The id of the user whose performances must be retrieved
 * @return {{isLoading: boolean, data: UserPerformance, error: Error}}
 */
const useUserPerformance = (userId) => {
  return useGet('/user/:id/performance', { id: userId }, { isEnabled: !!userId });
};

export default useUserPerformance;
