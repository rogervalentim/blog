import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1 className="flex justify-center text-black font-bold text-xl">
        Login
      </h1>
      <div className="flex justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {error && <p className="error">{error}</p>}

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email anddress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={logIn}
            type="button"
          >
            Log In
          </button>
          <Link to="/create-account">
            Don't have an account? Create one here!
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
