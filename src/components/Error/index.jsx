import React from 'react';

import { Container, ErrorText } from './ui';

export default ({ error, touched }) => (
  <Container className={error && touched ? "error active" : "error"}>
    <ErrorText>{error}</ErrorText>
  </Container>
);