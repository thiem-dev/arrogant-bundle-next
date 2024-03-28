const ProductDetailsPublisher = ({ publisher }) => {
    return (
        <div className="product-details-publisher">
            <h2 className="product-details-title">PUBLISHER</h2>
            <a href={`https://www.humblebundle.com/store/search?publisher=${publisher}`} className="product-details-details">{publisher}</a>
        </div>
    )
}

export default ProductDetailsPublisher