import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
    return (
        <div className="border rounded-lg p-4">
            <Link to={`/coffees/${coffee.id}`}>
                <img
                    className="h-[200px] w-full rounded-lg"
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
                </div>
            </Link>
        </div>
    );
};

export default Card;
