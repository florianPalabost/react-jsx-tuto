import { useState } from 'react';
import './App.css';

function App() {
    let showText = true;
    const todos = ['todo 1', 'todo 2', 'todo 3'];

    // will re render on update of the state (= call to setCounter)
    const [counter, setCounter] = useState(0);
    const [person, setPerson] = useState({
        name: 'Toto',
        age: 18
    });

    console.log('rendered');
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const incrementAge = () => {
        // Will not work because person is  and react will not detect changes (here will works because of previous setCounter)
        // person.age++;
        // setPerson(person);

        // need to redefine a person & update the property
        setPerson({ ...person, age: person.age + 1 });
    };

    return (
        <>
            We can define a custom component
            <Hello name="Toto" color="red" />
            {/* display 'you found me' if showText is true */}
            {showText && <p>you found me !</p>}
            {/* Ternary operator is also possible */}
            {showText ? <p>showText is true</p> : <p>showText is false</p>}
            <h2>Display a list of todos</h2>
            <ul>
                {/* Need to set key attribute that should be unique on each array item (don't use index) this key is used to
                avoid the recreation of the node in the DOM if the item is moved */}
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
            <h2>A component with children</h2>
            <ChildComponentCustom>
                <p>Child component</p>
            </ChildComponentCustom>
            <hr />
            <h1>Use State</h1>
            <div>
                <p>Compteur: {counter}</p>
                <p>Person age : {person.age}</p>
                <button onClick={incrementCounter}>Increment Counter {counter}</button>
                <button onClick={incrementAge}>Increment Age</button>
            </div>
        </>
    );
}

// we can have props object which have the different properties of the component or
// use the destructuring syntax to directly have the properties
function Hello({ name, color }) {
    const handleClick = () => {
        alert('you found me !');
    };

    return (
        <h1 onClick={handleClick} style={{ color }}>
            Hello {name} : Click to discover
        </h1>
    );
}

// the slot(=children) is accesibled as props.children or children if destructured
function ChildComponentCustom({ children }) {
    return <div className="child">{children}</div>;
}

export default App;
