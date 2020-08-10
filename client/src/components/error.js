import {Alert, AlertTitle} from '@material-ui/lab';
import React from 'react';

/**
 * Displays an error box containing a passed in message
 * @param {string} id Id used for CSS files
 * @param {string} message Error message to be shown
 */
const Error = ({id, message}) => (
  <Alert id={id} severity="error">
    <AlertTitle>Error</AlertTitle>
    {message}
  </Alert>
);

export default Error;
