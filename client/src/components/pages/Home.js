import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInput from 'react-phone-number-input'
import { getVerificationCode } from '../../redux/app/app.actions';
import { showMessage } from '../../redux/message/message.actions';

const Home = () => {
    const dispatch = useDispatch();
    const { codeSent } = useSelector((state) => state.app);
    const [ phone, setPhone ] = useState('');
    console.log(phone)

    const getCode = () => {
        if (phone) dispatch(getVerificationCode(phone));
        else dispatch(showMessage('Please input phone number!'));
    }

    return (
        <div className='radial-background home-page'>
            <div className='container'>
                <div className='form'>
                    <div className='header'>Enter your phone number: </div>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone}
                    />
                    <button onClick={getCode}>Get Code</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
