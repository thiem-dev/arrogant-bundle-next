const SystemReq = ({ systemRequirements }) => {

    return (
        <div className="system-req-background">
            <div id="system-req" className="system-req" dangerouslySetInnerHTML={{ __html: htmlDecode(systemRequirements) }}></div>
        </div>
    )
}

const htmlDecode = (systemRequirements) => {
    systemRequirements = "<h2>SYSTEM REQUIREMENTS</h2>" + systemRequirements
    return replaceAll(systemRequirements, "\n", "</br>")
}

function replaceAll(originalString, search, replacement) {
    let index = originalString.indexOf(search);
    while (index !== -1) {
        originalString = originalString.substring(0, index) + replacement + originalString.substring(index + search.length);
        index = originalString.indexOf(search, index + replacement.length);
    }
    return originalString;
}

export default SystemReq