import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div className="h-16 p-1 lg:p-2">
            <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-64px)] p-1 lg:p-2">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;