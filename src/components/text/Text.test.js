import React from 'react';
import shallowTestHelper from '../../utils/test/shallowTestHelper';
import { Text } from './Text';

describe('<Text> component', () => {
  shallowTestHelper(<Text />);
  test('renders the text component correctly', () => {
  });

  shallowTestHelper(<Text label="ok" />);
  test('renders the label correctly', () => {
  });

  shallowTestHelper(<Text label="ok" italic />);
  test('renders an italic font', () => {
  });

  shallowTestHelper(<Text label="ok" bold />);
  test('renders a bold font', () => {
  });

  shallowTestHelper(<Text label="ok" black />);
  test('renders a dark color', () => {
  });

  shallowTestHelper(<Text label="ok" white />);
  test('renders a white color', () => {
  });

  shallowTestHelper(<Text label="ok" lightGrey />);
  test('renders a lightgrey color', () => {
  });

  shallowTestHelper(<Text label="ok" primary />);
  test('renders a primary color', () => {
  });

  shallowTestHelper(<Text label="ok" error />);
  test('renders an error color', () => {
  });

  shallowTestHelper(<Text label="ok" light />);
  test('renders a lightgrey color', () => {
  });

  shallowTestHelper(<Text label="ok" xsmall />);
  test('renders a xsmall fontsize', () => {
  });

  shallowTestHelper(<Text label="ok" small />);
  test('renders a small fontsize', () => {
  });

  shallowTestHelper(<Text label="ok" medium />);
  test('renders a medium fontsize', () => {
  });

  shallowTestHelper(<Text label="ok" large />);
  test('renders a large fontsize', () => {
  });

  shallowTestHelper(<Text label="ok" xlarge />);
  test('renders a xlarge fontsize', () => {
  });

  shallowTestHelper(<Text label="ok" left />);
  test('renders a left textAlignment', () => {
  });

  shallowTestHelper(<Text label="ok" right />);
  test('renders a right textAlignment', () => {
  });

  shallowTestHelper(<Text label="ok" center />);
  test('renders a center textAlignment', () => {
  });
});
