/*
 * A component used to take a username and password input from the viewer.
 * This subsequently sets our global state, allowing us to visit certain
 * protected routes
 */
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../constants/constants";
import { GlobalContext } from "../../context/globalState";


const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successfulLogin, setSuccessfulLogin] = useState(null);

  const { userLogin } = useContext(GlobalContext);

  useEffect(() => {
    if (successfulLogin) {
      setTimeout(() => {
        navigate(-1);
      }, 3000)
    }
  }, [successfulLogin])

  const attemptLogIn = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'username': username,
        'password_input': password,
      })
    }

    fetch(API_URL + 'authenticate_user', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.authenticated) {
          userLogin(data);
          setUsername('');
          setPassword('');
        }
        setSuccessfulLogin(data.authenticated);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const loginForm = () => {
    return (
      <>
        <div className="flex w-full text-lg justify-center text-gray-700"> Admin Login </div>
        <div className="flex w-full space-x-4">
          <div className="text-gray-700"> Username </div>
          <input
            className="w-full px-2 py-1 text-xs rounded-md"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="flex w-full space-x-4">
          <div className="text-gray-700"> Password </div>
          <input
            className="w-full px-2 py-1 text-xs rounded-md"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-row-reverse w-full">
          <button
            className="flex text-xs px-2 py-1 rounded-md bg-red-200 hover:bg-red-300"
            onClick={attemptLogIn}>
              Submit
          </button>
        </div>
      </>
    )
  }

  return (
    <div className="flex flex-col w-3/5 h-screen-90 justify-center items-center text-black text-sm space-y-6">
      { successfulLogin &&
        <div className="flex w-3/5 bg-green-200 py-2 rounded-md justify-center text-gray-700">
          Successful Login! Redirecting you to your previous page...
        </div>
      }
      <div className="flex flex-col w-3/5 h-2/6 bg-blue-200 justify-center items-center space-y-4 px-12 rounded-md">
        { loginForm() }
      </div>
    </div>
  )
}

export default Login;