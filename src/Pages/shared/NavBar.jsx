import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const NavBar = () => {
     
    const {user,logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career </NavLink></li>
        <li><NavLink to='/login'>Login </NavLink></li>
        
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost mb-6 md:mb-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  mb-16 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 mb-12  ">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end mb-8">
                <div className="w-10 rounded-full mr-2">
                   <img src={'/assets/user.png'} alt="" />
                </div>
                {
                    user ?
                    <button onClick={handleSignOut} className="btn rounded-lg bg-black
                    text-white px-6 ">signOut</button>
                    :  
                    <Link to='/login'>
                    <button className="btn rounded-lg bg-black
                    text-white px-6 ">Login</button>
                   </Link>
                }
               
            </div>
        </div>
    );
};

export default NavBar;