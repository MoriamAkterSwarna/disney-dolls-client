import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const AllToysTable = ({ allToys }) => {
  const handleToast = () =>{
    toast("You need to log in first")
  }
  // console.log({allToys})
  const {
    description,
    name,
    email,
    picture,
    quantity,
    price,
    rating,
    toyName,
    _id,
  } = allToys;
  return (
    <tr>
      <th>{toyName}</th>
      <td>{name}</td>
      <td>
        <img src={picture} className="w-28 rounded-lg border p-2" alt="" />
      </td>
      {/* <td>{description}</td> */}
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>
        <button onClick={handleToast}>
          <Link to={`/singleToy/${_id}`}>
            <FaArrowAltCircleRight className="h-6 w-6 text-fuchsia-600"></FaArrowAltCircleRight>
          </Link>
        </button>
        <ToastContainer></ToastContainer>
      </td>
    </tr>
  );
};

export default AllToysTable;
