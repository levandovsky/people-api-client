import "./App.css";
import {useEffect, useState} from "react";
import {PeopleApi} from "./services/api";
import {AddPerson} from "./components/AddPerson";
import {People} from "./components/People";

function App() {
    const [people, setPeople] = useState();

    const fetchPeople = async () => {
        // fetch people from api
        const p = await PeopleApi.all();

        // save fetched people to local state
        setPeople(p);
    };

    const addPerson = (person) => {
        setPeople((prevState) => [...prevState, person]);
    };

    const deletePerson = async (id) => {
        try {
            const {deletedPersonId} = await PeopleApi.delete(id);
            setPeople((prevState) => prevState.filter((person) => person._id !== deletedPersonId));
        } catch (e) {
            console.error(e);
        }
    };

    const updatePerson = (id, update) => {
        setPeople((prevState) =>
            prevState.map((person) => {
                if (person._id === id) return {...person, ...update};

                return person;
            })
        );
    };

    // fetch people list on component load
    useEffect(() => {
        fetchPeople();
    }, []);

    return (
        <div className="app">
            <AddPerson onAdded={addPerson} />
            <People people={people} onDelete={deletePerson} onUpdate={updatePerson} />
        </div>
    );
}

export default App;
