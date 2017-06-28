/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import SelectInput from 'react-native-select-input-ios';

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

export default class example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSmall0: 0,
      valueSmall1: 1,
      valueLarge:  2,
    };
  }

  onSubmitEditingSmall0(value) {
    this.setState({
      valueSmall0: value
    });
  }

  onSubmitEditingSmall1(value) {
    this.setState({
      valueSmall1: value
    });
  }

  onSubmitEditingLarge(value) {
    this.setState({
      valueLarge: value
    });
  }

  getBananaImage() {
    let state = this.state;
    var bananaImage = require('./assets/sad-banana.gif');

    (state.valueSmall0 === 1) &&
    (state.valueSmall1 === 1) &&
    (state.valueLarge  === 1) &&
    (bananaImage = require('./assets/happy-banana.gif'));

    return bananaImage;
  }

  getPickerOptions() {
    return [
      { value: 0, label: 'Apple'      },
      { value: 1, label: 'Banana'     },
      { value: 2, label: 'Orange'     },
      { value: 3, label: 'Strawberry' }
    ];
  }

  render() {
    let state = this.state;
    let bananaImage = this.getBananaImage();

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <View style={styles.row}>
          <View style={styles.smallInputWrapper}>
            <Text style={styles.label}>
              Small input 0
            </Text>

            <SelectInput
              value={state.valueSmall0}
              options={this.getPickerOptions()}
              onCancelEditing={() => console.log('onCancel')}
              onSubmitEditing={this.onSubmitEditingSmall0.bind(this)}
              styleField={{paddingTop: 0}}
            />
          </View>
          <View style={{
            backgroundColor: '#BCBBC1',
            width: StyleSheet.hairlineWidth
          }} />
          <View style={styles.smallInputWrapper}>
            <Text style={styles.label}>
              Small input 1
            </Text>

            <SelectInput
              value={state.valueSmall1}
              options={this.getPickerOptions()}
              onCancelEditing={() => console.log('onCancel')}
              onSubmitEditing={this.onSubmitEditingSmall1.bind(this)}
              styleField={{paddingTop: 0}}
            />
          </View>
        </View>

        <SelectInput
          value={state.valueLarge}
          label='Large input'
          options={this.getPickerOptions()}
          onCancelEditing={() => console.log('onCancel')}
          onSubmitEditing={this.onSubmitEditingLarge.bind(this)}
          styleKeyboardHeader={{
            backgroundColor: '#00000099'
          }}
          pickerItemColor='white'
          styleKeyboard={{
            backgroundColor: '#00000099'
          }}
          styleKeyboardButtonLeftLabel={{
            color: 'white'
          }}
          styleKeyboardButtonRightLabel={{
            color: 'white'
          }}
          useBackdrop
        />

        <View style={styles.bananawrapper}>
          <Image
            style={{width: 100, height: 100 }}
            source={bananaImage}
          />
        </View>

        <View style={styles.line}/>
      </ScrollView>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const MARGIN_SMALL = 8;
const MARGIN_LARGE = 16;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flex:                     1,
    width:                    SCREEN_WIDTH,
    flexDirection:            'column',
    justifyContent:           'flex-start',
    paddingTop:               20
  },
  label: {
    fontSize:                 15,
    lineHeight:               20,
    marginTop:                MARGIN_LARGE,
    marginHorizontal:         MARGIN_LARGE,
  },
  row: {
    flexDirection:            'row',
    justifyContent:           'space-between',
  },
  smallInputWrapper: {
    flex: 1,
    flexDirection:            'column'
  },
  selectInput: {
    flexDirection:            'row',
    height:                   36,
    borderWidth:              1,
    borderRadius:             4,
    padding:                  MARGIN_SMALL,
    marginTop:                MARGIN_LARGE,
    backgroundColor:          '#FFFFFF',
  },
  selectInputSmall: {
    width:                    SCREEN_WIDTH * 0.5 - (MARGIN_LARGE * 2),
  },
  selectInputLarge: {
    width:                    SCREEN_WIDTH - (MARGIN_LARGE * 2),
  },
  bananawrapper: {
    margin:                   MARGIN_LARGE * 2,
    marginBottom:             0,
    flexDirection:            'column',
    alignItems:               'center',
    justifyContent:           'center',
  },
  line: {
    width:                    SCREEN_WIDTH * 0.75,
    height:                   1,
    marginLeft:               SCREEN_WIDTH * 0.075,
    backgroundColor:          'black',
  }
});

AppRegistry.registerComponent('example', () => example);
