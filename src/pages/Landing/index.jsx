import React, { Fragment } from 'react';
import Overlay from '../../components/Overlay';

const Landing = ({ hide }) => (
  <Fragment>
    <Overlay hide={hide} />
  </Fragment>
);

export default Landing;