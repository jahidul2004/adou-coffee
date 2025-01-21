import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import CoffeeCards from "../components/CoffeeCards/CoffeeCards";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("../../public/categories.json"),
                children: [
                    {
                        path: "/category/:category",
                        loader: () => fetch("../../public/coffees.json"),
                        element: <CoffeeCards></CoffeeCards>,
                    },
                ],
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/coffees",
                element: <Coffees></Coffees>,
                loader: () => fetch('../../public/coffees.json'),
            },
            {
                path: "/coffees/:id",
                element: <CoffeeDetails></CoffeeDetails>,
                loader: () => fetch('../../public/coffees.json'),
            },
        ],
    },
]);

export default routes;
