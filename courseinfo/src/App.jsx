const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>{props.course.parts[0].name}: {props.course.parts[0].exercises}</p>
        <p>{props.course.parts[1].name}: {props.course.parts[1].exercises}</p>
        <p>{props.course.parts[2].name}: {props.course.parts[2].exercises}</p>
      </div>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <div>
        Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </div>
    )
  }

 

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App

/* const Content = () => {
    return (
      <div>
        <p>
          {part1}:{exercises1}
        </p>
        <p>
          {part2}:{exercises2}
        </p>
        <p>
          {part3}:{exercises3}
        </p>
      </div>
    )
  }


/*
const Content = (props) => {
  console.log(props)
}
/*

const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
  */
 