import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
   
    const {signIn} = useContext(AuthContext)

   const handleLogin = (e) => {
      e.preventDefault();
    //   const email = e.target.email.value;
    //   const password = e.target.password.value;
    //   console.log(email,password);
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const email = form.get('email')
      const password = form.get('password')
    //   const email = form.get('email')
      console.log(email,password);
      signIn(email,password)
      .then(result =>{
        console.log(result.user);
      })
      .catch(error => {
        console.error(error)
      })
   }


    return (
        <div>
            <NavBar></NavBar>
            <div className=" ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl text-fuchsia-700 font-bold mb-2">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl shadow-fuchsia-500 bg-base-500">
                        <div className="card-body bg-fuchsia-100 rounded-xl">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-purple-700">Email</span>
                                    </label>
                                    <input  type="email" name='email' placeholder="Enter your email" className="input input-bordered text-sm
                                border border-fuchsia-700 " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-purple-700">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter your password" className="input input-bordered text-sm border border-fuchsia-700" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-3">
                                    <button className="btn text-white bg-fuchsia-900 font-semibold 
                                    hover:bg-fuchsia-400">Login</button>
                                </div>
                            </form>
                            <p className="text-center mt-2">Do not have an account? <Link className="text-violet-800 font-bold" to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;