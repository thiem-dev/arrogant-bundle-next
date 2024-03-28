const ProductDetailsRating = ({ rating }) => {
    return (
        <div className="product-details-rating">
            <img src={`https://arrogant-bundle.onrender.com${rating.image_link}`} alt={rating.rating} />
            <ul>
                {rating.reasons.map((reason, index) => {
                    return <li className="product-details-rating-reason" key={index}>{reason}</li>
                })}
            </ul>
        </div>
    )
}

export default ProductDetailsRating