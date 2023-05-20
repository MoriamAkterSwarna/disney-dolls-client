import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "../MyToysTable/MyToysTable";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
  useTitle('My Toys')
  const { user } = useContext(AuthContext);
  
  const [myToys, setMyToys] = useState([]);
  const [sortPrice, setSortPrice] =useState('')

  useEffect(() => {
    fetch(`https://disney-dolls-server-snowy.vercel.app/addToy?email=${user?.email}&sortPrice=${sortPrice}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);
      });
  },[sortPrice]);
  return (
    <div>
      <h2 className="text-3xl my-4 text-center font-bold">My Toys: {myToys.length}</h2>


      <div className=" lg:mx-40">
      <div className="mb-4">
          <button className="btn bg-purple-600 rounded-full mr-3" onClick={() =>setSortPrice(1)}> Ascending Sort</button>
          <button className="btn bg-purple-600 rounded-full " onClick={() =>setSortPrice(-1)}> Descending Sort</button>
      </div>
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
      
    {myToys.map((myToy) => (
          <MyToysTable key={myToy._id} myToy={myToy} myToys={myToys} setMyToys={setMyToys}></MyToysTable>
        ))}
      
    </tbody>
  </table>
</div>
        
      </div>
    </div>
  );
};

export default MyToys;
