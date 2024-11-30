import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=> {
            console.log(result);
            navigate('/');
        })
        .catch(error=> console.log(error))
    }
  return (
    <div>
      <div className="p-8">
        <button onClick={handleGoogleSignIn} className="btn btn-accent w-full">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
