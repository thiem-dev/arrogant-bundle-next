import CriticalReceptionCommentItem from "./CriticalReceptionCommentItem.jsx"
import CriticalReceptionStarsItem from "./CriticalReceptionStarsItem.jsx"
import CriticalReceptionAuthorItem from "./CriticalReceptionAuthorItem.jsx"


const CriticalReception = ({ criticalReceptions }) => {

    return (
        <>
            <div className="critical-reception-background">
                <div className="critical-reception">
                    <h2 className="critical-reception-heading">CRITICAL RECEPTION</h2>
                    <div className="critical-reception-reviews-container">
                        <div className="critical-reception-comment-container">
                            {criticalReceptions.map((criticalReception, index) => {
                                return <CriticalReceptionCommentItem comment={criticalReception.comment} key={index} />
                            })}
                        </div>
                        <div className="critical-reception-stars-container">
                            {criticalReceptions.map((criticalReception, index) => {
                                return <CriticalReceptionStarsItem stars={criticalReception.stars} key={index} />
                            })}
                        </div>
                        <div className="critical-reception-author-company-container">
                            {criticalReceptions.map((criticalReception, index) => {
                                return <CriticalReceptionAuthorItem author={criticalReception.author} company={criticalReception.author} key={index} />
                            })}
                        </div>
                    </div>
                    <p>Reviews provided by <a href="https://opencritic.com/game/15131/super-mario-rpg">OpenCritic</a></p>
                </div>
            </div>
        </>
    )
}

export default CriticalReception