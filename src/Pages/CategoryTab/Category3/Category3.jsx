import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Category3 = ({subCate}) => {
  const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const {  picture, price, rating, toyName,} = subCate;
    const handleDetails = () =>{
        toast("You need to log in first")
        if(!user){
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
      <button onClick={handleDetails} className='btn bg-blue-500'>View Details</button>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>
    );
};

export default Category3;