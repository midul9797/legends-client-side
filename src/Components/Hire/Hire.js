// -------------------------
// |   Component: Hire     |
// -------------------------
import React, { useEffect, useState } from 'react';
import Legends from '../Legends/Legends';
import Cart from '../Cart/Cart';
import './Hire.css';
const Hire = () => {
    // useState
    const [legends, setLegends] = useState([]);
    const [cart, setCart] = useState([]);
    // Loading Data using useEffect
    useEffect(() => {
        fetch('./legends.json')
            .then(res => res.json())
            .then(data => setLegends(data))
    }, []);
    //setCart After click Hire
    const handleHire = legend => {
        const newCart = [...cart, legend];
        setCart(newCart);
    }
    return (
        <div className="hire">
            <div className="legends">
                {
                    legends.map(legend => <Legends key={legend.id} legend={legend} click={handleHire}></Legends>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Hire;