import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const AllToysTable = ({allToys}) => {
    // console.log({allToys})
    const {description ,name, email, picture, quantity,price, rating, toyName, _id} =allToys;
    return (
        
      <tr>
      <th>{toyName}</th>
      <td>{name}</td>
      <td><img src={picture} className='w-28 rounded-lg border p-2' alt="" /></td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td><button><Link to={`/singleToy/${_id}`}><FaArrowAltCircleRight className='h-6 w-6 text-fuchsia-600'></FaArrowAltCircleRight></Link></button></td>


    </tr>
    );
};

export default AllToysTable;