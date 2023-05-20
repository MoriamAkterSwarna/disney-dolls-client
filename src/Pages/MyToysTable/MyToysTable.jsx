import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyToysTable = ({myToys}) => {
    const {description ,name, email, picture, quantity,price, rating, toyName, _id,category} = myToys;
    // console.log( selectedOptions)
   const [toys, setToys] = useState([myToys]);
  //  console.log(myToys)
    
  

    const handleDelete = (id) =>{

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
          console.log("delete")
          fetch(`http://localhost:5000/addToy/${_id}`,
          {
            method: 'DELETE',
            
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0)
            {
              Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                const remainingToys = toys.filter(toy => toy._id !== _id)
                setToys(remainingToys)
            }
          })
        }
      })
    }
    return (
        
            <tr>
        <th>{toyName}</th>
        <td>{name}</td>
        <td><img className='w-28 rounded-full' src={picture} alt="" /></td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>{category}</td>

        <td><button><Link to={`/updateToy/${_id}`}><FaEdit className='h-7 w-7 text-blue-600'></FaEdit></Link></button></td>
        <td><button onClick={()=>handleDelete(_id)}><AiFillDelete className='h-7 w-7 text-red-600'></AiFillDelete></button></td>
      </tr>
       
    );
};

export default MyToysTable;