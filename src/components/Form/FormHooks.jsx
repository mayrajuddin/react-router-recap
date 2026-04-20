import React from 'react';
import useInputField from '../../hooks/FormHooks';

const FormHooks = () => {
    const [name, nameONchange]= useInputField('')
    const [email, emailONchange]=useInputField('')
    const handleForm  = e => {
        e.preventDefault()
        console.log(name,email);
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" onChange={nameONchange} id="" /> <br />
                <input type="text" name="name" onChange={emailONchange} id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormHooks;