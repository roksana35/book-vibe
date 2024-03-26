
  
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
}