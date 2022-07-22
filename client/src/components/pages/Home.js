import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const { test } = useSelector((state) => state.app);
    return (
        <div className='radial-background home-page'>
            <div className='container'>
                <div className='form'>
                    <div className='header'>Enter your phone number: </div>
                    <input type='number' />
                    <button>Send Code</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
