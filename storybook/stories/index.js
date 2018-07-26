import React from 'react';
import { Text as RNText, TouchableNativeFeedback } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Text, TouchableFeedback } from '../../src/components';
import CenterView from './CenterView';

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
    <TouchableFeedback onPress={action('clicked-text')} androidContainer={{ borderRadius: 20 }}>
      <RNText style={{ padding: 20, borderRadius: 20 }}>This is touchable!</RNText>
    </TouchableFeedback>
  ));

storiesOf('Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (<Text label="home_description" />))
  .add('italic', () => (<Text label="home_description" italic />))
  .add('bold', () => (<Text label="home_description" bold />))
  .add('dark color', () => (<Text label="home_description" black />))
  .add('white color', () => (<Text label="home_description" white />))
  .add('lightGrey color', () => (<Text label="home_description" lightGrey />))
  .add('primary color', () => (<Text label="home_description" primary />))
  .add('error color', () => (<Text label="home_description" error />))
  .add('light color', () => (<Text label="home_description" light />))
  .add('xsmall fontSize', () => (<Text label="home_description" xsmall />))
  .add('small fontSize', () => (<Text label="home_description" small />))
  .add('medium fontSize', () => (<Text label="home_description" medium />))
  .add('large fontSize', () => (<Text label="home_description" large />))
  .add('xlarge fontSize', () => (<Text label="home_description" xlarge />))
  .add('left alignment', () => (<Text label="home_description" left />))
  .add('right alignment', () => (<Text label="home_description" right />))
  .add('center alignment', () => (<Text label="home_description" center />))
  .add('uppercase', () => (<Text label="home_description" uppercase />));
