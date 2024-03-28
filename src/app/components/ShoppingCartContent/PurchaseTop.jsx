import { IoCloseCircleSharp } from 'react-icons/io5';
import { useState, useContext } from 'react';
import ShoppingCartContext from '../ShoppingCartContext/ShoppingCartContext.mjs';
// import switchCartLogo from '../../../../../public/media/images/platforms/switch-cart-logo.png'
import switchCartLogo from '../../../../public/media/images/platforms/switch-cart-logo.png';

const PurchaseTop = ({ productData, setProductData }) => {
  const { title, price } = productData;

  const { cartItem, setCartItem } = useContext(ShoppingCartContext);

  const emptyCart = () => {
    setCartItem(cartItem - 1);
    console.log('Cart emptied');
  };

  return (
    <div id="purchase-top">
      <div id="purchase-topA">
        <div id="sub-A">
          <IoCloseCircleSharp id="h1-x" onClick={emptyCart} />
          <h1>{productData.title}</h1> <img src={switchCartLogo} />
        </div>
        <h1>${productData.price}</h1>
      </div>
      <div id="purchase-topB">
        <p>
          Purchase is non-refundable. See full terms{' '}
          <a
            className="cart-link"
            href="https://support.humblebundle.com/hc/en-us/articles/1260804812850"
            target="_blank"
          >
            here
          </a>{' '}
          <br />
          Purchases require a free US or Canada Nintendo eShop Account.
          <br />
          Not eligible for Humble Rewards or charity contribution
        </p>
      </div>
    </div>
  );
};

export default PurchaseTop;
