/**
 * KeyboardButton
 * https://github.com/markuswind/react-native-select-input
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Dimensions,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from '../stylesheets/selectInputIOS.css.js';

class KeyboardButton extends Component {
  render() {
    let props = this.props;

    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.keyboardButton, props.style]}
      >
        <Text style={[styles.keyboardButtonLabel, props.styleLabel]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

KeyboardButton.propTypes =  {
  style:      PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleLabel: PropTypes.oneOfType([Text.propTypes.style, PropTypes.arrayOf(Text.propTypes.style)]),
  onPress:    PropTypes.func.isRequired,
  text:       PropTypes.string.isRequired
};

export default KeyboardButton;
