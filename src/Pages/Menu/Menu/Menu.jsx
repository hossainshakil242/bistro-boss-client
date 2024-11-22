import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const popular = menu.filter((item) => item.category === "popular");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* Main cove */}
      <MenuCategory
        itmes={offered}
        title={"offered"}
        img={menuImg}
      ></MenuCategory>

      <SectionTitle
        subHeading={"Dont Miss"}
        heading={"today's offer"}
      ></SectionTitle>

      {/* offered menu items */}
      <MenuCategory
        itmes={offered}
        title={"offered"}
        img={menuImg}
      ></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory
        itmes={dessert}
        title={"dsessert"}
        img={dessertImg}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory itmes={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

      {/* salad menu items */}
      <MenuCategory itmes={salad} title={"salad"} img={saladImg}></MenuCategory>

      {/* soup menu items */}
      <MenuCategory itmes={soup} title={"soup"} img={soupImg}></MenuCategory>

      {/* drinks menu items */}
      <MenuCategory
        itmes={drinks}
        title={"drinks"}
        img={menuImg}
      ></MenuCategory>

      {/* popular menu items */}
      <MenuCategory
        itmes={popular}
        title={"popular"}
        img={dessertImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
