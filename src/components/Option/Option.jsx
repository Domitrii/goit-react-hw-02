import Notification from "../Feedback/Notification"

function Option({updateFeedback, totalFeedback, resetFeedback}) {
  return (
    <div className="buttonStatic">
        <button className="buttonAnswer" onClick={() => updateFeedback("good")}>Good</button>
        <button className="buttonAnswer" onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button className="buttonAnswer" onClick={() => updateFeedback("bad")}>Bad</button>
        {totalFeedback > 0 && (<button className="buttonReset" onClick={() => resetFeedback()}>Reset</button>)}
    </div>
  )
}

export default Option