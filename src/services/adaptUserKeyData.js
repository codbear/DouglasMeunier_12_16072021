import CaloriesIcon from '../vectors/calories-icon.svg';
import ProteinsIcon from '../vectors/protein-icon.svg';
import CarbsIcon from '../vectors/carbs-icon.svg';
import FatIcon from '../vectors/fat-icon.svg';

/**
 * @typedef {Object[]} AdaptedUserKeyData
 * @property {node} icon
 * @property {string} label
 * @property {number} count
 * @property {string} unit
 */

/**
 * @description Map key data to its props for KeyDataCard
 */
const mapKeyData = {
  calorieCount: {
    icon: CaloriesIcon,
    label: 'Calories',
    count: 1930,
    unit: 'kCal',
  },
  proteinCount: {
    icon: ProteinsIcon,
    label: 'Protéines',
    count: 155,
    unit: 'g',
  },
  carbohydrateCount: {
    icon: CarbsIcon,
    label: 'Glucides',
    count: 290,
    unit: 'g',
  },
  lipidCount: {
    icon: FatIcon,
    label: 'Lipides',
    count: 50,
    unit: 'g',
  },
};

/**
 * @description Adapt user key data for KeyDataCard
 * @param {UserKeyData} userKeyData
 * @return {AdaptedUserKeyData}
 */
const adaptUserKeyData = (userKeyData) => Object.keys(userKeyData).map((key) => mapKeyData[key]);

export default adaptUserKeyData;
