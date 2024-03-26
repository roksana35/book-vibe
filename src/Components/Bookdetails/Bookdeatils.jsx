import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveToLocalData } from "../Utils/Localstorage";



const Bookdeatils = () => {
    
    const books=useLoaderData();
    const {bookId}=useParams();
    const book = books.find(book => book.bookId ===bookId)
    console.log(book)
    const handleReadBook =()=>{
        saveToLocalData(book)
    }

    return (
        <div className="mt-5">
            <h2 className="text-2xl font-bold text-black text-center">Book</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={book.image} className="lg:w-[500px] h-[450px] rounded-lg"  alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{book.bookName}</h2>
    <p>{book.author}</p>
    <hr />
    <p>{book.category}</p>
    <hr />
    <p><span className="font-bold text-black">Review :</span>  {book.review} </p>
    <div className="flex gap-10 ">
        <span className="text-black font-semibold">Tags</span>
        <span className="text-green-500 font-semibold">#{book.tags[0]}</span>
        <span className="text-green-500 font-semibold">#{book.tags[1]}</span>
    </div>
    <hr />
    <div className="overflow-x-auto">
        <table className="table">
            <tbody>
                <tr>
                    <th>Number of Pages:</th>
                    <td>{book.totalPages}</td>
                </tr>
                <tr>
                    <th>Publisher:</th>
                    <td>{book.publisher}</td>
                </tr>
                <tr>
                    <th>Year of Publishing:</th>
                    <td>{book.yearOfPublishing}</td>
                </tr>
                <tr>
                    <th>Rating:</th>
                    <td>{book.rating}</td>
                </tr>
            </tbody>
        </table>
 
    
</div>
    
    <div className="card-actions justify-start">
      <button onClick={handleReadBook} className="btn bg-green-500 text-white font-bold">Read</button>
      <button className="btn bg-sky-500 text-white font-bold">Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bookdeatils;