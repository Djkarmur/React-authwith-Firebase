import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const data = await signInWithPopup(auth, provider);
      console.log(data);
      console.log(data.user.displayName)
      navigate("/", { state: data.user.displayName });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={googleLogin}>
       <img src="https://raw.githubusercontent.com/dmjones/flutter_auth_buttons/master/screenshots/google-dark.png" alt="" className="h-16 cursor-pointer w-full" />
    </div>
  );
};

export default SignInWithGoogle;
