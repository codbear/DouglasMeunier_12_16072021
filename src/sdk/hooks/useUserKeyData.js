import useGet from './useGet';

/**
 * @typedef {Object} UserKeyData
 * @property {number} calorieCount
 * @property {number} carbohydrateCount
 * @property {number} lipidCount
 * @property {number} proteinCount
 */

/**
 * @description Fetch user's key data
 * @param {number} userId - The id of the user whose key data must be retrieved
 * @return {{isLoading: boolean, data: UserKeyData, error: Error}}
 */
const useUserKeyData = (userId) => {
  const { data, ...rest } = useGet('/user/:id', { id: userId }, { isEnabled: !!userId });

  return { data: data?.keyData || null, ...rest };
};

export default useUserKeyData;
