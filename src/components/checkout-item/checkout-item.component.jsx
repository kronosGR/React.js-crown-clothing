import React from 'react';
import { connect } from 'react-redux';

import { clearItemFomCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>price</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapsDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFomCart(item)),
});

export default connect(null, mapsDispatchToProps)(CheckoutItem);
