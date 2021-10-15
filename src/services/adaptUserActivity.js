/**
 * @typedef {Object} AdaptedUserActivity
 * @property {number} day
 * @property {number} kilogram
 * @property {number} calories
 */

/**
 * @description Adapt user activity for ActivityChart
 * @param {UserActivity} userActivity
 * @return {AdaptedUserActivity[]}
 */
const adaptUserActivity = (userActivity) =>
  userActivity.sessions.map((session) => {
    const formattedDay = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(
      new Date(session.day)
    );

    return {
      day: +formattedDay,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });

export default adaptUserActivity;
