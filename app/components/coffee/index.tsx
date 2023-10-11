


import React, { useState } from 'react';
import data from '../coffee/coffee.json';

interface CoffeeItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const CoffeeList = () => {
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeItem | null>(null);

  const openPopup = (coffee: CoffeeItem) => {
    setSelectedCoffee(coffee);
  };

  const closePopup = () => {
    setSelectedCoffee(null);
  };

  return (
    <div>
      <h1 className='text-white text-6xl text-center mt-12 ' >
        COFFEE<span className='text-yellow-700'> MENU</span>
      </h1>
      <ul className='grid grid-cols-3 mt-32'>
        {data.map((coffee: CoffeeItem) => (
          <li className='mb-16' key={coffee.id}>
            <div onClick={() => openPopup(coffee)} className='cursor-pointer'>
              <img className=' rounded-2xl hover:transform hover:scale-110 transition duration-400ms' src={coffee.image} alt={coffee.name} width="450" />
              <h2 className='text-3xl ml-20 mt-10 text-white'>{coffee.name}</h2>
            </div>
            <p className='text-xl ml-20 text-yellow-700'> ${coffee.price}</p>
          </li>
        ))}
      </ul>
      {selectedCoffee && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20'>
          <div className='bg-yellow-900 w-2/3 h-4/6 p-4 rounded-lg'>
            <button className='absolute top-42 right-96 m-4 text-white' onClick={closePopup}>
              Close
            </button>
            <div className='grid grid-cols-2 font-[Nunito]'>
              <div>
                <img className='mt-32 ml-10 rounded-xl' src={selectedCoffee.image} alt={selectedCoffee.name} width="500"  />
                <h2 className='text-6xl ml-16 text-white font-[Nunito]'>{selectedCoffee.name}</h2>
              </div>
              <div>
                <p className='text-xl text-white mt-32 ml-20 w-4/6'>{selectedCoffee.description}</p>
                <button className='bg-white text-black rounded-xl ml-32 p-4 mt-10'>ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeList;
