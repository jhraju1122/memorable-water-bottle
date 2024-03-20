import React from 'react';

const Bottles = ({bottle}) => {
    const {name, img, price} = bottle;
    return (
        <div>
            <h3>bottle{name}</h3>
            <img src={img} alt="" />
            <h3>price: {price}</h3>
        </div>
    );
};

export default Bottles;