import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex px-14 items-center justify-between py-3 font-bold bg-amber-800 text-white'>
            <p className='text-2xl'>Coffee-Store</p>
            <ul className='flex'>
                <Link to='/'> <li className='pr-7'>Home</li></Link>
                <Link to='/addCoffee'><li className='pr-7'>Add Coffee</li></Link>
            </ul>
        </div>
    );
};

export default Header;