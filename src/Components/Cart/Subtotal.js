import React from 'react'
import './cart.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal({carts}) {

    const CartTotal = () =>{
       return carts?.reduce((amount,item) => item.total + amount, 0);
    }

    return (
        <div className="subtotal-container">
                <CurrencyFormat 
                 renderText={(value) =>(
                     <>
                       <p>
                           Subtotal ({carts.length} items) : <strong>{value}</strong>
                       </p>
                     </>
                 )}

                 decimalScale={2}
                 value={CartTotal()}
                 displayType={"text"}
                 thousandSeparator={true}
                 prefix={"₹"}
                />

                <button>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal

