import React, { useState } from 'react';

const FromAction = () => {
    const [password, setPassword]=useState('')
    const [error, setError]=useState('')
    const handleForm =(e)=>
    {
        e.preventDefault()
        console.log('hello');
    }
    const handleONchange= e=>{
        e.preventDefault()
        setPassword(e.target.value)
        if(password.length <= 6){
            setError('Give your password 6 character or more')
        }else{
            setError('')
        }
    }
    return (
        <div>
            <h4>Use Actions form get data</h4>
            <form onSubmit={handleForm}>
                <input type="text" name='name'/> <br />
                <input type="email" name='email'placeholder='email' /> <br />
                
                <input type="password" onChange={handleONchange} defaultValue={password} name="password"/>
                <button type="submit">Submit</button> <br />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default FromAction;