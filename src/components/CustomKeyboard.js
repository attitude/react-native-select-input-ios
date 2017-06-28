/**
 * CustomKeyboard
 * https://github.com/markuswind/react-native-select-input
 */

import KeyboardButton from './KeyboardButton.js';
import styles from '../stylesheets/selectInputIOS.css.js';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  Animated,
  Dimensions,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const SCREENHEIGHT = Dimensions.get('window').height / 2

class CustomKeyboard extends Component {
  constructor(props) {
     super(props);

     this.state = {
       keyboardHeight: SCREENHEIGHT,
       transform: new Animated.Value(SCREENHEIGHT)
     }
  }

  onCancelPress() {
    this.hideKeyboard(() => {
      this.props.onCancelPress();
    })
  }

  onSubmitPress() {
    this.hideKeyboard(() => {
      this.props.onSubmitPress();
    })
  }

  showKeyboard () {
    Animated.timing(
      this.state.transform, {
        toValue: 0,
        duration: 150
      }
    ).start()
  }

  hideKeyboard(callback) {
    Animated.timing(
      this.state.transform, {
        toValue: this.state.keyboardHeight,
        duration: 150
      }
    ).start(() => {
      if (callback) {
        callback()
      }
    })
  }

  render() {
    let props = this.props;

    return (
      <Modal animationType={'fade'} transparent={true} visible={props.visible} onShow={() => {this.showKeyboard()}}>
        <TouchableWithoutFeedback onPress={this.onCancelPress.bind(this)}>
          <View style={[
            styles.keyboardBackdrop,
            props.useBackdrop ? styles.keyboardBackdropSemitransparent : {}
          ]}>
            <Animated.View
              style={[styles.modal,
                {
                  transform: [{translateY: this.state.transform}]
                }
              ]}
              onLayout={(event) => {
                this.setState({
                  keyboardHeight: event.nativeEvent.layout.height,
                  transform: new Animated.Value(event.nativeEvent.layout.height)
                })
              }}
            >
              <View
                style={[
                  styles.keyboardHeader,
                  props.updateOnChange ? { justifyContent: 'flex-end'} : {},
                  props.styleKeyboardHeader
                ]}>
                {!props.updateOnChange &&
                  <KeyboardButton
                    style={props.styleKeyboardButtonLeft}
                    styleLabel={props.styleKeyboardButtonLeftLabel}
                    onPress={this.onCancelPress.bind(this)}
                    text={props.cancelKeyText}
                  />
                }

                <KeyboardButton
                  style={props.styleKeyboardButtonRight}
                  styleLabel={props.styleKeyboardButtonRightLabel}
                  onPress={this.onSubmitPress.bind(this)}
                  text={props.submitKeyText}
                />
              </View>

              <View style={{
                width: '100%'
              }}>
                  {props.children}
              </View>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

CustomKeyboard.propTypes =  {
  useBackdrop:                    PropTypes.bool,
  updateOnChange:                 PropTypes.bool,
  buttonTextColor:                PropTypes.string,
  cancelKeyText:                  PropTypes.string,
  onCancelPress:                  PropTypes.func.isRequired,
  onSubmitPress:                  PropTypes.func.isRequired,
  submitKeyText:                  PropTypes.string,
  styleKeyboard:                  PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardHeader:            PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonLeft:        PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonLeftLabel:   PropTypes.oneOfType([Text.propTypes.style, PropTypes.arrayOf(Text.propTypes.style)]),
  styleKeyboardButtonRight:       PropTypes.oneOfType([View.propTypes.style, PropTypes.arrayOf(View.propTypes.style)]),
  styleKeyboardButtonRightLabel:  PropTypes.oneOfType([Text.propTypes.style, PropTypes.arrayOf(Text.propTypes.style)]),
  visible:                        PropTypes.bool.isRequired,
};

CustomKeyboard.defaultProps = {
  useBackdrop:    false
}

export default CustomKeyboard;
