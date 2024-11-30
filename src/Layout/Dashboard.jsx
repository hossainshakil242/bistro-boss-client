import { FaAd, FaList, FaMagic, FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-600">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaShoppingCart className="text-lg"></FaShoppingCart>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar className="text-md"></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart className="text-lg"></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaAd className="text-lg"></FaAd>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaList className="text-lg"></FaList>
              My Bookings
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to={"/"}>
              <FaShoppingCart className="text-lg"></FaShoppingCart>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaMagic className="text-lg"></FaMagic>
              Menu
            </NavLink>
          </li>

        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 bg-purple-200">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
