/**
 * SelectInput
 * https://github.com/markuswind/react-native-select-input
 */

import { Component } from 'react';

class AbstractSelectInput extends Component {
  focus() {
    // NOTE: - implemented on iOS only..
  }

  onCancel() {
    let props = this.props;

    this.setState({
      active: false
    });

    props.onEndEditing && props.onEndEditing();
  }

  onSubmit(value) {
    let onSubmitEditing = this.props.onSubmitEditing;

    this.setState({
      active: false
    });

    this.setState({selectedValue: value}, function() {
      onSubmitEditing && onSubmitEditing(value);
    });
  }

  getValueLabel(value) {
    let props = this.props;
    let options = props.options || [{value: '', label: ''}];

    var label = options.map(function(object) {
      if (object.value === value) {
        return object.label;
      }
    });

    return label || '';
  }
}

export default AbstractSelectInput;
