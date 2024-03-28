import { toast } from "react-toastify";


  
export const saveToLocalData =(data)=>{
    const saveData =JSON.parse(localStorage.getItem("read"))|| [];
    const Existed=saveData.find(item => item.bookId ===data.bookId);
    if(!Existed){
        saveData.push(data);
        localStorage.setItem("read",JSON.stringify(saveData))
        toast.success('Added data to read book');
    }
    else{
        toast.warning('Already data existed');
    }
    
};
export const getDataFromLocal =()=>{
    const getDefaultData= JSON.parse(localStorage.getItem("read"))|| [];
    

    return  getDefaultData;
    
};

export const saveLocalStorageData=(data)=>{
    const saveLocalstore = JSON.parse(localStorage.getItem("wishlist")) || [];
    const AlreadyExisted= saveLocalstore.find(i =>i.bookId===data.bookId);
    const saveData= JSON.parse(localStorage.getItem('read'))||[];

    const  Existed =saveData.find(item =>item.bookId===data.bookId)
    if(!AlreadyExisted && !Existed){
        saveLocalstore.push(data);
        localStorage.setItem("wishlist",JSON.stringify(saveLocalstore))
        toast.success('Add to data wishlist successfuly');
    }
    else{
        toast.warning('Already data Added to read');
    }
};
export const getDataLocalStorage=()=>{
    const getDefauldata=JSON.parse(localStorage.getItem("wishlist"))|| [];
    return getDefauldata;
}


