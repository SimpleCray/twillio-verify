import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInput from 'react-phone-number-input';
import { checkVerificationCode, getVerificationCode, resetVerify } from '../../redux/app/app.actions';
import { showMessage } from '../../redux/message/message.actions';

const Home = () => {
    const dispatch = useDispatch();
    const { codeSent, phoneVerified } = useSelector((state) => state.app);
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    const getCode = () => {
        if (phone) dispatch(getVerificationCode(phone));
        else dispatch(showMessage('Please input phone number!'));
    };

    const checkCode = () => {
        if (code) dispatch(checkVerificationCode(phone, code));
        else dispatch(showMessage('Please input verify code!'));
    };

    const reset = () => {
        setPhone('');
        setCode('');
        dispatch(resetVerify());
    };

    return (
        <div className='radial-background home-page'>
            <div className='container'>
                {!phoneVerified ? (
                    !codeSent ? (
                        <div className='form'>
                            <div className='header'>Enter your phone number: </div>
                            <PhoneInput placeholder='Enter phone number' value={phone} onChange={setPhone} />
                            <button onClick={getCode}>Get Code</button>
                        </div>
                    ) : (
                        <div className='form'>
                            <div className='header'>{`Enter the code sent to ${phone}:`} </div>
                            <input type='number' value={code} onChange={(e) => setCode(e.target.value)} />
                            <button onClick={checkCode}>Check Code</button>
                        </div>
                    )
                ) : (
                    <div className='form'>
                        <div className='header'>{`Number ${phone} is verified!`}</div>
                        <button onClick={reset}>Verify another</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
