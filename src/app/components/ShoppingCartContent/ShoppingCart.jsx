

import CartHeader from "./CartHeader"
import CartHolder from "./CartHolder"
import CartCheckout from "./CartCheckout"
import CartTerms from "./CartTerms"
import CartFooter from "./CartFooter"

const ShoppingCart = ({productData, setProductData}) => {
  return (
    <div id='cart' >
      <CartHeader/>
      <CartHolder productData={productData} setProductData={setProductData} />
      <CartCheckout/>
      <CartTerms/>
      <CartFooter/>
    </div>
  )
}

export default ShoppingCart
