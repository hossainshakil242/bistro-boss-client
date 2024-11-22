import React from "react";

const FoodCard = ({item}) => {
    const { image, price, name, recipe } = item;
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
          <button className="btn btn-outline hover:text-black  bg-slate-200 hover:bg-orange-400 border-orange-300 border-0 border-b-4 mt-5">
          Add to Cart
              </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
