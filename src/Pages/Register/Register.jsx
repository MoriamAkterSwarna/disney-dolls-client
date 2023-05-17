import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginLottie from "../../assets/login.json";
import "./Register.css";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
  const registerHandling = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const user = {
      name,
      email,
      photo,
      password,
    };
    console.log(name, email, photo, password);
    console.log(user);
  };
  return (
    <div className="min-h-screen register">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-3/4">
        <div className="lg:w-full lg:ml-auto sm:h-96 ">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
        <div className="hero bg-white rounded-lg sm:mt-64 md:mt-0">
          <div className="hero-content flex-col py-0">
            <div className="text-center">
              <h1 className="text-3xl font-bold title-text">Register</h1>

              <span className="text-red-500 mx-auto">Errors</span>
              <div>
                        <p className='font-bold ml-6'>Sign in with: </p>
                    <div className='text-center'>
                    <button className="btn btn-primary hover:bg-pink-700 mr-1" ><Link><FaGoogle  className='text-white'/></Link></button>
                    <button  className="btn btn-primary hover:bg-pink-700" ><Link><FaGithub  className='text-white'/></Link></button>
                    </div>
                    <div className="divider mb-0">OR</div>
            </div>
            </div>
            <div className="card w-96 mt-0">
              <form className="card-body p-0" onSubmit={registerHandling}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-3">
                  <button className="rounded-md w-1/2 mx-auto px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <input
                      type="submit"
                      className="relative text-indigo-600 transition duration-300 group-hover:text-white ease"
                      value="Register"
                    />
                  </button>
                </div>
              </form>

              <p className="mb-0 ml-6">
                Already sign in? Please
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-indigo-600"
                >
                  <span className="text-xl ml-1 font-bold">Login Here</span>
                </Link>
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
