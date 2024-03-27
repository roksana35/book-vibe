import { useState ,useEffect } from "react";
import { getDataFromLocal } from "../Utils/Localstorage";
import Bookdata from "../Bookdata/Bookdata";


const Read = () => {
    const [booklist,setBooklist]=useState([]);
    useEffect(()=>{
        const bookData=getDataFromLocal();
        setBooklist(bookData)
        
        
    },[])
    return (
        
            
            <div className="grid grid-cols-1 gap-4 mt-3 ">
{
    booklist.map(data=><Bookdata key={data.bookId} data={data}></Bookdata>)
}
</div>

    );
};

export default Read;