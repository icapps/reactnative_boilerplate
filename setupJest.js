jest.mock('react-native-config', () => ({
  BASE_API_URL: 'https://www.validUrl.com',
}));

jest.mock('react-native-i18n', () => ({
  t: ok => 'Ok', // eslint-disable-line no-unused-vars
}));

jest.mock('react-native-device-info', () => ({
  getUniqueID: () => { },
  getDeviceLocale: () => 'en',
  getModel: () => 'iPhone 8',
}));
