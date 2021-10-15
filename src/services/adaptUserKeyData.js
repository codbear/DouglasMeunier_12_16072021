import caloriesIcon from '../vectors/calories-icon.svg';
import proteinsIcon from '../vectors/protein-icon.svg';
import carbsIcon from '../vectors/carbs-icon.svg';
import fatIcon from '../vectors/fat-icon.svg';

/**
 * @typedef {Object} KeyData
 * @property {string} icon
 * @property {string} label
 * @property {string} unit
 */

/**
 * @typedef {Object & KeyData} AdaptedUserKeyData
 * @property {number} count
 */

/**
 * @description Map key data to its props for KeyDataCard
 */
const mapKeyData = {
  calorieCount: {
    icon: caloriesIcon,
    label: 'Calories',
    unit: 'kCal',
  },
  proteinCount: {
    icon: proteinsIcon,
    label: 'Protéines',
    unit: 'g',
  },
  carbohydrateCount: {
    icon: carbsIcon,
    label: 'Glucides',
    unit: 'g',
  },
  lipidCount: {
    icon: fatIcon,
    label: 'Lipides',
    unit: 'g',
  },
};

/**
 * @description Adapt user key data for KeyDataCard
 * @param {UserKeyData} userKeyData
 * @return {AdaptedUserKeyData[]}
 */
const adaptUserKeyData = (userKeyData) =>
  Object.keys(userKeyData)
    .filter((key) => !!mapKeyData[key])
    .map((key) => ({
      ...mapKeyData[key],
      count: userKeyData[key],
    }));

export default adaptUserKeyData;
