const ProductDetailsPlatforms = ({ platforms }) => {
    return (
        <div className="product-details-platforms">
            <h2 className="product-details-title">PLATFORM</h2>
            {platforms.map((platform, index) => {
                return <img className="product-details-details" src={`https://arrogant-bundle.onrender.com${platform.image_link}`} alt={platform.name} key={index} />
            })}
        </div>
    )
}

export default ProductDetailsPlatforms