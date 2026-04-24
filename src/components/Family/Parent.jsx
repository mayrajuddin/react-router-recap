import React, { use } from 'react';
import { AssetContext } from '../../contexts/familyContext';

const Parent = () => {
    const asset = use(AssetContext)
    return (
        <div style={{border: '2px solid  green'}}>
            <h2>Parent</h2>
            <p>Parent Asset : {asset}</p>
        </div>
    );
};

export default Parent;