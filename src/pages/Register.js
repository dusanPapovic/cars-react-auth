import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { useHistory} from 'react-router-dom';

function Register() {
    const history = useHistory();
  const [credentials, setCredentials] = useState({
    name:'',
    email: '',
    password: '',
    password_confirmation:''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log("pozzz",credentials);
  AuthService.register(credentials).then(()=>history.push('/login'));
  }

  return (
    <div>
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 200,
          marginLeft: 15,
        }}
      >
          <input
          required
          type='text'
          value={credentials.name}
          placeholder='Name'
          onChange={({ target }) =>
            setCredentials({ ...credentials, name: target.value })
          }
        />
        <input
          required
          type='text'
          value={credentials.email}
          placeholder='Email'
          onChange={({ target }) =>
            setCredentials({ ...credentials, email: target.value })
          }
        />
        <input
          required
          type='password'
          value={credentials.password}
          placeholder='Password'
          onChange={({ target }) =>
          setCredentials({ ...credentials, password: target.value })
          }
        />
        <input
          required
          type='password'
          value={credentials.password_confirmation}
          placeholder='Confirm password'
          onChange={({ target }) =>
            setCredentials({ ...credentials, password_confirmation: target.value })
          }
        />
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;