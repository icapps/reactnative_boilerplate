import React from 'react';
import { Text as RNText, TouchableNativeFeedback } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import TouchableFeedback from './TouchableFeedback';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('TouchableFeedback', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <TouchableFeedback onPress={action('clicked-text')}>
      <RNText style={{ padding: 10 }}>This is touchable!</RNText>
    </TouchableFeedback>
  ))
  .add('disabled', () => (
    <TouchableFeedback onPress={action('clicked-text')} disabled>
      <RNText style={{ padding: 10 }}>This is touchable!</RNText>
    </TouchableFeedback>
  ))
  .add('highLight', () => (
    <TouchableFeedback onPress={action('clicked-text')} highLight>
      <RNText style={{ padding: 10 }}>This is touchable!</RNText>
    </TouchableFeedback>
  ))
  .add('borderlessRipple', () => (
    <TouchableFeedback onPress={action('clicked-text')} borderlessRipple>
      <RNText style={{ padding: 10 }}>This is touchable!</RNText>
    </TouchableFeedback>
  ))
  .add('custom ripple', () => (
    <TouchableFeedback onPress={action('clicked-text')} ripple={TouchableNativeFeedback.Ripple('red', false)}>
      <RNText style={{ padding: 10 }}>This is touchable!</RNText>
    </TouchableFeedback>
  ))
  .add('example with borderRadius', () => (
    <TouchableFeedback onPress={action('clicked-text')} androidContainerStyle={{ borderRadius: 20 }}>
      <RNText style={{ padding: 20, borderRadius: 20 }}>This is touchable!</RNText>
    </TouchableFeedback>
  ));
