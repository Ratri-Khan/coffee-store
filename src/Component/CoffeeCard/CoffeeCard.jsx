import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,coffees,setCoffees}) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className='border-2 p-5 m-5 text-center'>
            <img src={photo} alt="" />
            <div>
                <p>Name : {name}</p>
                <p>Category : {category}</p>
                <p>Quantity : {quantity}</p>
            </div>
            <div>
                <button className="btn btn-neutral">Details</button>
                <Link to={`updateCoffee/${_id}`}><button className="btn btn-primary">Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-secondary">X</button>
            </div>
        </div>
    );
};

export default CoffeeCard;