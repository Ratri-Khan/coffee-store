import React, { useEffect, useState } from 'react';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

const Home = () => {
    const [coffees,setCoffees] = useState([]);
   
    useEffect(() =>{
        fetch('http://localhost:3000/coffee')
        .then(res => res.json())
        .then(data =>setCoffees(data))
    },[])

    return (
        <div className='w-full bg-black grid grid-cols-3'>
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