import nsImg from '../../../../public/media/images/operating-systems/nintendo-switch.png';
import Image from 'next/image';

// The image was not update in the json data, so it ha to be imported
const ProductDetailsOperatingSystems = ({ operatingSystems }) => {
  return (
    <div className="product-details-operating-systems">
      <h2 className="product-details-title">OPERATING SYSTEM</h2>
      {operatingSystems.map((operatingSystem, index) => {
        return (
          <Image
            className="product-details-details"
            src={nsImg}
            alt={operatingSystem.name}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ProductDetailsOperatingSystems;
