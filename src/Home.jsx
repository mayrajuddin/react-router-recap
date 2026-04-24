import React from 'react';
import ProductManagement from './components/productManagement/ProductManagement';
import { AssetContext } from './contexts/familyContext';
import Parent from './components/Family/Parent';

const Home = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rerum atque voluptatum quibusdam tempora temporibus quos debitis corrupti distinctio id maxime asperiores doloremque cumque, consequatur explicabo voluptate magni eligendi delectus.</p>
            {/* <ProductManagement/> */}
            <AssetContext>
                <Parent/>
            </AssetContext>
        </div>
    );
};

export default Home;