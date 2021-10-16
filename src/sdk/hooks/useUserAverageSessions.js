import useGet from './useGet';

/**
 * @typedef {Object} UserAverageSessions
 * @property {number} userId
 * @property {Object[]} sessions
 * @property {number} sessions.day
 * @property {number} sessions.sessionLength
 */

/**
 * @description Fetch user's average sessions
 * @param {number} userId - The id of the user whose average sessions must be retrieved
 * @return {{isLoading: boolean, data: UserAverageSessions, error: Error}}
 */
const useUserAverageSessions = (userId) => {
  return useGet('/user/:id/average-sessions', { id: userId }, { isEnabled: !!userId });
};

export default useUserAverageSessions;
