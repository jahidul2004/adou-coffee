import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/banner/Banner";
import Categories from "../components/Categories/Categories";
import Heading from "../components/heading/Heading";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading
                title="Browse Coffees by Catagories"
                subtitle="Choose your desire coffee catagory to browse through specific coffees that fit in your taste."
            ></Heading>

            <Categories categories={categories}></Categories>

            {/* Outlet again */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;
