import Image from 'next/image';
const nextMedia = `/media`;

const ProductDetailsPlatforms = ({ platforms }) => {
  return (
    <div className="product-details-platforms">
      <h2 className="product-details-title">PLATFORM</h2>
      {platforms.map((platform, index) => {
        return (
          <Image
            className="product-details-details"
            src={nextMedia + platform.image_link}
            alt={platform.name}
            key={index}
            width={89} //placeholder height n width
            height={28}
          />
        );
      })}
    </div>
  );
};

export default ProductDetailsPlatforms;
