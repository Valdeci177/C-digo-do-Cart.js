import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const handleRemove = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <button onClick={() => handleRemove(item)}>Remover</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
