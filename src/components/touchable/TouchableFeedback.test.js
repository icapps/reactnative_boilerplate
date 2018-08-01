import React from 'react';
import { Text, TouchableNativeFeedback } from 'react-native';
import { shallow } from 'enzyme';
import shallowTestHelper from '../../utils/test/shallowTestHelper';
import mockAndroid from '../../utils/test/mockAndroid';
import TouchableFeedback from './TouchableFeedback';

describe('<TouchableFeedback> component', () => {
  describe('<TouchableFeedback> component for iOS', () => {
    describe('renders the TouchableFeedback component correctly', () => {
      shallowTestHelper(
        <TouchableFeedback onPress={() => { }}>
          <Text style={{ padding: 10 }}>This is touchable!</Text>
        </TouchableFeedback >
      );
    });

    describe('renders a disabled state', () => {
      shallowTestHelper(
        <TouchableFeedback onPress={() => { }} disabled>
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
        <TouchableFeedback onPress={() => { }} androidContainerStyle={{ borderRadius: 20 }}>
          <Text style={{ padding: 20, borderRadius: 20 }}>This is touchable!</Text>
        </TouchableFeedback>
      );
    });
  });

  describe('<TouchableFeedback> component for Android', () => {
    beforeEach(() => {
      mockAndroid();
    });

    describe('renders the TouchableFeedback component correctly', () => {
      shallowTestHelper(
        <TouchableFeedback onPress={() => { }}>
          <Text style={{ padding: 10 }}>This is touchable!</Text>
        </TouchableFeedback >
      );
    });

    describe('renders a disabled state', () => {
      shallowTestHelper(
        <TouchableFeedback onPress={() => { }} disabled>
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
        <TouchableFeedback onPress={() => { }} androidContainerStyle={{ borderRadius: 20 }}>
          <Text style={{ padding: 20, borderRadius: 20 }}>This is touchable!</Text>
        </TouchableFeedback>
      );
    });
  });

  describe('onPress is functional', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <TouchableFeedback onPress={mockFunction}>
        <Text>This is touchable!</Text>
      </TouchableFeedback>
    );
    wrapper.simulate('press');
    expect(mockFunction).toHaveBeenCalled();
  });

  describe('onPress uses throttle', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <TouchableFeedback onPress={mockFunction}>
        <Text>This is touchable!</Text>
      </TouchableFeedback>
    );
    wrapper.simulate('press');
    wrapper.simulate('press');
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
