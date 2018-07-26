import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Translations } from '../../utils';

// Helper function to get the font-family based on props. Defaults to regular
const getFontFamily = (props) => {
  const fontstyle = {};
  if (props.italic) fontstyle.fontStyle = 'italic';
  if (props.bold) fontstyle.fontWeight = 'bold';
  return fontstyle;
};

const getTextDecorationLine = (props) => {
  let textDecorationLine = 'none';
  if (props.underline) textDecorationLine = 'underline';
  return { textDecorationLine };
};

const getFontColor = (props) => {
  let color = Colors.text;
  if (props.white) color = Colors.white;
  if (props.black) color = Colors.black;
  if (props.lightGrey) color = Colors.text_light;
  if (props.primary) color = Colors.primary;
  if (props.error) color = Colors.error;
  if (props.success) color = Colors.success;
  return { color };
};

const getFontSize = (props) => {
  let fontSize = 14;
  let lineHeight = 20;
  if (props.xxxsmall) {
    fontSize = 6;
    lineHeight = 8;
  }
  if (props.xxsmall) {
    fontSize = 8;
    lineHeight = 12;
  }
  if (props.xsmall) {
    fontSize = 10;
    lineHeight = 14;
  }
  if (props.small) {
    fontSize = 12;
    lineHeight = 16;
  }
  if (props.medium) {
    fontSize = 16;
    lineHeight = 22;
  }
  if (props.large) {
    fontSize = 18;
    lineHeight = 26;
  }
  if (props.xlarge) {
    fontSize = 24;
    lineHeight = 32;
  }
  if (props.xxlarge) {
    fontSize = 30;
    lineHeight = 40;
  }
  return { fontSize, lineHeight };
};

const getAlignment = (props) => {
  let textAlign = 'left';
  if (props.center) textAlign = 'center';
  if (props.right) textAlign = 'right';
  if (props.left) textAlign = 'left';
  return { textAlign };
};

export const Text = ({ style, label, uppercase, ...props }) => {
  const styles = [
    getFontFamily(props),
    getFontColor(props),
    getFontSize(props),
    getAlignment(props),
    getTextDecorationLine(props),
    style,
  ];

  if (label) {
    return (
      <RNText style={styles} {...props}>
        {uppercase ? Translations.getLabel(label).toUpperCase() : Translations.getLabel(label)}
      </RNText>
    );
  }
  return <RNText style={styles} {...props} />;
};

Text.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  uppercase: PropTypes.bool,
};

Text.defaultProps = {
  style: {},
  label: '',
  uppercase: false,
};

export default Text;
