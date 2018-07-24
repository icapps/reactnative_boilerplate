import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TouchableFeedback from '../../src/components/touchable/TouchableFeedback';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('TouchableFeedback', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <TouchableFeedback onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </TouchableFeedback>
  ));
