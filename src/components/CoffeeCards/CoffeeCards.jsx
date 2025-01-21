import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect } from "react";
import { useState } from "react";

const CoffeeCards = () => {
    const navigate = useNavigate();
    
    const data = useLoaderData();
    const { category } = useParams();

    const [coffee, setCoffee] = useState([]);
    useEffect(() => {
        if (category) {
            const filteredCoffees = [...data].filter(
                (coffee) => coffee.category === category
            );
            setCoffee(filteredCoffees);
        }else{
            setCoffee(data.slice(0, 6));
        }
    }, [category, data]);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 w-full border p-4 my-4 rounded-lg">
                {coffee.map((coffee) => (
                    <Card key={coffee.id} coffee={coffee}></Card>
                ))}
            </div>
            <button
                onClick={() => {
                    navigate("/coffees");
                }}
                className="btn btn-warning"
            >
                View All
            </button>
        </div>
    );
};

export default CoffeeCards;
