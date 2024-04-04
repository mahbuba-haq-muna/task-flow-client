
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Main;