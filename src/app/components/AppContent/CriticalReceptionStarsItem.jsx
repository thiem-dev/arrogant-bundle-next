const CriticalReceptionStarsItem = ({ stars }) => {
    return <p className="critical-reception-stars">{stars.stars} / {stars.max}</p>
}

export default CriticalReceptionStarsItem