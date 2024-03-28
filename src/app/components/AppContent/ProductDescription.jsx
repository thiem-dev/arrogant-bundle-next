import { useState } from "react"
import { RiArrowDownSFill } from "react-icons/ri";

const ProductDescription = () => {
const [showMore, setShowMore] = useState(false);

const handleClick = (e) => {
    setShowMore(!showMore);
}

    return (
    <>
        <div className='product-description ctn'>
            <div className="product-description-content">
                <div className="column-view full  ">
                <div className="disclaimer-view js-admin-edit">
                <strong><em>Super Mario RPG</em> is provided via Nintendo eShop Download Code.</strong>
                </div>
                <div className="basic-property-view">
                    <h2 className="property-title">Description</h2>
                <div className="js-property-value property-value">
                <div className={`property-view description-view expandable ${!showMore ? 'collapsed' : ''} js-admin-edit expanded`} >
                <div className={`js-property-content property-content ${!showMore ? 'collapsed' : ''}`}>
                    <p>Mario, Bowser, and Peach partner up to repair the wish-granting Star Road in this approachable role-playing adventure</p>
                    <p> Team up with an oddball group of heroes to save Star Road and stop the troublemaking Smithy Gang. This colorful RPG has updated graphics and cinematics that add even more charm to the unexpected alliance between Mario, Bowser, Peach, and original characters Mallow and Geno Enter (or revisit) this world of eccentric allies and offbeat enemies in an RPG for everyone.</p>
                    <p> Jump through a colorful world and give attacks some extra oomph in battle!</p>
                    <p> Explore the vibrant environments with your party and jump towards your next goal! Run into monsters to enter turn-based battles with your party of three. Press the button at the right time for a satisfying dose of extra damage or helpful guard.</p>
                </div>
                <div className={`toggle-div ${!showMore ? 'collapsed' : ''}`}>
                    <a className="js-read-more read-more-toggle" onClick={handleClick}>Read more about Super Mario RPG<RiArrowDownSFill className="arrow"/></a>
                    <a className="js-show-less show-less-toggle" onClick={handleClick}>Show less about Super Mario RPG<RiArrowDownSFill className="arrowflipped"/></a>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default ProductDescription