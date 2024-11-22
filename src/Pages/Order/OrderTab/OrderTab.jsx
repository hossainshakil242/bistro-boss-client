import React, { useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const [currentItems, setCurrentItems] = useState(0);
  const pageNumber = 6;
  //ToDo Pagination
  const data = items.slice(currentItems * pageNumber, pageNumber);

  console.log("main:", items.length);
  console.log(data);
  const makeMoreDate = () => {};

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid md:grid-cols-3 gap-3">
          {items.map((item) => (
            <FoodCard item={item} key={item._id}></FoodCard>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;
