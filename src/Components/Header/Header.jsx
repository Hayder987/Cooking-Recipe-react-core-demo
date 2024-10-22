import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className="container mx-auto flex justify-between items-center p-4 mb-12">
            <h1 className="text-2xl md:text-3xl font-bold">Recipe Calories</h1>
            <div className="hidden md:flex">
                <ul className="flex gap-6 ">
                    <li className="">Home</li>
                    <li className="">Recipes</li>
                    <li className="">About</li>
                    <li className="">Search</li>
                </ul>
            </div>
            <div className=" flex gap-3 justify-center items-center">
                <div className="relative">
                    <input type="text" name="" id="" placeholder="Search"
                     className="border-2 p-2 rounded-full" />
                    <p className="absolute top-3 right-4">
                      <span className="text-2xl"><IoSearchOutline /></span>
                    </p>
                </div>
                <div className="w-10 h-10 rounded-full p-2 text-xl bg-green-100 flex justify-center items-center">
                  <IoPersonOutline />
                </div>
            </div>
        </div>
    );
};

export default Header;