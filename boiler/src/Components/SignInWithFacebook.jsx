import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const SignInWithFacebook = () => {
  const navigate = useNavigate();
  const  facebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const data = await signInWithPopup(auth, provider);
      console.log(data);
      console.log(data.user.displayName)
      navigate("/", { state: data.user.displayName });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={facebookLogin}>
       <img src="https://th.bing.com/th/id/OIP.jHPjk2JB70A6q788IjaraAHaCu?w=690&h=254&rs=1&pid=ImgDetMain" alt="" className="h-24 m-0 p-0 cursor-pointer w-full" />
    </div>
  );
};

export default SignInWithFacebook;

