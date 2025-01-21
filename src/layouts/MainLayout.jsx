import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/navbar/NavBar";

const MainLayout = () => {
    return (
        <div>
            {/* Nav bar */}
            <NavBar></NavBar>
            {/* Dynamic section */}

            <div className="min-h-[calc(100vh-338px)] container m-auto">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
