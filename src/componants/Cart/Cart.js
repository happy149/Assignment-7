import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,player) => total + player.salary,0);
    // console.log(props);
    const tax = (total/100)*10;
    
    
    
    
  
    const totalBudget = (total+ Number(tax)).toFixed(2);

    return (
        <div>
            <h1 > Team Info</h1>
            <h3>Total Selected Players:{cart.length}</h3>
            <h3>Total Salary: {total}</h3>
            <p><small>TAX +VAT:{tax}</small></p>

            <h2>Total Team Budget:${totalBudget}</h2>
        </div>
    );
};

export default Cart;