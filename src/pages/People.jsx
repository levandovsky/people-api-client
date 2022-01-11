import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Person} from "../components/Person";
import {useAuth} from "../hooks/useAuth";
import {PeopleApi} from "../services/people-api";

export const People = () => {
    const [people, setPeople] = useState();
    const {state} = useLocation();
    const {token} = useAuth();

    const fetchPeople = async () => {
        // fetch people from api
        const p = await PeopleApi.all(token);

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

    // check if person obj was added, if yes, save it to the array
    useEffect(() => {
        if (!state) return;

        if (state.added) {
            addPerson(state.added);
        }
    }, [state]);

    if (!people) {
        return <span>loading...</span>;
    }

    return people.map((person) => (
        <Person
            key={person._id}
            person={person}
            onDelete={() => {
                deletePerson(person._id);
            }}
            onUpdate={(update) => {
                updatePerson(person._id, update);
            }}
        />
    ));
};
