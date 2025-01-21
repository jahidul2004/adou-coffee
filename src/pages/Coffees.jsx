import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();

    const [coffees, setCoffees] = useState(data);

    const handleSort = (sortBy) =>{
        if(sortBy === 'popularity'){
            const sorted = [...data].sort((a, b)=> b.popularity - a.popularity);
            setCoffees(sorted);
        }else{
            const sorted = [...data].sort((a, b)=> b.rating - a.rating);
            setCoffees(sorted);
        }
    }

    return (
        <div>
            <div className="w-full flex justify-between">
                <h1 className="text-4xl font-bold">Sort Coffees by popularity and Rating</h1>
                <div className="flex gap-3">
                    <button onClick={()=>handleSort('popularity')} className="btn btn-warning">Sort By Popularity</button>
                    <button onClick={()=>handleSort('rating')} className="btn btn-success">Sort By Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full border p-4 my-4 rounded-lg">
                {coffees.map((coffee) => (
                    <Card key={coffee.id} coffee={coffee}></Card>
                ))}
            </div>
        </div>
    );
};

export default Coffees;
