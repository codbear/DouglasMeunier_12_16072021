/**
 * @typedef {Object[]} AdaptedUserAverageSessions
 * @property {'L'|'M'|'J'|'V'|'S'|'D'} day
 * @property {number} sessionLength
 */

/**
 * @description Map a numeric day to a string
 */
const numericDayToString = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
};

/**
 * @description Adapt user average sessions for AverageSessionChart
 * @param {UserAverageSessions} userAverageSessions
 * @return {AdaptedUserAverageSessions}
 */
const adaptUserAverageSessions = (userAverageSessions) =>
  userAverageSessions.sessions.map((session) => ({
    day: numericDayToString[session.day],
    sessionLength: session.sessionLength,
  }));

export default adaptUserAverageSessions;
