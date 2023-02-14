import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className=" w-full flex flex-col">
      <h1>Log in</h1>
      {error && <p className="text-[">{error}</p>}
      <input
        className="form-input px-4 py-3 rounded-full w-[200px]"
        placeholder="Your email anddress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form-input px-4 py-3 rounded-full w-[200px]"
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="form-input px-4 py-3 rounded-full w-[200px]"
        type="password"
        placeholder="Re-enter Your Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={createAccount}>Create Account</button>
      <Link to="/login">Already have an account? Log in here</Link>
    </div>
  );
};

export default CreateAccountPage;
