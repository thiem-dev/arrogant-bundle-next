
import { FaGift } from "react-icons/fa6";

const CartTerms = () => {
  return (
    <div id='cart-terms' >
      <p className='cart-p' >Must be logged in to purchase <a className="cart-link" href='https://www.humblebundle.com/login?goto=%2Fstore%2Fshoppingcart&qs=reason%3DloginRequired' target='_blank'>Login</a></p>
      <p className="cart-p" > <input className="checkbox" type='checkbox'/> Subscribe to hear about more deals!</p>
      <p className="cart-p" > <input className="checkbox" type='checkbox'/> <FaGift /> This purchase is a gift.</p>
      <p className="cart-p" >By signing up, you agree to the <a className="cart-link" href='https://www.humblebundle.com/terms' target='_blank'>Terms of Service</a> and <a className="cart-link" href='https://www.humblebundle.com/privacy' target='_blank'>Privacy Policy</a>. You may unsubscribe from any newsletter at any time.</p>
    </div>
  )
}

export default CartTerms
