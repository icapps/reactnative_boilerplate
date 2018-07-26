import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import FabTest from './src/scenes/fabTest';
import App from './App';

AppRegistry.registerComponent('reactnative_boilerplate', () => App);

Navigation.registerComponent('test', () => FabTest);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'test',
              passProps: {
                text: 'This is tab 1',
              },
            },
          },
        ],
      },
    },
  });
});
