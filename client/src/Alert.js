import React from 'react';
import Alert from 'react-bootstrap/Alert';

const CAlert = ({ variant,message}) => {
    console.log(message);
    return (
        <div className='text-center'>   
        <Alert className='w-50 mx-auto' variant={variant}>{message}</Alert>
        </div>
    )
}


export default CAlert;