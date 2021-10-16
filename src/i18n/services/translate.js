import fr from '../constants/fr.json';

/**
 * @description Translate a key to the given local
 * @param {string} key - The key to translate
 * @param {string} [local=fr] - The local to use to translate the key
 * @return {string} - Translation of the key or the original key if no translation found
 */
const translate = (key, local = 'fr') => {
  if (local === 'fr') {
    return fr[key] || key;
  }
};

export default translate;
