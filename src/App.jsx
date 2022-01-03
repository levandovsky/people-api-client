import "./App.css";
import {Person} from "./components/Person";

function App() {
    const people = [
        {
            name: "John",
            lastname: "Johnson",
            age: 16,
        },
        {
            name: "Dave",
            lastname: "Johnson",
            age: 30,
        },
        {
            name: "John",
            lastname: "Johnson",
            age: 25,
        },
        {
            name: "John",
            lastname: "Johnson",
            age: 26,
        },
    ];

    const rendered = people.map((person, id) => (
        <Person key={id} name={person.name} lastname={person.lastname} age={person.age} />
    ));

    return <div className="App">{rendered}</div>;
}

export default App;
