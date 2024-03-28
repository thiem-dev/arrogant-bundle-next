const CriticalReceptionItem = ({ criticalReception }) => {
    return (
        <div>
            <q>{criticalReception.comment}</q>
            <p>{criticalReception.stars.stars} / {criticalReception.stars.max}</p>
            <p><span>{criticalReception.author}</span><span>{criticalReception.company}</span></p>
        </div>
    )
}

export default CriticalReceptionItem