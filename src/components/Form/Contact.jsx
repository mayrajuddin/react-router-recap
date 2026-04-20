import React from 'react';
import FromAction from './FromAction';
import UseRefForm from './UseRefForm';
import FormHooks from './FormHooks';

const Contact = () => {
    // const handleForm = (e)=>{
    //     e.preventDefault()
    //     console.log(e.target.name.value);
    //     console.log(e.target.email.value);
    // }
    return (
        <div>
            <h3>React Form</h3>
            {/* <form onSubmit={handleForm}>
                <input type="text" name='name' /><br /> <br />
                <input type="email" name="email" id="" /> <br />
                <textarea name="message" placeholder='Sent your message'></textarea> <br />
                <button type="submit">Submit</button> <br />
            </form>
            <FromAction/> */}
            {/* <UseRefForm/> */}
            <FormHooks/>
        </div>
        
    );
};

export default Contact;