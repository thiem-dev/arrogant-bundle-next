const ProductDetailsLinks = ({ links }) => {
    return (
        <div className="product-details-links">
            <h2 className="product-details-title">LINKS</h2>
            {Object.keys(links).map((key, index) => {
                return <a className="product-details-details" href={links[key]} key={index}>{key}</a>
            })}
        </div>
    )
}

export default ProductDetailsLinks