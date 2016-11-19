import React, { PropTypes } from 'react';
import DoubleNumber from '../components/DoubleNumber';

export default class DoubleNumberContainer extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { value: this.props.value };
  }

  updateValue = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <DoubleNumber
          value={this.state.value}
          updateValue={this.updateValue}
        />
      </div>
    );
  }
}
