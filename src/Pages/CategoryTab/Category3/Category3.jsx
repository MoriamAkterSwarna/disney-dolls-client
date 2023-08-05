import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Provider/AuthProvider";

const Category3 = ({ subCate }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { picture, price, rating, toyName, _id } = subCate;
  const handleDetails = () => {
    if (!user) {
      toast("You need to log in first");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  return (
    <div className="card w-96 shadow-xl border-2 ">
      <figure>
        <img
          className="border-2 rounded-lg h-[250px] w-full object-cover"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-fuchsia-100  hover:bg-fuchsia-200">
        <h2 className="card-title">{toyName}</h2>
        <div className="badge ">Price: ${price}</div>
        <div className="badge badge-outline bg-yellow-500 border-yellow-500">
          Rating: {rating}
        </div>

        <div className="card-actions justify-end">
          <Link to={`/singleToy/${_id}`}>
            <button onClick={handleDetails} className="btn bg-blue-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Category3;
