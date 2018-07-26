import React from 'react';
import { Text, TouchableNativeFeedback } from 'react-native';
import shallowTestHelper from '../../utils/test/shallowTestHelper';
import TouchableFeedback from './TouchableFeedback';

describe('<Text> component', () => {
  describe('renders the TouchableFeedback component correctly', () => {
    shallowTestHelper(
      <TouchableFeedback onPress={() => { }}>
        <Text style={{ padding: 10 }}>This is touchable!</Text>
      </TouchableFeedback >
    );
  });

  describe('renders a highLighted state', () => {
    shallowTestHelper(
      <TouchableFeedback onPress={() => { }} highLight>
        <Text style={{ padding: 10 }}>This is touchable!</Text>
      </TouchableFeedback >
    );
  });

  describe('renders a borderless ripple', () => {
    shallowTestHelper(
      <TouchableFeedback onPress={() => { }} borderlessRipple>
        <Text style={{ padding: 10 }}>This is touchable!</Text>
      </TouchableFeedback >
    );
  });

  describe('renders a custom ripple', () => {
    shallowTestHelper(
      <TouchableFeedback onPress={() => { }} ripple={TouchableNativeFeedback.Ripple('red', false)}>
        <Text style={{ padding: 10 }}>This is touchable!</Text>
      </TouchableFeedback >
    );
  });

  describe('renders with styling in the androidContainer', () => {
    shallowTestHelper(
      <TouchableFeedback onPress={() => { }} androidContainer={{ borderRadius: 20 }}>
        <Text style={{ padding: 20, borderRadius: 20 }}>This is touchable!</Text>
      </TouchableFeedback>
    );
  });
});
