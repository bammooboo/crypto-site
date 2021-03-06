import React from 'react';
import Label from '../Label';
import Error from '../Error';

import { StyledInput, Wrapper } from './ui';

const Input = ({...props}) => (
  <Wrapper>
    <Label htmlFor={props.id} label={props.label} {...props} />
    <StyledInput {...props} error={props.error} touched={props.touched} />
    <Error touched={props.touched} error={props.error} />
  </Wrapper>
);

export default Input;