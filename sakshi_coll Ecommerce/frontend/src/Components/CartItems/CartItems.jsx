import React, { useContext, useState } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [promoMessageClass, setPromoMessageClass] = useState("");

  const handleApplyPromoCode = () => {
    const totalAmount = getTotalCartAmount();
    if (promoCode === "SC_firstOrder" && totalAmount > 500) {
      setDiscount(100);
      setPromoMessage("Promo code applied successfully! " + currency + "100.");
      setPromoMessageClass("promocode-alert-success");
    } else {
      setDiscount(0);
      setPromoMessage("Invalid promo code.");
      setPromoMessageClass("promocode-alert-error");
    }
  };

  const totalAmount = getTotalCartAmount();
  const finalTotal = totalAmount - discount;

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format-main cartitems-format">
                <img className="cartitems-product-icon" src={backend_url + e.image} alt="" />
                <p className="cartitems-product-title">{e.name}</p>
                <p>{currency}{e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>{currency}{e.new_price * cartItems[e.id]}</p>
                <img onClick={() => { removeFromCart(e.id) }} className="cartitems-remove-icon" src={cross_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            {discount > 0 && (
              <>
                <div className="cartitems-total-item">
                  <p>Discount</p>
                  <p>-{currency}{discount}</p>
                </div>
                <hr />
              </>
            )}
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{currency}{finalTotal}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            <button onClick={handleApplyPromoCode}>Submit</button>
          </div>
          {promoMessage && <span className={promoMessageClass}>{promoMessage}</span>}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
