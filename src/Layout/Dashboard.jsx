import { FaAd, FaBook, FaEnvelope, FaList, FaMagic, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  //ToDo: get is admin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-600">
        <ul className="menu">
          {isAdmin ? (
            <>
            {/* This is Admin Section */}
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaShoppingCart className="text-lg"></FaShoppingCart>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils className="text-md"></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList className="text-lg"></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook className="text-lg"></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers className="text-lg"></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
            {/* There are user Section */}
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
            </>
          )}

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
          <li>
            <NavLink to={"/menu"}>
              <FaEnvelope className="text-lg"></FaEnvelope>
              Contact
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
