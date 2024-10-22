import PropTypes from 'prop-types';
import Recipie from "./Recipie/Recipie";
import { useEffect } from "react";
import { useState } from "react";



const Recipies = ({cookBtnHandeller}) => {

    const [allRecipies, setAllRecipies] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch("./recipie.json");
            const data = await res.json();
            setAllRecipies(data);
        }
        fetchData();
   
       },[])


    return (
        <div className="w-2/3">
          <div className=" grid grid-cols-2 gap-6">

           {allRecipies.map((recipieItem) => <Recipie 
              key={recipieItem.recipe_id} 
              recipieItem={recipieItem}
              cookBtnHandeller={cookBtnHandeller} 
           ></Recipie>)}

          </div>
        </div>
    );
};
Recipies.propTypes={
    
    cookBtnHandeller: PropTypes.func.isRequired   
}

export default Recipies;