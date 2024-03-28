import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero  bg-base-200 lg:h-[500px] rounded-lg ">
  <div className="hero-content flex-col lg:gap-36 lg:flex-row-reverse">
    <img src="https://i.ibb.co/029mbfF/banner.jpg" className=" rounded-lg max-w-56 h-[190px] sm:h-80 w-full   shadow-2xl " />
    <div className="space-y-12">
      <h1 className=" text-4xl lg:text-5xl font-bold mb-5 lg:mb-8 ">Book to freshen 
      up <br /> to your bookshelf</h1>
      <Link to="/listedbooks" className="mt-6">
      <button className="btn bg-green-500 text-white font-bold">View The List</button>
         </Link>
      
      
    </div>
  </div>
</div>
    );
};

export default Hero;