import React from 'react';

const RegisterBS = () => {
    const handleOnSubmit =(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
    }
    return (
        <form onSubmit={handleOnSubmit} className='w-50 mx-auto'>
            <h2 className='text-bold text-purple'>Please Register!!!</h2>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default RegisterBS;