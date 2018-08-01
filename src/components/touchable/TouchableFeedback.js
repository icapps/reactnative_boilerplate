import React, { PureComponent } from 'react';
import { View, ViewPropTypes, Platform, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../../utils';
import style from './TouchableFeedback.style';

const THROTTLE = 500;

class TouchableFeedback extends PureComponent {
  constructor(props) {
    super(props);
    this.pressed = false;
  }

  onPress = () => {
    if (this.pressed !== true) {
      this.props.onPress();
      this.pressed = true;
      setTimeout(() => {
        this.pressed = false;
      }, THROTTLE);
    }
  };

  renderIos = () => {
    if (this.props.highLight) {
      return (
        <TouchableHighlight underlayColor={Colors.grey} {...this.props} onPress={this.onPress}>
          {this.props.children}
        </TouchableHighlight>
      );
    }
    return (
      <TouchableOpacity {...this.props} onPress={this.onPress}>
        {this.props.children}
      </TouchableOpacity>
    );
  };

  getRipple = () => {
    if (this.props.borderlessRipple) {
      return TouchableNativeFeedback.SelectableBackgroundBorderless();
    }
    return this.props.ripple || TouchableNativeFeedback.SelectableBackground();
  };

  renderAndroid = () => (
    <View style={[this.props.androidContainerStyle, !this.props.borderlessRipple && style.androidContainer]}>
      <TouchableNativeFeedback
        {...this.props}
        style={{}} // empty style, to override the style object from props
        onPress={this.onPress}
        background={this.getRipple()}>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  render() {
    if (Platform.OS === 'ios') {
      return this.renderIos();
    }
    return this.renderAndroid();
  }
}

TouchableFeedback.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element,
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.object,
  ]),
  disabled: PropTypes.bool,
  borderlessRipple: PropTypes.bool,
  ripple: PropTypes.object,
  highLight: PropTypes.bool,
  androidContainerStyle: PropTypes.object,
};

TouchableFeedback.defaultProps = {
  disabled: false,
  ripple: null,
  borderlessRipple: false,
  style: {},
  androidContainerStyle: {},
};

export default TouchableFeedback;
