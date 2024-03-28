
const FooterLanguagesDropdown = ( {changeLanguage} ) => {
    const handleClick = (e) => {
        if(e.target.id) {
            changeLanguage(e.target.id);
        }
    }
    return (
        <>
        <div className="language-choice-container">
            <button id="Français" className="js-change-language" onClick={handleClick}>Français</button>

            <button id="English" data-locale="en" className="js-change-language" onClick={handleClick}>English</button>
            
            <button id="简体中文" data-locale="zh_CN" className="js-change-language" onClick={handleClick}>简体中文</button>

            <button id="Deutsch" data-locale="de" className="js-change-language" onClick={handleClick}>Deutsch</button>

            <button id="Italiano" data-locale="it" className="js-change-language" onClick={handleClick}>Italiano</button>

            <button id="Español" data-locale="es" className="js-change-language" onClick={handleClick}>Español</button>
        </div>
        </>
    )
}

export default FooterLanguagesDropdown
