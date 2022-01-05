import "./App.css";
import {useEffect, useState} from "react";
import {PeopleApi} from "./services/api";
import {AddPerson} from "./components/AddPerson";
import {People} from "./components/People";
import {Container} from "./ui/Container";
import {CardContent, Card, Content} from "./ui/Card";

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
        <Container className="mt-4">
            <Card className="mb-4">
                <CardContent>
                    <Content>
                        <div>Add New Person</div>
                        <AddPerson onAdded={addPerson} />
                    </Content>
                </CardContent>
            </Card>
            <People people={people} onDelete={deletePerson} onUpdate={updatePerson} />
        </Container>
    );
}

export default App;
