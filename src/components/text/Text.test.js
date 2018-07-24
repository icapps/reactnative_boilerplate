import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './Text';

describe('<Text> component', () => {
  test('renders the text component correctly', () => {
    const wrapper = renderer.create(<Text />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders the label correctly', () => {
    const wrapper = renderer.create(<Text label="ok" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders an italic font', () => {
    const wrapper = renderer.create(<Text label="ok" italic />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders ta bold font', () => {
    const wrapper = renderer.create(<Text label="ok" bold />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a semibold font', () => {
    const wrapper = renderer.create(<Text label="ok" semiBold />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a light font', () => {
    const wrapper = renderer.create(<Text label="ok" light />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a dark color', () => {
    const wrapper = renderer.create(<Text label="ok" dark />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a white color', () => {
    const wrapper = renderer.create(<Text label="ok" white />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a lightgrey color', () => {
    const wrapper = renderer.create(<Text label="ok" lightGrey />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a primary blue color', () => {
    const wrapper = renderer.create(<Text label="ok" primaryBlue />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a secondary blue color', () => {
    const wrapper = renderer.create(<Text label="ok" secondaryBlue />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders an error color', () => {
    const wrapper = renderer.create(<Text label="ok" error />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a lightgrey color', () => {
    const wrapper = renderer.create(<Text label="ok" light />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a xsmall fontsize', () => {
    const wrapper = renderer.create(<Text label="ok" xsmall />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a small fontsize', () => {
    const wrapper = renderer.create(<Text label="ok" small />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a medium fontsize', () => {
    const wrapper = renderer.create(<Text label="ok" medium />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a large fontsize', () => {
    const wrapper = renderer.create(<Text label="ok" large />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a xlarge fontsize', () => {
    const wrapper = renderer.create(<Text label="ok" xlarge />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a left textAlignment', () => {
    const wrapper = renderer.create(<Text label="ok" left />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a right textAlignment', () => {
    const wrapper = renderer.create(<Text label="ok" right />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a center textAlignment', () => {
    const wrapper = renderer.create(<Text label="ok" center />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
