

import PropTypes from 'prop-types';

const Cooking = ({prepareItem, preparingBtnHandeller,cookingItem,calculate, calcData}) => {
   const {time, calories} = calcData;

    return (
        <div className="w-full md:w-1/3">
          <div className="p-4 border-b-2 ">
            <h1 className="text-center text-xl font-bold">Want to cook: {prepareItem.length}</h1>  
          </div>
          
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className='bg-gray-200 '>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody >
              {prepareItem.map((preItem, index) =>(
               
               <tr key={index} className='bg-green-100 mb-2 hover'>
                <th>{index+1}</th>
                <td>{preItem.recipe_name}</td>
                <td>{preItem.preparing_time} Minutes</td>
                <td>{preItem.calories} Calories</td>
                <td><button onClick={()=> {preparingBtnHandeller(preItem.recipe_id);
                     calculate(preItem.preparing_time,preItem.calories )} } 
                     className='bg-btnBg py-2 px-3 rounded-full'>Preparing</button></td>
                </tr>
              ))} 
              </tbody>
            </table>
          </div>

          <div className="mt-12 mb-6">
             <div className="overflow-x-auto ">
             <div className="p-4 border-b-2">
             <h1 className="text-center text-xl font-bold">Want to cook: 
                {cookingItem.length}
             </h1> 
             </div>  
               <table className="table">
                 {/* head */}
                 <thead>
                   <tr className='bg-gray-200 '>
                     <th></th>
                     <th>Name</th>
                     <th>Time</th>
                     <th>Calories</th>
                     <th></th>
                   </tr>
                 </thead>
                 <tbody className=''>
                 {cookingItem.map((cook, index) =>(
                  
                  <tr key={index} className='bg-green-100 mb-2 hover'>
                   <th>{index+1}</th>
                   <td>{cook.recipe_name}</td>
                   <td>{cook.preparing_time} Minutes</td>
                   <td>{cook.calories} Calories</td>

                   </tr>
                 ))} 
                 </tbody>
               </table>
             </div>
          </div>

          <div className="">
            
            <div className="overflow-x-auto">
              <table className="table">
                
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td>Total Time= {time}</td>
                    <td>Total Calories= {calories}</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>

          </div>
          
          
        </div>
    );
};

Cooking.propTypes ={
    prepareItem: PropTypes.array.isRequired,
    preparingBtnHandeller:PropTypes.func.isRequired,
    cookingItem:PropTypes.array.isRequired,
    calculate:PropTypes.func,
    calcData: PropTypes.object
}

export default Cooking;