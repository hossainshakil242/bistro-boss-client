import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../../../components/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = [
    "popular",
    "salad",
    "pizza",
    "soup",
    "dsessert",
    "drinks",
    "offered",
  ];
  const { category } = useParams();
  const categoryIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(categoryIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const popular = menu.filter((item) => item.category === "popular");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  console.log(tabIndex,categoryIndex);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover title={"Order Food"} img={orderCoverImg}></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Popular</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={popular}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
