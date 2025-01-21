import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCoffees } from "../../utils";

const CoffeeDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        const selectedCoffee = data.find((coffee) => coffee.id == id);
        setCoffee(selectedCoffee);
    }, [id, data]);

    const handleFavorite = (coffee) => {
        getCoffees(coffee);
    }

    return (
        <div className="border p-4 my-10 rounded-lg">
            <img
                className="h-[500px] w-full rounded-lg"
                src={coffee.image}
                alt=""
            />
            <h1 className="text-3xl font-bold">{coffee.name}</h1>
            <p className="text-lg font-bold">{coffee.category}</p>
            <p>{coffee.description}</p>
            <div>
                <p>Popularity:{coffee.popularity}</p>
                <p>Rating:{coffee.rating}</p>
                <p>Type:{coffee.type}</p>
                <button onClick={() =>handleFavorite(coffee)} className="btn btn-warning">Add Favorite</button>
            </div>
        </div>
    );
};

export default CoffeeDetails;
