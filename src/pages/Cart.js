import { CartItem } from '../components/CartItem';

export const Cart = props => {
  const getState = itemTitle => {
    props.liftState(itemTitle);
  };

  let cartItems = [];
  let totalPrice = 0;
  for (const itemTitle in props.mapObj) {
    cartItems.push(<CartItem
      key={itemTitle} 
      title={itemTitle} 
      price={props.mapObj[itemTitle].price} 
      quantity={props.mapObj[itemTitle].count} 
      image={props.mapObj[itemTitle].imgURL} 
      liftState={getState}/>
    );
    totalPrice += props.mapObj[itemTitle].price * props.mapObj[itemTitle].count;
  }

  return (
    <div className='container' id='cart'>
      <div className='color' id='checkout'>
        <h4>Total: <span>{(Math.round(totalPrice * 100) / 100).toFixed(2)} $</span></h4>
        <button >Checkout</button>
      </div>
        {cartItems.length === 0 && <h1>No items in Cart</h1>}
        {cartItems.length > 0 && <div id="cart-items">{cartItems}</div>}
    </div>
  );
}