import NavBar from '../shared/NavBar';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photoUrl = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photoUrl,email,password);
     }
  

   return (
    <div> 
      <NavBar></NavBar>
      <div className=" ">
          <div className="hero-content flex-col ">
              <div className="text-center ">
                  <h1 className="text-5xl text-pink-700 bg-pink-100 p-4 rounded-lg
                  shadow-md shadow-pink-100 font-bold mb-2">Please Register!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-md shadow-2xl shadow-pink-700 bg-base-500">
                  <div className="card-body bg-pink-100 rounded-xl">
                      <form onSubmit={handleRegister}>
                        <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-pink-700">Name</span>
                              </label>
                              <input  type="text" name='name' placeholder="Enter your name" className="input input-bordered text-sm
                          border border-pink-700 " required />
                        </div>
                        <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-pink-700">Photo Url</span>
                              </label>
                              <input type="text" name='photo' placeholder="Enter your photo url" className="input input-bordered text-sm border border-pink-700" required />
                              
                        </div>
                        <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-pink-700">Email</span>
                              </label>
                              <input type="email" name='email' placeholder="Enter your email" className="input input-bordered text-sm border border-pink-700" required />
                              
                        </div>
                        <div className="form-control">
                              <label className="label">
                                  <span className="label-text text-pink-700">Password</span>
                              </label>
                              <input type="password" name='password' placeholder="Enter your password" className="input input-bordered text-sm border border-pink-700" required />
                              <label className="label">
                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                        </div>
                          <div className="form-control mt-3">
                              <button className="btn text-white bg-pink-700 font-semibold 
                              hover:bg-pink-500">Register</button>
                          </div>
                      </form>
                      <p className="text-center mt-2">Already have an account? <Link className="text-pink-800 font-bold" to='/login'>Login</Link></p>
                  </div>
              </div>
          </div>
      </div> 
    </div>
    );
};

export default Register;