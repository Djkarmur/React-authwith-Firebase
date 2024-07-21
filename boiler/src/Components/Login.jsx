import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignInWithGoogle from "./SignInWithGoogle";
import SignInWithFacebook from "./SignInWithFacebook";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const data = await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { state: data.user.displayName });
      console.log("Logged in Successfully!!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-4">
      <h2 className="text-2xl font-bold ">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  shadow-lg gap-2 p-4"
      >
        <label htmlFor="email" className="font-semibold text-md pb-1">
          Email:
          <input
            className="w-full p-1 mt-2 border-sky-500 border-2 rounded"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password" className="font-semibold text-md pb-1">
          Password:
          <input
            className="w-full p-1 mt-2 border-[#0295db] border-2 rounded"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-[#0295db] outline-none hover:bg-white mt-4 px-5 py-2 rounded-md  hover:text-[black] border-2 border-[#0295db] transition-all duration-250 ease-in-out font-semibold"
        >
          Login
        </button>

        <h2 className="text-center mt-2">
          Already Registered ? <Link className="underline text-[#0295db]" to="/signup">Sign Up</Link>
        </h2>
      </form>
      <SignInWithGoogle />
      <SignInWithFacebook />
    </div>
  );
};

export default Login;
