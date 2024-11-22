import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white">
      <div className="bg-slate-500 bg-opacity-40 pt-8 py-20">
        <section>
          <SectionTitle
            subHeading={"Check It Out"}
            heading={"Featured Item"}
          ></SectionTitle>

          <div className="md:flex mx-auto text-center justify-center items-center md:py-24 md:px-40">
            <div>
              <img src={feturedImg} alt="" />
            </div>
            <div className="md:ml-10 md:text-xl">
              <p>Aug 20,2020</p>
              <p className="uppercase">where can i get some</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                exercitationem sit earum tempora eos soluta facere unde nemo,
                cum sunt.
              </p>
              <button className="btn btn-outline border-black border-0 border-b-4 mt-5 text-white">
                Order Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Featured;
