import React, {useState} from 'react';
import {connect} from 'react-redux';

import {authenticate} from '../../authentication/auth-slice.js';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <p>sign in</p>
      <form>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(event) => { setEmail(event.target.value); }}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(event) => { setPassword(event.target.value); }}
        />
        <button
          type="button"
          onClick={() => { props.authenticate({email, password, newUser: false}); }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, {authenticate})(SignIn);
