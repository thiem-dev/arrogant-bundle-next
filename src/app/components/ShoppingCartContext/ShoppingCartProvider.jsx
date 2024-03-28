'use client';

import ShoppingCartContext from './ShoppingCartContext.mjs';
import { useState } from 'react';

const ShoppingCartProvider = ({ children }) => {
  //state to check if the cart contains an item
  const [cartItem, setCartItem] = useState(0);
  //state to check if the cart is displayed
  const [cartDisplay, setCartDisplay] = useState(false);
  //state to add item to wishlist
  const [addToWishlist, setAddToWishlist] = useState(false);
  //state to increase the number of items in wishlist
  const [wishlistCount, setWishlistCount] = useState(0);
  //state used to display menus for Bundle, Store, and About
  const [bundleDisplay, setBundleDisplay] = useState(false);
  const [storeDisplay, setStoreDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);

  //function to handle conditional rendering if the cart contains an item
  const handleCartItem = () => {
    if (cartItem === 1) {
      console.log('Item already in cart');
      return;
    }

    setCartItem(cartItem + 1);
    console.log('Item added to cart');
  };

  //function to handle displaying of the shopping cart
  const handleCartDisplay = () => {
    setCartDisplay(!cartDisplay);
    !cartDisplay ? console.log('Displaying Cart') : console.log('Cart Closed');
  };

  //function that adds item to wishlist
  const addTo = () => {
    setAddToWishlist(true);

    if (wishlistCount > 0) {
      console.log('removed from wishlist');
      setWishlistCount(0);
      return;
    }

    setWishlistCount(wishlistCount + 1);
    console.log('added to wishlist');
  };

  //functions to handle display of Bundle, Store, and About menus
  const handleBundle = () => {
    setBundleDisplay(true);
    console.log(bundleDisplay);
  };

  const handleStore = () => {
    setStoreDisplay();
    console.log('Displaying Store');
  };

  const handleAbout = () => {
    setAboutDisplay(true);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItem,
        setCartItem,
        handleCartItem,
        cartDisplay,
        handleCartDisplay,
        addToWishlist,
        setAddToWishlist,
        wishlistCount,
        setWishlistCount,
        addTo,
        handleBundle,
        handleStore,
        handleAbout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
