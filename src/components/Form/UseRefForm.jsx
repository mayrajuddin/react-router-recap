import React, { useRef } from 'react';

const UseRefForm = () => {
    const nameRef=useRef('')
    const emailRef= useRef('')
    const handleSubmit = e =>{
        e.preventDefault()
        const name =nameRef.current.value
        const email =emailRef.current.value
        console.log(name, email);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name"/> <br />
                <input type="email" ref={emailRef} name="email"/> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UseRefForm;