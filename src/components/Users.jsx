import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const data= useLoaderData()
    console.log(data);
    return (
        <div>
            <h3>Total Users Lists</h3>
            {
                data.map(user => <User user={user} key={user.id}/>)
            }
        </div>
    );
};

export default Users;