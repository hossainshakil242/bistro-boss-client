import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";

// self css
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"check it out"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36 ">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-1">
          <p>Aug 20,2019</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            obcaecati dolor illo odit, totam voluptatem nihil debitis animi
            dolorem quod, blanditiis est unde, quo molestias.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
