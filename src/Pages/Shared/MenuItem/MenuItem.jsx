const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 150px 150px 150px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;