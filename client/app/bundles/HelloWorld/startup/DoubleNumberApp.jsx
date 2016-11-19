import React from 'react';
import ReactOnRails from 'react-on-rails';

import DoubleNumberContainer from '../containers/DoubleNumberContainer';

const DoubleNumberApp = (props) => (
  <DoubleNumberContainer {...props} />
);

ReactOnRails.register({ DoubleNumberApp });
