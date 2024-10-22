
import './App.css'
import { useState } from "react";
import Cooking from './Cooking/Cooking'
import Recipies from './Recipies/Recipies'

function App() {
    
  const [prepareItem, setPrepareItem] = useState([]);
  const [cookingItem, setCookingItem] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);
 
  const cookBtnHandeller =(recipe)=>{
    const isDuplicate = prepareItem.find(preItem=> preItem.recipe_id === recipe.recipe_id)
    if(isDuplicate){
      alert("This Item Already Added") 
    }
    else{
      setPrepareItem([...prepareItem, recipe])
    }
  };

 const preparingBtnHandeller =(id)=>{
   const remingItem = prepareItem.filter(item=> item.recipe_id !== id);
   setPrepareItem(remingItem);
   const newCookingItem = prepareItem.find(cookItem=> cookItem.recipe_id === id)
   setCookingItem([...cookingItem, newCookingItem]);
 }


const calculate =(time1, calorie1)=>{
  setTime(time + time1);
  setCalories(calories + calorie1)
}


  return (
    <>
      <main className="container mx-auto ">
        <div className="p-6 mb-12">
          <h1 className="text-4xl font-bold text-center mb-6">Our Recipes</h1>
          <p className="text-center text-gray-500">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>

        </div>
        <div className="flex gap-6">
          <Recipies 
            cookBtnHandeller={cookBtnHandeller}
          ></Recipies>
          <Cooking 
            prepareItem={prepareItem}
            preparingBtnHandeller={preparingBtnHandeller}
            cookingItem={cookingItem}
            calculate={calculate}
            calcData = {{time:time, calories:calories}}
          ></Cooking>
        </div>
       
      </main>
    </>
  )
}

export default App
