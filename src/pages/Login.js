import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { useHistory} from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log("pozzz",credentials);
  AuthService.login(credentials).then(()=>{
    window.location.reload();
    history.push('/cars');});
  }

  return (
    <div>
      <h2>Login</h2>
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
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;