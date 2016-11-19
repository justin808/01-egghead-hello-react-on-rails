import React, { PropTypes } from 'react';

const DoubleNumber = ({ value, updateValue }) => (
  <form>
    <label htmlFor="number">
      Number to double:
    </label>
    <input
      type="text" value={value} id="number"
      onChange={(e) => updateValue(e.target.value)}
    />
    <hr />
    {
      isNaN(value)
        ? 'Invalid value'
        : `Number doubled is ${parseFloat(value) * 2}`
    }
  </form>
);

DoubleNumber.propTypes = {
  value: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default DoubleNumber;
