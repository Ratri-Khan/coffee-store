import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(loadedCoffees)
    return (
        <div className='w-full grid grid-cols-3'>
            {
                coffees.map(coffee => <CoffeeCard 
                    key={coffee._id} 
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></CoffeeCard>)
            }
        </div>
    );
};

export default Home;