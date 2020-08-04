import React from 'react';
import {Alert, AlertTitle} from '@material-ui/lab';

const Error = (props) => (
    <Alert id={props.id} severity="error">
        <AlertTitle>Error</AlertTitle>
        {props.message}
    </Alert>
)

export default Error;