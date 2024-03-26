import { useEffect, useState } from "react";
import { getDataFromLocal } from "../Utils/Localstorage";
import Bookdata from "../Bookdata/Bookdata";


const Listbook = () => {
    const [booklist,setBooklist]=useState([])
    useEffect(()=>{
        const bookData=getDataFromLocal();
        setBooklist(bookData)
        
        
    },[])
    console.log(booklist)
    return (
        <div className="mt-10 p-4">
            <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
            {/* add tab */}
            <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist books" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

  
</div>
{/* card */}
<div className="grid grid-cols-1 gap-4 mt-3 ">
{
    booklist.map(data=><Bookdata key={data.bookId} data={data}></Bookdata>)
}
</div>


        </div>
        
    );
};

export default Listbook;