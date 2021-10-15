/**
 * @typedef {Object} AdaptedUserScore
 * @property {number} todayScore
 */
/**
 * @description Adapt user score for ScoreChart
 * @param {number} todayScore
 * @return {AdaptedUserScore[]}
 */
const adaptUserScore = (todayScore) => [
  {
    todayScore: 100,
  },
  {
    todayScore,
  },
];

export default adaptUserScore;
