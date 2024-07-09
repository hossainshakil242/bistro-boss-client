import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    const isHeaderFooter = location.pathname.includes('login');
    console.log(isHeaderFooter)
    
    return (
        <div>
            {isHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {isHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;