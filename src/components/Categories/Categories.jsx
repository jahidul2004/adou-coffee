import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted my-4">
            {categories.map((category) => (
                <NavLink
                    key={category.id}
                    role="tab"
                    to={`/category/${category.category}`}
                    className={({isActive})=> `tab ${isActive ? 'tab-active text-warning' : ''}`}
                >
                    {category.category}
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;
