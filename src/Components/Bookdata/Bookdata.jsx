import { SlLocationPin } from "react-icons/sl";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Bookdata = ({data}) => {
    const {bookId,bookName,author,tags,publisher,totalPages,category,rating,image,yearOfPublishing}=data;
    
    return (
        <div className="card p-2 lg:card-side bg-base-100 shadow-xl space-y-3"> 
  <figure><img src={image} className="lg:w-[400px] lg:h-[300px] ml-2 rounded-lg" alt="Album"/></figure>
  <div className="card-body space-y-3">
    <h2 className="card-title text-black font-bold">{bookName}</h2>
    <p>By:{author}</p>
    <div className="flex gap-2 lg:gap-5">
        <span className="text-black font-bold">Tags</span>
        <span className="text-green-500 font-bold">#{tags[0]}</span>
        <span className="text-green-500 font-bold">#{tags[1]}</span>
        <span className="flex items-center gap-2"> <SlLocationPin />  Year of Publishing:  {yearOfPublishing}</span>
    </div>
    <div>
        <span>Publisher:{publisher}</span>
        <span>Pages:{totalPages}</span>
    </div>
    <hr />
    <div className="card-actions flex gap-4">
        <span className=" text-sky-600 bg-sky-100 p-2 rounded-xl ">Category: {category}</span>
        <span className=" text-orange-400 bg-orange-100 p-2 rounded-xl ">Rating: {rating}</span>
      <Link to={`/card/${bookId}`}> <button  className="rounded-2xl bg-green-600 p-2 text-white font-semibold ">View Details</button> </Link>
    </div>
  </div>
</div>
    );
};
Bookdata.propTypes={
      data:PropTypes.object.isRequired
}
export default Bookdata;