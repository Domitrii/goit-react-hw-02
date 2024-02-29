import Feedback from './components/Feedback/Feedback'
import Description from './components/Description/Description'
import Option from './components/Option/Option'
import { useEffect, useState } from 'react'
import Notification from './components/Feedback/Notification'

function App() {
  const [clicks, setClicks] = useState(() => {
const savedFeedback = window.localStorage.getItem('saved-feedback')
if(savedFeedback !== null){
  return JSON.parse(savedFeedback)
}
    return {good: 0, neutral: 0, bad: 0}
  })

useEffect (() => {
  localStorage.setItem('saved-feedback', JSON.stringify(clicks))
},[clicks])

  function updateFeedback(feedbackType){
      setClicks(prevFeedback => ({
        ...prevFeedback,[feedbackType]: prevFeedback[feedbackType]+ 1
      }))
  }

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad

  const positive = Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100)


  function resetFeedback(){
   setClicks({
    good: 0,
    neutral: 0,
    bad: 0
   }) 
  }

  
  return (
    <>
    <Description />
    <Option updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
    { totalFeedback < 1 ? <Notification /> : <Feedback answers={clicks} total={totalFeedback} positive={positive} />}
    </>
  )
}

export default App
