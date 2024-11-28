import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const { image, price, name, recipe } = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart=(food)=>{
      if(user && user.email){
        //Todo send cart item to the database
      }
      else{
        Swal.fire({
          title: "You are not Log In",
          text: "Please Login add to cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {
            //send to the login page.
            navigate('/login', {state:{from:location}});
          }
        });
      }
    }

  return (
    <div className="card glass w-96 mx-auto">
      <figure>
        <img
          src={image}
          alt="car!"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-2 px-4 rounded-sm mt-0">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mx-auto">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline hover:text-black  bg-slate-200 hover:bg-orange-400 border-orange-300 border-0 border-b-4 mt-5">
          Add to Cart
              </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
