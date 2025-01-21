import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-3xl font-bold">
                    Adou Coffee
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal gap-5">
                    <NavLink
                        className={({ isActive }) =>
                            `${isActive ? "text-warning font-bold" : ""}`
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `${isActive ? "text-warning font-bold" : ""}`
                        }
                        to="/coffees"
                    >
                        Coffees
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `${isActive ? "text-warning font-bold" : ""}`
                        }
                        to="/dashboard"
                    >
                        Dashboard
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
