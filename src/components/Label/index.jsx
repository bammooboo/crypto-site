import React from 'react';

import LabelText from './ui';

export default ({label, ...props}) => (
  <LabelText htmlFor={props.id || props.name }>
    {label}
  </LabelText>
);