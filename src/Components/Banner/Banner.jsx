

const Banner = () => {
    return (
        <div style={{
            background: 'linear-gradient(to right, rgba(13, 13, 14, 0.308), rgba(15, 15, 20, 0.521)), url("https://i.ibb.co.com/RzfKSKr/Mastershafe.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat"

        }} 
          className="px-2 py-12 md:px-20 md:py-36 container mx-auto rounded-xl mb-12">

         <h1 className="text-3xl text-white md:text-6xl font-bold text-center mb-12">Discover an exceptional cooking
             class tailored for you!</h1>
         <div className="w-full md:w-7/12 mx-auto mb-12">
           <p className="text-center text-gray-200  ">Learn and Master Basic Programming, Data Structures,
               Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class
               Programmer.
           </p>
         </div>
         <div className="flex justify-center items-center">
           <div className="flex gap-8">
              <button className="py-3 px-6 rounded-full text-xl font-semibold bg-btnBg">Explore Now</button>
              <button className="py-3 px-6 border-2 rounded-full text-xl font-semibold text-white">Our Feedback</button>
           </div>
         </div>

        </div>
    );
};

export default Banner;