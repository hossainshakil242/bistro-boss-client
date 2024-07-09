import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, [])
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");
    const popular = menu.filter(item => item.category === "popular");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");

    return [menu, salad, drinks, popular, dessert, pizza, soup, offered];
}

export default useMenu;