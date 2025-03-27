import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'blue',
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '22rem',
    width: '30rem',
    padding: '1.5rem',
    backgroundColor: 'white',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '1rem',
  };

  const linkStyle = {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#333',
  };

  const handleLogin = () => {
    navigate('/main');
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ marginBottom: '1rem', color: '#333' }}>Welcome to Taskify</h1>
        <h2 style={{ marginBottom: '1rem', color: '#007BFF' }}>Login</h2>
        <input
          style={inputStyle}
          placeholder="Enter Email"
          type="email"
          required
        />
        <input
          style={inputStyle}
          placeholder="Enter Password"
          type="password"
          required
        />
        <button onClick={handleLogin} type="submit" style={buttonStyle}>
          Login
        </button>
        <p style={linkStyle}>
          Don't have an account?{' '}
          <a href="/" style={{ color: '#007BFF', textDecoration: 'none' }}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
