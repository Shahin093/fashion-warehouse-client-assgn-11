import React from 'react';
import Brands from '../Brands/Brands';
import FashionService from '../FashionService/FashionService';
import Header from '../Header/Header';

const MainHeader = () => {
    return (
        <div>
            <Header></Header>
            <FashionService></FashionService>
            <Brands></Brands>
        </div>
    );
};

export default MainHeader;