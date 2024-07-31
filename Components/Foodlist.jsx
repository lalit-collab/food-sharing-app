// import React, { useEffect, useState } from 'react'
// import FoodItem from './FoodItem'
// import axios from 'axios';


// const Foodlist = () => {

//   const [menu,setMenu] = useState(null);
//   const [food,setFood] = useState("");

//   const handleChange = (event) => {
//     setMenu(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setMenu(event.target.value);
//     console.log(menu);
//   }

//   const fetchFood = async () => {
//     const response = await axios.get("/api");

//     console.log(response.data.food);
//   }

//   useEffect(() => {
//     fetchFood();
//   },[])

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'  action="">
//         <input type="text" value={menu} onChange={handleChange}  placeholder='Enter Your City' className='pl-4 outline-none'/>
//         <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Find city</button>
//       </form>

//       <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
//         {/* {food.filter((item)=> menu===""?true:item.city===menu ).map((item)=>{
//             return <FoodItem id={item._id} name={item.name} description={item.description} city={item.city} street={item.street}/>
//         })} */}
//       </div>

//     </div>
//   )
// }

// export default Foodlist




import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import axios from 'axios';

const Foodlist = () => {
  const [menu, setMenu] = useState("");
  const [food, setFood] = useState([]);

  const handleChange = (event) => {
    setMenu(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchFoodByCity();
  }

  const fetchFood = async () => {
    const response = await axios.get("/api");
    setFood(response.data.food);
  }

  const fetchFoodByCity = async () => {
    const response = await axios.get(`/api?city=${menu}`);
    setFood(response.data.food);
  }

  useEffect(() => {
    fetchFood();
  }, [])

  return (
    <div className='foodList'>
      <form onSubmit={handleSubmit} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black rounded-md'>
        <input
          type="text"
          value={menu}
          onChange={handleChange}
          placeholder='Enter Your City'
          className='pl-4 outline-none'
        />
        <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:blue text-white bg-customBlue'>
          Find city
        </button>
      </form>

      <h1 className='text-center mt-20 mb-20'>Free Servings Listed</h1>

      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {food.filter(item => menu === "" ? true : item.city === menu).map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            city={item.city}
            street={item.street}
          />
        ))}
      </div>
    </div>
  );
}

export default Foodlist;
