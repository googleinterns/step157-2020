/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Child, ...props}) => (
  <Route
    {...props}
    render={(routeProps) => (props.id !== null
      ? (<Child {...routeProps} />)
      : (<Redirect to="/signin" />)
    )}
  />
);

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps)(PrivateRoute);
