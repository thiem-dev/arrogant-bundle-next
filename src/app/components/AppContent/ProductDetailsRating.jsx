import Image from 'next/image';
const nextMedia = `/media`;

const ProductDetailsRating = ({ rating }) => {
  return (
    <div className="product-details-rating">
      <Image
        src={nextMedia + rating.image_link}
        alt={rating.rating}
        width={65}
        height={90}
      />
      <ul>
        {rating.reasons.map((reason, index) => {
          return (
            <li className="product-details-rating-reason" key={index}>
              {reason}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductDetailsRating;
