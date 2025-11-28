import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContex';
import "./Cart.css"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);

  const navigate =useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item" key={item._id}>
                <img src={url+"/images/"+item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹ {item.price}</p>
                <p>{cartItems[item._id]}</p>  
                <p>₹ {(item.price * cartItems[item._id]).toFixed(2)}</p> 
                <p className='remove' onClick={() => removeFromCart(item._id)}>Remove</p>  
              </div>
            );
          }
          return null; // If no items, return null
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h1>Cart Total</h1>
          <div>
            <hr/>
          <div className='cart-total-details'>
            <p> Subtotal</p>
            <p>
            ₹ {getTotalCartAmount()}
            </p>

            </div>
            <hr/>
            <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>₹ {getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
            <p>Total</p>
            <p>₹ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
            <hr/>

          </div>
<button onClick={()=>navigate("/order")}>Proceed to Checkout</button>

        </div>
        <div className='cart-promocode'>
          <div>
<p>If you have a promo code Enter it here</p>
<div className='cart-promocode-input'>
  <input type="text" placeholder="Enter promo code"/>
<button> Submit</button>
</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
