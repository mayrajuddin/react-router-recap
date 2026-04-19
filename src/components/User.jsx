import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name, phone}=user;
    return (
        <div>
            <h3>{name}</h3>
            <span>{phone}</span>
            <Link to={`${id}`}>Show Details</Link>
        </div>
    );
};

export default User;