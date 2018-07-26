import React from 'react';
import { shallow } from 'enzyme';
import shallowTestHelper from '../../utils/test/shallowTestHelper';
import { Text } from './Text';

describe('<Text> component', () => {
  describe('renders the text component correctly', () => {
    shallowTestHelper(<Text />);
  });

  describe('renders the label correctly', () => {
    shallowTestHelper(<Text label="ok" />);
  });

  describe('renders an italic font', () => {
    shallowTestHelper(<Text label="ok" italic />);
  });

  describe('renders a bold font', () => {
    shallowTestHelper(<Text label="ok" bold />);
  });

  describe('renders a dark color', () => {
    shallowTestHelper(<Text label="ok" black />);
  });

  describe('renders a white color', () => {
    shallowTestHelper(<Text label="ok" white />);
  });

  describe('renders a lightgrey color', () => {
    shallowTestHelper(<Text label="ok" lightGrey />);
  });

  describe('renders a primary color', () => {
    shallowTestHelper(<Text label="ok" primary />);
  });

  describe('renders an error color', () => {
    shallowTestHelper(<Text label="ok" error />);
  });

  describe('renders a lightgrey color', () => {
    shallowTestHelper(<Text label="ok" light />);
  });

  describe('renders a xsmall fontsize', () => {
    shallowTestHelper(<Text label="ok" xsmall />);
  });

  describe('renders a small fontsize', () => {
    shallowTestHelper(<Text label="ok" small />);
  });

  describe('renders a medium fontsize', () => {
    shallowTestHelper(<Text label="ok" medium />);
  });

  describe('renders a large fontsize', () => {
    shallowTestHelper(<Text label="ok" large />);
  });

  describe('renders a xlarge fontsize', () => {
    shallowTestHelper(<Text label="ok" xlarge />);
  });

  describe('renders a left textAlignment', () => {
    shallowTestHelper(<Text label="ok" left />);
  });

  describe('renders a right textAlignment', () => {
    shallowTestHelper(<Text label="ok" right />);
  });

  describe('renders a center textAlignment', () => {
    shallowTestHelper(<Text label="ok" center />);
  });

  test('should transform a text to uppercase', () => {
    const wrapper = shallow(<Text uppercase label='ok' />);
    expect(wrapper.dive().text()).toEqual('OK');
  });
});
