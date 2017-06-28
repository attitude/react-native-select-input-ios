/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import AbstractSelectInput from './AbstractSelectInput.js';
import PickerKeyboard from './../PickerKeyboard.js';

import styles from './../../stylesheets/selectInputIOS.css.js';

import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

class SelectInput extends AbstractSelectInput {
  constructor(props) {
    super(props);

    // refs
    this.pickerKeyboard = null;

    // initial state
    this.state = {
      selectedValue: props.value,
      active: false
    };
  }

  getValue() {
    return this.state.selectedValue;
  }

  focus() {
    let props = this.props;
    let pickerKeyboard = this.pickerKeyboard;

    this.setState({
      active: true
    });

    pickerKeyboard && pickerKeyboard.focus();
    props.onBeginEditing && props.onBeginEditing();
  }

  onChange (value, index) {
    let props = this.props

    let onValueChange = this.props.onValueChange;

    if (props.updateOnChange) {
      this.setState({selectedValue: value}, function() {
        onValueChange && onValueChange(value, index);
      });
    } else {
      onValueChange && onValueChange(value, index);
    }
  }

  render() {
    let props = this.props;

    // TODO: - add fully customizable styles
    return (
      <TouchableWithoutFeedback onPress={this.focus.bind(this)}>
        <View style={[styles.fieldWrapper, props.style]}>
          <View style={[styles.field, props.styleField]}>
            {props.label &&
              <Text
                style={[styles.fieldLabel, props.styleFieldLabel]}
              >{props.label}</Text>
            }
            <Text
              style={[
                styles.fieldValue,
                props.styleFieldValue,
                this.state.active ? styles.fieldValueIsActive : {},
                this.state.active ? props.styleFieldValueIsActive : {},
              ]}
              adjustFontSizeToFit={true}
              allowsFontScaling={false}
              numberOfLines={1}
              >
              {this.getValueLabel(this.state.selectedValue)}
            </Text>

            <PickerKeyboard
              ref={(c) => { this.pickerKeyboard = c; }}
              options={props.options}
              value={this.state.selectedValue}
              onCancel={this.onCancel.bind(this)}
              onChange={this.onChange.bind(this)}
              onSubmit={this.onSubmit.bind(this)}
              pickerItemColor={props.pickerItemColor}
              styleKeyboard={props.styleKeyboard}
              styleKeyboardHeader={props.styleKeyboardHeader}
              styleKeyboardButtonLeft={props.styleKeyboardButtonLeft}
              styleKeyboardButtonLeftLabel={props.styleKeyboardButtonLeftLabel}
              styleKeyboardButtonRight={props.styleKeyboardButtonRight}
              styleKeyboardButtonRightLabel={props.styleKeyboardButtonRightLabel}
              buttonsTextColor={props.buttonsTextColor}
              keyboardBackgroundColor={props.keyboardBackgroundColor}
              submitKeyText={props.submitKeyText}
              cancelKeyText={props.cancelKeyText}
              useBackdrop={props.useBackdrop}
              updateOnChange={props.updateOnChange}
            />
          </View>
          {props.separator && <View style={styles.separator} />}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

SelectInput.propTypes = {
  useBackdrop:              PropTypes.bool,
  updateOnChange:           PropTypes.bool,
  buttonsTextColor:         PropTypes.string,
  cancelKeyText:            PropTypes.string,
  keyboardBackgroundColor:  PropTypes.string,
  labelStyle:               PropTypes.object,
  onEndEditing:             PropTypes.func,
  onValueChange:            PropTypes.func,
  onSubmitEditing:          PropTypes.func,
  options:                  PropTypes.array,
  submitKeyText:            PropTypes.string,
  style:                          PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  pickerItemColor:                PropTypes.string,
  styleKeyboard:                  PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardHeader:            PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonLeft:        PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonLeftLabel:   PropTypes.oneOfType([Text.propTypes.style, PropTypes.arrayOf(Text.propTypes.style)]),
  styleKeyboardButtonRight:       PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonRightLabel:  PropTypes.oneOfType([Text.propTypes.style, PropTypes.arrayOf(Text.propTypes.style)]),
  value:                    PropTypes.any,
  separator:                PropTypes.bool
};

SelectInput.defaultProps = {
  useBackdrop:             false,
  updateOnChange:          true, // Default behaviour on iOS
  cancelKeyText:           'Cancel',
  keyboardBackgroundColor: '#FFFFFF',
  buttonsTextColor:        '#006BFF',
  options:                 [{ value: 0, label: '0' }],
  submitKeyText:           'Done',
  value:                   0,
  separator:               true
};

export default SelectInput;
