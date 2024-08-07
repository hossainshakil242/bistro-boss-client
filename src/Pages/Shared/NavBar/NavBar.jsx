import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error);
      })
  }
  const navItems = <>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/menu'>Menu</Link>
    </li>
    <li>
      <Link to='/order/salad'>Order Food</Link>
    </li>
    {
      user ? <><li><Link onClick={handleLogOut} className="hover:outline-red-400">Logout</Link></li></> :
        <>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </>
    }
    <li>
      <Link to='/secrate'>Secrate</Link>
    </li>
  </>


  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-10 opacity-70 bg-neutral text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}

              <li>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">LogIn</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
