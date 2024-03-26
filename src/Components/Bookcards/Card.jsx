import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({card}) => {
    console.log(card)
    const {author,bookId,bookName,category,image,publisher,rating,review,tags}=card;
    return (
        
        
            <Link to={`/card/${bookId}`} className=" lg:max-w-7xl space-y-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
        <div className="flex gap-20 mb-3">
        <span className="block   tracking-widest  dark:text-violet-600 text-xs text-green-500 font-semibold ">{tags[0]}</span>
        <span className="block   tracking-widest   text-xs text-green-500 font-semibold">{tags[1]}</span>

        </div>
		
		<h2 className="text-xl font-bold tracking-wide">{bookName}</h2>
	</div>
	<p className="dark:text-gray-800">By: {author}</p>
    <hr />
    <div className="flex justify-between">
        <p>{category}</p>
        <p className="flex gap-3">{rating} <FaRegStar  className="text-xl "/></p>
    </div>
</Link>
        
    );
};

export default Card;

