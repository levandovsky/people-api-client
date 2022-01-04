import {useEffect, useState} from "react";
import "./App.css";
import {PeopleApi} from "./services/api";
import {Person} from "./components/Person";
import {AddPerson} from "./components/AddPerson";

function App() {
    const [people, setPeople] = useState();

    const fetchPeople = async () => {
        const p = await PeopleApi.all();
        setPeople(p);
    };

    useEffect(() => {
        fetchPeople();
    }, []);

    return (
        <div className="App">
            <AddPerson />

            {!people ? (
                <span>loading...</span>
            ) : (
                people.map((person) => (
                    <Person key={person._id} name={person.name} lastname={person.lastname} age={person.age} />
                ))
            )}
        </div>
    );
}

export default App;
