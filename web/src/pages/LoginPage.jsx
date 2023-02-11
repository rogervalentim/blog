import { useState } from "react";
import { Link } from 'react-router-dom';
import { getAuth, signInwithEmailAndPassword } from 'firebase';

const LoginPage = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const Login = () => {
    
  }

  return (
    <>
      <h1>Log in</h1>
      {error && <p className="error">{error}</p>}
      <input 
      placeholder="Your email anddress"
      value={email}
      onChange={e => setEmail(e.target.value)}
       />
      <input 
      type="password"
      placeholder="Your Password"
      value={password}
      onChange={e => setPassword(e.target.value)}
       />
      <button>Log In</button>
      <Link to="/create-account">Don't have an account? Create one here!</Link>
    </>
  );
};

export default LoginPage;
