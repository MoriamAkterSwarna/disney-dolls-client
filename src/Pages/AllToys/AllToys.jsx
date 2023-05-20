import React, { useEffect, useState } from "react";
import AllToysTable from "../AllToysTable/AllToysTable";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('All Toys')
  const [allToys, setAllToys] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://disney-dolls-server-snowy.vercel.app/addToy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);
  const handleSearch = () => {
    fetch(`https://disney-dolls-server-snowy.vercel.app/searchToy/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  };
  return (
    <div>
      <h2 className="text-4xl text-center my-4">All Toys: {allToys.length}</h2>

      <div className=" p-2 text-center">
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          className="p-2 border-2 rounded-lg"
        />{" "}
        <button
          className="bg-violet-500 px-4 py-2 rounded-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full mx-4">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Picture</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Sub-Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToys) => (
              <AllToysTable key={allToys._id} allToys={allToys}></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
