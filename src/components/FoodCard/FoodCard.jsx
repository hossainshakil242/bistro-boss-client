
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <p className="absolute right-0 mr-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 hover:bg-orange-400 hover:border-orange-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;