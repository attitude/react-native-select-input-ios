import {
  StyleSheet
} from 'react-native';

export const colors = {
  primary: 'black',
  white: 'white',
  secondary: '#8E8E93',
  separator: '#BCBBC1',
  accent: '#007AFF',
  keyboard: '#D2D5DBE6',
  keyboardHeader: '#f0f1f2E6'
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.separator,
    flexGrow: 1,
    height: StyleSheet.hairlineWidth,
    marginTop: -1 * StyleSheet.hairlineWidth
  },
  field: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 44, // default iOS minimum tap target
    justifyContent: 'space-between',
    padding: 8
  },
  fieldValue: {
    color: colors.secondary,
    fontSize: 17,
    height: 22,
    lineHeight: 22,
    marginHorizontal: 8
  },
  fieldValueIsActive: {
    color: colors.accent
  },
  fieldLabel: {
    color: colors.primary,
    fontSize: 17,
    height: 22,
    lineHeight: 22,
    marginHorizontal: 8
  },

  keyboardBackdrop: {
    flex:                       1,
    alignItems:                 'center',
    justifyContent:             'flex-end',
  },
  keyboardBackdropSemitransparent: {
    backgroundColor:            '#04040F66'
  },

  modal: {
    width:                      '100%',
    padding:                    0,
    alignItems:                 'center',
    justifyContent:             'center',
  },

  keyboardHeader: {
    alignItems:                 'center',
    backgroundColor:            colors.keyboardHeader,
    borderTopColor:             colors.separator,
    borderTopWidth:             StyleSheet.hairlineWidth,
    flexDirection:              'row',
    justifyContent:             'space-between',
    minHeight:                  44,
    paddingHorizontal:          8,
    width:                      '100%'
  },

  keyboardButton: {
    padding: 8
  },

  keyboardButtonLabel: {
    color: colors.accent,
    fontSize: 17,
    height: 22,
    lineHeight: 22
  },

  keyboard: {
    backgroundColor: colors.keyboard,
    width: '100%'
  },

  picker_bottom: {
    width:                      '100%',
  }
});

export default styles;
