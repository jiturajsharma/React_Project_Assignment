import './App.css'
import ArrayPassInStack from './ArrayPassInState';
import ConditionalRendering from './conditionalRendering';
import Counter from './Counter';

function App() {

  return (
    <>
          <h1>JITU RAJ SHARMA</h1>
          <Person name="Jitu raj sharma" age="25" />
          <Button text="Click me!" onClick={() => alert("Button Clicked") }></Button>
          <Header title="Welcome to my website"></Header>
          <List items={['apple', 'banana', 'orange']} />
          <Counter /> <br />
          <ConditionalRendering/> <br />
          <ArrayPassInStack />

    </>
  )
}

function Person(props) {
  return (
    <p>
      {props.name} is {props.age} years old.
    </p>
  );
}

function Button(props){
  return(
      <>
        <button onClick={props.onClick}>{props.text}</button>
      </>
  )
}

// create a component named "Header that takes one props "title". The component should display a header element with the given title.

  function Header(props){
    return <h1>{props.title}</h1>
  }

// Create a  component named "List" that takes one prop- "items". The component should display an unordered list element with the given list items.

function List(props) {
  const listItems = props.items.map((item) =>
    <li key={item}>{item}</li>
  );
  
  return <ul>{listItems}</ul>;
}

export default App
