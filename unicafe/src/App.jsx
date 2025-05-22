import { useState } from 'react'



const StatisticLine = ({text, value}) => {
  return(
     <tr>
      <td>{text}</td> 
      <td>{value}</td> 
     </tr>
      
    )
  }

const Button = ({handle, text}) => {
  return(
  
      <button onClick={handle}>{text}</button>

  )
}

const Statistic = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = all === 0 ? 0 : ((good - bad)/all)
  const positive = all === 0 ? 0 : ((good/all)*100)

if (all > 0){
  return (
<table>
  <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
  </tbody>
</table>
  )
}
  return(
  <h1>no stats given m8</h1>
  )


}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => setGood(good +1)
  const handleNeutral = () => setNeutral(neutral +1)
  const handleBad = () => setBad(bad +1)

  return (
    <div> 
      <h1>Give feedback</h1>
      <Button handle={handleGood} text="good" />
      <Button handle={handleNeutral} text="neutral" />
      <Button handle={handleBad} text="bad" />
      <h1>Statistic</h1>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App