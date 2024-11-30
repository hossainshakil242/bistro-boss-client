import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=> {
            console.log(result);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/');
            })
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
