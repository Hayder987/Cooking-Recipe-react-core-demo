import PropTypes from 'prop-types';
import { FaClockRotateLeft } from "react-icons/fa6";
import { GiBurningMeteor } from "react-icons/gi";


const Recipie = ({recipieItem, cookBtnHandeller}) => {
    const {recipe_image, recipe_name, short_description, ingredients,
         preparing_time, calories} = recipieItem;

    return (
        <div className='border-2 p-4 rounded-xl'>
          <img src={recipe_image} alt="" 
          className="rounded-lg object-cover w-full h-[250px]" 
          />
          <div className="mt-3 border-b-2 p-4">
            <h1 className="text-2xl font-bold mb-3">{recipe_name}</h1>
            <p className="mb-3 text-gray-500">{short_description}</p>
          </div>
          <div className="p-4 border-b-2 mt-4">
           <h1 className="text-xl font-bold mb-3">Ingredients: {ingredients.length}</h1>
           <ul className="list-disc mb-3">
            {ingredients.map((item, index) =>(
              <li key={index}>{item}</li>
            ))}
           </ul>
          </div>
          <div className="mt-3 flex justify-between">
            <div className="p-4 flex gap-3 justify-center items-center">
              <FaClockRotateLeft />
              <p className="">{preparing_time}</p>
            </div>
            <div className="p-4 flex gap-3">
              <GiBurningMeteor />
              <p className="">{calories}</p>
            </div>
          </div>
          <button onClick={()=> cookBtnHandeller(recipieItem)} className="bg-btnBg py-2 px-4 rounded-full">Want to Cook</button>

        </div>
    );
};

Recipie.propTypes ={
    recipieItem: PropTypes.object.isRequired, 
    cookBtnHandeller:PropTypes.func.isRequired
}

export default Recipie;