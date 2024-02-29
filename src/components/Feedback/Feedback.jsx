
function Feedback({answers , total, positive}) {
  return (
    <>
    <p>Good: {answers.good}</p>
    <p>Neutral: {answers.neutral}</p>
    <p>Bad: {answers.bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {positive}%</p>
    </>
  )
}

export default Feedback