import React from 'react';
import Brands from '../Brands/Brands';
import Contact from '../Contact';
import FashionService from '../FashionService/FashionService';
import Header from '../Header/Header';

const MainHeader = () => {
    return (
        <div>
            <Header></Header>
            <FashionService></FashionService>
            <Contact></Contact>
            <Brands></Brands>
        </div>
    );
};

export default MainHeader;