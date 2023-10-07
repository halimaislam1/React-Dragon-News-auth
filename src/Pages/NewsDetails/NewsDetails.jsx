import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import NavBar from '../shared/NavBar';

const NewsDetails = () => {
    const {id} = useParams()

    return (
        
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className='grid md:grid-cols-4 mt-3'>
                <div className='col-span-3 mt-3'>
                     <h2 className='text-3xl'>News Details</h2> 
                     <p>{id}</p> 
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;