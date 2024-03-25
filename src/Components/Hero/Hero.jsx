

const Hero = () => {
    return (
        <div className="hero  bg-base-100 lg:max-w-7xl">
  <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse">
    <img src="https://i.ibb.co/029mbfF/banner.jpg" className="max-w-sm rounded-lg shadow-2xl h-full" />
    <div className="space-y-12">
      <h1 className="text-5xl font-bold ">Book to freshen 
      up <br /> to your bookshelf</h1>
      
      <button className="btn bg-green-500 text-white font-bold">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Hero;