import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const Register = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const handleOnChange=(event)=>{
        // console.log(event.target.value)
    }
    const handleOnBlur=(event)=>{
        // console.log(event.target.value)
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-bold my-4'>Please register!!!</h2>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' onChange={handleOnChange} type="email" name="email" id="email" placeholder='Enter Your Email'  required/>
                <br />
                <input className='w-50 mb-4 rounded ps-2' onBlur={handleOnBlur} type="password" name="password" id="password" placeholder='Enter Your Password' required/>
                <br />
                <input className='btn btn-primary'  type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;