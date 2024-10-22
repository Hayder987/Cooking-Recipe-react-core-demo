

const getStoredItem =()=>{
    const storedRecepie = localStorage.getItem("recipie");

    if(storedRecepie){
       return JSON.parse(storedRecepie);
    }
    return []
}

const saveDataLS =(recipie)=>{
    const recipieStr = JSON.stringify(recipie);
    localStorage.setItem("recipie", recipieStr)
}

const storedRecipie =(item)=>{
    const recipie = getStoredItem();
     recipie.push(item);
     saveDataLS(recipie)
}

const removeItemLs =(id)=>{
    const recipie = getStoredItem();
    const remining = recipie.filter(item=> item.recipe_id !== id);
    saveDataLS(remining);
}

export{storedRecipie, getStoredItem, removeItemLs}