
import { useContext } from "react"
import ShoppingCartContext from "../ShoppingCartContext/ShoppingCartContext.mjs"
import { FaCreditCard } from "react-icons/fa";

const CartFooter = () => {

  const {
    cartItem
  } = useContext(ShoppingCartContext)

  return (
    <div id='cart-footer' >
      <button id='purchase-btn' >{cartItem > 0 ? <div id='purchase-btn-true'><FaCreditCard id='credit-card' /> <h1>Pay with card</h1> </div> : 'Purchase' }</button>
      {cartItem > 0 ? (
      <>
        <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-4JW90998EP261400S&useraction=commit' id='paypal' target='_blank'>
        Pay with PayPal
        </a>

        <a href='https://pay.klarna.com/na/hpp/payments/10460d47-2308-4fcf-b43e-e50bbb7c1368#kp-loaded' id='klarna' target='_blank'>
        Shop now. Pay over time with Klarna
        </a>
        <h4>$29.99 minimum payment</h4>

        <a href='https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fpayments.amazon.com%2Fcheckout%2Finitiate_auth%3Fwid%3D37cd1ffb-1416-44a2-8e4d-0848acdd7130&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_pyop&openid.mode=checkid_setup&siteState=buyer_language%3Den_US%26cancelReturnURL%3Dhttps%253A%252F%252Fwww.humblebundle.com%252Freturn%252Famazonhp%26coe%3DUS%26combined_page%3Dtrue%26env%3DLIVE%26isLegacyExpressCheckout%3Dtrue%26ledger_currency%3DUSD%26merchantId%3DA2608GUH2GJY52%26origin_url%3Dhttps%253A%252F%252Fwww.humblebundle.com%252Fhumbler%252Fsubmit%26product_type%3DPAY_ONLY%26referrer_url%3Dhttps%253A%252F%252Fwww.humblebundle.com%252Fhumbler%252Fsubmit%26show_otp_text%3Dtrue%26wid%3D37cd1ffb-1416-44a2-8e4d-0848acdd7130&marketPlaceId=AGWSWK15IEJJ7&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_pay_signInTitleOTP&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&&openid.pape.max_auth_age=0' id='amazon' target='_blank'>
          Pay with Amazon
        </a>

          <button id='alipay' >Alipay</button>
      </>) : '' } 
    </div>
  )
}

export default CartFooter
