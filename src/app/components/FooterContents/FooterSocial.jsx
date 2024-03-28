import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaBlog } from "react-icons/fa";

const FooterSocial = () => {
    return (
        <>
        <div className="socialcontainer">
            <a href="https://www.facebook.com/humblebundle/"  className="links logo"><TiSocialFacebook /></a>
            <a href="https://twitter.com/humble"  className="links logo"><TiSocialTwitter /></a>
            <a href="https://www.instagram.com/humblebundle"  className="links logo"><TiSocialInstagram /></a>
            <a href="https://blog.humblebundle.com/"  className="links logo"><FaBlog /></a>
        </div>
        </>
    )
}

export default FooterSocial