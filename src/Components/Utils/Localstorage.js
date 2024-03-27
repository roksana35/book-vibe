
  
export const saveToLocalData =(data)=>{
    const saveData =JSON.parse(localStorage.getItem("read"))|| [];
    const Existed=saveData.find(item => item.bookId ===data.bookId);
    if(!Existed){
        saveData.push(data);
        localStorage.setItem("read",JSON.stringify(saveData))
        alert('Added data to read ')
    }
    else{
        alert('Already data existed')
    }
    
};
export const getDataFromLocal =()=>{
    const getDefaultData= JSON.parse(localStorage.getItem("read"))|| [];
    return  getDefaultData;
};

export const saveLocalStorageData=(data)=>{
    const saveLocalstore = JSON.parse(localStorage.getItem("wishlist")) || [];
    const AlreadyExisted= saveLocalstore.find(i =>i.bookId===data.bookId);
    if(!AlreadyExisted){
        saveLocalstore.push(data);
        localStorage.setItem("wishlist",JSON.stringify(saveLocalstore))
        alert('Add to data wishlist successfuly');
    }
    else{
        alert('Already data Added');
    }
};
export const getDataLocalStorage=()=>{
    const getDefauldata=JSON.parse(localStorage.getItem("wishlist"))|| [];
    return getDefauldata;
}
