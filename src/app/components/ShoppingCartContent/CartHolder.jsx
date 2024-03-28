


import PurchaseDiv from "./PurchaseDiv";

const CartHolder = ({productData, setProductData}) => {
  return (
    <div id='cart-holder' >
      <PurchaseDiv productData={productData} setProductData={setProductData} />
    </div>
  )
}

export default CartHolder
