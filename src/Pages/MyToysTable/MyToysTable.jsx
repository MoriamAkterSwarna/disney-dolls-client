import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyToysTable = ({myToys,myToy,setMyToys}) => {
    const {description ,name, email, picture, quantity,price, rating, toyName, _id,category} = myToy;
    
  //  const [toys, setToys] = useState([myToys]);
  
    const handleDelete = (id) =>{
    console.log(id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e03836',
        cancelButtonColor: '#d73',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("delete")
          fetch(`https://disney-dolls-server-snowy.vercel.app/addToy/${id}`,
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
                  'Your Toy has been deleted.',
                  'success'
                )
                const remainingToys = myToys.filter(toy => toy._id !== id)
                setMyToys(remainingToys)
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