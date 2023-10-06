import { AiOutlineGoogle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4'>
                <h2 className="text-2xl font-semibold mb-6">Login With</h2>
                <button className="btn btn-outline w-full mb-4">
                    <AiOutlineGoogle></AiOutlineGoogle>
                   <span className='text-sm lowercase'> Login with Google </span>   
                </button>
                <button className="btn w-full btn-outline">
                    <AiFillGithub></AiFillGithub>
                   <span className='text-sm lowercase'> Login with Github </span>   
                </button>
            </div>
            <div className='p-9'>
                <h2 className="text-2xl font-md mb-4">Find Us On</h2>
                <a className='flex gap-2 p-2 items-center border border-gray-200 rounded-t-lg'>
                <FaFacebook className=''></FaFacebook>
                <span>Facebook</span>
                </a>  
                <a className='flex gap-2 p-2 items-center border-x border-gray-200 '>
                <FaTwitter className=''></FaTwitter>
                <span>Twitter</span>
                </a> 
                <a className='flex gap-2 p-2 items-center border border-gray-200 rounded-b-lg'>
                <FaInstagram className=''></FaInstagram>
                <span>Instagram</span>
                </a> 
            </div>
            {/* Q zone */}
            <div className='p-9'>
                <h2 className="text-2xl font-semibold mb-6">Q-Zone</h2>
                <img src={'/assets/qZone1.png'} alt="" />
                <img src={'/assets/qZone2.png'} alt="" />
                <img src={'/assets/qZone3.png'} alt="" />
            </div>
           
        </div>
    );
};

export default RightSideNav;