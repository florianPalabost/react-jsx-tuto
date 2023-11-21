import { useState } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import MyButton from '../MyButton';

export default function Tutos() {
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

    // Controlled field
    // const [name, setName] = useState('');

    // // in react the change event is called after input value changed whereas the "basic" event onChange is called on focus out
    // const handleOnChangeName = (event) => {
    //     // called controled field
    //     setName(event.target.value);
    // };

    // const reset = () => {
    //     setName('');
    // };

    // with this method we don't have to re render the component on each change => uncontrolled field
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData);
        // setName('');
    };

    const [isCGUAccepted, setIsCGUAccepted] = useState(false);

    return (
        <>
            <h1>JSX</h1>
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
            <hr />
            <h1>Formulaires</h1>
            <form onSubmit={handleSubmit}>
                {/* with value only the input will be readonly (& with an error) => need to add onChange event => Controlled field => only if want to display the input value directly */}
                {/* <input type="text" name="name" value={name} onChange={handleOnChangeName} /> */}
                <input type="text" name="name" />
                {/* <button onClick={reset} type="button">
            Reset
        </button> */}
                <button>Submit</button>
            </form>
            {/* {name && <p>name : {name}</p>} */}
            <hr />
            <h1>Flux Données</h1>
            <MyBtn onClick={incrementCounter} disabled={counter === 10}>
                Custom Increment
            </MyBtn>
            <Box>
                <h3>Storybook</h3>
                <CGUCheckbox checked={isCGUAccepted} onChecked={setIsCGUAccepted} />
                <br />
                <MyButton
                    onClick={incrementCounter}
                    disabled={!isCGUAccepted}
                    sx={{ marginTop: 2, border: '1px solid black' }}
                >
                    Test Inc
                </MyButton>
            </Box>
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

function MyBtn({ onClick, children, disabled }) {
    return (
        <button disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

function CGUCheckbox({ checked, onChecked }) {
    return (
        <>
            <label>
                <input type="checkbox" checked={checked} onChange={(e) => onChecked(e.target.checked)} />
                Accept the CGU
            </label>
        </>
    );
}
