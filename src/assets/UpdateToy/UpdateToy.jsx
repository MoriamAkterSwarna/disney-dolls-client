import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateToy = () => {
    const {user} = useContext(AuthContext);
    const handleUpdateAToy = event =>{
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const id = user?._id
        const updatedToy ={
            price, rating, quantity, description
        }
        console.log(updatedToy) 
        fetch(`http://localhost:5000/addToy/${id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }
    return (
        <div>
            <form onSubmit={handleUpdateAToy} className="my-10 card-body grid grid-cols-1 lg:mx-20 rounded-lg border-2 p-4 " >
               <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="rating"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input input-bordered"
                    required
                  />
                  </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea name="description" className='border' id="" cols="10" rows="5"></textarea>

                </div>
                
                <div className="form-control mt-3">

                
                  <button className="rounded-md lg:mx-64 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#5a189a] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <input
                      type="submit"
                      className="relative text-indigo-600 transition duration-300 group-hover:text-white ease"
                      value="Add A Toy"
                    />
                  </button>
                </div>
              </form>
        </div>
    );
};

export default UpdateToy;