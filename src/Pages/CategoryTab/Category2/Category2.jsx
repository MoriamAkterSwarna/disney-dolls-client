import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const Category2 = ({subCate}) => {
  const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const {  picture, price, rating, toyName,_id} = subCate;
    const handleDetails = () =>{
   
        if(!user){
          toast("You need to log in first")
          setTimeout(() => {
            navigate('/login')
          }, 3000);
         }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl border-2 p-4">
  <figure><img className='border-2 rounded-lg' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {toyName}
      
    </h2>
    <div className="badge p-3 ">Price: ${price}</div>
      <div className="badge p-3 badge-outline bg-yellow-500 border-yellow-500">Rating: {rating}</div>
    
    <div className="card-actions justify-end">
    <Link to={`/singleToy/${_id}`}>
      <button onClick={handleDetails} className='btn bg-blue-500'>View Details</button>
      </Link>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>
    );
};

export default Category2;