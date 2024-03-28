import PurchaseTop from './PurchaseTop';
import PurchaseMid from './PurchaseMid';
import PurchaseBottom from './PurchaseBottom';
import ShoppingCartContext from '../ShoppingCartContext/ShoppingCartContext.mjs';
import { useContext } from 'react';

const PurchaseDiv = ({ productData, setProductData }) => {
  const { cartItem } = useContext(ShoppingCartContext);

  return (
    <div id="purchase-div">
      {cartItem ? (
        <>
          <PurchaseTop
            productData={productData}
            setProductData={setProductData}
          />
          <PurchaseMid
            productData={productData}
            setProductData={setProductData}
          />
          <PurchaseBottom />{' '}
        </>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default PurchaseDiv;
