import React, { useEffect, useState } from 'react';
import AllToysTable from '../AllToysTable/AllToysTable';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addToy')
        .then(res => res.json())
        .then(data => {console.log(data)
            setAllToys(data)
        })
    }, [])
    return (
        <div>
            <h2 className='text-4xl text-center my-4'>All Toys: {allToys.length}</h2>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Picture</th>
        <th>Description</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>Details</th>
        
      </tr>
    </thead>
    <tbody>
      {
        allToys.map(allToys => <AllToysTable key={allToys._id} allToys={allToys}></AllToysTable>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllToys;