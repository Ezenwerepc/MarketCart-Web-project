import './CartItem.css';
const CartItem = (props) => {
 const price = `NGN${props.price}`;
 return (
  <li className="cart-item">
  <div>
   <h2> {props.name}</h2>
   <div className="summarys">
   <span className="price">{price}</span>
   <span className="amount">x{props.amount}</span>
   </div>
  </div>
  <div className="action">
   <button onClick={props.onRemove}>-</button>
   <button onClick={props.onAdd}>+</button>
  </div>
  </li>
 );
};


export default CartItem;