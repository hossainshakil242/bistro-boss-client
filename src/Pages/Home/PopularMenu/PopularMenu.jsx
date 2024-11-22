import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-4">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Popular Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-2">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-black border-0 border-b-4 mt-5 text-center">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
