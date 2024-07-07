import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu, salad, drinks, popular, dessert, pizza, soup, offered] = useMenu();

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our menu"}></Cover>
      {/* main cove */}

      <SectionTitle
        subHeading={"Don't miss"}
        heading={"today's offer"}
      ></SectionTitle>

      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title={"our dessert"}
      ></MenuCategory>
      {/* {pizza menu items} */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title={"our pizza"}
      ></MenuCategory>

      <MenuCategory
        items={dessert}
        img={saladImg}
        title={"our salad"}
      ></MenuCategory>

      <MenuCategory
        items={pizza}
        img={soupImg}
        title={"our soup"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
