import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const AddToy = () => { 
  const {user} = useContext(AuthContext)
  // console.log({user})
    const handleAddAToy = event =>{
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const toyName = form.toyName.value;
        const price = form.price.value; 
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const email = user?.email;
        const name = user?.displayName;
        console.log(email, name)

        const toyAllInfo = {
            picture,
            toyName,
            price,
            rating,
            quantity, 
            description,
            email,
            name
        }

        console.log(toyAllInfo)
        fetch('http://localhost:5000/addToy' ,{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(toyAllInfo)

        })
        .then(res => res.json())
        .then(data => {console.log(data)})
    }
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center mb-4'>Add A Toy </h1>
            <form onSubmit={handleAddAToy} className="card-body grid grid-cols-2 lg:mx-20 rounded-lg border-2 p-4 " >
                
                <div className="form-control lg:w-2/3 ">
                  <label className="label">
                    <span className="label-text">Picture</span>
                  </label>
                  <input
                    type="text"
                    name="picture"
                    placeholder="Picture URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                
                <div className="form-control lg:w-2/3">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="toyName"
                    placeholder="Toy Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control lg:w-2/3">
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
                <div className="form-control lg:w-2/3">
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
                <div className="form-control lg:w-2/3">
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
                <div className="form-control lg:w-2/3">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea name="description" className='border' id="" cols="10" rows="5"></textarea>

                </div>
                
                <div className="form-control mt-3">

                
                  <button className="rounded-md btn-block lg:mx-64 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white">
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

export default AddToy;