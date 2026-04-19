import React, { useState } from 'react';
import { Link, Navigate } from 'react-router';

const User = ({user}) => {
    const [visitHome, setVisitHome]= useState(false)
    const {id,name, phone}=user;

    if(visitHome){
        return <Navigate to={'/'}></Navigate>
    }
    return (
        <div>
            <h3>{name}</h3>
            <span>{phone}</span>
            <Link to={`${id}`}>Show Details</Link>
            <button onClick={()=> setVisitHome(true)}>visit Home</button>
        </div>
    );
};

export default User;