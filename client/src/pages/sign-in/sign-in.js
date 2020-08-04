import React, {useState} from 'react';
import {connect} from 'react-redux';
import Error from '../../error.js';

import {signInUser} from '../../api/user-api.js';
import './sign-in.css';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="sign-in-container">
      <h1 id="title">Sign In</h1>
      <form id="sign-in-form">
        <input
          type="text"
          name="email"
          placeholder="email"
          autoComplete="off"
          onChange={(event) => { setEmail(event.target.value); }}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={(event) => { setPassword(event.target.value); }}
        />
        <button
          id="o-btn"
          type="button"
        >
          Create Account
        </button>
        <button
          id="submit-btn"
          type="button"
          onClick={ async () => {
            signInUser(email, password);
          }}
        >
          Sign In
        </button>
        {props.error ? <Error id="error" message={props.error}/> : null}
      </form>
    </div>
  );
};

const mapStateToProps = state => ({error: state.auth.error});

export default connect(mapStateToProps)(SignIn);