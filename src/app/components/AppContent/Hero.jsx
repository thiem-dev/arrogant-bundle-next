import { useState, useRef, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { TbStarFilled } from 'react-icons/tb';
import HeroCarousel from './HeroCarousel';
import '../../../css/hero.css';
import ShoppingCartContext from '../ShoppingCartContext/ShoppingCartContext.mjs';

import Image from 'next/image';

const Hero = ({ productData }) => {
  const nextMedia = `/media`;

  const { cartItem, handleCartItem, addTo, wishlistCount } =
    useContext(ShoppingCartContext);

  const [currentIndex, setCurrentIndex] = useState(0); //carousel index
  const imageRef = useRef(null);

  const {
    title,
    thumbnail_link: thumbs,
    price,
    humble_choice_savings: savings,
    gameplay_image_links: images,
    platforms,
  } = productData;

  const shopClick = () => {
    console.log('shop clicked');
  };

  const wishClick = () => {
    console.log('wishList clicked');
  };

  return (
    <>
      <div id="hero">
        <div id="hero-content">
          <div className="product-title">
            <h2>{title}</h2>
          </div>
          <div id="product-hero">
            <div className="main-img">
              <Image
                src={`${nextMedia}${images[currentIndex]}`}
                alt="mario1"
                width={500} //placeholder height n width
                height={300}
                className="main-carousel-img"
                ref={imageRef}
              />
            </div>
            <div id="mini-product">
              <div className="thumbnail-ctn">
                <Image
                  src={nextMedia + thumbs}
                  alt={title}
                  width={500} //placeholder height n width
                  height={300}
                  className="thumbnail"
                />
              </div>

              <div className="product-showcase">
                <div className="logoPrice">
                  <div className="itemlogo-ctn">
                    <Image
                      src={nextMedia + platforms[0].image_link}
                      alt={title}
                      width={500} //placeholder height n width
                      height={300}
                      className="itemlogo"
                    />
                  </div>
                  <div className="price">${price}</div>
                </div>
                <div className="savings">
                  SAVE UP TO{' '}
                  <span className="humble-green">${savings.toFixed(2)} </span>
                  MORE WITH <span className="humble-gold">HUMBLE CHOICE</span>
                </div>
                <div id="checkoutBtn" onClick={handleCartItem}>
                  <span>
                    <FaShoppingCart />{' '}
                  </span>
                  {cartItem > 0 ? 'CHECKOUT' : 'ADD TO CART'}{' '}
                </div>
                <div id="wishListBtn" onClick={addTo}>
                  <span>
                    <TbStarFilled />{' '}
                  </span>
                  {wishlistCount > 0 ? 'ON WISHLIST' : 'ADD TO WISHLIST'}
                </div>
              </div>
            </div>
          </div>
          <div id="hero-carousel">
            <HeroCarousel
              images={images}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
            />
          </div>
        </div>{' '}
        {/* end hero-content */}
      </div>{' '}
      {/* end hero div */}
    </>
  );
};

export default Hero;
