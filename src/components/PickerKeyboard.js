/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import CustomKeyboard from './CustomKeyboard.js';
import styles from './../stylesheets/pickerKeyboard.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Picker,
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
        buttonsBackgroundColor={props.buttonsBackgroundColor}
        buttonsTextColor={props.buttonsTextColor}
        cancelKeyText={props.cancelKeyText}
        onCancelPress={this.onCancelPress.bind(this)}
        onSubmitPress={this.onSubmitPress.bind(this)}
        submitKeyText={props.submitKeyText}
        visible={this.state.visible}
        >
        <Picker
          ref={(c) => { this.picker = c; }}
          selectedValue={state.value}
          onValueChange={this.onValueChange.bind(this)}
          style={[
            styles.pickerview,
            { backgroundColor: props.keyboardBackgroundColor }
          ]}
          >
            {props.options.map((option, index) => {
              return (
                <Picker.Item
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
  buttonsBackgroundColor: PropTypes.string,
  buttonsTextColor:       PropTypes.string,
  cancelKeyText:          PropTypes.string,
  onCancel:               PropTypes.func,
  onSubmit:               PropTypes.func,
  options:                PropTypes.array,
  style:                  PropTypes.object,
  submitKeyText:          PropTypes.string,
  value:                  PropTypes.any,
};

export default PickerKeyboard;
