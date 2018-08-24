import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Text } from './Text';
import CenterView from '../../../storybook/stories/CenterView';

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
