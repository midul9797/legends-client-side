import React from 'react';
import './Cart.css';
const Cart = (props) => {
    let cost = 0;
    let cart =[];
    let newCart =[];
    props.cart.map(legend => cart.push(legend));
   
    cart.filter(() => {
        for(const item of cart){
            
            if(newCart.indexOf(item) === -1){
                newCart.push(item)
            }
        }
        return true;
    })
    newCart.map(legend=> cost+= legend.salary)
    console.log(newCart)
    return (
        <div className="cart">
            <h1>Total Hire: {newCart.length}</h1>
            <h2>Total Cost: $ {cost}</h2>
            <div>{newCart.map(legend=>
            <li key={legend.id}><img src={legend.image} alt="" /><span>{legend.name}</span></li>)}</div>
        </div>
    );
};

export default Cart;