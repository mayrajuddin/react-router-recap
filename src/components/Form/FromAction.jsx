import React from 'react';

const FromAction = () => {
    const handleForm =(e)=>
    {
        e.preventDefault()
        console.log('hello');
    }
    return (
        <div>
            <h4>Use Actions form get data</h4>
            <form onSubmit={handleForm}>
                <input type="text" name='name'/> <br />
                <input type="email" name='email'placeholder='email' /> <br />
                <input type="password" name='password' placeholder='password' required/> <br />
                <button type="submit">Submit</button> <br />
            </form>
        </div>
    );
};

export default FromAction;