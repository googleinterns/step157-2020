import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signInUser } from '../../api/auth-api.js';
import Error from '../../components/error.js';
import { setError } from '../../authentication/auth-slice.js';
import store from '../../app/store.js';
import './sign-in.css';

const SignIn = ({error}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history =  useHistory();

  return (
    <div id="main-container">
      <h1 id="title">Sign In</h1>
      <form>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="email"
          autoComplete="off"
          onChange={(event) => { setEmail(event.target.value); }}
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          onChange={(event) => { setPassword(event.target.value); }}
        />
        <button
          id="switch-page-button"
          type="button"
          onClick={() => {
            store.dispatch(setError(null));
            history.push('/signup');
          }}
        >
          Create Account
        </button>
        <button
          id="submit-button"
          type="button"
          onClick={() => {
            signInUser(email, password, history);
          }}
        >
          Sign In
        </button>
        {error ? <Error id="error" message={error} /> : null}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ error: state.auth.error });

export default connect(mapStateToProps)(SignIn);
