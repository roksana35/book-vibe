

const Hero = () => {
    return (
        <div className="hero  bg-base-200 lg:h-[500px] ">
  <div className="hero-content flex-col lg:gap-36 lg:flex-row-reverse">
    <img src="https://i.ibb.co/029mbfF/banner.jpg" className=" rounded-lg max-w-56 h-[190px] lg:w-[700px] lg:h-[400px] shadow-2xl " />
    <div className="space-y-12">
      <h1 className=" text-4xl lg:text-5xl font-bold ">Book to freshen 
      up <br /> to your bookshelf</h1>
      
      <button className="btn bg-green-500 text-white font-bold">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Hero;