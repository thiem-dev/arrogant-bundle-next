import { useState, useEffect } from "react"
import FooterLanguagesDropdown from "./FooterLanguagesDropdown";
import { FaGlobe } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";


const FooterLanguage = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("English")
    // Change language selection in the language dropdown
    const changeLanguage = (language) => {
        setCurrentLanguage(language);
    }
    //Dropdown functionality
    const handleButtonClick = (e) => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
        <div className="language-dropdown-container">
            <button onClick={handleButtonClick} className="js-language-button">
                <div className="js-language-container">
                <div className="globe-div"><FaGlobe className={`globe ${dropdownVisible ? 'globe-flip' : ''}`}/></div>
                Language: {currentLanguage} 
                </div>
                <div className="arrow-div"><RiArrowDownSFill className={`arrow ${dropdownVisible ? 'arrow-flip' : ''}`}/></div>
                
            </button> 
            <div className={`language-container ${dropdownVisible ? 'open' : ''}`}>
                <FooterLanguagesDropdown changeLanguage={changeLanguage} />
            </div>
        </div>
        </>
    )
}

export default FooterLanguage