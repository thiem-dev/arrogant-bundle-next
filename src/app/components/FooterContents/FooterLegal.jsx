import { LuDot } from "react-icons/lu";

const FooterLegal = () => {
    return (
        <>
        <div className="legal-links">
            <ul className="legal-links-list">
            <li><a href="https://www.humblebundle.com/terms" className="links">Terms of Service</a></li>
            <li className="dot"><LuDot /></li>
            <li><a href="https://www.humblebundle.com/privacy"  className="links">Privacy Policy</a></li>
            </ul>
            <ul className="legal-links-list">
            <li><a href="https://www.humblebundle.com/cookie-policy" className="links" >Cookie Policy</a></li>
            <li className="dot"><LuDot /></li>
            <li><a href="https://www.humblebundle.com/legal" className="links">Legal Notices</a></li>
            </ul>
            <ul className="legal-links-list">
            <li>
                <a href="https://www.humblebundle.com/store/super-mario-rpg-switch?hmb_source=humble_home&hmb_medium=product_tile&hmb_campaign=mosaic_section_2_layout_index_2_layout_type_carousel_tile_index_1_c_supermariorpg_switch_storefront#" 
                className="links add" >
                <img src="https://cdn.ziffstatic.com/pub/icong1.png" /> AdChoices </a> 
            </li>
            <li className="dot"><LuDot /></li>
            <li><a href="https://dsar.humblebundle.com/" className="links">Do Not Sell My Personal Information</a></li>
            </ul>
        </div>
        </>
    )
}

export default FooterLegal