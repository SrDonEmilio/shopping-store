import React from 'react';
import ProductItem from '../product/productItem/ProductItem'

import Drone1 from '../../images/sample/Drone-Background-PNG.png'

const Cart = () => {
    return (
        <div>
            <ProductItem title="Drone" image={Drone1} />
        </div>
    );
};

export default Cart;