import { useUser} from '../../context/UserContext';
import { useState} from 'react';
import { useLocation, useHistory } from 'react-router-dom'; 

export default function Login() {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);

      const url = location.state.origin ? location.state.origin.pathname : '/';
        history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  }
  return(
        <>
        <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
              <label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                  <input
                    id='password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
              </label>
              <button type="submit">Sign In</button>
              <p>{error}</p>
          </form>
        </>
    );
}