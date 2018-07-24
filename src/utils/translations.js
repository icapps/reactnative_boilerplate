import I18n from 'react-native-i18n';
import DeviceInfo from 'react-native-device-info';

import en from '../../labels/en';
import nl from '../../labels/nl';

const getLabel = (key, inserts = {}) => I18n.t(key, inserts);

// Export specific function to get a label
// If the key is part of the label and not starting from index 0, we know it's a label that isn't found
// Since labels that are not found are formatted as [missing "<lang>.<key>" translation] not found
const doesLabelExists = key => getLabel(key).indexOf(key) <= 0;

const getDeviceLanguage = () => {
  if (DeviceInfo.getDeviceLocale().startsWith('nl')) return 'nl';
  return 'en';
};


// Enable fallback for language keys. FE: en_US will fallback to en
I18n.fallbacks = true;
// Set default locale
I18n.defaultLocale = getDeviceLanguage();
I18n.locale = getDeviceLanguage();

// Make translations object with all the labels
const translations = {
  en,
  nl,
};
I18n.translations = translations;


export default {
  doesLabelExists,
  getDeviceLanguage,
  getLabel,
  I18n,
};
