import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            {
                coffees.map( coffee => <CoffeeCard key={coffee._id
                } coffee={coffee}></CoffeeCard>)
            }
        </div>
    );
};

export default Home;