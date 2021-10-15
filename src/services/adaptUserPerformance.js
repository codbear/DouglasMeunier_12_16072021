/**
 * @typedef {Object} AdaptedUserPerformance
 * @property {number} value
 * @property {string} kind
 */

/**
 * @description Adapt user performance for PerformanceChart
 * @param {UserPerformance} userPerformance
 * @return {AdaptedUserPerformance[]}
 */
const adaptUserPerformance = (userPerformance) => {
  const { kind: performanceKind } = userPerformance;

  return userPerformance.data.map((performance) => ({
    value: performance.value,
    kind: performanceKind[performance.kind],
  }));
};

export default adaptUserPerformance;
