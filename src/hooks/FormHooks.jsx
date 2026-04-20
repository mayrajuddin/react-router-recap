import {useState } from "react";

const useInputField = (values)=>{
    const [fieldValue, setFieldValue]=useState(values)
    const handleForm = e =>{
        e.preventDefault()
        setFieldValue(e.target.value)
    }
    return [fieldValue, handleForm]
}

export default useInputField;