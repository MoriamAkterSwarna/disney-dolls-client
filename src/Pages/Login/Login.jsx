import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginLottie from "../../assets/login.json";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signInUser,signInWithGithub, signInWithGoogle} = useContext(AuthContext)
  const [errors, setErrors] = useState('')
  const handleLogin = (event) => {
    event.preventDefault();

    setErrors('')
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
    signInUser(email, password)
       .then(result =>{
        const createdUser = result.user;
        console.log(createdUser)
        // navigate(from ,{replace: true})
       })
       .catch(error =>{

        console.log(error);
        setErrors(error.message)
       })
    // console.log(user);

  };
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result => {
        const loggedUser = result.user;
        // navigate(from ,{replace: true})
       
        
    })
    .catch(error => console.log(error))
}
const handleGithubSignIn = () =>{
    signInWithGithub()
    .then(result => {
        const loggedUser = result.user;
        // navigate(from ,{replace: true})
        
    })
    .catch(error => console.log(error))

}
  return (
    <div className="min-h-screen register ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-3/4">
        <div className="lg:w-full lg:ml-auto sm:h-96 h-96 ">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
        <div className="hero bg-white my-2 rounded-lg sm:mt-64 md:mt-0">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-3xl font-bold title-text">Login Please</h1>

              <span className="text-red-500 mx-auto">Errors</span>
            </div>

            <div>
                        <p className='font-bold ml-6'>Sign in with: </p>
                    <div className='text-center'>
                    <button className="btn btn-primary hover:bg-pink-700 mr-1" onClick={handleGoogleSignIn}><Link><FaGoogle  className='text-white'/></Link></button>
                    <button  className="btn btn-primary hover:bg-pink-700" onClick={handleGithubSignIn} ><Link><FaGithub  className='text-white'/></Link></button>
                    </div>
                    <div className="divider mb-0">OR</div>
            </div>
            <div className="card w-96 mt-0">
              <form className="card-body p-0" onSubmit={handleLogin}>
                
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
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#5a189a] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <input
                      type="submit"
                      className="relative text-indigo-600 transition duration-300 group-hover:text-white ease"
                      value="Login"
                    />
                  </button>
                </div>
              </form>

              <p className="mb-0 ml-6">
                Do not have an account? Please
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-indigo-600"
                >
                  <span className="text-xl ml-1 font-bold">Sign Up Here</span>
                </Link>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
