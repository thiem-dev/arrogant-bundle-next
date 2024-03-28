import ProductDetailsPlatforms from './ProductDetailsPlatforms.jsx';
import ProductDetailsPublisher from './ProductDetailsPublisher.jsx';
import ProductDetailsLinks from './ProductDetailsLinks.jsx';
import ProductDetailsOperatingSystems from './ProductDetailsOperatingSystems.jsx';
import ProductDetailsSystemRequirements from './ProductDetailsSystemRequirements.jsx';
import ProductDetailsRating from './ProductDetailsRating.jsx';

const ProductDetails = ({
  platforms,
  publisher,
  operatingSystems,
  links,
  rating,
}) => {
  return (
    <>
      <div className="product-details-background ctn">
        <div className="product-details-content">
          <div>
            <ProductDetailsPlatforms platforms={platforms} />
            <ProductDetailsOperatingSystems
              operatingSystems={operatingSystems}
            />
          </div>
          <div>
            <ProductDetailsPublisher publisher={publisher} />
            <ProductDetailsSystemRequirements />
          </div>
          <div>
            <ProductDetailsLinks links={links} />
            <ProductDetailsRating rating={rating} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
