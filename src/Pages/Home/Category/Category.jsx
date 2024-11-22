import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import silder1 from "../../../assets/home/slide1.jpg";
import silder2 from "../../../assets/home/slide2.jpg";
import silder3 from "../../../assets/home/slide3.jpg";
import silder4 from "../../../assets/home/slide4.jpg";
import silder5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
    <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"Order Online"}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={silder1} alt="" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder2} alt="" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder3} alt="" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder4} alt="" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder5} alt="" />
          <h3 className="text-4xl text-white uppercase text-center -mt-16">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
