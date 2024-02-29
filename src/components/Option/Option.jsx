import css from './Option.module.css'

function Option({updateFeedback, totalFeedback, resetFeedback}) {
  return (
    <div className={css.buttonStatic}>
        <button className={css.buttonAnswer} onClick={() => updateFeedback("good")}>Good</button>
        <button className={css.buttonAnswer} onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button className={css.buttonAnswer} onClick={() => updateFeedback("bad")}>Bad</button>
        {totalFeedback > 0 && (<button className={css.buttonReset} onClick={() => resetFeedback()}>Reset</button>)}
    </div>
  )
}

export default Option