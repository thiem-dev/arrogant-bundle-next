'use client';

// import Image from 'next/image';
// import styles from './page.module.css';

import Banner from './components/Banner';
import CurtainModal from './components/CurtainModal';
import Navbar from './components/Navbar';
import Hero from './components/AppContent/Hero';
import ProductDetails from './components/AppContent/ProductDetails';
import ProductDescription from './components/AppContent/ProductDescription';
import CriticalReception from './components/AppContent/CriticalReception';
import PopularCarousel from './components/AppContent/PopularCarousel/PopularCarousel';
import SystemReq from './components/AppContent/SystemReq';
import Footer from './components/Footer';
import ShoppingCartContext from './components/ShoppingCartContext/ShoppingCartContext.mjs';
import { useState, useEffect, useContext } from 'react';

export default function Home() {
  const { cartDisplay, bundleDisplay } = useContext(ShoppingCartContext);

  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('./api/product');
      if (response.ok) {
        const productData = await response.json(); //Extract JSON from Nextjs response - doesn't automatically become available like other apis
        setProductData(productData);
        console.log(productData);
      }
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (!isLoading) {
    return (
      <>
        {cartDisplay && (
          <CurtainModal
            productData={productData}
            setProductData={setProductData}
          />
        )}
        <Banner />
        <Navbar />
        <div className="body ctn">
          <div className="app-content ctn">
            <Hero productData={productData} />
            <ProductDetails
              platforms={productData.platforms}
              publisher={productData.publisher}
              operatingSystems={productData.operating_systems}
              links={productData.links}
              rating={productData.rating}
            />
            <ProductDescription />
            <CriticalReception
              criticalReceptions={productData.critical_receptions}
            />
            <PopularCarousel productData={productData} />
            <SystemReq systemRequirements={productData.system_requirements} />
          </div>
          {/* end app-content ctn */}
        </div>
        {/* end body ctn */}
        <Footer />
      </>
    );
  } else {
    <h1>Page Loading...</h1>;
  }
}
