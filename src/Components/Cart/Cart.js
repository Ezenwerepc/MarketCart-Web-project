import {useContext} from 'react';
import './Cart.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import CartContext from '../../Store/cart-context';
const Cart = (props) => {
const cartCtx = useContext(CartContext)
const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const hasItems = cartCtx.items.length > 0;

const cartItemRemoveHandler = (id) => {
  cartCtx.removeItem(id);
};
const cartItemAddHandler = (item) => {
  cartCtx.addItem(item)
};
 const cartItems = (
 <ul className="cart-items">{cartCtx.items.map((item)=>
  <CartItem 
  key={item.id} 
  name={item.name} 
  price={item.price}
  amount={item.amount}
  onRemove={cartItemRemoveHandler.bind(null,item.id)}
  onAdd={cartItemAddHandler.bind(null,item)}/>
  )}
  </ul>);
return(
<Modal onClose={props.onClose}>
 {cartItems}
<div className="total">
 <span>Total Amount</span>
 <span>{totalAmount}</span>
</div>
<div className="actions">
 <button className="button--alt" onClick={props.onClose}>Close</button>
 {hasItems && <button className="buttons">Order</button>}
</div>
</Modal>

)};

export default Cart;