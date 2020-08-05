import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';

const Error = ({ id, message }) => (
  <Alert id={id} severity="error">
    <AlertTitle>Error</AlertTitle>
    {message}
  </Alert>
);

export default Error;
