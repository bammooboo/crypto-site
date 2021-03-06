import React from 'react';
import Backdrop from './ui';

export default ({ show, clicked }) => (show ? <Backdrop onClick={clicked} /> : null);