import React from 'react';
import { useLoaderData } from 'react-router';

const UserInfo = () => {
    const userData = useLoaderData()
    console.log(userData);
    return (
        <div>
            <p>User Details here</p>
            <p>{userData.email}</p>
            <p>{userData.website}</p>
        </div>
    );
};

export default UserInfo;