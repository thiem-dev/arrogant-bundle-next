// TODO nav

import '../../css/navbar.css'
import { useContext } from 'react'
import ShoppingCartContext from './ShoppingCartContext/ShoppingCartContext.mjs'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Bundle from './Bundle';
import About from './About';
import Store from './Store';

const Navbar = () => {

    const {
        cartItem,
        handleCartDisplay,
        wishlistCount,
        handleBundle,

    } = useContext(ShoppingCartContext)

    // bundleDisplay

    return (
    <>
        <div className="nav ctn">
            <div className="nav-links">
                <div id='humble-links' >
                    <h1>Arrogant</h1>

                        <div className='bundle-drop-ctn'>
                            <a
                                href='https://www.humblebundle.com/bundles?_gl=1*1r5aa4r*_up*MQ..&gclid=Cj0KCQiA7aSsBhCiARIsALFvovx4p9Kgl2la2vY0lMhC7YZQ8P5Qjrbq065c67_s9wWRKTkIXH8IZZcaAtI6EALw_wcB' 
                                target='_blank'  
                                rel="noreferrer" 
                            >
                                Bundles
                            </a>
                            <Bundle/>
                        </div>

                        
                        <div className='store-drop-ctn' >
                            <a 
                                href='https://www.humblebundle.com/store?_gl=1*9go6x7*_up*MQ..&gclid=Cj0KCQiA7aSsBhCiARIsALFvovx4p9Kgl2la2vY0lMhC7YZQ8P5Qjrbq065c67_s9wWRKTkIXH8IZZcaAtI6EALw_wcB' 
                                target='_blank' 
                                rel="noreferrer" 
                        >
                                Store
                            </a>
                            <Store/>
                        </div>


                        <a href='https://www.humblebundle.com/membership?_gl=1*1anwn3y*_up*MQ..&gclid=Cj0KCQiA7aSsBhCiARIsALFvovx4p9Kgl2la2vY0lMhC7YZQ8P5Qjrbq065c67_s9wWRKTkIXH8IZZcaAtI6EALw_wcB' target='_blank' rel="noreferrer" >Choice</a>

                        <div className='about-drop-ctn'>
                            About
                            <About/>
                        </div>    
                </div>

                <div id='search-signUp' >
                    <div id='searchInput'>
                        <input type="search" placeholder='Search'/>
                        <FaSearch />
                    </div>
                        <a href='https://www.humblebundle.com/signup?hmb_source=navbar&goto=%2Fstore%2Fsuper-mario-rpg-switch&qs=hmb_source%3Dsearch_bar%26_gl%3D1*1gtdzz5*_up*MQ..%26gclid%3DCj0KCQiA7aSsBhCiARIsALFvovx4p9Kgl2la2vY0lMhC7YZQ8P5Qjrbq065c67_s9wWRKTkIXH8IZZcaAtI6EALw_wcB' target='_blank' rel="noreferrer">Sign Up</a>

                        <a href='https://www.humblebundle.com/login?hmb_source=navbar&goto=%2Fstore%2Fsuper-mario-rpg-switch&qs=hmb_source%3Dsearch_bar%26_gl%3D1*1gtdzz5*_up*MQ..%26gclid%3DCj0KCQiA7aSsBhCiARIsALFvovx4p9Kgl2la2vY0lMhC7YZQ8P5Qjrbq065c67_s9wWRKTkIXH8IZZcaAtI6EALw_wcB' target='_blank' rel="noreferrer">Log In</a>
                </div>
            </div>
            
            <div className="charity-nav">
                <div id='charity-links' >
                    <a>Choose Charity</a>

                    <a href='https://www.humblebundle.com/refer?hmb_source=store_navbar&_gl=1*lnfe7u*_up*MQ..&gclid=Cj0KCQiA7aSsBhCiARIsALFvovx4p9Kgl2la2vY0lMhC7YZQ8P5Qjrbq065c67_s9wWRKTkIXH8IZZcaAtI6EALw_wcB' target='_blank' rel="noreferrer">Earn Wallet Credit</a>
                </div>
                <div id='wallet-cart'>
                    <>
                        <IoMdWallet className='nav-icons' id='wallet-icon' />
                        <h3>$0.00</h3>
                    </>
                    <>
                        <FaStar className='nav-icons' id='star-icon'/>
                        <h3>{wishlistCount}</h3>
                    </>
                    <>
                        <FaShoppingCart className='nav-icons' id='cart-icon' onClick={handleCartDisplay} />
                        <h3>{cartItem}</h3>
                    </>
                </div>
            </div>
        </div>
    </>

    )
}

export default Navbar