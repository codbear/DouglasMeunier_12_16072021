import useGet from './useGet';

/**
 * @typedef {Object} UserActivity
 * @property {number} userId
 * @property {Object[]} sessions
 * @property {string} sessions.day
 * @property {number} sessions.kilogram
 * @property {number} sessions.calories
 */

/**
 * @description Fetch user's activity
 * @param {number} userId - The id of the user whose activity must be retrieved
 * @return {{isLoading: boolean, data: UserActivity, error: Error}}
 */
const useUserActivity = (userId) => {
  return useGet('/user/:id/activity', { id: userId }, { isEnabled: !!userId });
};

export default useUserActivity;
