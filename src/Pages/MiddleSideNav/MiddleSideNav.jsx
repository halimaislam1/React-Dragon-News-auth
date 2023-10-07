import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import { BsShare } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';

const MiddleSideNav = () => {
    const [newsCategory, setNewsCategory] = useState([]);

    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNewsCategory(data))
    },[])

    return (
        <div>
            <h2 className='text-2xl '>Dragon News Home:{newsCategory.length}</h2>
            {
                newsCategory.slice(0,4).map(news => 
                <div
                // to={`/news/${news._id}`}
                key={news._id} >

                 <div className='flex justify-between border p-2 bg-base-200 mb-4 mt-10'>
                     <div className='flex gap-5'>
                            <img className='w-10 rounded-full' src={news.author.img} alt="" />
                            <div>
                                <p>{news.author.name}</p>
                                <p>{news.author.published_date}</p>
                            </div>
                      </div>
                      <div className='flex gap-4 mr-8 items-center'>
                         <BsBookmark></BsBookmark>
                         <BsShare></BsShare>
                      </div>
                 </div>
                 <p className='text-[#403F3F] text-2xl font-bold mb-4'>{news.title}</p>
                 <img src={news.image_url} alt="" />
                 <p className='mb-3'>
                    {
                     news.details.length > 200 ? 
                     <p>{news.details.slice(0,200)} <Link 
                     to={`/news/${news._id}`}

                     className='text-blue-600'>Read More...</Link>
                     </p> : <p>{news.details}</p>
                    }
                    </p>
                <div className='flex justify-between'>
                    <div className='flex gap-4 mt-3'>
                    <div className="rating gap-1">
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                    </div>
                           <span className='text-xl'>{news.rating.number}</span>
                           {/* <span>{news.rating.badge}</span> */}
                    </div>
                    <div className='flex items-center text-xl gap-2 mt-3 mr-3'>
                       <AiFillEye className='text-2xl'></AiFillEye>
                       <p >{news.total_view}</p>
                    </div>
                 </div>
            </div>)
                
            }
            {/* <img className='w-10 rounded-full' src={} alt="" /> */}

            
        </div>
    );
};

export default MiddleSideNav;