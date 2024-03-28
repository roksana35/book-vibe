import { useEffect, useState } from "react";
import { getDataLocalStorage } from "../Utils/Localstorage";
import Wishlistcard from "../Wishlistcard/Wishlistcard";


const Wishlist = () => {
    const [wishlist,setWishlist]=useState([]);
    useEffect(()=>{
     const wishlistdata =getDataLocalStorage();
     setWishlist(wishlistdata)
     },[])
    console.log(wishlist)
    return (
            <div className="grid grid-cols-1 gap-4 mt-3">
                {
                    wishlist.map(wish =><Wishlistcard key={wish.bookId} wish={wish}></Wishlistcard> )
                }
            </div>
        
    );
};

export default Wishlist;