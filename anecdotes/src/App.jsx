import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))


  const Vote = () => {
    function handleVote() {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
    }
    return (
      <p><button onClick={handleVote}>vote</button></p>
    )
  }


  const Skip = () => {
    function handleClick() {
      console.log("button clicked")
      setSelected(Math.floor(Math.random() * anecdotes.length))    }
    return (
      <p><button onClick={handleClick}>Next anecdote</button></p>
      
    )
  }

  const First = () => {

    const maxvotes = Math.max(...votes)
    const indexmaxvotes = votes.indexOf(maxvotes)

    return (
      <div>
        <p>the most voted anecote is:</p>
        <p>{anecdotes[indexmaxvotes]}</p>
        <p>with {maxvotes} points</p>
      </div>
    )
  }


  return (
    <div>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Skip></Skip>
      <Vote></Vote>
      <First></First>

    </div>

  )
}



export default App

