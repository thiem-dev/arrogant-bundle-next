

import '../../css/cart.css';
import ShoppingCart from "./ShoppingCartContent/ShoppingCart"

const CurtainModal = ({productData, setProductData}) => {


  return (
    <div id ='curtain-modal'>
        <ShoppingCart productData={productData} setProductData={setProductData} />
    </div>
  )
}

export default CurtainModal



