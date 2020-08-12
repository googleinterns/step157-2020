import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';

/**
 * React component for errors
 * @example
 * const id = 'abcd'
 * const message = 'login error'
 * return ( <Error id={id} message={message} />)
 * @returns {JSX.Element} The error component
 */
const Error = ({id, message}) => (
  <Alert id={id} severity="error">
    <AlertTitle>Error</AlertTitle>
    {message}
  </Alert>
);

export default Error;
