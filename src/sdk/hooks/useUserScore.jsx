import useGet from './useGet';

/**
 * @description Fetch user's score of the day
 * @param {number} userId - The id of the user whose score must be retrieved
 * @return {{isLoading: boolean, data: number, error: Error}}
 */
const useUserScore = (userId) => {
  const { data, ...rest } = useGet('/user/:id', { id: userId }, { isEnabled: !!userId });

  return { data: data?.todayScore || data?.score || null, ...rest };
};

export default useUserScore;
