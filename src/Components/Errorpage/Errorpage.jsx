import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="max-w-7xl mx-auto lg:ml-[500px] lg:mt-[200px]">
            <h2 className="text-2xl font-bold mb-3 ">404</h2>
            <h2 className="text-2xl font-bold mb-3 ">This Page Are Not Found</h2>
           <Link to="/"> <button className="bg-green-500 p-3 rounded-lg text-white font-semibold">Go Back Home</button></Link>
        </div>
    );
};

export default Errorpage;