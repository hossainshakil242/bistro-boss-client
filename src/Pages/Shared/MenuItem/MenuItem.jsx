import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius:'0 150px 150px 150px'}} className="w-[120px]" src={image} alt="" />
      <div>
        <h2 className="uppercase">{name}----</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItem;
