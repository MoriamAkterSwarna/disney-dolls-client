import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "../MyToysTable/MyToysTable";
import { useLoaderData } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addToy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);
      });
  });
  return (
    <div>
      <h2 className="text-3xl my-4 text-center font-bold">My Toys: {myToys.length}</h2>

      <div className=" lg:mx-40">
      <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Picture</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>Sub Category</th>
        <th>Update</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
      
    {myToys.map((myToys) => (
          <MyToysTable key={myToys._id} myToys={myToys}></MyToysTable>
        ))}
      
    </tbody>
  </table>
</div>
        
      </div>
    </div>
  );
};

export default MyToys;
