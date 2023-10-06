import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCalendar4 } from 'react-icons/bs';
import moment from 'moment';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='space-y-6'>
            <h2 className="text-2xl mt-3">All Caterogy</h2>
            {
                categories.map(category =>
                    <Link
                        to={`/category/${category.id}`}
                        key={category.id}
                        className='block ml-4 text-xl font-semibold px-4'
                    >{category.name}</Link>)
            }

            <div>
                <img src={'/assets/1.png'} alt="" />
                <h2 className='mt-3  text-black text-xl font-md'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex  items-center mt-3'>
                    <p className='mr-8 text-xl'>Sports</p>
                    <BsCalendar4 className='mr-2 text-center text-xl'></BsCalendar4>
                    <p className='text-md text-[#9F9F9F]'>{moment().format(" MMM D, YYYY")}</p>
                </div>
            </div>
            <div>
                <img src={'/assets/2.png'} alt="" />
                <h2 className='mt-3 text-black text-xl font-md'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex  items-center mt-3'>
                    <p className='mr-8 text-xl'>Sports</p>
                    <BsCalendar4 className='mr-2 text-center text-xl'></BsCalendar4>
                    <p className='text-md text-[#9F9F9F]'>{moment().format(" MMM D, YYYY")}</p>
                </div>
            </div>
            <div>
                <img src={'/assets/3.png'} alt="" />
                <h2 className='mt-3 text-black text-xl font-md'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex  items-center mt-3'>
                    <p className='mr-8 text-xl'>Sports</p>
                    <BsCalendar4 className='mr-2 text-center text-xl'></BsCalendar4>
                    <p className='text-md text-[#9F9F9F]'>{moment().format(" MMM D, YYYY")}</p>
                </div>
            </div>
            
        </div>
    );
};

export default LeftSideNav;             