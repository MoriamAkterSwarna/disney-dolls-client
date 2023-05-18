import React from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const MyToysTable = ({myToys}) => {
    // console.log({myToys});
    const {description ,name, email, picture, quantity,price, rating, toyName, _id} = myToys;

    return (
        
            <tr>
        <th>{toyName}</th>
        <td>{name}</td>
        <td><img className='w-[60px] rounded-full' src={picture} alt="" /></td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>

        <td><button><FaEdit className='h-7 w-7 text-blue-600'></FaEdit></button></td>
        <td><button><AiFillDelete className='h-7 w-7 text-red-600'></AiFillDelete></button></td>
      </tr>
       
    );
};

export default MyToysTable;