import React, {useState} from 'react';
import {connect} from 'react-redux';

import {authenticate} from '../../authentication/auth-slice.js';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <p>sign up</p>
      <form>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(event) => { setEmail(event.target.value); }}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={(event) => { setPassword(event.target.value); }}
        />
        <button
          type="button"
          onClick={() => { props.authenticate({email, password, newUser: true}); }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, {authenticate})(SignUp);