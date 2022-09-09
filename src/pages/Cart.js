import { CartItem } from '../components/CartItem';

export const Cart = props => {
  const getState = itemTitle => {
    props.liftState(itemTitle);
  };

  let totalPrice = 0;
  let arrayToRender = [];
  for (const cartItem in props.data) {
    arrayToRender.push(<CartItem title={cartItem} price={props.data[cartItem][1]} quantity={props.data[cartItem][0]} image={props.data[cartItem][2]} liftState={getState}/>);
    totalPrice += props.data[cartItem][1] * props.data[cartItem][0];
  }


  return (
    <div className='container' id='cart'>
      <div className='color' id='checkout'>
        <h4>Total: <span>{(Math.round(totalPrice * 100) / 100).toFixed(2)} $</span></h4>
        <button >Checkout</button>
      </div>
      
        {arrayToRender.length === 0 && <h1>No items in Cart</h1>}
        {arrayToRender.length > 0 && <div id="cart-items">{arrayToRender}</div>}
    </div>
  );
}