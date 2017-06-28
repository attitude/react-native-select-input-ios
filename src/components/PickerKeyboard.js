/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import CustomKeyboard from './CustomKeyboard.js';
import styles from '../stylesheets/selectInputIOS.css.js';
import { colors } from '../stylesheets/selectInputIOS.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Picker,
  Text,
  View,
} from 'react-native';

class PickerKeyboard extends Component {
  constructor(props) {
    super(props);

    // refs
    this.customKeyboard = null;

    // initial state
    this.state = {
      value: props.value,
      visible: false,
    };
  }

  focus() {
    this.setVisible(true);
  }

  onCancelPress() {
    this.setVisible(false);

    let onCancel = this.props.onCancel;
    onCancel && onCancel();
  }

  onSubmitPress() {
    this.setVisible(false);

    let onSubmit = this.props.onSubmit;
    onSubmit && onSubmit(this.state.value);
  }

  onValueChange(value) {
    this.setState({
      value: value
    });
  }

  setVisible(visible) {
    this.setState({
      visible: visible
    });
  }

  render() {
    let props = this.props;
    let state = this.state;

    return (
      <CustomKeyboard
        styleKeyboard={props.styleKeyboard}
        styleKeyboardHeader={props.styleKeyboardHeader}
        styleKeyboardButtonLeft={props.styleKeyboardButtonLeft}
        styleKeyboardButtonLeftLabel={props.styleKeyboardButtonLeftLabel}
        styleKeyboardButtonRight={props.styleKeyboardButtonRight}
        styleKeyboardButtonRightLabel={props.styleKeyboardButtonRightLabel}
        buttonsTextColor={props.buttonsTextColor}
        cancelKeyText={props.cancelKeyText}
        onCancelPress={this.onCancelPress.bind(this)}
        onSubmitPress={this.onSubmitPress.bind(this)}
        submitKeyText={props.submitKeyText}
        visible={this.state.visible}
        useBackdrop={props.useBackdrop}
        >
        <Picker
          ref={(c) => { this.picker = c; }}
          selectedValue={state.value}
          onValueChange={this.onValueChange.bind(this)}
          style={[styles.keyboard, props.styleKeyboard]}
        >
          {props.options.map((option, index) => {
            return (
              <Picker.Item
                color={props.pickerItemColor || colors.primary}
                key={option.value || index}
                value={option.value}
                label={option.label}
              />
            );
          })}
        </Picker>
      </CustomKeyboard>
    );
  }
}

PickerKeyboard.propTypes = {
  useBackdrop:                    PropTypes.bool,
  buttonsTextColor:               PropTypes.string,
  cancelKeyText:                  PropTypes.string,
  onCancel:                       PropTypes.func,
  onSubmit:                       PropTypes.func,
  options:                        PropTypes.array,
  style:                          PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  pickerItemColor:                PropTypes.string,
  styleKeyboard:                  PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardHeader:            PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonLeft:        PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonLeftLabel:   PropTypes.oneOfType([Text.propTypes.style, PropTypes.arrayOf(Text.propTypes.style)]),
  styleKeyboardButtonRight:       PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonRightLabel:  PropTypes.oneOfType([Text.propTypes.style, PropTypes.arrayOf(Text.propTypes.style)]),
  submitKeyText:                  PropTypes.string,
  value:                          PropTypes.any,
};

PickerKeyboard.defaultProps = {
  useBackdrop:    false
};

export default PickerKeyboard;
