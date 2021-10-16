/**
 * @typedef {Object} AdaptedUserPerformance
 * @property {number} value
 * @property {string} kind
 */

import { translate } from '../i18n';

/**
 * @description Adapt user performance for PerformanceChart
 * @param {UserPerformance} userPerformance
 * @return {AdaptedUserPerformance[]}
 */
const adaptUserPerformance = (userPerformance) => {
  const { kind: performanceKind } = userPerformance;

  return userPerformance.data.map((performance) => {
    const kindFr = translate(performanceKind[performance.kind]);
    const capitalizedKindFr = kindFr.charAt(0).toUpperCase() + kindFr.slice(1);

    return {
      value: performance.value,
      kind: capitalizedKindFr,
    };
  });
};

export default adaptUserPerformance;
