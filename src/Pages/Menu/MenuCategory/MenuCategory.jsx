import { NavLink } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ itmes, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        {itmes.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <NavLink to={`/order/${title}`}>
          <button className="btn btn-outline border-black border-0 border-b-4 mt-5">
            Order Your Favourite Food
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuCategory;
